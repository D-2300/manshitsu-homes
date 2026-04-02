import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const rows = [
  { name: 'クロス張替え（量産）', unit: '㎡', price: '900円〜' },
  { name: 'クロス張替え（1000番台）', unit: '㎡', price: '1,200円〜' },
  { name: 'アクセントクロス', unit: '㎡', price: '1,400円〜' },
  { name: 'クッションフロア（CF）', unit: '㎡', price: '2,800円〜' },
  { name: 'クリーニング（1K）', unit: '式', price: '25,000円〜' },
  { name: 'クリーニング（2LDK）', unit: '式', price: '40,000円〜' },
  { name: '巾木交換', unit: 'm', price: '600円〜' },
  { name: '照明交換（シーリング）', unit: '箇所', price: '3,000円〜' },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ backgroundColor: C.warmWhite, padding: '80px 24px' }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Pricing" ja="料金" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div style={{ overflow: 'hidden', border: `1px solid ${M.light}33` }}>
            {/* Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 60px 100px',
                backgroundColor: M.main,
                padding: '10px 16px',
              }}
            >
              <span style={{ fontSize: 12, color: '#fff', fontWeight: 500 }}>工事内容</span>
              <span style={{ fontSize: 12, color: '#fff', fontWeight: 500, textAlign: 'center' }}>単位</span>
              <span style={{ fontSize: 12, color: '#fff', fontWeight: 500, textAlign: 'right' }}>単価</span>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div
                key={r.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 100px',
                  padding: '12px 16px',
                  backgroundColor: i % 2 === 0 ? '#fff' : C.warmWhite,
                  borderTop: `1px solid ${M.light}22`,
                }}
              >
                <span style={{ fontSize: 13, color: C.textDark }}>{r.name}</span>
                <span style={{ fontSize: 12, color: C.warmGray, textAlign: 'center' }}>{r.unit}</span>
                <span style={{ fontSize: 13, color: M.main, fontWeight: 600, textAlign: 'right' }}>{r.price}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              padding: '20px 24px',
              backgroundColor: C.goldPale,
              border: `1px solid ${C.gold}33`,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 13, color: C.textDark, lineHeight: 1.8 }}>
              <strong>管理会社の見積書をLINEで送るだけ</strong>
              <br />
              同じ工事内容で比較見積もりをお出しします
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
