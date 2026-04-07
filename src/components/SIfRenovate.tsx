import { M, C, LINE_URL } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";
import { pushEvent } from "../utils/pushEvent";

export default function SIfRenovate() {
  return (
    <section
      style={{
        backgroundColor: M.bg,
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="RENOVATION" ja="リフォーム・リノベーションするなら" />

          <h2
            style={{
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: C.textDark,
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: 8,
            }}
          >
            ステージング画像の内装、
            <br />
            <span style={{ color: M.main }}>そのままリフォームできます。</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: C.textMid,
              textAlign: "center",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            管理会社を通さないから、中間マージンなし。
            <br />
            何にいくらかかるか、項目ごとの明細をお出しします。
          </p>
        </ScrollFadeIn>

        {/* 3 points */}
        <ScrollFadeIn delay={0.1}>
          <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
            {[
              { num: "30〜50%", label: "管理会社経由より安い", sub: "中間マージンなし・自社施工だから" },
              { num: "即日〜", label: "クロス張替え・CF張替えも即日", sub: "大工歴20年のKENが直接対応" },
              { num: "明細", label: "項目ごとに費用がわかる", sub: "「一式○○万円」の不透明さなし" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "18px 20px",
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: "1px solid #e8e6e0",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontWeight: 700,
                    color: M.main,
                    fontFamily: "'Poppins', 'Noto Sans JP', sans-serif",
                    minWidth: 64,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: C.textDark, marginBottom: 2, lineHeight: 1.4 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 12, color: C.warmGray, margin: 0, lineHeight: 1.5 }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* CTA */}
        <ScrollFadeIn delay={0.2}>
          <div style={{ textAlign: "center" }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent("line_cta_click_staging")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: M.main,
                textDecoration: "none",
                borderBottom: `1px solid ${M.main}44`,
                paddingBottom: 2,
              }}
            >
              料金の詳細もLINEでお伝えします →
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
