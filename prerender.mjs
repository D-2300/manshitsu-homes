import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://manshitsu.homes";
const SITE_NAME = "満室デザインLABO";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;

// ========== Per-route metadata ==========

const STATIC_META = {
  "/": {
    title: "満室デザインLABO｜物件探しから手伝う、宮城の内装屋",
    description:
      "物件を買う前から相談できる内装屋。宮城県全域のアパート投資に対応。非公開の物件情報、古物件の改修診断、バーチャルステージングを一気通貫で提供します。中間マージンなし、見積ズレなし。",
  },
  "/about": {
    title: `運営体制（KAI & KEN）｜${SITE_NAME}`,
    description:
      "元不動産仲介20年のKAIと大工歴20年超のKENが、物件探しから改修まで2人体制で伴走します。宮城県全域のアパート投資オーナー向け。",
  },
  "/works": {
    title: `施工事例｜${SITE_NAME}`,
    description:
      "宮城県内のアパート・マンション原状回復、アクセントクロス、バーチャルステージングの施工事例。費用・期間・ビフォーアフター写真を公開。",
  },
  "/pricing": {
    title: `料金目安｜${SITE_NAME}`,
    description:
      "原状回復・アクセントクロス・バーチャルステージングの料金目安。宮城県の相場とセットで、透明な見積ポリシーを掲載。",
  },
  "/articles": {
    title: `収益物件のお役立ち記事一覧｜${SITE_NAME}`,
    description:
      "宮城の収益物件投資・改修・空室対策に関する記事一覧。事例・コラム・SEO記事を23本以上掲載。",
  },
  "/privacy": {
    title: `プライバシーポリシー｜${SITE_NAME}`,
    description: "満室デザインLABOのプライバシーポリシー。",
  },
  "/tokushoho": {
    title: `特定商取引法に基づく表記｜${SITE_NAME}`,
    description: "満室デザインLABOの特定商取引法に基づく表記。",
  },
  "/guide/bukken": {
    title: `宮城で収益物件を買うときの完全ガイド｜${SITE_NAME}`,
    description:
      "宮城のアパート投資オーナー向け完全ガイド。非公開物件の動かし方・利回りの見極め・改修単価・出口戦略・戸建/DIY使い分けまで、1本にまとめました。",
  },
  "/lp/bukken": {
    title: "宮城の収益物件｜ネットに出ない非公開物件情報｜満室デザインLABO",
    description:
      "宮城県のアパート投資。ネットに出る前の非公開物件情報を、物件探しから手伝う内装屋がご紹介。中間マージンなし・見積ズレなし・一気通貫。",
  },
  "/lp/staging": {
    title: `バーチャルステージングLP｜${SITE_NAME}`,
    description:
      "空室の内見率を上げるバーチャルステージング。宮城県のアパート・マンション向け。1枚3,000円〜、24時間納品。",
  },
};

// ========== Data extraction from TS sources ==========

function extractField(block, field) {
  // Match single-quoted, double-quoted, or backtick strings. Stop at the matching delimiter.
  const re = new RegExp(`${field}:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`);
  const m = block.match(re);
  return m ? m[2] : null;
}

function parseArticles() {
  const src = fs.readFileSync(path.join(__dirname, "src/data/articles.ts"), "utf-8");
  const blocks = src.split(/\r?\n\s*\{\r?\n/).slice(1);
  const out = [];
  for (const raw of blocks) {
    const slug = extractField(raw, "slug");
    if (!slug) continue;
    out.push({
      slug,
      title: extractField(raw, "title"),
      metaDescription: extractField(raw, "metaDescription"),
      heroImage: extractField(raw, "heroImage"),
      date: extractField(raw, "date"),
    });
  }
  return out;
}

function parseWorks() {
  const src = fs.readFileSync(path.join(__dirname, "src/data/works.ts"), "utf-8");
  const blocks = src.split(/\r?\n\s*\{\r?\n/).slice(1);
  const out = [];
  for (const raw of blocks) {
    const slug = extractField(raw, "slug");
    if (!slug) continue;
    out.push({
      slug,
      name: extractField(raw, "name"),
      area: extractField(raw, "area"),
      type: extractField(raw, "type"),
      afterImg: extractField(raw, "afterImg"),
    });
  }
  return out;
}

// ========== Head injection ==========

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHead({ title, description, canonical, ogImage, ogType = "website" }) {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const img = escapeHtml(ogImage || DEFAULT_OG_IMAGE);
  const url = escapeHtml(canonical);
  return {
    title: t,
    description: d,
    url,
    img,
    ogType,
  };
}

function applyMeta(template, meta) {
  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${meta.description}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"[^>]*\/>/,
    `<link rel="canonical" href="${meta.url}" />`
  );

  html = html.replace(
    /<meta\s+property="og:title"[^>]*\/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"[^>]*\/>/,
    `<meta property="og:url" content="${meta.url}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*\/>/,
    `<meta property="og:image" content="${meta.img}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"[^>]*\/>/,
    `<meta property="og:type" content="${meta.ogType}" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*\/>/,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${meta.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[^>]*\/>/,
    `<meta name="twitter:image" content="${meta.img}" />`
  );

  return html;
}

async function prerender() {
  const templatePath = path.join(__dirname, "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { render } = await import("./dist-server/entry-server.js");

  const articles = parseArticles();
  const works = parseWorks();

  // Build full route -> meta map
  const routeMeta = new Map();

  for (const [route, m] of Object.entries(STATIC_META)) {
    routeMeta.set(route, {
      title: m.title,
      description: m.description,
      canonical: `${SITE_URL}${route === "/" ? "/" : route + "/"}`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }

  for (const a of articles) {
    const route = `/articles/${a.slug}`;
    routeMeta.set(route, {
      title: a.title ? `${a.title}｜${SITE_NAME}` : STATIC_META["/articles"].title,
      description: a.metaDescription || STATIC_META["/articles"].description,
      canonical: `${SITE_URL}${route}/`,
      ogImage: a.heroImage ? `${SITE_URL}${a.heroImage}` : DEFAULT_OG_IMAGE,
      ogType: "article",
    });
  }

  for (const w of works) {
    const route = `/works/${w.slug}`;
    const label = w.name
      ? `${w.name}｜${w.area || ""}${w.type ? " " + w.type : ""}`.trim()
      : "施工事例";
    routeMeta.set(route, {
      title: `${label}｜${SITE_NAME}`,
      description:
        `${w.area || "宮城県"}の${w.name || "施工"}事例。${w.type || ""}の施工内容・費用・ビフォーアフターを公開しています。`.replace(/\s+/g, " "),
      canonical: `${SITE_URL}${route}/`,
      ogImage: w.afterImg ? `${SITE_URL}${w.afterImg}` : DEFAULT_OG_IMAGE,
      ogType: "article",
    });
  }

  const routes = [...routeMeta.keys()];

  for (const route of routes) {
    const appHtml = render(route);
    const metaSpec = buildHead(routeMeta.get(route));

    let html = applyMeta(template, metaSpec);
    html = html.replace(
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

  fs.rmSync(path.join(__dirname, "dist-server"), { recursive: true, force: true });

  console.log(`\nPrerender complete! (${routes.length} routes with per-page meta)`);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
