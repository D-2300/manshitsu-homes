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
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 20% 80%, ${M.main}33 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${C.gold}11 0%, transparent 50%)`,
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
          }}
        >
          管理会社を通さない、
          <br />
          原状回復。
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: 'clamp(13px, 3vw, 15px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.65)',
            fontWeight: 300,
            maxWidth: 480,
            margin: '0 auto 40px',
          }}
        >
          中間マージン0円。
          <br />
          店舗内装のプロが直接施工する、
          <br />
          賃貸オーナーのための修繕サービス。
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

        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            marginTop: 48,
            flexWrap: 'wrap',
          }}
        >
          {['クロス 900円/㎡〜', '中間マージン 0円', '見積もり無料'].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                letterSpacing: '0.08em',
                color: C.gold,
                border: `1px solid ${C.gold}33`,
                padding: '6px 14px',
              }}
            >
              {t}
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
