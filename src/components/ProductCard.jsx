import React from 'react'
import { Star, Eye } from 'lucide-react'

export default function ProductCard({ product }) {
  const { title, image, price, rating } = product
  const stars = Array.from({ length: 5 })

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-3 hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden rounded-xl bg-slate-50">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="pt-3 space-y-1">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1">
          {stars.map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(rating) ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-slate-300'}`} />
          ))}
          <span className="text-xs text-slate-500">{rating.toFixed(1)}</span>
        </div>
        <p className="text-base font-bold text-slate-900">${price.toFixed(2)}</p>
      </div>
      <button className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <Eye className="w-3.5 h-3.5" /> Quick view
      </button>
    </div>
  )
}
