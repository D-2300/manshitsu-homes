import { M, C } from "../../tokens";

export default function V3LPReframe() {
  return (
    <section style={{ padding: "56px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: C.gold,
            marginBottom: "10px",
          }}
        >
          REFRAME
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "16px",
            lineHeight: 1.7,
          }}
        >
          ボロ物件 ={" "}
          <em style={{ fontStyle: "normal", color: C.gold }}>チャンス</em>です。
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          みんなが避ける築古物件こそ、<br />
          改修次第で利回りが大きく変わります。
        </p>

        {/* Data cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: M.bg,
              borderRadius: "14px",
              padding: "24px 20px",
              textAlign: "center",
              border: `1px solid ${M.light}`,
            }}
          >
            <p style={{ fontSize: "12px", color: M.mid, marginBottom: "8px", fontWeight: 600 }}>
              改修前
            </p>
            <p style={{ fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 900, color: C.textMid, marginBottom: "4px" }}>
              利回り 6%
            </p>
            <p style={{ fontSize: "13px", color: C.warmGray }}>空室あり・内装老朽化</p>
          </div>

          <div style={{ textAlign: "center", fontSize: "24px", color: M.mid }}>▼</div>

          <div
            style={{
              background: `linear-gradient(135deg, ${M.dark} 0%, ${M.main} 100%)`,
              borderRadius: "14px",
              padding: "24px 20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "12px", color: M.light, marginBottom: "8px", fontWeight: 600 }}>
              改修後
            </p>
            <p style={{ fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 900, color: C.gold, marginBottom: "4px" }}>
              利回り 12%+
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)" }}>満室稼働・内装一新</p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: C.warmGray,
            marginTop: "24px",
            lineHeight: 1.8,
          }}
        >
          ※ 改修内容・物件条件により異なります
        </p>
      </div>
    </section>
  );
}
