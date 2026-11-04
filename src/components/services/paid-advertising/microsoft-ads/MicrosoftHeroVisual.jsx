'use client'

import React, { useState } from 'react'

export default function MicrosoftHeroVisual() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTilt({
      rx: -(y / rect.height) * 16,
      ry: (x / rect.width) * 16,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex w-full max-w-[620px] items-center justify-center select-none py-2"
      style={{ perspective: '1200px' }}
    >
      {/* 1. Deep Atmospheric Violet Brand Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-600/[0.08] blur-[140px]"
        aria-hidden="true"
      />

      {/* 2. Interactive 3D Dark Surface Stage with Parallax Tilt (Strictly Zero Text, Pure Centered Grid) */}
      <div
        className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-8 transition-[transform,border-color] duration-300 ease-out hover:border-white/[0.14] flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Outer Orbit Rings (Rotating Geometries Centered in Grid) */}
        <div className="pointer-events-none absolute h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-white/[0.05] [animation:spin_40s_linear_infinite] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-44 w-44 sm:h-60 sm:w-60 rounded-full border border-dashed border-purple-500/25 [animation:spin_25s_linear_infinite_reverse] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full border border-white/[0.08] [animation:spin_18s_linear_infinite] motion-reduce:animate-none" />

        {/* Core Animated 3D Microsoft Emblem (Dead Center of Grid, No Background Behind It) */}
        <div
          className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105"
          style={{ transform: 'translateZ(40px)' }}
        >
          <svg
            className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-[transform,border-color] duration-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Microsoft advertising performance visual"
          >
            <defs>
              <linearGradient id="msftGradTL" x1="1" y1="1" x2="11.5" y2="11.5" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              <linearGradient id="msftGradTR" x1="12.5" y1="1" x2="23" y2="11.5" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
              <linearGradient id="msftGradBL" x1="1" y1="12.5" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
              <linearGradient id="msftGradBR" x1="12.5" y1="12.5" x2="23" y2="23" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              <filter id="msftGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Official Microsoft 4-Quadrant Emblem Geometry in Brand Monochromatic Violet */}
            <rect x="1" y="1" width="10" height="10" rx="1.5" fill="url(#msftGradTL)" filter="url(#msftGlow)" />
            <rect x="13" y="1" width="10" height="10" rx="1.5" fill="url(#msftGradTR)" filter="url(#msftGlow)" />
            <rect x="1" y="13" width="10" height="10" rx="1.5" fill="url(#msftGradBL)" filter="url(#msftGlow)" />
            <rect x="13" y="13" width="10" height="10" rx="1.5" fill="url(#msftGradBR)" filter="url(#msftGlow)" />
          </svg>
        </div>

        {/* Four Precision Corner Marks (Architectural Framing, Zero Text) */}
        <div className="pointer-events-none absolute top-4 left-4 h-3 w-3 border-t border-l border-white/20" />
        <div className="pointer-events-none absolute top-4 right-4 h-3 w-3 border-t border-r border-white/20" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/20" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/20" />
      </div>
    </div>
  )
}

