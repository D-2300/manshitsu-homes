import { C, M, typography } from "../tokens";

interface SectionHeadingProps {
  en: string;
  ja?: string;
  align?: "center" | "left";
  dark?: boolean;
  /** 下線（金色ライン）を出すか。デフォルト true */
  underline?: boolean;
  marginBottom?: number | string;
}

/**
 * セクション見出し（EN + JA + goldライン）
 * LP の CRAFTSMANSHIP スタイルに統一:
 *   両翼ヘアライン（グラデフェード）で EN を挟む
 *   JA はグレーの補助、下線は短い金ヘアライン
 */
export default function SectionHeading({
  en,
  ja,
  align = "center",
  dark = false,
  underline = true,
  marginBottom = 40,
}: SectionHeadingProps) {
  const enColor = dark ? "rgba(255,255,255,0.85)" : C.gold;
  const jaColor = dark ? "rgba(255,255,255,0.8)" : M.dark;
  const lineColor = dark ? "rgba(255,255,255,.3)" : "rgba(201,168,76,.45)";

  return (
    <div style={{ textAlign: align, marginBottom }}>
      {/* 両翼ヘアライン + EN ラベル（CRAFTSMANSHIP スタイル） */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: "12px",
          maxWidth: "420px",
          margin: align === "center" ? "0 auto 8px" : "0 0 8px",
        }}
      >
        {align === "center" && (
          <span
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${lineColor})`,
            }}
          />
        )}
        <span
          style={{
            fontSize: typography.sectionEn.size,
            fontWeight: 600,
            letterSpacing: ".3em",
            color: enColor,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {en}
        </span>
        <span
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(90deg, ${lineColor}, transparent)`,
          }}
        />
      </div>

      {ja && (
        <p
          style={{
            fontSize: "clamp(17px, 3.8vw, 22px)",
            fontWeight: 700,
            letterSpacing: ".03em",
            color: jaColor,
            margin: "0",
            lineHeight: 1.5,
          }}
        >
          {ja}
        </p>
      )}
      {underline && (
        <div
          style={{
            width: 40,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            margin: align === "center" ? "14px auto 0" : "14px 0 0",
          }}
        />
      )}
    </div>
  );
}
