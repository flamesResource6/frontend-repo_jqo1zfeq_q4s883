import React from 'react'
import { ShoppingCart, User, Menu, Search } from 'lucide-react'

const NavLink = ({ children }) => (
  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="font-bold text-xl tracking-tight text-slate-900">ShopTrust</a>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink>Home</NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>Categories</NavLink>
              <NavLink>Deals</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                placeholder="Search products"
                className="bg-transparent outline-none text-sm px-2 w-48"
              />
            </div>
            <button className="relative p-2 rounded-full hover:bg-slate-100 transition">
              <ShoppingCart className="w-5 h-5 text-slate-800" />
              <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5">2</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition">
              <User className="w-5 h-5 text-slate-800" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-slate-100 transition" aria-label="Open Menu">
              <Menu className="w-5 h-5 text-slate-800" />
            </button>
          </div>
        </div>
        <div className="md:hidden pb-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <NavLink>Home</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Categories</NavLink>
            <NavLink>Deals</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
