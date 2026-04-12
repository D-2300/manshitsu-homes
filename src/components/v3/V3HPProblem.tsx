import { M, C } from "../../tokens";

export default function V3HPProblem() {
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
          PROBLEM
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "24px",
            lineHeight: 1.7,
          }}
        >
          大家だけが、<br />
          全リスクを背負っている。
        </h2>

        <div
          style={{
            background: "#fff",
            borderRadius: "14px",
            padding: "28px 24px",
            border: "1px solid #e0ddd5",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: C.textDark,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            不動産屋は物件を売ったら終わり。<br />
            管理会社は空室が出ても、自分の懐は痛まない。
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: C.textDark,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            空室が続けば、ローンの返済は大家の持ち出し。<br />
            原状回復の費用も、次の入居者が決まる保証もない中で、大家だけが払い続ける。
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: C.textMid,
              lineHeight: 1.9,
            }}
          >
            「アパート経営は不労所得」なんて言葉を信じて始めたのに、<br />
            気づけば自分だけがリスクを抱えている。
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "不動産屋", text: "売ったら終わり。その後の空室は関係ない。" },
            { label: "管理会社", text: "原状回復は白い壁紙に戻すだけ。差別化の発想がない。" },
            { label: "リフォーム業者", text: "頼めば何でもやるが、利回りの視点がない。" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                padding: "16px 20px",
                background: "#fff",
                border: "1px solid #e0ddd5",
                borderRadius: "12px",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: C.accentRed,
                  minWidth: "80px",
                }}
              >
                {item.label}
              </span>
              <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(15px, 3vw, 17px)",
            fontWeight: 700,
            color: M.main,
            marginTop: "32px",
            lineHeight: 1.8,
          }}
        >
          だから私たちは、<br />
          大家さんの「横」に立つことにしました。
        </p>
      </div>
    </section>
  );
}
