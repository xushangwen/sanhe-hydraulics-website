import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const coreValues = [
  {
    num: '01',
    title: '灵活制造',
    icon: 'ri-settings-3-line',
    desc: '多元灵活加工设备，严格品质管理，持续流程改进，满足客户多样化定制需求。',
    color: '#B81C22',
  },
  {
    num: '02',
    title: '卓越服务',
    icon: 'ri-customer-service-2-line',
    desc: '售前咨询 → 售中支持 → 售后维护，终身无忧全链条服务体系。',
    color: '#111827',
  },
  {
    num: '03',
    title: '人才驱动',
    icon: 'ri-team-line',
    desc: '用知识驱动机械的未来，持续投入人才培养与技术创新。',
    color: '#374151',
  },
]

const milestones = [
  { year: '2010', title: '公司成立', desc: '三合液压（常州）有限公司在常州武进高新区成立，专注液压集成块制造' },
  { year: '2015', title: '产能扩张', desc: '工厂扩建至5000㎡，引进先进CNC加工中心，年产能突破20,000只' },
  { year: '2018', title: '技术升级', desc: '建立完整质量管理体系，通过ISO 9001认证，成为多家知名企业供应商' },
  { year: '2020', title: 'Atlantic 授权', desc: '获得意大利Atlantic Fluid Tech中国区唯一代理商授权' },
  { year: '2022', title: '子公司成立', desc: '全资子公司北京赛弗德克成立，专注高端电液控制产品国产化' },
  { year: '2024', title: '持续创新', desc: '年产能达25,000+只，服务客户覆盖工程机械、港口、能源等多个领域' },
]

