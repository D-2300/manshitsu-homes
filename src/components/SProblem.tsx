import { Cpu, Wrench, Home } from "lucide-react";
import { M, C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

export default function SProblem() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="WHY FREE?" ja="なぜ無料でできるのか" />

          {/* 不動産 × 大工 写真 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/about-kai-sm.webp"
                alt="KAI"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${M.bg}`,
                }}
                loading="lazy"
              />
              <p style={{ fontSize: 10, fontWeight: 600, color: C.warmGray, marginTop: 2 }}>不動産のプロ</p>
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: C.gold,
                marginBottom: 14,
              }}
            >
              ×
            </span>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/about-ken-sm.webp"
                alt="KEN"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${M.bg}`,
                }}
                loading="lazy"
              />
              <p style={{ fontSize: 10, fontWeight: 600, color: C.warmGray, marginTop: 2 }}>内装のプロ</p>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: C.textDark,
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            不動産のプロと内装のプロが、
            <br />
            <span style={{ color: M.main }}>本気で空室を埋めにいきます。</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: C.textMid,
              textAlign: "center",
              lineHeight: 1.9,
              marginBottom: 24,
            }}
          >
            私たちの収益は、施工をご依頼いただいたとき。
            <br />
            だから入口のステージング画像は<strong style={{ color: C.textDark }}>無料</strong>です。
            <br />
            大家さんが儲からないと、私たちも仕事になりません。
          </p>
        </ScrollFadeIn>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              icon: <Home size={22} />,
              title: "元不動産仲介が「どう決まるか」を知っている",
              desc: "KAI（不動産アドバイザー）が入居者目線で物件を診断。どんな写真が刺さるか、どう掲載すれば反響が来るかを熟知しています。",
            },
            {
              icon: <Wrench size={22} />,
              title: "大工歴20年が「どう作るか」を知っている",
              desc: "KEN（CSO）が年間50件以上の店舗内装リフォームで培った技術で、クロス張替えからフルリノベーションまで対応。中間マージンなし、即日対応。",
            },
            {
              icon: <Cpu size={22} />,
              title: "AIの力で、画像生成コストがほぼゼロ",
              desc: "だから何パターンでも無料で作れます。まずは無料で集客テスト。反応を見てから壁紙の色や方針を決められます。",
            },
          ].map((item, i) => (
            <ScrollFadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "20px 18px",
                  backgroundColor: C.warmWhite,
                  borderRadius: 10,
                  border: "1px solid #e8e6e0",
                }}
              >
                <div style={{ flexShrink: 0, color: M.main, marginTop: 2 }}>
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(14px, 3vw, 16px)",
                      fontWeight: 700,
                      color: C.textDark,
                      marginBottom: 6,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      color: C.textMid,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn delay={0.3}>
          <p
            style={{
              textAlign: "center",
              fontSize: "clamp(14px, 3vw, 16px)",
              fontWeight: 700,
              color: C.textDark,
              marginTop: 24,
              lineHeight: 1.8,
            }}
          >
            リスクゼロで試せるから、
            <span style={{ color: C.gold }}>まず反応を見てから決められます。</span>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
