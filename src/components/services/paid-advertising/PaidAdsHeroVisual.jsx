'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Lock, Sparkles, Activity } from 'lucide-react'

export default function PaidAdsHeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
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
      {/* Dynamic Cybernetic Radial Glow */}
      <div className="absolute -inset-6 rounded-full bg-purple-600/[0.08] blur-[120px] pointer-events-none" />

      {/* 3D Interactive Parallax Card Container */}
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] ring-1 ring-white/[0.08] backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:border-white/[0.14]"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.02)`
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        }}
      >
     
    

        {/* 3D Visual Viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
          <Image
            src="/images/paid-advertising-hero-3d.webp"
            alt="Paid Advertising Services in Bangladesh - 3D Floating Platform Icons Architecture"
            width={1792}
            height={1024}
            priority
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Holographic Edge Overlay Gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
        </div>

      
      </div>
    </div>
  )
}
