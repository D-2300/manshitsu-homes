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

          {/* Price badges（LPプラーク風・◆コーナー付き） */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "改修費", value: "8.8", unit: "万円〜", color: M.main },
              { label: "バーチャルステージング", value: "¥0", unit: "", color: C.gold },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  padding: "16px 24px 12px",
                  border: `1px solid rgba(201,168,76,.45)`,
                  borderRadius: radius.md,
                  background: "linear-gradient(180deg, #fff 0%, #faf7f2 100%)",
                  position: "relative",
                  boxShadow: "0 2px 10px rgba(201,168,76,.1), inset 0 1px 0 rgba(255,240,200,.5)",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "7px",
                    color: C.gold,
                    background: C.warmWhite,
                    padding: "0 4px",
                  }}
                >
                  ◆
                </span>
                <div style={{ fontSize: 11, color: C.textMid, marginBottom: 4, letterSpacing: ".05em" }}>
                  {b.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: b.color,
                    letterSpacing: ".01em",
                    lineHeight: 1,
                  }}
                >
                  {b.value}
                  <span
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      marginLeft: 2,
                    }}
                  >
                    {b.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
