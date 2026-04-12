import { M } from "../../tokens";

interface SmallHeroProps {
  title: string;
  subtitle: string;
}

export default function SmallHero({ title, subtitle }: SmallHeroProps) {
  return (
    <section
      style={{
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${M.dark} 0%, #3a2235 100%)`,
        position: "relative",
        overflow: "hidden",
        paddingTop: "56px",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, rgba(192,154,181,.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 56px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.02em",
            marginBottom: "8px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            fontWeight: 400,
            color: "rgba(255,255,255,.5)",
            letterSpacing: "0.1em",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
