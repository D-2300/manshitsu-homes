import ManshitsuNav from "../components/hp/ManshitsuNav";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import { SectionHeading, ScrollFadeIn, LineCTAButton } from "../shared";
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

export default function AboutPage() {
  return (
    <div style={{ fontFamily: typography.fontFamily, color: C.textDark }}>
      <ManshitsuNav />

      {/* ================================================================ */}
      {/* 1. About Hero — 顔主役の豪華版                                      */}
      {/* ================================================================ */}
      <section
        style={{
          background: "linear-gradient(180deg, #2a1f2a 0%, #231a28 60%, #1d1625 100%)",
          padding: "80px 16px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 10%, rgba(154,110,142,.25) 0%, rgba(192,154,181,.08) 35%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          {/* ABOUT ラベル */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              maxWidth: "380px",
              margin: "0 auto 28px",
            }}
          >
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "7px" }}>◆</span>
            <span style={{ fontSize: "11px", letterSpacing: ".35em", color: C.gold, fontWeight: 500, textTransform: "uppercase" as const, whiteSpace: "nowrap" }}>
              About Us
            </span>
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "7px" }}>◆</span>
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
          </div>

          {/* 顔写真（大きめ） */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "28px", marginBottom: "32px" }}>
            {[
              { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産 / 物件探し" },
              { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人 / 現場・施工" },
            ].map((p) => (
              <div key={p.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    padding: "3px",
                    background: "rgba(201,168,76,.1)",
                    margin: "0 auto 10px",
                    boxShadow: "0 4px 20px rgba(201,168,76,.2)",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ fontSize: "14px", color: C.gold, fontWeight: 700, letterSpacing: ".08em" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(220,210,220,.65)", marginTop: "2px", letterSpacing: ".05em" }}>
                  {p.role}
                </div>
              </div>
            ))}
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(22px, 5.4vw, 36px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.6,
              marginBottom: "16px",
              letterSpacing: ".02em",
            }}
          >
            <em style={{ fontStyle: "normal", color: C.gold }}>売る側</em>を20年やって辞めた男と、<br />
            <em style={{ fontStyle: "normal", color: C.gold }}>手を動かし続けてきた</em>職人の、2人。
          </h1>

          <p
            style={{
              fontSize: "clamp(13px, 2.4vw, 15px)",
              color: "rgba(220,210,220,.75)",
              lineHeight: 1.9,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            物件を売る側の都合ではなく、<br />
            大家さんの利益から物件を選ぶ会社です。
          </p>

          {/* 数字プラーク */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              maxWidth: "420px",
              margin: "32px auto 0",
            }}
          >
            {[
              { num: "20", unit: "年", label: "元不動産キャリア" },
              { num: "20", unit: "年+", label: "大工歴" },
              { num: "30", unit: "件+/年", label: "施工実績" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  padding: "13px 4px 10px",
                  border: "1px solid rgba(201,168,76,.65)",
                  background: "linear-gradient(180deg, rgba(201,168,76,.22) 0%, rgba(107,64,102,.18) 100%)",
                  borderRadius: "8px",
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0 3px 14px rgba(201,168,76,.15), inset 0 0 0 1px rgba(255,230,170,.12), inset 0 1px 0 rgba(255,240,200,.2)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "7px",
                    color: C.gold,
                    background: "#231a28",
                    padding: "0 4px",
                    letterSpacing: ".1em",
                  }}
                >
                  ◆
                </span>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 7.2vw, 34px)",
                    fontWeight: 700,
                    color: "#F5D68A",
                    lineHeight: 1,
                    letterSpacing: ".01em",
                    textShadow: "0 2px 8px rgba(201,168,76,.35)",
                  }}
                >
                  {b.num}
                  <span
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "clamp(10px, 2.5vw, 12px)",
                      fontWeight: 700,
                      marginLeft: "2px",
                      color: "#E6C56A",
                    }}
                  >
                    {b.unit}
                  </span>
                </div>
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(201,168,76,.7), transparent)",
                    margin: "6px auto 5px",
                  }}
                />
                <div
                  style={{
                    fontSize: "9px",
                    color: "rgba(240,230,240,.9)",
                    letterSpacing: ".03em",
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  {b.label}
                </div>
              </div>
            ))}
          </div>

          {/* 40年ディバイダー */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", maxWidth: "420px", margin: "14px auto 0" }}>
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
            <span style={{ fontSize: "10px", color: C.gold, letterSpacing: ".12em", fontWeight: 600, whiteSpace: "nowrap" }}>
              2人で{" "}
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 700, color: "#F5D68A", margin: "0 2px", textShadow: "0 1px 6px rgba(201,168,76,.5)" }}>40</span>{" "}
              年の現場
            </span>
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. KAI の物語                                                       */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.lg} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="KAI's Story" ja="元仲介20年、辞めた理由。" />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              style={{
                background: "#fff",
                borderRadius: radius.lg,
                padding: "32px 24px",
                border: `1px solid ${C.border}`,
                boxShadow: "0 2px 14px rgba(60,40,20,0.05)",
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px", paddingBottom: "20px", borderBottom: `1px solid ${C.borderLight}` }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    padding: "2px",
                    background: "rgba(201,168,76,.08)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/images/about-kai-sm.webp"
                    alt="KAI"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: C.textDark, letterSpacing: ".06em" }}>KAI</div>
                  <div style={{ fontSize: "12px", color: C.warmGray, marginTop: "2px" }}>物件探し・交渉担当</div>
                  <div style={{ display: "flex", gap: "5px", marginTop: "8px", flexWrap: "wrap" }}>
                    {["元不動産業20年", "物件交渉", "利回り計算"].map((tag) => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 500, color: M.main, background: M.bg, padding: "2px 8px", borderRadius: radius.pill }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote
                style={{
                  fontSize: "clamp(16px, 3.6vw, 20px)",
                  fontWeight: 700,
                  color: M.dark,
                  lineHeight: 1.75,
                  margin: "0 0 24px",
                  padding: "0 0 0 14px",
                  borderLeft: `3px solid ${C.gold}`,
                }}
              >
                「良い物件」の判断基準が、<br />
                <em style={{ fontStyle: "normal", color: C.gold }}>業者都合で決まる</em>現実を見てきました。
              </blockquote>

              <div style={{ fontSize: "clamp(13px, 2.6vw, 15px)", color: C.textMid, lineHeight: 2 }}>
                <p style={{ margin: "0 0 16px" }}>
                  不動産仲介業を20年。「売りたい物件」には業者側の事情がある。手数料の高い物件を先に回す。回転率の良い物件を優先する。身内が先に見て、残った物件がネットに出る。
                </p>
                <p style={{ margin: "0 0 16px" }}>
                  仕組みを知るほど、お客さんに堂々と「良い物件」と言える仕事から離れていった。20年続けて、辞めました。
                </p>
                <p style={{ margin: 0 }}>
                  今は<strong style={{ color: M.dark }}>物件を売らない側</strong>、内装をつくる側にいます。仕組みを知っているからこそ、大家さんの利益だけで物件を選べる立場に立てる。元仲介の目で、物件の裏まで読みます。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. KEN の物語                                                       */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.lg} ${spacing.pagePadding}`, background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="KEN's Story" ja="大工歴20年、現場からしか見えないこと。" />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              style={{
                background: "#f9f8f6",
                borderRadius: radius.lg,
                padding: "32px 24px",
                border: `1px solid ${C.border}`,
                boxShadow: "0 2px 14px rgba(60,40,20,0.05)",
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px", paddingBottom: "20px", borderBottom: `1px solid ${C.borderLight}` }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    padding: "2px",
                    background: "rgba(201,168,76,.08)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/images/about-ken-sm.webp"
                    alt="KEN"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: C.textDark, letterSpacing: ".06em" }}>KEN</div>
                  <div style={{ fontSize: "12px", color: C.warmGray, marginTop: "2px" }}>現場・施工担当</div>
                  <div style={{ display: "flex", gap: "5px", marginTop: "8px", flexWrap: "wrap" }}>
                    {["大工歴20年+", "年間30件+施工", "設計〜施工一貫"].map((tag) => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 500, color: M.main, background: M.bg, padding: "2px 8px", borderRadius: radius.pill }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote
                style={{
                  fontSize: "clamp(16px, 3.6vw, 20px)",
                  fontWeight: 700,
                  color: M.dark,
                  lineHeight: 1.75,
                  margin: "0 0 24px",
                  padding: "0 0 0 14px",
                  borderLeft: `3px solid ${C.gold}`,
                }}
              >
                直せば埋まるか、直しても埋まらないか。<br />
                <em style={{ fontStyle: "normal", color: C.gold }}>現場を見れば即わかる</em>。
              </blockquote>

              <div style={{ fontSize: "clamp(13px, 2.6vw, 15px)", color: C.textMid, lineHeight: 2 }}>
                <p style={{ margin: "0 0 16px" }}>
                  大工一筋20年以上。店舗内装とアパート改修を、年間30件以上手がけてきました。築古物件を一目見て「どこを直せば入居が決まるか」を判定できます。
                </p>
                <p style={{ margin: "0 0 16px" }}>
                  下請けに発注しません。自分で手を動かします。だから平米単価・材料名・工期まで全部開示できる。中間マージンなしの見積もりは、ごまかしが効かない仕事の結果です。
                </p>
                <p style={{ margin: 0 }}>
                  築古物件は、現場が全てを語ります。配管・躯体・屋根。表からは見えない部分を、20年やってきた目で即判定。<strong style={{ color: M.dark }}>見積もりズレで利回りが崩れない</strong>、それだけを守り続けてきました。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. Philosophy — 理念                                                */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.lg} ${spacing.pagePadding}`, background: M.dark }}>
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="Philosophy" ja="私たちの考え方" dark />

            <blockquote
              style={{
                textAlign: "center",
                fontSize: typography.h3.size,
                fontWeight: typography.h3.weight,
                color: "#f0ede8",
                lineHeight: typography.h3.lineHeight,
                marginBottom: 28,
                padding: 0,
                border: "none",
                marginTop: 20,
              }}
            >
              物件の売買で儲けないから、<br />
              <em style={{ fontStyle: "normal", color: C.gold }}>どの物件を選んでもらっても構わない。</em>
            </blockquote>

            <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, margin: "0 auto 28px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.8)", lineHeight: typography.bodyLarge.lineHeight, textAlign: "center", margin: 0 }}>
                私たちは内装工事の会社。<br />
                物件を売らない側にいるからこそ、<br />
                <strong style={{ color: "#f0ede8" }}>「この物件は買わない方が」</strong>と<br />本音で言える立場に立てる。
              </p>
              <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.8)", lineHeight: typography.bodyLarge.lineHeight, textAlign: "center", margin: 0 }}>
                物件を一緒に選ぶ。一緒に良くする。<br />
                入居者にとっても大家さんにとっても、<br />
                長く続く関係をつくる。<br />
                それが、私たちの仕事のかたちです。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. Our Approach — Q&A                                               */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="Our Approach" ja="私たちのやり方" />
          </ScrollFadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {approaches.map((a, i) => (
              <ScrollFadeIn key={i} delay={i * 0.08}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: radius.lg,
                    padding: "28px 24px",
                    border: `1px solid ${C.border}`,
                    borderLeft: `3px solid ${C.gold}`,
                    boxShadow: "0 2px 10px rgba(60,40,20,0.04)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(15px, 3vw, 17px)",
                      fontWeight: 700,
                      color: M.dark,
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

      {/* ================================================================ */}
      {/* 6. Service Area                                                     */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.sm} ${spacing.pagePadding}`, background: "#fff" }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto", textAlign: "center" }}>
          <ScrollFadeIn>
            <SectionHeading en="Service Area" ja="対応エリア" />
            <p style={{ fontSize: typography.bodyLarge.size, color: C.textMid, lineHeight: 1.8 }}>
              宮城県全域が対象です。<br />
              近県（福島・山形・岩手）もご相談ください。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. CTA                                                              */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: M.dark, textAlign: "center" }}>
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="Contact" ja="まずはLINEでお気軽に" dark />
            <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.75)", lineHeight: 1.9, marginBottom: 28, marginTop: 20 }}>
              物件探し・改修診断・見積もり、すべて無料です。<br />
              写真を送っていただければ、改修ポイントと概算費用をお返しします。
            </p>
            <LineCTAButton size="large" label="LINEで相談する" />
          </ScrollFadeIn>
        </div>
      </section>

      <ManshitsuFooter />
    </div>
  );
}
