import { M, C, typography, spacing, radius } from "../../tokens";
import { SectionHeading, ScrollFadeIn } from "../../shared";

export default function HPWhatWeDo() {
  return (
    <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
      <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto", textAlign: "center" }}>
        <ScrollFadeIn>
          <SectionHeading en="WHAT WE DO" ja="物件探しから、内装まで" />
          <p
            style={{
              fontSize: typography.bodyLarge.size,
              color: C.textMid,
              lineHeight: typography.bodyLarge.lineHeight,
              marginBottom: 8,
            }}
          >
            普通の内装屋は、物件を買った後に呼ばれる。<br />
            うちは、買う前から相談に乗ります。
          </p>
          <p
            style={{
              fontSize: typography.bodyLarge.size,
              color: C.textMid,
              lineHeight: typography.bodyLarge.lineHeight,
              marginBottom: 32,
            }}
          >
            非公開の物件情報・古物件の改修診断・バーチャルステージングを<br />
            一気通貫で。中間マージンなし、見積ズレなし。
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
