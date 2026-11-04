'use client'

import React, { useState } from 'react'

export default function FacebookHeroVisual() {
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
      {/* 1. Deep Atmospheric Brand Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-600/[0.10] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-indigo-600/[0.06] blur-[160px]"
        aria-hidden="true"
      />

      {/* 2. Interactive 3D Dark Surface Stage with Parallax Tilt */}
      <div
        className="group relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 ease-out hover:border-blue-500/30 flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Orbit Rings (Rotating Geometries Centered in Grid) */}
        <div className="pointer-events-none absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-white/[0.05] [animation:spin_50s_linear_infinite] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-dashed border-blue-500/20 [animation:spin_30s_linear_infinite_reverse] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-white/[0.06] [animation:spin_20s_linear_infinite] motion-reduce:animate-none" />

        {/* CSS Keyframes for smooth floating buoyancy */}
        <style jsx>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          .animate-float-fb {
            animation: floatSlow 5.5s ease-in-out infinite;
          }
        `}</style>

        {/* Floating Facebook Emblem (Layered 3D Parallax with Neon Blue Brand Glow) */}
        <div
          className="relative z-10 flex items-center justify-center animate-float-fb"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="group/icon relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-xl border border-blue-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#0c1930] p-6 shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-colors duration-300 hover:scale-110 hover:border-blue-500/60 hover:shadow-[0_0_65px_rgba(59,130,246,0.5)]">
            {/* Facebook Glyph */}
            <svg
              className="h-12 w-12 sm:h-14 sm:w-14 text-blue-400 drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="absolute -bottom-7 font-mono text-[10px] uppercase tracking-widest text-blue-300/80">
              Facebook
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

