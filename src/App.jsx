import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ProductsHome from './pages/products/ProductsHome'
import SanheHome from './pages/products/sanhe/SanheHome'
import AtlanticHome from './pages/products/atlantic/AtlanticHome'
import AtlanticCategory from './pages/products/atlantic/AtlanticCategory'
import AtlanticProductDetail from './pages/products/atlantic/AtlanticProductDetail'
import SafeMotionHome from './pages/products/safemotion/SafeMotionHome'
import SafeMotionProduct from './pages/products/safemotion/SafeMotionProduct'
import ProductDetail from './pages/products/ProductDetail'
import SolutionsHome from './pages/solutions/SolutionsHome'
import SolutionDetail from './pages/solutions/SolutionDetail'
import Technology from './pages/technology/Technology'
import About from './pages/about/About'
import NewsList from './pages/news/NewsList'
import NewsDetail from './pages/news/NewsDetail'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* 产品 */}
          <Route path="/products" element={<ProductsHome />} />
          <Route path="/products/sanhe" element={<SanheHome />} />
          <Route path="/products/atlantic" element={<AtlanticHome />} />
          <Route path="/products/atlantic/:categoryId" element={<AtlanticCategory />} />
          <Route path="/products/atlantic/:categoryId/:productId" element={<AtlanticProductDetail />} />
          <Route path="/products/safemotion" element={<SafeMotionHome />} />
          <Route path="/products/safemotion/:productId" element={<SafeMotionProduct />} />
          <Route path="/products/:brand/:productId" element={<ProductDetail />} />

          {/* 解决方案 */}
          <Route path="/solutions" element={<SolutionsHome />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />

          {/* 技术研发 */}
          <Route path="/technology" element={<Technology />} />

          {/* 关于我们 */}
          <Route path="/about" element={<About />} />

          {/* 新闻 */}
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />

          {/* 联系 */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
