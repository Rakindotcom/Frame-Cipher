'use client'

import React, { useState } from 'react'

export default function LinkedinHeroVisual() {
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

        {/* Core Animated 3D LinkedIn Emblem ("in" Tile Dead Center of Grid) */}
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
            aria-label="LinkedIn advertising performance visual"
          >
            <defs>
              <linearGradient id="linkedinGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="45%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              <linearGradient id="inLetterGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F3E8FF" />
              </linearGradient>
              <filter id="linkedinGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Rounded Square Emblem Base */}
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="18"
              fill="url(#linkedinGrad)"
              filter="url(#linkedinGlow)"
            />

            {/* Inner Border Accent */}
            <rect
              x="11"
              y="11"
              width="78"
              height="78"
              rx="17"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
              fill="none"
            />

            {/* The "i" dot */}
            <circle cx="31" cy="32" r="5.5" fill="url(#inLetterGrad)" />

            {/* The "i" stem */}
            <rect x="25.5" y="42" width="11" height="32" rx="2" fill="url(#inLetterGrad)" />

            {/* The "n" letter geometry */}
            <path
              d="M44 42H54.5V47C56.8 43.2 61.5 41 68 41C78.5 41 82 48 82 59V74H71V60.5C71 54.5 69.2 50.5 63.5 50.5C57.5 50.5 55 54.8 55 60.5V74H44V42Z"
              fill="url(#inLetterGrad)"
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
