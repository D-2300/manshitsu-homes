import { M, C } from "../../tokens";

const weapons = [
  {
    num: "01",
    title: "入居後リフォーム",
    subtitle: "入居者が決まってから、入居者が選ぶ。",
    paragraphs: [
      "従来のリフォームは、空室の間に大家が費用を負担して行う。入居者が決まる保証はないまま。",
      "入居後リフォームは順序が逆。先に入居者を決めて、入居者自身が壁紙の色を選ぶ。施工は最短2日。",
      "大家さんの空室リスクはゼロ。入居者は「自分で選んだ部屋」だから愛着が湧き、長期入居につながる。",
    ],
    accent: C.accentGreen,
  },
  {
    num: "02",
    title: "バーチャルステージング",
    subtitle: "AIで完成イメージを作り、広告費0円で集客。",
    paragraphs: [
      "空室写真を送るだけで、AIが壁紙の色変更イメージと家具配置イメージを生成。",
      "このイメージをジモティ・SNSに掲載すれば、ポータルサイトの掲載費をかけずに入居希望者を集められる。",
      "CG表記を入れれば景品表示法にも対応。SUUMO・Athome等への掲載も可能。",
    ],
    accent: C.gold,
  },
  {
    num: "03",
    title: "改修診断",
    subtitle: "大工歴20年が現場を見て、利回りを上げるポイントだけを直す。",
    paragraphs: [
      "全部をきれいにする必要はない。利回りに効くポイントだけを見極めて、最小コストで最大効果を出す。",
      "KENは年間30件以上の店舗内装を手がけてきた大工。築古物件の「どこを直せば入居が決まるか」を、現場を見て即判断できる。",
      "壁紙900円/㎡、アクセントクロス1面15,000円。管理会社経由より3〜4割安い直接施工。",
    ],
    accent: M.main,
  },
];

export default function V3HPSolution() {
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
            marginBottom: "36px",
            lineHeight: 1.7,
          }}
        >
          3つの武器で、<br />
          ボロ物件を儲かる物件に。
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {weapons.map((w) => (
            <div
              key={w.num}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "28px 24px",
                border: "1px solid #e0ddd5",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
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
                    fontSize: "clamp(17px, 3.5vw, 20px)",
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
                  fontWeight: 600,
                  color: w.accent,
                  marginBottom: "16px",
                  lineHeight: 1.6,
                }}
              >
                {w.subtitle}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {w.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontSize: "clamp(13px, 2.5vw, 15px)",
                      color: C.textMid,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
