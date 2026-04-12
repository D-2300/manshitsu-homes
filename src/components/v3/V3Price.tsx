import { M, C, LINE_URL } from "../../tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const rows = [
  { label: "クロス張替え（量産品）めくり・下地処理・処分込み", price: "900円/㎡〜" },
  { label: "アクセントクロス（1面）デザイン提案込み", price: "15,000円〜" },
  { label: "CF張替え", price: "2,800円/㎡〜" },
  { label: "フロアタイル", price: "3,500円/㎡〜" },
  { label: "壁穴・キズ補修（リペア）", price: "8,000円/箇所〜" },
  { label: "畳表替え", price: "2,800円/畳〜" },
  { label: "ハウスクリーニング（1R〜1K）", price: "21,000円〜" },
  { label: "ハウスクリーニング（1LDK〜2DK）", price: "33,000円〜" },
];

export default function V3Price() {
  return (
    <section style={{ padding: "56px 20px", background: C.warmWhite }}>
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
          PRICE
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.7,
          }}
        >
          「一式◯万円」は、ありません。
        </h2>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: C.textMid,
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          平米数・単価・材料名をすべて記載した見積書をお出しします。
        </p>

        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: `1px solid rgba(192,154,181,.2)`,
            background: "#fff",
            marginBottom: "16px",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: M.main,
              padding: "10px 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,.7)", letterSpacing: "0.05em" }}>
              施工内容
            </span>
            <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,.7)", letterSpacing: "0.05em" }}>
              単価（税別）
            </span>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                gap: "12px",
                borderBottom: i < rows.length - 1 ? `1px solid rgba(192,154,181,.1)` : "none",
                background: i % 2 === 0 ? "#fff" : "rgba(240,230,237,.2)",
              }}
            >
              <span style={{ fontSize: "12px", color: C.textDark, lineHeight: 1.6, flex: 1 }}>
                {row.label}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 500, color: M.dark, whiteSpace: "nowrap", flexShrink: 0 }}>
                {row.price}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "11px",
            color: C.warmGray,
            lineHeight: 1.7,
            marginBottom: "24px",
          }}
        >
          ※最低発注金額 35,000円（税別）〜　※使用材料はサンゲツ・リリカラ等のJIS規格品。F☆☆☆☆対応。
        </p>

        <div style={{ textAlign: "center" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer?.push({ event: "line_cta_click", cta_location: "v3_price" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: C.lineGreen,
              color: "#fff",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "clamp(14px, 2.8vw, 16px)",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,.25)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            非公開の物件情報を見る
          </a>
        </div>
      </div>
    </section>
  );
}
