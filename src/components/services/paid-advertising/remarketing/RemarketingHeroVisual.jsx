'use client'

import React, { useState } from 'react'

export default function RemarketingHeroVisual() {
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

      {/* 2. Interactive 3D Dark Surface Stage with Parallax Tilt */}
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

        {/* Core Animated 3D Retargeting / Precision Funnel Re-engagement Loop */}
        <div
          className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="[animation:spin_50s_linear_infinite] motion-reduce:animate-none">
            <svg
              className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-[transform,border-color] duration-500"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Remarketing Audience Cycle Visual"
            >
              <defs>
                <linearGradient id="remarketingGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E9D5FF" />
                  <stop offset="35%" stopColor="#C084FC" />
                  <stop offset="70%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#7E22CE" />
                </linearGradient>
                <filter id="remarketingGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Retargeting Dynamic Re-engagement Loop: Dual Interlocking Precision Flow */}
              {/* Outer Cycle Arc 1 with Arrow Head */}
              <path
                d="M50 14 C69.88 14 86 30.12 86 50 C86 58.2 83.2 65.8 78.5 71.8 L74.2 67.5 C77.8 62.5 80 56.5 80 50 C80 33.43 66.57 20 50 20 C42.1 20 34.8 23.1 29.5 28.1 L36 34.6 L18 36 L19.4 18 L25.2 23.8 C31.7 17.7 40.4 14 50 14 Z"
                fill="url(#remarketingGrad)"
                filter="url(#remarketingGlow)"
              />

              {/* Outer Cycle Arc 2 with Arrow Head */}
              <path
                d="M50 86 C30.12 86 14 69.88 14 50 C14 41.8 16.8 34.2 21.5 28.2 L25.8 32.5 C22.2 37.5 20 43.5 20 50 C20 66.57 33.43 80 50 80 C57.9 80 65.2 76.9 70.5 71.9 L64 65.4 L82 64 L80.6 82 L74.8 76.2 C68.3 82.3 59.6 86 50 86 Z"
                fill="url(#remarketingGrad)"
                filter="url(#remarketingGlow)"
              />

              {/* Center Target & Retention Nexus */}
              <circle cx="50" cy="50" r="14" stroke="url(#remarketingGrad)" strokeWidth="2.5" fill="none" opacity="0.85" />
              <circle cx="50" cy="50" r="6" fill="url(#remarketingGrad)" filter="url(#remarketingGlow)" />
              <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" />
            </svg>
          </div>
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

