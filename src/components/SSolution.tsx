import { Camera, Palette, Sofa, Users, Hammer } from "lucide-react";
import { M, C, LINE_URL } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";
import { pushEvent } from "../utils/pushEvent";

const colorOptions = [
  { src: "/images/vs-color-blue.jpeg", label: "ブルー" },
  { src: "/images/vs-color-green.jpeg", label: "グリーン" },
  { src: "/images/vs-color-wine.jpeg", label: "ワイン" },
];

const stagedOptions = [
  { src: "/images/vs-staged-black.jpeg", label: "男性向け" },
  { src: "/images/vs-staged-green.jpeg", label: "ナチュラル" },
  { src: "/images/vs-staged-pink.jpeg", label: "女性向け" },
];

export default function SSolution() {
  return (
    <section
      style={{
        backgroundColor: M.dark,
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="SOLUTION" ja="新しい空室対策" dark />

          <h2
            style={{
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            リフォーム<em style={{ fontStyle: "normal", color: C.gold }}>前</em>に、
            <br />
            入居者を集める方法があります。
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: "rgba(255,255,255,.5)",
              textAlign: "center",
              lineHeight: 1.9,
              marginBottom: 28,
            }}
          >
            空室写真からバーチャルホームステージング画像をAI生成。
            <br />
            入居希望者に<strong style={{ color: "rgba(255,255,255,.8)" }}>好みのデザインを選んでもらい</strong>、
            <br />
            選ばれた内装でリノベーション施工します。
          </p>
        </ScrollFadeIn>

        {/* ── STEP 1: カラーバリエーション ── */}
        <ScrollFadeIn delay={0.1}>
          <div
            style={{
              background: "rgba(255,255,255,.06)",
              borderRadius: 14,
              padding: "20px 16px",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: M.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <Palette size={18} />
              </div>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", color: C.gold, display: "block" }}>
                  STEP 1
                </span>
                <h3 style={{ fontSize: "clamp(14px, 3vw, 17px)", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                  カラーバリエーションを提案
                </h3>
              </div>
            </div>
            <p style={{ fontSize: "clamp(12px, 2.2vw, 13px)", color: "rgba(255,255,255,.45)", lineHeight: 1.7, marginBottom: 12 }}>
              同じ部屋でも壁の色を変えるだけで印象が激変。
              <br />
              AIが複数パターンを生成 → お客様が好みの色を選べます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
              {colorOptions.map((img, i) => (
                <div key={i}>
                  <div style={{ borderRadius: 8, overflow: "hidden" }}>
                    <img
                      src={img.src}
                      alt={img.label}
                      style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.5)", textAlign: "center", marginTop: 3 }}>
                    {img.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* Arrow between steps */}
        <ScrollFadeIn delay={0.15}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: C.gold, margin: "4px 0", letterSpacing: ".1em" }}>
            ▼ 選んだ色で家具を配置すると…
          </p>
        </ScrollFadeIn>

        {/* ── STEP 2: 家具配置イメージ ── */}
        <ScrollFadeIn delay={0.2}>
          <div
            style={{
              background: "rgba(255,255,255,.06)",
              borderRadius: 14,
              padding: "20px 16px",
              marginBottom: 20,
              border: `1px solid ${C.gold}33`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: C.gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <Sofa size={18} />
              </div>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", color: C.gold, display: "block" }}>
                  STEP 2
                </span>
                <h3 style={{ fontSize: "clamp(14px, 3vw, 17px)", fontWeight: 700, color: C.gold, lineHeight: 1.4 }}>
                  家具を配置した生活イメージ
                </h3>
              </div>
            </div>
            <p style={{ fontSize: "clamp(12px, 2.2vw, 13px)", color: "rgba(255,255,255,.45)", lineHeight: 1.7, marginBottom: 12 }}>
              選んだ色に家具を配置。入居後の暮らしが想像できるから、
              <br />
              内見なしでも「ここに住みたい」と思ってもらえます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
              {stagedOptions.map((img, i) => (
                <div key={i}>
                  <div style={{ borderRadius: 8, overflow: "hidden" }}>
                    <img
                      src={img.src}
                      alt={img.label}
                      style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: C.gold, textAlign: "center", marginTop: 3 }}>
                    {img.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* Flow summary */}
        <ScrollFadeIn delay={0.25}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
              marginBottom: 20,
            }}
          >
            {[
              { icon: <Users size={18} />, text: "入居者が\n好みを選ぶ" },
              { icon: <Hammer size={18} />, text: "選ばれた内装を\n即日施工" },
              { icon: <Camera size={18} />, text: "写真を送るだけ\nすべて無料" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "14px 8px",
                  background: "rgba(255,255,255,.04)",
                  borderRadius: 10,
                }}
              >
                <div style={{ color: C.gold, marginBottom: 6 }}>{item.icon}</div>
                <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.6)", lineHeight: 1.5, whiteSpace: "pre-line", margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Free reveal */}
        <ScrollFadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <p style={{ fontSize: "clamp(13px, 2.3vw, 15px)", color: "rgba(255,255,255,.45)", marginBottom: 8 }}>
              これらの画像すべて、
            </p>
            <p
              style={{
                fontSize: "clamp(32px, 8vw, 48px)",
                fontWeight: 700,
                color: C.gold,
                fontFamily: "'Poppins', 'Noto Sans JP', sans-serif",
                letterSpacing: ".02em",
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              ¥0
            </p>
            <p style={{ fontSize: "clamp(13px, 2.3vw, 15px)", color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
              AI画像生成だからコストがほぼゼロ。
              <br />
              だから無料で提供できます。
            </p>
          </div>
        </ScrollFadeIn>

        {/* CTA */}
        <ScrollFadeIn delay={0.35}>
          <div
            style={{
              padding: "14px 16px",
              background: "rgba(255,255,255,.06)",
              borderRadius: 10,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.35)", lineHeight: 1.7, margin: 0 }}>
              ※ CG画像である旨を表記すれば、SUUMO・アットホーム・ジモティー・Instagram・TikTokでの掲載OK（景品表示法クリア）。
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "clamp(15px, 3.5vw, 19px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              あなたの物件も、こんな風に
              <br />
              <span style={{ color: C.gold }}>提案してみませんか？</span>
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent("line_cta_click_staging")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                backgroundColor: C.lineGreen,
                color: "#fff",
                fontWeight: 700,
                fontSize: "clamp(14px, 2.5vw, 17px)",
                padding: "14px 32px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(6,199,85,.35)",
              }}
            >
              この方法を詳しく聞いてみる
            </a>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.2)", marginTop: 10 }}>
              LINEで具体的なやり方をお伝えします
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
