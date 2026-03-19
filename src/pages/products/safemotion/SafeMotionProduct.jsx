import { useParams, Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { safemotionCategories } from '../../../data/products/safemotionProducts'

function findProduct(productId) {
  for (const cat of safemotionCategories) {
    for (const sub of cat.subcategories) {
      for (const product of sub.products) {
        if (product.id === productId) return { product, sub, cat }
      }
    }
  }
  return null
}

export default function SafeMotionProduct() {
  const { productId } = useParams()
  const result = findProduct(productId)

  if (!result) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>产品未找到</p>
        <Link to="/products/safemotion" className="btn-primary">返回 Safe Motion</Link>
      </div>
    )
  }

  const { product, sub, cat } = result

  const specRows = [
    product.structure && { label: '结构形式', value: product.structure },
    product.control && { label: '控制方式', value: product.control },
    product.mounting && { label: '安装方式', value: product.mounting },
    product.config && { label: '配置形式', value: product.config },
    product.failSafe && { label: '故障安全', value: product.failSafe },
    product.command && { label: '指令输入', value: product.command },
    product.feedback && { label: '位置反馈', value: product.feedback },
    product.pilotValve && { label: '先导阀', value: product.pilotValve },
    product.function && { label: '功能', value: product.function },
    product.actuator && { label: '驱动方式', value: product.actuator },
    product.controlMode && { label: '控制方式', value: product.controlMode },
    product.maxBore && { label: '最大缸径', value: product.maxBore },
    product.maxStroke && { label: '标准行程', value: product.maxStroke },
    product.integrated && { label: '集成功能', value: product.integrated },
  ].filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb">
            <Link to="/products">产品</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to="/products/safemotion">Safe Motion</Link>
            <i className="ri-arrow-right-s-line" />
            <span>{product.model}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                {cat.name} › {sub.name}
              </div>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#FEF2F2',
                borderRadius: '8px',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#B81C22',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}>
                {product.model}
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                {product.name}
              </h1>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '2rem' }}>{product.nameEn}</p>

              {/* Key Performance Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {product.maxPressure && (
                  <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>最大工作压力</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}>{product.maxPressure}</div>
                  </div>
                )}
                {product.maxFlow && (
                  <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #E5E7EB', gridColumn: 'span 2' }}>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>额定流量</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}>{product.maxFlow}</div>
                  </div>
                )}
                {product.responseTime && (
                  <div style={{ padding: '1rem', backgroundColor: '#FEF2F2', borderRadius: '10px', border: '1px solid #FECACA' }}>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>响应时间</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#B81C22', fontFamily: 'Space Grotesk, sans-serif' }}>{product.responseTime}</div>
                  </div>
                )}
              </div>

              {/* Nominal Sizes */}
              {product.nominalSizes && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                    通径规格
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product.nominalSizes.map(size => (
                      <span key={size} style={{
                        padding: '0.35rem 0.75rem',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        fontFamily: 'Space Grotesk, sans-serif',
                        border: '1px solid #E5E7EB',
                      }}>
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bus Protocols */}
              {product.buses && (
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                    支持总线协议
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product.buses.map(bus => (
                      <span key={bus} style={{
                        padding: '0.3rem 0.75rem',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        fontFamily: 'Space Grotesk, sans-serif',
                        border: '1px solid #E5E7EB',
                      }}>
                        {bus}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specs Table */}
            <div>
              <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '14px', border: '1px solid #E5E7EB' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
                  技术规格
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr key={row.label} style={{ borderBottom: i < specRows.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                        <td style={{ padding: '0.75rem 0', fontSize: '0.8rem', color: '#9CA3AF', width: '35%', verticalAlign: 'top', paddingRight: '1rem' }}>
                          {row.label}
                        </td>
                        <td style={{ padding: '0.75rem 0', fontSize: '0.875rem', color: '#111827', fontWeight: 500, lineHeight: 1.5 }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Variants */}
                {product.variants && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #F3F4F6' }}>
                    <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>配置选项</h4>
                    {product.variants.map(v => (
                      <div key={v.label} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: '#B81C22', fontSize: '0.8rem', flexShrink: 0 }}>{v.label}：</span>
                        <span style={{ fontSize: '0.82rem', color: '#374151' }}>{v.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="product-detail__actions">
                  <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <i className="ri-file-download-line" /> 产品手册
                  </button>
                  <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <i className="ri-file-3-line" /> 二维图纸
                  </button>
                  <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <i className="ri-message-3-line" /> 快速咊询
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section style={{ padding: '3rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#374151', marginBottom: '1.5rem' }}>相关应用方案</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: '压铸机智能化', path: '/solutions/die-casting' },
              { label: '锂电池极片札机', path: '/solutions/battery-rolling' },
              { label: '注塑机射胶', path: '/solutions/injection-molding' },
              { label: '精密大型压机', path: '/solutions/press-machine' },
            ].map(item => (
              <Link key={item.path} to={item.path} style={{
                padding: '0.5rem 1.25rem',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#374151',
                fontWeight: 500,
                backgroundColor: '#F9FAFB',
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                transition: 'border-color 0.15s, color 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#B81C22'; e.currentTarget.style.color = '#B81C22' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151' }}
              >
                {item.label} <i className="ri-arrow-right-line" style={{ fontSize: '0.875rem' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
