import { useState, useEffect, useRef } from "react";
import { getWeeklyPropertyCount } from "./weeklyCount";
import { LINE_URL } from "../../tokens";
import { trackLineCtaClick } from "../../utils/trackConversion";

/**
 * BukkenHeroV2 — 新構造モック
 *
 * 目的: 物件リストを前面に出す前に、「なぜ我々に聞くのか」のポジション提示を行い、
 * 物件リストをちら見せした段階でパターン・インタラプト（ちょっと待ってください）を発動。
 * 「元仲介20年 × 大工20年 = プロ感 + 中立感（味方感）」の三角形を先に確立してから、
 * 物件リストをフル開示する。
 *
 * セクション構成:
 *   1. Hero（ダーク）: ポジション提示
 *   2. 物件リスト ちら見せ（トランジション）
 *   3. パターン・インタラプト（注意喚起）
 *   4. 三角形の提示（解決策）
 *   5. 物件リスト本体 + CTA
 */

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

type PropertyType = "ittou" | "kubun";
type ColorName = "warm" | "blue" | "green" | "purple" | "teal" | "slate" | "rose";

interface Property {
  area: string;
  type: PropertyType;
  age: string;
  tags: string[];
  price: string;
  yieldRate: string;
  color: ColorName;
}

const allProperties: Property[] = [
  { area: "仙台市太白区", type: "ittou", age: "築22年", tags: ["1棟4室", "満室"], price: "780万円", yieldRate: "12.3%", color: "warm" },
  { area: "仙台市若林区", type: "ittou", age: "築18年", tags: ["1棟4室", "角地"], price: "1,050万円", yieldRate: "10.2%", color: "blue" },
  { area: "仙台市宮城野区", type: "ittou", age: "築28年", tags: ["1棟6室", "駐車場"], price: "680万円", yieldRate: "14.5%", color: "purple" },
  { area: "仙台市泉区", type: "ittou", age: "築25年", tags: ["1棟4室", "駅近"], price: "890万円", yieldRate: "11.8%", color: "teal" },
  { area: "仙台市青葉区", type: "kubun", age: "築20年", tags: ["3LDK", "リノベ済"], price: "580万円", yieldRate: "9.5%", color: "rose" },
  { area: "多賀城市", type: "ittou", age: "築30年", tags: ["1棟6室"], price: "450万円", yieldRate: "15.8%", color: "green" },
  { area: "石巻市", type: "ittou", age: "築25年", tags: ["1棟8室", "駐車場"], price: "620万円", yieldRate: "14.1%", color: "slate" },
  { area: "大崎市", type: "ittou", age: "築32年", tags: ["1棟6室"], price: "320万円", yieldRate: "18.1%", color: "warm" },
  { area: "名取市", type: "ittou", age: "築24年", tags: ["1棟4室"], price: "540万円", yieldRate: "13.2%", color: "blue" },
];

const sendaiAreas = new Set(["仙台市太白区", "仙台市若林区", "仙台市宮城野区", "仙台市泉区", "仙台市青葉区"]);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

