import { M, C } from "../../tokens";

export default function HPWhatWeDo() {
  return (
    <section style={{ padding: "64px 20px", background: C.warmWhite }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: M.mid,
            marginBottom: "10px",
            textTransform: "uppercase" as const,
          }}
        >
          What We Do
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 5vw, 32px)",
            fontWeight: 700,
            color: C.textDark,
            lineHeight: 1.6,
            marginBottom: "16px",
          }}
        >
          宮城のアパート投資 × 内装改修
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.9,
            marginBottom: "8px",
          }}
        >
          非公開のアパート投資物件情報と、<br />
          利回りを最大化する内装改修を提供しています。
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.9,
            marginBottom: "32px",
          }}
        >
          入居後リフォーム・バーチャルステージング・改修診断を組み合わせて、<br />
          ボロ物件を儲かる物件に変えます。
        </p>

        {/* Price badges */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <div
            style={{
              padding: "14px 28px",
              border: `1px solid ${M.light}`,
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <span style={{ fontSize: "13px", color: C.textMid }}>改修費</span>{" "}
            <span style={{ fontSize: "18px", fontWeight: 700, color: M.main }}>8.8万円〜</span>
          </div>
          <div
            style={{
              padding: "14px 28px",
              border: `1px solid ${M.light}`,
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <span style={{ fontSize: "13px", color: C.textMid }}>バーチャルステージング</span>{" "}
            <span style={{ fontSize: "18px", fontWeight: 700, color: C.gold }}>¥0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
