import { Clock } from "lucide-react";
import { LINE_URL } from "../tokens";

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

const pickup = {
  type: "1K・築18年アパート",
  days: "2日",
  cost: "¥105,000",
  beforeSrc: "/images/m-before-3-sm.webp",
  afterSrc: "/images/m-after-green-sm.webp",
  desc: "退去翌日に現地確認→即日着工。クロス全面張替え＋CF張替え＋クリーニング。",
};

const others = [
  {
    type: "ワンルーム・築22年マンション",
    days: "2日",
    cost: "¥88,000",
    beforeSrc: "/images/m-before-1-sm.webp",
    afterSrc: "/images/m-after-pendant-sm.webp",
  },
  {
    type: "1LDK・築15年アパート",
    days: "3日",
    cost: "¥142,000",
    beforeSrc: "/images/m-before-2-sm.webp",
    afterSrc: "/images/m-after-accent-sm.webp",
  },
];

export default function MWorks() {
  return (
    <section className="bg-m-dark py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-c-gold-lt text-xs font-semibold tracking-widest text-center mb-3">
          WORKS
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-white text-center leading-snug mb-10">
          施工実績
        </h2>

        {/* Pickup */}
        <div className="bg-m-main rounded-lg overflow-hidden mb-6">
          <div className="flex">
            <div className="flex-1 relative">
              <img src={pickup.beforeSrc} alt="施工前" loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 text-[11px] font-semibold bg-black/65 text-white/90 px-2.5 py-1 rounded-sm tracking-wide">
                BEFORE
              </span>
            </div>
            <div className="w-[2px] bg-m-dark" />
            <div className="flex-1 relative">
              <img src={pickup.afterSrc} alt="施工後" loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 text-[11px] font-semibold bg-c-gold text-m-dark px-2.5 py-1 rounded-sm tracking-wide">
                AFTER
              </span>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-white/85 mb-3">{pickup.type}</p>
            <div className="flex items-center gap-6 mb-2">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-c-gold" />
                <span className="text-2xl font-bold text-c-gold">{pickup.days}</span>
                <span className="text-xs text-white/50">で完了</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-white">{pickup.cost}</span>
                <span className="text-xs text-white/50 ml-1">（税別）</span>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">{pickup.desc}</p>
          </div>
        </div>

        {/* Other Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {others.map((w, i) => (
            <div key={i} className="bg-m-main rounded-lg overflow-hidden">
              <div className="flex h-[120px]">
                <div className="flex-1 relative">
                  <img src={w.beforeSrc} alt="施工前" loading="lazy" className="w-full h-full object-cover brightness-[0.85]" />
                  <span className="absolute top-1.5 left-1.5 text-[10px] font-semibold bg-black/65 text-white/90 px-2 py-0.5 rounded-sm">
                    BEFORE
                  </span>
                </div>
                <div className="w-px bg-m-dark" />
                <div className="flex-1 relative">
                  <img src={w.afterSrc} alt="施工後" loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-1.5 left-1.5 text-[10px] font-semibold bg-c-gold text-m-dark px-2 py-0.5 rounded-sm">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-3 border-t border-white/10">
                <p className="text-xs text-white/80 mb-1">{w.type}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-c-gold text-sm font-bold">
                    <Clock size={13} /> {w.days}
                  </span>
                  <span className="text-sm font-medium text-white">{w.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/35">
          ※施工事例はイメージです。初回のお客様には特別価格でご対応します。
        </p>

        <div className="mt-6 text-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            className="inline-flex items-center gap-2 bg-line text-white font-bold text-sm py-3 px-8 rounded shadow-lg shadow-line/30 no-underline hover:brightness-110 transition-all"
          >
            施工事例をもっと見る（LINE）
          </a>
        </div>
      </div>
    </section>
  );
}
