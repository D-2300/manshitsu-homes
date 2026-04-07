import { Smartphone, Instagram, Calculator } from "lucide-react";
import { M, C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

const trends = [
  {
    icon: <Smartphone size={22} />,
    title: "内見なし・Webだけで決まる時代",
    desc: "写真と間取りだけで入居を決める人が増加。「生活イメージが湧く写真」がないと、そもそも候補に入らない。",
  },
  {
    icon: <Instagram size={22} />,
    title: "SNS・ジモティーで直接集客",
    desc: "Instagram・TikTok・ジモティーで部屋を探す人が急増。ポータルに頼らず、大家が自分で入居者を見つける時代へ。",
  },
  {
    icon: <Calculator size={22} />,
    title: "管理会社手数料の見直し",
    desc: "AD（広告料）1〜2ヶ月分＋仲介手数料。家賃の3ヶ月分近い客付け費用を削減したい大家が増加。",
  },
];

export default function SZeitgeist() {
  return (
    <section
      style={{
        backgroundColor: C.warmWhite,
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="TREND" ja="時代の変化" />

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
            いま、
            <span style={{ color: M.main }}>
              "自分で客付けする"
            </span>
            <br />
            アパート経営オーナーが増えています。
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 2.2vw, 14px)",
              color: C.warmGray,
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            ポータルサイトに頼らない、新しい賃貸経営のかたち。
          </p>
        </ScrollFadeIn>

        <div style={{ display: "grid", gap: 14 }}>
          {trends.map((t, i) => (
            <ScrollFadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "18px 16px",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  border: "1px solid #e8e6e0",
                }}
              >
                <div style={{ flexShrink: 0, color: M.main, marginTop: 2 }}>
                  {t.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(14px, 3vw, 16px)",
                      fontWeight: 700,
                      color: C.textDark,
                      marginBottom: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      color: C.textMid,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Bridge to next section */}
        <ScrollFadeIn delay={0.3}>
          <div
            style={{
              marginTop: 24,
              padding: "14px 18px",
              background: `rgba(204,51,51,0.03)`,
              border: `1px solid rgba(204,51,51,0.08)`,
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 3vw, 16px)",
                fontWeight: 700,
                color: C.accentRed,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              でも、空室写真だけでは反響が来ない。
              <br />
              <span style={{ fontWeight: 400, fontSize: "clamp(13px, 2.2vw, 14px)" }}>
                「生活のイメージ」が湧く写真がないと、スクロールで飛ばされるだけです。
              </span>
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
