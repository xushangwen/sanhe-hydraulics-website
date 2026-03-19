import { useParams, Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { newsList } from '../../data/news'

export default function NewsDetail() {
  const { newsId } = useParams()
  const news = newsList.find(n => n.id === newsId)
  const related = newsList.filter(n => n.id !== newsId).slice(0, 2)

  if (!news) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>文章未找到</p>
        <Link to="/news" style={{ color: '#991B1B', fontWeight: 600 }}>返回新闻列表</Link>
      </div>
    )
  }

  const paragraphs = news.content.split('\n\n').filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '4rem 0 3rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
            <Link to="/news" style={{ color: '#9CA3AF' }}>新闻资讯</Link>
            <i className="ri-arrow-right-s-line" />
            <span style={{ color: '#991B1B', fontWeight: 600 }}>{news.category}</span>
          </nav>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#991B1B', color: '#fff', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600 }}>
              {news.category}
            </span>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#F3F4F6', color: '#6B7280', borderRadius: '100px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <i className="ri-calendar-line" />
              {news.date}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111827', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {news.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'flex-start' }}>
          {/* Article */}
          <article>
            {/* Cover Image */}
            <div style={{
              height: '360px',
              background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '2.5rem',
            }}>
              <i className="ri-newspaper-line" style={{ fontSize: '4rem', color: '#9CA3AF' }} />
            </div>

            {/* Content */}
            <div style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: '#374151' }}>
              {paragraphs.map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '2rem 0 0.75rem' }}>{para.replace(/\*\*/g, '')}</h3>
                }
                if (para.startsWith('- ')) {
                  const items = para.split('\n').filter(l => l.startsWith('- '))
                  return (
                    <ul key={i} style={{ margin: '1rem 0', paddingLeft: '0', listStyle: 'none' }}>
                      {items.map((item, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.625rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                          <i className="ri-checkbox-circle-fill" style={{ color: '#991B1B', flexShrink: 0, marginTop: '0.2rem' }} />
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return <p key={i} style={{ marginBottom: '1.25rem' }}>{para}</p>
              })}
            </div>

            {/* Tags */}
            <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>标签：</span>
              {news.tags.map(tag => (
                <span key={tag} style={{ padding: '0.25rem 0.625rem', backgroundColor: '#F3F4F6', color: '#6B7280', borderRadius: '4px', fontSize: '0.78rem' }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '1.5rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#6B7280' }}>分享至：</span>
              {['ri-wechat-line', 'ri-weibo-line', 'ri-linkedin-line'].map(icon => (
                <button key={icon} style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: '#F3F4F6', color: '#6B7280',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.125rem',
                  transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#991B1B'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F3F4F6'; e.currentTarget.style.color = '#6B7280' }}
                >
                  <i className={icon} />
                </button>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '96px' }}>
            {/* Company Card */}
            <div style={{ padding: '1.5rem', backgroundColor: '#F9FAFB', borderRadius: '12px', border: '1px solid #E5E7EB', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #991B1B, #7F1D1D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.875rem' }}>SH</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827' }}>三合液压</div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>SANHE HYDRAULICS</div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.65, marginBottom: '1rem' }}>
                致力于液压集成块设计、制造及液压系统解决方案，覆盖三大品牌产品线。
              </p>
              <Link to="/contact" style={{
                display: 'block', textAlign: 'center', padding: '0.625rem',
                backgroundColor: '#991B1B', color: '#fff', borderRadius: '8px',
                fontSize: '0.82rem', fontWeight: 600,
              }}>
                立即联系
              </Link>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '1rem' }}>相关文章</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {related.map(item => (
                    <Link key={item.id} to={`/news/${item.id}`} style={{
                      display: 'flex', gap: '0.875rem',
                      padding: '0.875rem',
                      backgroundColor: '#fff',
                      borderRadius: '10px',
                      border: '1px solid #E5E7EB',
                      transition: 'border-color 0.15s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#991B1B'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                    >
                      <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '6px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="ri-newspaper-line" style={{ color: '#D1D5DB', fontSize: '1.25rem' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#111827', lineHeight: 1.4, marginBottom: '0.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{item.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Back */}
      <section style={{ padding: '2rem 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <Link to="/news" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6B7280', fontWeight: 600 }}>
            <i className="ri-arrow-left-line" /> 返回新闻列表
          </Link>
        </div>
      </section>
    </div>
  )
}
