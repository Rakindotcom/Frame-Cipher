'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function ApiHeroVisual() {
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
      className="app-hero-visual relative mx-auto flex w-full max-w-[620px] items-center justify-center select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Cybernetic Radial Glow */}
      <div className="absolute -inset-6 rounded-full bg-purple-600/[0.08] blur-[120px] pointer-events-none" />

      {/* 3D Interactive Parallax Card Container (Pure Unobstructed Image) */}
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] ring-1 ring-white/[0.08] transition-colors duration-300 ease-out hover:border-white/[0.14]"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.02)`
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        }}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#09090B]">
          <Image
            src="/images/app-development/api-development-hero.webp"
            alt="API Development & System Integration - 3D Isometric Microservices Architecture"
            width={1792}
            height={1024}
            priority
            unoptimized
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
        </div>
      </div>
    </div>
  )
}
