import { LINE_URL } from "../../tokens";
import { trackLineCtaClick } from "../../utils/trackConversion";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const losses = [
  "表面利回りだけで選び、修繕費で赤字転落",
  "売主の言い値で買い、相場より数百万円高い物件を掴む",
  "指値交渉をせず、数百万円を損",
  "リフォーム見積で中間マージンを上乗せされる",
  "客付けのコツを知らず、空室が半年続く",
];

export default function BukkenGuideSection() {
  const handleClick = () => {
    trackLineCtaClick("bukken_guide_section");
    window.open(LINE_URL, "_blank");
  };

  return (
    <section style={{ background: "#fff", padding: "44px 20px 36px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Header */}
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          FREE GUIDE
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1a1f", lineHeight: 1.55, marginBottom: "16px" }}>
          <span style={{ fontSize: "clamp(18px, 4vw, 24px)", color: "#1a1a1f", fontWeight: 700 }}>"収益物件の仕組み"を知らないだけで、</span><br />
          数百万〜数千万円<em style={{ fontStyle: "normal", color: "#C9A84C" }}>損</em>しています。
        </h2>

        {/* Book placeholder - using simple colored block since book image not yet available */}
        <div style={{
          width: "clamp(160px, 40vw, 220px)",
          height: "clamp(220px, 55vw, 300px)",
          margin: "0 auto 16px",
          background: "linear-gradient(135deg, #6B4066 0%, #442940 100%)",
          borderRadius: "8px 4px 4px 8px",
          boxShadow: "0 4px 14px rgba(107,64,102,0.3)",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          boxSizing: "border-box",
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#C9A84C", marginBottom: "12px" }}>
            FREE GUIDE
          </div>
          <div style={{ fontSize: "clamp(14px, 3.5vw, 17px)", fontWeight: 700, lineHeight: 1.5, marginBottom: "12px" }}>
            宮城の<br />収益物件<br />攻略ガイド
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,.6)" }}>
            物件選び・交渉・改修・客付け
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", lineHeight: 1.6, marginBottom: "20px" }}>
          物件契約の前に知っておくべきことを<br />元不動産業と大工歴20年のプロがまとめました。
        </p>

        {/* Loss items - compact list */}
        <div style={{
          background: "rgba(196,77,63,0.03)", borderRadius: "12px",
          padding: "12px 14px", marginBottom: "16px",
          border: "1px solid rgba(196,77,63,0.08)",
        }}>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#C44D3F", marginBottom: "8px" }}>
            知らないと、こうなります：
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {losses.map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#C44D3F", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 600, color: "#444", lineHeight: 1.6 }}>{text}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#aaa", marginTop: "8px", textAlign: "center" }}>
            ※ これらは全て、知っていれば防げることです。
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: "#1a1a1f", borderRadius: "14px",
          padding: "20px 20px", textAlign: "center",
        }}>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: "#fff", lineHeight: 1.6, marginBottom: "4px" }}>
            これだけでも、受け取ってください。
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "14px" }}>
            LINE登録で攻略ガイドを無料でお渡ししています。
          </p>
          <button
            onClick={handleClick}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#06C755", color: "#fff", borderRadius: "999px",
              padding: "14px 32px", fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700, border: "none", cursor: "pointer",
              boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            無料ガイドを今すぐ読む
          </button>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "10px" }}>
            1分で完了・営業なし・いつでもブロック可能
          </p>
        </div>
      </div>
    </section>
  );
}
