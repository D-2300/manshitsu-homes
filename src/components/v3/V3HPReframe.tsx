import { M, C } from "../../tokens";

export default function V3HPReframe() {
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
            marginBottom: "24px",
            lineHeight: 1.7,
          }}
        >
          ボロ物件を「自分の手で」変える。<br />
          <em style={{ fontStyle: "normal", color: C.gold }}>それがいちばん確実な投資。</em>
        </h2>

        <div
          style={{
            background: C.warmWhite,
            borderRadius: "14px",
            padding: "28px 24px",
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
            利回りの高い物件は、なぜ利回りが高いのか。<br />
            答えはシンプルです。<strong style={{ color: M.main }}>誰も欲しがらないから</strong>。
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: C.textDark,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            築古。空室あり。内装が古い。<br />
            だから安い。だから利回りの数字だけは高く見える。
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: C.textDark,
              lineHeight: 1.9,
            }}
          >
            でも、もし。<br />
            その「古い内装」を、<strong style={{ color: M.main }}>適正なコストで一新</strong>できるとしたら。<br />
            空室を埋めて、「見かけの利回り」を「実質利回り」に変えられるとしたら。
          </p>
        </div>

        {/* Data comparison */}
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              flex: 1,
              background: M.bg,
              borderRadius: "14px",
              padding: "20px 16px",
              textAlign: "center",
              border: `1px solid ${M.light}`,
            }}
          >
            <p style={{ fontSize: "11px", color: M.mid, marginBottom: "6px", fontWeight: 600 }}>
              改修前
            </p>
            <p style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 900, color: C.textMid, marginBottom: "4px" }}>
              6%
            </p>
            <p style={{ fontSize: "11px", color: C.warmGray, lineHeight: 1.5 }}>空室あり<br />内装老朽化</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", fontSize: "20px", color: M.mid }}>→</div>

          <div
            style={{
              flex: 1,
              background: `linear-gradient(135deg, ${M.dark} 0%, ${M.main} 100%)`,
              borderRadius: "14px",
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "11px", color: M.light, marginBottom: "6px", fontWeight: 600 }}>
              改修後
            </p>
            <p style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 900, color: C.gold, marginBottom: "4px" }}>
              12%+
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>満室稼働<br />内装一新</p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textDark,
            marginTop: "28px",
            lineHeight: 1.8,
            fontWeight: 500,
          }}
        >
          ボロ物件は「ハズレ」ではなく、<br />
          <strong style={{ color: M.main }}>改修の余地がある物件</strong>です。
        </p>
      </div>
    </section>
  );
}
