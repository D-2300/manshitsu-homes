import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";
import { GoldDivider, SectionHeading, ScrollFadeIn, LineCTAButton } from "../shared";
import { M, C, typography, spacing, radius } from "../tokens";

const approaches = [
  {
    question: "なぜ「内装会社」が物件探しをやるのか？",
    answer:
      "不動産屋には「売りたい物件」がある。仲介手数料が高い物件、回転率がいい物件。お客さんの利益と自分たちの利益が一致しないことがある。私たちは内装工事の会社。物件の売買で儲ける立場にいないから、どの物件を選んでもらっても構わない。大家さんにとって本当にいい物件を、一緒に探せる立場にいます。",
  },
  {
    question: "なぜ「一式◯万円」にしないのか？",
    answer:
      "管理会社経由の見積書でよく見る「原状回復一式 ¥○○万」。何にいくらかかっているのか分からない。私たちは平米数・単価・材料名をすべて記載した見積書を出します。壁紙は900円/㎡、アクセントクロスは1面15,000円。何にいくら払っているかが分かれば、大家さんは自分で判断できる。",
  },
  {
    question: "なぜ管理会社より安いのか？",
    answer:
      "自社施工だから。中間マージンがない。大工歴20年のKENが設計から施工まで一人で完結するため、人件費が最小限に抑えられます。材料はサンゲツ・リリカラ等のJIS規格品を直接仕入れ。安かろう悪かろうではなく、中間コストをカットして適正価格を実現しています。",
  },
];

const profiles = [
  {
    name: "KAI",
    role: "物件探し・交渉担当",
    img: "/images/about-kai-sm.webp",
    body:
      "元不動産業。物件の仲介・管理を経験した後、店舗内装の世界へ。不動産会社との人脈が今もあり、ネットに出回る前の物件情報が入ります。利回り計算や交渉も得意分野。「不動産屋の都合ではなく、大家さんの利益で物件を選ぶ」がモットー。",
    tags: ["元不動産業", "物件交渉", "利回り計算"],
  },
  {
    name: "KEN",
    role: "現場・施工担当",
    img: "/images/about-ken-sm.webp",
    body:
      "大工一筋20年以上。店舗内装の設計・施工を年間30件以上手がけています。築古物件の「どこを直せば入居が決まるか」を、現場を見て即判断できます。入居後リフォームの施工は最短2日。",
    tags: ["大工歴20年+", "年間30件+施工", "設計〜施工一貫"],
  },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: typography.fontFamily, color: C.textDark }}>
      <ManshitsuNav />
      <SmallHero title="About" subtitle="私たちについて" />

      {/* ───────── Philosophy ───────── */}
      <section style={{ padding: `${spacing.section.lg} ${spacing.pagePadding}`, background: M.dark }}>
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <GoldDivider margin="0 auto 32px" />

            <blockquote
              style={{
                textAlign: "center",
                fontSize: typography.h3.size,
                fontWeight: typography.h3.weight,
                color: "#f0ede8",
                lineHeight: typography.h3.lineHeight,
                marginBottom: 32,
                padding: 0,
                border: "none",
              }}
            >
              不動産屋は冷たい。<br />
              うちは、<em style={{ fontStyle: "normal", color: C.gold }}>どこの物件になってもいい。</em>
            </blockquote>

            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(255,255,255,.15)",
                margin: "0 auto 32px",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.7)", lineHeight: typography.bodyLarge.lineHeight, textAlign: "center" }}>
                私たちは内装工事の会社です。<br />
                物件の売買で儲ける立場にいない。<br />
                だから、<strong style={{ color: "#f0ede8" }}>どの物件を選んでもらっても構わない。</strong>
              </p>
              <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.7)", lineHeight: typography.bodyLarge.lineHeight, textAlign: "center" }}>
                大家さんにとって本当にいい物件を、一緒に探す。<br />
                その物件を、一緒に良くする。<br />
                それが、私たちの仕事のかたちです。
              </p>
            </div>

            <GoldDivider margin="40px auto 32px" />

            <h3
              style={{
                textAlign: "center",
                fontSize: typography.h3.size,
                fontWeight: typography.h3.weight,
                color: "#f0ede8",
                lineHeight: typography.h3.lineHeight,
                marginBottom: 24,
              }}
            >
              入居者が「自分の部屋」を<br />選べる世界をつくる。
            </h3>

            <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.7)", lineHeight: typography.bodyLarge.lineHeight, textAlign: "center" }}>
              入居者が壁紙の色を選べたら、その部屋は「自分の部屋」になる。<br />
              長く住みたくなる。大切にしたくなる。<br />
              入居者の満足は、大家さんの安定収益につながる。<br />
              <strong style={{ color: C.gold }}>「入居後リフォーム」</strong>は、その循環を生むための仕組みです。
            </p>

            <GoldDivider margin="40px auto 0" />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ───────── Our Approach ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="OUR APPROACH" ja="私たちのやり方" />
          </ScrollFadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {approaches.map((a, i) => (
              <ScrollFadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: radius.lg,
                    padding: "28px 24px",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(15px, 3vw, 17px)",
                      fontWeight: 700,
                      color: M.main,
                      marginBottom: 12,
                      lineHeight: 1.6,
                    }}
                  >
                    {a.question}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(13px, 2.5vw, 15px)",
                      color: C.textMid,
                      lineHeight: 1.9,
                    }}
                  >
                    {a.answer}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Team ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: "#fff" }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="TEAM" ja="KAI & KEN" />
          </ScrollFadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {profiles.map((p, i) => (
              <ScrollFadeIn key={p.name} delay={i * 0.15}>
                <div
                  style={{
                    background: "#f9f8f6",
                    borderRadius: radius.lg,
                    padding: 24,
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                      background: "#e0e0e0",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 900, color: C.textDark, marginBottom: 2 }}>{p.name}</p>
                    <p style={{ fontSize: 13, color: C.warmGray, marginBottom: 10 }}>{p.role}</p>
                    <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.8 }}>{p.body}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 11,
                            fontWeight: 500,
                            color: M.main,
                            background: M.bg,
                            padding: "3px 9px",
                            borderRadius: radius.pill,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Service Area ───────── */}
      <section style={{ padding: `${spacing.section.sm} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto", textAlign: "center" }}>
          <ScrollFadeIn>
            <SectionHeading en="SERVICE AREA" ja="対応エリア" />
            <p style={{ fontSize: typography.bodyLarge.size, color: C.textMid, lineHeight: 1.8 }}>
              宮城県全域が対象です。<br />
              近県（福島・山形・岩手）もご相談ください。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: M.dark, textAlign: "center" }}>
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="CONTACT" ja="まずはLINEでお気軽に" dark />
            <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.7)", lineHeight: 1.9, marginBottom: 28 }}>
              物件探し・改修診断・見積もり、すべて無料です。<br />
              写真を送っていただければ、改修ポイントと概算費用をお返しします。<br />
              売却のご相談も、買い手の情報は持っています。
            </p>
            <LineCTAButton size="large" label="LINEで相談する" />
          </ScrollFadeIn>
        </div>
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
