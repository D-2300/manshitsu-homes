import { M, C, typography, spacing, radius } from "../../tokens";
import { SectionHeading, ScrollFadeIn } from "../../shared";

export default function HPWhatWeDo() {
  return (
    <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
      <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto", textAlign: "center" }}>
        <ScrollFadeIn>
          <SectionHeading en="WHAT WE DO" ja="宮城のアパート投資 × 内装改修" />
          <p
            style={{
              fontSize: typography.bodyLarge.size,
              color: C.textMid,
              lineHeight: typography.bodyLarge.lineHeight,
              marginBottom: 8,
            }}
          >
            非公開のアパート投資物件情報と、<br />
            利回りを最大化する内装改修を提供しています。
          </p>
          <p
            style={{
              fontSize: typography.bodyLarge.size,
              color: C.textMid,
              lineHeight: typography.bodyLarge.lineHeight,
              marginBottom: 32,
            }}
          >
            入居後リフォーム・バーチャルステージング・改修診断を組み合わせて、<br />
            ボロ物件を儲かる物件に変えます。
          </p>

          {/* Price badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <div
              style={{
                padding: "14px 28px",
                border: `1px solid ${M.light}`,
                borderRadius: radius.md,
                background: "#fff",
              }}
            >
              <span style={{ fontSize: 13, color: C.textMid }}>改修費</span>{" "}
              <span style={{ fontSize: 18, fontWeight: 700, color: M.main }}>8.8万円〜</span>
            </div>
            <div
              style={{
                padding: "14px 28px",
                border: `1px solid ${M.light}`,
                borderRadius: radius.md,
                background: "#fff",
              }}
            >
              <span style={{ fontSize: 13, color: C.textMid }}>バーチャルステージング</span>{" "}
              <span style={{ fontSize: 18, fontWeight: 700, color: C.gold }}>¥0</span>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
