import { Link } from "react-router-dom";
import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import { allWorks } from "../data/works";
import { M, C } from "../tokens";

export default function WorksPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <ManshitsuNav />
      <SmallHero title="Works" subtitle="施工事例" />

      <section style={{ padding: "56px 20px", background: C.warmWhite }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {allWorks.map((work) => (
              <Link
                key={work.slug}
                to={`/works/${work.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e8e5de",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Before / After images */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={work.beforeImg}
                      alt={`${work.name} Before`}
                      loading="lazy"
                      style={{ width: "100%", height: "160px", objectFit: "cover", display: "block", filter: "brightness(0.85)" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "2px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                      }}
                    >
                      BEFORE
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <img
                      src={work.afterImg}
                      alt={`${work.name} After`}
                      loading="lazy"
                      style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "2px",
                        background: C.gold,
                        color: M.dark,
                      }}
                    >
                      AFTER
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "16px 20px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: C.textDark, marginBottom: "8px" }}>
                    {work.name}
                  </h3>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                    {[work.cost, work.period, work.type, work.area].map((spec, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "11px",
                          padding: "3px 10px",
                          borderRadius: "100px",
                          background: i === 0 ? M.bg : "#f4f2ee",
                          color: i === 0 ? M.main : C.textMid,
                          fontWeight: i === 0 ? 600 : 400,
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: "13px", color: C.textMid, lineHeight: 1.7 }}>
                    {work.story.substring(0, 80)}…
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ManshitsuFooter />
    </div>
  );
}
