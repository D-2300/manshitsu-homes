import { Link } from "react-router-dom";
import { M, C, spacing, radius } from "../../tokens";
import { SectionHeading, ScrollFadeIn } from "../../shared";
import { getAllArticles, categoryLabels } from "../../data/articles";

export default function HPArticlesPreview() {
  const latest = getAllArticles().slice(0, 3);

  return (
    <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionHeading en="ARTICLES" ja="賃貸オーナーのためのコラム" />
        </ScrollFadeIn>

        <div className="hp-articles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {latest.map((a, i) => (
            <ScrollFadeIn key={a.slug} delay={i * 0.08}>
              <Link
                to={`/articles/${a.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div
                  style={{
                    borderRadius: radius.md,
                    overflow: "hidden",
                    background: "#fff",
                    border: `1px solid ${M.light}33`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={a.thumbnail}
                    alt={a.title}
                    loading="lazy"
                    style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 10,
                        fontWeight: 600,
                        color: M.main,
                        backgroundColor: M.bg,
                        padding: "2px 8px",
                        borderRadius: radius.pill,
                        alignSelf: "flex-start",
                        marginBottom: 8,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {categoryLabels[a.category]}
                    </span>
                    <p style={{ fontSize: 13, fontWeight: 600, color: C.textDark, lineHeight: 1.5, margin: 0 }}>
                      {a.title}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            to="/articles"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: M.main,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            すべての記事を見る →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hp-articles-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 12px !important;
            padding-bottom: 8px !important;
            scrollbar-width: none;
          }
          .hp-articles-grid::-webkit-scrollbar { display: none; }
          .hp-articles-grid > div {
            min-width: 220px !important;
            scroll-snap-align: start !important;
          }
        }
      `}</style>
    </section>
  );
}
