import { Phone } from "lucide-react";
import { LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MContactCTA() {
  return (
    <section className="bg-m-dark py-14 px-5">
      <div className="max-w-[720px] mx-auto text-center">
        <h2 className="text-[clamp(20px,5.5vw,30px)] font-bold text-white leading-snug mb-3">
          管理会社の見積書、<br className="sm:hidden" />LINEで送るだけ。
        </h2>
        <p className="text-sm text-white/50 mb-8 leading-relaxed">
          比較用の見積もりを無料でお出しします。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-[400px] mx-auto">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            className="flex-1 flex items-center justify-center gap-2 bg-line text-white font-bold text-[15px] py-4 rounded shadow-lg shadow-line/30 no-underline hover:brightness-110 transition-all"
          >
            LINEで無料見積もり
          </a>
          <a
            href={`tel:${TEL}`}
            onClick={() => pushEvent("phone_cta_click_manshitsu")}
            className="flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-medium py-4 px-6 rounded no-underline hover:bg-white/10 transition-all"
          >
            <Phone size={16} />
            {TEL_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
