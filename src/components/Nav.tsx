import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { M, C, LINE_URL } from '../tokens';

const links = [
  { href: '#service', label: 'サービス' },
  { href: '#works', label: '施工実績' },
  { href: '#pricing', label: '料金' },
  { href: '#faq', label: 'よくある質問' },
  { href: '/articles', label: '記事', isRoute: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const show = scrolled || open;

  const font: React.CSSProperties = {
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textDecoration: 'none',
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          height: 60, display: 'flex', alignItems: 'center', padding: '0 20px',
          backgroundColor: show ? 'rgba(68,41,64,0.95)' : 'transparent',
          backdropFilter: show ? 'blur(8px)' : 'none',
          transition: 'background-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/images/logo-manshitsu-h-gold.png"
            alt="満室デザインLABO"
            style={{ height: 28, objectFit: 'contain' }}
          />
        </Link>

        {/* PC nav */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 24, alignItems: 'center' }} className="hp-nav-pc">
          {links.map((l) =>
            l.isRoute ? (
              <Link key={l.label} to={l.href} style={{ ...font, color: 'rgba(255,255,255,0.8)' }}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} style={{ ...font, color: 'rgba(255,255,255,0.8)' }}>
                {l.label}
              </a>
            ),
          )}
          <a
            href={LINE_URL}
            style={{
              ...font, fontSize: 12, color: '#fff', backgroundColor: C.lineGreen,
              padding: '6px 16px', borderRadius: 4,
            }}
          >
            LINE相談
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="hp-nav-ham"
          aria-label="メニュー"
          style={{
            marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, display: 'flex', flexDirection: 'column', gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: 'block', width: 22, height: 2, backgroundColor: '#fff', borderRadius: 1 }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 300,
          backgroundColor: 'rgba(68,41,64,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute', top: 16, right: 20, background: 'none', border: 'none',
            cursor: 'pointer', color: '#fff', fontSize: 28, padding: 8,
          }}
        >
          ✕
        </button>
        {links.map((l) =>
          l.isRoute ? (
            <Link key={l.label} to={l.href} style={{ ...font, color: '#fff', fontSize: 18 }}>
              {l.label}
            </Link>
          ) : (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ ...font, color: '#fff', fontSize: 18 }}>
              {l.label}
            </a>
          ),
        )}
        <a
          href={LINE_URL}
          style={{
            ...font, color: '#fff', fontSize: 14, backgroundColor: C.lineGreen,
            padding: '10px 32px', borderRadius: 4, marginTop: 8,
          }}
        >
          LINEで無料見積もり
        </a>
      </div>

      <style>{`
        .hp-nav-pc{display:flex}
        .hp-nav-ham{display:none!important}
        @media(max-width:768px){.hp-nav-pc{display:none!important}.hp-nav-ham{display:flex!important}}
      `}</style>
    </>
  );
}
