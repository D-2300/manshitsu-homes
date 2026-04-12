import { useState, useEffect, useRef } from "react";
import { M, C, LINE_URL } from "../../tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

interface Property {
  area: string;
  type: string;       // "1棟4室" など
  age: string;        // "築22年" など
  tags: string[];     // ["駅徒歩10分", "角地"] など
  price: string;      // blur表示
  yield: string;      // blur表示
}

const allProperties: Property[] = [
  // 仙台市太白区
  { area: "仙台市太白区", type: "1棟4室", age: "築22年", tags: ["駅徒歩12分"], price: "780万円", yield: "12.3%" },
  { area: "仙台市太白区", type: "1棟6室", age: "築28年", tags: ["駐車場付"], price: "950万円", yield: "11.8%" },
  { area: "仙台市太白区", type: "1棟8室", age: "築35年", tags: ["角地"], price: "1,180万円", yield: "13.5%" },
  // 仙台市若林区
  { area: "仙台市若林区", type: "1棟4室", age: "築18年", tags: ["駅徒歩8分"], price: "1,050万円", yield: "10.2%" },
  { area: "仙台市若林区", type: "1棟6室", age: "築30年", tags: ["駐車場付"], price: "620万円", yield: "14.7%" },
  // 仙台市宮城野区
  { area: "仙台市宮城野区", type: "1棟4室", age: "築25年", tags: ["駅徒歩15分"], price: "680万円", yield: "13.1%" },
  { area: "仙台市宮城野区", type: "1棟8室", age: "築32年", tags: ["角地", "駐車場付"], price: "1,350万円", yield: "12.6%" },
  // 仙台市泉区
  { area: "仙台市泉区", type: "1棟6室", age: "築20年", tags: ["駅徒歩10分"], price: "1,200万円", yield: "9.8%" },
  { area: "仙台市泉区", type: "1棟4室", age: "築27年", tags: ["駐車場付"], price: "550万円", yield: "14.2%" },
  // 仙台市青葉区
  { area: "仙台市青葉区", type: "1棟4室", age: "築24年", tags: ["駅徒歩5分"], price: "1,480万円", yield: "8.9%" },
  { area: "仙台市青葉区", type: "1棟6室", age: "築33年", tags: ["駐車場付"], price: "890万円", yield: "12.1%" },
  // 多賀城市
  { area: "多賀城市", type: "1棟6室", age: "築30年", tags: ["駐車場付"], price: "450万円", yield: "15.8%" },
  { area: "多賀城市", type: "1棟4室", age: "築26年", tags: ["角地"], price: "380万円", yield: "16.2%" },
  // 石巻市
  { area: "石巻市", type: "1棟8室", age: "築25年", tags: ["駐車場付"], price: "620万円", yield: "14.1%" },
  { area: "石巻市", type: "1棟6室", age: "築35年", tags: ["角地"], price: "350万円", yield: "17.3%" },
  // 名取市
  { area: "名取市", type: "1棟4室", age: "築20年", tags: ["駅徒歩8分"], price: "920万円", yield: "11.5%" },
  { area: "名取市", type: "1棟6室", age: "築28年", tags: ["駐車場付"], price: "680万円", yield: "13.4%" },
  // 大崎市
  { area: "大崎市", type: "1棟6室", age: "築32年", tags: ["駐車場付"], price: "320万円", yield: "18.1%" },
  { area: "大崎市", type: "1棟8室", age: "築38年", tags: ["角地"], price: "480万円", yield: "15.6%" },
  // 塩竈市
  { area: "塩竈市", type: "1棟4室", age: "築29年", tags: ["駅徒歩12分"], price: "290万円", yield: "16.8%" },
  // 岩沼市
  { area: "岩沼市", type: "1棟4室", age: "築23年", tags: ["駐車場付"], price: "520万円", yield: "13.9%" },
  // 富谷市
  { area: "富谷市", type: "1棟6室", age: "築19年", tags: ["駐車場付"], price: "1,100万円", yield: "10.5%" },
  // 東松島市
  { area: "東松島市", type: "1棟4室", age: "築31年", tags: ["角地"], price: "280万円", yield: "17.5%" },
  // 利府町
  { area: "利府町", type: "1棟4室", age: "築26年", tags: ["駐車場付"], price: "420万円", yield: "14.8%" },
  // 柴田町
  { area: "柴田町", type: "1棟6室", age: "築34年", tags: ["駐車場付"], price: "310万円", yield: "16.5%" },
  // 角田市
  { area: "角田市", type: "1棟4室", age: "築36年", tags: ["駐車場付"], price: "220万円", yield: "19.2%" },
  // 白石市
  { area: "白石市", type: "1棟4室", age: "築33年", tags: ["角地"], price: "250万円", yield: "18.4%" },
  // 登米市
  { area: "登米市", type: "1棟6室", age: "築30年", tags: ["駐車場付"], price: "360万円", yield: "15.9%" },
];

