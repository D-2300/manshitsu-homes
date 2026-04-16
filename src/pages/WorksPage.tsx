import { Link } from "react-router-dom";
import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";
import { SectionHeading, ScrollFadeIn, LineCTAButton } from "../shared";
import { allWorks } from "../data/works";
import { M, C, typography, spacing } from "../tokens";

export default function WorksPage() {
  return (
    <div style={{ fontFamily: typography.fontFamily, color: C.textDark }}>
      <ManshitsuNav />
      <SmallHero title="Works" subtitle="施工事例" />

      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading
              en="CASE STUDIES"
              ja={`${allWorks.length}件の改修事例`}
            />
          </ScrollFadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {allWorks.map((work, i) => (
              <ScrollFadeIn key={work.slug} delay={i * 0.06}>
              <Link
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
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: M.dark, textAlign: "center" }}>
        <div style={{ maxWidth: spacing.contentMax.narrow, margin: "0 auto" }}>
          <ScrollFadeIn>
            <SectionHeading en="CONTACT" ja="同じような改修、ご相談ください" dark />
            <p style={{ fontSize: typography.bodyLarge.size, color: "rgba(255,255,255,.75)", lineHeight: 1.9, marginBottom: 28 }}>
              物件の写真をLINEで送っていただければ、<br />
              改修ポイントと概算費用をお返しします。
            </p>
            <LineCTAButton size="large" />
          </ScrollFadeIn>
        </div>
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
