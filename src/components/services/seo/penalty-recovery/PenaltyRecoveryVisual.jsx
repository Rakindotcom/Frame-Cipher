'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function PenaltyRecoveryVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16
    setMousePos({ x, y })
  }

  return (
    <div
      className="relative mx-auto flex w-full items-center justify-center select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Atmospheric Ambient Radial Glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-600/25 via-transparent to-blue-600/20 blur-3xl pointer-events-none" />

      {/* Main Transparent Image Container - 50/50 Layout, NO BOX BG, OBJECT-CONTAIN */}
      <div
        className="relative z-10 w-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.03)`
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        }}
      >
        <Image
          src="/images/google-penalty-recovery-hero-transparent.webp"
          alt="Google Penalty Recovery Visual - Referee Red Card and Google Logo"
          width={1376}
          height={768}
          priority
          className="w-full h-auto object-contain block drop-shadow-[0_25px_55px_rgba(0,0,0,0.95)] filter brightness-105 contrast-105"
        />
      </div>
    </div>
  )
}
