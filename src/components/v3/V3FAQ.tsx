import { useState } from "react";
import { M, C } from "../../tokens";

const lpFaqs = [
  {
    q: "なんで無料なの？",
    a: "私たちの本業は内装工事です。物件が決まった後に改修を頼んでいただければ、それが仕事になります。物件探しの段階では費用をいただいていません。",
  },
  {
    q: "物件情報だけもらって、改修は別に頼んでもいい？",
    a: "もちろんです。条件はありません。",
  },
  {
    q: "不動産の仲介業者なの？",
    a: "いいえ。内装工事のチームです。仲介手数料は発生しません。元不動産業のKAIの人脈で物件情報が入ります。",
  },
  {
    q: "宮城県以外の物件も対応できる？",
    a: "物件情報のご紹介は宮城県内に限定しています。改修工事も宮城県内が対象です。",
  },
  {
    q: "「入居後リフォーム」って何？",
    a: "入居者が決まってから、入居者自身が壁紙の色を選んで施工する仕組みです。大家さんは空室リスクゼロで改修でき、入居者は「自分の部屋」意識が生まれるので長期入居につながります。",
  },
];

const hpFaqs = [
  ...lpFaqs,
  {
    q: "バーチャルステージングって何？",
    a: "AIを使って、空室写真に家具や内装の完成イメージを合成する技術です。ジモティやSNSに掲載すれば、広告費0円で入居希望者を集められます。CG表記が必要ですが、SUUMO・Athome等のポータルサイトにも掲載可能です。",
  },
  {
    q: "築何年くらいの物件が対象？",
    a: "築15年以上の物件で最も効果を発揮します。築30年以上のボロ物件でも、適切な改修で利回りを大きく改善した実績があります。",
  },
];

export default function V3FAQ({ variant = "lp" }: { variant?: "lp" | "hp" }) {
  const faqs = variant === "hp" ? hpFaqs : lpFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "56px 24px", background: "#f9f8f6" }}>
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
          FAQ
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            textAlign: "center",
            marginBottom: "36px",
            lineHeight: 1.7,
          }}
        >
          よくある質問
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  border: "1px solid #e8e5de",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(14px, 3vw, 16px)",
                      fontWeight: 700,
                      color: M.main,
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: M.light,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 20px 16px",
                      fontSize: "clamp(13px, 2.5vw, 15px)",
                      color: C.textMid,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
