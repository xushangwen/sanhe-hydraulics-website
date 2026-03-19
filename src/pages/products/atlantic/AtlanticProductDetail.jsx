import { useParams, Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../../styles/products.css'
import { atlanticCategories, getAtlanticModels, atlanticProductExample } from '../../../data/products/atlanticProducts'

export default function AtlanticProductDetail() {
  const { categoryId, productId } = useParams()
  const category = atlanticCategories.find(c => c.id === categoryId) || atlanticCategories[0]
  const models = getAtlanticModels(categoryId)
  const model = models.find(m => m.id === productId) || models[0]

  // 使用 atlanticProductExample 的详细数据（当前 productId 匹配时），否则用型号列表数据
  const isExampleProduct = productId === 'CPLN-005-DPNA'
  const detail = isExampleProduct ? atlanticProductExample : null

  return (
    <div>
      {/* ── Page Hero / Breadcrumb ── */}
      <section id="product-detail-hero" className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb">
            <Link to="/products">产品</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to="/products/atlantic">Atlantic</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to={`/products/atlantic/${categoryId}`}>{category.nameCn}</Link>
            <i className="ri-arrow-right-s-line" />
            <span>{model.model}</span>
          </nav>
        </div>
      </section>

      {/* ── Product Detail Body ── */}
      <section id="product-detail-body" style={{ padding: '3rem 0 5rem', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>

            {/* Left: Image + Key Specs */}
            <div>
              {/* Image Placeholder */}
              <div className="product-detail__image" style={{ marginBottom: '1.5rem', position: 'static' }}>
                <div className="product-detail__image-placeholder">
                  <i className="ri-image-line" />
                  <span>产品图片</span>
                </div>
              </div>

              {/* Key Specs Row */}
              <div className="product-detail__key-specs">
                <div className="product-detail__key-spec">
                  <div className="product-detail__key-spec-label">最大压力</div>
                  <div className="product-detail__key-spec-value">{model.maxPressure}</div>
                </div>
                <div className="product-detail__key-spec">
                  <div className="product-detail__key-spec-label">额定流量</div>
                  <div className="product-detail__key-spec-value">{model.maxFlow}</div>
                </div>
                {model.cavity !== '—' && (
                  <div className="product-detail__key-spec">
                    <div className="product-detail__key-spec-label">腔体型号</div>
                    <div className="product-detail__key-spec-value">{model.cavity}</div>
                  </div>
                )}
                <div className="product-detail__key-spec">
                  <div className="product-detail__key-spec-label">重量</div>
                  <div className="product-detail__key-spec-value">{model.weight}</div>
                </div>
              </div>
            </div>

            {/* Right: Title + Specs + Order Codes */}
            <div>
              <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                {category.nameEn}
              </div>
              <h1 className="product-detail__model">{model.model}</h1>
              <p className="product-detail__type">{model.type}</p>
              {detail && <p className="product-detail__type-en" style={{ marginTop: '0.25rem' }}>{detail.type}</p>}

              {/* Technical Specs Card */}
              <div className="product-detail__specs-card" style={{ marginTop: '2rem' }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="ri-list-check-2" style={{ color: '#B81C22' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    技术参数
                  </span>
                </div>
                <table className="product-detail__specs-table">
                  <tbody>
                    <tr>
                      <td>类型</td>
                      <td>{model.type}</td>
                    </tr>
                    <tr>
                      <td>最大工作压力</td>
                      <td style={{ fontWeight: 600 }}>{model.maxPressure}</td>
                    </tr>
                    <tr>
                      <td>额定流量</td>
                      <td>{model.maxFlow}</td>
                    </tr>
                    {model.cavity !== '—' && (
                      <tr>
                        <td>腔体型号</td>
                        <td>{model.cavity}</td>
                      </tr>
                    )}
                    <tr>
                      <td>重量</td>
                      <td>{model.weight}</td>
                    </tr>
                    {detail && (
                      <>
                        <tr>
                          <td>污染等级</td>
                          <td>{detail.contamination}</td>
                        </tr>
                        <tr>
                          <td>安装扭矩</td>
                          <td>{detail.installTorque}</td>
                        </tr>
                        <tr>
                          <td>MTTFd</td>
                          <td>{detail.mttfd}</td>
                        </tr>
                        <tr>
                          <td>密封套件</td>
                          <td>{detail.sealKit}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Order Codes Table (only for detail product) */}
              {detail && detail.orderCodes && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
                    订货代码
                  </div>
                  <div className="product-detail__order-table-wrap">
                    <table className="product-detail__order-table">
                      <thead>
                        <tr>
                          <th>快速代码</th>
                          <th>标准压力</th>
                          <th>调节范围</th>
                          <th>压力增量/圈</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detail.orderCodes.map((code, i) => (
                          <tr key={code.quickCode} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                            <td>{code.quickCode}</td>
                            <td style={{ color: '#374151', fontWeight: 600 }}>{code.stdPressure}</td>
                            <td style={{ color: '#6B7280' }}>{code.adjustRange}</td>
                            <td style={{ color: '#6B7280' }}>{code.increment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '0.625rem' }}>
                    完整型号示例：{detail.orderCodes[0]?.fullModel}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="product-detail__actions">
                <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <i className="ri-file-download-line" /> PDF 下载
                </button>
                <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <i className="ri-file-3-line" /> 二维图纸
                </button>
                <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <i className="ri-message-3-line" /> 快速询价
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Models in Category ── */}
      <section id="related-models" style={{ padding: '3rem 0', backgroundColor: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#374151', marginBottom: '1.25rem' }}>
            {category.nameCn} — 其他型号
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {models.filter(m => m.id !== productId).map(m => (
              <Link
                key={m.id}
                to={`/products/atlantic/${categoryId}/${m.id}`}
                style={{
                  padding: '0.4rem 0.875rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#374151',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#B81C22'; e.currentTarget.style.color = '#B81C22' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151' }}
              >
                {m.model}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Nav ── */}
      <section style={{ padding: '1.5rem 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to={`/products/atlantic/${categoryId}`}
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
          >
            <i className="ri-arrow-left-line" /> 返回型号列表
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
