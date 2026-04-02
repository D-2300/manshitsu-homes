import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';
import { Zap, Camera, BadgeJapaneseYen, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Zap, title: '退去当日の見積もり対応', desc: '退去立会い後、その日のうちに現地確認・概算見積もりが可能。スピード対応で空室期間を最短に。' },
  { Icon: Camera, title: '写真付き施工報告', desc: '施工前・施工中・完了後の写真をLINEで共有。遠方のオーナー様でも安心して任せられます。' },
  { Icon: BadgeJapaneseYen, title: 'クロス900円/㎡〜の明朗会計', desc: '項目別の明細見積もり。管理会社の「一式○○万円」とは違い、何にいくらかかるか全て見える。' },
  { Icon: Palette, title: 'アクセントクロスで差別化', desc: '一面だけ色を変えるアクセントクロス、デザイン照明。低コストで「選ばれる部屋」に変える提案力。' },
];

export default function WhySection() {
  return (
    <section
      style={{
        backgroundColor: C.warmWhite,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Why Us" ja="満室デザインLABOが選ばれる理由" />
        </ScrollFadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {reasons.map((r, i) => (
            <ScrollFadeIn key={r.title} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: '#fff',
                  border: `1px solid ${M.light}33`,
                  padding: 28,
                  height: '100%',
                }}
              >
                <r.Icon size={24} color={C.gold} style={{ marginBottom: 12 }} />
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: C.textDark,
                    marginBottom: 10,
                    letterSpacing: '0.02em',
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.9, color: C.textMid, fontWeight: 300 }}>
                  {r.desc}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
