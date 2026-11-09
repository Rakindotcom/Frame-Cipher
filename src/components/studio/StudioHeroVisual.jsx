'use client'

import React, { useState } from 'react'
import {
  Mic,
  Video,
  Camera,
  Film,
  Sliders,
  Sparkles,
} from 'lucide-react'

// 6 Core Studio Production Badges (Floating Squircle Cards with Just Icons - Matching Home Hero)
const badges = [
  {
    id: 'podcast',
    name: 'Acoustic Soundstage & Multi-Mic Podcasts',
    icon: Mic,
    iconColor: '#A855F7',
    bgHex: '#130D22',
    activeBg: '#1D1233',
    borderHex: 'rgba(168, 85, 247, 0.45)',
    activeBorder: '#A855F7',
    position: 'top-[3.8%] left-[51.6%] -translate-x-1/2',
    linePath: 'M 320 170 L 320 72',
    node: { cx: 320, cy: 170 },
    delay: '0s',
  },
  {
    id: 'multicam',
    name: 'Cinema 4K Multi-Camera Shoots',
    icon: Video,
    iconColor: '#00DC82',
    bgHex: '#06181B',
    activeBg: '#092529',
    borderHex: 'rgba(0, 220, 130, 0.45)',
    activeBorder: '#00DC82',
    position: 'top-[16%] left-[17.2%]',
    linePath: 'M 240 215 L 240 120 L 158 120',
    node: { cx: 240, cy: 215 },
    delay: '0.6s',
  },
  {
    id: 'product',
    name: 'Commercial Product & Brand Staging',
    icon: Camera,
    iconColor: '#F59E0B',
    bgHex: '#1B1306',
    activeBg: '#2A1C09',
    borderHex: 'rgba(245, 158, 11, 0.45)',
    activeBorder: '#F59E0B',
    position: 'top-[41.5%] left-[6%]',
    linePath: 'M 175 275 L 88 275',
    node: { cx: 175, cy: 275 },
    delay: '1.2s',
  },
  {
    id: 'davinci',
    name: 'DaVinci Resolve Color Suite',
    icon: Film,
    iconColor: '#EC4899',
    bgHex: '#1D0D19',
    activeBg: '#2C1326',
    borderHex: 'rgba(236, 72, 153, 0.45)',
    activeBorder: '#EC4899',
    position: 'top-[12.8%] left-[77.4%]',
    linePath: 'M 370 180 L 410 100 L 480 100',
    node: { cx: 370, cy: 180 },
    delay: '1.8s',
  },
  {
    id: 'mixing',
    name: 'Acoustic Monitoring & Sound Mixing',
    icon: Sliders,
    iconColor: '#38BDF8',
    bgHex: '#081726',
    activeBg: '#0C233A',
    borderHex: 'rgba(56, 189, 248, 0.45)',
    activeBorder: '#38BDF8',
    position: 'top-[27%] left-[87.1%]',
    linePath: 'M 450 250 L 490 185 L 540 185',
    node: { cx: 450, cy: 250 },
    delay: '2.4s',
  },
  {
    id: 'post',
    name: 'Kinetic Motion & Short-Form Cutdowns',
    icon: Sparkles,
    iconColor: '#818CF8',
    bgHex: '#0E1026',
    activeBg: '#141738',
    borderHex: 'rgba(129, 140, 248, 0.45)',
    activeBorder: '#818CF8',
    position: 'top-[48.6%] left-[88.7%]',
    linePath: 'M 430 375 L 480 315 L 550 315',
    node: { cx: 430, cy: 375 },
    delay: '3.0s',
  },
]

// Inactive background constellation nodes
const ambientNodes = [
  { cx: 320, cy: 345 },
  { cx: 225, cy: 380 },
  { cx: 370, cy: 435 },
  { cx: 275, cy: 275 },
]

