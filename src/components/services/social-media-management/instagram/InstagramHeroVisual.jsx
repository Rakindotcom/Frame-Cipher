'use client'

import React, { useState } from 'react'

export default function InstagramHeroVisual() {
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
      {/* 1. Deep Atmospheric Brand Glow (Instagram Gradient Aura) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[#E1306C]/15 via-[#A855F7]/12 to-[#F77737]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#A855F7]/[0.08] blur-[160px]"
        aria-hidden="true"
      />

      {/* 2. Interactive 3D Dark Surface Stage with Parallax Tilt */}
      <div
        className="group relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 ease-out hover:border-pink-500/30 flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Orbit Rings (Rotating Geometries Centered in Grid) */}
        <div className="pointer-events-none absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-white/[0.05] [animation:spin_50s_linear_infinite] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-dashed border-pink-500/20 [animation:spin_30s_linear_infinite_reverse] motion-reduce:animate-none" />
        <div className="pointer-events-none absolute h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-white/[0.06] [animation:spin_20s_linear_infinite] motion-reduce:animate-none" />

        {/* CSS Keyframes for smooth floating buoyancy */}
        <style jsx>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          .animate-float-ig {
            animation: floatSlow 5.5s ease-in-out infinite;
          }
        `}</style>

        {/* Floating Instagram Emblem (Layered 3D Parallax with Neon Gradient Brand Glow) */}
        <div
          className="relative z-10 flex items-center justify-center animate-float-ig"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="group/icon relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-xl border border-pink-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#25091a] p-6 shadow-[0_0_50px_rgba(225,48,108,0.3)] transition-colors duration-300 hover:scale-110 hover:border-pink-500/60 hover:shadow-[0_0_65px_rgba(225,48,108,0.55)]">
            {/* Instagram Multi-stop Vector Glyph */}
            <svg
              className="h-12 w-12 sm:h-14 sm:w-14 drop-shadow-[0_0_18px_rgba(225,48,108,0.75)]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <defs>
                <linearGradient id="instaVisualGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="30%" stopColor="#F77737" />
                  <stop offset="65%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#C13584" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                stroke="url(#instaVisualGrad)"
                strokeWidth="2"
              />
              <path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                stroke="url(#instaVisualGrad)"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="url(#instaVisualGrad)" />
            </svg>

            <span className="absolute -bottom-7 font-mono text-[10px] uppercase tracking-widest text-pink-300/80">
              Instagram
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
