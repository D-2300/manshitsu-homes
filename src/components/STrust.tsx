import { C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

const members = [
  {
    name: "KEN",
    role: "CSO / 大工歴20年",
    image: "/images/about-ken-sm.webp",
    desc: "店舗内装で培った空間づくりの技術を、賃貸物件にも。「この壁紙を変えるだけで印象が変わりますよ」の提案力が強みです。",
    tags: ["店舗施工50件+/年", "仙台密着"],
  },
  {
    name: "KAI",
    role: "不動産アドバイザー",
    image: "/images/about-kai-sm.webp",
    desc: "元不動産仲介。入居者目線で物件の強み・弱みを客観的に診断します。改善提案書と掲載アドバイスはKAIが担当。",
    tags: ["元不動産仲介", "客付け戦略"],
  },
];

export default function STrust() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="TEAM" ja="担当者紹介" />
        </ScrollFadeIn>

        <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
          {members.map((m, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "20px 20px",
                  backgroundColor: C.warmWhite,
                  borderRadius: 12,
                  border: "1px solid #e8e6e0",
                }}
              >
                {/* Avatar */}
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundColor: C.goldPale,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.gold,
                    }}
                  >
                    {m.name[0]}
                  </div>
                )}

                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 900,
                      color: C.textDark,
                      letterSpacing: ".05em",
                      marginBottom: 2,
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: C.warmGray,
                      marginBottom: 8,
                    }}
                  >
                    {m.role}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      color: C.textMid,
                      lineHeight: 1.75,
                      marginBottom: 10,
                    }}
                  >
                    {m.desc}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: C.gold,
                          background: C.goldPale,
                          padding: "3px 9px",
                          borderRadius: 100,
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

        {/* Studio info */}
        <ScrollFadeIn delay={0.2}>
          <div
            style={{
              textAlign: "center",
              paddingTop: 16,
              borderTop: "1px solid #eee",
            }}
          >
            <img
              src="/images/logo-manshitsu-mark-gold.webp"
              alt="満室デザインLABO"
              style={{ height: 32, width: "auto", opacity: 0.6, marginBottom: 8 }}
              loading="lazy"
            />
            <p
              style={{
                fontSize: 12,
                color: C.warmGray,
                lineHeight: 1.6,
              }}
            >
              満室デザインLABOは、仙台の店舗内装工事会社
              <a
                href="https://kiokuso.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.gold, textDecoration: "underline" }}
              >
                記憶荘
              </a>
              が運営しています。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
