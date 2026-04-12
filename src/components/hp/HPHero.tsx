import { M, C } from "../../tokens";

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
          background: `linear-gradient(180deg, rgba(68,41,64,.4) 0%, rgba(68,41,64,.7) 100%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 16px" }}>
        {/* Brand name */}
        <h1
          style={{
            fontSize: "clamp(36px, 9vw, 72px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.02em",
            lineHeight: 1.3,
            marginBottom: "12px",
          }}
        >
          満室デザイン<br />LABO
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            fontWeight: 400,
            color: C.gold,
            letterSpacing: "0.15em",
            marginBottom: "8px",
          }}
        >
          宮城のアパート投資 × 内装改修
        </p>

        {/* Location */}
        <p
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            color: "rgba(255,255,255,.45)",
            letterSpacing: "0.1em",
          }}
        >
          仙台・宮城
        </p>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "20px",
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
