import { Images, Zap, FileText } from "lucide-react";
import { C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

const items = [
  {
    icon: <Images size={24} />,
    num: "01",
    title: "ステージング画像が無料",
    desc: "空室写真を送るだけで、複数パターンの内装イメージが届く。入居者に選んでもらえる「内装カタログ」を、コストゼロで。",
    note: "何パターンでも無料",
  },
  {
    icon: <Zap size={24} />,
    num: "02",
    title: "選ばれたデザインを即日施工",
    desc: "入居者が選んだ内装を、大工が直接施工。管理会社を通さないからスピードが違います。",
    note: "最短即日対応",
  },
  {
    icon: <FileText size={24} />,
    num: "03",
    title: "何にいくらかかるか、全部見える",
    desc: "「一式○○万円」ではなく、項目ごとの明細をお出しします。納得してから依頼できます。",
    note: "中間マージンなし",
  },
];

export default function SWhatYouGet() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="WHY US" ja="選ばれる3つの理由" />

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: C.warmGray,
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            ステージング × スピード × 明朗価格。
            <br />
            この3つが揃っているのは、満室デザインLABOだけです。
          </p>
        </ScrollFadeIn>

        <div style={{ display: "grid", gap: 14 }}>
          {items.map((item, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "22px 20px",
                  backgroundColor: C.warmWhite,
                  borderRadius: 12,
                  border: "1px solid #e8e6e0",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 200,
                      color: C.gold,
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {item.num}
                  </span>
                  <div style={{ color: C.gold }}>{item.icon}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "clamp(15px, 3.5vw, 18px)",
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
                      marginBottom: 8,
                    }}
                  >
                    {item.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 500,
                      color: C.gold,
                      background: C.goldPale,
                      padding: "3px 10px",
                      borderRadius: 100,
                      letterSpacing: ".04em",
                    }}
                  >
                    {item.note}
                  </span>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
