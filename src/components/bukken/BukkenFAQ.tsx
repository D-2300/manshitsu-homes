const faqs = [
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
    a: "いいえ。内装工事のチームです。仲介手数料は発生しません。",
  },
  {
    q: "対応エリアは？",
    a: "宮城県全域に対応しています。福島・山形・岩手の近県もご相談ください。",
  },
  {
    q: "どんな物件を紹介してもらえる？",
    a: "アパート1棟物件が中心です。区分マンション、戸建ての収益化相談も可能。利回り10%以上の築古物件が多めですが、築浅・新築の情報もあります。",
  },
  {
    q: "売却したい物件があるんだけど相談できる？",
    a: "宅建業はしていないので仲介はできませんが、買い手情報は一応持っているので、ご相談はいただけます。",
  },
];

export default function BukkenFAQ() {
  return (
    <section style={{ padding: "64px 24px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#222", textAlign: "center", marginBottom: "40px", lineHeight: 1.7 }}>
          よくある質問
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#6B4066", marginBottom: "6px" }}>
                {faq.q}
              </p>
              <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#666", lineHeight: 1.85 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
