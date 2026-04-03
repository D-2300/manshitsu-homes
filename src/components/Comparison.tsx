import { ArrowRight } from 'lucide-react';
import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const rows = [
  { label: '連絡〜着工', old: '2〜4週間', new: '最短翌日', highlight: true },
  { label: '施工期間', old: '1〜2週間', new: '最短2日', highlight: true },
  { label: '中間マージン', old: 'あり（30〜50%）', new: '0円', highlight: false },
  { label: '見積もり透明性', old: '一式○○万円', new: '項目別明細', highlight: false },
  { label: '施工後フォロー', old: '再度管理会社経由', new: '直接LINE対応', highlight: false },
];

export default function Comparison() {
  return (
    <section style={{ backgroundColor: M.bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Comparison" ja="従来の管理会社経由との違い" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${M.light}44` }}>
            {/* Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                backgroundColor: M.dark,
                color: '#fff',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <div style={{ padding: 12 }} />
              <div style={{ padding: 12, textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                管理会社経由
              </div>
              <div
                style={{
                  padding: 12,
                  textAlign: 'center',
                  borderLeft: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: M.main,
                }}
              >
                満室デザインLABO
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  fontSize: 13,
                  borderTop: `1px solid ${M.light}22`,
                  backgroundColor: i % 2 === 0 ? '#fff' : `${M.bg}44`,
                }}
              >
                <div style={{ padding: 12, fontWeight: 500, color: C.textDark, fontSize: 12 }}>
                  {row.label}
                </div>
                <div
                  style={{
                    padding: 12,
                    textAlign: 'center',
                    color: C.warmGray,
                    borderLeft: `1px solid ${M.light}22`,
                    fontSize: 12,
                  }}
                >
                  {row.old}
                </div>
                <div
                  style={{
                    padding: 12,
                    textAlign: 'center',
                    borderLeft: `1px solid ${M.light}22`,
                    fontSize: 12,
                    fontWeight: 700,
                    color: row.highlight ? C.gold : C.textDark,
                    backgroundColor: row.highlight ? `${C.goldPale}66` : undefined,
                  }}
                >
                  {row.highlight && <ArrowRight size={12} style={{ display: 'inline', marginRight: 4, color: C.gold }} />}
                  {row.new}
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
