import { LINE_URL } from "../../tokens";
import { trackLineCtaClick } from "../../utils/trackConversion";

const lineSvgPath = "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function BukkenBottomCTA() {
  return (
    <section data-section="final-cta" style={{ background: "#1a1a1f", padding: "64px 24px", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#fff", marginBottom: "10px", lineHeight: 1.7 }}>
        知らないまま買って、<br />
        <em style={{ fontStyle: "normal", color: "#C9A84C" }}>損してからでは遅い</em>のです。
      </h2>
      <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "rgba(255,255,255,.4)", marginBottom: "28px", lineHeight: 1.8 }}>
        無料ガイド + ご紹介可能な収益物件情報 + 個別アドバイス。<br />まずは気軽にLINEしてください。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLineCtaClick("bukken_bottom_cta")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#06C755",
          color: "#fff",
          borderRadius: "999px",
          padding: "16px 36px",
          fontSize: "clamp(16px, 3vw, 19px)",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: ".03em",
          boxShadow: "0 4px 24px rgba(6,199,85,.4)",
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
          <path d={lineSvgPath} />
        </svg>
        無料ガイド+物件情報を受け取る
      </a>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,.25)", marginTop: "14px" }}>
        1分で完了・営業なし・いつでもブロック可能
      </p>
    </section>
  );
}
