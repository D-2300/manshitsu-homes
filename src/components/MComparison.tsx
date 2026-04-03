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
    <section className="bg-slate-50 py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-amber-600 text-xs font-semibold tracking-widest text-center mb-3">
          COMPARISON
        </p>
        <h2 className="text-[clamp(18px,4.5vw,26px)] font-bold text-slate-900 text-center leading-snug mb-8">
          従来の管理会社経由との違い
        </h2>

        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-800 text-white text-xs font-semibold">
            <div className="p-3" />
            <div className="p-3 text-center border-l border-slate-700">管理会社経由</div>
            <div className="p-3 text-center border-l border-slate-700 bg-amber-600 text-white">満室デザインLABO</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_1fr_1fr] text-sm border-t border-slate-100 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <div className="p-3 font-medium text-slate-700 text-xs">
                {row.label}
              </div>
              <div className="p-3 text-center text-slate-400 border-l border-slate-100 text-xs">
                {row.old}
              </div>
              <div className={`p-3 text-center border-l border-slate-100 text-xs font-bold ${
                row.highlight ? "text-amber-600 bg-amber-50/50" : "text-slate-800"
              }`}>
                {row.highlight && <ArrowRight size={12} className="inline mr-1 text-amber-500" />}
                {row.new}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
