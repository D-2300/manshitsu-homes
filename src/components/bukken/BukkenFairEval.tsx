function CompareCol({
  type,
  label,
  headline,
  items,
}: {
  type: "general" | "manshitsu";
  label: string;
  headline: React.ReactNode;
  items: string[];
}) {
  const isM = type === "manshitsu";
  return (
    <div
      style={{
        borderRadius: "14px",
        padding: "18px 14px 16px",
        background: isM ? "#1a1a1f" : "#fff",
        border: isM ? "1px solid #442940" : "1px solid #e5e5e5",
        color: isM ? "#fff" : "#333",
        position: "relative",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textAlign: "center",
          marginBottom: "10px",
          color: isM ? "#C9A84C" : "#999",
        }}
      >
        {label}
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "clamp(14px, 3vw, 16px)",
          fontWeight: 700,
          lineHeight: 1.5,
          marginBottom: "14px",
          color: isM ? "#fff" : "#555",
          paddingBottom: "12px",
          borderBottom: isM ? "1px solid rgba(201,168,76,0.25)" : "1px solid #eee",
        }}
      >
        {headline}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((t, i) => (
          <li
            key={i}
            style={{
              fontSize: "clamp(12px, 2.5vw, 14px)",
              lineHeight: 1.55,
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              color: isM ? "rgba(255,255,255,0.88)" : "#777",
            }}
          >
            <span style={{ flexShrink: 0, color: isM ? "#C9A84C" : "#ccc", fontWeight: 900, marginTop: "1px" }}>
              {isM ? "◆" : "×"}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BukkenFairEval() {
  return (
    <section style={{ padding: "56px 20px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Header */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#C9A84C",
            marginBottom: "10px",
          }}
        >
          WHY FAIR
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: "#1a1a1f",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.55,
          }}
        >
          なぜ満室デザインLABOは<br />
          フラットに物件を評価できるのか
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#888",
            marginBottom: "28px",
            lineHeight: 1.6,
          }}
        >
          物件紹介で利益を得ないから、あなたの味方でいられます。
        </p>

        {/* VS Comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "18px",
            position: "relative",
          }}
        >
          <CompareCol
            type="general"
            label="一般的な不動産仲介"
            headline={<>仲介手数料で<br />利益を得る</>}
            items={[
              "手数料の高い物件を優先しがち",
              "成約しないと収益にならない",
              "改修は別業者を探す必要あり",
            ]}
          />
          <CompareCol
            type="manshitsu"
            label="満室の場合"
            headline={<>物件紹介では<br />一切利益を得ない</>}
            items={[
              "どの物件もフラットに評価",
              "合わない物件は勧めない",
              "物件探し〜改修〜客付けまで一貫",
            ]}
          />
          {/* VS badge */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #e5e5e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 900,
              color: "#999",
              letterSpacing: "0.05em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              zIndex: 2,
            }}
          >
            VS
          </div>
        </div>

        {/* Revenue model - single line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            padding: "14px 12px",
            background: "#fff",
            border: "1px solid #e8e6e0",
            borderRadius: "12px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#C9A84C" }}>
            収益モデル
          </span>
          <span style={{ color: "#ddd" }}>|</span>
          <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#1a1a1f" }}>
            物件探し <span style={{ color: "#999", fontWeight: 900 }}>¥0</span>
          </span>
          <span style={{ fontSize: "12px", color: "#ccc" }}>→</span>
          <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#442940" }}>
            内装改修が本業
          </span>
        </div>

        {/* Footnote */}
        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", lineHeight: 1.7 }}>
          ※ 物件情報のご紹介・ご相談は無料です。契約を急かすことは一切ありません。
        </p>
      </div>
    </section>
  );
}
