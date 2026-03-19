import { useParams, Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { solutions } from '../../data/solutions'

export default function SolutionDetail() {
  const { solutionId } = useParams()
  const solution = solutions.find(s => s.id === solutionId)

  if (!solution) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>方案未找到</p>
        <Link to="/solutions" style={{ color: '#991B1B', fontWeight: 600 }}>返回解决方案</Link>
      </div>
    )
  }

  const brandPath = solution.brand === 'atlantic'
    ? '/products/atlantic'
    : solution.brand === 'safemotion'
      ? '/products/safemotion'
      : '/products/sanhe'

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        background: `linear-gradient(160deg, ${solution.color}12 0%, ${solution.color}06 100%)`,
        borderBottom: '1px solid #E5E7EB',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '350px', height: '350px', borderRadius: '50%', background: `radial-gradient(circle, ${solution.color}15 0%, transparent 70%)`, filter: 'blur(40px)' }} />

        <div className="container" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
            <Link to="/solutions" style={{ color: '#9CA3AF' }}>解决方案</Link>
            <i className="ri-arrow-right-s-line" />
            <span style={{ color: solution.color, fontWeight: 600 }}>{solution.name}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 0.875rem',
                borderRadius: '100px',
                backgroundColor: `${solution.color}12`,
                border: `1px solid ${solution.color}25`,
                marginBottom: '1.25rem',
              }}>
                <i className={solution.icon} style={{ color: solution.color, fontSize: '0.875rem' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: solution.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {solution.nameEn}
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, color: '#111827', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                {solution.name}
              </h1>
              <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
                {solution.desc}
              </p>

              {/* Challenges */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  行业痛点
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                  {solution.challenges.map((c, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                      padding: '0.625rem 0.875rem',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '8px',
                      border: '1px solid #E5E7EB',
                    }}>
                      <i className="ri-error-warning-line" style={{ color: '#F59E0B', flexShrink: 0, marginTop: '0.1rem' }} />
                      <span style={{ fontSize: '0.82rem', color: '#374151' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  方案优势
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {solution.keyFeatures.map(f => (
                    <span key={f} style={{
                      display: 'flex', alignItems: 'center', gap: '0.375rem',
                      padding: '0.4rem 0.875rem',
                      backgroundColor: `${solution.color}10`,
                      color: solution.color,
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      border: `1px solid ${solution.color}20`,
                    }}>
                      <i className="ri-checkbox-circle-line" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Core Products */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '14px',
                border: `1px solid ${solution.color}20`,
                boxShadow: `0 4px 20px ${solution.color}10`,
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                  核心产品配置
                </div>
                <div style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {solution.products}
                </div>
                <Link to={brandPath} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  backgroundColor: solution.color,
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}>
                  查看产品详情 <i className="ri-arrow-right-line" />
                </Link>
              </div>

              {/* Die Casting Stages */}
              {solution.stages && (
                <div style={{
                  padding: '2rem',
                  backgroundColor: '#fff',
                  borderRadius: '14px',
                  border: '1px solid #E5E7EB',
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
                    控制阶段说明
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {solution.stages.map((stage, i) => (
                      <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '32px', height: '32px', flexShrink: 0,
                          borderRadius: '50%',
                          backgroundColor: solution.color,
                          color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                        }}>
                          {i + 1}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111827' }}>{stage.name}</div>
                          {stage.speed && stage.speed !== '—' && (
                            <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '0.1rem', fontFamily: 'Space Grotesk, sans-serif' }}>{stage.speed}</div>
                          )}
                          <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '0.1rem' }}>{stage.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#F9FAFB',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '0.875rem', color: '#374151', marginBottom: '1rem', fontWeight: 500 }}>
                  需要该行业的详细技术方案？
                </p>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  backgroundColor: '#991B1B',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}>
                  联系工程师 <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>其他行业解决方案</h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {solutions.filter(s => s.id !== solutionId).slice(0, 5).map(s => (
              <Link key={s.id} to={`/solutions/${s.id}`} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#374151',
                transition: 'all 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151' }}
              >
                <i className={s.icon} style={{ fontSize: '0.875rem' }} />
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
