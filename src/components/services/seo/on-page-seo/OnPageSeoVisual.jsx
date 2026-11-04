'use client'

import React from 'react'

export default function OnPageSeoVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none select-none">
      {/* Browser Mockup Window (Search / Webpage Background) */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#09090B] shadow-2xl overflow-hidden">
        
        {/* Browser Top Bar with 3 Window Dots */}
        <div className="flex items-center border-b border-white/[0.08] bg-[#141417] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
        </div>

        {/* Webpage Content Body Mockup (Wireframe lines representing page content) */}
        <div className="relative p-6 sm:p-8 space-y-4 min-h-[320px] sm:min-h-[360px] flex flex-col justify-start">
          {/* Header lines placeholder */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="h-4 w-32 rounded bg-white/20" />
              <div className="h-4 w-16 rounded bg-frame-accent/40" />
            </div>
            <div className="h-2.5 w-48 rounded bg-white/10" />
          </div>

          {/* Content wireframe lines */}
          <div className="space-y-3 pt-2">
            <div className="h-2.5 w-[92%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[85%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[78%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[88%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[65%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[82%] rounded bg-white/[0.08]" />
            <div className="h-2.5 w-[70%] rounded bg-white/[0.08]" />
          </div>

          {/* =========================================================================
              THE MAGNIFYING GLASS WITH CONTINUOUS UPWARD GROWTH ANIMATION
              Clean icon + continuous upward rise animation, without any text
             ========================================================================= */}
          <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-6 pointer-events-none">
            {/* Soft ambient glow for the lens */}
            <div className="absolute -inset-2 rounded-full bg-frame-accent/15 blur-xl animate-pulse" />

            {/* Magnifying Glass Frame */}
            <div className="relative flex items-center">
              {/* Lens Circle */}
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full border-4 border-white/90 bg-[#121214]/95 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center p-4">
                {/* Lens reflection highlight arc */}
                <div className="absolute top-2 left-4 right-4 h-12 rounded-t-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Internal Grid Lines inside the Lens */}
                <div 
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Continuous Upward Growth Animated Vector */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Continuous Moving Upward Particles / Stream */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="on-page-upward-stream absolute inset-0 opacity-40" />
                  </div>

                  {/* SVG Chart with continuous upward drawing / climbing stroke */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A855F7" />
                        <stop offset="60%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>

                      <linearGradient id="areaFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                      </linearGradient>
                      
                      <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Area Fill beneath upward chart line */}
                    <path
                      d="M 12 76 L 36 60 L 52 68 L 84 24 L 84 88 L 12 88 Z"
                      fill="url(#areaFillGrad)"
                      className="animate-pulse"
                    />

                    {/* Ghost Background Path */}
                    <path
                      d="M 12 76 L 36 60 L 52 68 L 84 24"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Main Glowing Upward Trend Path with Continuous Sweep */}
                    <path
                      d="M 12 76 L 36 60 L 52 68 L 84 24"
                      stroke="url(#growthGrad)"
                      strokeWidth="6.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#neonGlow)"
                      className="on-page-growth-line"
                    />

                    {/* Upward Arrowhead at peak (84, 24) pointing top-right */}
                    <g className="on-page-arrow-pulse">
                      <path
                        d="M 64 24 L 84 24 L 84 44"
                        stroke="#34D399"
                        strokeWidth="6.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#neonGlow)"
                      />
                    </g>

                    {/* Upward Pulse Dots along the key path vertices */}
                    <circle cx="12" cy="76" r="3.5" fill="#A855F7" className="animate-ping opacity-75" />
                    <circle cx="12" cy="76" r="3" fill="#FAFAFA" />

                    <circle cx="36" cy="60" r="3" fill="#A855F7" />
                    
                    <circle cx="52" cy="68" r="3" fill="#C084FC" />

                    {/* Pinnacle Breakthrough Dot */}
                    <circle cx="84" cy="24" r="5" fill="#34D399" className="animate-ping opacity-90" />
                    <circle cx="84" cy="24" r="3.5" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              {/* Magnifying Glass Handle */}
              <div 
                className="relative -ml-4 mt-32 w-14 sm:w-18 h-6 sm:h-7 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 rounded-full shadow-2xl border border-white/20"
                style={{
                  transform: 'rotate(45deg)',
                  transformOrigin: 'left center',
                }}
              >
                {/* Grip accents */}
                <div className="absolute inset-y-0 left-2 w-1.5 bg-black/40 rounded-full" />
                <div className="absolute inset-y-0 left-5 w-1.5 bg-black/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth infinite upward growth animation */}
      <style jsx>{`
        .on-page-growth-line {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: onPageDrawUpward 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .on-page-arrow-pulse {
          animation: onPageArrowFloat 3.2s ease-in-out infinite;
        }

        .on-page-upward-stream {
          background: linear-gradient(
            to top,
            transparent,
            rgba(52, 211, 153, 0.08) 50%,
            transparent
          );
          background-size: 100% 200%;
          animation: onPageStreamUpward 2.5s linear infinite;
        }

        @keyframes onPageDrawUpward {
          0% {
            stroke-dashoffset: 180;
            opacity: 0.2;
          }
          15% {
            opacity: 1;
          }
          70% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          90% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -180;
            opacity: 0;
          }
        }

        @keyframes onPageArrowFloat {
          0%, 20% {
            transform: translate(-3px, 3px);
            opacity: 0.4;
          }
          65%, 85% {
            transform: translate(2px, -2px);
            opacity: 1;
          }
          100% {
            transform: translate(0px, 0px);
            opacity: 0.6;
          }
        }

        @keyframes onPageStreamUpward {
          0% {
            background-position: 0 100%;
          }
          100% {
            background-position: 0 -100%;
          }
        }
      `}</style>
    </div>
  )
}
