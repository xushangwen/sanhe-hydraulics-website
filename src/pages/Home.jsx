import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../styles/home.css'
import { newsList } from '../data/news'

const bannerSlides = [
  {
    id: 1,
    tag: '液压集成解决方案',
    title: '定制液压集成阀组',
    subtitle: '整体结构简洁紧凑，密封性能好，安装维护方便',
    cta: '了解产品',
    ctaPath: '/products/sanhe',
  },
  {
    id: 2,
    tag: '控制驱动 / 提升能效',
    title: '三合液压阀块',
    subtitle: '确保系统控制可靠性的最佳先决条件',
    cta: '查看解决方案',
    ctaPath: '/solutions',
  },
  {
    id: 3,
    tag: '追求响应和精度',
    title: '优化流道几何',
    subtitle: '减少能量损失，提升系统响应速度与控制精度',
    cta: '技术研发',
    ctaPath: '/technology',
  },
]

const productCards = [
  {
    id: 'sanhe',
    title: '三合液压阀块',
    subtitle: '标准 & 定制',
    desc: '铝合金 / 钢制，覆盖低中高压全系列，内部流道短、弯道少。',
    icon: 'ri-tools-line',
    path: '/products/sanhe',
    tags: ['标准阀块', '定制阀块', '液压泵站'],
  },
  {
    id: 'pump',
    title: '液压泵站',
    subtitle: '最高350bar / 100kW',
    desc: '小中大型及特种泵站，采用优质动力泵/电机/控制阀组/过滤器。',
    icon: 'ri-settings-3-line',
    path: '/products/sanhe',
    tags: ['小型≤30kW', '大型至100kW', '特种定制'],
  },
  {
    id: 'atlantic',
    title: 'Atlantic 意大利液压阀',
    subtitle: '23大类 · 中国总代',
    desc: '成立1979年，意大利摩德纳，覆盖溢流阀、方向阀、比例阀等全系列。',
    icon: 'ri-global-line',
    path: '/products/atlantic',
    tags: ['溢流阀', '方向阀', '比例插装阀'],
    badge: '🇮🇹 唯一总代',
  },
  {
    id: 'safemotion',
    title: 'Safe Motion 电液控制',
    subtitle: '国产高端 · 专精特新',
    desc: '高频响伺服比例阀、数字电液执行器，支持全总线协议。',
    icon: 'ri-cpu-line',
    path: '/products/safemotion',
    tags: ['高频响阀', '比例方向阀', '数字执行器'],
    badge: '子公司',
  },
]

const markets = [
  { name: '冶金', icon: 'ri-building-4-line', path: '/solutions/metallurgy' },
  { name: '海事海工', icon: 'ri-ship-2-line', path: '/solutions/marine' },
  { name: '港口机械', icon: 'ri-anchor-line', path: '/solutions/port' },
  { name: '新能源', icon: 'ri-wind-line', path: '/solutions/renewable-energy' },
  { name: '工程机械', icon: 'ri-hammer-line', path: '/solutions/construction' },
  { name: '隧道机械', icon: 'ri-road-map-line', path: '/solutions/tunnel' },
]

