import { useState } from 'react';
import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const faqs = [
  {
    q: 'カラーバリエーションとは何ですか？',
    a: '空室の写真をもとに、AIが壁の色を変えた複数パターン（ブルー・グリーン・ワイン・ブラックなど）を生成する技術です。入居希望者に好みの色を選んでもらい、選ばれた内装をそのまま施工します。',
  },
  {
    q: '家具配置イメージとは何ですか？',
    a: '選んだカラーの部屋にAIで家具を配置し、入居後の生活イメージを再現した画像です。ナチュラル・モダン・ガーリーなどテイスト別に生成します。内見なしでも「ここに住みたい」と思ってもらえる効果があります。',
  },
  {
    q: 'ステージング画像をポータルサイトに掲載しても大丈夫？',
    a: 'はい。CG画像である旨を表記すれば、SUUMO・アットホーム・ジモティー・Instagramなどに掲載OKです（景品表示法クリア）。CG表記テンプレートもお渡しします。',
  },
  {
    q: '本当に無料ですか？後から費用が発生しませんか？',
    a: 'カラーバリエーション画像＋家具配置イメージ＋改善提案書、すべて完全無料です。施工を依頼しなくても画像だけもらって大丈夫です。営業電話もしません。施工をご依頼いただいた場合のみ、施工費用が発生します。',
  },
  {
    q: '写真は何枚送ればいいですか？',
    a: '1枚からOKです。リビング・キッチン・バスルームなど複数送っていただければ、それぞれのカラーバリエーションと家具配置イメージを作成します。スマホで撮った写真で問題ありません。',
  },
  {
    q: '入居者が選んだデザインは本当に施工できますか？',
    a: 'はい。AI画像で提案したカラーを実際に施工します。管理会社を通さない直接依頼なので中間マージンなし。KEN（大工歴20年）が自社施工で適正価格を実現します。',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ backgroundColor: C.warmWhite, padding: '56px 24px' }}
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
