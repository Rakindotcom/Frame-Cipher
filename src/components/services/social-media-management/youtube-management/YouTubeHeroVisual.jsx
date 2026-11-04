'use client'

import React, { useState } from 'react'
import { Play, TrendingUp, Search, Eye, BarChart3, Clock } from 'lucide-react'

export default function YouTubeHeroVisual() {
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
      {/* 1. Deep Atmospheric Brand Glow (Purple Brand Fusion) */}
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
            50% { transform: translateY(-12px) rotate(1.5deg); }
          }
          .animate-float-yt {
            animation: floatSlow 5.5s ease-in-out infinite;
          }
        `}</style>

        {/* Floating YouTube Centerpiece (Layered 3D Parallax Card) */}
        <div
          className="relative z-10 flex items-center justify-center animate-float-yt"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="relative flex h-36 w-48 sm:h-44 sm:w-60 flex-col items-center justify-center rounded-2xl border border-white/[0.12] bg-gradient-to-br from-[#1C1A24] via-[#15121D] to-[#0D0B12] p-5 shadow-2xl shadow-purple-950/40">
            {/* Top status bar inside player card */}
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-2">
              <span className="flex items-center gap-1.5 text-frame-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>4K Master</span>
              </span>
              <span className="text-zinc-500">YouTube Studio</span>
            </div>

            {/* Red & White YouTube Emblem */}
            <div className="mt-4 flex h-14 w-20 sm:h-16 sm:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/30 transition-transform duration-300 group-hover:scale-105">
              <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-white text-white ml-1" />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
                YouTube Growth OS
              </span>
            </div>

            {/* Scrub bar animation */}
            <div className="absolute bottom-3 left-4 right-4">
              <div className="h-1 w-full bg-white/[0.1] rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-red-500 to-frame-accent rounded-full" />
              </div>
              <div className="mt-1 flex justify-between text-[9px] font-mono text-zinc-500">
                <span>08:42</span>
                <span>12:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Satellite Card 1: Top-Right (Search & SEO Discovery) */}
        <div
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#121214]/95 px-3 py-2 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(65px)' }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
            <Search className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase text-zinc-400">Search Discovery</div>
            <div className="text-xs font-semibold text-white">124K+ Evergreen Views</div>
          </div>
        </div>

        {/* Floating Satellite Card 2: Bottom-Left (Retention & Watch Time) */}
        <div
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214]/95 px-3 py-2 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(75px)' }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase text-zinc-400">Audience Retention</div>
            <div className="text-xs font-semibold text-emerald-400">+64.8% Average Watch</div>
          </div>
        </div>

        {/* Floating Satellite Card 3: Bottom-Right (Shorts & Repurposing) */}
        <div
          className="hidden sm:flex absolute bottom-4 right-6 z-20 items-center gap-2 rounded-xl border border-white/[0.08] bg-[#121214]/95 px-3 py-2 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(55px)' }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-400">
            <Play className="h-3 w-3 fill-current" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase text-zinc-400">Shorts Synergy</div>
            <div className="text-xs font-semibold text-white">Long + Shorts System</div>
          </div>
        </div>

        {/* Corner Precision Marks */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-white/20" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-white/20" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/20" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/20" />
      </div>
    </div>
  )
}

