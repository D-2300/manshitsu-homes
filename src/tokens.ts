// ============================================================================
// 満室デザインLABO — Design Tokens
// ============================================================================
// ブランド: 紫（M）+ ゴールド（C.gold）
// ベース構造は kiokuso.jp/src/shared/design-tokens.ts と揃えつつ、
// 満室独自のカラーパレット（M）を保持。
// ============================================================================

// --- Brand palette: 満室パープル（階調） ---
export const M = {
  bg:        "#F0E6ED",
  light:     "#C09AB5",
  mid:       "#9A6E8E",
  main:      "#6B4066",
  dark:      "#442940",
} as const;

// --- Common palette: ニュートラル + アクセント ---
export const C = {
  gold:        "#C9A84C",
  goldLight:   "#D4B96A",
  goldPale:    "#F5ECD7",
  warmWhite:   "#FAF8F3",
  white:       "#FFFFFF",
  textDark:    "#2C2A26",
  textMid:     "#5A574F",
  warmGray:    "#8A8578",
  accentRed:   "#C44D3F",
  accentGreen: "#2D8A5E",
  lineGreen:   "#06C755",
  // sub/mute エイリアス（kiokuso互換）
  sub:         "#666666",
  mute:        "#999999",
  // 罫線・仕切り
  border:      "#E0DDD5",
  borderLight: "#EDEAE3",
} as const;

// --- Typography ---
export const typography = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontFamilySerif: "'Cormorant Garamond', serif",

  // 本文
  body:       { size: "14px",               weight: 400, lineHeight: 1.8 },
  bodyLarge:  { size: "clamp(14px,3vw,16px)", weight: 400, lineHeight: 1.9 },
  bodySmall:  { size: "13px",               weight: 400, lineHeight: 1.75 },

  // セクションラベル（EN/JA）
  sectionEn:  { size: "13px", weight: 300, letterSpacing: "0.2em" },
  sectionJa:  { size: "12px", weight: 400, letterSpacing: "0.05em" },

  // 小ラベル（満室HPでよく使う「11px / 0.2em / M.mid」パターン）
  overline:   { size: "11px", weight: 600, letterSpacing: "0.2em" },

  // 見出し
  h1:         { size: "clamp(28px, 6vw, 44px)", weight: 700, lineHeight: 1.5 },
  h2:         { size: "clamp(22px, 5vw, 32px)", weight: 700, lineHeight: 1.6 },
  h3:         { size: "clamp(18px, 4vw, 24px)", weight: 700, lineHeight: 1.7 },
  subheading: { size: "16px",                   weight: 500, lineHeight: 1.6 },

  // ヒーロー等のディスプレイ
  display:    { weight: 900, letterSpacing: "0.02em", lineHeight: 1.3 },
  displayThin:{ weight: 300, letterSpacing: "0.25em" },
} as const;

// --- Spacing ---
export const spacing = {
  pagePadding: "20px",
  section: {
    xs: "32px",
    sm: "48px",
    md: "64px",
    lg: "80px",
    xl: "96px",
  },
  contentMax: {
    narrow: "600px",
    normal: "720px",
    wide:   "960px",
  },
  lineHeight: { lp: 1.8, hp: 1.9 },
  goldDividerHeight: "40px",
} as const;

// --- Radius / borders ---
export const radius = {
  sm: "6px",
  md: "8px",
  lg: "14px",
  pill: "100px",
} as const;

// --- Transitions ---
export const transitions = {
  base: "0.2s ease",
  slow: "0.6s ease-out",
} as const;

// --- Z-index scale ---
export const zIndex = {
  nav: 200,
  overlay: 300,
  floatingCTA: 150,
  modal: 400,
} as const;

// ============================================================================
// 外部リンク・連絡先
// ============================================================================

// 満室デザインLABO専用LINE公式アカウント（@074uzmls）
export const LINE_URL = "https://lin.ee/Qx59ZkVE";
// TODO: 電話番号は新eSIM取得後に差し替え（現在は記憶荘と共通）
export const TEL = "08069003314";
export const TEL_DISPLAY = "080-6900-3314";
