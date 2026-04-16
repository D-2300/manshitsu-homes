import { LINE_URL } from "../../tokens";

const lineSvgPath = "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const inputStyle: React.CSSProperties = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: "15px",
  color: "#333",
  padding: "12px 14px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "#fff",
  width: "100%",
  boxSizing: "border-box",
};

export default function BukkenMailForm() {
  return (
    <section style={{ padding: "64px 24px", background: "#f9f8f6" }}>
      <style>{`
        .b-mail-input:focus { outline: none; border-color: #6B4066; }
      `}</style>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <span style={{ display: "block", textAlign: "center", fontSize: "12px", fontWeight: 500, letterSpacing: ".15em", color: "#6B4066", marginBottom: "10px" }}>
          CONTACT
        </span>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#222", textAlign: "center", marginBottom: "40px", lineHeight: 1.7 }}>
          メールでのお問い合わせ
        </h2>
        <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#888", textAlign: "center", lineHeight: 1.8, marginBottom: "28px" }}>
          LINEをお使いでない方は、<br />こちらからお気軽にご連絡ください。
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={{ maxWidth: "420px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: "none" }}>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>

          <label style={{ fontSize: "12px", fontWeight: 500, color: "#555", display: "flex", flexDirection: "column", gap: "6px" }}>
            お名前
            <input type="text" name="name" placeholder="山田 太郎" required className="b-mail-input" style={inputStyle} />
          </label>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#555", display: "flex", flexDirection: "column", gap: "6px" }}>
            メールアドレス
            <input type="email" name="contact" placeholder="example@email.com" required className="b-mail-input" style={inputStyle} />
          </label>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#555", display: "flex", flexDirection: "column", gap: "6px" }}>
            希望エリア・予算・物件タイプなど
            <textarea
              name="message"
              placeholder="例）宮城県内で利回り12%以上のアパート1棟を検討中。予算1,000万円以内。"
              className="b-mail-input"
              style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
            />
          </label>
          <button
            type="submit"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              background: "#6B4066",
              border: "none",
              borderRadius: "999px",
              padding: "14px 24px",
              cursor: "pointer",
              letterSpacing: ".03em",
            }}
          >
            メールで問い合わせる
          </button>
          <p style={{ fontSize: "13px", color: "#bbb", textAlign: "center", marginTop: "4px" }}>
            無料・営業なし・24時間以内に返信します
          </p>
        </form>

        {/* Or divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px auto 8px", maxWidth: "420px" }}>
          <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
          <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap" }}>LINEでもOK</span>
          <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
        </div>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: ".03em",
              boxShadow: "0 4px 16px rgba(6,199,85,.2)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで受け取る
          </a>
        </div>
      </div>
    </section>
  );
}
