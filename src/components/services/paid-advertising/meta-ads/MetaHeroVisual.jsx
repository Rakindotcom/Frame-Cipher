'use client'

import React, { useState } from 'react'

export default function MetaHeroVisual() {
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
        <div className="pointer-events-none absolute h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-white/[0.05] [animation:spin_35s_linear_infinite] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-44 w-44 sm:h-60 sm:w-60 rounded-full border border-dashed border-purple-500/25 [animation:spin_20s_linear_infinite_reverse] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full border border-white/[0.08] [animation:spin_15s_linear_infinite] motion-reduce:animate-none" />

        {/* Core Animated 3D Meta Infinity Emblem (Dead Center of Grid, No Background Behind It) */}
        <div
          className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105"
          style={{ transform: 'translateZ(40px)' }}
        >
          <svg
            className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-[transform,border-color] duration-500"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Meta advertising performance visual"
          >
            <defs>
              <linearGradient id="metaOnlyGrad" x1="10" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              <filter id="metaOnlyGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Meta Infinity Loop Path - Completely transparent inside/behind */}
            <path
              d="M26.5 28C15.2 28 8 36.8 8 49.5C8 62.4 15.5 72 26.5 72C34.2 72 41.5 66.8 50 55.2C58.5 66.8 65.8 72 73.5 72C84.5 72 92 62.4 92 49.5C92 36.8 84.8 28 73.5 28C65.5 28 58.2 33.5 50 44.8C41.8 33.5 34.5 28 26.5 28ZM27 36C32.8 36 38.5 41.2 44.8 50C38.5 58.8 32.8 64 27 64C19.5 64 15.5 57.5 15.5 49.5C15.5 41.8 19.8 36 27 36ZM73 36C80.2 36 84.5 41.8 84.5 49.5C84.5 57.5 80.5 64 73 64C67.2 64 61.5 58.8 55.2 50C61.5 41.2 67.2 36 73 36Z"
              fill="url(#metaOnlyGrad)"
              filter="url(#metaOnlyGlow)"
            />
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
