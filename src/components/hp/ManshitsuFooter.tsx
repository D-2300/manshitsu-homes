import { Link } from "react-router-dom";
import { M, C } from "../../tokens";
import { LineCTAButton } from "../../shared";

const navLinks = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/pricing", label: "Pricing" },
];

export default function ManshitsuFooter() {
  return (
    <footer style={{ background: M.dark, padding: 0 }}>
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
            marginBottom: 8,
          }}
        >
          まだ何も決まっていなくても、大丈夫です。
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: "rgba(255,255,255,.45)",
            marginBottom: 24,
            lineHeight: 1.7,
          }}
        >
          物件未定でもOK。断りはLINE1本で完了です。
        </p>
        <LineCTAButton size="normal" label="LINEで相談する" />
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
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.gold,
            marginBottom: 10,
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
          宮城県全域が対象です。近県もご相談ください。
        </p>
      </div>

      {/* Nav links */}
      <div
        style={{
          padding: 24,
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            style={{
              fontSize: 12,
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

      {/* Legal links */}
      <div
        style={{
          padding: "12px 24px",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Link
          to="/privacy"
          style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textDecoration: "none" }}
        >
          プライバシーポリシー
        </Link>
        <Link
          to="/tokushoho"
          style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textDecoration: "none" }}
        >
          特定商取引法に基づく表記
        </Link>
      </div>

      {/* Copyright */}
      <div style={{ padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 10, color: "rgba(255,255,255,.2)" }}>
          &copy; 2026 満室デザインLABO ／ KAI &amp; KEN
        </p>
      </div>
    </footer>
  );
}
