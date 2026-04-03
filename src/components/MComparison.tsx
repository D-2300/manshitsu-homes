import { ArrowRight } from "lucide-react";

const rows = [
  { label: "連絡〜着工", old: "2〜4週間", new: "最短翌日", highlight: true },
  { label: "施工期間", old: "1〜2週間", new: "最短2日", highlight: true },
  { label: "中間マージン", old: "あり（30〜50%）", new: "0円", highlight: false },
  { label: "見積もり透明性", old: "一式○○万円", new: "項目別明細", highlight: false },
  { label: "施工後フォロー", old: "再度管理会社経由", new: "直接LINE対応", highlight: false },
  { label: "コミュニケーション", old: "管理会社が間に入る", new: "オーナーと直接", highlight: false },
];

export default function MComparison() {
  return (
    <section className="bg-m-bg py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-m-main text-xs font-semibold tracking-widest text-center mb-3">
          COMPARISON
        </p>
        <h2 className="text-[clamp(18px,4.5vw,26px)] font-bold text-c-text text-center leading-snug mb-8">
          従来の管理会社経由との違い
        </h2>

        <div className="rounded-lg overflow-hidden border border-m-light/30 bg-white">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-m-dark text-white text-xs font-semibold">
            <div className="p-3" />
            <div className="p-3 text-center border-l border-white/10">管理会社経由</div>
            <div className="p-3 text-center border-l border-white/10 bg-m-main text-white">満室デザインLABO</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_1fr_1fr] text-sm border-t border-m-light/15 ${
                i % 2 === 0 ? "bg-white" : "bg-m-bg/30"
              }`}
            >
              <div className="p-3 font-medium text-c-text text-xs">
                {row.label}
              </div>
              <div className="p-3 text-center text-c-warm-gr border-l border-m-light/15 text-xs">
                {row.old}
              </div>
              <div className={`p-3 text-center border-l border-m-light/15 text-xs font-bold ${
                row.highlight ? "text-c-gold bg-c-gold-pl/40" : "text-c-text"
              }`}>
                {row.highlight && <ArrowRight size={12} className="inline mr-1 text-c-gold" />}
                {row.new}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
