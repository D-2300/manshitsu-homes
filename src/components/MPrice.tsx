import { LINE_URL } from "../tokens";

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

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
    <section className="bg-c-warm py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-m-main text-xs font-semibold tracking-widest text-center mb-3">
          PRICE
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-c-text text-center leading-snug mb-3">
          「一式◯万円」は、ありません。
        </h2>
        <p className="text-sm text-c-text-md text-center mb-8 leading-relaxed">
          平米数・単価・材料名をすべて記載した見積書をお出しします。
        </p>

        <div className="rounded-lg overflow-hidden border border-m-light/20 bg-white mb-4">
          {/* Header */}
          <div className="bg-m-main px-4 py-2.5 flex justify-between">
            <span className="text-[11px] font-medium text-white/70 tracking-wide">施工内容</span>
            <span className="text-[11px] font-medium text-white/70 tracking-wide">単価（税別）</span>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-4 py-3 gap-3 ${
                i < rows.length - 1 ? "border-b border-m-light/10" : ""
              } ${i % 2 === 0 ? "bg-white" : "bg-m-bg/20"}`}
            >
              <span className="text-xs text-c-text leading-relaxed flex-1">{row.label}</span>
              <span className="text-sm font-medium text-m-dark whitespace-nowrap flex-shrink-0">{row.price}</span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-c-warm-gr leading-relaxed mb-6">
          ※最低発注金額 35,000円（税別）〜　※使用材料はサンゲツ・リリカラ等のJIS規格品。F☆☆☆☆対応。
        </p>

        <div className="text-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            className="inline-flex items-center gap-2 bg-line text-white font-bold text-sm py-3 px-8 rounded shadow-lg shadow-line/30 no-underline hover:brightness-110 transition-all"
          >
            管理会社の見積書をLINEで送るだけ
          </a>
        </div>
      </div>
    </section>
  );
}
