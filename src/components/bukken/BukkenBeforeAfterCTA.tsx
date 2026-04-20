import { useRef, useState, useCallback, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function BukkenBASlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);
  const hasFiredEvent = useRef(false);

  const getPosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }, []);

  const fireSliderEvent = useCallback(() => {
    if (!hasFiredEvent.current) {
      hasFiredEvent.current = true;
      window.dataLayer?.push({ event: "ba_slider_interact" });
    }
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging.current) return;
      fireSliderEvent();
      setPosition(getPosition(clientX));
    },
    [getPosition, fireSliderEvent]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const onEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [handleMove]);

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    fireSliderEvent();
    setPosition(getPosition(clientX));
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.clientX);
      }}
      onTouchStart={(e) => {
        if (e.touches[0]) startDrag(e.touches[0].clientX);
      }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "pan-y",
      }}
    >
      <img
        src="/images/m-after-green-sm.webp"
        alt="アパート改修 After"
        width="480"
        height="360"
        loading="lazy"
        draggable={false}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src="/images/m-before-3-sm.webp"
          alt="アパート改修 Before"
          width="480"
          height="360"
          loading="lazy"
          draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "3px",
          backgroundColor: "#fff",
          transform: "translateX(-50%)",
          boxShadow: "0 0 8px rgba(0,0,0,0.4)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ pointerEvents: "none" }}>
          <path d="M6 4L2 10L6 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4L18 10L14 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          backgroundColor: "rgba(55,65,81,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          backgroundColor: "rgba(107,64,102,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        After
      </span>
    </div>
  );
}

export default function BukkenBeforeAfterCTA() {
  return (
    <section style={{ backgroundColor: "#f9f8f6", padding: "44px 24px 40px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#C9A84C",
            }}
          >
            BEFORE &amp; AFTER
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#1a1a1f",
              lineHeight: 1.6,
            }}
          >
            この築古アパートを買ってから<br />2週間で、こうなりました。
          </h2>
        </div>

        {/* Slider */}
        <BukkenBASlider />
        <p style={{ textAlign: "center", fontSize: "13px", color: "#999", margin: "10px 0 0" }}>
          ◀ スライドして比較 ▶
        </p>

        {/* Case info */}
        <div
          style={{
            marginTop: "14px",
            padding: "12px 16px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #e8e6e0",
          }}
        >
          <p style={{ margin: "0 0 4px", fontSize: "clamp(14px, 2.6vw, 16px)", fontWeight: 700, color: "#1a1a1f", letterSpacing: "0.02em" }}>
            仙台市太白区・築22年アパート
            <span style={{ fontSize: "13px", fontWeight: 400, color: "#999", marginLeft: "8px" }}>
              1K・22㎡
            </span>
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#777" }}>
              工期 <strong style={{ color: "#333" }}>約7日間</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#777" }}>
              費用 <strong style={{ color: "#C9A84C", fontSize: "14px" }}>14万円</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#777" }}>空室→即成約</span>
          </div>
        </div>

        {/* Story bridge */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#666",
            lineHeight: 1.8,
            margin: "20px 0 0",
          }}
        >
          物件探しから改修まで一気通貫でサポート。<br />
          改修費用も、物件交渉も、損しない方法があります。
        </p>
      </div>
    </section>
  );
}
