'use client'

import { useState } from 'react'

// Authentic high-precision vector glyphs with hardcoded fill/stroke to prevent washing out
function NextCodeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function NuxtShopifyIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M10.8 4.2a1.8 1.8 0 0 1 3.1 0l7.8 13.5a1.8 1.8 0 0 1-1.6 2.7H3.9a1.8 1.8 0 0 1-1.6-2.7l7.8-13.5zm-5 13.8h4.5l-2.3-4-2.2 4zm5.5 0h8.6l-4.3-7.5-4.3 7.5z" fill="#00DC82" />
    </svg>
  )
}

function FacebookIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.5 12h-2v7h-3v-7h-1.5v-2.5h1.5v-1.7c0-2 1.2-3.1 3-3.1.9 0 1.6.07 1.8.1v2.1h-1.2c-1 0-1.2.5-1.2 1.2v1.4h2.4l-.3 2.5z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fcInstaGradHero" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#C13584" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="url(#fcInstaGradHero)" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#fcInstaGradHero)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#FD1D1D" />
    </svg>
  )
}

function YoutubeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="22" height="16" x="1" y="4" rx="4.5" fill="#FF0000" />
      <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
    </svg>
  )
}

function LinkedinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#0A66C2" />
      <path
        d="M8.5 10v6H6.5v-6h2zm.2-2.5c0 .6-.5 1-1.2 1s-1.2-.4-1.2-1c0-.6.5-1 1.2-1s1.2.4 1.2 1zm8.8 8.5h-2v-3.2c0-.9-.3-1.5-1.2-1.5-.7 0-1 .5-1.2.9v3.8h-2V10h1.9v.8c.3-.5.9-1.2 2.1-1.2 1.5 0 2.4 1 2.4 3v3.4z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// 6 Core Ecosystem Badges (Strict dark glass styling, vivid authentic brand palettes, guaranteed zero white boxes)
const badges = [
  {
    id: 'code',
    name: 'Next.js & Web Architecture',
    icon: NextCodeIcon,
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
    id: 'nuxt',
    name: 'Nuxt & Shopify Commerce',
    icon: NuxtShopifyIcon,
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
    id: 'facebook',
    name: 'Meta Ads & Acquisition',
    icon: FacebookIcon,
    iconColor: '#1877F2',
    bgHex: '#081426',
    activeBg: '#0D2140',
    borderHex: 'rgba(24, 119, 242, 0.45)',
    activeBorder: '#1877F2',
    position: 'top-[41.5%] left-[6%]',
    linePath: 'M 175 275 L 88 275',
    node: { cx: 175, cy: 275 },
    delay: '1.2s',
  },
  {
    id: 'instagram',
    name: 'Instagram Creative & Reels',
    icon: InstagramIcon,
    iconColor: '#E1306C',
    bgHex: '#1C0D1E',
    activeBg: '#2A132D',
    borderHex: 'rgba(225, 48, 108, 0.45)',
    activeBorder: '#E1306C',
    position: 'top-[12.8%] left-[77.4%]',
    linePath: 'M 370 180 L 410 100 L 480 100',
    node: { cx: 370, cy: 180 },
    delay: '1.8s',
  },
  {
    id: 'youtube',
    name: 'YouTube Commercial & Video',
    icon: YoutubeIcon,
    iconColor: '#FF0000',
    bgHex: '#1F0A0A',
    activeBg: '#300F0F',
    borderHex: 'rgba(255, 0, 0, 0.45)',
    activeBorder: '#FF0000',
    position: 'top-[27%] left-[87.1%]',
    linePath: 'M 450 250 L 490 185 L 540 185',
    node: { cx: 450, cy: 250 },
    delay: '2.4s',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn B2B Growth',
    icon: LinkedinIcon,
    iconColor: '#0A66C2',
    bgHex: '#071526',
    activeBg: '#0B223D',
    borderHex: 'rgba(10, 102, 194, 0.45)',
    activeBorder: '#0A66C2',
    position: 'top-[48.6%] left-[88.7%]',
    linePath: 'M 430 375 L 480 315 L 550 315',
    node: { cx: 430, cy: 375 },
    delay: '3.0s',
  },
]

// Inactive background nodes on the globe constellation
const ambientNodes = [
  { cx: 320, cy: 345 },
  { cx: 225, cy: 380 },
  { cx: 370, cy: 435 },
  { cx: 275, cy: 275 },
]

export default function HeroGlobeVisual() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="relative flex aspect-square w-full max-w-[480px] sm:max-w-[540px] xl:max-w-[580px] select-none items-center justify-center">
      {/* Central Soft Ambient Atmosphere Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_55%_55%,rgba(147,51,234,0.14)_0%,rgba(56,189,248,0.04)_45%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* 3D Spherical Wireframe Globe & Stepped Connector Circuit SVG */}
      <svg
        viewBox="0 0 620 600"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="fcGlobeDepthGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B132B" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#09090B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Dark Sphere Shading to create depth */}
        <circle cx="320" cy="320" r="180" fill="url(#fcGlobeDepthGlow)" />

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

        {/* Longitude Meridians (Curved Vertical Arcs Converging at Top Apex) */}
        <line x1="320" y1="140" x2="320" y2="500" stroke="rgba(148, 163, 184, 0.32)" strokeWidth="1" />

        {/* Left Meridians */}
        <path d="M 320 140 C 275 200, 245 360, 260 495" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 225 210, 185 350, 205 480" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 175 220, 145 330, 160 445" fill="none" stroke="rgba(100, 116, 139, 0.24)" strokeWidth="0.8" />

        {/* Right Meridians */}
        <path d="M 320 140 C 365 200, 395 360, 380 495" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 415 210, 455 350, 435 480" fill="none" stroke="rgba(100, 116, 139, 0.26)" strokeWidth="0.9" />
        <path d="M 320 140 C 465 220, 495 330, 480 445" fill="none" stroke="rgba(100, 116, 139, 0.24)" strokeWidth="0.8" />

        {/* Subtle Ambient Constellation Nodes */}
        {ambientNodes.map((n, i) => (
          <g key={`ambient-node-${i}`}>
            <circle cx={n.cx} cy={n.cy} r="6" fill="#09090B" stroke="rgba(100, 116, 139, 0.45)" strokeWidth="1" />
            <circle cx={n.cx} cy={n.cy} r="2.5" fill="#475569" />
          </g>
        ))}

        {/* Stepped Dotted Connector Circuit Paths to Badges */}
        {badges.map((b) => {
          const isHovered = hoveredId === b.id
          const activeColor = b.iconColor

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

      {/* 6 Precision Floating Squircle Cards (Dark Glass, Authentic Brand Colors, Zero White Blobs) */}
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
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