// 仙台市内
const sendaiAreas = new Set([
  "仙台市太白区", "仙台市若林区", "仙台市宮城野区", "仙台市泉区", "仙台市青葉区",
]);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 仙台市内4件 + 市外4件 を抽出 */
function selectProperties(all: Property[]): Property[] {
  const sendai = shuffle(all.filter((p) => sendaiAreas.has(p.area))).slice(0, 4);
  const other = shuffle(all.filter((p) => !sendaiAreas.has(p.area))).slice(0, 4);
  return shuffle([...sendai, ...other]);
}

function getUpdateDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 3) + 2;
  const d = new Date(today);
  d.setDate(today.getDate() - daysAgo);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 更新`;
}

export default function V3Hero() {
  const [selected] = useState<Property[]>(() => selectProperties(allProperties));
  const [updateDate] = useState(getUpdateDate);
  const [remainingCount] = useState<number>(() => Math.floor(Math.random() * 21) + 30);
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const [showCount, setShowCount] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setTimeout(() => {
      selected.forEach((_, i) => {
        setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 80);
      });
      setTimeout(() => setShowCount(true), selected.length * 80 + 200);
    }, 300);
  }, [selected]);

  return (
    <>
      {/* ─── Hero section ─── */}
      <section
        style={{
          background: `linear-gradient(180deg, ${M.dark} 0%, #3a2235 60%, #2e1a28 100%)`,
          padding: "36px 16px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% 10%, rgba(107,64,102,.18) 0%, rgba(154,110,142,.08) 35%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", width: "100%", margin: "0 auto", textAlign: "center" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: ".1em",
              color: M.light,
              border: `1px solid rgba(192,154,181,.4)`,
              background: `rgba(192,154,181,.12)`,
              borderRadius: "100px",
              padding: "5px 16px",
              marginBottom: "28px",
            }}
          >
            宮城県エリア限定
          </div>

          {/* Category */}
          <p style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 400, letterSpacing: ".15em", color: "rgba(220,200,215,.5)", marginBottom: "14px" }}>
            アパート投資 × 内装改修
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(22px, 5vw, 36px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.7,
              marginBottom: "12px",
              letterSpacing: ".02em",
            }}
          >
            みんなが狙わない物件を、<br />
            <em style={{ fontStyle: "normal", color: C.gold }}>狙いましょう。</em>
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: "rgba(230,220,225,.6)",
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            ボロ物件を儲かる物件に変える内装会社が、<br />
            非公開のアパート投資物件情報をお届けします。
          </p>
        </div>
      </section>

      {/* Arrow down */}
      <div
        style={{
          background: "#f5f2ec",
          textAlign: "center",
          padding: "12px",
          color: "#b8a890",
          fontSize: "20px",
          animation: "v3HeroArrowBounce 1.5s infinite",
        }}
      >
        ▼
      </div>

      {/* ─── Property list section ─── */}
      <section
        style={{
          padding: "48px 16px 56px",
          background: "linear-gradient(180deg, #f5f2ec 0%, #faf7f2 50%, #ffffff 100%)",
        }}
      >
        {/* Section label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: M.mid,
            marginBottom: "8px",
            textTransform: "uppercase" as const,
          }}
        >
          Investment Properties
        </p>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(18px, 4.5vw, 20px)",
            fontWeight: 700,
            color: "#2a2a2a",
            marginBottom: "6px",
          }}
        >
          非公開のアパート投資物件
        </h2>

        {/* Update date */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#8a7a6a",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: C.gold,
              borderRadius: "50%",
              marginRight: "6px",
              verticalAlign: "middle",
              animation: "v3HeroPulse 2s infinite",
            }}
          />
          {updateDate}
        </p>

        {/* Property bundle container */}
        <div
          role="list"
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            border: "1px solid #e0d8cc",
            borderRadius: "10px",
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(60,40,20,0.06)",
          }}
        >
          {/* Bundle header */}
          <div
            style={{
              padding: "10px 16px",
              background: "#faf7f2",
              borderBottom: "1px solid #ece6dc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "1px" }}>
              非公開 物件リスト
            </span>
            <span style={{ fontSize: "11px", color: M.main, fontWeight: 600 }}>
              {selected.length}件
            </span>
          </div>

          {/* Property rows */}
          <div>
            {selected.map((prop, i) => {
              const isVisible = animatedRows.includes(i);
              const isLast = i === selected.length - 1;
              return (
                <div
                  key={i}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 16px",
                    borderBottom: isLast ? "none" : "1px solid #ece6dc",
                    gap: "8px",
                    cursor: "default",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                  }}
                >
                  {/* Area */}
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#2a2a2a",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: "90px",
                    }}
                  >
                    {prop.area}
                  </span>

                  {/* Type + Age tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      flex: 1,
                      overflow: "hidden",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        background: M.bg,
                        color: M.mid,
                        border: `1px solid ${M.light}`,
                        whiteSpace: "nowrap",
                        fontWeight: 600,
                      }}
                    >
                      {prop.type}
                    </span>
                    <span
                      style={{
                        fontSize: "9px",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        background: "#f4efe6",
                        color: "#8a7a6a",
                        border: "1px solid #e8e0d4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {prop.age}
                    </span>
                    {prop.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          fontSize: "9px",
                          padding: "2px 6px",
                          borderRadius: "8px",
                          background: "#f4efe6",
                          color: "#8a7a6a",
                          border: "1px solid #e8e0d4",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price + Yield (blurred) */}
                  <div
                    style={{
                      flexShrink: 0,
                      textAlign: "right",
                      filter: "blur(5px)",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block" }}>
                      {prop.price}
                    </span>
                    <span style={{ fontSize: "10px", color: C.accentGreen }}>
                      利回り{prop.yield}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bundle footer */}
          <div
            style={{
              padding: "10px 16px",
              background: "#faf7f2",
              borderTop: "1px solid #ece6dc",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "10px", color: "#8a7a6a", marginBottom: "4px" }}>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                style={{ width: "10px", height: "10px", verticalAlign: "middle", marginRight: "3px" }}
                aria-hidden="true"
              >
                <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#8a7a6a" strokeWidth="1.2" />
                <path d="M5 7V5a3 3 0 016 0v2" stroke="#8a7a6a" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              住所・写真・詳細条件は非公開
            </div>
            <div style={{ fontSize: "11px", color: "#8a7a6a" }}>
              他にも{" "}
              <strong
                style={{
                  color: M.main,
                  opacity: showCount ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
              >
                {showCount ? remainingCount : "--"}
              </strong>{" "}
              件あります
            </div>
          </div>
        </div>

        {/* Flow bridge: arrow + CTA */}
        <div
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            textAlign: "center",
            padding: "20px 0 0",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "32px",
              background: `linear-gradient(180deg, #d8d0c4, ${C.lineGreen})`,
              borderRadius: "1px",
            }}
          />
          <span
            style={{
              display: "block",
              margin: "0 auto",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderTop: `9px solid ${C.lineGreen}`,
            }}
          />
          <div
            style={{
              fontSize: "13px",
              color: M.mid,
              margin: "12px 0 16px",
              lineHeight: 1.6,
            }}
          >
            この情報が欲しい方は
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer?.push({ event: "line_cta_click", cta_location: "v3_hero_bundle" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 34px",
              background: C.lineGreen,
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            非公開の物件情報を見る
          </a>
          <div style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "8px" }}>
            1分で完了・営業なし・いつでもブロック可能
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "#a09080",
            marginTop: "24px",
          }}
        >
          ※ 物件情報は随時入れ替わります
        </p>
      </section>

      <style>{`
        @keyframes v3HeroPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes v3HeroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </>
  );
}
