import { M, C } from "../../tokens";

export default function V3HPWhyUs() {
  return (
    <section style={{ padding: "56px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: M.mid,
            marginBottom: "10px",
          }}
        >
          WHY US
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "16px",
            lineHeight: 1.7,
          }}
        >
          なぜ「内装会社」がこれをやるのか。
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: C.textMid,
            lineHeight: 1.8,
            marginBottom: "36px",
          }}
        >
          「入居後リフォーム」は、3つの力が揃わないと成立しません。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* KEN */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "20px",
              background: C.warmWhite,
              borderRadius: "14px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: M.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🔨
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: C.textDark, marginBottom: "4px" }}>
                施工力（KEN・大工歴20年）
              </p>
              <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.7 }}>
                入居者が決めてから最短2日で施工完了。年間30件以上の店舗内装で培った速度と品質。
              </p>
            </div>
          </div>

          {/* Connector */}
          <div style={{ textAlign: "center", fontSize: "16px", color: M.light }}>×</div>

          {/* KAI */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "20px",
              background: C.warmWhite,
              borderRadius: "14px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: M.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🏠
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: C.textDark, marginBottom: "4px" }}>
                不動産知識（KAI・元不動産業）
              </p>
              <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.7 }}>
                物件の目利き、利回り計算、交渉。不動産業者時代の人脈で非公開物件情報が入る。
              </p>
            </div>
          </div>

          {/* Connector */}
          <div style={{ textAlign: "center", fontSize: "16px", color: M.light }}>×</div>

          {/* AI */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "20px",
              background: C.warmWhite,
              borderRadius: "14px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: M.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🤖
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: C.textDark, marginBottom: "4px" }}>
                AI（バーチャルステージング）
              </p>
              <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.7 }}>
                空室写真からAIが完成イメージを生成。広告費0円でSNS・ジモティから入居者を集客。
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "32px",
            padding: "24px",
            background: `linear-gradient(135deg, ${M.dark} 0%, ${M.main} 100%)`,
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              fontWeight: 700,
              color: C.gold,
              lineHeight: 1.7,
              marginBottom: "8px",
            }}
          >
            この3つが揃っている会社は、他にありません。
          </p>
          <p
            style={{
              fontSize: "clamp(13px, 2.5vw, 15px)",
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.7,
            }}
          >
            だから「内装会社」がアパート投資の入口をやっています。
          </p>
        </div>
      </div>
    </section>
  );
}
