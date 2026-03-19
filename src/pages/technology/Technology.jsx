import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const rdTools = [
  { tool: '3D 建模软件', icon: 'ri-cube-line', app: '液压阀块几何设计与优化', color: '#1E3A5F' },
  { tool: '计算流体力学（CFD）', icon: 'ri-water-flash-line', app: '流道内流体仿真，减少能量损失', color: '#065F46' },
  { tool: '有限元分析（FEA）', icon: 'ri-grid-line', app: '阀块结构强度和应力分析', color: '#991B1B' },
  { tool: '疲劳分析', icon: 'ri-line-chart-line', app: '高频循环载荷下寿命预测', color: '#92400E' },
  { tool: '流道几何优化', icon: 'ri-route-line', app: '减少弯道，缩短流道，提升响应速度和精度', color: '#4C1D95' },
]

const processSteps = [
  { step: '01', name: '需求沟通', icon: 'ri-discuss-line', desc: '深入了解客户系统要求、工况、压力、流量等关键参数' },
  { step: '02', name: '系统分析', icon: 'ri-search-2-line', desc: '分析液压回路逻辑，识别关键控制节点和性能瓶颈' },
  { step: '03', name: '方案设计', icon: 'ri-pencil-ruler-2-line', desc: '3D建模 + CFD仿真，优化流道几何，形成最优设计方案' },
  { step: '04', name: '样件制作', icon: 'ri-tools-line', desc: '数控加工中心精密制造，严格工序管控' },
  { step: '05', name: '测试验证', icon: 'ri-test-tube-line', desc: '阀组测试台进行压力、流量、泄漏全面测试' },
  { step: '06', name: '量产交付', icon: 'ri-truck-line', desc: '标准化生产，质量追溯，按时交付' },
  { step: '07', name: '全生命周期支持', icon: 'ri-customer-service-2-line', desc: '售后维护、备件供应、技术升级，全程无忧' },
]

const qualityItems = [
  { label: '管理模式', value: '全日式化管理，全员参与持续改进' },
  { label: '质量会议', value: '周/月质量会议制度，问题快速响应' },
  { label: '人才培养', value: '绿带培训 + 精益化生产实践' },
  { label: '质量认证', value: 'ISO 9001 · 中国质量认证中心 CQC' },
  { label: '精密测量', value: '精密测量仪器，尺寸精度全检' },
  { label: '性能测试', value: '阀块测试台（压力/流量/泄漏）逐件测试' },
]

const downloads = [
  { name: '油液清洁度标准（ISO 4406）', type: 'PDF', icon: 'ri-file-pdf-2-line', color: '#991B1B' },
  { name: '工作温度与密封件选型指南', type: 'PDF', icon: 'ri-file-pdf-2-line', color: '#991B1B' },
  { name: '平衡阀使用要点', type: 'PDF', icon: 'ri-file-pdf-2-line', color: '#991B1B' },
  { name: 'ISO 9001 质量认证证书', type: 'PDF', icon: 'ri-award-line', color: '#065F46' },
  { name: 'Atlantic 产品目录（23份，按大类）', type: 'PDF', icon: 'ri-book-2-line', color: '#065F46' },
  { name: 'Safe Motion 产品手册（按型号）', type: 'PDF', icon: 'ri-file-list-2-line', color: '#4C1D95' },
]

export default function Technology() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(160deg, #1E3A5F 0%, #152A46 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(153,27,27,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag" style={{ color: '#93C5FD' }}>技术 &amp; 研发</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              研发驱动，超越预期
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              通过研究新的解决方案帮助客户用更少的资源实现更多的目标，超越预期值，
              是三合液压研发创新的核心理念。
            </p>
          </div>
        </div>
      </section>

      {/* R&D Tools */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">研发能力</span>
            <h2 className="section-title">先进研发工具与方法</h2>
            <p className="section-subtitle">从概念设计到性能验证，全流程数字化仿真分析</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {rdTools.map(item => (
              <div key={item.tool} style={{
                padding: '2rem',
                borderRadius: '14px',
                border: '1px solid #E5E7EB',
                backgroundColor: '#fff',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}15`; e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '12px',
                  backgroundColor: `${item.color}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <i className={item.icon} style={{ fontSize: '1.5rem', color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.625rem' }}>
                  {item.tool}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.65 }}>{item.app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">工程服务</span>
            <h2 className="section-title">从需求到交付，全程专业服务</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: '#E5E7EB', borderRadius: '16px', overflow: 'hidden' }}>
            {processSteps.map((step, i) => (
              <div key={step.step} style={{
                padding: '2rem 1.5rem',
                backgroundColor: '#fff',
                position: 'relative',
              }}>
                {i < processSteps.length - 1 && i % 4 !== 3 && (
                  <div style={{
                    position: 'absolute', top: '2.5rem', right: '-0.5px',
                    width: '1px', height: '40px',
                    backgroundColor: '#E5E7EB',
                  }} />
                )}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#991B1B',
                  color: '#fff',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginBottom: '1rem',
                }}>
                  {step.step}
                </div>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#FEF2F2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.875rem',
                }}>
                  <i className={step.icon} style={{ fontSize: '1.25rem', color: '#991B1B' }} />
                </div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{step.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality System */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-start' }}>
            <div>
              <span className="section-tag">质量体系</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>精益品质管控</h2>
              <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                三合液压采用全日式管理模式，全员参与，持续改进，确保每件产品都符合最严格的质量标准。
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {qualityItems.map(item => (
                  <div key={item.label} style={{
                    display: 'grid', gridTemplateColumns: '130px 1fr', gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                  }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#6B7280' }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#111827' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* ISO Cert Card */}
              <div style={{
                padding: '3rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #1E3A5F 0%, #152A46 100%)',
                color: '#fff',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  border: '3px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <i className="ri-shield-check-line" style={{ fontSize: '2.5rem', color: '#93C5FD' }} />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>ISO 9001</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>中国质量认证中心 CQC 认证</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>质量管理体系认证证书</div>
                <button style={{
                  marginTop: '1.5rem',
                  padding: '0.625rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  margin: '1.5rem auto 0',
                  cursor: 'pointer',
                }}>
                  <i className="ri-download-line" /> 下载证书
                </button>
              </div>

              {/* Equipment */}
              <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                  主要加工设备
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['卧式加工中心', '立式加工中心', '摇臂钻', '卧铣', '立铣', '平面磨床', '数控车床', '去毛刺设备', '阀组测试台', '清洗机'].map(eq => (
                    <span key={eq} style={{
                      padding: '0.3rem 0.75rem',
                      backgroundColor: '#fff',
                      border: '1px solid #E5E7EB',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      color: '#374151',
                    }}>
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">技术资料</span>
            <h2 className="section-title">技术文档下载</h2>
            <p className="section-subtitle">标准规范、认证证书、产品手册，支持免费下载</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {downloads.map((doc) => (
              <div key={doc.name} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = doc.color; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  borderRadius: '10px',
                  backgroundColor: `${doc.color}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={doc.icon} style={{ fontSize: '1.375rem', color: doc.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{doc.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '0.1rem' }}>{doc.type} 格式</div>
                </div>
                <i className="ri-download-2-line" style={{ fontSize: '1.125rem', color: '#9CA3AF' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
