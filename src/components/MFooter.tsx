import { TEL_DISPLAY } from "../tokens";

export default function MFooter() {
  return (
    <footer className="bg-m-dark py-10 px-5">
      <div className="max-w-[720px] mx-auto text-center">
        <img
          src="/images/logo-manshitsu-mark-white.webp"
          alt="満室デザインLABO"
          loading="lazy"
          className="h-11 object-contain mx-auto mb-3 opacity-80"
        />
        <p className="text-c-gold text-[15px] font-medium tracking-wide mb-2">
          満室デザインLABO
        </p>
        <p className="text-white/50 text-[13px] mb-1">
          対応エリア：仙台市・宮城県全域
        </p>
        <p className="text-white/40 text-xs mb-5">
          {TEL_DISPLAY}
        </p>
        <div className="border-t border-white/[0.08] pt-4">
          <p className="text-white/25 text-[11px] tracking-wide">
            &copy; 満室デザインLABO. All rights reserved.
          </p>
          <p className="text-white/15 text-[10px] mt-1">
            Produced by 記憶荘
          </p>
        </div>
      </div>
    </footer>
  );
}
