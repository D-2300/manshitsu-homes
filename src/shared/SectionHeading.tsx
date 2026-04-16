import { C, M, typography } from "../tokens";

interface SectionHeadingProps {
  en: string;
  ja?: string;
  align?: "center" | "left";
  dark?: boolean;
  /** 下線（32px gold）を出すか。デフォルト true */
  underline?: boolean;
  marginBottom?: number | string;
}

/**
 * セクション見出し（EN + JA + goldライン）
 * 満室ブランド版: EN は M.mid / JA は warmGray / dark=true で白系
 */
export default function SectionHeading({
  en,
  ja,
  align = "center",
  dark = false,
  underline = true,
  marginBottom = 40,
}: SectionHeadingProps) {
  const enColor = dark ? "rgba(255,255,255,0.7)" : M.mid;
  const jaColor = dark ? "rgba(255,255,255,0.45)" : C.warmGray;

  return (
    <div style={{ textAlign: align, marginBottom }}>
      <p
        style={{
          fontSize: typography.sectionEn.size,
          fontWeight: 600,
          letterSpacing: typography.sectionEn.letterSpacing,
          color: enColor,
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        {en}
      </p>
      {ja && (
        <p
          style={{
            fontSize: typography.sectionJa.size,
            fontWeight: typography.sectionJa.weight,
            letterSpacing: typography.sectionJa.letterSpacing,
            color: jaColor,
            marginTop: 6,
            marginBottom: 0,
          }}
        >
          {ja}
        </p>
      )}
      {underline && (
        <div
          style={{
            width: 32,
            height: 1,
            background: C.gold,
            margin: align === "center" ? "12px auto 0" : "12px 0 0",
          }}
        />
      )}
    </div>
  );
}
