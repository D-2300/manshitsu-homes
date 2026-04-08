import { Camera, Gift, ShieldCheck } from "lucide-react";
import { M, C, LINE_URL } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import { pushEvent } from "../utils/pushEvent";

export default function SHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: M.dark,
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="/images/hero-bg.webp"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.15,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% 25%, rgba(107,64,102,0.14) 0%, transparent 65%)`,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 680,
          margin: "0 auto",
          padding: "80px 24px 36px",
          textAlign: "center",
        }}
      >
        <ScrollFadeIn>
          {/* Target declaration — BIG */}
          <p
            style={{
              fontSize: "clamp(16px, 3.5vw, 22px)",
              fontWeight: 700,
              letterSpacing: ".12em",
              color: "#fff",
              marginBottom: 8,
              lineHeight: 1.6,
            }}
          >
            アパート・マンション
            <br />
            オーナー様へ
          </p>

          <div
            style={{
              width: 40,
              height: 2,
              backgroundColor: C.gold,
              margin: "0 auto 20px",
              opacity: 0.6,
            }}
          />

          {/* Headline — center pin */}
          <h1
            style={{
              fontSize: "clamp(26px, 6vw, 42px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.6,
              marginBottom: 16,
              letterSpacing: ".02em",
            }}
          >
            空室対策、
            <br />
            <em style={{ color: C.gold, fontStyle: "normal", fontSize: "clamp(32px, 8vw, 52px)" }}>
              0円
            </em>
            で始めませんか？
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: "rgba(255,255,255,.55)",
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            空室写真を送るだけで、バーチャルステージング画像をAI生成。
            <br />
            無料で集客テスト → リフォーム前に反応を確認できます。
          </p>
        </ScrollFadeIn>

        {/* Color variation collage */}
        <ScrollFadeIn delay={0.1}>
          <div style={{ maxWidth: 480, margin: "0 auto 20px", borderRadius: 8, overflow: "hidden" }}>
            <img
              src="/images/vs-collage-text.webp"
              alt="好きな色を選べるカラーバリエーション — 入居率が大幅UP"
              style={{ width: "100%", display: "block" }}
              loading="eager"
            />
          </div>
        </ScrollFadeIn>

        {/* Trust badges */}
        <ScrollFadeIn delay={0.15}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            {[
              { icon: <Camera size={13} />, text: "写真送るだけ" },
              { icon: <Gift size={13} />, text: "完全無料" },
              { icon: <ShieldCheck size={13} />, text: "営業なし" },
            ].map((b) => (
              <span
                key={b.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,.7)",
                  background: "rgba(255,255,255,.1)",
                  border: "1px solid rgba(255,255,255,.15)",
                  borderRadius: 999,
                  padding: "5px 14px",
                }}
              >
                {b.icon}
                {b.text}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_staging")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              backgroundColor: C.lineGreen,
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(14px, 2.5vw, 19px)",
              padding: "14px 36px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(6,199,85,.35)",
              width: "100%",
              maxWidth: 400,
            }}
          >
            無料でステージング画像をもらう
          </a>

          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,.2)",
              marginTop: 12,
            }}
          >
            断ってOK・施工しなくても画像だけもらえます
          </p>
        </ScrollFadeIn>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: 20,
            fontSize: 11,
            color: "rgba(255,255,255,.2)",
            animation: "s-float 2s ease-in-out infinite",
          }}
        >
          ↓ scroll
        </div>
        <style>{`@keyframes s-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
      </div>
    </section>
  );
}
