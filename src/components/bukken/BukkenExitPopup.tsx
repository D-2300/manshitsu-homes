import { useEffect, useState, useCallback } from "react";
import { LINE_URL } from "../../tokens";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function BukkenExitPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleExit = useCallback(() => {
    if (dismissed) return;
    if (performance.now() < 5000) return;
    setShow(true);
    window.dataLayer?.push({ event: "exit_popup_shown", location: "bukken_lp" });
  }, [dismissed]);

  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) handleExit();
    };

    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 400) {
        lastScrollY = currentY;
        return;
      }
      if (currentY < lastScrollY) {
        scrollUpCount++;
        if (scrollUpCount >= 3) {
          handleExit();
          scrollUpCount = 0;
        }
      } else {
        scrollUpCount = 0;
      }
      lastScrollY = currentY;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleExit]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    window.dataLayer?.push({ event: "exit_popup_dismissed", location: "bukken_lp" });
  };

  const handleClick = () => {
    window.dataLayer?.push({ event: "line_cta_click", cta_location: "exit_popup" });
    window.open(LINE_URL, "_blank");
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <>
      <div
        onClick={handleDismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 9998,
          animation: "bukkenPopupFadeIn 0.2s ease",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "min(90vw, 380px)",
          background: "#fff",
          borderRadius: "16px",
          padding: "32px 24px 28px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          animation: "bukkenPopupSlideUp 0.3s ease",
        }}
      >
        <button
          onClick={handleDismiss}
          aria-label="閉じる"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "22px",
            color: "#999",
            cursor: "pointer",
            lineHeight: 1,
            padding: "4px",
          }}
        >
          ✕
        </button>

        <p style={{
          fontSize: "clamp(11px, 2.5vw, 13px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          color: "#C9A84C",
          marginBottom: "8px",
        }}>
          ちょっと待ってください
        </p>

        <h3 style={{
          fontSize: "clamp(18px, 4vw, 22px)",
          fontWeight: 700,
          color: "#1a1a1f",
          lineHeight: 1.6,
          marginBottom: "12px",
        }}>
          非公開の収益物件リスト、<br />
          まだ見ていませんか？
        </h3>

        <p style={{
          fontSize: "clamp(13px, 2.5vw, 15px)",
          color: "#666",
          lineHeight: 1.7,
          marginBottom: "20px",
        }}>
          宮城県のアパート投資物件情報を<br />
          <strong style={{ color: "#333" }}>無料</strong>でお届けしています。
        </p>

        <button
          onClick={handleClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#06C755",
            color: "#fff",
            borderRadius: "999px",
            padding: "16px 32px",
            fontSize: "clamp(15px, 3vw, 17px)",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          非公開の物件リストを見る
        </button>

        <p style={{
          fontSize: "12px",
          color: "#aaa",
          marginTop: "12px",
        }}>
          1分で完了・営業なし・いつでもブロック可能
        </p>

        <button
          onClick={handleDismiss}
          style={{
            background: "none",
            border: "none",
            fontSize: "12px",
            color: "#ccc",
            cursor: "pointer",
            marginTop: "8px",
            textDecoration: "underline",
            padding: 0,
          }}
        >
          今はいいです
        </button>
      </div>

      <style>{`
        @keyframes bukkenPopupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bukkenPopupSlideUp {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}
