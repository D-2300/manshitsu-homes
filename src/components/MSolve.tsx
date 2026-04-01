import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const points = [
  {
    n: "1",
    title: "店舗デザインの空間演出",
    body: "カフェや美容室を手がけてきたデザイン力で、ありふれた賃貸を「選ばれる部屋」に変えます。アクセントクロス、モルタル調CF、照明計画まで。",
  },
  {
    n: "2",
    title: "中間マージンゼロの直接施工",
    body: "管理会社も元請けも通しません。自社職人が直接対応するから、同じ品質でも費用は25〜33%削減できます。",
  },
  {
    n: "3",
    title: "退去当日の現場確認・即日見積もり",
    body: "店舗の開店日に間に合わせてきた機動力で、退去当日に現場を確認し、当日中に写真付き見積もりを提出。空室期間を最短化します。",
  },
];

export default function MSolve() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="VALUE" heading={"同じ予算で、部屋が変わる。\nそれが店舗内装の力です。"} />

        {/* Image showcase */}
        <div
          style={{
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          <img
            src="/images/m-after-led-sm.webp"
            alt="店舗品質のデザイン施工例"
            width="480"
            height="269"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "0",
            marginBottom: "28px",
            backgroundColor: M.bg,
            border: `1px solid rgba(107,64,102,0.12)`,
            borderRadius: "4px",
            overflow: "hidden",
            flexWrap: "wrap",
          }}
        >
          {[
            "中間マージン分\n浮いた4万円で",
            "店舗品質の\nデザイン施工",
            "内見時の印象UP\n空室期間↓",
          ].map((text, i, arr) => (
            <div
              key={i}
              style={{
                flex: "1 1 120px",
                padding: "14px 12px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(12px, 3vw, 14px)",
                  color: M.main,
                  fontWeight: 500,
                  lineHeight: 1.65,
                  whiteSpace: "pre-line",
                }}
              >
                {text}
              </p>
              {i < arr.length - 1 && (
                <span
                  style={{
                    position: "absolute",
                    right: "-8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: C.gold,
                    fontSize: "18px",
                    zIndex: 1,
                    lineHeight: 1,
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            margin: "0 0 28px",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            color: C.textMid,
            lineHeight: 1.85,
            textAlign: "center",
          }}
        >
          管理会社に払っていた中間マージン分の予算で、店舗レベルのデザイン施工ができます。ただ元に戻すだけの原状回復ではなく、「次の入居者が一目惚れする部屋」をつくります。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {points.map((pt) => (
            <div
              key={pt.n}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "18px",
                border: `1px solid rgba(107,64,102,0.1)`,
                borderRadius: "4px",
                backgroundColor: "#FAFAF9",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: M.main,
                  color: C.gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "'Noto Serif JP', serif",
                }}
              >
                {pt.n}
              </span>
              <div>
                <p style={{ margin: "0 0 6px", fontSize: "clamp(15px, 3.8vw, 17px)", fontWeight: 600, color: C.textDark, letterSpacing: "0.02em" }}>
                  {pt.title}
                </p>
                <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.8 }}>
                  {pt.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
