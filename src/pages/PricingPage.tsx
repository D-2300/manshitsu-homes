import { useState } from "react";
import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";
import { SectionHeading, ScrollFadeIn, LineCTAButton } from "../shared";
import { M, C, typography, spacing, radius } from "../tokens";

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
    <div style={{ fontFamily: typography.fontFamily, color: C.textDark }}>
      <ManshitsuNav />
      <SmallHero title="Pricing" subtitle="料金の考え方" />

      {/* ───────── Philosophy ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: "#fff" }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto", textAlign: "center" }}>
          <ScrollFadeIn>
            <SectionHeading en="PRICING POLICY" ja="明朗会計のかたち" />
            <h2
              style={{
                fontSize: typography.h2.size,
                fontWeight: typography.h2.weight,
                color: C.textDark,
                marginBottom: 20,
                lineHeight: typography.h2.lineHeight,
              }}
            >
              「一式◯万円」は、ありません。
            </h2>
            <p style={{ fontSize: typography.bodyLarge.size, color: C.textMid, lineHeight: typography.bodyLarge.lineHeight }}>
              平米数・単価・材料名をすべて記載した見積書をお出しします。<br />
              何にいくら払っているかが分かれば、大家さんは自分で判断できる。<br />
              それが、私たちの考える「明朗会計」です。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ───────── Price table ───────── */}
      <section style={{ padding: `${spacing.section.sm} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="PRICE LIST" ja="主要項目の単価" />
            <div
              style={{
                borderRadius: radius.md,
                overflow: "hidden",
                border: `1px solid ${M.light}33`,
                background: "#fff",
                marginBottom: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  background: M.main,
                  padding: "12px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.85)", letterSpacing: "0.05em" }}>施工内容</span>
                <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.85)", letterSpacing: "0.05em" }}>単価（税別）</span>
              </div>
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 18px",
                    gap: 12,
                    borderBottom: i < rows.length - 1 ? `1px solid ${M.light}1a` : "none",
                    background: i % 2 === 0 ? "#fff" : "rgba(240,230,237,.25)",
                  }}
                >
                  <span style={{ fontSize: 13, color: C.textDark, lineHeight: 1.6, flex: 1 }}>{row.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: M.dark, whiteSpace: "nowrap", flexShrink: 0 }}>
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: C.warmGray, lineHeight: 1.7 }}>
              ※最低発注金額 35,000円（税別）〜　※使用材料はサンゲツ・リリカラ等のJIS規格品。F☆☆☆☆対応。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ───────── Flow ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: "#fff" }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="FLOW" ja="ご依頼の流れ" />
          </ScrollFadeIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <ScrollFadeIn key={step.num} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: step.num === "0" ? C.gold : M.main,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < steps.length - 1 && <div style={{ width: 2, height: 48, background: M.light }} />}
                  </div>
                  <div style={{ paddingBottom: i < steps.length - 1 ? 20 : 0 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: C.textDark, marginBottom: 4, marginTop: 8 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.8 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: "#f9f8f6" }}>
        <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="FAQ" ja="よくあるご質問" />
          </ScrollFadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollFadeIn key={i} delay={i * 0.05}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: radius.md,
                      border: `1px solid ${C.border}`,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        padding: "18px 22px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: M.main, lineHeight: 1.5 }}>
                        {faq.q}
                      </span>
                      <span
                        style={{
                          fontSize: 18,
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
                        maxHeight: isOpen ? 320 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p
                        style={{
                          padding: "0 22px 20px",
                          fontSize: "clamp(13px, 2.5vw, 15px)",
                          color: C.textMid,
                          lineHeight: 1.9,
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section
        style={{
          padding: `${spacing.section.md} ${spacing.pagePadding}`,
          background: M.dark,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="CONTACT" ja="まずは見積書をお送りください" dark />
            <p
              style={{
                fontSize: typography.bodyLarge.size,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.9,
                marginBottom: 28,
              }}
            >
              管理会社の見積書の写真を送るだけでOK。<br />
              平米単価ベースで比較したコスト試算をお返しします。
            </p>
            <LineCTAButton size="large" label="LINEで見積もり相談" />
          </ScrollFadeIn>
        </div>
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
