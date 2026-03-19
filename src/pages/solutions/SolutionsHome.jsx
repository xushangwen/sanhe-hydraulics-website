import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { solutions } from '../../data/solutions'

const brandFilters = [
  { id: 'all', label: '全部行业' },
  { id: 'sanhe', label: '三合液压阀块' },
  { id: 'atlantic', label: 'Atlantic 液压阀' },
  { id: 'safemotion', label: 'Safe Motion 电控' },
]

export default function SolutionsHome() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? solutions
    : solutions.filter(s => s.brand === activeFilter)

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(160deg, #111827 0%, #1E3A5F 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(153,27,27,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '680px' }}>
            <span className="section-tag" style={{ color: '#FCA5A5' }}>解决方案</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              覆盖11大行业<br />深度赋能工业液压
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              从冶金、海工、港口等传统重工业，到压铸机、注塑机、锂电轧机等高端智能制造，
              三合液压提供针对性的液压集成解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {brandFilters.map(filter => (
              <button key={filter.id} onClick={() => setActiveFilter(filter.id)} style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeFilter === filter.id ? '#991B1B' : '#E5E7EB',
                backgroundColor: activeFilter === filter.id ? '#991B1B' : '#fff',
                color: activeFilter === filter.id ? '#fff' : '#374151',
                transition: 'all 0.15s',
                cursor: 'pointer',
              }}>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((solution) => (
              <Link key={solution.id} to={`/solutions/${solution.id}`} style={{
                borderRadius: '14px',
                border: '1px solid #E5E7EB',
                backgroundColor: '#fff',
                overflow: 'hidden',
                transition: 'all 0.25s',
                display: 'block',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = solution.color }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB' }}
              >
                {/* Card Top */}
                <div style={{
                  padding: '1.75rem',
                  background: `linear-gradient(135deg, ${solution.color}12, ${solution.color}06)`,
                  borderBottom: '1px solid #F3F4F6',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{
                    width: '48px', height: '48px', flexShrink: 0,
                    borderRadius: '12px',
                    backgroundColor: `${solution.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${solution.color}20`,
                  }}>
                    <i className={solution.icon} style={{ fontSize: '1.5rem', color: solution.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827' }}>{solution.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.1rem' }}>{solution.nameEn}</div>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {solution.desc}
                  </p>

                  {/* Core Product */}
                  <div style={{ marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#F9FAFB', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: '0.68rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>核心产品</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#374151' }}>{solution.products}</div>
                  </div>

                  {/* Key Features */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                    {solution.keyFeatures.map(f => (
                      <span key={f} style={{
                        padding: '0.2rem 0.625rem',
                        backgroundColor: `${solution.color}10`,
                        color: solution.color,
                        borderRadius: '100px',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                      }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.82rem', fontWeight: 600, color: solution.color }}>
                    查看方案详情 <i className="ri-arrow-right-line" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
            找不到您所需的行业方案？
          </h3>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
            三合液压提供定制液压解决方案，联系我们的工程师团队，描述您的应用场景
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2.25rem', backgroundColor: '#991B1B', color: '#fff',
            borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem',
          }}>
            定制咨询 <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </div>
  )
}