const stats = [
  { value: '>1,500', unit: '吨/年', label: '年产量', icon: 'ri-bar-chart-2-line' },
  { value: '25,000+', unit: '只/年', label: '年产工业阀块', icon: 'ri-stack-line' },
  { value: '10,000+', unit: '套/年', label: '装配测试阀组', icon: 'ri-settings-line' },
  { value: '1,000+', unit: 'kg', label: '最大单件重量', icon: 'ri-weight-line' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const num = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(num)) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * num))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ stat, animate }) {
  const num = parseFloat(stat.value.replace(/[^0-9.]/g, ''))
  const prefix = stat.value.startsWith('>') ? '>' : ''
  const suffix = stat.value.includes('+') ? '+' : ''
  const count = useCountUp(stat.value, 1800, animate)

  return (
    <div className="stat-item">
      <div className="stat-item__icon-wrap">
        <i className={stat.icon} />
      </div>
      <div className="stat-item__value">
        {prefix}{animate ? count.toLocaleString() : num.toLocaleString()}{suffix}
        <span className="stat-item__unit">{stat.unit}</span>
      </div>
      <div className="stat-item__label">{stat.label}</div>
    </div>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const slide = bannerSlides[currentSlide]

  return (
    <div>
      {/* ── Hero Banner ── */}
      <section id="hero" className="hero">
        <div className="container hero__layout">

          {/* Left: Text Content */}
          <div className="hero__content">
            <div className="hero__tag">
              <span className="hero__tag-dot" />
              <span className="hero__tag-text">{slide.tag}</span>
            </div>
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__subtitle">{slide.subtitle}</p>
            <div className="hero__ctas">
              <Link to={slide.ctaPath} className="hero__btn-primary">
                {slide.cta}
                <i className="ri-arrow-right-line" />
              </Link>
              <Link to="/contact" className="hero__btn-secondary">
                快速咨询
              </Link>
            </div>
            <div className="hero__indicators">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="hero__indicator"
                  style={{ width: i === currentSlide ? '2rem' : '0.75rem' }}
                  aria-label={`幻灯片 ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="hero__image-area">
            <div className="hero__image-placeholder">
              <i className="ri-image-line" />
              <span>产品展示图</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <i className="ri-arrow-down-line" />
        </div>
      </section>

      {/* ── Product Entry Cards ── */}
      <section id="products-overview" className="products-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">产品体系</span>
            <h2 className="section-title">三大产品线，覆盖液压全系需求</h2>
            <p className="section-subtitle" style={{ maxWidth: '560px', margin: '0.75rem auto 0' }}>
              自制阀块 + 意大利进口液压阀 + 国产高端电液控制，为客户提供一站式液压解决方案
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {productCards.map((card) => (
              <Link key={card.id} to={card.path} className="product-card">
                {/* Image Placeholder */}
                <div className="product-card__image">
                  <div className="product-card__image-placeholder">
                    <i className={card.icon} />
                    <span>产品图</span>
                  </div>
                  {card.badge && (
                    <span
                      className="product-card__badge"
                      style={{ backgroundColor: '#FEF2F2', color: '#B81C22', border: '1px solid rgba(184,28,34,0.15)' }}
                    >
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__title">{card.title}</h3>
                  <div className="product-card__subtitle">{card.subtitle}</div>
                  <p className="product-card__desc">{card.desc}</p>
                  <div className="product-card__tags">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="product-card__tag"
                        style={{ backgroundColor: '#FEF2F2', color: '#B81C22' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="product-card__arrow" style={{ color: '#B81C22' }}>
                    查看详情 <i className="ri-arrow-right-line" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Applications ── */}
      <section id="markets" className="markets-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">市场应用</span>
            <h2 className="section-title">六大行业，深度赋能</h2>
            <p className="section-subtitle">冶金、海工、港口、新能源、工程机械、隧道……三合液压覆盖工业液压核心应用场景</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {markets.map((market) => (
              <Link key={market.name} to={market.path} className="market-card">
                <div className="market-card__icon">
                  <i className={market.icon} />
                </div>
                <div>
                  <div className="market-card__name">{market.name}</div>
                  <div className="market-card__link-hint">查看解决方案 →</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/solutions"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem', fontSize: '0.9rem' }}
            >
              查看全部解决方案 <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="stats-section" ref={statsRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ color: '#FCA5A5' }}>数字实力</span>
            <h2 className="section-title" style={{ color: '#fff' }}>制造能力，数字为证</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stats-cell">
                <StatItem stat={stat} animate={statsVisible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section id="partners" className="partners-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">战略合作</span>
            <h2 className="section-title">权威品牌，强强联合</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Atlantic Card */}
            <div className="partner-card">
              <div className="partner-card__icon">
                <i className="ri-global-line" />
              </div>
              <div>
                <p className="partner-card__meta">🇮🇹 意大利 · 成立1979年</p>
                <h3 className="partner-card__name">Atlantic Fluid Tech</h3>
                <p className="partner-card__desc">6大生产工厂 · 15,400㎡ · 全球6处分支 · 年均逾600项目</p>
                <span className="partner-card__tag">中国区唯一代理商（2020授权）</span>
              </div>
            </div>

            {/* Safe Motion Card */}
            <div className="partner-card">
              <div className="partner-card__icon">
                <i className="ri-cpu-line" />
              </div>
              <div>
                <p className="partner-card__meta">🏭 北京 · 子公司</p>
                <h3 className="partner-card__name">Safe Motion</h3>
                <p className="partner-card__desc">高性能电液控制产品 · "专精特新"路线 · 全总线协议支持</p>
                <span className="partner-card__tag">三合液压全资子公司</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 客户案例 ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">客户案例</span>
            <h2 className="section-title">服务众多行业领先企业</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem', alignItems: 'center' }}>
            {[
              '三一重工', '中联重科', '徐工集团', '柳工机械', '山河智能',
              '振华重工', '中国中车', '中船重工', '宝钢集团', '鞍钢集团'
            ].map((client, idx) => (
              <div key={idx} style={{
                height: '100px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#374151', marginBottom: '0.25rem' }}>
                    {client}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF', letterSpacing: '0.05em' }}>LOGO</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News Preview ── */}
      <section id="news-preview" className="news-section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tag">最新动态</span>
              <h2 className="section-title">新闻资讯</h2>
            </div>
            <Link to="/news" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: '#B81C22' }}>
              查看全部 <i className="ri-arrow-right-line" />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {newsList.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`} className="news-card">
                <div className="news-card__image">
                  <i className="ri-newspaper-line" />
                </div>
                <div className="news-card__body">
                  <div className="news-card__meta">
                    <span className="news-card__category">{news.category}</span>
                    <span className="news-card__date">{news.date}</span>
                  </div>
                  <h3 className="news-card__title">{news.title}</h3>
                  <p className="news-card__excerpt">{news.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact-cta" className="contact-cta-section">
        <div className="container contact-cta-section__inner">
          <h2 className="contact-cta-section__title">有液压需求？立即联系我们</h2>
          <p className="contact-cta-section__subtitle">
            专业工程师团队，为您提供从需求分析到方案交付的全程服务
          </p>
          <div className="contact-cta-section__actions">
            <Link to="/contact" className="contact-cta-section__btn-white">在线留言</Link>
            <a href="tel:+865198648768" className="contact-cta-section__btn-outline">
              <i className="ri-phone-line" />
              +86 519 8648 7689
            </a>
            <a href="mailto:sales@czsanhe.net" className="contact-cta-section__btn-outline">
              <i className="ri-mail-line" />
              sales@czsanhe.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
