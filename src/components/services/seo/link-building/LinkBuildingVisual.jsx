'use client'

import React from 'react'

export default function LinkBuildingVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex items-center justify-center p-2 sm:p-4 select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/25 via-emerald-500/15 to-transparent blur-3xl pointer-events-none" />

      {/* SVG Canvas for the Animated Interlocking Link Icon */}
      <svg
        viewBox="0 0 420 360"
        className="relative w-full h-auto max-w-[440px] overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for Link 1 (Left Link - Brand Purple / Indigo) */}
          <linearGradient id="link1Grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E22CE" />
            <stop offset="40%" stopColor="#9333EA" />
            <stop offset="80%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#E9D5FF" />
          </linearGradient>

          {/* Gradients for Link 2 (Right Link - Vibrant Emerald / Teal / Cyan) */}
          <linearGradient id="link2Grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="85%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>

          {/* Flow Beam Gradient across the junction */}
          <linearGradient id="energyBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="linkGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Subtle Grid Radar rings behind the link */}
        <g opacity="0.15">
          <circle cx="210" cy="180" r="140" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="210" cy="180" r="95" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="210" y1="30" x2="210" y2="330" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="60" y1="180" x2="360" y2="180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
        </g>

        {/* Dynamic Energy Wave Radiating from Connection Junction */}
        <circle cx="210" cy="180" r="45" stroke="url(#energyBeamGrad)" strokeWidth="1.5" className="link-pulse-ring" />
        <circle cx="210" cy="180" r="75" stroke="#34D399" strokeWidth="1" strokeDasharray="4 6" className="link-pulse-ring-delayed" />

        {/* =========================================================================
            INTERLOCKING CHAIN LINKS
            Link 1: Lower-Left Loop (Center: ~170, 215)
            Link 2: Upper-Right Loop (Center: ~250, 145)
            Both angled along -45° / 135° diagonal
           ========================================================================= */}
        <g className="link-float-container">
          
          {/* Back shadow of Link 2 */}
          <rect
            x="-65"
            y="-28"
            width="130"
            height="56"
            rx="28"
            transform="translate(250, 145) rotate(-45)"
            stroke="#000000"
            strokeWidth="18"
            opacity="0.6"
          />

          {/* LINK 1 (Full Lower-Left Link) */}
          <g transform="translate(170, 215) rotate(-45)">
            {/* Dark inner base */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="#18181B"
              strokeWidth="16"
              fill="none"
            />
            {/* Main Gradient Stroke */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="url(#link1Grad)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              filter="url(#coreGlow)"
            />
            {/* Inner specular highlight line */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1.5"
              strokeDasharray="50 150"
              fill="none"
            />
          </g>

          {/* LINK 2 (Full Upper-Right Link) */}
          <g transform="translate(250, 145) rotate(-45)">
            {/* Dark inner base */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="#18181B"
              strokeWidth="16"
              fill="none"
            />
            {/* Main Gradient Stroke */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="url(#link2Grad)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              filter="url(#coreGlow)"
            />
            {/* Inner specular highlight line */}
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeDasharray="60 140"
              fill="none"
            />
          </g>

          {/* INTERLOCKING EFFECT: Re-draw the overlapping arc of Link 1 so it loops over Link 2 */}
          <g transform="translate(170, 215) rotate(-45)">
            {/* Top-right curved segment of Link 1 that loops OVER Link 2 */}
            <path
              d="M 20 -28 L 37 -28 A 28 28 0 0 1 65 0"
              stroke="url(#link1Grad)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              filter="url(#coreGlow)"
            />
            {/* Specular glint on overlapping arc */}
            <path
              d="M 22 -28 L 37 -28 A 28 28 0 0 1 63 -2"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </g>

          {/* =======================================================================
              CONTINUOUS ANIMATED DATA STREAM / BACKLINK CURRENT
              An energy pulse flowing seamlessly around the connected chain links
             ======================================================================= */}
          <g transform="translate(170, 215) rotate(-45)">
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="link-animated-stream-1"
            />
          </g>

          <g transform="translate(250, 145) rotate(-45)">
            <rect
              x="-65"
              y="-28"
              width="130"
              height="56"
              rx="28"
              stroke="#34D399"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="link-animated-stream-2"
            />
          </g>

          {/* Interlocking Connection Core Spark */}
          <g transform="translate(210, 180)">
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" filter="url(#linkGlow)" className="animate-ping" opacity="0.8" />
            <circle cx="0" cy="0" r="4.5" fill="#34D399" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
          </g>

          {/* Outer anchor points on the link ends */}
          {/* Lower-left anchor point (Source domain) */}
          <g transform="translate(108, 277)">
            <circle cx="0" cy="0" r="5" fill="#A855F7" className="animate-pulse" />
            <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Upper-right anchor point (Authority destination) */}
          <g transform="translate(312, 83)">
            <circle cx="0" cy="0" r="5" fill="#34D399" className="animate-pulse" />
            <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
          </g>

        </g>
      </svg>

      {/* Embedded CSS for smooth continuous link animations */}
      <style jsx>{`
        .link-float-container {
          animation: linkFloat 4.5s ease-in-out infinite;
          transform-origin: center center;
        }

        .link-animated-stream-1 {
          stroke-dasharray: 60 280;
          stroke-dashoffset: 0;
          animation: linkFlow1 3s linear infinite;
        }

        .link-animated-stream-2 {
          stroke-dasharray: 60 280;
          stroke-dashoffset: 0;
          animation: linkFlow2 3s linear infinite;
        }

        .link-pulse-ring {
          animation: pulseRing 3.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
          transform-origin: 210px 180px;
        }

        .link-pulse-ring-delayed {
          animation: pulseRing 3.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite 1.4s;
          transform-origin: 210px 180px;
        }

        @keyframes linkFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.015);
          }
        }

        @keyframes linkFlow1 {
          0% {
            stroke-dashoffset: 340;
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.2;
          }
        }

        @keyframes linkFlow2 {
          0% {
            stroke-dashoffset: 0;
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -340;
            opacity: 0.2;
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

