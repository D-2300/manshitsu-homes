import { CheckCircle } from "lucide-react";
import { LINE_URL } from "../tokens";

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

const benefits = [
  "初回1部屋特別価格",
  "施工後修正無料",
  "写真付き施工報告LINE共有",
];

export default function MTrialOffer() {
  return (
    <section className="bg-gradient-to-br from-m-main to-m-dark py-14 px-5">
      <div className="max-w-[720px] mx-auto text-center">
        <p className="text-c-gold-lt/60 text-xs font-semibold tracking-widest mb-3">
          TRIAL OFFER
        </p>
        <h2 className="text-[clamp(22px,5.5vw,30px)] font-bold text-white leading-snug mb-5">
          まず1部屋、<br className="sm:hidden" />試してください。
        </h2>
        <p className="text-[clamp(13px,3.2vw,15px)] text-white/70 leading-[1.85] mb-8 max-w-[480px] mx-auto">
          知らない業者にいきなり全部任せるのは不安なはず。
          だから、初回は1部屋限定のお試し価格でご提供します。
          スピードと仕上がりを体感してから、続けるか決めてください。
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-[400px] mx-auto">
          <ul className="space-y-3 text-left">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                <CheckCircle size={20} className="text-c-gold flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushEvent("line_cta_click_manshitsu")}
          className="inline-flex items-center gap-2 bg-line text-white font-bold text-[15px] py-3.5 px-10 rounded shadow-lg shadow-line/30 no-underline hover:brightness-110 transition-all"
        >
          LINEで相談する
        </a>
      </div>
    </section>
  );
}
