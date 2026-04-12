import { C } from "../../tokens";

export default function HPVoice() {
  return (
    <section style={{ padding: "56px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        {/* KEN & KAI avatars */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
          <img
            src="/images/about-ken-sm.webp"
            alt="KEN"
            style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", background: "#e0e0e0" }}
          />
          <img
            src="/images/about-kai-sm.webp"
            alt="KAI"
            style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", background: "#e0e0e0" }}
          />
        </div>
        <p
          style={{
            fontSize: "12px",
            color: C.warmGray,
            marginBottom: "16px",
          }}
        >
          KEN &amp; KAI ／ 満室デザインLABO
        </p>

        <p
          style={{
            fontSize: "clamp(16px, 3.5vw, 20px)",
            fontWeight: 500,
            color: C.textDark,
            lineHeight: 1.9,
            marginBottom: "16px",
          }}
        >
          アパート経営を始めたい人が、<br />
          物件選びで失敗しなくていいように。
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.9,
            marginBottom: "16px",
          }}
        >
          不動産屋の都合ではなく、大家さんの利益で物件を選ぶこと。<br />
          築古でも、改修で利回りを変えられること。
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.9,
          }}
        >
          それが、満室デザインLABOのやり方です。
        </p>
      </div>
    </section>
  );
}
