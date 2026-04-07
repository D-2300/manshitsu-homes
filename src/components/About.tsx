import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const team = [
  {
    name: 'KEN',
    role: 'CSO / 大工歴20年',
    photo: '/images/about-ken-sm.webp',
    desc: '店舗内装で培った空間づくりの技術を、賃貸オーナー様の空室対策に。「写真を送るだけで印象が変わりますよ」の提案力が強みです。',
    tags: ['店舗施工50件+/年', '仙台密着'],
  },
  {
    name: 'KAI',
    role: '不動産アドバイザー',
    photo: '/images/about-kai-sm.webp',
    desc: '元不動産仲介。入居者目線で物件の強み・弱みを客観的に診断します。改善提案書と掲載アドバイスはKAIが担当。',
    tags: ['元不動産仲介', '客付け戦略'],
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#fff',
        padding: '56px 24px',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Team" ja="担当者紹介" />
        </ScrollFadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {team.map((t, i) => (
            <ScrollFadeIn key={t.name} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: C.warmWhite,
                  borderRadius: 12,
                  padding: 24,
                  border: `1px solid ${C.goldPale}`,
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 12 }}>
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: M.main, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 700, flexShrink: 0 }}>
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: C.textDark }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: C.warmGray }}>{t.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: C.textMid, marginBottom: 12 }}>
                  {t.desc}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: C.gold,
                        backgroundColor: C.goldPale,
                        padding: '4px 10px',
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn delay={0.25}>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <img
              src="/images/logo-manshitsu-mark-white.webp"
              alt="満室デザインLABO"
              loading="lazy"
              style={{ height: 36, objectFit: 'contain', opacity: 0.6, marginBottom: 8 }}
            />
            <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.8 }}>
              満室デザインLABOは、仙台の店舗内装工事会社
              <a href="https://kiokuso.com" target="_blank" rel="noopener noreferrer" style={{ color: M.main, textDecoration: 'none', borderBottom: `1px solid ${M.main}44` }}>
                記憶荘
              </a>
              が運営しています。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
