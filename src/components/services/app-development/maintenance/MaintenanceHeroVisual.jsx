'use client'

import React from 'react'
import Image from 'next/image'

export default function MaintenanceHeroVisual() {
  return (
    <div className="app-hero-visual relative mx-auto flex w-full h-[520px] sm:h-[580px] md:h-[620px] items-center justify-center lg:justify-end select-none py-2">
      {/* Ambient Radial Under-Glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-blue-600/25 via-purple-600/20 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      {/* REALISTIC MONITORING SMARTPHONE FRAME (MATCHES HERO TEXT HEIGHT - 50/50 GRID) */}
      <div className="group relative h-full w-auto aspect-[584/1242] max-w-full overflow-hidden rounded-[44px] border-[3px] border-white/[0.18] bg-[#09090B] shadow-[0_30px_80px_rgba(0,0,0,0.95)] ring-1 ring-blue-500/25 transition-transform duration-500 hover:scale-[1.01]">
        <div className="relative h-full w-full overflow-hidden bg-[#09090B]">
          <Image
            src="/images/app-development/fintech-app-screen.webp"
            alt="Real-time Application SLA & Health Monitoring Screen"
            fill
            sizes="(max-width: 640px) 290px, (max-width: 768px) 320px, 340px"
            className="object-cover object-top"
            priority
            unoptimized
          />
        </div>
        <div className="pointer-events-none absolute top-3 inset-x-0 z-20 flex justify-center">
          <div className="h-5 w-24 rounded-full bg-black/95 border border-white/[0.15] shadow-sm flex items-center justify-between px-2.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0f] ring-1 ring-white/[0.2]" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06]" />
      </div>
    </div>
  )
}
