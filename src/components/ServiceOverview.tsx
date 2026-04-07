import { Palette, Sofa, Hammer } from 'lucide-react';
import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const strengths = [
  {
    num: '01',
    icon: Palette,
    title: 'カラーバリエーションを無料で提案',
    desc: '空室写真をLINEで送るだけ。AIが壁の色を変えた複数パターンを生成します。ブルー・グリーン・ワインなど、入居希望者が好みの色を選べるようになります。',
    accent: M.main,
  },
  {
    num: '02',
    icon: Sofa,
    title: '家具を配置した生活イメージも作成',
    desc: '選んだカラーに合わせて家具を配置したイメージ画像を生成。入居後の暮らしが想像できるから、内見なしでも「ここに住みたい」と思ってもらえます。',
    accent: C.gold,
  },
  {
    num: '03',
    icon: Hammer,
    title: '選ばれた内装をそのまま施工',
    desc: '入居者が選んだデザインをそのまま施工。管理会社を通さない直接依頼だから中間マージンなし。大工歴20年のKENが自社施工で適正価格を実現します。',
    accent: M.main,
  },
];

export default function ServiceOverview() {
  return (
    <section
      id="service"
      style={{
        backgroundColor: M.dark,
        padding: '56px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Service" ja="サービス内容" dark />
        </ScrollFadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollFadeIn key={s.num} delay={i * 0.12}>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                    background: 'rgba(255,255,255,.06)',
                    borderRadius: 12,
                    padding: '20px 18px',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: s.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '.14em',
                        color: C.gold,
                        display: 'block',
                        marginBottom: 2,
                      }}
                    >
                      STEP {s.num}
                    </span>
                    <h3
                      style={{
                        fontSize: 'clamp(15px, 3.5vw, 18px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 8,
                        letterSpacing: '0.02em',
                        lineHeight: 1.4,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.9,
                        color: 'rgba(255,255,255,0.55)',
                        fontWeight: 300,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>

        {/* 補足 */}
        <ScrollFadeIn delay={0.4}>
          <p
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,.35)',
              textAlign: 'center',
              lineHeight: 1.7,
              marginTop: 20,
            }}
          >
            ※ ステージング画像はCG表記でSUUMO・アットホーム・ジモティー・SNSに掲載OK（景品表示法クリア）
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
