import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { safemotionInfo, safemotionCategories } from '../../../data/products/safemotionProducts'

export default function SafeMotionHome() {
  return (
    <div>
      {/* ── L0: Page Hero ── */}
      <section id="sm-hero" className="page-hero" style={{ backgroundColor: '#111827', borderBottom: 'none', padding: '5rem 0 4rem' }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" style={{ '--bc-color': 'rgba(255,255,255,0.4)' }}>
            <Link to="/products" style={{ color: 'rgba(255,255,255,0.5)' }}>产品</Link>
            <i className="ri-arrow-right-s-line" style={{ color: 'rgba(255,255,255,0.3)' }} />
            <span style={{ color: '#fff' }}>Safe Motion</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', padding: '0.35rem 0.875rem', borderRadius: '100px', backgroundColor: 'rgba(184,28,34,0.15)', border: '1px solid rgba(184,28,34,0.3)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCA5A5', letterSpacing: '0.06em' }}>
                  专精特新 · 高端液压国产化
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Safe Motion
              </h1>
              <div style={{ fontSize: '0.95rem', color: '#9CA3AF', marginBottom: '1.25rem' }}>
                {safemotionInfo.fullName}
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
                {safemotionInfo.desc}
              </p>

              {/* Bus Protocols */}
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>
                  全系支持总线协议
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {safemotionInfo.buses.map(bus => (
                    <span key={bus} style={{
                      padding: '0.25rem 0.625rem',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.7)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: 'Space Grotesk, sans-serif',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}>
                      {bus}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Category Overview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {safemotionCategories.map((cat, i) => (
                <div key={cat.id} style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{
                    width: '32px', height: '32px', flexShrink: 0,
                    borderRadius: '8px',
                    backgroundColor: 'rgba(184,28,34,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 700, color: '#FCA5A5',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>{cat.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.125rem' }}>{cat.nameEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── L1→L2→L3 Product Hierarchy ── */}
      <section id="sm-products" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          {safemotionCategories.map((L1) => (
            /* ── L1: Main Category ── */
            <div key={L1.id} className="sm-l1">
              <div className="sm-l1__header">
                <div className="sm-l1__accent" />
                <div>
                  <h2 className="sm-l1__title">{L1.name}</h2>
                  <div className="sm-l1__title-en">{L1.nameEn}</div>
                </div>
                <div className="sm-l1__count">
                  {L1.subcategories.reduce((acc, s) => acc + s.products.length, 0)} 款产品
                </div>
              </div>

              {L1.subcategories.map((L2) => (
                /* ── L2: Subcategory ── */
                <div key={L2.id} className="sm-l2">
                  <div className="sm-l2__title">
                    <span>
                      {L2.name}
                      <span className="sm-l2__title-en"> · {L2.nameEn}</span>
                    </span>
                    <span className="sm-l2__count">{L2.products.length} 款</span>
                  </div>

                  {/* ── L3: Product Cards ── */}
                  <div className="sm-l3-grid">
                    {L2.products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/safemotion/${product.id}`}
                        className="prod-card"
                      >
                        {/* Image Placeholder */}
                        <div className="prod-card__image">
                          <div className="prod-card__image-placeholder">
                            <i className="ri-cpu-line" />
                            <span>产品图</span>
                          </div>
                        </div>

                        <div className="prod-card__body">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                            <span className="prod-card__model">{product.model}</span>
                            {product.application && (
                              <span style={{
                                padding: '0.2rem 0.5rem',
                                backgroundColor: '#FEF3C7',
                                color: '#92400E',
                                borderRadius: '100px',
                                fontSize: '0.65rem',
                                fontWeight: 600,
                              }}>
                                {product.application}
                              </span>
                            )}
                          </div>

                          <div className="prod-card__name">{product.name}</div>
                          <div className="prod-card__name-en">{product.nameEn}</div>

                          <div className="prod-card__specs">
                            {product.nominalSizes && (
                              <div className="prod-card__spec">
                                <div className="prod-card__spec-label">通径规格</div>
                                <div className="prod-card__spec-value">
                                  DN{product.nominalSizes.slice(0, 2).join('/DN')}
                                  {product.nominalSizes.length > 2 && ` +${product.nominalSizes.length - 2}`}
                                </div>
                              </div>
                            )}
                            {product.maxPressure && (
                              <div className="prod-card__spec">
                                <div className="prod-card__spec-label">最大压力</div>
                                <div className="prod-card__spec-value">{product.maxPressure}</div>
                              </div>
                            )}
                            {product.responseTime && (
                              <div className="prod-card__spec prod-card__spec--highlight">
                                <div className="prod-card__spec-label">响应时间</div>
                                <div className="prod-card__spec-value">{product.responseTime}</div>
                              </div>
                            )}
                            {product.maxFlow && (
                              <div className="prod-card__spec prod-card__spec--full">
                                <div className="prod-card__spec-label">额定流量</div>
                                <div className="prod-card__spec-value">{product.maxFlow}</div>
                              </div>
                            )}
                            {product.buses && (
                              <div className="prod-card__spec prod-card__spec--full">
                                <div className="prod-card__spec-label">总线协议</div>
                                <div className="prod-card__spec-value" style={{ fontSize: '0.72rem', color: '#374151' }}>
                                  {product.buses.join(' · ')}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="prod-card__arrow">
                            查看详细参数 <i className="ri-arrow-right-line" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="sm-cta" className="contact-cta-section">
        <div className="container contact-cta-section__inner">
          <h2 className="contact-cta-section__title">Safe Motion 电液控制技术咨询</h2>
          <p className="contact-cta-section__subtitle">
            高频响阀、比例阀选型及系统集成方案，专业工程师为您服务
          </p>
          <div className="contact-cta-section__actions">
            <Link to="/contact" className="contact-cta-section__btn-white">立即咨询</Link>
            <Link to="/solutions/die-casting" className="contact-cta-section__btn-outline">
              查看应用案例 <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
