'use client'

import React, { useState, useEffect } from 'react'
import { Search, Mic, Camera, X, Star, ShoppingBag, SlidersHorizontal } from 'lucide-react'

const fullQuery = 'best headphone under 2000 taka in bangladesh'

export default function EcommerceSearchVisual() {
  const [typedQuery, setTypedQuery] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState('All')

  // Typewriter effect for authentic search query
  useEffect(() => {
    let timer

    if (!isDeleting) {
      if (typedQuery.length < fullQuery.length) {
        timer = setTimeout(() => {
          setTypedQuery(fullQuery.slice(0, typedQuery.length + 1))
        }, 50 + Math.random() * 30)
      } else {
        // Pause when full query is typed
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 4500)
      }
    } else {
      if (typedQuery.length > 0) {
        timer = setTimeout(() => {
          setTypedQuery(typedQuery.slice(0, -1))
        }, 20)
      } else {
        setIsDeleting(false)
      }
    }

    return () => clearTimeout(timer)
  }, [typedQuery, isDeleting])

  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      {/* Subtle Ambient Back-Glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-purple-500/10 to-emerald-500/10 blur-2xl pointer-events-none" />

      {/* Modern Google Dark Mode Browser Window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#1F1F23] shadow-2xl ring-1 ring-white/[0.05]">
        
        {/* Browser Chrome Header (Dots only, no extra text) */}
        <div className="flex items-center gap-2 bg-[#18181B] px-4 py-3 border-b border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/90" />
        </div>

        {/* Google Dark Mode SERP Body */}
        <div className="p-4 sm:p-5 text-white bg-[#1F1F23]">
          
          {/* Top Google Bar with Search Input */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
            {/* Google Colorful Logo */}
            <div className="flex items-center font-sans font-bold text-lg sm:text-xl tracking-tight shrink-0 select-none">
              <span className="text-[#8ab4f8]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#8ab4f8]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </div>

            {/* Google Search Pill Input (Dark Mode #303134) */}
            <div className="flex flex-1 items-center justify-between rounded-full bg-[#303134] px-3.5 sm:px-4 py-1.5 border border-white/[0.1] shadow-inner min-w-0">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="font-sans text-xs sm:text-sm text-zinc-100 truncate">
                  {typedQuery}
                </span>
                <span className="inline-block h-4 w-0.5 bg-[#8ab4f8] animate-pulse shrink-0" />
              </div>

              <div className="flex items-center gap-2 text-zinc-400 shrink-0 ml-2">
                <X className="h-3.5 w-3.5 hover:text-white transition-colors cursor-pointer" />
                <span className="h-3.5 w-px bg-white/[0.15]" />
                <Mic className="h-3.5 w-3.5 text-[#8ab4f8] hover:text-white transition-colors cursor-pointer" />
                <Camera className="h-3.5 w-3.5 text-[#ea4335] hover:text-white transition-colors cursor-pointer" />
                <Search className="h-3.5 w-3.5 text-[#8ab4f8] hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Google Dark Navigation Filter Tabs (All, Shopping, Images, Filters) */}
          <div className="flex items-center gap-4 pt-2.5 pb-3 border-b border-white/[0.08] text-xs font-sans text-zinc-400 overflow-x-auto scrollbar-none">
            {[
              { label: 'All', icon: Search },
              { label: 'Shopping', icon: ShoppingBag },
              { label: 'Filters', icon: SlidersHorizontal },
            ].map((tab) => {
              const isActive = activeTab === tab.label
              const Icon = tab.icon
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-1.5 pb-1 font-medium transition-colors shrink-0 relative ${
                    isActive ? 'text-[#8ab4f8]' : 'hover:text-zinc-200'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8ab4f8] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Organic Search Results (Full Width, Modern Google Dark Mode, No Keyword Surfer) */}
          <div className="mt-4 space-y-4">
            
            {/* Result #1: Star Tech */}
            <div className="group">
              <div className="flex items-center gap-2 text-[11px] text-[#9aa0a6]">
                <span className="font-mono text-xs font-bold text-zinc-500">1</span>
                {/* Star Tech Favicon */}
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EE2D24] text-[8px] font-bold text-white shrink-0">
                  ST
                </div>
                <div className="truncate">
                  <span className="font-medium text-zinc-200">Star Tech</span>
                  <span className="text-[#9aa0a6] ml-1.5">https://www.startech.com.bd › accessories › headphone</span>
                </div>
                <span className="text-zinc-500 font-bold ml-auto">&vellip;</span>
              </div>

              <a
                href="#pricing"
                className="mt-1 block font-sans text-sm sm:text-base font-medium text-[#8ab4f8] hover:underline leading-snug"
              >
                Headphone Price in Bangladesh 2026 — Star Tech
              </a>

              <p className="mt-1 font-sans text-xs leading-relaxed text-[#bdc1c6] line-clamp-2">
                Headphone Price in Bangladesh starts from BDT 450 to BDT 91,000 depending on the brands and features. Buy original headsets at lowest price from Star Tech Online Shop.
              </p>

              {/* Sitelink Attribute Pills */}
              <div className="mt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                {['Wireless Headphone', 'Gaming Headset', 'Earbuds', 'Under 2000 TK'].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-zinc-300 hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Result #2: Daraz.com.bd */}
            <div className="group pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-[11px] text-[#9aa0a6]">
                <span className="font-mono text-xs font-bold text-zinc-500">2</span>
                {/* Daraz Favicon */}
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5722] text-[8px] font-bold text-white shrink-0">
                  d
                </div>
                <div className="truncate">
                  <span className="font-medium text-zinc-200">Daraz.com.bd</span>
                  <span className="text-[#9aa0a6] ml-1.5">https://www.daraz.com.bd › tag › headphones-under-2...</span>
                </div>
                <span className="text-zinc-500 font-bold ml-auto">&vellip;</span>
              </div>

              <a
                href="#pricing"
                className="mt-1 block font-sans text-sm sm:text-base font-medium text-[#8ab4f8] hover:underline leading-snug"
              >
                Buy headphones under 2000 Online at Best Price in Bangladesh
              </a>

              {/* Rating Line with Stars & In-Stock Status */}
              <div className="mt-1 flex items-center gap-2 font-sans text-xs text-[#bdc1c6]">
                <div className="flex items-center gap-1 text-[#fbbc05]">
                  <span className="font-bold">3.9</span>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-[#fbbc05] text-[#fbbc05]" />
                    ))}
                  </span>
                  <span className="text-zinc-400">(361 reviews)</span>
                </div>
                <span className="text-zinc-500">&middot;</span>
                <span className="text-[#34a853] font-medium">In stock</span>
              </div>

              <p className="mt-1 font-sans text-xs leading-relaxed text-[#bdc1c6] line-clamp-2">
                Bangladesh - Shop for Best Online at Daraz.com.bd Wide Variety of headphones under 2000. P47 Wireless Bluetooth Headphone With Mic, Stereo Bass, Fast Delivery.
              </p>
            </div>

            {/* Result #3: TechLand BD */}
            <div className="group pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-[11px] text-[#9aa0a6]">
                <span className="font-mono text-xs font-bold text-zinc-500">3</span>
                {/* TechLand Favicon */}
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0088CC] text-[8px] font-bold text-white shrink-0">
                  TL
                </div>
                <div className="truncate">
                  <span className="font-medium text-zinc-200">TechLand BD</span>
                  <span className="text-[#9aa0a6] ml-1.5">https://www.techlandbd.com › headphone-headsets</span>
                </div>
                <span className="text-zinc-500 font-bold ml-auto">&vellip;</span>
              </div>

              <a
                href="#pricing"
                className="mt-1 block font-sans text-sm sm:text-base font-medium text-[#8ab4f8] hover:underline leading-snug"
              >
                Headphone Price in BD 2026 | Wired &amp; Wireless Headsets
              </a>

              <p className="mt-1 font-sans text-xs leading-relaxed text-[#bdc1c6] line-clamp-2">
                Latest Headphone Price in BD 2026. Buy Wired &amp; Wireless Headsets from TechLand BD at best price with official brand warranty and nationwide delivery.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
