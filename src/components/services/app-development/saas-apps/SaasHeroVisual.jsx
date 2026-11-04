'use client'

import React from 'react'
import Image from 'next/image'

export default function SaasHeroVisual() {
  return (
    <div className="app-hero-visual relative mx-auto flex h-[clamp(520px,calc(100svh-180px),700px)] w-full max-w-[620px] items-center justify-center select-none py-2 xl:max-w-[680px]">
      {/* Ambient Radial Under-Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-purple-600/30 via-[#704bd2]/20 to-transparent blur-3xl opacity-80 pointer-events-none" />

      {/* TALL SAAS ECOSYSTEM DISPLAY (PURE UNOBSTRUCTED SCREENSHOTS - ZERO FAKE BROWSER BARS) */}
      <div className="relative h-[500px] sm:h-[560px] lg:h-[600px] w-full">
        {/* DESKTOP SAAS CLOUD CONSOLE (TOP-LEFT / BACKGROUND) */}
        <div className="group absolute left-0 top-0 w-[88%] sm:w-[84%] aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.12] bg-[#09090b] shadow-[0_25px_70px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.08] transition-colors duration-500 hover:border-frame-accent/40">
          <div className="relative h-full w-full overflow-hidden bg-[#09090b]">
            <Image
              src="/images/services/saas-dashboard-realistic.jpg"
              alt="Real-time multi-tenant SaaS application dashboard interface"
              fill
              sizes="(max-width: 768px) 85vw, 560px"
              priority
              unoptimized
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* COMPANION MOBILE SAAS TELEMETRY CONSOLE (BOTTOM-RIGHT / FOREGROUND) */}
        <div className="group absolute right-0 bottom-0 z-20 w-[170px] sm:w-[210px] md:w-[230px] aspect-[584/1200] overflow-hidden rounded-[34px] sm:rounded-[38px] border border-white/[0.18] bg-[#09090b] shadow-[0_30px_80px_rgba(0,0,0,0.98)] ring-1 ring-purple-500/25 transition-colors duration-500 hover:scale-[1.02]">
          <div className="relative h-full w-full">
            <Image
              src="/images/app-development/fintech-app-screen.webp"
              alt="Real-time SaaS telemetry mobile console screen"
              fill
              sizes="(max-width: 768px) 170px, 230px"
              priority
              unoptimized
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
