/**
 * OGP画像を SVG → PNG で生成
 * サイズ: 1200×630px（Facebook/Twitter/LINE 標準）
 *
 * 使用: node scripts/generate-ogp.mjs
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");

/**
 * OGPテンプレート
 */
function ogpSvg({
  overline,
  titleL1,
  titleL2,
  subtitle,
  ctaLabel,
  bgGradTop = "#442940",
  bgGradBot = "#6B4066",
  accentColor = "#C9A84C",
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradTop}"/>
      <stop offset="100%" stop-color="${bgGradBot}"/>
    </linearGradient>
    <radialGradient id="spot" cx="70%" cy="30%" r="70%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="${accentColor}" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#spot)"/>

  <!-- top gold bar -->
  <rect width="1200" height="4" fill="${accentColor}"/>
  <!-- bottom gold bar -->
  <rect y="626" width="1200" height="4" fill="${accentColor}"/>

  <!-- Overline -->
  <text x="80" y="110" font-family="'Noto Sans JP', sans-serif" font-size="22" font-weight="500" fill="${accentColor}" letter-spacing="8">${overline}</text>

  <!-- Title Line 1 -->
  <text x="80" y="260" font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" font-size="68" font-weight="700" fill="#FFFFFF" letter-spacing="2">${titleL1}</text>

  <!-- Title Line 2 -->
  <text x="80" y="360" font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" font-size="80" font-weight="900" fill="${accentColor}" letter-spacing="3">${titleL2}</text>

  <!-- Subtitle -->
  <text x="80" y="440" font-family="'Noto Sans JP', sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.7)" letter-spacing="2">${subtitle}</text>

  <!-- CTA badge -->
  ${
    ctaLabel
      ? `<rect x="80" y="500" width="${ctaLabel.length * 28 + 60}" height="56" rx="28" fill="rgba(201,168,76,0.15)" stroke="${accentColor}" stroke-width="2"/>
  <text x="${110 + ctaLabel.length * 14}" y="537" text-anchor="middle" font-family="'Noto Sans JP', sans-serif" font-size="22" font-weight="700" fill="${accentColor}" letter-spacing="3">${ctaLabel}</text>`
      : ""
  }

  <!-- Brand mark (right side) -->
  <g transform="translate(1050, 540)">
    <line x1="-100" y1="-16" x2="100" y2="-16" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1"/>
    <text x="0" y="8" text-anchor="middle" font-family="'Noto Sans JP', sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" letter-spacing="3">満室デザインLABO</text>
    <text x="0" y="36" text-anchor="middle" font-family="'Noto Sans JP', sans-serif" font-size="13" font-weight="300" fill="rgba(255,255,255,0.5)" letter-spacing="4">manshitsu.homes</text>
  </g>
</svg>`;
}

const ogps = [
  {
    filename: "og-default",
    overline: "MIYAGI APARTMENT INVESTMENT",
    titleL1: "物件探しから手伝う",
    titleL2: "宮城の内装屋",
    subtitle: "収益物件 × 内装改修 × 客付け支援を一気通貫で",
    ctaLabel: "",
  },
  {
    filename: "og-bukken-lp",
    overline: "FREE NON-PUBLIC LISTINGS",
    titleL1: "宮城の収益物件",
    titleL2: "非公開物件情報",
    subtitle: "ネットに出る前の物件情報をLINEでお届け",
    ctaLabel: "LINEで受け取る",
  },
  {
    filename: "og-guide",
    overline: "FREE GUIDE",
    titleL1: "宮城のアパート投資",
    titleL2: "攻略ガイド",
    subtitle: "内装屋だから見える、物件選びの勝ち筋",
    ctaLabel: "無料で読む",
  },
];

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const config of ogps) {
    const svg = ogpSvg(config);
    const pngPath = path.join(OUT_DIR, `${config.filename}.png`);
    const webpPath = path.join(OUT_DIR, `${config.filename}.webp`);

    const svgBuffer = Buffer.from(svg);

    await sharp(svgBuffer, { density: 200 })
      .resize(1200, 630, { fit: "cover" })
      .png({ quality: 92, compressionLevel: 9 })
      .toFile(pngPath);

    await sharp(svgBuffer, { density: 200 })
      .resize(1200, 630, { fit: "cover" })
      .webp({ quality: 88 })
      .toFile(webpPath);

    const pngSize = (fs.statSync(pngPath).size / 1024).toFixed(0);
    const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(0);
    console.log(`✅ ${config.filename}: PNG ${pngSize}KB / WebP ${webpSize}KB`);
  }

  console.log("\nOGP画像生成完了。");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
