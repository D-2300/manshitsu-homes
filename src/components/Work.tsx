import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const pickup = {
  title: '1LDK 全面リフォーム',
  location: '仙台市青葉区',
  specs: [
    { label: 'Cost', value: '¥85,000' },
    { label: 'Period', value: '3日' },
    { label: 'Type', value: '1LDK / 40㎡' },
    { label: 'Work', value: 'クロス+CF+清掃' },
  ],
  before: '/images/m-before-1-sm.webp',
  after: '/images/m-after-accent-sm.webp',
  story:
    '退去後、管理会社の見積もりは18万円。オーナー様がLINEで見積書を送ってくださり、同じ内容で8.5万円の見積もりを提示。クロス全面張替え＋アクセントクロス1面＋クッションフロア張替え＋クリーニングで、次の入居者が2週間で決まった。',
};

const cases = [
  {
    title: '2LDK アクセントクロス施工',
    cost: '¥52,000',
    period: '2日',
    before: '/images/m-before-2-sm.webp',
    after: '/images/m-after-green-sm.webp',
  },
  {
    title: '1K クリーニング＋部分張替え',
    cost: '¥28,000',
    period: '1日',
    before: '/images/m-before-3-sm.webp',
    after: '/images/m-after-herringbone-sm.webp',
  },
  {
    title: '3LDK 退去時原状回復',
    cost: '¥145,000',
    period: '5日',
    before: '/images/m-before-1-sm.webp',
    after: '/images/m-after-led-sm.webp',
  },
];

export default function Work() {
  return (
    <section
      id="works"
      style={{ backgroundColor: M.dark, padding: '80px 24px' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Works" ja="施工実績" dark />
        </ScrollFadeIn>

        {/* Pickup */}
        <ScrollFadeIn>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.gold, marginBottom: 12 }}>
              PICKUP
            </div>
            <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#fff', fontWeight: 600, marginBottom: 16 }}>
              {pickup.title}
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginLeft: 12 }}>
                {pickup.location}
              </span>
            </h3>

            {/* Spec grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                backgroundColor: `${M.main}44`,
                border: `1px solid ${M.main}44`,
                marginBottom: 20,
              }}
            >
              {pickup.specs.map((s) => (
                <div key={s.label} style={{ backgroundColor: M.dark, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 14, color: '#fff' }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Before/After images */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: 6, textTransform: 'uppercase' }}>Before</div>
                <img src={pickup.before} alt="施工前" style={{ width: '100%', height: 180, objectFit: 'cover', filter: 'grayscale(30%)' }} loading="lazy" />
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: C.gold, marginBottom: 6, textTransform: 'uppercase' }}>After</div>
                <img src={pickup.after} alt="施工後" style={{ width: '100%', height: 180, objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 2, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              {pickup.story}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Other cases */}
        <ScrollFadeIn>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
            OTHER WORKS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {cases.map((c) => (
              <div key={c.title} style={{ border: `1px solid ${M.main}44` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  <img src={c.before} alt="Before" style={{ width: '100%', height: 100, objectFit: 'cover', filter: 'grayscale(30%)' }} loading="lazy" />
                  <img src={c.after} alt="After" style={{ width: '100%', height: 100, objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                    {c.cost} / {c.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
