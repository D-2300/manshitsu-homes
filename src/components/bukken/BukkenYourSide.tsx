export default function BukkenYourSide() {
  return (
    <section style={{ padding: "56px 20px", background: "#F8F5F0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#6B4066",
            marginBottom: "8px",
            textTransform: "uppercase" as const,
          }}
        >
          Your Side
        </p>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(17px, 4.5vw, 19px)",
            fontWeight: 700,
            color: "#2a2a2a",
            marginBottom: "36px",
            lineHeight: 1.7,
          }}
        >
          収益物件選び、
          <span style={{ color: "#6B4066" }}>ひとりで進めようとしていませんか？</span>
        </h2>

        {/* Nudge cards */}
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Card 1: 利回り */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <path d="M12 36L20 28L28 32L36 16" stroke="#6B4066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <circle cx="36" cy="16" r="2.5" fill="#6B4066" opacity="0.7" />
                <circle cx="28" cy="32" r="2" fill="#6B4066" opacity="0.5" />
                <circle cx="20" cy="28" r="2" fill="#6B4066" opacity="0.5" />
                <circle cx="12" cy="36" r="2" fill="#6B4066" opacity="0.5" />
                <text x="36" y="12" textAnchor="middle" fontSize="7" fill="#6B4066" fontWeight="bold" opacity="0.6">%</text>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>その利回り、本当に回りますか？</p>
              <p style={descStyle}>表面利回りだけで選ぶと、修繕・空室で赤字になります。</p>
            </div>
          </div>

          {/* Card 2: 築古物件の見極め */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <rect x="10" y="18" width="28" height="20" rx="2" stroke="#6B4066" strokeWidth="1.5" opacity="0.5" />
                <path d="M8 18L24 8L40 18" stroke="#6B4066" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
                <rect x="14" y="24" width="5" height="5" stroke="#6B4066" strokeWidth="1" opacity="0.4" />
                <rect x="21" y="24" width="5" height="5" stroke="#6B4066" strokeWidth="1" opacity="0.4" />
                <rect x="28" y="24" width="5" height="5" stroke="#6B4066" strokeWidth="1" opacity="0.4" />
                <rect x="21" y="31" width="6" height="7" fill="#6B4066" opacity="0.2" />
                <circle cx="38" cy="14" r="5" fill="#6B4066" opacity="0.1" stroke="#6B4066" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M36 14l1.5 1.5 3-3" stroke="#6B4066" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>築古物件、"直せる"か見極められますか？</p>
              <p style={descStyle}>外見では分からない配管・躯体の劣化が、利回りを食い尽くします。</p>
            </div>
          </div>

          {/* Card 3: 客付け */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <circle cx="17" cy="22" r="6" stroke="#6B4066" strokeWidth="1.5" opacity="0.4" />
                <circle cx="31" cy="22" r="6" stroke="#6B4066" strokeWidth="1.5" opacity="0.4" />
                <path d="M17 28v4a2 2 0 002 2h2" stroke="#6B4066" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <path d="M31 28v4a2 2 0 01-2 2h-2" stroke="#6B4066" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <path d="M22 33h4" stroke="#6B4066" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <circle cx="17" cy="20" r="1" fill="#6B4066" opacity="0.4" />
                <circle cx="31" cy="20" r="1" fill="#6B4066" opacity="0.4" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>買ったあとの客付け、考えていますか？</p>
              <p style={descStyle}>不動産屋は物件売主の味方。買主＆大家側に立つ人が必要です。</p>
            </div>
          </div>
        </div>

        {/* Bridge box */}
        <div
          style={{
            maxWidth: "500px",
            margin: "32px auto 0",
            textAlign: "center",
            padding: "24px 20px",
            background: "linear-gradient(135deg, #F0E6ED 0%, #f5eef3 100%)",
            border: "1px solid #d8c8d4",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(15px, 3.5vw, 16px)",
              fontWeight: 700,
              color: "#2a2a2a",
              lineHeight: 1.8,
              marginBottom: "8px",
            }}
          >
            物件を<span style={{ color: "#6B4066" }}>つくる側</span>だから、
            <br />
            「この物件で利回りが出るか」から一緒に考えられます。
          </p>

          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.7,
              color: "#666",
              marginTop: "16px",
            }}
          >
            改修設計は物件が決まってから始まるのではなく、
            <br />
            物件を選ぶ時点からもう始まっています。
          </p>
          <span
            style={{
              display: "inline-block",
              marginTop: "10px",
              fontSize: "11px",
              color: "#6B4066",
              padding: "4px 14px",
              border: "1px solid #6B4066",
              borderRadius: "20px",
            }}
          >
            物件のご相談は無料です
          </span>
        </div>

        {/* Text link CTA → STEPS */}
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          <a
            href="#bukken-steps"
            style={{
              color: "#6B4066",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            ↓ まずは物件情報を受け取ってみる
          </a>
        </p>
      </div>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "18px 20px",
  background: "#fff",
  border: "1px solid #e0ddd5",
  borderRadius: "14px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

const illustStyle: React.CSSProperties = {
  flexShrink: 0,
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  background: "#F0E6ED",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const headingStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#2a2a2a",
  marginBottom: "4px",
};

const descStyle: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.6,
  color: "#666",
};
