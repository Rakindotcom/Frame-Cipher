'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Lock, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react'

export default function GoogleAdsHeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14
    setMousePos({ x, y })
  }

  return (
    <div
      className="relative mx-auto flex w-full max-w-[620px] items-center justify-center select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Atmospheric Brand Violet Aura */}
      <div className="absolute -inset-6 rounded-full bg-purple-600/[0.08] blur-[120px] pointer-events-none" />

      {/* 3D Interactive Parallax Card Container */}
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:border-white/[0.14]"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.02)`
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        }}
      >

        {/* 3D Visual Viewport with Floating 3D Google Emblem */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#09090B]">
          <Image
            src="/images/google-ads-hero-3d.webp"
            alt="Google Ads Management Service in Bangladesh - 3D Google Icon & Performance Engine"
            width={1376}
            height={768}
            priority
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
        </div>
      </div>
    </div>
  )
}
