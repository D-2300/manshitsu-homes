import { Link } from "react-router-dom";
import { M, C, LINE_URL } from "../../tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const navLinks = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/pricing", label: "Pricing" },
];

export default function ManshitsuFooter() {
  return (
    <footer style={{ background: M.dark, padding: "0" }}>
      {/* CTA block */}
      <div
        data-section="final-cta"
        style={{
          padding: "56px 24px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <p
          style={{
            fontSize: "clamp(16px, 3.5vw, 20px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.7,
            marginBottom: "8px",
          }}
        >
          まだ何も決まっていなくても、大丈夫です。
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: "rgba(255,255,255,.45)",
            marginBottom: "24px",
            lineHeight: 1.7,
          }}
        >
          物件未定でもOK。断りはLINE1本で完了です。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            window.dataLayer?.push({ event: "line_cta_click", cta_location: "footer" });
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: C.lineGreen,
            color: "#fff",
            borderRadius: "999px",
            padding: "14px 32px",
            fontSize: "clamp(14px, 2.8vw, 16px)",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(6,199,85,.3)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          LINEで相談する
        </a>
      </div>

      {/* Service Area */}
      <div
        style={{
          padding: "32px 24px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.gold,
            marginBottom: "10px",
          }}
        >
          SERVICE AREA
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 14px)",
            color: "rgba(255,255,255,.45)",
            lineHeight: 1.8,
          }}
        >
          仙台市・宮城県を中心に対応しています。
        </p>
      </div>

      {/* Nav links */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,.4)",
              textDecoration: "none",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div style={{ padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)" }}>
          &copy; 2026 満室デザインLABO ／ KAI &amp; KEN
        </p>
      </div>
    </footer>
  );
}
