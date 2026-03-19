import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../styles/footer.css'
import sanheLogo from '../../assets/sanhe-logo.svg'

const footerLinks = {
  products: [
    { label: '三合标准液压阀块', path: '/products/sanhe' },
    { label: '三合定制液压阀块', path: '/products/sanhe' },
    { label: '液压泵站', path: '/products/sanhe' },
    { label: 'Atlantic 液压阀（23大类）', path: '/products/atlantic' },
    { label: 'Safe Motion 电液控制', path: '/products/safemotion' },
  ],
  solutions: [
    { label: '冶金行业', path: '/solutions/metallurgy' },
    { label: '海事海工', path: '/solutions/marine' },
    { label: '港口机械', path: '/solutions/port' },
    { label: '压铸机智能化', path: '/solutions/die-casting' },
    { label: '注塑机射胶', path: '/solutions/injection-molding' },
  ],
  company: [
    { label: '关于三合', path: '/about' },
    { label: '技术 & 研发', path: '/technology' },
    { label: '新闻资讯', path: '/news' },
    { label: '联系我们', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── CTA Strip ── */}
      <div className="footer__cta-strip">
        <div className="container footer__cta-inner">
          <div>
            <h3 className="footer__cta-title">准备好开始您的液压项目了吗？</h3>
            <p className="footer__cta-subtitle">我们的工程师团队随时为您提供专业的液压解决方案咨询</p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="footer__cta-btn">立即咨询</Link>
            <a href="tel:+865198648768" className="footer__cta-btn footer__cta-btn--outline">
              <i className="ri-phone-line" />
              +86 519 8648 7689
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">

            {/* Brand Column */}
            <div>
              <div className="footer__brand-logo">
                <img src={sanheLogo} alt="三合液压" className="footer__brand-logo-img" />
                <div>
                  <div className="footer__brand-name">三合液压（常州）有限公司</div>
                  <div className="footer__brand-name-en">SANHE HYDRAULICS CO., LTD.</div>
                </div>
              </div>
              <p className="footer__brand-desc">
                致力于液压集成块设计、制造及液压系统解决方案。
                Atlantic Fluid Tech 中国区唯一代理商。
              </p>
              <div className="footer__contact-list">
                <div className="footer__contact-item">
                  <i className="ri-map-pin-line" />
                  <span>常州市武进高新技术产业开发区西湖西路万塔工业园区24号</span>
                </div>
                <div className="footer__contact-item">
                  <i className="ri-phone-line" />
                  <a href="tel:+865198648768" className="footer__contact-link">+86 519 8648 7689</a>
                </div>
                <div className="footer__contact-item">
                  <i className="ri-mail-line" />
                  <a href="mailto:sales@czsanhe.net" className="footer__contact-link">sales@czsanhe.net</a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="footer__col-title">产品</h4>
              <ul className="footer__link-list">
                {footerLinks.products.map((link) => (
                  <li key={link.path + link.label}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="footer__col-title">解决方案</h4>
              <ul className="footer__link-list">
                {footerLinks.solutions.map((link) => (
                  <li key={link.path + link.label}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer__col-title">公司</h4>
              <ul className="footer__link-list">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div>
                <p className="footer__partner-label">授权合作</p>
                <div className="footer__partner-badges">
                  <div className="footer__badge">🇮🇹 Atlantic Fluid Tech · 中国总代</div>
                  <div className="footer__badge">🏭 Safe Motion · 子公司</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">© 2024 三合液压（常州）有限公司. 保留所有权利.</p>
            <div className="footer__bottom-right">
              <span className="footer__cert-badge">
                <i className="ri-shield-check-line" />
                ISO 9001 认证
              </span>
              <span className="footer__icp">苏ICP备XXXXXXXX号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
