import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">ShopTrust</h4>
            <p className="text-slate-600">Quality products, transparent pricing, and reliable service.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Support</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-xs text-slate-500">© {new Date().getFullYear()} ShopTrust. All rights reserved.</div>
      </div>
    </footer>
  )
}
