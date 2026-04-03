import { Link } from 'react-router-dom';
import { M, C, TEL_DISPLAY } from '../tokens';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: M.dark, borderTop: `1px solid ${M.main}44`, padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="/images/logo-manshitsu-mark-white.webp"
              alt="満室デザインLABO"
              loading="lazy"
              style={{ height: 44, objectFit: 'contain', opacity: 0.8, marginBottom: 12 }}
            />
            <div style={{ fontSize: 16, fontWeight: 700, color: C.gold, letterSpacing: '0.05em', marginBottom: 8 }}>
              満室デザインLABO
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
              対応エリア：仙台市・宮城県全域
              <br />
              📞 {TEL_DISPLAY}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { href: '/#service', label: 'サービス' },
              { href: '/#works', label: '施工実績' },
              { href: '/#pricing', label: '料金' },
              { href: '/#faq', label: 'FAQ' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                }}
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/articles"
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
              }}
            >
              記事
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
            © 満室デザインLABO. All rights reserved.
          </p>
          <p style={{ margin: '6px 0 0', fontSize: 10, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.03em' }}>
            Produced by 記憶荘
          </p>
        </div>
      </div>
    </footer>
  );
}
