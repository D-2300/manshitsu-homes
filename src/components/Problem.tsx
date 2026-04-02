import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

export default function Problem() {
  return (
    <section
      id="service"
      style={{
        backgroundColor: C.warmWhite,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Problem" ja="こんな経験、ありませんか" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div
            style={{
              backgroundColor: M.bg,
              border: `1px solid ${M.light}44`,
              padding: 'clamp(24px, 5vw, 40px)',
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                lineHeight: 2,
                color: C.textDark,
                fontWeight: 400,
              }}
            >
              退去のたびに管理会社から届く、
              <br />
              <strong style={{ color: M.main }}>高額な原状回復の見積書。</strong>
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div
            style={{
              textAlign: 'center',
              padding: '32px 20px',
              marginBottom: 32,
            }}
          >
            <div style={{ fontSize: 13, color: C.warmGray, marginBottom: 12 }}>
              例えば、こんな見積もりが来ていませんか？
            </div>
            <div
              style={{
                fontSize: 'clamp(20px, 5vw, 28px)',
                fontWeight: 700,
                color: M.main,
                lineHeight: 1.6,
              }}
            >
              クロス張替え{' '}
              <span style={{ color: C.accentRed, fontSize: 'clamp(24px, 6vw, 36px)' }}>
                ¥1,500
              </span>
              <span style={{ fontSize: 14, color: C.textMid }}>/㎡</span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: C.accentRed,
                fontWeight: 500,
                marginTop: 8,
              }}
            >
              ← これ、相場の1.5倍以上です
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: '0 8px',
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 2, color: C.textMid, fontWeight: 300 }}>
              管理会社 → 元請け → 下請け。
              <br />
              中間マージンが<strong style={{ color: C.textDark, fontWeight: 500 }}>2〜3層</strong>乗っている構造です。
            </p>
            <p style={{ fontSize: 14, lineHeight: 2, color: C.textMid, fontWeight: 300 }}>
              あなたが払っている原状回復費の<strong style={{ color: C.textDark, fontWeight: 500 }}>30〜50%</strong>は、
              実際の工事には使われていません。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
