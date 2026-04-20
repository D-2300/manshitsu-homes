import { M, C } from "../../tokens";

// TODO: 実績数値・お客様の声は仮。実データが揃い次第差し替え。
const STATS = [
  { num: "100", unit: "棟超", label: "累計 施工・改修実績" },
  { num: "50", unit: "件以上", label: "アパート仲介サポート" },
  { num: "¥0", unit: "", label: "ご相談・物件診断" },
];

const VOICES = [
  {
    initial: "T.S",
    profile: "50代・会社員 ／ 仙台市",
    title: "築古1棟目で失敗したくなかった",
    body: "物件を買う前に図面と現地で「直して埋まるか」を判定してもらえたのが一番ありがたかった。不動産屋からは出てこない話でした。",
  },
  {
    initial: "K.Y",
    profile: "40代・経営者 ／ 多賀城市",
    title: "戸建投資からアパートへ切替",
    body: "戸建で利回りは出ていたけど、棟を一気にやりたくなって相談。物件選定から客付けまで同じチームで通せるのは初めてでした。",
  },
  {
    initial: "M.A",
    profile: "60代・地主 ／ 石巻市",
    title: "相続したボロ物件の再生",
    body: "築30年の空き室だらけの棟。最初は解体も考えたけど、残すならここだけ直そう、と優先順位を引いてもらえた。いきなりフル改修を勧められなかったのが逆に信頼できた。",
  },
];

export default function HPTrustTestimonials() {
  return (
    <section style={{ padding: "56px 0", background: M.bg }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: M.main, letterSpacing: "0.25em", marginBottom: 8 }}>
            TRUST & VOICE
          </p>
          <p style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, color: M.dark, letterSpacing: "0.03em" }}>
            現場で積み上げた実績と、相談されてきた声
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            background: "#fff",
            borderRadius: 10,
            padding: "20px 8px",
            marginBottom: 36,
            boxShadow: "0 2px 10px rgba(68,41,64,0.06)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "4px 6px" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2, marginBottom: 4 }}>
                <span style={{ fontSize: "clamp(22px, 5.5vw, 32px)", fontWeight: 900, color: M.main, letterSpacing: "-0.02em" }}>
                  {s.num}
                </span>
                <span style={{ fontSize: "clamp(11px, 2.4vw, 13px)", fontWeight: 700, color: M.main }}>
                  {s.unit}
                </span>
              </div>
              <p style={{ fontSize: "clamp(10px, 2.2vw, 12px)", color: C.textMid, lineHeight: 1.4, margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Voice cards — horizontal scroll on mobile */}
        <div
          style={{
            display: "flex",
            gap: 12,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 8,
            margin: "0 -20px",
            padding: "0 20px 8px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {VOICES.map((v) => (
            <article
              key={v.initial}
              style={{
                flex: "0 0 82%",
                maxWidth: 320,
                minWidth: 260,
                scrollSnapAlign: "start",
                background: "#fff",
                borderRadius: 10,
                padding: "20px 18px",
                boxShadow: "0 2px 10px rgba(68,41,64,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${M.light}, ${M.main})`,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    letterSpacing: "0.02em",
                    flexShrink: 0,
                  }}
                >
                  {v.initial}
                </div>
                <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.4 }}>
                  <div style={{ fontWeight: 600, color: C.textDark, marginBottom: 2 }}>{v.initial}さん</div>
                  <div>{v.profile}</div>
                </div>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: M.dark, lineHeight: 1.55, marginBottom: 10 }}>
                「{v.title}」
              </p>
              <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.75, margin: 0 }}>
                {v.body}
              </p>
            </article>
          ))}
        </div>

        <p style={{ fontSize: 10.5, color: C.warmGray, textAlign: "center", marginTop: 16, letterSpacing: "0.05em" }}>
          ※ お客様プライバシー保護のため、内容は個人が特定されない形に編集しています
        </p>
      </div>
    </section>
  );
}
