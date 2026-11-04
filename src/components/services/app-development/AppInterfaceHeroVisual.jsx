'use client'

import React from 'react'
import Image from 'next/image'

export default function AppInterfaceHeroVisual() {
  return (
    <div className="app-hero-visual relative mx-auto flex h-[clamp(520px,calc(100svh-180px),700px)] w-full max-w-[560px] items-center justify-center select-none py-2 xl:max-w-[620px]">
      {/* Ambient Radial Under-Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-purple-600/30 via-[#704bd2]/20 to-transparent blur-3xl opacity-80 pointer-events-none" />

      {/* DUAL APP ECOSYSTEM DISPLAY (JUST THE REALISTIC HARDWARE - ZERO TEXT) */}
      <div className="relative h-[540px] sm:h-[600px] w-full flex items-center justify-center">
        {/* DEVICE 1: FinTech Mobile App (Left / Behind) */}
        <div className="absolute left-2 sm:left-6 top-6 sm:top-4 z-10 w-[240px] sm:w-[280px] aspect-[584/1200] overflow-hidden rounded-[42px] border border-white/[0.15] bg-[#09090b] shadow-[0_25px_60px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.08] transition-colors duration-500 hover:scale-[1.02] hover:z-30">
          <div className="relative h-full w-full">
            <Image
              src="/images/app-development/fintech-app-screen.webp"
              alt="FinTech Mobile Application Production Screen"
              fill
              sizes="(max-width: 768px) 240px, 280px"
              priority
              unoptimized
              className="object-contain object-center"
            />
          </div>
          <div className="pointer-events-none absolute top-3 inset-x-0 z-20 flex justify-center">
            <div className="h-4.5 w-24 rounded-full bg-black/95 border border-white/[0.1] shadow-sm flex items-center justify-between px-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0f] ring-1 ring-white/[0.2]" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-transparent to-white/[0.05]" />
        </div>

        {/* DEVICE 2: Commerce & Logistics App (Right / Front) */}
        <div className="absolute right-2 sm:right-6 bottom-4 sm:bottom-2 z-20 w-[240px] sm:w-[280px] aspect-[584/1200] overflow-hidden rounded-[38px] border border-white/[0.18] bg-[#09090b] shadow-[0_30px_70px_rgba(0,0,0,0.95)] ring-1 ring-purple-500/20 transition-colors duration-500 hover:scale-[1.02]">
          <div className="relative h-full w-full">
            <Image
              src="/images/app-development/delivery-app-screen.webp"
              alt="Commerce and Logistics Mobile Application Production Screen"
              fill
              sizes="(max-width: 768px) 240px, 280px"
              priority
              unoptimized
              className="object-contain object-center"
            />
          </div>
          <div className="pointer-events-none absolute top-3 inset-x-0 z-20 flex justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-black ring-1 ring-white/[0.2]" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-transparent to-white/[0.05]" />
        </div>
      </div>
    </div>
  )
}
