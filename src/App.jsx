import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCarousel from './components/ProductCarousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductCarousel title="Best Sellers" />
        <ProductCarousel title="New Arrivals" />
      </main>
      <Footer />
    </div>
  )
}

export default App
