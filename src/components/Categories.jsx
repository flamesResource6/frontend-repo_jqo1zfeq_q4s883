import React from 'react'

const categories = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Health & Beauty', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVjdHJvbmljc3xlbnwwfDB8fHwxNzYzNjU4NDcwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Toys', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVjdHJvbmljc3xlbnwwfDB8fHwxNzYzNjU4NDcwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
]

export default function Categories() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Shop by category</h2>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#" className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img src={cat.image} alt={cat.name} className="h-28 sm:h-36 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-semibold drop-shadow">{cat.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
