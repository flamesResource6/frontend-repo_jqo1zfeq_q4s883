import React, { useEffect, useRef } from 'react'
import ProductCard from './ProductCard'

const products = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: ['Pro Headphones', 'Smartwatch X2', 'Ergo Chair', 'Air Purifier', 'Mirrorless Camera'][i % 5] + ' ' + (i + 1),
  image: [
    'https://images.unsplash.com/photo-1518443952243-9e5a75e012e7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511116215038-0e47b08f18d6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?q=80&w=1200&auto=format&fit=crop'
  ][i % 5],
  price: 49 + i * 7.5,
  rating: 3.8 + (i % 3) * 0.6
}))

export default function ProductCarousel({ title = 'Best Sellers' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }
    const id = setInterval(scroll, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <div className="flex items-center gap-3 text-sm">
            <button className="px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50" onClick={() => (containerRef.current.scrollBy({ left: -300, behavior: 'smooth' }))}>Prev</button>
            <button className="px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50" onClick={() => (containerRef.current.scrollBy({ left: 300, behavior: 'smooth' }))}>Next</button>
          </div>
        </div>
        <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {products.map(p => (
            <div key={p.id} className="w-56 flex-shrink-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
