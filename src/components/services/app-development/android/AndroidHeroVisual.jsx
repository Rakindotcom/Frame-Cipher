'use client'

import React from 'react'
import Image from 'next/image'

export default function AndroidHeroVisual() {
  return (
    <div className="app-hero-visual relative mx-auto flex w-full h-[520px] sm:h-[580px] md:h-[620px] items-center justify-center lg:justify-end select-none py-2">
      {/* Ambient Radial Under-Glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-emerald-600/25 via-purple-600/20 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      {/* REALISTIC ANDROID HARDWARE FRAME (MATCHES HERO TEXT HEIGHT - 50/50 GRID) */}
      <div className="group relative h-full w-auto aspect-[586/1242] max-w-full overflow-hidden rounded-[44px] border-[3px] border-white/[0.18] bg-[#09090B] shadow-[0_30px_80px_rgba(0,0,0,0.95)] ring-1 ring-emerald-500/25 transition-transform duration-500 hover:scale-[1.01]">
        {/* Real App UI Screen */}
        <div className="relative h-full w-full overflow-hidden bg-[#09090B]">
          <Image
            src="/images/app-development/delivery-app-screen.webp"
            alt="Real-time Native Android Jetpack Compose Application Screen"
            fill
            sizes="(max-width: 640px) 290px, (max-width: 768px) 320px, 340px"
            className="object-cover object-top"
            priority
            unoptimized
          />
        </div>

        {/* Android Centered Pinhole Camera */}
        <div className="pointer-events-none absolute top-3.5 inset-x-0 z-20 flex justify-center">
          <div className="h-3 w-3 rounded-full bg-black border border-white/[0.2] shadow-sm flex items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-[#151c28]" />
          </div>
        </div>

        {/* Subtle Ambient Glass Reflection */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06]" />
      </div>
    </div>
  )
}
