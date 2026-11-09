'use client'

import React, { useState } from 'react'
import {
  Compass,
  Video,
  TrendingUp,
  Search,
  Globe,
  Cpu,
  Layers,
} from 'lucide-react'

const ORBIT_PILLARS = [
  {
    id: 'strategy',
    label: 'Brand Strategy',
    angle: 0,
    icon: Compass,
    color: '#A855F7',
    delay: '0s',
  },
  {
    id: 'media',
    label: 'Video & Media',
    angle: 60,
    icon: Video,
    color: '#A855F7',
    delay: '0.6s',
  },
  {
    id: 'ads',
    label: 'Paid Ads',
    angle: 120,
    icon: TrendingUp,
    color: '#A855F7',
    delay: '1.2s',
  },
  {
    id: 'seo',
    label: 'Search & SEO',
    angle: 180,
    icon: Search,
    color: '#A855F7',
    delay: '1.8s',
  },
  {
    id: 'web',
    label: 'Web & CRO',
    angle: 240,
    icon: Globe,
    color: '#A855F7',
    delay: '2.4s',
  },
  {
    id: 'crm',
    label: 'CRM & CAPI',
    angle: 300,
    icon: Cpu,
    color: '#A855F7',
    delay: '3.0s',
  },
]

export default function ThreeSixtyHeroVisual() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="relative flex aspect-square w-full max-w-[460px] sm:max-w-[520px] xl:max-w-[560px] select-none items-center justify-center">
      {/* Atmospheric Violet-Purple Ambient Glow (Zero Background Card Behind Visual) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.18)_0%,rgba(168,85,247,0.06)_45%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Animation Styles: Orbit & Counter-Rotation (Zero Text In Animation) */}
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
          animation: orbit360 36s linear infinite;
        }
        .orbit-node-upright {
          animation: counterOrbit360 36s linear infinite;
        }
        .orbit-wheel:hover,
        .orbit-wheel:hover .orbit-node-upright {
          animation-play-state: paused;
        }
        .radar-cone {
          animation: radarSweep 14s linear infinite;
        }
      `}</style>

      {/* SVG Stepped Orbital Track Rings & Planetary Grid */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="fcThreeSixtyDepth" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1030" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#09090B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Depth Shading */}
        <circle cx="300" cy="300" r="190" fill="url(#fcThreeSixtyDepth)" />

        {/* Outer Fine Degree Tick Ring */}
        <circle
          cx="300"
          cy="300"
          r="230"
          fill="none"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Main Orbital Track Ring */}
        <circle
          cx="300"
          cy="300"
          r="190"
          fill="none"
          stroke="rgba(147, 51, 234, 0.35)"
          strokeWidth="1.2"
        />

        {/* Middle Dashed Gyroscope Ring */}
        <circle
          cx="300"
          cy="300"
          r="135"
          fill="none"
          stroke="rgba(168, 85, 247, 0.22)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Inner Core Guide Ring */}
        <circle
          cx="300"
          cy="300"
          r="75"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* Subtle 360° Conic Radar Sweep */}
      <div
        className="radar-cone pointer-events-none absolute h-[380px] w-[380px] rounded-full opacity-30 motion-reduce:animate-none"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(147, 51, 234, 0.35) 360deg)',
        }}
        aria-hidden="true"
      />

      {/* Rotating 360° Wheel with 6 Squircles (STRICTLY ONLY ICONS, ZERO TEXT) */}
      <div
        className="orbit-wheel relative flex h-[380px] w-[380px] items-center justify-center motion-reduce:animate-none z-10"
      >
        {ORBIT_PILLARS.map((node) => {
          const Icon = node.icon
          const isHovered = hoveredId === node.id

          return (
            <div
              key={node.id}
              className="absolute inset-0 flex items-start justify-center pointer-events-none"
              style={{ transform: `rotate(${node.angle}deg)` }}
            >
              {/* Node Positioned Along Orbital Rim */}
              <div
                className="-mt-6 pointer-events-auto"
                style={{ transform: `rotate(-${node.angle}deg)` }}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="orbit-node-upright flex flex-col items-center motion-reduce:animate-none">
                  <div
                    title={node.label}
                    aria-label={node.label}
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'border-purple-600 bg-[#1D1233] scale-115 shadow-[0_0_28px_rgba(147,51,234,0.6)]'
                        : 'border-purple-600/40 bg-[#121214]/90 hover:scale-110 shadow-[0_4px_18px_rgba(147,51,234,0.25)]'
                    }`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Central 360° Kinetic Core Emblem (STRICTLY NO TEXT, ONLY ICON / GLYPH) */}
      <div
        className="pointer-events-none absolute z-20 flex items-center justify-center"
      >
        <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-purple-600/50 bg-gradient-to-br from-[#18181B] via-[#121214] to-[#1E1030] shadow-[0_0_45px_rgba(147,51,234,0.4)] ring-4 ring-purple-600/15">
          <Layers className="h-8 w-8 sm:h-9 sm:w-9 text-purple-600" strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}
