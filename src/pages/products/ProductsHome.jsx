import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../styles/products.css'

const brands = [
  {
    id: 'sanhe',
    name: '三合液压自制产品',
    nameEn: 'Sanhe Hydraulics',
    path: '/products/sanhe',
    icon: 'ri-tools-line',
    desc: '立足自主研发与精益制造，标准液压阀块、定制集成块、液压泵站全系列，覆盖铝合金与钢制材料，适配各类工业液压场景。',
    highlights: ['标准液压阀块', '定制液压阀块', '液压泵站'],
    badge: null,
  },
  {
    id: 'atlantic',
    name: 'Atlantic Fluid Tech',
    nameEn: 'Italian Hydraulic Valves · 23 Categories',
    path: '/products/atlantic',
    icon: 'ri-global-line',
    desc: '意大利摩德纳，成立1979年，全球顶级液压控制阀制造商。三合液压为中国区唯一授权代理商，提供溢流阀、方向阀、比例插装阀等23大类产品。',
    highlights: ['溢流阀', '减压阀', '方向阀', '比例插装阀', '过中心阀', '分流集流阀'],
    badge: '🇮🇹 中国唯一总代',
  },
  {
    id: 'safemotion',
    name: 'Safe Motion',
    nameEn: 'Digital Electro-Hydraulic Control',
    path: '/products/safemotion',
    icon: 'ri-cpu-line',
    desc: '三合液压全资子公司，北京赛弗德克科技有限公司。专注高性能电液智能控制产品国产化，高频响伺服比例阀、数字电液执行器，全总线协议支持。',
    highlights: ['高频响伺服比例阀', '盖板插装阀', '比例方向阀', '数字电液执行器'],
    badge: '子公司 · 专精特新',
  },
]

export default function ProductsHome() {
  return (
    <div>
      {/* ── Hero ── */}
      <section id="products-hero" className="page-hero">
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag">产品体系</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111827', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              三大品牌，一站式液压方案
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7 }}>
              三合自制阀块 + 意大利 Atlantic 进口液压阀 + 国产 Safe Motion 电液控制，
              覆盖从基础液压集成到高端智能控制的全系需求。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {brands.map((brand, idx) => (
              <div key={brand.id} style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
              }}>
                {/* Image Placeholder (left) */}
                {idx % 2 === 0 && (
                  <div style={{
                    backgroundColor: '#111827',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '3rem 2rem', gap: '1rem',
                    minHeight: '280px',
                  }}>
                    <div style={{
                      width: '80px', height: '80px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(184,28,34,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className={brand.icon} style={{ fontSize: '2.5rem', color: '#FCA5A5' }} />
                    </div>
                    {brand.badge && (
                      <span style={{
                        padding: '0.3rem 0.875rem',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                        borderRadius: '100px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}>
                        {brand.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Content Panel */}
                <div style={{ padding: '3rem', backgroundColor: '#fff' }}>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {brand.nameEn}
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {brand.name}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {brand.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {brand.highlights.map(h => (
                      <span key={h} style={{
                        padding: '0.3rem 0.75rem',
                        backgroundColor: '#FEF2F2',
                        color: '#B81C22',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        border: '1px solid rgba(184,28,34,0.15)',
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link to={brand.path} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    浏览产品 <i className="ri-arrow-right-line" />
                  </Link>
                </div>

                {/* Image Placeholder (right) */}
                {idx % 2 !== 0 && (
                  <div style={{
                    backgroundColor: '#111827',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '3rem 2rem', gap: '1rem',
                  }}>
                    <div style={{
                      width: '80px', height: '80px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(184,28,34,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className={brand.icon} style={{ fontSize: '2.5rem', color: '#FCA5A5' }} />
                    </div>
                    {brand.badge && (
                      <span style={{
                        padding: '0.3rem 0.875rem',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                        borderRadius: '100px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}>
                        {brand.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
