import { useState } from 'react';
import { Link } from 'react-router-dom';
import { M, C } from '../tokens';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import { getAllArticles, categoryLabels, type ArticleCategory } from '../data/articles';

const categories: (ArticleCategory | 'all')[] = ['all', 'case-study', 'column', 'seo'];
const categoryDisplay: Record<string, string> = {
  all: 'すべて',
  ...categoryLabels,
};

export default function ArticleListPage() {
  const [filter, setFilter] = useState<ArticleCategory | 'all'>('all');
  const allArticles = getAllArticles();
  const filtered = filter === 'all' ? allArticles : allArticles.filter((a) => a.category === filter);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", backgroundColor: C.warmWhite }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          backgroundColor: M.dark,
          padding: '120px 24px 60px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: '0.25em', color: C.gold, textTransform: 'uppercase', marginBottom: 16 }}>
          Articles
        </div>
        <h1 style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>
          記事一覧
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
          賃貸オーナー様に役立つ情報をお届けします
        </p>
      </section>

      {/* Filter + Cards */}
      <section style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Category filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  fontSize: 13,
                  fontWeight: filter === cat ? 600 : 400,
                  color: filter === cat ? '#fff' : C.textMid,
                  backgroundColor: filter === cat ? M.main : '#fff',
                  border: `1px solid ${filter === cat ? M.main : M.light + '44'}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {categoryDisplay[cat]}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: C.warmGray, fontSize: 14, padding: '40px 0' }}>
              記事がまだありません
            </p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 24,
              }}
            >
              {filtered.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundColor: '#fff',
                      border: `1px solid ${M.light}33`,
                      overflow: 'hidden',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      style={{ width: '100%', height: 180, objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: M.main,
                            backgroundColor: M.bg,
                            padding: '2px 8px',
                            borderRadius: 2,
                          }}
                        >
                          {categoryLabels[article.category]}
                        </span>
                        <span style={{ fontSize: 11, color: C.warmGray }}>{article.date}</span>
                      </div>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: C.textDark, lineHeight: 1.6, marginBottom: 8 }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                        {article.excerpt}
                      </p>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 10,
                              color: C.warmGray,
                              border: `1px solid ${M.light}33`,
                              padding: '2px 8px',
                              borderRadius: 2,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
