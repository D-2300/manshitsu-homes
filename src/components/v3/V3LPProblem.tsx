import { M, C } from "../../tokens";

export default function V3LPProblem() {
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
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          利回りのいい物件、<br />
          もう残ってないと思っていませんか？
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { icon: "😔", text: "ネットに出てくる物件は利回り5〜6%ばかり" },
            { icon: "🏢", text: "いい物件は業者が先に押さえてしまう" },
            { icon: "💸", text: "初心者が手を出せる価格帯は築古ボロばかり" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px 20px",
                background: "#fff",
                border: "1px solid #e0ddd5",
                borderRadius: "14px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ fontSize: "28px", flexShrink: 0 }}>{item.icon}</span>
              <p
                style={{
                  fontSize: "clamp(14px, 3vw, 16px)",
                  color: C.textDark,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            marginTop: "28px",
            lineHeight: 1.8,
          }}
        >
          その悩み、<strong style={{ color: M.main }}>視点を変えれば</strong>解決します。
        </p>
      </div>
    </section>
  );
}
