'use client'

import React from 'react'
import Image from 'next/image'

export default function SeoAuditDashboardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      {/* Ambient Gradient Glow */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-blue-500/15 to-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Main Dashboard Window Mockup Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0E0E12] shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] transition-all duration-300 hover:border-white/[0.2]">
        
        {/* Clean Chrome Header (Dots only, no extra text) */}
        <div className="flex items-center gap-2 bg-[#141418] px-4 py-3 border-b border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/90" />
        </div>

        {/* Realistic Dashboard Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0D]">
          <Image
            src="/images/seo/seo-audit-dashboard.jpg"
            alt="Real-time SEO Audit Intelligence Dashboard showing technical health, crawl issues, competitor SERP share, and 30/60/90-day roadmap"
            fill
            priority
            className="object-container object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />

          {/* Subtle Glass Bottom Gradient for Smooth Integration */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0E0E12]/40 to-transparent" />
        </div>

      </div>
    </div>
  )
}
