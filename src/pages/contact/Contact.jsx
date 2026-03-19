import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const contactInfo = [
  { icon: 'ri-building-line', label: '公司名称', value: '三合液压（常州）有限公司', color: '#991B1B' },
  { icon: 'ri-map-pin-line', label: '公司地址', value: '常州市武进高新技术产业开发区西湖西路万塔工业园区24号', color: '#1E3A5F' },
  { icon: 'ri-mail-line', label: '邮编', value: '213100', color: '#374151' },
  { icon: 'ri-phone-line', label: '联系电话', value: '+86 519 8648 7689', href: 'tel:+865198648768', color: '#991B1B' },
  { icon: 'ri-printer-line', label: '传真', value: '+86 519 8648 7689', color: '#374151' },
  { icon: 'ri-mail-send-line', label: '邮箱', value: 'sales@czsanhe.net', href: 'mailto:sales@czsanhe.net', color: '#991B1B' },
]

const inquiryTypes = ['产品询价', '技术咨询', '定制方案', 'Atlantic 产品', 'Safe Motion 产品', '合作洽谈', '其他']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '产品询价',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(160deg, #111827 0%, #1E3A5F 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(153,27,27,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '560px' }}>
            <span className="section-tag" style={{ color: '#FCA5A5' }}>联系我们</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              有需求？我们来解决
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              无论是产品选型、系统方案还是定制加工，三合液压工程师团队为您提供专业支持
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-start' }}>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                联系方式
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                工作日 8:30–17:30，我们的工程师团队随时为您服务
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {contactInfo.map((item) => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', flexShrink: 0,
                      borderRadius: '10px',
                      backgroundColor: `${item.color}12`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className={item.icon} style={{ fontSize: '1.125rem', color: item.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 600, color: item.color }}>
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#111827' }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div style={{
                height: '280px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                border: '1px solid #E5E7EB',
                gap: '0.75rem',
              }}>
                <i className="ri-map-2-line" style={{ fontSize: '2.5rem', color: '#9CA3AF' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>常州市武进区</div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '0.25rem' }}>万塔工业园区24号</div>
                </div>
                <a
                  href="https://maps.google.com/?q=常州市武进高新技术产业开发区西湖西路万塔工业园区24号"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1.25rem',
                    backgroundColor: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#374151',
                    display: 'flex', alignItems: 'center', gap: '0.375rem',
                  }}
                >
                  <i className="ri-external-link-line" /> 在地图中查看
                </a>
              </div>

              {/* Partners Quick Links */}
              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#F9FAFB', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                  关于合作品牌咨询
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  <Link to="/products/atlantic" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#065F46', fontWeight: 500 }}>
                    <i className="ri-global-line" /> Atlantic Fluid Tech 产品咨询 →
                  </Link>
                  <Link to="/products/safemotion" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#4C1D95', fontWeight: 500 }}>
                    <i className="ri-cpu-line" /> Safe Motion 电液控制产品 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                border: '1px solid #E5E7EB',
                padding: '2.5rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
              }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <div style={{
                      width: '72px', height: '72px',
                      borderRadius: '50%',
                      backgroundColor: '#D1FAE5',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}>
                      <i className="ri-check-line" style={{ fontSize: '2rem', color: '#065F46' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
                      消息已发送！
                    </h3>
                    <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                      我们的工程师将在1个工作日内与您联系，感谢您的信任。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', inquiryType: '产品询价', message: '' }) }}
                      style={{
                        padding: '0.75rem 1.75rem', backgroundColor: '#F3F4F6', color: '#374151',
                        borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem',
                      }}
                    >
                      再次发送
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                      在线留言
                    </h2>
                    <p style={{ color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '2rem' }}>
                      填写以下信息，工程师将尽快与您联系
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* Name + Company */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.375rem' }}>
                            姓名 <span style={{ color: '#991B1B' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="您的姓名"
                            style={{
                              width: '100%', padding: '0.625rem 0.875rem',
                              borderRadius: '8px', border: '1px solid #E5E7EB',
                              fontSize: '0.875rem', color: '#111827', backgroundColor: '#F9FAFB',
                              outline: 'none', boxSizing: 'border-box',
                              transition: 'border-color 0.15s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#991B1B'}
                            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.375rem' }}>
                            公司名称
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="您的公司"
                            style={{
                              width: '100%', padding: '0.625rem 0.875rem',
                              borderRadius: '8px', border: '1px solid #E5E7EB',
                              fontSize: '0.875rem', color: '#111827', backgroundColor: '#F9FAFB',
                              outline: 'none', boxSizing: 'border-box',
                              transition: 'border-color 0.15s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#991B1B'}
                            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                          />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.375rem' }}>
                            邮箱 <span style={{ color: '#991B1B' }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            style={{
                              width: '100%', padding: '0.625rem 0.875rem',
                              borderRadius: '8px', border: '1px solid #E5E7EB',
                              fontSize: '0.875rem', color: '#111827', backgroundColor: '#F9FAFB',
                              outline: 'none', boxSizing: 'border-box',
                              transition: 'border-color 0.15s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#991B1B'}
                            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.375rem' }}>
                            联系电话
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+86 ___________"
                            style={{
                              width: '100%', padding: '0.625rem 0.875rem',
                              borderRadius: '8px', border: '1px solid #E5E7EB',
                              fontSize: '0.875rem', color: '#111827', backgroundColor: '#F9FAFB',
                              outline: 'none', boxSizing: 'border-box',
                              transition: 'border-color 0.15s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#991B1B'}
                            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                          />
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.5rem' }}>
                          咨询类型
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {inquiryTypes.map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, inquiryType: type }))}
                              style={{
                                padding: '0.35rem 0.875rem',
                                borderRadius: '100px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                border: '1px solid',
                                borderColor: form.inquiryType === type ? '#991B1B' : '#E5E7EB',
                                backgroundColor: form.inquiryType === type ? '#991B1B' : '#F9FAFB',
                                color: form.inquiryType === type ? '#fff' : '#6B7280',
                                transition: 'all 0.15s',
                              }}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.375rem' }}>
                          需求描述 <span style={{ color: '#991B1B' }}>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="请描述您的液压需求：工作压力、流量、应用场景、数量等信息，我们的工程师将为您提供专业建议..."
                          style={{
                            width: '100%', padding: '0.75rem 0.875rem',
                            borderRadius: '8px', border: '1px solid #E5E7EB',
                            fontSize: '0.875rem', color: '#111827', backgroundColor: '#F9FAFB',
                            outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                            lineHeight: 1.65, fontFamily: 'inherit',
                            transition: 'border-color 0.15s',
                          }}
                          onFocus={e => e.target.style.borderColor = '#991B1B'}
                          onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          padding: '0.875rem',
                          backgroundColor: loading ? '#D1D5DB' : '#991B1B',
                          color: '#fff',
                          borderRadius: '10px',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          transition: 'all 0.2s',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                          cursor: loading ? 'not-allowed' : 'pointer',
                        }}
                        onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#B91C1C' }}
                        onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#991B1B' }}
                      >
                        {loading ? (
                          <>
                            <i className="ri-loader-4-line" style={{ animation: 'spin 1s linear infinite' }} />
                            发送中...
                          </>
                        ) : (
                          <>
                            <i className="ri-send-plane-line" />
                            发送留言
                          </>
                        )}
                      </button>

                      <p style={{ fontSize: '0.72rem', color: '#9CA3AF', textAlign: 'center' }}>
                        提交即代表您同意我们使用您的信息与您联系
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
