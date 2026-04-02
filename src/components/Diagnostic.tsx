import { useState } from 'react';
import { M, C, LINE_URL } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const layouts = ['1K', '1LDK', '2LDK', '3LDK'] as const;
const ages = ['〜10年', '10〜20年', '20年〜'] as const;
const conditions = ['軽微な汚れ', '通常の退去', '汚損・破損あり'] as const;

// 簡易的な概算ロジック
function estimate(layout: number, age: number, cond: number): [number, number] {
  const base = [25000, 55000, 85000, 130000][layout];
  const ageMul = [1, 1.2, 1.4][age];
  const condMul = [0.7, 1, 1.5][cond];
  const low = Math.round(base * ageMul * condMul * 0.85 / 1000) * 1000;
  const high = Math.round(base * ageMul * condMul * 1.15 / 1000) * 1000;
  return [low, high];
}

export default function Diagnostic() {
  const [layout, setLayout] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [cond, setCond] = useState<number | null>(null);

  const ready = layout !== null && age !== null && cond !== null;
  const [low, high] = ready ? estimate(layout!, age!, cond!) : [0, 0];

  const btnStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '10px 8px',
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    color: active ? '#fff' : C.textMid,
    backgroundColor: active ? M.main : '#fff',
    border: `1px solid ${active ? M.main : M.light + '44'}`,
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
  });

  return (
    <section
      style={{
        backgroundColor: M.bg,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Cost Simulator" ja="原状回復コスト診断" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: C.textMid, textAlign: 'center', marginBottom: 32 }}>
            3つの質問に答えるだけで、概算費用がわかります。
          </p>

          {/* Q1 間取り */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              Q1. 間取りを選んでください
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {layouts.map((l, i) => (
                <button key={l} onClick={() => setLayout(i)} style={btnStyle(layout === i)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Q2 築年数 */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              Q2. 築年数
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {ages.map((a, i) => (
                <button key={a} onClick={() => setAge(i)} style={btnStyle(age === i)}>
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Q3 状態 */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              Q3. 現在の状態
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {conditions.map((c, i) => (
                <button key={c} onClick={() => setCond(i)} style={btnStyle(cond === i)}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {ready && (
            <div
              style={{
                textAlign: 'center',
                backgroundColor: '#fff',
                border: `1px solid ${C.gold}44`,
                padding: '32px 20px',
                marginBottom: 20,
              }}
            >
              <div style={{ fontSize: 12, color: C.warmGray, letterSpacing: '0.1em', marginBottom: 8 }}>
                概算費用レンジ
              </div>
              <div style={{ fontSize: 'clamp(28px, 7vw, 40px)', fontWeight: 700, color: M.main }}>
                ¥{low.toLocaleString()} 〜 ¥{high.toLocaleString()}
              </div>
              <div style={{ fontSize: 11, color: C.warmGray, marginTop: 8 }}>
                ※ 実際の費用は現地確認後にお見積もりします
              </div>
              <a
                href={LINE_URL}
                style={{
                  display: 'inline-block',
                  marginTop: 20,
                  backgroundColor: C.lineGreen,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '10px 28px',
                  borderRadius: 4,
                  textDecoration: 'none',
                }}
              >
                LINEで正確な見積もりを依頼
              </a>
            </div>
          )}
        </ScrollFadeIn>
      </div>
    </section>
  );
}
