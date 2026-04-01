import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const services = [
  { icon: "📋", name: "現場確認", detail: "退去当日OK" },
  { icon: "🖌️", name: "クロス", detail: "壁・天井" },
  { icon: "🪵", name: "床", detail: "CF・フロアタイル" },
  { icon: "🔧", name: "補修", detail: "建具・壁穴" },
  { icon: "💡", name: "設備", detail: "照明・水栓" },
  { icon: "✨", name: "清掃", detail: "全室クリーニング" },
];

export default function MOneStop() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="ONE-STOP" heading={"クロスからクリーニングまで。\n全部、一社で完結します。"} />

        <p
          style={{
            margin: "0 0 24px",
            textAlign: "center",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            color: C.textMid,
            lineHeight: 1.85,
          }}
        >
          職人を別々に手配する必要はありません。店舗内装で培った総合的な施工管理力で、すべてを一括対応します。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          {services.map((s) => (
            <div
              key={s.name}
              style={{
                padding: "18px 12px",
                textAlign: "center",
                border: `1px solid rgba(107,64,102,0.1)`,
                borderRadius: "4px",
                backgroundColor: M.bg,
              }}
            >
              <p style={{ margin: "0 0 6px", fontSize: "22px", lineHeight: 1 }}>{s.icon}</p>
              <p style={{ margin: "0 0 3px", fontSize: "clamp(12px, 3vw, 14px)", fontWeight: 600, color: M.dark }}>{s.name}</p>
              <p style={{ margin: 0, fontSize: "11px", color: M.mid, letterSpacing: "0.03em" }}>{s.detail}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: M.bg,
            border: `1px solid rgba(107,64,102,0.1)`,
            borderRadius: "4px",
            padding: "16px 20px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "clamp(12px, 3.2vw, 13px)",
              color: C.textMid,
              lineHeight: 1.85,
              textAlign: "center",
            }}
          >
            完了後は写真付きの報告書をLINEでお送りします。<br />
            現場に来られないオーナー様も安心です。
          </p>
        </div>
      </div>
    </section>
  );
}
