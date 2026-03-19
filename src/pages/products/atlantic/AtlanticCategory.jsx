import { useParams, Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { atlanticCategories, getAtlanticModels } from '../../../data/products/atlanticProducts'

export default function AtlanticCategory() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const category = atlanticCategories.find(c => c.id === categoryId) || atlanticCategories[0]
  const models = getAtlanticModels(categoryId)

  return (
    <div>
      {/* ── Page Hero ── */}
      <section id="category-hero" className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb">
            <Link to="/products">产品</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to="/products/atlantic">Atlantic</Link>
            <i className="ri-arrow-right-s-line" />
            <span>{category.nameCn}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{
              width: '64px', height: '64px', flexShrink: 0,
              borderRadius: '16px',
              backgroundColor: '#111827',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem', fontWeight: 800, color: '#fff',
              fontFamily: 'Space Grotesk, sans-serif',
            }}>
              {category.num}
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>{category.nameEn}</div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
                {category.nameCn}
              </h1>
            </div>
          </div>

          {category.subtypes && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
              {category.subtypes.map(s => (
                <span key={s} style={{
                  padding: '0.3rem 0.75rem',
                  backgroundColor: '#F3F4F6',
                  color: '#374151',
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  border: '1px solid #E5E7EB',
                }}>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Product Model List Table ── */}
      <section id="model-list" style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>产品型号列表</h2>
              <p style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '0.25rem' }}>
                共 {models.length} 款型号 · 点击型号查看完整规格参数
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.82rem' }}>
                <i className="ri-file-download-line" /> 下载产品手册
              </button>
              <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.82rem' }}>
                <i className="ri-message-3-line" /> 询价咨询
              </Link>
            </div>
          </div>

          <div className="product-table-wrapper">
            <table className="product-table">
              <thead>
                <tr>
                  <th>型号</th>
                  <th>类型描述</th>
                  <th>最大压力</th>
                  <th>额定流量</th>
                  <th>腔体型号</th>
                  <th>重量</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr
                    key={m.id}
                    onClick={() => navigate(`/products/atlantic/${categoryId}/${m.id}`)}
                  >
                    <td className="product-table__model-cell">
                      {m.highlight && (
                        <span style={{
                          display: 'inline-block',
                          marginRight: '0.5rem',
                          padding: '0.1rem 0.4rem',
                          backgroundColor: '#FEF3C7',
                          color: '#92400E',
                          borderRadius: '4px',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          verticalAlign: 'middle',
                        }}>主力</span>
                      )}
                      {m.model}
                    </td>
                    <td style={{ color: '#374151' }}>{m.type}</td>
                    <td style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{m.maxPressure}</td>
                    <td style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.maxFlow}</td>
                    <td style={{ color: '#9CA3AF' }}>{m.cavity}</td>
                    <td style={{ color: '#9CA3AF' }}>{m.weight}</td>
                    <td>
                      <span className="product-table__action">
                        详情 <i className="ri-arrow-right-line" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '0.875rem' }}>
            * 参数以最新产品手册为准，如需完整选型资料请联系三合液压技术支持
          </p>
        </div>
      </section>

      {/* ── Bottom Nav ── */}
      <section style={{ padding: '1.5rem 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/products/atlantic"
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
          >
            <i className="ri-arrow-left-line" /> 返回所有类别
          </Link>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
          >
            获取报价 <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </div>
  )
}
