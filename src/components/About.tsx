import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

export default function About() {
  return (
    <section
      style={{
        backgroundColor: M.dark,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="About" ja="私たちについて" dark />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div
            id="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 240px) 1fr',
              gap: 32,
              alignItems: 'start',
            }}
          >
            {/* Photo */}
            <img
              src="/images/about-dai-sm.webp"
              alt="代表"
              style={{
                width: '100%',
                maxHeight: 280,
                objectFit: 'cover',
                borderRadius: 6,
              }}
              loading="lazy"
            />

            {/* Text */}
            <div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 2.2,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                }}
              >
                満室デザインLABOは、仙台の店舗内装工事会社
                <a
                  href="https://kiokuso.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: C.gold,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${C.gold}44`,
                  }}
                >
                  「記憶荘」
                </a>
                が運営する、賃貸オーナー様専門の原状回復・空室対策サービスです。
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 2.2,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                  marginTop: 16,
                }}
              >
                年間50件以上の店舗内装で培った施工技術を、賃貸物件の原状回復にも活かしています。
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 2.2,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                  marginTop: 16,
                }}
              >
                管理会社を通さない分離発注で中間マージンをカット。同じ工事内容でも、30〜50%のコスト削減が可能です。
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 300,
                  marginTop: 24,
                  letterSpacing: '0.04em',
                }}
              >
                対応エリア：仙台市・宮城県全域
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* SP: 1 column */}
        <style>{`
          @media (max-width: 600px) {
            #about-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
