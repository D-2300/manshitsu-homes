import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========== Routes to prerender ==========
// 変更時はこのリストを更新してください。動的ルート（/works/:slug, /articles/:slug）は
// data/works.ts と data/articles.ts から slug を抽出します。

async function getDynamicRoutes() {
  // works.ts と articles.ts から slug を抽出
  const worksSrc = fs.readFileSync(path.join(__dirname, "src/data/works.ts"), "utf-8");
  const articlesSrc = fs.readFileSync(path.join(__dirname, "src/data/articles.ts"), "utf-8");

  const slugRe = /slug:\s*["']([^"']+)["']/g;
  const workSlugs = [...worksSrc.matchAll(slugRe)].map((m) => m[1]);
  const articleSlugs = [...articlesSrc.matchAll(slugRe)].map((m) => m[1]);

  return [
    ...workSlugs.map((s) => `/works/${s}`),
    ...articleSlugs.map((s) => `/articles/${s}`),
  ];
}

const STATIC_ROUTES = [
  "/",
  "/about",
  "/works",
  "/pricing",
  "/articles",
  "/privacy",
  "/tokushoho",
  "/guide/bukken",
  "/lp/bukken",
  "/lp/staging",
];

async function prerender() {
  const templatePath = path.join(__dirname, "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { render } = await import("./dist-server/entry-server.js");

  const dynamicRoutes = await getDynamicRoutes();
  const routes = [...STATIC_ROUTES, ...dynamicRoutes];

  for (const route of routes) {
    const appHtml = render(route);

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const filePath =
      route === "/"
        ? path.join(__dirname, "dist", "index.html")
        : path.join(__dirname, "dist", route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`Prerendered: ${route} → ${path.relative(__dirname, filePath)}`);
  }

  // server bundle は静的サイト配信には不要
  fs.rmSync(path.join(__dirname, "dist-server"), { recursive: true, force: true });

  console.log(`\nPrerender complete! (${routes.length} routes)`);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