function PropertyRow({ prop, isVisible, isLast }: { prop: Property; isVisible: boolean; isLast: boolean }) {
  return (
    <div
      role="listitem"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        borderBottom: isLast ? "none" : "1px solid #ece6dc",
        gap: "10px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
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
      <span style={{ fontSize: "12px", fontWeight: 700, color: "#2a2a2a", whiteSpace: "nowrap", flexShrink: 0, minWidth: "84px" }}>
        {prop.area}
      </span>
      <div style={{ display: "flex", gap: "3px", flex: 1, overflow: "hidden" }}>
        <span style={{ fontSize: "9px", padding: "2px 5px", borderRadius: "8px", background: "#f4efe6", color: "#8a7a6a", border: "1px solid #e8e0d4", whiteSpace: "nowrap" }}>
          {prop.age}
        </span>
        {prop.tags.slice(0, 1).map((tag, ti) => (
          <span key={ti} style={{ fontSize: "9px", padding: "2px 5px", borderRadius: "8px", background: "#f4efe6", color: "#8a7a6a", border: "1px solid #e8e0d4", whiteSpace: "nowrap" }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{ flexShrink: 0, textAlign: "right", filter: "blur(5px)", userSelect: "none" }}>
        <span style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block" }}>{prop.price}</span>
        <span style={{ fontSize: "10px", color: "#2D8A5E" }}>利回り{prop.yieldRate}</span>
      </div>
    </div>
  );
}

export default function BukkenHeroV2() {
  const [selected] = useState<Property[]>(() => selectProperties(allProperties));
  const [updateDate] = useState(getUpdateDate);
  const [remainingCount] = useState<number>(() => getWeeklyPropertyCount());
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setTimeout(() => {
      selected.forEach((_, i) => {
        setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 80);
      });
    }, 300);
  }, [selected]);

  const peekRows = selected.slice(0, 2);
  const restRows = selected.slice(2);

  return (
    <>
      {/* ================================================================ */}
      {/* 1. Hero（ダーク） — ポジション提示                                  */}
      {/* ================================================================ */}
      <section
        style={{
          background: "linear-gradient(180deg, #2a1f2a 0%, #231a28 60%, #1d1625 100%)",
          padding: "30px 16px 22px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 10%, rgba(154,110,142,.22) 0%, rgba(192,154,181,.08) 35%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", width: "100%", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              fontSize: "clamp(11px, 2.3vw, 12.5px)",
              fontWeight: 700,
              letterSpacing: ".08em",
              color: "#F5D68A",
              border: "1px solid rgba(201,168,76,.55)",
              background:
                "linear-gradient(180deg, rgba(201,168,76,.2) 0%, rgba(107,64,102,.22) 100%)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "14px",
              boxShadow:
                "0 2px 12px rgba(201,168,76,.18), inset 0 1px 0 rgba(255,240,200,.15)",
            }}
          >
            <span style={{ fontSize: "8px", color: "#C9A84C", marginRight: "6px" }}>◆</span>
            宮城の収益物件オーナー向け
            <span style={{ opacity: 0.85, fontWeight: 500, marginLeft: "4px" }}>
              （アパート・戸建）
            </span>
          </div>

          {/* カテゴリ: 2人の職歴を楔の直前に見せる */}
          <p
            style={{
              fontSize: "clamp(11px, 2.1vw, 13px)",
              fontWeight: 400,
              letterSpacing: ".15em",
              color: "#C9A84C",
              marginBottom: "10px",
            }}
          >
            元不動産仲介20年 × 大工20年
          </p>

          {/* 顔写真2人（縦コンパクト） */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginBottom: "18px",
            }}
          >
            {[
              { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産" },
              { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人" },
            ].map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid #C9A84C",
                    padding: "1px",
                    background: "rgba(201,168,76,.08)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#C9A84C",
                      fontWeight: 700,
                      letterSpacing: ".08em",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "rgba(220,210,220,.6)",
                      letterSpacing: ".05em",
                    }}
                  >
                    {p.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* H1: ポジション提示（言い切り） */}
          <h1
            style={{
              fontSize: "clamp(23px, 5.6vw, 38px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.55,
              marginBottom: "12px",
              letterSpacing: ".02em",
            }}
          >
            物件を<em style={{ fontStyle: "normal", color: "#C9A84C" }}>売る側</em>にいた人間が、<br />
            <em style={{ fontStyle: "normal", color: "#C9A84C" }}>裏側</em>を教えます。
          </h1>

          {/* Sub: 事実ベース1行（「あなた側」は削除） */}
          <p
            style={{
              fontSize: "clamp(12px, 2.2vw, 14px)",
              color: "rgba(220,210,220,.7)",
              lineHeight: 1.6,
              marginBottom: "22px",
            }}
          >
            20年やって、辞めました。
          </p>

          {/* トラストバッジ・セクション見出し（コンパクト） */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              maxWidth: "420px",
              margin: "0 auto 8px",
            }}
          >
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.45))" }} />
            <span
              style={{
                fontSize: "9px",
                letterSpacing: ".3em",
                color: "#C9A84C",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                whiteSpace: "nowrap",
              }}
            >
              Craftsmanship
            </span>
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,.45), transparent)" }} />
          </div>

          {/* トラストバッジ：実績・数字系（縦コンパクト版） */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
              maxWidth: "420px",
              margin: "0 auto 10px",
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
                  background:
                    "linear-gradient(180deg, rgba(201,168,76,.22) 0%, rgba(107,64,102,.18) 100%)",
                  borderRadius: "8px",
                  textAlign: "center",
                  position: "relative",
                  boxShadow:
                    "0 3px 14px rgba(201,168,76,.15), inset 0 0 0 1px rgba(255,230,170,.12), inset 0 1px 0 rgba(255,240,200,.2)",
                }}
              >
                {/* ダイヤコーナー（上部中央） */}
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "7px",
                    color: "#C9A84C",
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
                {/* 金のヘアライン */}
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(201,168,76,.7), transparent)",
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

          {/* 通算40年：合算のインパクト行（コンパクト） */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              maxWidth: "420px",
              margin: "4px auto 14px",
              padding: "0 4px",
            }}
          >
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
            <span
              style={{
                fontSize: "10px",
                color: "#C9A84C",
                letterSpacing: ".12em",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              2人で{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#F5D68A",
                  margin: "0 2px",
                  textShadow: "0 1px 6px rgba(201,168,76,.5)",
                }}
              >
                40
              </span>{" "}
              年の現場
            </span>
            <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
            <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
          </div>

          {/* トラストバッジ：姿勢・コミット系（1行横スクロール風の超コンパクト） */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "5px",
              maxWidth: "440px",
              margin: "0 auto 20px",
            }}
          >
            {["月5組限定", "下請けに出さず", "売買で儲けない", "営業電話なし", "相見積OK"].map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                  fontSize: "10px",
                  color: "rgba(245,235,245,.95)",
                  padding: "3px 8px 3px 6px",
                  border: "1px solid rgba(201,168,76,.45)",
                  background:
                    "linear-gradient(180deg, rgba(107,64,102,.28) 0%, rgba(107,64,102,.18) 100%)",
                  borderRadius: "100px",
                  letterSpacing: ".01em",
                  fontWeight: 500,
                  boxShadow: "inset 0 1px 0 rgba(255,240,200,.08), 0 1px 4px rgba(0,0,0,.15)",
                }}
              >
                <svg
                  viewBox="0 0 10 10"
                  style={{ width: "8px", height: "8px", flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 5.5 L4 8 L8.5 2.5"
                    stroke="#F5D68A"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </span>
            ))}
          </div>

          {/* 下へスクロールさせるリンク（コンパクト） */}
          <a
            href="#reason"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("reason")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#C9A84C",
              textDecoration: "none",
              padding: "7px 18px",
              border: "1px solid rgba(201,168,76,.4)",
              borderRadius: "100px",
              background: "rgba(201,168,76,.06)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            理由は下に
            <span style={{ display: "inline-block", animation: "bukkenHeroArrowBounce 1.5s infinite", fontSize: "11px" }}>↓</span>
          </a>

          {/* ▼ Hero内に配置（紫背景上・ゴールド） */}
          <div
            style={{
              textAlign: "center",
              marginTop: "8px",
              color: "rgba(201,168,76,.55)",
              fontSize: "10px",
              animation: "bukkenHeroArrowBounce 1.5s infinite",
              lineHeight: 1,
            }}
          >
            ▼
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. 物件リスト ちら見せ                                              */}
      {/* ================================================================ */}
      <section
        style={{
          padding: "6px 16px 0",
          background: "linear-gradient(180deg, #f5f2ec 0%, #faf7f2 100%)",
          position: "relative",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "9px", letterSpacing: "3px", color: "#6B4066", marginBottom: "2px", textTransform: "uppercase" as const }}>
          Available Now
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(14px, 3.5vw, 17px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "2px" }}>
          現在ご紹介可能な収益物件
        </h2>
        <p style={{ textAlign: "center", fontSize: "10px", color: "#8a7a6a", marginBottom: "8px" }}>
          <span style={{ display: "inline-block", width: "5px", height: "5px", background: "#C9A84C", borderRadius: "50%", marginRight: "5px", verticalAlign: "middle", animation: "bukkenHeroPulse 2s infinite" }} />
          {updateDate}
        </p>

        <div
          role="list"
          style={{
            maxWidth: "280px",
            margin: "0 auto",
            border: "1px solid #e0d8cc",
            borderRadius: "10px",
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(60,40,20,0.06)",
            position: "relative",
          }}
        >
          <div style={{ padding: "8px 14px", background: "#faf7f2", borderBottom: "1px solid #ece6dc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "10px", color: "#8a7a6a", letterSpacing: "1px" }}>非公開リスト</span>
            <span style={{ fontSize: "10px", color: "#6B4066", fontWeight: 600 }}>{selected.length}件</span>
          </div>

          <div>
            {peekRows.map((prop, i) => (
              <PropertyRow key={i} prop={prop} isVisible={animatedRows.includes(i)} isLast={false} />
            ))}
          </div>

          {/* フェード（強め）＋続きを示唆 */}
          <div
            style={{
              position: "relative",
              height: "56px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,1) 100%)",
              marginTop: "-30px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div style={{ textAlign: "center", padding: "0 14px 10px", fontSize: "10px", color: "#a09080" }}>
            あと{selected.length - peekRows.length}件＋非公開{remainingCount}件...
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. パターン・インタラプト                                            */}
      {/* ================================================================ */}
      <section
        id="reason"
        style={{
          padding: "44px 16px 36px",
          background: "linear-gradient(180deg, #faf7f2 0%, #f5ecd7 100%)",
          position: "relative",
          scrollMarginTop: "20px",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <p
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: ".2em",
                color: "#6B4066",
                background: "#fff",
                padding: "6px 14px",
                borderRadius: "100px",
                border: "1px solid #e0d8cc",
                marginBottom: "16px",
              }}
            >
              ちょっと待ってください
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 5vw, 26px)",
                fontWeight: 700,
                color: "#2a2a2a",
                lineHeight: 1.6,
                marginBottom: "14px",
              }}
            >
              本当にその物件の探し方で、<br />
              <em style={{ fontStyle: "normal", color: "#C44D3F" }}>大丈夫ですか？</em>
            </h2>
            <p style={{ fontSize: "13px", color: "#5A574F", lineHeight: 1.9 }}>
              リストを眺めて、利回りで選ぶ——<br />
              この業界で20年仕事をしてきた側から言うと、<br />
              <strong style={{ color: "#2a2a2a" }}>それは一番騙されやすい買い方</strong>です。
            </p>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {[
              {
                num: "01",
                title: "公開物件の多くは、業界内で既に見送られたもの",
                body: "良い物件は、銀行・身内・顧客リストの順に消化されて、最後にネットに出ます。あなたが見ているのは〝残り物〟である可能性が高い。",
              },
              {
                num: "02",
                title: "利回りの数字だけでは見えないリスク",
                body: "表面利回りは計算式で出る数字。実際の客付け力・修繕の必要性・出口戦略まで含めて〝実質利回り〟は初めて見える。",
              },
              {
                num: "03",
                title: "修繕コストの見積もりズレで利回りが崩れる",
                body: "「300万で直せる」と言われた物件が、実は屋根含めて600万かかる——という話は珍しくない。内装側の目がないと見抜けない。",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#fff",
                  border: "1px solid #e8dcc2",
                  borderLeft: "3px solid #C9A84C",
                  borderRadius: "6px",
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    lineHeight: 1,
                    paddingTop: "2px",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#2a2a2a", marginBottom: "6px", lineHeight: 1.5 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#5A574F", lineHeight: 1.8 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. 三角形の提示                                                    */}
      {/* ================================================================ */}
      <section
        style={{
          padding: "44px 16px 40px",
          background: "linear-gradient(180deg, #f5ecd7 0%, #faf7f2 100%)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: ".3em", color: "#6B4066", marginBottom: "10px", textTransform: "uppercase" as const }}>
            Our Position
          </p>
          <h2 style={{ fontSize: "clamp(20px, 5vw, 26px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "10px", lineHeight: 1.5 }}>
            だから、この2人で<br />相談に乗ります。
          </h2>
          <p style={{ fontSize: "13px", color: "#5A574F", lineHeight: 1.9, marginBottom: "32px" }}>
            元仲介の目で物件の"裏"を読み、<br />
            職人の目で修繕の"本当のコスト"を見る。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            {[
              {
                label: "元仲介の目",
                title: "業界の裏を知っている",
                body: "20年仲介をやったKAIが、今は〝売らない側〟にいます。どの情報を信じていいか、どの話が誘導か、判別できます。",
              },
              {
                label: "職人の目",
                title: "修繕の本当のコストが見える",
                body: "大工歴20年のKENが、実物件を見ながら〝これはいくらで直せる〟を判定。見積ズレで利回りが崩れません。",
              },
              {
                label: "中立の立場",
                title: "物件売買では儲けません",
                body: "内装工事の会社なので、どの物件を選んでもらっても構いません。「この物件は買わない方が」と本音で言えます。",
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  background: "#fff",
                  border: "1px solid #e0d8cc",
                  borderRadius: "10px",
                  padding: "20px 16px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: "10px", letterSpacing: ".2em", color: "#C9A84C", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" as const }}>
                  {col.label}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#2a2a2a", marginBottom: "10px", lineHeight: 1.5 }}>
                  {col.title}
                </div>
                <div style={{ fontSize: "12px", color: "#5A574F", lineHeight: 1.85 }}>{col.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. 物件リスト本体 + CTA                                             */}
      {/* ================================================================ */}
      <section style={{ padding: "40px 16px 56px", background: "#ffffff" }}>
        <div style={{ maxWidth: "420px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "3px", color: "#6B4066", marginBottom: "6px", textTransform: "uppercase" as const }}>
            Full List
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(17px, 4vw, 19px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "18px" }}>
            引き続き、ご紹介可能な物件
          </h2>

          <div
            role="list"
            style={{
              border: "1px solid #e0d8cc",
              borderRadius: "10px",
              background: "#ffffff",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(60,40,20,0.06)",
              marginBottom: "20px",
            }}
          >
            <div style={{ padding: "10px 16px", background: "#faf7f2", borderBottom: "1px solid #ece6dc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "1px" }}>非公開 収益物件リスト（続き）</span>
              <span style={{ fontSize: "11px", color: "#6B4066", fontWeight: 600 }}>{restRows.length}件</span>
            </div>
            <div>
              {restRows.map((prop, i) => (
                <PropertyRow key={i} prop={prop} isVisible={true} isLast={i === restRows.length - 1} />
              ))}
            </div>
            <div style={{ padding: "10px 16px", background: "#faf7f2", borderTop: "1px solid #ece6dc", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#8a7a6a", marginBottom: "4px" }}>
                <svg viewBox="0 0 16 16" fill="none" style={{ width: "10px", height: "10px", verticalAlign: "middle", marginRight: "3px" }} aria-hidden="true">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#8a7a6a" strokeWidth="1.2" />
                  <path d="M5 7V5a3 3 0 016 0v2" stroke="#8a7a6a" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                住所・写真・詳細条件は非公開
              </div>
              <div style={{ fontSize: "11px", color: "#8a7a6a" }}>
                他にも <strong style={{ color: "#6B4066" }}>{remainingCount}</strong> 件あります
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "14px 0 0" }}>
            <span style={{ display: "inline-block", width: "2px", height: "28px", background: "linear-gradient(180deg, #d8d0c4, #06C755)", borderRadius: "1px" }} />
            <span style={{ display: "block", margin: "0 auto", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "9px solid #06C755" }} />
            <div style={{ fontSize: "13px", color: "#6B4066", margin: "12px 0 16px", lineHeight: 1.6 }}>
              裏側を知った2人と、一度話してみたい方は
            </div>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLineCtaClick("bukken_hero_v2_cta")}
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
              LINEで相談してみる
            </a>
            <div style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "8px" }}>
              無料・営業なし・いつでもブロック可能
            </div>
          </div>
        </div>
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
