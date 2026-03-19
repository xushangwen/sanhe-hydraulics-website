import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { sanheCategories } from '../../../data/products/sanheProducts'

const categoryIcons = {
  'standard-valve-block': 'ri-layout-masonry-line',
  'custom-valve-block': 'ri-settings-4-line',
  'pump-station': 'ri-engine-line',
}

export default function SanheHome() {
  return (
    <div>
      {/* ── Hero ── */}
      <section id="sanhe-hero" className="page-hero" style={{ backgroundColor: '#111827', borderBottom: 'none', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <nav className="page-hero__breadcrumb">
              <Link to="/products" style={{ color: 'rgba(255,255,255,0.5)' }}>产品</Link>
              <i className="ri-arrow-right-s-line" style={{ color: 'rgba(255,255,255,0.3)' }} />
              <span style={{ color: '#fff' }}>三合液压自制产品</span>
            </nav>
            <span className="section-tag" style={{ color: '#FCA5A5', backgroundColor: 'rgba(184,28,34,0.15)', border: '1px solid rgba(184,28,34,0.3)' }}>三合液压</span>
            <h1 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem', marginTop: '1rem' }}>
              自主研发 · 精益制造
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              三合液压阀块可简化液压系统设计和安装，便于实现集成化和标准化，有利于降低制造成本、提高精度及可靠性。
              覆盖铝合金与钢制全系列，工厂5000㎡，年产25,000+只。
            </p>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sanheCategories.map((cat) => (
              <div key={cat.id} style={{
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                {/* Category Header */}
                <div style={{
                  padding: '2rem 2.5rem',
                  borderBottom: '1px solid #F3F4F6',
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                }}>
                  <div style={{
                    width: '56px', height: '56px', flexShrink: 0,
                    borderRadius: '14px',
                    backgroundColor: '#FEF2F2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={categoryIcons[cat.id]} style={{ fontSize: '1.75rem', color: '#B81C22' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      {cat.nameEn}
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
                      {cat.name}
                    </h2>
                  </div>
                </div>

                <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  {/* Left: Description */}
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                      {cat.desc}
                    </p>

                    {/* Features */}
                    {cat.features && (
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                          产品特点
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {cat.features.map(f => (
                            <span key={f} style={{
                              display: 'flex', alignItems: 'center', gap: '0.375rem',
                              padding: '0.3rem 0.75rem',
                              backgroundColor: '#F9FAFB',
                              borderRadius: '6px',
                              fontSize: '0.8rem',
                              color: '#374151',
                              border: '1px solid #E5E7EB',
                            }}>
                              <i className="ri-check-line" style={{ color: '#B81C22', fontSize: '0.875rem' }} />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Process */}
                    {cat.process && (
                      <div style={{ marginTop: '1.5rem' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                          服务流程
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', alignItems: 'center' }}>
                          {cat.process.map((step, i) => (
                            <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <span style={{
                                padding: '0.25rem 0.625rem',
                                backgroundColor: '#FEF2F2',
                                color: '#B81C22',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 500,
                              }}>
                                {step}
                              </span>
                              {i < cat.process.length - 1 && (
                                <i className="ri-arrow-right-s-line" style={{ color: '#D1D5DB', fontSize: '0.875rem' }} />
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link to={`/contact`} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      marginTop: '2rem',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#B81C22',
                      color: '#fff',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}>
                      快速询价 <i className="ri-send-plane-line" />
                    </Link>
                  </div>

                  {/* Right: Subcategories */}
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                      {cat.id === 'pump-station' ? '泵站规格' : '材料 / 子类型'}
                    </div>

                    {cat.subcategories && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {cat.subcategories.map((sub) => (
                          <div key={sub.id} style={{
                            padding: '1.25rem',
                            borderRadius: '10px',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#F9FAFB',
                          }}>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827', marginBottom: '0.375rem' }}>
                              {sub.name}
                            </div>

                            {sub.materials && (
                              <div style={{ fontSize: '0.78rem', color: '#6B7280' }}>
                                <span style={{ color: '#374151', fontWeight: 500 }}>材料：</span>
                                {sub.materials.join(' / ')}
                              </div>
                            )}
                            {sub.surface && (
                              <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '0.25rem' }}>
                                <span style={{ color: '#374151', fontWeight: 500 }}>表面处理：</span>
                                {sub.surface.join(' / ')}
                              </div>
                            )}
                            {sub.desc && (
                              <div style={{ fontSize: '0.78rem', color: '#6B7280' }}>{sub.desc}</div>
                            )}
                            {sub.power && (
                              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: '#6B7280', marginTop: '0.375rem' }}>
                                <span><span style={{ color: '#374151', fontWeight: 500 }}>功率：</span>{sub.power}</span>
                                <span><span style={{ color: '#374151', fontWeight: 500 }}>压力：</span>{sub.pressure}</span>
                              </div>
                            )}
                            {sub.application && (
                              <div style={{ fontSize: '0.78rem', color: '#B81C22', marginTop: '0.375rem' }}>
                                <i className="ri-focus-2-line" style={{ marginRight: '0.25rem' }} />
                                {sub.application}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Stats */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { label: '工厂面积', value: '5,000㎡' },
              { label: '年产量', value: '>1,500 吨' },
              { label: '年产阀块', value: '25,000+ 只' },
              { label: '最大单件', value: '1,000+ kg' },
            ].map(item => (
              <div key={item.label} style={{
                textAlign: 'center', padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.375rem' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
