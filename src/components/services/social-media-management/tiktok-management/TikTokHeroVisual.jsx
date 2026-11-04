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
      {/* 1. Deep Atmospheric Brand Glow (Website Purple Fusion) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-600/[0.12] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-900/[0.08] blur-[160px]"
        aria-hidden="true"
      />

      {/* 2. Interactive 3D Dark Surface Stage with Parallax Tilt */}
      <div
        className="group relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 ease-out hover:border-purple-500/30 flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Orbit Rings (Rotating Geometries Centered in Grid) */}
        <div className="pointer-events-none absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-white/[0.05] [animation:spin_50s_linear_infinite] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-dashed border-purple-500/20 [animation:spin_30s_linear_infinite_reverse] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-white/[0.06] [animation:spin_20s_linear_infinite] motion-reduce:animate-none" />

        {/* CSS Keyframes for smooth floating buoyancy */}
        <style jsx>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          .animate-float-tt {
            animation: floatSlow 5.5s ease-in-out infinite;
          }
        `}</style>

        {/* Floating TikTok Emblem (Layered 3D Parallax with Neon Brand Glow) */}
        <div
          className="relative z-10 flex items-center justify-center animate-float-tt"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="group/icon relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#1e0f33] p-6 shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-colors duration-300 hover:scale-110 hover:border-purple-500/60 hover:shadow-[0_0_65px_rgba(168,85,247,0.45)]">
            {/* TikTok Glyph Vector */}
            <svg
              className="h-12 w-12 sm:h-14 sm:w-14 text-white drop-shadow-[0_0_16px_rgba(168,85,247,0.6)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>

            <span className="absolute -bottom-7 font-mono text-[10px] uppercase tracking-widest text-frame-accent">
              TikTok
            </span>
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

