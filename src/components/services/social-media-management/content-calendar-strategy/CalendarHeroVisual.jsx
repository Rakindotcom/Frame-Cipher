'use client'

import React, { useState } from 'react'
import { Calendar, Layers, Sparkles, CheckCircle2, Clock, Share2 } from 'lucide-react'

export default function CalendarHeroVisual() {
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
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          .animate-float-cal {
            animation: floatSlow 5.5s ease-in-out infinite;
          }
        `}</style>

        {/* Floating Master Content Calendar Matrix Card */}
        <div
          className="relative z-10 w-full max-w-sm sm:max-w-md animate-float-cal"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="relative rounded-2xl border border-white/[0.12] bg-gradient-to-br from-[#1C1A24] via-[#15121D] to-[#0E0C13] p-4 sm:p-5 shadow-2xl shadow-purple-950/40">
            {/* Calendar Header Row */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-frame-accent" />
                <span className="font-heading font-semibold uppercase tracking-wider text-white">
                  Master Content Calendar
                </span>
              </div>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-frame-accent">
                Monthly Cycle Active
              </span>
            </div>

            {/* Simulated Calendar Grid */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {/* Monday Item */}
              <div className="rounded-lg border border-white/[0.06] bg-[#121214]/80 p-2 text-left space-y-1">
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>MON 04</span>
                  <span className="text-emerald-400">Approved</span>
                </div>
                <div className="text-[10px] font-semibold text-white truncate">LinkedIn Insight</div>
                <div className="text-[8px] font-mono text-frame-accent">#Authority</div>
              </div>

              {/* Wednesday Item */}
              <div className="rounded-lg border border-purple-500/30 bg-[#161224] p-2 text-left space-y-1 shadow-sm">
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>WED 06</span>
                  <span className="text-frame-accent">Scheduled</span>
                </div>
                <div className="text-[10px] font-semibold text-white truncate">IG Carousel</div>
                <div className="text-[8px] font-mono text-purple-300">#ProductDemo</div>
              </div>

              {/* Friday Item */}
              <div className="rounded-lg border border-white/[0.06] bg-[#121214]/80 p-2 text-left space-y-1">
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>FRI 08</span>
                  <span className="text-amber-400">In Review</span>
                </div>
                <div className="text-[10px] font-semibold text-white truncate">TikTok Reel</div>
                <div className="text-[8px] font-mono text-amber-300">#Education</div>
              </div>
            </div>

            {/* Campaign Ledger Footer */}
            <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[9px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent animate-pulse" />
                <span>Q4 Omnichannel Campaign</span>
              </span>
              <span className="text-frame-accent font-semibold">5 Platforms Synced</span>
            </div>
          </div>
        </div>

        {/* Floating Satellite Card 1: Top-Right (Content Pillars) */}
        <div
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#121214]/95 px-3 py-2 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(65px)' }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
            <Layers className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase text-zinc-400">Content Pillars</div>
            <div className="text-xs font-semibold text-white">Balanced Thematic Mix</div>
          </div>
        </div>

        {/* Floating Satellite Card 2: Bottom-Left (Repurposing Ratio) */}
        <div
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#121214]/95 px-3 py-2 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(75px)' }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <Share2 className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase text-zinc-400">Repurposing Engine</div>
            <div className="text-xs font-semibold text-emerald-400">1 Idea → 5 Formats</div>
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

