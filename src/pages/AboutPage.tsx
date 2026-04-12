import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import { M, C } from "../tokens";

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
    body: "元不動産業。物件の仲介・管理を経験した後、店舗内装の世界へ。不動産会社との人脈が今もあり、ネットに出回る前の物件情報が入ります。利回り計算や交渉も得意分野。「不動産屋の都合ではなく、大家さんの利益で物件を選ぶ」がモットー。",
    tags: ["元不動産業", "物件交渉", "利回り計算"],
  },
  {
    name: "KEN",
    role: "現場・施工担当",
    img: "/images/about-ken-sm.webp",
    body: "大工一筋20年以上。店舗内装の設計・施工を年間30件以上手がけています。築古物件の「どこを直せば入居が決まるか」を、現場を見て即判断できます。入居後リフォームの施工は最短2日。",
    tags: ["大工歴20年+", "年間30件+施工", "設計〜施工一貫"],
  },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <ManshitsuNav />
      <SmallHero title="About" subtitle="私たちについて" />

      {/* Philosophy */}
      <section style={{ padding: "64px 20px", background: M.dark }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ width: "1px", height: "40px", background: C.gold, margin: "0 auto 32px" }} />

          <blockquote
            style={{
              textAlign: "center",
              fontSize: "clamp(18px, 4vw, 24px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.8,
              marginBottom: "32px",
              padding: 0,
              border: "none",
            }}
          >
            不動産屋は冷たい。<br />
            うちは、<em style={{ fontStyle: "normal", color: C.gold }}>どこの物件になってもいい。</em>
          </blockquote>

          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,.15)", margin: "0 auto 32px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "rgba(255,255,255,.7)", lineHeight: 1.9, textAlign: "center" }}>
              私たちは内装工事の会社です。<br />
              物件の売買で儲ける立場にいない。<br />
              だから、<strong style={{ color: "#f0ede8" }}>どの物件を選んでもらっても構わない。</strong>
            </p>
            <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "rgba(255,255,255,.7)", lineHeight: 1.9, textAlign: "center" }}>
              大家さんにとって本当にいい物件を、一緒に探す。<br />
              その物件を、一緒に良くする。<br />
              それが、私たちの仕事のかたちです。
            </p>
          </div>

          <div style={{ width: "1px", height: "40px", background: C.gold, margin: "40px auto 32px" }} />

          <h3 style={{ textAlign: "center", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: "#f0ede8", lineHeight: 1.8, marginBottom: "24px" }}>
            入居者が「自分の部屋」を<br />選べる世界をつくる。
          </h3>

          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "rgba(255,255,255,.7)", lineHeight: 1.9, textAlign: "center" }}>
            入居者が壁紙の色を選べたら、その部屋は「自分の部屋」になる。<br />
            長く住みたくなる。大切にしたくなる。<br />
            入居者の満足は、大家さんの安定収益につながる。<br />
            <strong style={{ color: C.gold }}>「入居後リフォーム」</strong>は、その循環を生むための仕組みです。
          </p>

          <div style={{ width: "1px", height: "40px", background: C.gold, margin: "40px auto 0" }} />
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ padding: "56px 20px", background: C.warmWhite }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: M.mid, marginBottom: "10px" }}>
            OUR APPROACH
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: C.textDark, marginBottom: "36px", lineHeight: 1.7 }}>
            私たちのやり方
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {approaches.map((a, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "14px", padding: "28px 24px", border: "1px solid #e0ddd5" }}>
                <h3 style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: M.main, marginBottom: "12px", lineHeight: 1.6 }}>
                  {a.question}
                </h3>
                <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.9 }}>
                  {a.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "56px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: M.mid, marginBottom: "10px" }}>
            TEAM
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: C.textDark, marginBottom: "28px", lineHeight: 1.7 }}>
            KAI &amp; KEN
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {profiles.map((p) => (
              <div key={p.name} style={{ background: "#f9f8f6", borderRadius: "12px", padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <img src={p.img} alt={p.name} style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, background: "#e0e0e0" }} />
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 900, color: C.textDark, marginBottom: "2px" }}>{p.name}</p>
                  <p style={{ fontSize: "13px", color: C.warmGray, marginBottom: "8px" }}>{p.role}</p>
                  <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.75 }}>{p.body}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: "11px", fontWeight: 500, color: M.main, background: M.bg, padding: "3px 9px", borderRadius: "100px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "48px 20px", background: C.warmWhite, textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: M.mid, marginBottom: "10px" }}>
            SERVICE AREA
          </p>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: C.textMid, lineHeight: 1.8 }}>
            仙台市・宮城県を中心に対応しています。<br />
            物件情報のご紹介も改修工事も宮城県内が対象です。
          </p>
        </div>
      </section>

      <ManshitsuFooter />
    </div>
  );
}
