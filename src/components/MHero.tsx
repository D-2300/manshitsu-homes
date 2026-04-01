import { M, C, LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MHero() {
  return (
    <section className="m-hero">
      <style>{`
        @media (max-width: 767px) {
          .m-hero-h1 { font-size: 26px !important; }
          .m-hero-sub { font-size: 14px !important; }
        }
        @media (min-width: 768px) {
          .m-hero-h1 { font-size: 36px !important; }
          .m-hero-sub { font-size: 16px !important; }
        }
      `}</style>

      {/* ===== HERO IMAGE SECTION (full bleed with text overlay) ===== */}
      <div
        style={{
          position: "relative",
          minHeight: "60vh",
          overflow: "hidden",
        }}
      >
        {/* Background image - COLOR */}
        <img
          src="/images/m-hero-color.webp"
          srcSet="/images/m-hero-color-sm.webp 480w, /images/m-hero-color.webp 720w"
          alt="施工後の明るいLDK"
          width="720"
          height="403"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Content over image */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "720px",
            margin: "0 auto",
            padding: "24px 20px 32px",
          }}
        >
          {/* Header bar: Logo + text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <img
              src="/images/logo-manshitsu-mark-gold.webp"
              alt="満室デザインLABO"
              style={{ height: "40px", objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: C.white, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                満室デザインLABO
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em", lineHeight: 1.4 }}>
                仙台・宮城の原状回復工事なら
              </p>
            </div>
          </div>

          {/* Badge */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(4px)",
                padding: "5px 14px",
                borderRadius: "4px",
                fontSize: "clamp(12px, 2vw, 14px)",
                fontWeight: 500,
                color: "#333",
              }}
            >
              仙台・宮城の賃貸オーナー様へ
            </span>
          </div>

          {/* H1 - Paragraph 1 */}
          <h1 style={{ margin: "0 0 12px", padding: 0 }}>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.45,
                letterSpacing: "0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              退去から<span style={{ color: C.gold }}>2週間</span>で、
            </span>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.45,
                letterSpacing: "0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              内見が入る部屋にします。
            </span>
          </h1>

          {/* Paragraph 2 - Sub text */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, margin: "0 0 10px" }} />
            <p
              className="m-hero-sub"
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.85,
                letterSpacing: "0.02em",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              店舗内装のプロが、中間マージンなしで直接施工。<br />
              ただ元に戻すだけじゃない。次の入居者が決まる部屋をつくります。
            </p>
          </div>

          {/* Feature badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "20px" }}>
            {["中間マージンなし", "自社施工", "退去当日の見積もり可"].map((t) => (
              <span key={t} style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.12)",
                borderRadius: "4px",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}>{t}</span>
            ))}
          </div>

          {/* Price box - purple background on image */}
          <div
            style={{
              background: `linear-gradient(135deg, ${M.main} 0%, ${M.dark} 100%)`,
              border: `1px solid ${C.gold}`,
              borderRadius: "6px",
              padding: "16px 20px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em", marginBottom: "4px" }}>
              クロス張替え
            </p>
            <p style={{ margin: 0, fontFamily: "'Noto Serif JP', serif" }}>
              <span style={{ fontSize: "clamp(28px, 7vw, 36px)", color: C.gold, fontWeight: 600 }}>900</span>
              <span style={{ fontSize: "14px", color: C.goldLight }}> 円/㎡〜（税別）</span>
            </p>
            <p style={{ margin: "4px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
              めくり・下地処理・廃材処分込み
            </p>
          </div>
        </div>
      </div>

      {/* ===== PURPLE SECTION (CTA only) ===== */}
      <div
        style={{
          background: `linear-gradient(160deg, ${M.main} 0%, ${M.dark} 100%)`,
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          padding: "28px 20px 36px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* CTA buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent("line_cta_click_manshitsu")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: C.lineGreen,
                color: C.white,
                borderRadius: "999px",
                padding: "15px 24px",
                fontSize: "clamp(15px, 2.5vw, 17px)",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                width: "100%",
                maxWidth: "320px",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
              }}
            >
              LINEで無料相談する
            </a>
            <a
              href={`tel:${TEL}`}
              onClick={() => pushEvent("phone_cta_click_manshitsu")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: C.white,
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "999px",
                padding: "13px 24px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.04em",
                width: "100%",
                maxWidth: "320px",
                justifyContent: "center",
              }}
            >
              📞 {TEL_DISPLAY}
            </a>
            <p style={{ margin: "6px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
              受付 9:00〜18:00（土日対応可）/ LINEは24時間受付
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
