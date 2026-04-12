import { Link } from "react-router-dom";
import { M, C } from "../../tokens";

const previews = [
  {
    name: "1K・築18年アパート",
    cost: "¥105,000",
    img: "/images/m-after-green-sm.webp",
  },
  {
    name: "ワンルーム・築22年",
    cost: "¥88,000",
    img: "/images/m-after-pendant-sm.webp",
  },
  {
    name: "2DK・築28年アパート",
    cost: "¥180,000",
    img: "/images/m-before-3-sm.webp",
  },
];

export default function HPWorksPreview() {
  return (
    <section style={{ padding: "56px 20px", background: C.warmWhite }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          Works
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: C.textDark,
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          施工事例
        </h2>

        <div className="hp-works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {previews.map((p, i) => (
            <div
              key={i}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "12px 16px" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: C.textDark, marginBottom: "4px" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "12px", color: C.gold, fontWeight: 500 }}>
                  {p.cost}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link
            to="/works"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: M.main,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            すべての施工事例を見る →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hp-works-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 12px !important;
            padding-bottom: 8px !important;
            scrollbar-width: none;
          }
          .hp-works-grid::-webkit-scrollbar { display: none; }
          .hp-works-grid > div {
            min-width: 220px !important;
            scroll-snap-align: start !important;
          }
        }
      `}</style>
    </section>
  );
}
