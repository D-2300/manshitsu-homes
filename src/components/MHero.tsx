import { Clock, Zap, Star, Phone } from "lucide-react";
import { LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MHero() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-m-dark">
      {/* Background image — high visibility */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="施工完了後の明るい部屋"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-m-dark/80 via-m-dark/40 to-m-dark/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto px-5 pb-8 pt-20">
        <h1 className="text-[clamp(28px,7vw,42px)] font-bold text-white leading-[1.3] tracking-tight mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          最短2日。<br />
          空室を、収益に戻す。
        </h1>

        <p className="text-[clamp(14px,3.5vw,16px)] text-white/85 leading-[1.85] mb-6" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
          退去連絡から最短2日で原状回復完了。<br />
          管理会社を通さないから、速い。<br />
          直接だから、安い。細かい修正もすぐ対応。<br />
          まず1部屋、お試しください。
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-c-gold/15 border border-c-gold/30 text-c-gold text-xs font-semibold px-3 py-1.5 rounded">
            <Clock size={14} /> 最短2日
          </span>
          <span className="inline-flex items-center gap-1.5 bg-c-gold/15 border border-c-gold/30 text-c-gold text-xs font-semibold px-3 py-1.5 rounded">
            <Zap size={14} /> 中間マージン0円
          </span>
          <span className="inline-flex items-center gap-1.5 bg-c-gold/15 border border-c-gold/30 text-c-gold text-xs font-semibold px-3 py-1.5 rounded">
            <Star size={14} /> 初回お試し価格
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            className="flex-1 flex items-center justify-center gap-2 bg-line text-white font-bold text-[15px] py-3.5 rounded shadow-lg shadow-line/30 no-underline hover:brightness-110 transition-all"
          >
            LINEで無料見積もり
          </a>
          <a
            href={`tel:${TEL}`}
            onClick={() => pushEvent("phone_cta_click_manshitsu")}
            className="flex items-center justify-center gap-1.5 border border-white/30 text-white text-sm py-3.5 px-4 rounded no-underline hover:bg-white/10 transition-all"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{TEL_DISPLAY}</span>
            <span className="sm:hidden">電話</span>
          </a>
        </div>
      </div>
    </section>
  );
}
