import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const colorShowcase = [
  { src: '/images/vs-color-blue.jpeg', label: 'ブルー' },
  { src: '/images/vs-color-green.jpeg', label: 'グリーン' },
  { src: '/images/vs-color-black.jpeg', label: 'ブラック' },
  { src: '/images/vs-color-wine.jpeg', label: 'ワイン' },
  { src: '/images/vs-color-gray.jpeg', label: 'グレー' },
  { src: '/images/vs-color-yellow.jpeg', label: 'イエロー' },
];

const stagedShowcase = [
  { src: '/images/vs-staged-black.jpeg', label: '男性向け・モダン' },
  { src: '/images/vs-staged-green.jpeg', label: 'ナチュラル' },
  { src: '/images/vs-staged-pink.jpeg', label: '女性向け・ガーリー' },
];

export default function Work() {
  return (
    <section
      id="works"
      style={{ backgroundColor: '#fff', padding: '56px 24px' }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Showcase" ja="ステージング事例" />

          <p
            style={{
              fontSize: 'clamp(13px, 2.3vw, 15px)',
              color: C.textMid,
              textAlign: 'center',
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            空室写真を送るだけで、こんなイメージ画像が届きます。
            <br />
            すべて無料・CG表記でポータル掲載OK。
          </p>
        </ScrollFadeIn>

        {/* Before */}
        <ScrollFadeIn delay={0.05}>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <img
              src="/images/vs-before.jpeg"
              alt="退去直後の空室"
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: 10, filter: 'brightness(0.9) grayscale(0.2)' }}
              loading="lazy"
            />
            <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 10, fontWeight: 700, color: '#fff', backgroundColor: 'rgba(0,0,0,0.6)', padding: '3px 10px', borderRadius: 4, letterSpacing: '.1em' }}>
              BEFORE
            </span>
          </div>
        </ScrollFadeIn>

        {/* STEP 1: Color variations */}
        <ScrollFadeIn delay={0.1}>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: M.main, textAlign: 'center', marginBottom: 8, letterSpacing: '.06em' }}>
              STEP 1 ─ カラーバリエーション
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
              {colorShowcase.map((img, i) => (
                <div key={i}>
                  <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                    <img src={img.src} alt={img.label} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: C.textMid, textAlign: 'center', marginTop: 3 }}>{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* STEP 2: Furniture staging */}
        <ScrollFadeIn delay={0.2}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.gold, textAlign: 'center', marginBottom: 8, letterSpacing: '.06em' }}>
              STEP 2 ─ 家具を配置した生活イメージ
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
              {stagedShowcase.map((img, i) => (
                <div key={i}>
                  <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                    <img src={img.src} alt={img.label} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: C.gold, textAlign: 'center', marginTop: 3 }}>{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
