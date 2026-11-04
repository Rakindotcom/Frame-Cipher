'use client'

import React from 'react'

/**
 * Reusable 8-tooth gear component
 * Centered at (0, 0) for perfect rotational symmetry with zero wobble
 */
function GearShape({
  color = '#7C3AED',
  strokeColor = 'rgba(255, 255, 255, 0.2)',
  teeth = 8,
  baseRadius = 34,
  toothHeight = 13,
  baseWidth = 14,
  crestWidth = 9,
  holeRadius = 15,
  innerRing = true,
  gradientId,
}) {
  const halfBase = baseWidth / 2
  const halfCrest = crestWidth / 2
  const crestY = -(baseRadius + toothHeight)
  const baseY = -baseRadius

  return (
    <g>
      {/* Gear Body Fill (Base Circle + 8 Teeth) */}
      <g fill={gradientId ? `url(#${gradientId})` : color} stroke={strokeColor} strokeWidth="1.2">
        {/* Core base disc */}
        <circle cx="0" cy="0" r={baseRadius} />

        {/* 8 Trapezoidal teeth spaced every 45 degrees */}
        {[...Array(teeth)].map((_, i) => (
          <path
            key={i}
            d={`M ${-halfBase} ${baseY} 
                L ${-halfCrest} ${crestY + 2} 
                Q ${-halfCrest} ${crestY} ${-halfCrest + 2} ${crestY} 
                L ${halfCrest - 2} ${crestY} 
                Q ${halfCrest} ${crestY} ${halfCrest} ${crestY + 2} 
                L ${halfBase} ${baseY} Z`}
            transform={`rotate(${i * (360 / teeth)})`}
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* Subtle Inner Ring Accent */}
      {innerRing && (
        <circle
          cx="0"
          cy="0"
          r={baseRadius - 7}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      )}

      {/* Central Axle / Hole cutout */}
      <circle
        cx="0"
        cy="0"
        r={holeRadius}
        fill="#09090B"
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* Center Pin Highlight */}
      <circle
        cx="0"
        cy="0"
        r={holeRadius - 5}
        fill="none"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1"
      />
    </g>
  )
}

export default function TechnicalSeoVisual() {
  // Center positions for the 3 interlocking gears
  const topGear = { cx: 200, cy: 145 }
  const leftGear = { cx: 144, cy: 208 }
  const rightGear = { cx: 256, cy: 208 }

  // Magnifying Glass properties
  const lensCenter = { cx: 200, cy: 145 }
  const lensRadius = 76
  const handleAngleDeg = 36 // angle pointing towards bottom-right

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex items-center justify-center p-2 sm:p-4 select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Master SVG Composition */}
      <svg
        viewBox="0 0 440 380"
        className="relative w-full h-auto max-w-[460px] overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for Gears */}
          <linearGradient id="purpleGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7E22CE" />
            <stop offset="100%" stopColor="#581C87" />
          </linearGradient>

          <linearGradient id="amberGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="blackGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="50%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>

          {/* Gradients for Magnifying Glass Silver Rim */}
          <linearGradient id="silverRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="25%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="75%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Handle Gradient (Matching Reference Purple Grip) */}
          <linearGradient id="handleGripGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E22CE" />
            <stop offset="50%" stopColor="#4C1D95" />
            <stop offset="100%" stopColor="#2E1065" />
          </linearGradient>

          {/* Ferrule / Collar Metallic Gradient */}
          <linearGradient id="ferruleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Lens Glass Specular Gradient */}
          <linearGradient id="lensGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.06" />
          </linearGradient>

          {/* Soft Filter for Lens Shadow */}
          <filter id="lensDropShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="4" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* =========================================================================
            LAYER 1: BOTTOM-LEFT GEAR (PURPLE)
            Rotates Counter-Clockwise
           ========================================================================= */}
        <g transform={`translate(${leftGear.cx}, ${leftGear.cy})`}>
          <g className="gear-spin-ccw" style={{ transformOrigin: '0px 0px' }}>
            <GearShape
              gradientId="purpleGearGrad"
              strokeColor="rgba(192, 132, 252, 0.4)"
              teeth={8}
              baseRadius={34}
              toothHeight={13}
              baseWidth={14}
              crestWidth={9}
              holeRadius={15}
            />
          </g>
        </g>

        {/* =========================================================================
            LAYER 2: BOTTOM-RIGHT GEAR (AMBER / ORANGE)
            Rotates Counter-Clockwise
           ========================================================================= */}
        <g transform={`translate(${rightGear.cx}, ${rightGear.cy})`}>
          <g className="gear-spin-ccw" style={{ transformOrigin: '0px 0px' }}>
            <GearShape
              gradientId="amberGearGrad"
              strokeColor="rgba(251, 191, 36, 0.4)"
              teeth={8}
              baseRadius={34}
              toothHeight={13}
              baseWidth={14}
              crestWidth={9}
              holeRadius={15}
            />
          </g>
        </g>

        {/* =========================================================================
            LAYER 3: TOP GEAR (BLACK / OBSIDIAN)
            Centrally inspected inside the magnifying glass. Rotates Clockwise
           ========================================================================= */}
        <g transform={`translate(${topGear.cx}, ${topGear.cy})`}>
          <g className="gear-spin-cw" style={{ transformOrigin: '0px 0px' }}>
            <GearShape
              gradientId="blackGearGrad"
              strokeColor="rgba(255, 255, 255, 0.35)"
              teeth={8}
              baseRadius={34}
              toothHeight={13}
              baseWidth={14}
              crestWidth={9}
              holeRadius={15}
            />
          </g>
        </g>

        {/* =========================================================================
            LAYER 4: MAGNIFYING GLASS
            Positioned over the top gear, with metallic rim, glass lens & purple handle
           ========================================================================= */}
        <g filter="url(#lensDropShadow)">
          {/* Glass Lens (Transparent optic with slight refraction) */}
          <circle
            cx={lensCenter.cx}
            cy={lensCenter.cy}
            r={lensRadius - 6}
            fill="url(#lensGlassGrad)"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
          />

          {/* Lens Glass Specular Reflection Highlight Crescent */}
          <path
            d={`M ${lensCenter.cx - 52} ${lensCenter.cy - 20}
                A 62 62 0 0 1 ${lensCenter.cx + 20} ${lensCenter.cy - 52}
                A 52 52 0 0 0 ${lensCenter.cx - 52} ${lensCenter.cy - 20} Z`}
            fill="#FFFFFF"
            fillOpacity="0.22"
          />

          {/* Secondary subtle bottom-right reflection arc */}
          <path
            d={`M ${lensCenter.cx + 42} ${lensCenter.cy + 22}
                A 60 60 0 0 1 ${lensCenter.cx + 15} ${lensCenter.cy + 52}
                A 52 52 0 0 0 ${lensCenter.cx + 42} ${lensCenter.cy + 22} Z`}
            fill="#FFFFFF"
            fillOpacity="0.08"
          />

          {/* Thick Metallic Silver Outer Rim */}
          <circle
            cx={lensCenter.cx}
            cy={lensCenter.cy}
            r={lensRadius}
            fill="none"
            stroke="url(#silverRimGrad)"
            strokeWidth="12"
          />

          {/* Inner hairline rim border */}
          <circle
            cx={lensCenter.cx}
            cy={lensCenter.cy}
            r={lensRadius - 6}
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
          />

          {/* Outer hairline rim border */}
          <circle
            cx={lensCenter.cx}
            cy={lensCenter.cy}
            r={lensRadius + 6}
            fill="none"
            stroke="rgba(0, 0, 0, 0.4)"
            strokeWidth="1"
          />

          {/* =======================================================================
              MAGNIFYING GLASS HANDLE (Extending down-right at handleAngleDeg)
             ======================================================================= */}
          <g
            transform={`translate(${lensCenter.cx}, ${lensCenter.cy}) rotate(${handleAngleDeg})`}
          >
            {/* Metallic Collar / Ferrule attached to rim */}
            <rect
              x={lensRadius - 1}
              y="-10"
              width="18"
              height="20"
              rx="3"
              fill="url(#ferruleGrad)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            {/* Ferrule joint line */}
            <line
              x1={lensRadius + 8}
              y1="-10"
              x2={lensRadius + 8}
              y2="10"
              stroke="#334155"
              strokeWidth="1.5"
            />

            {/* Main Handle Body (Deep Purple with rounded end cap) */}
            <rect
              x={lensRadius + 16}
              y="-12"
              width="85"
              height="24"
              rx="6"
              fill="url(#handleGripGrad)"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.2"
            />

            {/* Handle Specular Highlight Strip */}
            <path
              d={`M ${lensRadius + 20} -6 L ${lensRadius + 92} -6`}
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Handle Metallic End-Cap Accent */}
            <path
              d={`M ${lensRadius + 96} -8 A 8 8 0 0 1 ${lensRadius + 96} 8`}
              stroke="url(#ferruleGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>

      {/* Embedded CSS for smooth continuous rotational spinning */}
      <style jsx>{`
        .gear-spin-cw {
          animation: gearSpinClockwise 12s linear infinite;
        }

        .gear-spin-ccw {
          animation: gearSpinCounterClockwise 12s linear infinite;
        }

        @keyframes gearSpinClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gearSpinCounterClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}
