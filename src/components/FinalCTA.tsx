import { M, C, LINE_URL, TEL, TEL_DISPLAY } from '../tokens';
import ScrollFadeIn from './ui/ScrollFadeIn';

export default function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: M.dark,
        padding: '80px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <ScrollFadeIn>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.25em',
              color: C.gold,
              fontWeight: 300,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Contact
          </div>

          <h2
            style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            管理会社の見積書、
            <br />
            LINEで送るだけ。
          </h2>

          <p
            style={{
              fontSize: 13,
              lineHeight: 2,
              color: 'rgba(255,255,255,0.75)',
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            見積書の写真を送っていただくだけで、
            <br />
            同じ工事内容での比較見積もりをお出しします。
            <br />
            もちろん、相談だけでもOKです。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                maxWidth: 320,
                backgroundColor: C.lineGreen,
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                padding: '16px 24px',
                borderRadius: 4,
                textDecoration: 'none',
                letterSpacing: '0.06em',
                boxShadow: '0 4px 16px rgba(6,199,85,0.3)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              LINEで無料見積もり
            </a>

            <a
              href={`tel:${TEL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                maxWidth: 320,
                backgroundColor: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 14,
                fontWeight: 400,
                padding: '14px 24px',
                borderRadius: 4,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.35)',
                letterSpacing: '0.04em',
              }}
            >
              📞 {TEL_DISPLAY}
            </a>
          </div>

          <p
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
              marginTop: 24,
              letterSpacing: '0.04em',
            }}
          >
            対応エリア：仙台市・宮城県全域
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