export default function StudioHeroVisual() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="relative flex aspect-square w-full max-w-[500px] sm:max-w-[560px] xl:max-w-[620px] select-none items-center justify-center py-2">
      {/* Central Soft Ambient Violet/Indigo Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.18)_0%,rgba(56,189,248,0.05)_45%,transparent_70%)] blur-3xl opacity-90"
        aria-hidden="true"
      />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulseCircuit {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.95;
          }
        }
        @keyframes rotateTrack {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fcGlobeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .circuit-line-pulse {
          animation: pulseCircuit 3.5s ease-in-out infinite;
        }
        .orbit-spin {
          transform-origin: 320px 310px;
          animation: rotateTrack 60s linear infinite;
        }
      `}</style>

      {/* 3D Spherical Soundstage & Stepped Connector Circuit SVG */}
      <svg
        viewBox="0 0 640 600"
        className="h-full w-full overflow-visible pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="fcStudioDepthGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1030" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#09090B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Dark Sphere Shading to create depth */}
        <circle cx="320" cy="310" r="180" fill="url(#fcStudioDepthGlow)" />

        {/* Outer Boundary Rim */}
        <circle
          cx="320"
          cy="310"
          r="180"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.2"
        />

        {/* Concentric Radar Orbit Ring (dashed) */}
        <circle
          cx="320"
          cy="310"
          r="220"
          fill="none"
          stroke="rgba(168, 85, 247, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="orbit-spin"
        />

        {/* Latitude Sound Stage Arcs (Ellipses) */}
        <ellipse
          cx="320"
          cy="310"
          rx="180"
          ry="65"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />
        <ellipse
          cx="320"
          cy="255"
          rx="160"
          ry="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.8"
        />
        <ellipse
          cx="320"
          cy="365"
          rx="160"
          ry="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.8"
        />

        {/* Longitude Arcs */}
        <ellipse
          cx="320"
          cy="310"
          rx="68"
          ry="180"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />
        <ellipse
          cx="320"
          cy="310"
          rx="125"
          ry="180"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.8"
        />
        <line
          x1="320"
          y1="130"
          x2="320"
          y2="490"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
        />

        {/* Inactive Ambient Star Nodes */}
        {ambientNodes.map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r="2"
            fill="rgba(255, 255, 255, 0.3)"
          />
        ))}

        {/* Stepped Circuit Connector Lines & Active Nodes */}
        {badges.map((b) => {
          const isHovered = hoveredId === b.id
          return (
            <g key={`circuit-${b.id}`}>
              {/* Stepped Trace Line */}
              <path
                d={b.linePath}
                fill="none"
                stroke={isHovered ? b.activeBorder : b.borderHex}
                strokeWidth={isHovered ? '2' : '1.4'}
                strokeDasharray={isHovered ? 'none' : '3 3'}
                className="circuit-line-pulse transition-all duration-300"
              />

              {/* Sphere Anchor Node */}
              <circle
                cx={b.node.cx}
                cy={b.node.cy}
                r={isHovered ? '6' : '4.5'}
                fill={b.bgHex}
                stroke={isHovered ? b.activeBorder : b.iconColor}
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* Ping Ring for hovered node */}
              {isHovered && (
                <circle
                  cx={b.node.cx}
                  cy={b.node.cy}
                  r="12"
                  fill="none"
                  stroke={b.iconColor}
                  strokeWidth="1"
                  opacity="0.8"
                  className="animate-ping"
                />
              )}
            </g>
          )
        })}

        {/* Center Core: Live Production Recording Status */}
        <g>
          <circle
            cx="320"
            cy="310"
            r="16"
            fill="#120B20"
            stroke="#A855F7"
            strokeWidth="1.5"
          />
          <circle
            cx="320"
            cy="310"
            r="6"
            fill="#EC4899"
          />
        </g>
      </svg>

      {/* 6 Precision Floating Squircle Cards (Dark Glass, Icon Only - Exactly like Home Hero) */}
      {badges.map((b) => {
        const Icon = b.icon
        const isHovered = hoveredId === b.id

        return (
          <div
            key={b.id}
            onMouseEnter={() => setHoveredId(b.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              animation: 'fcGlobeFloat 4.5s ease-in-out infinite',
              animationDelay: b.delay,
            }}
            className={`absolute z-20 ${b.position}`}
          >
            <div
              title={b.name}
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                isHovered
                  ? 'scale-115 -translate-y-1'
                  : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: isHovered ? b.activeBg : b.bgHex,
                borderColor: isHovered ? b.activeBorder : b.borderHex,
                boxShadow: isHovered
                  ? `0 0 24px ${b.iconColor}99, 0 4px 20px rgba(0,0,0,0.6)`
                  : `0 4px 18px ${b.iconColor}33, 0 2px 10px rgba(0,0,0,0.5)`,
              }}
            >
              <Icon
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300"
                style={{ color: b.iconColor }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

