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

          {/* 顔写真（大サイズ・インパクト重視） */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(18px, 5vw, 36px)", marginBottom: "34px" }}>
            {[
              { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産 / 物件探し" },
              { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人 / 現場・施工" },
            ].map((p) => (
              <div key={p.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(108px, 32vw, 140px)",
                    height: "clamp(108px, 32vw, 140px)",
                    borderRadius: "50%",
                    border: `3px solid ${C.gold}`,
                    padding: "4px",
                    background: "rgba(201,168,76,.12)",
                    margin: "0 auto 12px",
                    boxShadow: "0 6px 28px rgba(201,168,76,.25), 0 0 0 1px rgba(255,240,200,.1) inset",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ fontSize: "16px", color: C.gold, fontWeight: 700, letterSpacing: ".1em" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: "11px", color: "rgba(220,210,220,.7)", marginTop: "3px", letterSpacing: ".05em" }}>
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

              {/* ── タイムライン：20年の転身 ── */}
              <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: `1px dashed ${C.borderLight}` }}>
                <div style={{ fontSize: "10px", letterSpacing: ".25em", color: C.gold, fontWeight: 600, textAlign: "center", marginBottom: "18px", textTransform: "uppercase" as const }}>
                  KAI's Timeline
                </div>

                <div style={{ position: "relative", padding: "30px 0 24px" }}>
                  {/* Base line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "5%",
                      right: "5%",
                      top: "50%",
                      height: "2px",
                      background: `linear-gradient(90deg, rgba(107,64,102,.2) 0%, ${C.gold} 50%, rgba(107,64,102,.2) 100%)`,
                      transform: "translateY(-50%)",
                    }}
                  />

                  {/* Three points */}
                  <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 5%" }}>
                    {[
                      { label: "Start", year: "2005", title: "仲介業へ", position: "start" },
                      { label: "◆ 転機", year: "約20年間", title: "仕組みに違和感", position: "turn" },
                      { label: "Now", year: "2026", title: "内装屋として", position: "now" },
                    ].map((t) => {
                      const isTurn = t.position === "turn";
                      return (
                        <div key={t.year} style={{ textAlign: "center", flex: "0 0 auto", width: "32%", position: "relative" }}>
                          {/* Label above */}
                          <div
                            style={{
                              fontSize: "9px",
                              letterSpacing: ".15em",
                              color: isTurn ? C.gold : M.main,
                              fontWeight: 700,
                              marginBottom: "10px",
                              textTransform: "uppercase" as const,
                            }}
                          >
                            {t.label}
                          </div>

                          {/* Dot */}
                          <div
                            style={{
                              width: isTurn ? "18px" : "12px",
                              height: isTurn ? "18px" : "12px",
                              borderRadius: isTurn ? "2px" : "50%",
                              background: isTurn ? C.gold : M.main,
                              margin: "0 auto",
                              boxShadow: isTurn ? "0 0 16px rgba(201,168,76,.5)" : "0 2px 6px rgba(107,64,102,.3)",
                              transform: isTurn ? "rotate(45deg)" : "none",
                            }}
                          />

                          {/* Year */}
                          <div
                            style={{
                              fontSize: "11px",
                              color: isTurn ? C.gold : M.main,
                              fontWeight: 700,
                              marginTop: "10px",
                              fontFamily: "'Cormorant Garamond', serif",
                              letterSpacing: ".04em",
                            }}
                          >
                            {t.year}
                          </div>

                          {/* Title */}
                          <div style={{ fontSize: "11px", color: C.textMid, marginTop: "2px", lineHeight: 1.4 }}>
                            {t.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ fontSize: "11px", color: C.warmGray, textAlign: "center", fontStyle: "italic", marginTop: "8px" }}>
                  業界の仕組みを知った上で、辞めた。今は〝反対側〟に立っています。
                </div>
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
      {/* 3.5. Business Model 比較図 — なぜ中間マージンがないか               */}
      {/* ================================================================ */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="Business Model" ja="なぜ、中間マージンがないのか" />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
              {/* 左: 従来 */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: radius.md,
                  padding: "18px 10px",
                  border: `1px solid ${C.border}`,
                  textAlign: "center",
                  opacity: 0.9,
                }}
              >
                <div style={{ fontSize: "10px", letterSpacing: ".15em", color: C.warmGray, fontWeight: 600, marginBottom: "14px", textTransform: "uppercase" as const }}>
                  一般的な構造
                </div>

                {/* flow nodes */}
                {[
                  { node: "お客さん", tone: "main" },
                  { node: "不動産仲介", meta: "手数料 3%" },
                  { node: "内装の元請け", meta: "中抜きマージン" },
                  { node: "下請け工務店", meta: "実作業" },
                ].map((item, i, arr) => (
                  <div key={i} style={{ position: "relative", padding: "6px 0" }}>
                    <div
                      style={{
                        padding: "8px 6px",
                        background: item.tone === "main" ? M.bg : "#f4efe6",
                        border: `1px solid ${item.tone === "main" ? M.light : "#e8e0d4"}`,
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: item.tone === "main" ? M.dark : "#6a5a4a",
                      }}
                    >
                      {item.node}
                    </div>
                    {item.meta && (
                      <div style={{ fontSize: "9px", color: C.accentRed, marginTop: "3px", fontWeight: 500 }}>
                        ↓ {item.meta}
                      </div>
                    )}
                    {!item.meta && i < arr.length - 1 && (
                      <div style={{ fontSize: "12px", color: C.warmGray, marginTop: "2px" }}>↓</div>
                    )}
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "14px",
                    padding: "8px 6px",
                    background: "rgba(196,77,63,.08)",
                    border: `1px dashed ${C.accentRed}`,
                    borderRadius: "6px",
                    fontSize: "10px",
                    color: C.accentRed,
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  3社分のマージン<br />＝最終的にお客負担
                </div>
              </div>

              {/* 右: 満室 */}
              <div
                style={{
                  background: "linear-gradient(180deg, #fff 0%, #faf7f2 100%)",
                  borderRadius: radius.md,
                  padding: "18px 10px",
                  border: `2px solid ${C.gold}`,
                  textAlign: "center",
                  boxShadow: "0 3px 16px rgba(201,168,76,.2), inset 0 1px 0 rgba(255,240,200,.4)",
                  position: "relative",
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
                    background: C.warmWhite,
                    padding: "0 4px",
                  }}
                >
                  ◆
                </span>
                <div style={{ fontSize: "10px", letterSpacing: ".15em", color: C.gold, fontWeight: 700, marginBottom: "14px", textTransform: "uppercase" as const }}>
                  満室の構造
                </div>

                <div style={{ position: "relative", padding: "6px 0" }}>
                  <div
                    style={{
                      padding: "8px 6px",
                      background: M.bg,
                      border: `1px solid ${M.light}`,
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: M.dark,
                    }}
                  >
                    お客さん
                  </div>
                  <div style={{ fontSize: "12px", color: C.warmGray, marginTop: "2px" }}>↓</div>
                </div>

                <div style={{ position: "relative", padding: "6px 0" }}>
                  <div
                    style={{
                      padding: "14px 6px",
                      background: `linear-gradient(180deg, rgba(201,168,76,.2), rgba(107,64,102,.15))`,
                      border: `1px solid ${C.gold}`,
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: M.dark,
                      lineHeight: 1.5,
                    }}
                  >
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 700, color: M.dark }}>
                      KAI × KEN
                    </div>
                    <div style={{ fontSize: "10px", color: C.textMid, marginTop: "4px", fontWeight: 500 }}>
                      物件〜施工まで<br />1社完結
                    </div>
                  </div>
                </div>

                {/* spacer to match left height */}
                <div style={{ padding: "6px 0", visibility: "hidden" }}>
                  <div style={{ padding: "8px 6px" }}>placeholder</div>
                </div>
                <div style={{ padding: "6px 0", visibility: "hidden" }}>
                  <div style={{ padding: "8px 6px" }}>placeholder</div>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    padding: "8px 6px",
                    background: "rgba(45,138,94,.08)",
                    border: `1px dashed ${C.accentGreen}`,
                    borderRadius: "6px",
                    fontSize: "10px",
                    color: C.accentGreen,
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  中間マージン<br />ゼロ
                </div>
              </div>
            </div>

            <p style={{ fontSize: "clamp(12px, 2.4vw, 14px)", color: C.textMid, lineHeight: 1.9, textAlign: "center", margin: 0, maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              物件を売ると利益が出る業界構造から離れたから、<br />
              <strong style={{ color: M.dark }}>どの物件を選んでもらっても構わない</strong>立場で相談に乗れます。
            </p>
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