const mfgStats = [
  { label: '年产量', value: '>1,500 吨', icon: 'ri-scales-3-line' },
  { label: '年产工业阀块', value: '25,000–30,000 只', icon: 'ri-stack-line' },
  { label: '装配测试阀组', value: '>10,000 套', icon: 'ri-settings-line' },
  { label: '最大单件', value: '>1,000 kg', icon: 'ri-weight-line' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        backgroundColor: '#111827',
        position: 'relative',
      }}>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '680px' }}>
            <span className="section-tag" style={{ color: '#FCA5A5' }}>关于我们</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              三合液压（常州）<br />有限公司
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem' }}>
              致力于液压集成块设计、制造及液压系统解决方案。
              工厂面积5000㎡，员工30余人，位于常州武进高新技术产业开发区。
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.625rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="ri-map-pin-line" style={{ color: '#FCA5A5' }} />
                江苏省常州市武进区
              </div>
              <div style={{ padding: '0.625rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="ri-building-line" style={{ color: '#FCA5A5' }} />
                5,000 ㎡ 工厂
              </div>
              <div style={{ padding: '0.625rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="ri-team-line" style={{ color: '#FCA5A5' }} />
                30+ 名员工
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 公司介绍 ── */}
      <section id="company-intro" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">公司介绍</span>
            <h2 className="section-title">专注液压集成块定制及技术解决方案</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                三合液压（常州）有限公司是一家致力于液压集成块设计、制造，并提供液压系统解决方案的技术型生产企业。公司位于常州武进高新技术产业开发区，工厂面积5000平方米，员工30余人。公司拥有先进的组装测试设备和严格的生产管理体系。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                我们在进行自主战略创新的同时，在液压元件和系统集成方面，给世界知名液压品牌企业和行业经销商客户提供专业的解决方案，及卓越的一站式可持续式服务。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}>
                液控未来，同心致远。我们重视用户体验，为客户开发优势方案产品，帮助其创造并获取更大价值。我们利用多年积累的行业市场经验，以技术创新不断巩固行业领先地位。为工程机械、港口机械、海事海工、能源、冶金、工业制造等众多应用领域，提供极其可靠的解决方案和产品。
              </p>
            </div>

            <div style={{ height: '420px', backgroundColor: '#F9FAFB', borderRadius: '16px', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <i className="ri-image-line" style={{ fontSize: '4rem', color: '#D1D5DB' }} />
              <span style={{ fontSize: '0.875rem', color: '#9CA3AF', letterSpacing: '0.05em' }}>公司形象图片占位</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 发展历程 ── */}
      <section id="history" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">发展历程</span>
            <h2 className="section-title">十余年深耕，持续创新</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {milestones.map((milestone, idx) => (
              <div key={milestone.year} style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '14px',
                border: '1px solid #E5E7EB',
                position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#FEF2F2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.125rem', fontWeight: 800,
                    color: '#B81C22',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {milestone.year}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827' }}>{milestone.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.7 }}>{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 企业理念 ── */}
      <section id="values" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">核心价值</span>
            <h2 className="section-title">我们的价值观</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {coreValues.map(value => (
              <div key={value.num} style={{
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                backgroundColor: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-20px', right: '-10px',
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: `${value.color}06`,
                  fontFamily: 'Space Grotesk, sans-serif',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {value.num}
                </div>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '14px',
                  backgroundColor: `${value.color}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}>
                  <i className={value.icon} style={{ fontSize: '1.75rem', color: value.color }} />
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: value.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {value.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '0.875rem' }}>{value.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 制造实力 ── */}
      <section id="manufacturing" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag">制造实力</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>数字说话</h2>
              <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                多年深耕液压集成块制造，三合液压凭借精密加工能力和严格质量管控，
                成为国内外知名企业的稳定供应商。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {mfgStats.map(stat => (
                  <div key={stat.label} style={{
                    padding: '1.5rem',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                  }}>
                    <i className={stat.icon} style={{ fontSize: '1.25rem', color: '#B81C22', marginBottom: '0.75rem', display: 'block' }} />
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.25rem' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
                  主要加工设备
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { name: '卧式/立式加工中心', note: '精密 CNC 加工' },
                    { name: '数控车床', note: '复杂回转体加工' },
                    { name: '平面磨床', note: '高精度平面加工' },
                    { name: '阀组测试台', note: '压力/流量/泄漏测试' },
                    { name: '三坐标测量机', note: '精密尺寸检测' },
                    { name: '清洗机', note: '高压清洗，符合清洁度要求' },
                  ].map(eq => (
                    <div key={eq.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#B81C22', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{eq.name}</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{eq.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atlantic 合作背景 ── */}
      <section id="atlantic" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">战略合作</span>
            <h2 className="section-title">Atlantic 合作背景</h2>
          </div>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #E5E7EB',
            display: 'grid', gridTemplateColumns: '1fr 2fr',
          }}>
            <div style={{
              backgroundColor: '#111827',
              padding: '4rem 3rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', gap: '1.5rem',
            }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-global-line" style={{ fontSize: '2.5rem', color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: '1.375rem', fontWeight: 800, color: '#fff' }}>Atlantic Fluid Tech</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>🇮🇹 意大利摩德纳，成立1979年</div>
              </div>
              <div style={{
                padding: '0.5rem 1.25rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '100px',
                fontSize: '0.82rem',
                color: '#fff',
                fontWeight: 600,
              }}>
                中国区唯一代理商 2020–
              </div>
            </div>

            <div style={{ padding: '4rem', backgroundColor: '#fff' }}>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, marginBottom: '2rem' }}>
                2020年，Atlantic Fluid Tech 正式授权三合液压（常州）有限公司为中国区唯一代理商，
                负责 Atlantic 全系液压阀产品在中国市场的销售及售后服务。
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Atlantic 成立于1979年，总部位于意大利摩德纳，拥有6大生产工厂、15,400㎡生产基地，
                全球6处分支机构，年承接超过600个项目，是全球顶级液压控制阀制造商之一。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: '6 座', desc: '生产工厂' },
                  { label: '15,400 ㎡', desc: '生产面积' },
                  { label: '600+', desc: '年承接项目' },
                ].map(s => (
                  <div key={s.desc} style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '10px' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#B81C22', fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', marginTop: '0.25rem' }}>{s.desc}</div>
                  </div>
                ))}
              </div>
              <Link to="/products/atlantic" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.75rem', backgroundColor: '#B81C22', color: '#fff',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem',
              }}>
                查看 Atlantic 产品 <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safe Motion 子公司 ── */}
      <section id="safemotion" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">子公司</span>
            <h2 className="section-title">Safe Motion · 北京赛弗德克</h2>
          </div>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #E5E7EB',
            display: 'grid', gridTemplateColumns: '2fr 1fr',
          }}>
            <div style={{ padding: '4rem', backgroundColor: '#fff' }}>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                北京赛弗德克科技有限公司
              </h3>
              <div style={{ fontSize: '0.82rem', color: '#B81C22', fontWeight: 600, marginBottom: '1.25rem' }}>
                三合液压全资子公司 · 北京
              </div>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                北京赛弗德克科技有限公司是三合液压（常州）有限公司的全资子公司，
                专注于高性能电液智能控制产品的研发与制造。
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '2rem' }}>
                使命：推进中国高端液压产品国产化，打造世界一流民族品牌。
                产品涵盖数字伺服阀、高频响阀、比例阀、控制器、数字电液执行器全系列，
                全部产品支持 CANopen / MODBUS / EtherNET/IP / EtherCAT / PROFINET 总线协议。
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['高频响伺服比例阀', '数字电液执行器', '比例方向阀', '全总线支持', '专精特新路线'].map(tag => (
                  <span key={tag} style={{
                    padding: '0.3rem 0.75rem',
                    backgroundColor: '#FEF2F2',
                    color: '#B81C22',
                    borderRadius: '100px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    border: '1px solid rgba(184,28,34,0.2)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/products/safemotion" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.75rem', backgroundColor: '#B81C22', color: '#fff',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem',
              }}>
                查看 Safe Motion 产品 <i className="ri-arrow-right-line" />
              </Link>
            </div>

            <div style={{
              backgroundColor: '#111827',
              padding: '4rem 2rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', gap: '1.5rem',
            }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-cpu-line" style={{ fontSize: '2.5rem', color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fff' }}>Safe Motion</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>专精特新 · 高端国产化</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                {['CANopen', 'EtherCAT', 'PROFINET', 'MODBUS', 'EtherNET/IP'].map(bus => (
                  <div key={bus} style={{ padding: '0.4rem 0.875rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    {bus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
            期待与您合作
          </h3>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>了解三合液压更多信息或洽谈合作，请联系我们</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ padding: '0.75rem 2rem', backgroundColor: '#B81C22', color: '#fff', borderRadius: '8px', fontWeight: 700 }}>
              联系我们
            </Link>
            <a href="tel:+865198648768" style={{ padding: '0.75rem 2rem', border: '1px solid #E5E7EB', color: '#374151', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="ri-phone-line" style={{ color: '#B81C22' }} />
              +86 519 8648 7689
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
