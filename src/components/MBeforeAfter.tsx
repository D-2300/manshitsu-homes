import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const cases = [
  {
    type: "1K・築18年アパート",
    cost: "施工費 ¥105,000",
    beforeSrc: "/images/m-before-3-sm.webp",
    afterSrc: "/images/m-after-green-sm.webp",
  },
  {
    type: "ワンルーム・築22年マンション",
    cost: "施工費 ¥88,000",
    beforeSrc: "/images/m-before-1-sm.webp",
    afterSrc: "/images/m-after-pendant-sm.webp",
  },
];

export default function MBeforeAfter() {
  return (
    <section style={{ backgroundColor: M.dark, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader
          label="BEFORE / AFTER"
          heading={"管理会社と同じ予算で、\nここまで変わります。"}
          headingColor={C.white}
          labelColor={C.goldLight}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "16px" }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <div style={{ display: "flex", minHeight: "140px" }}>
                {/* Before */}
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img
                    src={c.beforeSrc}
                    alt={`${c.type} 退去直後`}
                    width="480"
                    height="361"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.85)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      backgroundColor: "rgba(0,0,0,0.65)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    BEFORE
                  </span>
                </div>
                <div style={{ width: "2px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                {/* After */}
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img
                    src={c.afterSrc}
                    alt={`${c.type} 施工後`}
                    width="480"
                    height="361"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      backgroundColor: C.gold,
                      color: M.dark,
                    }}
                  >
                    AFTER
                  </span>
                </div>
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
                  {c.type}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: C.gold }}>
                  {c.cost}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          ※施工事例はイメージです。初回のお客様には特別価格でご対応します。
        </p>
      </div>
    </section>
  );
}
