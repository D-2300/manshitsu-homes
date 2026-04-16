type LogoColor = "gold" | "gold-on-purple" | "mark-gold";
type LogoLayout = "mark" | "horizontal";

interface LogoProps {
  color?: LogoColor;
  layout?: LogoLayout;
  height?: number;
  centered?: boolean;
}

/**
 * 満室デザインLABO ロゴ。
 * public/images/ 配下のロゴ画像を参照。
 *  - mark-gold:        logo-manshitsu-mark-gold.webp
 *  - horizontal gold:  logo-manshitsu-h-gold.webp
 *  - horizontal gold-on-purple: logo-manshitsu-h-gold-on-purple.webp
 */
function getLogoSrc(color: LogoColor, layout: LogoLayout): string {
  if (layout === "horizontal") {
    if (color === "gold-on-purple") return "/images/logo-manshitsu-h-gold-on-purple.webp";
    return "/images/logo-manshitsu-h-gold.webp";
  }
  // mark
  return "/images/logo-manshitsu-mark-gold.webp";
}

export default function Logo({
  color = "gold",
  layout = "horizontal",
  height = 32,
  centered = false,
}: LogoProps) {
  const src = getLogoSrc(color, layout);
  return (
    <img
      src={src}
      alt="満室デザインLABO"
      style={{
        height,
        width: "auto",
        display: "block",
        objectFit: "contain",
        margin: centered ? "0 auto" : undefined,
      }}
    />
  );
}
