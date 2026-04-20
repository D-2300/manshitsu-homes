import { M, C, LINE_URL } from "../../tokens";

export default function HPHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: M.dark,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hero-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.8) brightness(0.35)",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, rgba(68,41,64,.4) 0%, rgba(68,41,64,.75) 100%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px", maxWidth: 680 }}>
        {/* Brand eyebrow */}
        <p
          style={{
            fontSize: "clamp(11px, 2.2vw, 13px)",
            fontWeight: 500,
            color: C.gold,
            letterSpacing: "0.25em",
            marginBottom: "20px",
            opacity: 0.85,
          }}
        >
          満室デザインLABO
        </p>

        {/* H1 — ad scent: 収益物件 */}
        <h1
          style={{
            fontSize: "clamp(28px, 7.5vw, 52px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.02em",
            lineHeight: 1.35,
            marginBottom: "18px",
          }}
        >
          宮城の収益物件を、<br />買う前から一緒に。
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(14px, 2.6vw, 17px)",
            fontWeight: 400,
            color: "rgba(255,255,255,.92)",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          物件探しから手伝う、宮城の内装屋。<br />
          非公開物件・改修診断・客付け支援まで一気通貫。
        </p>

        {/* Primary CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: C.lineGreen,
              color: "#fff",
              fontSize: "clamp(15px, 3vw, 17px)",
              fontWeight: 700,
              padding: "16px 44px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(6,199,85,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            LINEで無料相談する
          </a>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.6)", margin: 0 }}>
            1分で完了・物件未定OK・営業なし
          </p>
        </div>

        {/* Trust bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            fontSize: "clamp(10px, 2vw, 12px)",
            color: "rgba(255,255,255,.55)",
            letterSpacing: "0.08em",
            flexWrap: "wrap",
          }}
        >
          <span>収益物件 ／ 宮城県全域</span>
          <span style={{ opacity: 0.4 }}>｜</span>
          <span>仲介歴20年 × 大工歴20年</span>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "18px",
          color: "rgba(255,255,255,.3)",
          animation: "hpHeroScrollBounce 2s ease-in-out infinite",
        }}
      >
        ↓
      </div>

      <style>{`
        @keyframes hpHeroScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(4px); }
        }
      `}</style>
    </section>
  );
}
