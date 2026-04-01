import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

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

export default function MPrice() {
  return (
    <section style={{ backgroundColor: C.warmWhite, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="PRICE" heading={"「一式◯万円」は、ありません。"} />

        <p
          style={{
            margin: "0 0 20px",
            textAlign: "center",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            color: C.textMid,
            lineHeight: 1.85,
          }}
        >
          平米数・単価・材料名をすべて記載した見積書をお出しします。
        </p>

        <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #E8E3DC", marginBottom: "12px" }}>
          <div style={{ backgroundColor: M.main, padding: "10px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>施工内容</span>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>単価（税別）</span>
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: i < rows.length - 1 ? "1px solid #EDE9E4" : "none",
                backgroundColor: i % 2 === 0 ? C.white : "#FAFAF8",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "clamp(12px, 3vw, 13px)", color: C.textDark, lineHeight: 1.5, flex: 1 }}>
                {row.label}
              </span>
              <span style={{ fontSize: "clamp(13px, 3vw, 14px)", color: M.dark, fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0 }}>
                {row.price}
              </span>
            </div>
          ))}
        </div>

        <p style={{ margin: 0, fontSize: "11px", color: C.warmGray, lineHeight: 1.8, letterSpacing: "0.02em" }}>
          ※最低発注金額 35,000円（税別）〜　※使用材料はサンゲツ・リリカラ等のJIS規格品。F☆☆☆☆対応。
        </p>
      </div>
    </section>
  );
}
