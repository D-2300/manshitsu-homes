import { useState } from "react";
import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import { M, C, LINE_URL } from "../tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const rows = [
  { label: "クロス張替え（量産品）めくり・下地処理・処分込み", price: "900円/㎡〜" },
  { label: "アクセントクロス（1面）デザイン提案込み", price: "15,000円〜" },
  { label: "CF張替え", price: "2,800円/㎡〜" },
  { label: "フロアタイル", price: "3,500円/㎡〜" },
  { label: "壁穴・キズ補修（リペア）", price: "8,000円/箇所〜" },
  { label: "畳表替え", price: "2,800円/畳〜" },
  { label: "ハウスクリーニング（1R〜1K）", price: "21,000円〜" },
  { label: "ハウスクリーニング（1LDK〜2DK）", price: "33,000円〜" },
];

const steps = [
  { num: "0", title: "LINE相談（無料）", desc: "物件の状況や悩みをLINEで教えてください。写真を送るだけでもOK。" },
  { num: "1", title: "現場確認（無料）", desc: "宮城県内であれば現場を見に行きます。改修ポイントと概算をその場でお伝えします。" },
  { num: "2", title: "見積書提出", desc: "平米数・単価・材料名を記載した明朗な見積書をお出しします。" },
  { num: "3", title: "施工", desc: "最短1日〜。入居者に迷惑をかけない段取りで進めます。" },
  { num: "4", title: "完了・お引渡し", desc: "施工写真をLINEで共有。遠方オーナーもご安心ください。" },
];

const faqs = [
  { q: "物件が決まっていなくても相談できる？", a: "もちろんです。物件探しの段階からサポートしています。非公開の物件情報もLINEでお届けしています。" },
  { q: "相見積もりでも大丈夫？", a: "歓迎します。管理会社の見積書と比較していただくことで、適正価格が分かります。" },
  { q: "見積もり後に断ってもいい？", a: "もちろんです。断りはLINE1本で完了です。" },
  { q: "入居後リフォームって何？", a: "入居者が決まってから、入居者自身が壁紙の色を選んで施工する仕組み。大家さんの空室リスクゼロ。入居者の満足度が高く、長期入居につながります。" },
  { q: "バーチャルステージングは本当に無料？", a: "はい。AIで空室写真から完成イメージを生成するため、コストがほぼかかりません。改修工事をご依頼いただければ無料で提供しています。" },
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <ManshitsuNav />
      <SmallHero title="Pricing" subtitle="料金の考え方" />

      {/* Philosophy */}
      <section style={{ padding: "56px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: C.textDark, marginBottom: "16px", lineHeight: 1.7 }}>
            「一式◯万円」は、ありません。
          </h2>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: C.textMid, lineHeight: 1.9 }}>
            平米数・単価・材料名をすべて記載した見積書をお出しします。<br />
            何にいくら払っているかが分かれば、大家さんは自分で判断できる。<br />
            それが、私たちの考える「明朗会計」です。
          </p>
        </div>
      </section>

      {/* Price table */}
      <section style={{ padding: "48px 20px", background: C.warmWhite }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ borderRadius: "10px", overflow: "hidden", border: `1px solid rgba(192,154,181,.2)`, background: "#fff", marginBottom: "16px" }}>
            <div style={{ background: M.main, padding: "10px 16px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,.7)" }}>施工内容</span>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,.7)" }}>単価（税別）</span>
            </div>
            {rows.map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", gap: "12px", borderBottom: i < rows.length - 1 ? "1px solid rgba(192,154,181,.1)" : "none", background: i % 2 === 0 ? "#fff" : "rgba(240,230,237,.2)" }}>
                <span style={{ fontSize: "12px", color: C.textDark, lineHeight: 1.6, flex: 1 }}>{row.label}</span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: M.dark, whiteSpace: "nowrap", flexShrink: 0 }}>{row.price}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: C.warmGray, lineHeight: 1.7 }}>
            ※最低発注金額 35,000円（税別）〜　※使用材料はサンゲツ・リリカラ等のJIS規格品。F☆☆☆☆対応。
          </p>
        </div>
      </section>

      {/* Flow */}
      <section style={{ padding: "56px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: M.mid, marginBottom: "10px" }}>FLOW</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: C.textDark, marginBottom: "36px", lineHeight: 1.7 }}>
            ご依頼の流れ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: step.num === "0" ? C.gold : M.main, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700 }}>
                    {step.num}
                  </div>
                  {i < steps.length - 1 && <div style={{ width: "2px", height: "40px", background: M.light }} />}
                </div>
                <div style={{ paddingBottom: i < steps.length - 1 ? "16px" : 0 }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: C.textDark, marginBottom: "4px", marginTop: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "13px", color: C.textMid, lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "56px 24px", background: "#f9f8f6" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: M.mid, marginBottom: "10px" }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: C.textDark, marginBottom: "36px", lineHeight: 1.7 }}>
            よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} style={{ background: "#fff", borderRadius: "10px", border: "1px solid #e8e5de", overflow: "hidden" }}>
                  <button onClick={() => setOpenIndex(isOpen ? null : i)} style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", textAlign: "left" }}>
                    <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: M.main, lineHeight: 1.5 }}>{faq.q}</span>
                    <span style={{ fontSize: "18px", color: M.light, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? "200px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    <p style={{ padding: "0 20px 16px", fontSize: "clamp(13px, 2.5vw, 15px)", color: C.textMid, lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", background: M.dark, textAlign: "center" }}>
        <p style={{ fontSize: "clamp(16px, 3.5vw, 20px)", fontWeight: 700, color: "#fff", marginBottom: "16px", lineHeight: 1.7 }}>
          まずは管理会社の見積書を<br />LINEで送ってみてください。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: C.lineGreen,
            color: "#fff",
            borderRadius: "999px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(6,199,85,.3)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          LINEで見積もり相談
        </a>
      </section>

      <ManshitsuFooter />
    </div>
  );
}
