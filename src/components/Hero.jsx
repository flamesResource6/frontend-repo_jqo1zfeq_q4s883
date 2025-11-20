import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold ring-1 ring-blue-200">
              Trusted by 250k+ customers
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Discover quality products with unmatched value
            </h1>
            <p className="text-slate-600 text-lg">
              Shop the latest arrivals and best-sellers curated for reliability, performance, and style. Fast shipping and easy returns.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow hover:shadow-md transition">Shop Now</button>
              <button className="px-5 py-3 rounded-full border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">View Deals</button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover" />
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=64&auto=format&fit=crop" alt="" className="w-8 h-8 rounded-full object-cover -ml-3 border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="w-8 h-8 rounded-full object-cover -ml-3 border-2 border-white" />
              </div>
              <p className="text-sm text-slate-500">4.8/5 average rating</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-sm p-4">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
                alt="Featured Product"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-slate-200 shadow p-3">
              <p className="text-sm font-semibold">Featured: Pro Headphones</p>
              <p className="text-xs text-slate-500">Now 20% off — Limited time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
