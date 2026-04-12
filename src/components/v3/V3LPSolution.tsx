import { M, C } from "../../tokens";

const weapons = [
  {
    num: "01",
    title: "入居後リフォーム",
    desc: "入居者が壁紙の色を選べる。だから「自分の部屋」意識が生まれ、長期入居につながる。大家のリスクはゼロ。",
    accent: C.accentGreen,
  },
  {
    num: "02",
    title: "バーチャルステージング",
    desc: "AIで完成イメージを作成。ジモティ・SNSに掲載すれば、広告費0円で入居者を集められる。",
    accent: C.gold,
  },
  {
    num: "03",
    title: "改修診断",
    desc: "大工歴20年のKENが現場を見て「どこを直せば利回りが上がるか」を即判断。無駄な工事はしない。",
    accent: M.main,
  },
];

export default function V3LPSolution() {
  return (
    <section style={{ padding: "56px 20px", background: C.warmWhite }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: M.mid,
            marginBottom: "10px",
          }}
        >
          SOLUTION
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          3つの武器で、<br />
          ボロ物件を儲かる物件に。
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {weapons.map((w) => (
            <div
              key={w.num}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                border: "1px solid #e0ddd5",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 900,
                    color: w.accent,
                    letterSpacing: "0.05em",
                  }}
                >
                  {w.num}
                </span>
                <h3
                  style={{
                    fontSize: "clamp(16px, 3.5vw, 18px)",
                    fontWeight: 700,
                    color: C.textDark,
                  }}
                >
                  {w.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "clamp(13px, 2.5vw, 15px)",
                  color: C.textMid,
                  lineHeight: 1.8,
                }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
