import { useParams, Link } from "react-router-dom";
import ManshitsuNav from "../components/hp/ManshitsuNav";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";
import { LineCTAButton } from "../shared";
import { getWorkBySlug } from "../data/works";
import { M, C } from "../tokens";
import { JsonLd, breadcrumbSchema } from "../utils/jsonLd";

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? getWorkBySlug(slug) : undefined;

  if (!work) {
    return (
      <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
        <ManshitsuNav />
        <div style={{ paddingTop: "120px", textAlign: "center", minHeight: "60vh" }}>
          <h1 style={{ fontSize: "24px", color: C.textDark }}>事例が見つかりません</h1>
          <Link to="/works" style={{ color: M.main, marginTop: "16px", display: "inline-block" }}>← 施工事例一覧に戻る</Link>
        </div>
        <ManshitsuFooter />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Top", url: "/" },
          { name: "施工事例", url: "/works" },
          { name: work.name, url: `/works/${work.slug}` },
        ])}
      />
      <ManshitsuNav />

      {/* Hero with After image */}
      <section
        style={{
          minHeight: "50vh",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "56px",
        }}
      >
        <img
          src={work.afterImg}
          alt={work.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "32px 24px", maxWidth: "720px" }}>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
            {work.name}
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,.6)" }}>{work.area}</p>
        </div>
      </section>

      {/* Spec table */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e8e5de" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {[
            { label: "施工費", value: work.cost },
            { label: "工期", value: work.period },
            { label: "工事内容", value: work.type },
            { label: "エリア", value: work.area },
          ].map((spec, i) => (
            <div
              key={i}
              style={{
                padding: "16px 12px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #e8e5de" : "none",
              }}
            >
              <p style={{ fontSize: "10px", color: C.warmGray, marginBottom: "4px", letterSpacing: "0.05em" }}>
                {spec.label}
              </p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: C.textDark }}>{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "16px 24px" }}>
        <Link to="/works" style={{ fontSize: "13px", color: M.mid, textDecoration: "none" }}>
          ← 施工事例一覧に戻る
        </Link>
      </div>

      {/* Story */}
      <section style={{ padding: "32px 24px 48px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: C.textDark, marginBottom: "20px" }}>
            Story
          </h2>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: C.textMid, lineHeight: 1.9 }}>
            {work.story}
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section style={{ padding: "48px 24px", background: C.warmWhite }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, color: C.warmGray, marginBottom: "8px", letterSpacing: "0.1em" }}>BEFORE</p>
              <img
                src={work.beforeImg}
                alt="Before"
                style={{ width: "100%", borderRadius: "8px", objectFit: "cover", filter: "brightness(0.85)" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, color: C.gold, marginBottom: "8px", letterSpacing: "0.1em" }}>AFTER</p>
              <img
                src={work.afterImg}
                alt="After"
                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Points */}
      {work.points && (
        <section style={{ padding: "48px 24px", background: "#fff" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: C.textDark, marginBottom: "24px" }}>
              Points
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {work.points.map((point, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px 20px",
                    background: C.warmWhite,
                    borderRadius: "10px",
                    borderLeft: `3px solid ${C.gold}`,
                  }}
                >
                  <p style={{ fontSize: "14px", color: C.textDark, lineHeight: 1.7 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      <section style={{ padding: "24px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {work.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "12px",
                color: M.mid,
                background: M.bg,
                padding: "4px 12px",
                borderRadius: "100px",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", background: M.dark, textAlign: "center" }}>
        <p style={{ fontSize: "clamp(16px, 3.5vw, 20px)", fontWeight: 700, color: "#fff", marginBottom: 20, lineHeight: 1.7 }}>
          同じような改修、<br />うちの物件でもできる？
        </p>
        <LineCTAButton size="large" label="LINEで相談する" />
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
