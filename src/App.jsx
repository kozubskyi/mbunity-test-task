import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import BlogPage from './pages/BlogPage/BlogPage'
import ShopPage from './pages/ShopPage/ShopPage'
import AboutPage from './pages/AboutePage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import CabinetPage from './pages/CabinetPage/CabinetPage'
import CartPage from './pages/CartPage/CartPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/cabinet" element={<CabinetPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="*" element={<Navigate to="/contact" replace />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
