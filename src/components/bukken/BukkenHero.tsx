import { useState, useEffect, useRef } from "react";
import { getWeeklyPropertyCount } from "./weeklyCount";
import { LINE_URL } from "../../tokens";
import { trackLineCtaClick } from "../../utils/trackConversion";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type PropertyType = "ittou" | "kubun";
type ColorName = "warm" | "blue" | "green" | "purple" | "teal" | "slate" | "rose";

interface Property {
  area: string;
  type: PropertyType;
  age: string;      // 築年数
  tags: string[];
  price: string;    // 物件価格
  yieldRate: string; // 利回り %
  color: ColorName;
}

const allProperties: Property[] = [
  // 仙台市
  { area: "仙台市太白区", type: "ittou", age: "築22年", tags: ["1棟4室", "満室"], price: "780万円", yieldRate: "12.3%", color: "warm" },
  { area: "仙台市若林区", type: "ittou", age: "築18年", tags: ["1棟4室", "角地"], price: "1,050万円", yieldRate: "10.2%", color: "blue" },
  { area: "仙台市宮城野区", type: "ittou", age: "築28年", tags: ["1棟6室", "駐車場"], price: "680万円", yieldRate: "14.5%", color: "purple" },
  { area: "仙台市泉区", type: "ittou", age: "築25年", tags: ["1棟4室", "駅近"], price: "890万円", yieldRate: "11.8%", color: "teal" },
  { area: "仙台市青葉区", type: "kubun", age: "築20年", tags: ["3LDK", "リノベ済"], price: "580万円", yieldRate: "9.5%", color: "rose" },
  // 仙台市外・宮城県
  { area: "多賀城市", type: "ittou", age: "築30年", tags: ["1棟6室"], price: "450万円", yieldRate: "15.8%", color: "green" },
  { area: "石巻市", type: "ittou", age: "築25年", tags: ["1棟8室", "駐車場"], price: "620万円", yieldRate: "14.1%", color: "slate" },
  { area: "大崎市", type: "ittou", age: "築32年", tags: ["1棟6室"], price: "320万円", yieldRate: "18.1%", color: "warm" },
  { area: "名取市", type: "ittou", age: "築24年", tags: ["1棟4室"], price: "540万円", yieldRate: "13.2%", color: "blue" },
  { area: "塩竈市", type: "ittou", age: "築28年", tags: ["1棟6室"], price: "380万円", yieldRate: "16.2%", color: "purple" },
  { area: "富谷市", type: "ittou", age: "築20年", tags: ["1棟4室", "新耐震"], price: "720万円", yieldRate: "11.5%", color: "teal" },
  { area: "岩沼市", type: "ittou", age: "築26年", tags: ["1棟4室"], price: "420万円", yieldRate: "13.8%", color: "rose" },
  { area: "登米市", type: "ittou", age: "築33年", tags: ["1棟6室"], price: "280万円", yieldRate: "19.3%", color: "green" },
  { area: "気仙沼市", type: "ittou", age: "築30年", tags: ["1棟4室"], price: "240万円", yieldRate: "17.5%", color: "slate" },
  { area: "白石市", type: "ittou", age: "築28年", tags: ["1棟4室"], price: "320万円", yieldRate: "15.0%", color: "warm" },
  { area: "栗原市", type: "ittou", age: "築35年", tags: ["1棟6室"], price: "260万円", yieldRate: "20.1%", color: "blue" },
  { area: "東松島市", type: "ittou", age: "築26年", tags: ["1棟4室"], price: "380万円", yieldRate: "14.5%", color: "purple" },
  { area: "角田市", type: "ittou", age: "築30年", tags: ["1棟4室"], price: "290万円", yieldRate: "16.0%", color: "teal" },
  { area: "利府町", type: "ittou", age: "築22年", tags: ["1棟4室"], price: "520万円", yieldRate: "12.8%", color: "rose" },
  { area: "大和町", type: "ittou", age: "築28年", tags: ["1棟4室"], price: "340万円", yieldRate: "15.5%", color: "green" },
];

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

/** 仙台市から3件 + 県内その他から3件 */
function selectProperties(all: Property[]): Property[] {
  const sendai = shuffle(all.filter((p) => sendaiAreas.has(p.area))).slice(0, 3);
  const other = shuffle(all.filter((p) => !sendaiAreas.has(p.area))).slice(0, 3);
  return shuffle([...sendai, ...other]);
}

function getUpdateDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 3) + 2;
  const d = new Date(today);
  d.setDate(today.getDate() - daysAgo);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 更新`;
}

export default function BukkenHero() {
  const [selected] = useState<Property[]>(() => selectProperties(allProperties));
  const [updateDate] = useState(getUpdateDate);
  const [remainingCount] = useState<number>(() => getWeeklyPropertyCount());
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
          background: "linear-gradient(180deg, #2a1f2a 0%, #231a28 60%, #1d1625 100%)",
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
            background: "radial-gradient(ellipse at 50% 10%, rgba(154,110,142,.22) 0%, rgba(192,154,181,.08) 35%, transparent 65%)",
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
              color: "#C09AB5",
              border: "1px solid rgba(154,110,142,.4)",
              background: "rgba(107,64,102,.15)",
              borderRadius: "100px",
              padding: "5px 16px",
              marginBottom: "28px",
            }}
          >
            宮城の収益物件オーナー向け（アパート・戸建）
          </div>

          {/* Category */}
          <p style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 400, letterSpacing: ".15em", color: "rgba(220,200,215,.5)", marginBottom: "14px" }}>
            収益物件探しから手伝う内装屋
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
            アパート投資の成功は、<br />
            <em style={{ fontStyle: "normal", color: "#C9A84C" }}>物件選び</em>から始まっている。
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: "rgba(220,210,220,.6)",
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            内装をつくる側だから、「この物件で利回りが出るか」から<br />
            一緒に考えられます。アパート1棟・区分・戸建まで対応。
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
          animation: "bukkenHeroArrowBounce 1.5s infinite",
        }}
      >
        ▼
      </div>

      {/* ─── Property section (Available Now) ─── */}
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
            color: "#6B4066",
            marginBottom: "8px",
            textTransform: "uppercase" as const,
          }}
        >
          Available Now
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
          現在ご紹介可能な収益物件
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
              background: "#C9A84C",
              borderRadius: "50%",
              marginRight: "6px",
              verticalAlign: "middle",
              animation: "bukkenHeroPulse 2s infinite",
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
              非公開 収益物件リスト
            </span>
            <span style={{ fontSize: "11px", color: "#6B4066", fontWeight: 600 }}>
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
                    padding: "8px 16px",
                    borderBottom: isLast ? "none" : "1px solid #ece6dc",
                    gap: "10px",
                    cursor: "default",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                  }}
                >
                  {/* Type badge */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "9px",
                      fontWeight: 700,
                      padding: "3px 7px",
                      borderRadius: "3px",
                      color: "#fff",
                      width: "40px",
                      textAlign: "center",
                      background: prop.type === "ittou" ? "#6B4066" : "#8a6a3e",
                    }}
                  >
                    {prop.type === "ittou" ? "一棟" : "区分"}
                  </span>

                  {/* Area */}
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#2a2a2a",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: "84px",
                    }}
                  >
                    {prop.area}
                  </span>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      flex: 1,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        padding: "2px 5px",
                        borderRadius: "8px",
                        background: "#f4efe6",
                        color: "#8a7a6a",
                        border: "1px solid #e8e0d4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {prop.age}
                    </span>
                    {prop.tags.slice(0, 1).map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          fontSize: "9px",
                          padding: "2px 5px",
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
                  <div style={{ flexShrink: 0, textAlign: "right", filter: "blur(5px)", userSelect: "none" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block" }}>
                      {prop.price}
                    </span>
                    <span style={{ fontSize: "10px", color: "#2D8A5E" }}>
                      利回り{prop.yieldRate}
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
                  color: "#6B4066",
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
              background: "linear-gradient(180deg, #d8d0c4, #06C755)",
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
              borderTop: "9px solid #06C755",
            }}
          />
          <div
            style={{
              fontSize: "13px",
              color: "#6B4066",
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
            onClick={() => trackLineCtaClick("bukken_hero_bundle")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 34px",
              background: "#06C755",
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
            非公開の物件リストを見る
          </a>
          <div style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "8px" }}>
            無料・営業なし・いつでもブロック可能
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
        @keyframes bukkenHeroPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bukkenHeroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </>
  );
}
