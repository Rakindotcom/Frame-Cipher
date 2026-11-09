'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Code2,
  TrendingUp,
  Search,
  Video,
  Smartphone,
  Share2,
  FileText,
} from 'lucide-react'

// 7 Macro Service Pillars Represented Purely as Precision Visual Glyphs (Zero Text In Animation)
const servicePillars = [
  {
    id: 'web',
    name: 'Website Design & Development',
    icon: Code2,
    color: '#A855F7',
    bgHex: '#130D22',
    activeBg: '#1D1233',
    borderHex: 'rgba(168, 85, 247, 0.45)',
    activeBorder: '#A855F7',
    position: 'top-[4%] left-1/2 -translate-x-1/2',
    linePath: 'M 320 170 L 320 72',
    node: { cx: 320, cy: 170 },
    delay: '0s',
    href: '/services/website-design-development',
  },
  {
    id: 'ads',
    name: 'Paid Advertising',
    icon: TrendingUp,
    color: '#3B82F6',
    bgHex: '#081426',
    activeBg: '#0D2140',
    borderHex: 'rgba(59, 130, 246, 0.45)',
    activeBorder: '#3B82F6',
    position: 'top-[16%] right-[4%] sm:right-[6%]',
    linePath: 'M 430 215 L 480 135 L 535 135',
    node: { cx: 430, cy: 215 },
    delay: '0.6s',
    href: '/services/paid-advertising',
  },
  {
    id: 'seo',
    name: 'SEO & Organic Growth',
    icon: Search,
    color: '#10B981',
    bgHex: '#06181B',
    activeBg: '#092529',
    borderHex: 'rgba(16, 185, 129, 0.45)',
    activeBorder: '#10B981',
    position: 'top-[46%] right-[1%] sm:right-[3%]',
    linePath: 'M 475 320 L 545 320',
    node: { cx: 475, cy: 320 },
    delay: '1.2s',
    href: '/services/seo',
  },
  {
    id: 'social',
    name: 'Social Media Management',
    icon: Share2,
    color: '#EC4899',
    bgHex: '#1C0D1E',
    activeBg: '#2A132D',
    borderHex: 'rgba(236, 72, 153, 0.45)',
    activeBorder: '#EC4899',
    position: 'top-[75%] right-[4%] sm:right-[6%]',
    linePath: 'M 430 425 L 485 490 L 535 490',
    node: { cx: 430, cy: 425 },
    delay: '1.8s',
    href: '/services/social-media-management',
  },
  {
    id: 'copy',
    name: 'Content & Copywriting',
    icon: FileText,
    color: '#06B6D4',
    bgHex: '#071526',
    activeBg: '#0B223D',
    borderHex: 'rgba(6, 182, 212, 0.45)',
    activeBorder: '#06B6D4',
    position: 'top-[83%] left-[12%] sm:left-[14%]',
    linePath: 'M 260 465 L 210 545 L 140 545',
    node: { cx: 260, cy: 465 },
    delay: '2.4s',
    href: '/services/content-writing',
  },
  {
    id: 'apps',
    name: 'Custom Software & App Development',
    icon: Smartphone,
    color: '#F59E0B',
    bgHex: '#1F140A',
    activeBg: '#2E1E0F',
    borderHex: 'rgba(245, 158, 11, 0.45)',
    activeBorder: '#F59E0B',
    position: 'top-[46%] left-[1%] sm:left-[3%]',
    linePath: 'M 165 320 L 95 320',
    node: { cx: 165, cy: 320 },
    delay: '3.0s',
    href: '/services/app-development',
  },
  {
    id: 'video',
    name: 'Video Production & 4K Studio',
    icon: Video,
    color: '#EF4444',
    bgHex: '#1F0A0A',
    activeBg: '#300F0F',
    borderHex: 'rgba(239, 68, 68, 0.45)',
    activeBorder: '#EF4444',
    position: 'top-[16%] left-[3%] sm:left-[5%]',
    linePath: 'M 210 215 L 160 135 L 105 135',
    node: { cx: 210, cy: 215 },
    delay: '3.6s',
    href: '/services/content-creation',
  },
]

// Ambient constellation nodes
const ambientNodes = [
  { cx: 320, cy: 380 },
  { cx: 240, cy: 275 },
  { cx: 400, cy: 275 },
  { cx: 280, cy: 345 },
  { cx: 360, cy: 345 },
]

