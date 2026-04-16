import { useState, useEffect, useRef } from "react";
import { C, LINE_URL, TEL } from "../../tokens";
import { trackLineCtaClick, trackPhoneCtaClick } from "../../utils/trackConversion";

export default function V3FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hiddenByFinalCTA, setHiddenByFinalCTA] = useState(false);
  const finalCTARef = useRef<Element | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const finalCTA = document.querySelector("[data-section='final-cta']");
    if (!finalCTA) return;
    finalCTARef.current = finalCTA;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenByFinalCTA(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(finalCTA);
    return () => observer.disconnect();
  }, []);

  const isShown = visible && !hiddenByFinalCTA;

  const handleClick = () => {
    trackLineCtaClick("bukken_floating_cta");
    window.open(LINE_URL, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        transform: isShown ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
        pointerEvents: isShown ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "60px",
          backgroundColor: C.lineGreen,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "12px 12px 0 0",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
        className="v3-floating-bar"
      >
        <div
          onClick={handleClick}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            height: "100%",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 4C11.163 4 4 10.268 4 17.96c0 4.896 3.086 9.21 7.75 11.72-.34 1.27-1.23 4.6-1.41 5.31-.22.86.32.85.67.62.28-.18 4.44-2.93 6.24-4.12.89.12 1.82.18 2.75.18 8.837 0 16-6.268 16-13.96S28.837 4 20 4z"
              fill="white"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
            className="v3-floating-text"
          >
            非公開の物件情報を見る
          </span>
        </div>

        <a
          href={`tel:${TEL}`}
          style={{
            flexShrink: 0,
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "#1A1A1A",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
          aria-label="電話で相談する"
          onClick={() => trackPhoneCtaClick("bukken_floating_cta")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .v3-floating-bar {
            max-width: 100% !important;
            border-radius: 0 !important;
            height: 56px !important;
          }
          .v3-floating-text {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
