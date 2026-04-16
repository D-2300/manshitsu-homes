import { Link } from "react-router-dom";
import { M, C, spacing, radius } from "../../tokens";
import { SectionHeading, ScrollFadeIn } from "../../shared";

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
    <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionHeading en="WORKS" ja="施工事例" />
        </ScrollFadeIn>

        <div className="hp-works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {previews.map((p, i) => (
            <ScrollFadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  borderRadius: radius.md,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.textDark, marginBottom: 4 }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 12, color: C.gold, fontWeight: 500 }}>{p.cost}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            to="/works"
            style={{
              fontSize: 14,
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
