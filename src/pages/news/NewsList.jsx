import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { newsList, newsCategories } from '../../data/news'

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filtered = activeCategory === '全部'
    ? newsList
    : newsList.filter(n => n.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '5rem 0 4rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <span className="section-tag">新闻资讯</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111827', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            最新动态
          </h1>
          <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.7, maxWidth: '560px' }}>
            了解三合液压最新公司动态、行业资讯及展会信息
          </p>
        </div>
      </section>

      {/* Filter + List */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0' }}>
            {newsCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '0.625rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeCategory === cat ? '#991B1B' : '#6B7280',
                borderBottom: activeCategory === cat ? '2px solid #991B1B' : '2px solid transparent',
                backgroundColor: 'transparent',
                transition: 'all 0.15s',
                marginBottom: '-1px',
                whiteSpace: 'nowrap',
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#9CA3AF' }}>
              <i className="ri-newspaper-line" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }} />
              <p>暂无该分类文章</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
              {filtered.map((news, idx) => (
                <Link key={news.id} to={`/news/${news.id}`} style={{
                  borderRadius: '14px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  display: 'block',
                  transition: 'all 0.2s',
                  ...(idx === 0 && activeCategory === '全部' ? { gridColumn: 'span 2' } : {}),
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {/* Image */}
                  <div style={{
                    height: idx === 0 && activeCategory === '全部' ? '240px' : '180px',
                    background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <i className="ri-newspaper-line" style={{ fontSize: '3rem', color: '#D1D5DB' }} />
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#991B1B',
                      color: '#fff',
                      borderRadius: '100px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                    }}>
                      {news.category}
                    </div>
                  </div>

                  <div style={{ padding: idx === 0 && activeCategory === '全部' ? '2rem' : '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="ri-calendar-line" />
                      {news.date}
                    </div>
                    <h3 style={{ fontSize: idx === 0 && activeCategory === '全部' ? '1.125rem' : '0.9375rem', fontWeight: 700, color: '#111827', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {news.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.25rem' }}>
                      {news.excerpt}
                    </p>
                    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {news.tags.map(tag => (
                        <span key={tag} style={{ padding: '0.15rem 0.5rem', backgroundColor: '#F3F4F6', color: '#6B7280', borderRadius: '4px', fontSize: '0.72rem' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.82rem', fontWeight: 600, color: '#991B1B' }}>
                      阅读全文 <i className="ri-arrow-right-line" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
