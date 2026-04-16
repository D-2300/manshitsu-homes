import { useState } from 'react';
import { Link } from 'react-router-dom';
import ManshitsuNav from '../components/hp/ManshitsuNav';
import SmallHero from '../components/hp/SmallHero';
import ManshitsuFooter from '../components/hp/ManshitsuFooter';
import V3FloatingCTA from '../components/v3/V3FloatingCTA';
import { ScrollFadeIn } from '../shared';
import { M, C, typography, spacing, radius } from '../tokens';
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
    <div style={{ fontFamily: typography.fontFamily, backgroundColor: C.warmWhite, color: C.textDark }}>
      <ManshitsuNav />
      <SmallHero title="Articles" subtitle="賃貸オーナーのためのコラム" />

      {/* Filter + Cards */}
      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <ScrollFadeIn>
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                marginBottom: 36,
                justifyContent: 'center',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 22px',
                    fontSize: 13,
                    fontWeight: filter === cat ? 600 : 400,
                    color: filter === cat ? '#fff' : C.textMid,
                    backgroundColor: filter === cat ? M.main : '#fff',
                    border: `1px solid ${filter === cat ? M.main : `${M.light}44`}`,
                    borderRadius: radius.pill,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {categoryDisplay[cat]}
                </button>
              ))}
            </div>
          </ScrollFadeIn>

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
              {filtered.map((article, i) => (
                <ScrollFadeIn key={article.slug} delay={(i % 3) * 0.08}>
                  <Link
                    to={`/articles/${article.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      style={{
                        backgroundColor: '#fff',
                        border: `1px solid ${M.light}33`,
                        borderRadius: radius.md,
                        overflow: 'hidden',
                        transition: 'box-shadow 0.2s, transform 0.2s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        style={{ width: '100%', height: 180, objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 600,
                              color: M.main,
                              backgroundColor: M.bg,
                              padding: '3px 10px',
                              borderRadius: radius.pill,
                              letterSpacing: '0.05em',
                            }}
                          >
                            {categoryLabels[article.category]}
                          </span>
                          <span style={{ fontSize: 11, color: C.warmGray }}>{article.date}</span>
                        </div>
                        <h3
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: C.textDark,
                            lineHeight: 1.6,
                            marginBottom: 8,
                          }}
                        >
                          {article.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 12,
                            color: C.textMid,
                            lineHeight: 1.7,
                            margin: 0,
                            flex: 1,
                          }}
                        >
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
                </ScrollFadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
