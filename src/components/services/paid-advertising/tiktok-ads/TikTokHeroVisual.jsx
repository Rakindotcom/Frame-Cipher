'use client'

import React, { useState } from 'react'

export default function TikTokHeroVisual() {
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

        {/* Core Animated 3D TikTok Note Emblem (Dead Center of Grid, No Background Behind It) */}
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
            aria-label="TikTok advertising performance visual"
          >
            <defs>
              <linearGradient id="tiktokGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="35%" stopColor="#C084FC" />
                <stop offset="70%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              <filter id="tiktokGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Official TikTok Musical Note Vector Geometry - Pure and Transparent */}
            <path
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
              fill="url(#tiktokGrad)"
              filter="url(#tiktokGlow)"
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

