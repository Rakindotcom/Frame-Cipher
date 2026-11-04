'use client'

import React, { useState } from 'react'

export default function SocialMediaHeroVisual() {
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
      {/* 1. Deep Atmospheric Violet / Brand Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-600/[0.09] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-600/[0.05] blur-[160px]"
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
          @keyframes floatSlow1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          @keyframes floatSlow2 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-16px) rotate(-3deg); }
          }
          @keyframes floatSlow3 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2.5deg); }
          }
          @keyframes floatSlow4 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-14px) rotate(-2deg); }
          }
          @keyframes floatSlow5 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-18px) rotate(3deg); }
          }
          .animate-float-1 { animation: floatSlow1 5.5s ease-in-out infinite; }
          .animate-float-2 { animation: floatSlow2 6.2s ease-in-out infinite 0.6s; }
          .animate-float-3 { animation: floatSlow3 4.8s ease-in-out infinite 1.2s; }
          .animate-float-4 { animation: floatSlow4 5.8s ease-in-out infinite 1.8s; }
          .animate-float-5 { animation: floatSlow5 6.5s ease-in-out infinite 0.3s; }
        `}</style>

        {/* Floating Platform Icons Cluster (Layered 3D Parallax with Brand Colors) */}
        <div
          className="relative z-10 w-full h-full flex items-center justify-center"
          style={{ transform: 'translateZ(35px)' }}
        >
          {/* CENTER EMBLEM: Instagram (Core Visual Anchor) */}
          <div className="absolute animate-float-1 z-20">
            <div className="group/icon relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border border-pink-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#201018] p-4 shadow-[0_0_35px_rgba(236,72,153,0.25)] transition-colors duration-300 hover:scale-110 hover:border-pink-500/60 hover:shadow-[0_0_45px_rgba(236,72,153,0.4)]">
              {/* Instagram Glyph */}
              <svg
                className="h-10 w-10 sm:h-12 sm:w-12 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="absolute -bottom-6 font-mono text-[9px] uppercase tracking-wider text-pink-300/80">
                Instagram
              </span>
            </div>
          </div>

          {/* TOP LEFT: Facebook */}
          <div className="absolute -top-1 left-4 sm:top-2 sm:left-10 animate-float-2 z-10">
            <div className="group/icon relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#0e1628] p-3 shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-colors duration-300 hover:scale-110 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              {/* Facebook Glyph */}
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="absolute -bottom-5 font-mono text-[9px] uppercase tracking-wider text-blue-300/80">
                Facebook
              </span>
            </div>
          </div>

          {/* TOP RIGHT: LinkedIn */}
          <div className="absolute -top-1 right-4 sm:top-2 sm:right-10 animate-float-3 z-10">
            <div className="group/icon relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#0c1a2c] p-3 shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-colors duration-300 hover:scale-110 hover:border-sky-500/60 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]">
              {/* LinkedIn Glyph */}
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-sky-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.6)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span className="absolute -bottom-5 font-mono text-[9px] uppercase tracking-wider text-sky-300/80">
                LinkedIn
              </span>
            </div>
          </div>

          {/* BOTTOM LEFT: TikTok */}
          <div className="absolute -bottom-1 left-6 sm:bottom-3 sm:left-14 animate-float-4 z-10">
            <div className="group/icon relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#0d1f22] p-3 shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-colors duration-300 hover:scale-110 hover:border-cyan-500/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]">
              {/* TikTok Glyph */}
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="absolute -bottom-5 font-mono text-[9px] uppercase tracking-wider text-cyan-300/80">
                TikTok
              </span>
            </div>
          </div>

          {/* BOTTOM RIGHT: YouTube */}
          <div className="absolute -bottom-1 right-6 sm:bottom-3 sm:right-14 animate-float-5 z-10">
            <div className="group/icon relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#250d10] p-3 shadow-[0_0_25px_rgba(239,68,68,0.2)] transition-colors duration-300 hover:scale-110 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]">
              {/* YouTube Glyph */}
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="absolute -bottom-5 font-mono text-[9px] uppercase tracking-wider text-red-300/80">
                YouTube
              </span>
            </div>
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
