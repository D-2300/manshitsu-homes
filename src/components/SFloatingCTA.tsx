import { useState, useEffect } from "react";
import { C, LINE_URL } from "../tokens";
import { pushEvent } from "../utils/pushEvent";

export default function SFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hiddenByFinalCTA, setHiddenByFinalCTA] = useState(false);

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenByFinalCTA(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(finalCTA);
    return () => observer.disconnect();
  }, []);

  const isShown = visible && !hiddenByFinalCTA;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        maxWidth: 480,
        margin: "0 auto",
        padding: "10px 16px",
        paddingBottom: "calc(10px + env(safe-area-inset-bottom, 0px))",
        backgroundColor: "rgba(68,41,64,0.95)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: "12px 12px 0 0",
        transform: isShown ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          pushEvent("line_cta_click_staging")
        }
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          backgroundColor: C.lineGreen,
          color: "#fff",
          fontWeight: 700,
          fontSize: 14,
          padding: "12px 20px",
          borderRadius: 999,
          textDecoration: "none",
          boxShadow: "0 2px 12px rgba(6,199,85,0.3)",
        }}
      >
        この方法を詳しく聞いてみる
      </a>
      <style>{`
        @media (max-width: 767px) {
          div[style*="maxWidth: 480"] {
            max-width: 100% !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
