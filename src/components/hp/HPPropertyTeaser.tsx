import { useState, useEffect, useRef } from "react";
import { M, C, spacing, radius } from "../../tokens";
import { SectionHeading, LineCTAButton } from "../../shared";

interface Property {
  area: string;
  type: string;
  age: string;
  price: string;
  yield: string;
}

const sampleProperties: Property[] = [
  { area: "仙台市太白区", type: "1棟4室", age: "築22年", price: "780万円", yield: "12.3%" },
  { area: "多賀城市", type: "1棟6室", age: "築30年", price: "450万円", yield: "15.8%" },
  { area: "石巻市", type: "1棟8室", age: "築25年", price: "620万円", yield: "14.1%" },
  { area: "仙台市若林区", type: "1棟4室", age: "築18年", price: "1,050万円", yield: "10.2%" },
  { area: "大崎市", type: "1棟6室", age: "築32年", price: "320万円", yield: "18.1%" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HPPropertyTeaser() {
  const [selected] = useState(() => shuffle(sampleProperties).slice(0, 4));
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const hasStarted = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hasStarted.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          selected.forEach((_, i) => {
            setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 80);
          });
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [selected]);

  return (
    <section ref={sectionRef} style={{ padding: `${spacing.section.md} 16px`, background: "#fff" }}>
      <div style={{ maxWidth: spacing.contentMax.normal, margin: "0 auto" }}>
        <SectionHeading en="PROPERTY INFO" ja="非公開の収益物件情報" />
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: C.textMid,
            marginBottom: 24,
            lineHeight: 1.7,
          }}
        >
          ネットに出回る前の物件情報をLINEでお届けしています。
        </p>

        {/* Property list */}
        <div
          role="list"
          style={{
            maxWidth: 420,
            margin: "0 auto",
            border: "1px solid #e0d8cc",
            borderRadius: radius.md,
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(60,40,20,0.06)",
          }}
        >
          <div
            style={{
              padding: "10px 16px",
              background: "#faf7f2",
              borderBottom: "1px solid #ece6dc",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 11, color: "#8a7a6a", letterSpacing: "1px" }}>非公開 物件リスト</span>
            <span style={{ fontSize: 11, color: M.main, fontWeight: 600 }}>{selected.length}件</span>
          </div>

          {selected.map((prop, i) => {
            const isVisible = animatedRows.includes(i);
            const isLast = i === selected.length - 1;
            return (
              <div
                key={i}
                role="listitem"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderBottom: isLast ? "none" : "1px solid #ece6dc",
                  gap: 8,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#2a2a2a", minWidth: 90, flexShrink: 0 }}>
                  {prop.area}
                </span>
                <div style={{ display: "flex", gap: 4, flex: 1, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: 9,
                      padding: "2px 6px",
                      borderRadius: 8,
                      background: M.bg,
                      color: M.mid,
                      border: `1px solid ${M.light}`,
                      fontWeight: 600,
                    }}
                  >
                    {prop.type}
                  </span>
                  <span
                    style={{
                      fontSize: 9,
                      padding: "2px 6px",
                      borderRadius: 8,
                      background: "#f4efe6",
                      color: "#8a7a6a",
                      border: "1px solid #e8e0d4",
                    }}
                  >
                    {prop.age}
                  </span>
                </div>
                <div style={{ flexShrink: 0, textAlign: "right", filter: "blur(5px)", userSelect: "none" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#555", display: "block" }}>
                    {prop.price}
                  </span>
                  <span style={{ fontSize: 10, color: C.accentGreen }}>利回り{prop.yield}</span>
                </div>
              </div>
            );
          })}

          <div style={{ padding: "10px 16px", background: "#faf7f2", borderTop: "1px solid #ece6dc", textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#8a7a6a" }}>
              他にも{" "}
              <strong style={{ color: M.main }}>
                30件以上
              </strong>
              {" "}の非公開情報があります
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <LineCTAButton size="large" label="非公開の物件情報を見る" location="hp_property_teaser" />
          <p style={{ fontSize: 12, color: "#8a7a6a", marginTop: 10 }}>
            1分で完了・営業なし・いつでもブロック可能
          </p>
        </div>
      </div>
    </section>
  );
}
