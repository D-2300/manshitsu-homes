import { LINE_URL } from "../../tokens";
import { trackLineCtaClick } from "../../utils/trackConversion";

/**
 * HPHeroV2 — LP と同じ視覚言語に統一した HP Hero
 *
 * LP Hero の構造（Hero ブロックのみ）を HP 向けに移植:
 *  - ターゲットバッジ / 職歴ラベル
 *  - 顔写真（KAI/KEN）
 *  - H1「物件を売る側にいた人間が、裏側を教えます。」
 *  - CRAFTSMANSHIP 見出し + 数字プラーク + 40年 + ✓ピル
 *  - CTA（LINE）
 *
 * HP特有:
 *  - minHeight 100vh（全画面）
 *  - 背景に hero-bg.webp を薄く敷く（ブランド感）
 *  - 要素間の余白をLPより広く
 *  - パターン・インタラプトは LP 専用なので入れない
 */

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function HPHeroV2() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #2a1f2a 0%, #231a28 60%, #1d1625 100%)",
        padding: "40px 16px 60px",
      }}
    >
      {/* 背景画像（薄く敷く） */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hero-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.9) brightness(0.25)",
          opacity: 0.35,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(154,110,142,.22) 0%, rgba(192,154,181,.08) 35%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* ターゲットバッジ */}
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
            padding: "7px 16px",
            marginBottom: "18px",
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

        {/* カテゴリ */}
        <p
          style={{
            fontSize: "clamp(11px, 2.1vw, 13px)",
            fontWeight: 400,
            letterSpacing: ".15em",
            color: "#C9A84C",
            marginBottom: "14px",
          }}
        >
          元不動産仲介20年 × 大工20年
        </p>

        {/* 顔写真2人 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "22px",
            marginBottom: "24px",
          }}
        >
          {[
            { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産" },
            { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人" },
          ].map((p) => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
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
                    fontSize: "12px",
                    color: "#C9A84C",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: "10px",
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

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(23px, 5.6vw, 40px)",
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.55,
            marginBottom: "14px",
            letterSpacing: ".02em",
          }}
        >
          物件を<em style={{ fontStyle: "normal", color: "#C9A84C" }}>売る側</em>にいた人間が、<br />
          <em style={{ fontStyle: "normal", color: "#C9A84C" }}>裏側</em>を教えます。
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "rgba(220,210,220,.7)",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          20年やって、辞めました。
        </p>

        {/* CRAFTSMANSHIP 見出し */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "420px",
            margin: "0 auto 10px",
          }}
        >
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,.45))",
            }}
          />
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
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, rgba(201,168,76,.45), transparent)",
            }}
          />
        </div>

        {/* 数字プラーク */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            maxWidth: "420px",
            margin: "0 auto 12px",
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

        {/* 40年行 */}
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
          <span
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)",
            }}
          />
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
          <span
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)",
            }}
          />
        </div>

        {/* ピル */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
            maxWidth: "440px",
            margin: "0 auto 28px",
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

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineCtaClick("hp_hero_v2")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "#06C755",
              color: "#fff",
              fontSize: "clamp(15px, 3vw, 16px)",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.3)",
              letterSpacing: "0.03em",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで無料相談する
          </a>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,.55)", margin: 0 }}>
            1分で完了・物件未定OK・営業なし
          </p>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "14px",
          color: "rgba(201,168,76,.45)",
          animation: "hpHeroScrollBounce 2s ease-in-out infinite",
          zIndex: 1,
        }}
      >
        ↓
      </div>

      <style>{`
        @keyframes hpHeroScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(4px); }
        }
      `}</style>
    </section>
  );
}
