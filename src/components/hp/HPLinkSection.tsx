import { Link } from "react-router-dom";
import { M, C } from "../../tokens";

const sections = [
  { href: "/about", label: "About", sub: "スタジオについて" },
  { href: "/works", label: "Works", sub: "施工事例" },
  { href: "/pricing", label: "Pricing", sub: "料金の考え方" },
];

export default function HPLinkSection() {
  return (
    <section style={{ padding: "48px 20px", background: C.warmWhite }}>
      <div
        className="hp-link-grid"
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {sections.map((s) => (
          <Link
            key={s.href}
            to={s.href}
            style={{
              display: "block",
              padding: "28px 20px",
              background: "#fff",
              borderRadius: "12px",
              textDecoration: "none",
              textAlign: "center",
              border: "1px solid #e8e5de",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 3.5vw, 20px)",
                fontWeight: 700,
                color: M.main,
                marginBottom: "4px",
                letterSpacing: "0.05em",
              }}
            >
              {s.label}
            </p>
            <p style={{ fontSize: "12px", color: C.warmGray }}>
              {s.sub}
            </p>
            <p style={{ fontSize: "13px", color: M.mid, marginTop: "8px" }}>→</p>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hp-link-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
