'use client'

import React, { useState } from 'react'
import {
  Compass,
  Clapperboard,
  Megaphone,
  Search,
  Globe,
  Cpu,
} from 'lucide-react'

const ORBIT_PILLARS = [
  {
    id: 'strategy',
    label: 'Brand Strategy',
    angle: 0,
    icon: Compass,
    color: 'text-purple-400',
    border: 'border-purple-500/40',
    glow: 'shadow-[0_0_24px_rgba(168,85,247,0.3)]',
  },
  {
    id: 'media',
    label: 'Video & Media',
    angle: 60,
    icon: Clapperboard,
    color: 'text-pink-400',
    border: 'border-pink-500/40',
    glow: 'shadow-[0_0_24px_rgba(236,72,153,0.3)]',
  },
  {
    id: 'ads',
    label: 'Paid Ads',
    angle: 120,
    icon: Megaphone,
    color: 'text-sky-400',
    border: 'border-sky-500/40',
    glow: 'shadow-[0_0_24px_rgba(56,189,248,0.3)]',
  },
  {
    id: 'seo',
    label: 'Search & SEO',
    angle: 180,
    icon: Search,
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
    glow: 'shadow-[0_0_24px_rgba(52,211,153,0.3)]',
  },
  {
    id: 'web',
    label: 'Web & CRO',
    angle: 240,
    icon: Globe,
    color: 'text-amber-400',
    border: 'border-amber-500/40',
    glow: 'shadow-[0_0_24px_rgba(251,191,36,0.3)]',
  },
  {
    id: 'crm',
    label: 'CRM & CAPI',
    angle: 300,
    icon: Cpu,
    color: 'text-indigo-400',
    border: 'border-indigo-500/40',
    glow: 'shadow-[0_0_24px_rgba(129,140,248,0.3)]',
  },
]

export default function ThreeSixtyHeroVisual() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTilt({
      rx: -(y / rect.height) * 14,
      ry: (x / rect.width) * 14,
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
      {/* Atmospheric Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-600/[0.12] blur-[140px]"
        aria-hidden="true"
      />

      {/* Interactive 3D Dark Surface Stage */}
      <div
        className="group relative aspect-square sm:aspect-[16/12] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-all duration-300 ease-out hover:border-white/[0.14] flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Architectural Blueprint Dots */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />

        {/* Keyframes for 360-Degree Orbit + Upright Counter-Rotation */}
        <style jsx>{`
          @keyframes orbit360 {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes counterOrbit360 {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
          @keyframes radarSweep {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .orbit-wheel {
            animation: orbit360 32s linear infinite;
          }
          .orbit-node-upright {
            animation: counterOrbit360 32s linear infinite;
          }
          .group:hover .orbit-wheel,
          .group:hover .orbit-node-upright {
            animation-play-state: paused;
          }
          .radar-cone {
            animation: radarSweep 12s linear infinite;
          }
        `}</style>

        {/* Outer Degree Tick Ring */}
        <div className="pointer-events-none absolute h-[310px] w-[310px] sm:h-[370px] sm:w-[370px] rounded-full border border-white/[0.05] [animation:spin_60s_linear_infinite] motion-reduce:animate-none" />

        {/* Middle Dashed Gyroscope Ring */}
        <div className="pointer-events-none absolute h-[240px] w-[240px] sm:h-[290px] sm:w-[290px] rounded-full border border-dashed border-purple-500/25 [animation:spin_36s_linear_infinite_reverse] motion-reduce:animate-none" />

        {/* Inner Core Ring */}
        <div className="pointer-events-none absolute h-[140px] w-[140px] sm:h-[170px] sm:w-[170px] rounded-full border border-white/[0.08]" />

        {/* Subtle 360° Conic Radar Sweep */}
        <div
          className="radar-cone pointer-events-none absolute h-[240px] w-[240px] sm:h-[290px] sm:w-[290px] rounded-full opacity-25 motion-reduce:animate-none"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(168, 85, 247, 0.35) 360deg)',
          }}
        />

        {/* Rotating 360° Wheel with 6 Counter-Rotating Growth Pillar Nodes */}
        <div
          className="orbit-wheel relative flex h-[240px] w-[240px] sm:h-[290px] sm:w-[290px] items-center justify-center motion-reduce:animate-none"
          style={{ transform: 'translateZ(28px)' }}
        >
          {ORBIT_PILLARS.map((node) => {
            const Icon = node.icon
            return (
              <div
                key={node.id}
                className="absolute inset-0 flex items-start justify-center pointer-events-none"
                style={{ transform: `rotate(${node.angle}deg)` }}
              >
                {/* Node positioned at the top edge of the rotated spoke */}
                <div
                  className="-mt-6 sm:-mt-7 pointer-events-auto"
                  style={{ transform: `rotate(-${node.angle}deg)` }}
                >
                  <div className="orbit-node-upright flex flex-col items-center motion-reduce:animate-none">
                    <div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border ${node.border} bg-[#18181B]/95 backdrop-blur-md ${node.glow} transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${node.color}`} />
                    </div>
                    <span className="mt-1.5 rounded-full border border-white/[0.08] bg-[#09090B]/90 px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-medium tracking-wider text-zinc-200 whitespace-nowrap shadow-sm">
                      {node.label}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Central 360° Growth Core Emblem (Stationary in Center) */}
        <div
          className="pointer-events-none absolute z-20 flex flex-col items-center justify-center"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border border-purple-500/40 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#1e1030] shadow-[0_0_45px_rgba(168,85,247,0.35)] ring-4 ring-purple-500/10">
            <span className="font-heading text-2xl sm:text-3xl font-medium leading-none tracking-tight text-white">
              360&deg;
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-frame-accent">
              Growth OS
            </span>
          </div>
        </div>

        {/* Four Precision Architectural Corner Marks */}
        <div className="pointer-events-none absolute top-4 left-4 h-3 w-3 border-t border-l border-white/20" />
        <div className="pointer-events-none absolute top-4 right-4 h-3 w-3 border-t border-r border-white/20" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/20" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/20" />
      </div>
    </div>
  )
}

