import { Link } from 'react-router-dom';
import { M, C } from '../tokens';
import { getAllArticles, categoryLabels, type ArticleCategory } from '../data/articles';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const badgeColors: Record<ArticleCategory, string> = {
  'case-study': M.main,
  column: C.gold,
  seo: C.accentGreen,
};

export default function ArticlePreview() {
  const articles = getAllArticles().slice(0, 3);
  if (articles.length === 0) return null;

  return (
    <section style={{ backgroundColor: C.warmWhite, padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <ScrollFadeIn>
          <SectionLabel en="Column" ja="お役立ち情報" />
        </ScrollFadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 40,
          }}
        >
          {articles.map((a, i) => (
            <ScrollFadeIn key={a.slug} delay={i * 0.1}>
              <Link
                to={`/articles/${a.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)')
                  }
                >
                  <img
                    src={a.thumbnail}
                    alt={a.title}
                    style={{ width: '100%', height: 160, objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div style={{ padding: '16px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: '#fff',
                          backgroundColor: badgeColors[a.category],
                          padding: '2px 8px',
                          borderRadius: 3,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {categoryLabels[a.category]}
                      </span>
                      <span style={{ fontSize: 11, color: C.warmGray }}>{a.date}</span>
                    </div>
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: C.textDark,
                        lineHeight: 1.6,
                        marginBottom: 6,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {a.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: C.textMid,
                        lineHeight: 1.7,
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {a.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/articles"
            style={{
              fontSize: 13,
              color: M.main,
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.04em',
              borderBottom: `1px solid ${M.main}44`,
              paddingBottom: 2,
            }}
          >
            記事一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
