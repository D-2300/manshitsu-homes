/**
 * SVG → PNG 変換スクリプト
 * LINE公式アカウントのリッチメニュー・ガイド表紙用
 *
 * 使用: node scripts/svg-to-png.mjs
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "docs", "line-setup-output");

const conversions = [
  {
    svg: "rich-menu.svg",
    png: "rich-menu.png",
    width: 2500,
    height: 1686,
    density: 300,
  },
  {
    svg: "guide-cover.svg",
    png: "guide-cover.png",
    width: 1200,
    height: 1800,
    density: 300,
  },
];

async function convert(config) {
  const svgPath = path.join(SRC_DIR, config.svg);
  const pngPath = path.join(SRC_DIR, config.png);

  if (!fs.existsSync(svgPath)) {
    console.error(`❌ Missing: ${config.svg}`);
    return;
  }

  const svgBuffer = fs.readFileSync(svgPath);

  await sharp(svgBuffer, { density: config.density })
    .resize(config.width, config.height, { fit: "cover" })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(pngPath);

  const stats = fs.statSync(pngPath);
  const sizeKB = (stats.size / 1024).toFixed(0);

  console.log(`✅ ${config.svg} → ${config.png} (${config.width}×${config.height}, ${sizeKB} KB)`);
}

async function main() {
  console.log("SVG → PNG 変換開始...\n");
  for (const config of conversions) {
    await convert(config);
  }
  console.log("\n完了しました。");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
