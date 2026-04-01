import { M, C, LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MFloatingCTA() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: `rgba(68,41,64,0.95)`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: `1px solid rgba(201,168,76,0.15)`,
        padding: "10px 16px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => pushEvent("line_cta_click_manshitsu")}
        style={{
          flex: 1,
          maxWidth: "240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          backgroundColor: C.lineGreen,
          color: C.white,
          borderRadius: "4px",
          padding: "12px 12px",
          fontSize: "14px",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.03em",
          boxShadow: "0 2px 8px rgba(6,199,85,0.3)",
        }}
      >
        LINEで相談
      </a>
      <a
        href={`tel:${TEL}`}
        onClick={() => pushEvent("phone_cta_click_manshitsu")}
        style={{
          flex: 1,
          maxWidth: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          backgroundColor: "transparent",
          color: C.white,
          border: "1px solid rgba(255,255,255,0.35)",
          borderRadius: "4px",
          padding: "11px 12px",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        📞 電話する
      </a>
    </div>
  );
}
