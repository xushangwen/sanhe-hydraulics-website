import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { atlanticCategories, atlanticInfo } from '../../../data/products/atlanticProducts'

export default function AtlanticHome() {
  return (
    <div>
      {/* ── Hero ── */}
      <section id="atlantic-hero" className="page-hero" style={{ backgroundColor: '#111827', borderBottom: 'none', padding: '5rem 0 4rem' }}>
        <div className="container">
          <nav className="page-hero__breadcrumb">
            <Link to="/products" style={{ color: 'rgba(255,255,255,0.5)' }}>产品</Link>
            <i className="ri-arrow-right-s-line" style={{ color: 'rgba(255,255,255,0.3)' }} />
            <span style={{ color: '#fff' }}>Atlantic Fluid Tech</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', padding: '0.35rem 0.875rem', borderRadius: '100px', backgroundColor: 'rgba(184,28,34,0.15)', border: '1px solid rgba(184,28,34,0.3)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCA5A5', letterSpacing: '0.08em' }}>🇮🇹 ITALIAN HYDRAULICS · 意大利原装进口</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Atlantic Fluid Tech
              </h1>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
                {atlanticInfo.desc}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { value: String(atlanticInfo.founded), label: '成立年份' },
                  { value: `${atlanticInfo.factories}座`, label: '生产工厂' },
                  { value: atlanticInfo.area, label: '工厂面积' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '0.2rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#FCA5A5', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                三合液压 · 中国区唯一代理商
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                2020年，Atlantic Fluid Tech 正式授权三合液压（常州）有限公司为中国区唯一代理商，
                负责 Atlantic 全系液压阀产品在中国市场的销售及售后技术支持。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {['原厂正品，品质保障', '专业技术支持团队', '快速备件供应', '完善售后服务体系'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                    <i className="ri-check-double-line" style={{ color: '#B81C22', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 23 Categories Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">产品目录</span>
            <h2 className="section-title">23大类液压阀，覆盖全系需求</h2>
            <p className="section-subtitle">每类对应独立产品手册，参数详尽，支持 PDF 下载</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {atlanticCategories.map((cat) => (
              <Link key={cat.id} to={`/products/atlantic/${cat.id}`} className="atlantic-cat-card">
                <span className="atlantic-cat-card__num">{cat.num}</span>
                {cat.highlight && (
                  <span className="atlantic-cat-card__highlight">主力</span>
                )}
                <h3 className="atlantic-cat-card__name">{cat.nameCn}</h3>
                <div className="atlantic-cat-card__name-en">{cat.nameEn}</div>
                {cat.subtypes && cat.subtypes.length > 0 && (
                  <div className="atlantic-cat-card__subtypes">
                    {cat.subtypes.slice(0, 3).join(' · ')}
                    {cat.subtypes.length > 3 && ' …'}
                  </div>
                )}
                <div className="atlantic-cat-card__arrow">
                  查看型号 <i className="ri-arrow-right-line" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="atlantic-cta" className="contact-cta-section">
        <div className="container contact-cta-section__inner">
          <h2 className="contact-cta-section__title">需要 Atlantic 产品报价或技术咨询？</h2>
          <p className="contact-cta-section__subtitle">三合液压作为中国区唯一代理商，提供专业技术支持与快速报价</p>
          <div className="contact-cta-section__actions">
            <Link to="/contact" className="contact-cta-section__btn-white">立即咨询</Link>
            <a href="mailto:sales@czsanhe.net" className="contact-cta-section__btn-outline">
              <i className="ri-mail-line" /> sales@czsanhe.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
