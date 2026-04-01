import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const steps = [
  {
    n: "1",
    title: "LINEまたはお電話でご連絡",
    body: "管理会社の見積書の写真、または物件の状況を送るだけでOK。まだ見積もりがなくても大丈夫です。",
    tag: "無料",
    tagColor: C.accentGreen,
    tag2: null as string | null,
    tag2Color: "",
  },
  {
    n: "2",
    title: "現場確認・即日見積もり",
    body: "退去当日の現場確認も可能。当日中に写真付きの明細見積書をLINEでお送りします。",
    tag: "最短当日",
    tagColor: M.main,
    tag2: "無料",
    tag2Color: C.accentGreen,
  },
  {
    n: "3",
    title: "施工（最短3日〜）",
    body: "店舗施工で鍛えた段取りで、スピーディーに仕上げます。空室期間を1日でも短くします。",
    tag: "最短3日〜",
    tagColor: M.mid,
    tag2: null as string | null,
    tag2Color: "",
  },
  {
    n: "4",
    title: "完了報告・お引き渡し",
    body: "写真付き完了報告書をLINEでお送り。物件ポータルの掲載写真としてもそのままご利用いただけます。",
    tag: null,
    tagColor: "",
    tag2: null as string | null,
    tag2Color: "",
  },
];

export default function MFlow() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="FLOW" heading={"見積書の写真を送るだけ。"} />

        <div style={{ position: "relative", paddingLeft: "24px" }}>
          <div
            style={{
              position: "absolute",
              left: "14px",
              top: "16px",
              bottom: "16px",
              width: "1px",
              backgroundColor: C.gold,
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {steps.map((step) => (
              <div key={step.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: `2px solid ${C.gold}`,
                      color: C.gold,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      backgroundColor: C.white,
                      fontFamily: "'Noto Serif JP', serif",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <div style={{ paddingTop: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px", flexWrap: "wrap" }}>
                    <p style={{ margin: 0, fontSize: "clamp(14px, 3.5vw, 15px)", fontWeight: 600, color: C.textDark }}>
                      {step.title}
                    </p>
                    {step.tag && (
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: C.white,
                          backgroundColor: step.tagColor,
                          borderRadius: "2px",
                          padding: "2px 7px",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {step.tag}
                      </span>
                    )}
                    {step.tag2 && (
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: C.white,
                          backgroundColor: step.tag2Color,
                          borderRadius: "2px",
                          padding: "2px 7px",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {step.tag2}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.8 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
