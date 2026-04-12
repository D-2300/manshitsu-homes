import { M, C } from "../../tokens";

const profiles = [
  {
    name: "KAI",
    role: "物件探し・交渉担当",
    img: "/images/about-kai-sm.webp",
    alt: "KAI - 物件探し・交渉担当",
    body: "元不動産業。物件の仲介・管理を経験した後、店舗内装の世界へ。不動産会社との人脈が今もあり、ネットに出回る前の物件情報が入ります。利回り計算や交渉も得意分野。",
    tags: ["元不動産業", "物件交渉", "利回り計算"],
  },
  {
    name: "KEN",
    role: "現場・施工担当",
    img: "/images/about-ken-sm.webp",
    alt: "KEN - 現場・施工担当",
    body: "大工一筋20年以上。店舗内装の設計・施工を年間30件以上手がけています。築古物件の「どこを直せば入居が決まるか」を、現場を見て即判断できます。",
    tags: ["大工歴20年+", "年間30件+施工", "設計〜施工一貫"],
  },
];

export default function V3Profiles() {
  return (
    <section style={{ padding: "56px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: M.mid,
            marginBottom: "10px",
          }}
        >
          WHO WE ARE
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "28px",
            lineHeight: 1.55,
            letterSpacing: "0.05em",
          }}
        >
          KAI &amp; KEN
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {profiles.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#f9f8f6",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <img
                src={p.img}
                alt={p.alt}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  background: "#e0e0e0",
                }}
              />
              <div>
                <p style={{ fontSize: "16px", fontWeight: 900, color: C.textDark, marginBottom: "2px", letterSpacing: ".05em" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "13px", color: C.warmGray, marginBottom: "8px" }}>{p.role}</p>
                <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.75 }}>
                  {p.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: M.main,
                        background: M.bg,
                        padding: "3px 9px",
                        borderRadius: "100px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding */}
        <div style={{ marginTop: "32px", textAlign: "center", paddingTop: "24px", borderTop: "1px solid #eee" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: M.main, marginBottom: "4px" }}>
            満室デザインLABO
          </p>
          <p style={{ fontSize: "12px", color: C.warmGray, lineHeight: 1.6 }}>
            宮城のアパート投資 × 内装改修
          </p>
        </div>
      </div>
    </section>
  );
}
