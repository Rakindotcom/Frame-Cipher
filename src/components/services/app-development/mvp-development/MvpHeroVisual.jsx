'use client'

import React from 'react'
import Image from 'next/image'

export default function MvpHeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[620px] xl:max-w-[720px] select-none items-center justify-center py-2">
      {/* Atmospheric Deep Purple Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.25)_0%,rgba(168,85,247,0.08)_45%,transparent_75%)] blur-3xl opacity-90"
        aria-hidden="true"
      />

      {/* 3D Isometric MVP System Stage — 100% Transparent Background */}
      <div className="relative w-full aspect-[1024/571]">
        <Image
          src="/images/app-development/mvp-hero-transparent.webp"
          alt="MVP Real-Time Validation Platform and Agile Production Architecture"
          width={1024}
          height={571}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-out hover:scale-[1.01]"
        />
      </div>
    </div>
  )
}
