import { ArrowRight } from 'lucide-react';
import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const rows = [
  { item: 'クロス張替え（量産品）', unit: '/㎡', mgmt: '¥1,200〜1,500', ours: '¥900〜' },
  { item: 'アクセントクロス（1面）', unit: '/面', mgmt: '¥25,000〜', ours: '¥15,000〜' },
  { item: 'CF張替え', unit: '/㎡', mgmt: '¥4,000〜5,000', ours: '¥2,800〜' },
  { item: 'ハウスクリーニング（1K）', unit: '/回', mgmt: '¥30,000〜50,000', ours: '¥21,000〜' },
  { item: 'バーチャルステージング', unit: '/件', mgmt: '¥5,000〜/枚', ours: '¥0', highlight: true },
];

export default function Comparison() {
  return (
    <section style={{ backgroundColor: M.bg, padding: '56px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Price" ja="料金比較" />

          <h2
            style={{
              fontSize: 'clamp(20px, 4.5vw, 28px)',
              fontWeight: 700,
              color: C.textDark,
              textAlign: 'center',
              lineHeight: 1.6,
              marginBottom: 8,
            }}
          >
            もし工事するなら、
            <br />
            <span style={{ color: M.main }}>直接依頼で適正価格。</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(13px, 2.3vw, 15px)',
              color: C.textMid,
              textAlign: 'center',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            管理会社を通さず直接ご依頼いただけます。
            <br />
            中間マージンがないぶん、適正価格で施工。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div style={{ borderRadius: 10, overflow: 'hidden', border: `1px solid ${M.light}44`, marginBottom: 24 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: M.dark }}>
              <div style={{ padding: '10px 12px', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.5)', letterSpacing: '.06em' }}>施工内容</div>
              <div style={{ padding: '10px 12px', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.5)', textAlign: 'center', letterSpacing: '.06em' }}>管理会社経由</div>
              <div style={{ padding: '10px 12px', fontSize: 11, fontWeight: 600, color: '#fff', textAlign: 'center', letterSpacing: '.06em', backgroundColor: M.main }}>満室デザインLABO</div>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  backgroundColor: r.highlight ? `${C.goldPale}66` : i % 2 === 0 ? '#fff' : `${M.bg}44`,
                  borderTop: `1px solid ${M.light}22`,
                }}
              >
                <div style={{ padding: '10px 12px', fontSize: 12, color: C.textDark, lineHeight: 1.5 }}>
                  {r.item}
                  <span style={{ display: 'block', fontSize: 10, color: C.warmGray }}>{r.unit}</span>
                </div>
                <div style={{ padding: '10px 12px', fontSize: 12, color: C.warmGray, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {r.mgmt}
                </div>
                <div style={{ padding: '10px 12px', fontSize: 13, fontWeight: 600, color: r.highlight ? C.gold : M.main, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  {r.highlight && <ArrowRight size={12} />}
                  {r.ours}
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div style={{ padding: '16px 18px', backgroundColor: '#fff', borderRadius: 10, border: '1px solid #e8e6e0' }}>
            <p style={{ fontSize: 'clamp(13px, 2.5vw, 15px)', fontWeight: 700, color: C.textDark, marginBottom: 6 }}>
              なぜ安い？
            </p>
            <p style={{ fontSize: 'clamp(13px, 2.2vw, 14px)', color: C.textMid, lineHeight: 1.8, margin: 0 }}>
              自社施工＋管理会社の中間マージンなし。外注に出さないから。
              <br />
              KEN（大工歴20年）が直接施工します。最短2日で完了。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
