import { MapPin, Train, Ruler, Building, Calendar } from "lucide-react";
import { M, C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

const colorImages = [
  { src: "/images/vs-color-blue.jpeg", label: "ブルー" },
  { src: "/images/vs-color-green.jpeg", label: "グリーン" },
  { src: "/images/vs-color-wine.jpeg", label: "ワイン" },
  { src: "/images/vs-color-black.jpeg", label: "ブラック" },
  { src: "/images/vs-color-gray.jpeg", label: "グレー" },
  { src: "/images/vs-color-yellow.jpeg", label: "イエロー" },
];

const stagedImages = [
  { src: "/images/vs-staged-green.jpeg", label: "ナチュラル" },
  { src: "/images/vs-staged-black.jpeg", label: "モダン" },
  { src: "/images/vs-staged-pink.jpeg", label: "ガーリー" },
];

export default function SListingMockup() {
  return (
    <section
      style={{
        backgroundColor: C.warmWhite,
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="TENANT VIEW" ja="入居者が見る画面" />

          <h2
            style={{
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: C.textDark,
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 8,
            }}
          >
            入居者には、
            <span style={{ color: M.main }}>こう見えています。</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: C.textMid,
              textAlign: "center",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            ポータルサイトやSNSで、こんな物件情報が流れてきたら
            <br />
            思わず見てしまいませんか？
          </p>
        </ScrollFadeIn>

        {/* ── 物件チラシ風カード ── */}
        <ScrollFadeIn delay={0.1}>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              border: "1px solid #e8e6e0",
            }}
          >
            {/* ヘッダー：物件名 + 価格 */}
            <div
              style={{
                padding: "16px 18px 12px",
                borderBottom: "1px solid #f0ede8",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <p style={{ fontSize: 11, color: C.warmGray, fontWeight: 500, marginBottom: 2 }}>賃貸マンション</p>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.textDark, lineHeight: 1.3 }}>
                    サンハイツ仙台 205号室
                  </h3>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontSize: 10, color: C.warmGray, marginBottom: 0 }}>家賃</p>
                  <p style={{ fontSize: 26, fontWeight: 900, color: M.main, lineHeight: 1, letterSpacing: "-.02em" }}>
                    4.5<span style={{ fontSize: 14, fontWeight: 600 }}>万円</span>
                  </p>
                </div>
              </div>

              {/* 物件スペック */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  fontSize: 12,
                  color: C.textMid,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                  <MapPin size={12} color={C.warmGray} /> 仙台市青葉区
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                  <Train size={12} color={C.warmGray} /> 北仙台駅 徒歩8分
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                  <Ruler size={12} color={C.warmGray} /> 1K / 25㎡
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                  <Building size={12} color={C.warmGray} /> 2階 / 5階建
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                  <Calendar size={12} color={C.warmGray} /> 築22年
                </span>
              </div>
            </div>

            {/* メイン画像：色違い */}
            <div style={{ padding: "14px 14px 8px" }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: M.main,
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                🎨 お好みの壁色を選べます
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
                {colorImages.map((img, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img
                      src={img.src}
                      alt={img.label}
                      style={{
                        width: "100%",
                        aspectRatio: "16/10",
                        objectFit: "cover",
                        borderRadius: 6,
                        border: i === 0 ? `2px solid ${M.main}` : "2px solid transparent",
                      }}
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 3,
                        left: 3,
                        fontSize: 9,
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(0,0,0,0.55)",
                        padding: "1px 6px",
                        borderRadius: 3,
                      }}
                    >
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 家具配置イメージ */}
            <div style={{ padding: "8px 14px 14px" }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.gold,
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                🛋️ 家具を置いたイメージ
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
                {stagedImages.map((img, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img
                      src={img.src}
                      alt={img.label}
                      style={{
                        width: "100%",
                        aspectRatio: "16/10",
                        objectFit: "cover",
                        borderRadius: 6,
                      }}
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 3,
                        left: 3,
                        fontSize: 9,
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(0,0,0,0.55)",
                        padding: "1px 6px",
                        borderRadius: 3,
                      }}
                    >
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* フッター：CG注記 */}
            <div
              style={{
                padding: "10px 14px",
                backgroundColor: "#faf8f5",
                borderTop: "1px solid #f0ede8",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 10, color: C.warmGray, margin: 0 }}>
                ※ 内装イメージはCG合成です。実際の施工時に再現します。
              </p>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  backgroundColor: M.main,
                  padding: "4px 12px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}
              >
                お問い合わせ
              </span>
            </div>
          </div>
        </ScrollFadeIn>

        {/* 下の訴求 */}
        <ScrollFadeIn delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <p
              style={{
                fontSize: "clamp(14px, 3vw, 17px)",
                fontWeight: 700,
                color: C.textDark,
                lineHeight: 1.8,
              }}
            >
              真っ白い壁だけの募集写真と、
              <br />
              <span style={{ color: M.main }}>どちらが「見たい」と思いますか？</span>
            </p>
            <p
              style={{
                fontSize: "clamp(12px, 2.2vw, 14px)",
                color: C.warmGray,
                lineHeight: 1.8,
                marginTop: 8,
              }}
            >
              この物件チラシ、すべてAI画像で作れます。
              <br />
              あなたの物件でも、同じことができます。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
