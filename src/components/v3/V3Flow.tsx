import { M, C } from "../../tokens";

const steps = [
  {
    num: "1",
    title: "LINEで友だち追加",
    desc: "1分で完了。営業は一切ありません。",
  },
  {
    num: "2",
    title: "非公開の物件情報をお届け",
    desc: "宮城県内のアパート投資物件をリストでお届けします。",
  },
  {
    num: "3",
    title: "気になる物件があれば相談",
    desc: "改修費・利回りシミュレーション・現地確認、すべて無料。",
  },
];

export default function V3Flow() {
  return (
    <section style={{ padding: "56px 20px", background: "#fff" }}>
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
          HOW IT WORKS
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
          かんたん3ステップ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              {/* Number + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: M.main,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      height: "40px",
                      background: M.light,
                    }}
                  />
                )}
              </div>
              {/* Content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? "16px" : 0 }}>
                <h3
                  style={{
                    fontSize: "clamp(15px, 3vw, 17px)",
                    fontWeight: 700,
                    color: C.textDark,
                    marginBottom: "4px",
                    lineHeight: 1.5,
                    marginTop: "8px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(13px, 2.5vw, 15px)",
                    color: C.textMid,
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