export default function ServicesGlobeVisual() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="relative flex aspect-square w-full max-w-[480px] sm:max-w-[540px] xl:max-w-[580px] select-none items-center justify-center">
      {/* Central Soft Ambient Atmosphere Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.16)_0%,rgba(59,130,246,0.06)_45%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* 3D Spherical Wireframe Globe & Stepped Circuit SVG */}
      <svg
        viewBox="0 0 640 620"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="fcServicesGlobeDepth" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B132B" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#09090B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Dark Sphere Shading to create 3D depth */}
        <circle cx="320" cy="320" r="180" fill="url(#fcServicesGlobeDepth)" />

        {/* Outer Boundary Rim */}
        <circle
          cx="320"
          cy="320"
          r="180"
          fill="none"
          stroke="rgba(148, 163, 184, 0.28)"
          strokeWidth="1.2"
        />

        {/* Latitude Parallels (Concentric Perspective Rings) */}
        <ellipse cx="320" cy="170" rx="55" ry="16" fill="none" stroke="rgba(100, 116, 139, 0.28)" strokeWidth="1" />
        <ellipse cx="320" cy="215" rx="110" ry="32" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <ellipse cx="320" cy="275" rx="155" ry="44" fill="none" stroke="rgba(100, 116, 139, 0.28)" strokeWidth="0.9" />
        <ellipse cx="320" cy="345" rx="178" ry="50" fill="none" stroke="rgba(100, 116, 139, 0.30)" strokeWidth="1" />
        <ellipse cx="320" cy="415" rx="160" ry="44" fill="none" stroke="rgba(100, 116, 139, 0.24)" strokeWidth="0.9" />
        <ellipse cx="320" cy="470" rx="112" ry="30" fill="none" stroke="rgba(100, 116, 139, 0.20)" strokeWidth="0.8" />

        {/* Longitude Meridians (Curved Vertical Arcs Converging at Top & Bottom Apexes) */}
        <line x1="320" y1="140" x2="320" y2="500" stroke="rgba(148, 163, 184, 0.32)" strokeWidth="1" />

        {/* Left Meridians */}
        <path d="M 320 140 C 275 200, 245 360, 260 495" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 225 210, 185 350, 205 480" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 175 220, 145 330, 160 445" fill="none" stroke="rgba(100, 116, 139, 0.24)" strokeWidth="0.8" />

        {/* Right Meridians */}
        <path d="M 320 140 C 365 200, 395 360, 380 495" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 415 210, 455 350, 435 480" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 465 220, 495 330, 480 445" fill="none" stroke="rgba(100, 116, 139, 0.24)" strokeWidth="0.8" />

        {/* Ambient Constellation Nodes */}
        {ambientNodes.map((n, i) => (
          <g key={`ambient-node-${i}`}>
            <circle cx={n.cx} cy={n.cy} r="6" fill="#09090B" stroke="rgba(100, 116, 139, 0.45)" strokeWidth="1" />
            <circle cx={n.cx} cy={n.cy} r="2.5" fill="#475569" />
          </g>
        ))}

        {/* Stepped Dotted Connector Circuit Paths to Service Badges */}
        {servicePillars.map((b) => {
          const isHovered = hoveredId === b.id
          const activeColor = b.color

          return (
            <g key={`connector-${b.id}`}>
              {/* Orthogonal / 45-degree Dotted Wire */}
              <path
                d={b.linePath}
                fill="none"
                stroke={isHovered ? activeColor : 'rgba(148, 163, 184, 0.45)'}
                strokeWidth={isHovered ? '2' : '1.2'}
                strokeDasharray="2.5 3.5"
                style={{
                  animation: 'fcLineFlow 3s linear infinite',
                  transition: 'stroke 0.3s ease, stroke-width 0.3s ease',
                }}
              />

              {/* Surface Node: Outer Dark Lens to cleanly mask underlying grid lines */}
              <circle
                cx={b.node.cx}
                cy={b.node.cy}
                r="7"
                fill="#09090B"
                stroke={isHovered ? activeColor : 'rgba(148, 163, 184, 0.55)'}
                strokeWidth="1.2"
                className="transition-colors duration-300"
              />

              {/* Surface Node: Core Center Dot */}
              <circle
                cx={b.node.cx}
                cy={b.node.cy}
                r="3"
                fill={isHovered ? activeColor : '#64748B'}
                className="transition-colors duration-300"
              />

              {/* Active Hover Ripple Beacon */}
              {isHovered && (
                <circle
                  cx={b.node.cx}
                  cy={b.node.cy}
                  r="13"
                  fill="none"
                  stroke={activeColor}
                  strokeWidth="1"
                  className="animate-ping opacity-60"
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* 7 Precision Floating Squircle Cards (Strictly Only Icons, Zero Text) */}
      {servicePillars.map((b) => {
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
            <Link
              href={b.href}
              title={b.name}
              aria-label={b.name}
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                isHovered
                  ? 'scale-115 -translate-y-1'
                  : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: isHovered ? b.activeBg : b.bgHex,
                borderColor: isHovered ? b.activeBorder : b.borderHex,
                boxShadow: isHovered
                  ? `0 0 24px ${b.color}99, 0 4px 20px rgba(0,0,0,0.6)`
                  : `0 4px 18px ${b.color}33, 0 2px 10px rgba(0,0,0,0.5)`,
              }}
            >
              <Icon
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300"
                style={{ color: b.color }}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
