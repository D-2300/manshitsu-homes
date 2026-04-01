import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const comparisonRows = [
  { label: "クロス張替え（壁+天井）", kanri: "62,400円", manshitsu: "46,800円" },
  { label: "CF張替え（14㎡）",         kanri: "56,000円", manshitsu: "39,200円" },
  { label: "ハウスクリーニング",         kanri: "30,000円", manshitsu: "21,000円" },
];

export default function MAgitate() {
  return (
    <section style={{ backgroundColor: C.warmWhite, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="STRUCTURE" heading={"管理会社経由だと、\nなぜ高くなるのか。"} />

        <p
          style={{
            margin: "0 0 28px",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            color: C.textMid,
            lineHeight: 1.85,
            textAlign: "center",
          }}
        >
          管理会社が悪いわけではありません。ただ、構造的に中間コストが発生する仕組みになっています。
        </p>

        <div style={{ marginBottom: "28px" }}>
          <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 500, color: C.accentRed, letterSpacing: "0.05em" }}>
            管理会社経由のルート
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "16px",
            }}
          >
            {[
              "オーナー様",
              "管理会社 +15〜20%",
              "元請け業者 +10〜15%",
              "施工職人",
            ].map((node, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    padding: "7px 12px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(196,77,63,0.08)",
                    border: "1px solid rgba(196,77,63,0.15)",
                    color: i === 0 ? C.textDark : C.accentRed,
                    fontSize: "clamp(11px, 2.8vw, 13px)",
                    fontWeight: i === 0 ? 400 : 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {node}
                </div>
                {i < arr.length - 1 && (
                  <span style={{ color: C.accentRed, fontSize: "16px", opacity: 0.5 }}>→</span>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: M.light,
              margin: "4px 0 12px",
            }}
          >
            ▼
          </div>

          <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 500, color: M.main, letterSpacing: "0.05em" }}>
            満室デザインLABOに直接のルート
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            {["オーナー様", "満室デザインLABO（自社施工）"].map((node, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    padding: "7px 12px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(107,64,102,0.08)",
                    border: "1px solid rgba(107,64,102,0.2)",
                    color: i === 0 ? C.textDark : M.main,
                    fontSize: "clamp(11px, 2.8vw, 13px)",
                    fontWeight: i === 0 ? 400 : 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {node}
                </div>
                {i < arr.length - 1 && (
                  <span style={{ color: M.mid, fontSize: "16px", opacity: 0.6 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(12px, 3vw, 14px)" }}>
            <thead>
              <tr>
                <th style={{ padding: "10px 12px", textAlign: "left", borderBottom: `2px solid ${M.light}`, color: C.textMid, fontWeight: 500, fontSize: "11px", letterSpacing: "0.04em" }}>
                  1K（52㎡）全面の場合
                </th>
                <th style={{ padding: "10px 12px", textAlign: "right", borderBottom: `2px solid ${M.light}`, color: C.textMid, fontWeight: 500, fontSize: "11px" }}>
                  管理会社経由
                </th>
                <th style={{ padding: "10px 12px", textAlign: "right", borderBottom: `2px solid ${M.main}`, backgroundColor: "rgba(107,64,102,0.03)", color: M.dark, fontWeight: 600, fontSize: "11px" }}>
                  満室デザインLABO
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #EDE9E4" }}>
                  <td style={{ padding: "10px 12px", color: C.textDark }}>{row.label}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: C.textMid }}>{row.kanri}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", backgroundColor: "rgba(107,64,102,0.03)", color: M.dark, fontWeight: 500 }}>{row.manshitsu}</td>
                </tr>
              ))}
              <tr>
                <td style={{ padding: "10px 12px", fontWeight: 700, color: C.textDark }}>合計</td>
                <td style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: C.accentRed }}>148,400円</td>
                <td style={{ padding: "10px 12px", textAlign: "right", backgroundColor: "rgba(107,64,102,0.03)", fontWeight: 700, color: M.dark }}>107,000円</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            backgroundColor: M.dark,
            borderRadius: "4px",
            padding: "20px 24px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em" }}>
            1回の退去で浮く金額
          </p>
          <p style={{ margin: "0 0 4px" }}>
            <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(26px, 6vw, 32px)", color: C.gold, fontWeight: 600 }}>
              約 41,400円
            </span>
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            年3回退去があれば、年間で約12万円のコスト削減
          </p>
        </div>

        <div
          style={{
            borderLeft: `3px solid ${C.accentRed}`,
            backgroundColor: "rgba(196,77,63,0.04)",
            padding: "14px 16px",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "clamp(12px, 3vw, 13px)",
              color: C.textDark,
              lineHeight: 1.85,
            }}
          >
            <strong>知っていますか？</strong> 国土交通省のガイドラインにより、入居者が6年以上住んだ場合、クロスやCFの張替え費用は<strong>ほぼ100%が大家負担</strong>になります。だからこそ、1回あたりの施工単価が経営を左右します。
          </p>
        </div>
      </div>
    </section>
  );
}
