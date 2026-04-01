import { useState } from "react";
import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const faqs = [
  {
    q: "管理会社に知られませんか？関係が悪くならないか心配です。",
    a: "当社は裏方に徹します。完了報告書は管理会社様がそのまま使えるクオリティで作成しますので、むしろ「対応が早い」と評価されるケースがほとんどです。",
  },
  {
    q: "店舗内装の会社なのに、賃貸の原状回復もできるんですか？",
    a: "クロス張替え、CF施工、設備工事、クリーニングは店舗でも住宅でも基本技術は同じです。むしろ店舗の方が要求水準が高いため、住宅の施工は確実にこなせます。",
  },
  {
    q: "安い業者に頼んで仕上がりが悪かった経験があります。品質は大丈夫ですか？",
    a: "店舗内装は「開店日に間に合わない＝損害賠償」の世界です。その現場で求められてきた品質基準と納期管理をそのまま住宅に持ち込んでいます。",
  },
  {
    q: "入居者との敷金精算のサポートはしてもらえますか？",
    a: "施工箇所の写真記録と明細見積もりは、管理会社様への説明資料としてそのままお使いいただけます。ガイドラインに基づいた経年劣化の判断もお手伝いします。",
  },
  {
    q: "施工後に不具合があった場合は？",
    a: "仙台エリア密着の自社施工ですので、万が一の不具合には即日対応いたします。",
  },
];

export default function MFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: C.warmWhite, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="FAQ" heading={"よくあるご質問"} />

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid #E8E3DC" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "18px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: M.main, fontWeight: 700, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>Q</span>
                  <span style={{ fontSize: "clamp(13px, 3.5vw, 15px)", fontWeight: 500, color: C.textDark, lineHeight: 1.7 }}>
                    {faq.q}
                  </span>
                </div>
                <span
                  style={{
                    color: M.mid,
                    fontSize: "20px",
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    display: "inline-block",
                    marginTop: "1px",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 0 18px 26px", display: "flex", gap: "12px" }}>
                  <span style={{ color: M.light, fontWeight: 700, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>A</span>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.85 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #E8E3DC" }} />
        </div>
      </div>
    </section>
  );
}
