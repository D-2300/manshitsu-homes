import { useState, useEffect, useRef } from "react";
import { M, C, LINE_URL } from "../../tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

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
  const [showCount, setShowCount] = useState(false);
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
          setTimeout(() => setShowCount(true), selected.length * 80 + 200);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [selected]);

  return (
    <section ref={sectionRef} style={{ padding: "56px 16px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: M.mid,
            marginBottom: "10px",
            textTransform: "uppercase" as const,
          }}
        >
          Property Info
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            marginBottom: "8px",
            lineHeight: 1.7,
          }}
        >
          非公開のアパート投資物件
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.5vw, 15px)",
            color: C.textMid,
            marginBottom: "24px",
            lineHeight: 1.7,
          }}
        >
          ネットに出回る前の物件情報をLINEでお届けしています。
        </p>

        {/* Property list */}
        <div
          role="list"
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            border: "1px solid #e0d8cc",
            borderRadius: "10px",
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
            <span style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "1px" }}>非公開 物件リスト</span>
            <span style={{ fontSize: "11px", color: M.main, fontWeight: 600 }}>{selected.length}件</span>
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
                  gap: "8px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#2a2a2a", minWidth: "90px", flexShrink: 0 }}>
                  {prop.area}
                </span>
                <div style={{ display: "flex", gap: "4px", flex: 1, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "8px", background: M.bg, color: M.mid, border: `1px solid ${M.light}`, fontWeight: 600 }}>
                    {prop.type}
                  </span>
                  <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "8px", background: "#f4efe6", color: "#8a7a6a", border: "1px solid #e8e0d4" }}>
                    {prop.age}
                  </span>
                </div>
                <div style={{ flexShrink: 0, textAlign: "right", filter: "blur(5px)", userSelect: "none" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block" }}>{prop.price}</span>
                  <span style={{ fontSize: "10px", color: C.accentGreen }}>利回り{prop.yield}</span>
                </div>
              </div>
            );
          })}

          <div style={{ padding: "10px 16px", background: "#faf7f2", borderTop: "1px solid #ece6dc", textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#8a7a6a" }}>
              他にも <strong style={{ color: M.main, opacity: showCount ? 1 : 0, transition: "opacity 0.5s" }}>{showCount ? Math.floor(Math.random() * 21) + 30 : "--"}</strong> 件あります
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { window.dataLayer?.push({ event: "line_cta_click", cta_location: "hp_property_teaser" }); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 34px",
              background: C.lineGreen,
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            非公開の物件情報を見る
          </a>
          <p style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "8px" }}>
            1分で完了・営業なし・いつでもブロック可能
          </p>
        </div>
      </div>
    </section>
  );
}
