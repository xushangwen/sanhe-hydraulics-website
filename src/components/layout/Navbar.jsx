import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import '../../styles/navbar.css'
import sanheLogo from '../../assets/sanhe-logo.svg'

const navItems = [
  { label: '首页', path: '/' },
  {
    label: '产品',
    path: '/products',
    children: [
      { label: '三合液压自制产品', path: '/products/sanhe' },
      { label: 'Atlantic 意大利液压阀', path: '/products/atlantic' },
      { label: 'Safe Motion 电液控制', path: '/products/safemotion' },
    ],
  },
  {
    label: '解决方案',
    path: '/solutions',
    children: [
      { label: '冶金', path: '/solutions/metallurgy' },
      { label: '海事海工', path: '/solutions/marine' },
      { label: '港口机械', path: '/solutions/port' },
      { label: '新能源（风电）', path: '/solutions/renewable-energy' },
      { label: '工程机械', path: '/solutions/construction' },
      { label: '压铸机智能化', path: '/solutions/die-casting' },
      { label: '注塑机射胶', path: '/solutions/injection-molding' },
    ],
  },
  {
    label: '技术 & 研发',
    path: '/technology',
    children: [
      { label: '研发能力', path: '/technology#rd-capability', hash: true },
      { label: '技术团队', path: '/technology#tech-team', hash: true },
      { label: '质量管理', path: '/technology#quality', hash: true },
      { label: '创新成果', path: '/technology#innovation', hash: true },
    ],
  },
  {
    label: '关于我们',
    path: '/about',
    children: [
      { label: '公司介绍', path: '/about#company-intro', hash: true },
      { label: '发展历程', path: '/about#history', hash: true },
      { label: '企业理念', path: '/about#values', hash: true },
      { label: '制造实力', path: '/about#manufacturing', hash: true },
      { label: 'Atlantic 合作', path: '/about#atlantic', hash: true },
      { label: 'Safe Motion 子公司', path: '/about#safemotion', hash: true },
    ],
  },
  { label: '新闻资讯', path: '/news' },
  { label: '联系我们', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const openTimer = useRef(null)
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const handleDropdownEnter = (path) => {
    // 清除所有定时器
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    if (openTimer.current) {
      clearTimeout(openTimer.current)
      openTimer.current = null
    }
    
    // 如果已经打开了其他下拉菜单，立即切换
    if (activeDropdown && activeDropdown !== path) {
      setActiveDropdown(path)
    } else if (!activeDropdown) {
      // 首次打开，添加短暂延迟避免误触
      openTimer.current = setTimeout(() => {
        setActiveDropdown(path)
      }, 100)
    }
  }

  const handleDropdownLeave = () => {
    // 清除打开定时器
    if (openTimer.current) {
      clearTimeout(openTimer.current)
      openTimer.current = null
    }
    // 延长关闭延迟，给用户更多时间移动鼠标
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleDropdownContentEnter = () => {
    // 鼠标进入下拉菜单内容区，清除所有定时器
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    if (openTimer.current) {
      clearTimeout(openTimer.current)
      openTimer.current = null
    }
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo">
          <img src={sanheLogo} alt="三合液压" className="navbar__logo-img" />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="navbar__nav-item"
              onMouseEnter={() => item.children && handleDropdownEnter(item.path)}
              onMouseLeave={() => item.children && handleDropdownLeave()}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar__nav-link${isActive ? ' navbar__nav-link--active' : ''}`
                }
              >
                {item.label}
                {item.children && (
                  <i className="ri-arrow-down-s-line navbar__dropdown-arrow" />
                )}
              </NavLink>

              {/* Dropdown */}
              {item.children && activeDropdown === item.path && (
                <div
                  className="navbar__dropdown"
                  onMouseEnter={handleDropdownContentEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children.map((child) => (
                    child.hash ? (
                      <a
                        key={child.path}
                        href={child.path}
                        className="navbar__dropdown-link"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </a>
                    ) : (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `navbar__dropdown-link${isActive ? ' navbar__dropdown-link--active' : ''}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Right Actions ── */}
        <div className="navbar__actions">
          <a href="tel:+865198648768" className="navbar__phone">
            <i className="ri-phone-line" />
            +86 519 8648 7689
          </a>
          <Link to="/contact" className="navbar__cta">
            立即咨询
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar__mobile-toggle"
            aria-label="菜单"
          >
            <i className={mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navItems.map((item) => (
            <div key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="navbar__mobile-children">
                  {item.children.map((child) => (
                    child.hash ? (
                      <a
                        key={child.path}
                        href={child.path}
                        className="navbar__mobile-child-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ) : (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `navbar__mobile-child-link${isActive ? ' navbar__mobile-child-link--active' : ''}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="navbar__mobile-bottom">
            <a href="tel:+865198648768" className="navbar__phone" style={{ padding: '0.75rem 1rem' }}>
              <i className="ri-phone-line" />
              +86 519 8648 7689
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
