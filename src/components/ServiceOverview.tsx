import { M, C } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const strengths = [
  {
    num: '01',
    title: '中間マージン0円',
    desc: '管理会社を通さず、オーナーから直接ご依頼いただく分離発注方式。同じ工事内容でも、30〜50%のコスト削減が可能です。',
  },
  {
    num: '02',
    title: '店舗品質の仕上がり',
    desc: '年間50件以上の店舗内装を手がけるプロの職人が施工。賃貸の原状回復でも、店舗レベルの丁寧さで仕上げます。',
  },
  {
    num: '03',
    title: 'ただ戻すだけじゃない',
    desc: '元通りに戻すだけでなく、次の入居者が決まるデザイン提案も可能。アクセントクロスやデザイン照明で空室対策。',
  },
];

export default function ServiceOverview() {
  return (
    <section
      id="service"
      style={{
        backgroundColor: M.dark,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Service" ja="サービス内容" dark />
        </ScrollFadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {strengths.map((s, i) => (
            <ScrollFadeIn key={s.num} delay={i * 0.12}>
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 200,
                    color: C.gold,
                    fontFamily: "'Cormorant Garamond', serif",
                    lineHeight: 1,
                    minWidth: 40,
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(16px, 4vw, 20px)',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: 10,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 2,
                      color: 'rgba(255,255,255,0.75)',
                      fontWeight: 300,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
