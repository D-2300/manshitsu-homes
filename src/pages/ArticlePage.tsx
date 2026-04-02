import { useParams, Link } from 'react-router-dom';
import { M, C, LINE_URL } from '../tokens';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import { getArticleBySlug, getAllArticles, categoryLabels } from '../data/articles';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(18px, 4vw, 24px)',
        fontWeight: 700,
        color: M.main,
        lineHeight: 1.5,
        marginBottom: 16,
        paddingBottom: 12,
        borderBottom: `2px solid ${C.gold}44`,
      }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 14, lineHeight: 2.1, color: C.textMid, fontWeight: 300 }}>
      {children}
    </p>
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div style={{ fontFamily: "'Noto Sans JP', sans-serif", backgroundColor: C.warmWhite }}>
        <Nav />
        <div style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, color: C.textDark }}>記事が見つかりません</h1>
          <Link to="/articles" style={{ color: M.main, fontSize: 14, marginTop: 16, display: 'inline-block' }}>
            ← 記事一覧に戻る
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related articles (same category, exclude current, max 3)
  const related = getAllArticles()
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", backgroundColor: C.warmWhite }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: 'clamp(300px, 50vh, 440px)',
          overflow: 'hidden',
        }}
      >
        <img
          src={article.heroImage}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'clamp(24px, 5vw, 48px)',
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: C.gold,
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: '3px 10px',
                borderRadius: 2,
                marginBottom: 12,
                display: 'inline-block',
              }}
            >
              {categoryLabels[article.category]}
            </span>
            <h1
              style={{
                fontSize: 'clamp(20px, 5vw, 32px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.5,
                marginBottom: 8,
              }}
            >
              {article.title}
            </h1>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav style={{ display: 'flex', gap: 8, fontSize: 11, color: C.warmGray, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: C.warmGray, textDecoration: 'none' }}>Top</Link>
            <span>›</span>
            <Link to="/articles" style={{ color: C.warmGray, textDecoration: 'none' }}>記事一覧</Link>
            <span>›</span>
            <span style={{ color: C.textMid }}>{categoryLabels[article.category]}</span>
          </nav>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 32 }}>
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  color: M.main,
                  border: `1px solid ${M.light}44`,
                  padding: '3px 10px',
                  borderRadius: 2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Lead text */}
          <div
            style={{
              borderLeft: `3px solid ${C.gold}`,
              padding: '16px 20px',
              marginBottom: 48,
              backgroundColor: C.goldPale,
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 2, color: C.textMid, fontWeight: 400, margin: 0 }}>
              {article.leadText}
            </p>
          </div>

          {/* Sections */}
          {article.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <SectionHeading>{section.heading}</SectionHeading>
              <P>{section.text}</P>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.heading}
                  style={{ width: '100%', marginTop: 16, borderRadius: 4 }}
                  loading="lazy"
                />
              )}
            </div>
          ))}

          {/* LINE CTA */}
          <div
            style={{
              textAlign: 'center',
              backgroundColor: M.bg,
              border: `1px solid ${M.light}33`,
              padding: '40px 24px',
              marginBottom: 48,
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              原状回復のご相談、お気軽にどうぞ
            </p>
            <p style={{ fontSize: 13, color: C.textMid, marginBottom: 20 }}>
              管理会社の見積書をLINEで送るだけで、比較見積もりをお出しします
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: C.lineGreen,
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 32px',
                borderRadius: 4,
                textDecoration: 'none',
              }}
            >
              LINEで無料相談
            </a>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: C.textDark, marginBottom: 20 }}>
                関連記事
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: 16,
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/articles/${r.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ backgroundColor: '#fff', border: `1px solid ${M.light}33`, overflow: 'hidden' }}>
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        style={{ width: '100%', height: 120, objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{ padding: '12px 14px' }}>
                        <span style={{ fontSize: 10, color: M.main, fontWeight: 600 }}>
                          {categoryLabels[r.category]}
                        </span>
                        <h4 style={{ fontSize: 13, fontWeight: 500, color: C.textDark, lineHeight: 1.5, marginTop: 4 }}>
                          {r.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to list */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/articles"
              style={{
                display: 'inline-block',
                fontSize: 13,
                color: M.main,
                border: `1px solid ${M.main}`,
                padding: '10px 28px',
                borderRadius: 2,
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
