import { Phone } from "lucide-react";
import { LINE_URL, TEL } from "../tokens";

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MFloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-m-dark/95 backdrop-blur-md border-t border-c-gold/15 p-2.5 flex gap-2.5 justify-center items-center md:hidden">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => pushEvent("line_cta_click_manshitsu")}
        className="flex-1 max-w-[240px] flex items-center justify-center gap-1.5 bg-line text-white rounded py-3 text-sm font-bold no-underline shadow-lg shadow-line/30"
      >
        LINEで相談
      </a>
      <a
        href={`tel:${TEL}`}
        onClick={() => pushEvent("phone_cta_click_manshitsu")}
        className="flex-1 max-w-[200px] flex items-center justify-center gap-1.5 border border-white/30 text-white rounded py-3 text-sm font-medium no-underline"
      >
        <Phone size={15} /> 電話する
      </a>
    </div>
  );
}
