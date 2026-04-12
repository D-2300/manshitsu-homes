import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { M, C } from "../../tokens";

const links = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/articles", label: "Articles" },
  { href: "/pricing", label: "Pricing" },
];

export default function ManshitsuNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navBg = scrolled
    ? "rgba(68,41,64,0.92)"
    : "rgba(68,41,64,0.6)";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          background: navBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: 900,
              color: C.gold,
              letterSpacing: "0.05em",
            }}
          >
            満室デザインLABO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="mnav-pc" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: location.pathname === l.href ? C.gold : "rgba(255,255,255,.7)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="mnav-ham"
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="7" x2="20" y2="7" stroke="#fff" strokeWidth="1.5" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="#fff" strokeWidth="1.5" />
            <line x1="4" y1="17" x2="20" y2="17" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </button>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: `rgba(68,41,64,0.97)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="メニューを閉じる"
            style={{
              position: "absolute",
              top: "16px",
              right: "20px",
              background: "none",
              border: "none",
              fontSize: "28px",
              color: "rgba(255,255,255,.6)",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: location.pathname === l.href ? C.gold : "#fff",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mnav-pc { display: none !important; }
          .mnav-ham { display: flex !important; }
        }
      `}</style>
    </>
  );
}
