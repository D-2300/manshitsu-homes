import { Clock, Zap, Star } from 'lucide-react';
import { M, C, LINE_URL } from '../tokens';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        backgroundColor: M.dark,
        overflow: 'hidden',
      }}
    >
      {/* Background image — high visibility */}
      <img
        src="/images/hero-bg.webp"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.85,
          zIndex: 0,
        }}
      />
      {/* Light overlay for text readability */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `linear-gradient(to top, ${M.dark}cc 0%, ${M.dark}66 40%, ${M.dark}33 100%)`,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
        {/* Label */}
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.25em',
            color: C.gold,
            fontWeight: 300,
            textTransform: 'uppercase',
            marginBottom: 24,
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          Manshitsu Design LABO
        </div>

        {/* Main copy */}
        <h1
          style={{
            fontSize: 'clamp(26px, 6vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.5,
            color: '#fff',
            letterSpacing: '0.04em',
            marginBottom: 24,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          最短2日。
          <br />
          管理会社を通さない、原状回復。
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: 'clamp(13px, 3vw, 15px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 300,
            maxWidth: 480,
            margin: '0 auto 40px',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          退去連絡から最短2日で原状回復完了。
          <br />
          中間マージン0円。
          <br />
          店舗内装のプロが直接施工する修繕サービス。
        </p>

        {/* CTA */}
        <a
          href={LINE_URL}
          style={{
            display: 'inline-block',
            backgroundColor: C.lineGreen,
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.1em',
            padding: '14px 40px',
            borderRadius: 4,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          LINE で無料見積もり
        </a>

        {/* Trust badges — LPと統一（最短2日 / 中間マージン0円 / 初回お試し価格） */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginTop: 48,
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: Clock, label: '最短2日' },
            { icon: Zap, label: '中間マージン0円' },
            { icon: Star, label: '初回お試し価格' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: C.gold,
                backgroundColor: 'rgba(201,168,76,0.15)',
                border: `1px solid rgba(201,168,76,0.3)`,
                padding: '6px 14px',
                borderRadius: 4,
              }}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          animation: 'scrollBounce 2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.3)' }}>↓</span>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
