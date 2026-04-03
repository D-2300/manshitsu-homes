import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';
import { Clock, Camera, BadgeJapaneseYen, Palette, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: { Icon: LucideIcon; title: string; desc: string; highlight?: boolean }[] = [
  { Icon: Clock, title: '最短2日で原状回復完了', desc: '管理会社経由だと連絡から着工まで2〜4週間。直接取引だから即判断・即着工。退去連絡から最短2日で施工完了、空室期間を最小限に。', highlight: true },
  { Icon: MessageCircle, title: '直接取引で即判断・即着工', desc: '伝言ゲームなし。オーナー様と直接やり取りするから、判断が速い。現場を見てその場で概算、翌日着工も可能。' },
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
                  backgroundColor: r.highlight ? C.goldPale : '#fff',
                  border: `1px solid ${r.highlight ? C.gold + '44' : M.light + '33'}`,
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
