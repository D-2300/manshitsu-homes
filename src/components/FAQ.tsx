import { useState } from 'react';
import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const faqs = [
  {
    q: '管理会社を通さないで工事して問題ないですか？',
    a: 'はい、問題ありません。物件のオーナー（大家さん）が工事業者を選ぶ権利があります。管理委託契約の内容にもよりますが、多くの場合、原状回復の業者指定はオーナー様の裁量です。契約内容が不安な場合は、事前にご相談ください。',
  },
  {
    q: '見積もりは無料ですか？',
    a: 'はい、現地調査・見積もりは完全無料です。LINEで管理会社の見積書を送っていただければ、同じ内容での比較見積もりもお出しします。お気軽にどうぞ。',
  },
  {
    q: '遠方の物件でも対応できますか？',
    a: '仙台市・宮城県を中心に対応しています。東北エリアであれば対応可能な場合もありますので、まずはご相談ください。遠方のオーナー様には写真付きの施工報告をLINEでお送りしています。',
  },
  {
    q: '急ぎの工事にも対応できますか？',
    a: '可能な限り対応します。退去当日の見積もり、翌日着工の実績もあります。空室期間を最短にすることがオーナー様の利益になるので、スピード対応を心がけています。',
  },
  {
    q: '原状回復だけでなく、バリューアップ工事もできますか？',
    a: 'はい。アクセントクロス、デザイン照明、クッションフロアの変更など、低コストで部屋の魅力を上げる提案もしています。「ただ戻す」だけでなく「次の入居者が決まる部屋」にするのが、満室デザインLABOの強みです。',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ backgroundColor: C.warmWhite, padding: '80px 24px' }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="FAQ" ja="よくある質問" />
        </ScrollFadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <ScrollFadeIn key={i} delay={i * 0.06}>
                <div style={{ border: `1px solid ${M.light}33`, backgroundColor: '#fff' }}>
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 20px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 12,
                    }}
                  >
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: M.main,
                          backgroundColor: M.bg,
                          padding: '2px 8px',
                          borderRadius: 2,
                          flexShrink: 0,
                        }}
                      >
                        Q
                      </span>
                      <span style={{ fontSize: 14, color: C.textDark, fontWeight: 500, lineHeight: 1.6 }}>
                        {f.q}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        color: C.warmGray,
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 16px', display: 'flex', gap: 10 }}>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: C.gold,
                          backgroundColor: C.goldPale,
                          padding: '2px 8px',
                          borderRadius: 2,
                          flexShrink: 0,
                          height: 'fit-content',
                        }}
                      >
                        A
                      </span>
                      <p style={{ fontSize: 13, lineHeight: 1.9, color: C.textMid, fontWeight: 300 }}>
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
