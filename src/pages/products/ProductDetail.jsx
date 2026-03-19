import { useParams, Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

export default function ProductDetail() {
  const { brand, productId } = useParams()

  return (
    <div>
      <section style={{ padding: '4rem 0', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
            <Link to="/products" style={{ color: '#9CA3AF' }}>产品</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to={`/products/${brand}`} style={{ color: '#9CA3AF' }}>{brand}</Link>
            <i className="ri-arrow-right-s-line" />
            <span style={{ color: '#B81C22', fontWeight: 600 }}>{productId}</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827' }}>{productId}</h1>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            padding: '3rem',
            backgroundColor: '#F9FAFB',
            borderRadius: '16px',
            border: '1px solid #E5E7EB',
            textAlign: 'center',
          }}>
            <i className="ri-box-3-line" style={{ fontSize: '3rem', color: '#9CA3AF', display: 'block', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
              产品详情页（规格参数、尺寸图、性能曲线）
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '2rem' }}>
              实际产品参数请联系三合液压工程师获取完整资料
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              backgroundColor: '#B81C22', color: '#fff',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem',
            }}>
              快速询价 <i className="ri-send-plane-line" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
