import { useState } from "react";

export default function MVacancyCost() {
  const [rent, setRent] = useState(70000);

  const dailyLoss = Math.round(rent / 30);
  const weeklyLoss = dailyLoss * 7;
  const monthlyLoss = rent;

  const fmt = (n: number) => n.toLocaleString("ja-JP");

  return (
    <section className="bg-slate-900 text-white py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-amber-400 text-xs font-semibold tracking-widest text-center mb-3">
          VACANCY COST
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-center leading-snug mb-8">
          空室の1日は、<br className="sm:hidden" />いくらの損失か。
        </h2>

        {/* Slider */}
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <label className="block text-sm text-slate-400 mb-2">月額家賃</label>
          <div className="text-3xl font-bold text-amber-400 mb-3">
            {fmt(rent)}<span className="text-base font-normal text-slate-400 ml-1">円/月</span>
          </div>
          <input
            type="range"
            min={30000}
            max={200000}
            step={5000}
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>3万</span>
            <span>20万</span>
          </div>
        </div>

        {/* Loss display */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-slate-800 rounded-lg p-4 text-center">
            <p className="text-xs text-slate-400 mb-1">1日あたり</p>
            <p className="text-xl font-bold text-red-400">-{fmt(dailyLoss)}</p>
            <p className="text-xs text-slate-500">円</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 text-center">
            <p className="text-xs text-slate-400 mb-1">1週間</p>
            <p className="text-xl font-bold text-red-400">-{fmt(weeklyLoss)}</p>
            <p className="text-xs text-slate-500">円</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 text-center">
            <p className="text-xs text-slate-400 mb-1">1ヶ月</p>
            <p className="text-xl font-bold text-red-400">-{fmt(monthlyLoss)}</p>
            <p className="text-xs text-slate-500">円</p>
          </div>
        </div>

        <p className="text-[clamp(13px,3.2vw,15px)] text-slate-300 text-center leading-relaxed">
          一般的な管理会社経由の原状回復は<span className="text-red-400 font-semibold">2〜4週間</span>。<br />
          満室デザインLABOなら、<span className="text-amber-400 font-semibold">最短2日</span>で完了。
        </p>
      </div>
    </section>
  );
}
