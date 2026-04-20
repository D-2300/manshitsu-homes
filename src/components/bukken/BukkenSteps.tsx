export default function BukkenSteps() {
  return (
    <section id="bukken-steps" style={{ padding: "44px 20px 40px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          STEPS
        </p>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1a1f", textAlign: "center", marginBottom: "8px", lineHeight: 1.55 }}>
          物件情報を受け取るまでの<span style={{ color: "#06C755" }}>かんたん3ステップ</span>
        </h2>
        <p style={{ textAlign: "center", fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: "#06C755", marginBottom: "20px" }}>
          収益物件 攻略ガイド プレゼント中！
        </p>

        {/* Visual flow infographic - LINE green background band */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginBottom: "28px",
            padding: "20px 12px",
            background: "#06C755",
            borderRadius: "16px",
          }}
        >
          {[
            { emoji: "📱", label: "LINE追加", time: "10秒", highlight: true },
            { emoji: "✍️", label: "希望を伝える", time: "2分", highlight: false },
            { emoji: "🏠", label: "収益物件GET", time: "数日〜", highlight: false },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <div style={{ padding: "0 clamp(4px, 1.5vw, 12px)", marginBottom: "16px" }}>
                  <svg viewBox="0 0 24 12" style={{ width: "clamp(18px, 4vw, 28px)", height: "auto" }}>
                    <path d="M0 6h20m0 0l-5-4m5 4l-5 4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(72px, 18vw, 110px)",
                    height: "clamp(72px, 18vw, 110px)",
                    borderRadius: "14px",
                    margin: "0 auto 8px",
                    background: step.highlight ? "rgba(255,255,255,.25)" : "rgba(255,255,255,.15)",
                    border: step.highlight ? "2.5px solid #fff" : "2px solid rgba(255,255,255,.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(32px, 8vw, 44px)",
                  }}
                >
                  {step.emoji}
                </div>
                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, color: "#fff", display: "block" }}>{step.label}</span>
                <span style={{ fontSize: "clamp(9px, 1.6vw, 10px)", color: "rgba(255,255,255,0.6)", display: "block", marginTop: "2px" }}>{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges + message combined */}
        <div style={{
          background: "#faf5f8", border: "1px solid #e8d4e0", borderRadius: "12px",
          padding: "14px 16px", textAlign: "center", marginBottom: "20px",
        }}>
          <p style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: "#442940", marginBottom: "8px" }}>
            💬「なんとなく聞いてみようかな」で大丈夫。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {["🔒 匿名OK", "💰 無料", "🚫 営業なし", "⏰ あなたのペース"].map((t) => (
              <span key={t} style={{
                fontSize: "12px", fontWeight: 600, color: "#555",
                background: "#fff", borderRadius: "999px", padding: "4px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
