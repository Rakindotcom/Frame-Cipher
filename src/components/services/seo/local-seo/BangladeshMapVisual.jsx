'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

// All 8 Administrative Divisions of Bangladesh positioned accurately over the 738x1024 map
const divisions = [
  {
    id: 'dhaka',
    name: 'Dhaka',
    nativeName: 'ঢাকা',
    role: 'Central Capital & Core SERP Hub',
    top: '49%',
    left: '48%',
    rank: '#1 Map Pack',
    color: '#A855F7', // Brand Purple
    delay: '0s',
  },
  {
    id: 'chittagong',
    name: 'Chittagong',
    nativeName: 'চট্টগ্রাম',
    role: 'Commercial Capital & Port SERP',
    top: '63.5%',
    left: '76.5%',
    rank: '#1 Map Pack',
    color: '#34D399', // Emerald
    delay: '0.4s',
  },
  {
    id: 'sylhet',
    name: 'Sylhet',
    nativeName: 'সিলেট',
    role: 'Regional Commerce & Diaspora Hub',
    top: '33.5%',
    left: '79.5%',
    rank: '#1 Map Pack',
    color: '#38BDF8', // Sky Blue
    delay: '0.8s',
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi',
    nativeName: 'রাজশাহী',
    role: 'Northern Commercial & Education Center',
    top: '33.5%',
    left: '24%',
    rank: '#1 Map Pack',
    color: '#FBBF24', // Amber
    delay: '1.2s',
  },
  {
    id: 'khulna',
    name: 'Khulna',
    nativeName: 'খুলনা',
    role: 'South-Western Port & Industrial Hub',
    top: '64.5%',
    left: '30.5%',
    rank: '#1 Map Pack',
    color: '#F472B6', // Pink
    delay: '1.6s',
  },
  {
    id: 'barisal',
    name: 'Barisal',
    nativeName: 'বরিশাল',
    role: 'Southern Riverine & Delta Trade Hub',
    top: '70%',
    left: '51.5%',
    rank: '#1 Map Pack',
    color: '#60A5FA', // Blue
    delay: '2.0s',
  },
  {
    id: 'rangpur',
    name: 'Rangpur',
    nativeName: 'রংপুর',
    role: 'Far North Agricultural & Retail Hub',
    top: '16.5%',
    left: '36.5%',
    rank: '#1 Map Pack',
    color: '#A78BFA', // Violet
    delay: '2.4s',
  },
  {
    id: 'mymensingh',
    name: 'Mymensingh',
    nativeName: 'ময়মনসিংহ',
    role: 'North-Central Regional Growth Center',
    top: '28%',
    left: '62%',
    rank: '#1 Map Pack',
    color: '#4ADE80', // Mint
    delay: '2.8s',
  },
]

export default function BangladeshMapVisual() {
  const [activeDivision, setActiveDivision] = useState(divisions[0])

  // Automatically cycle through divisions to showcase nationwide local SEO coverage
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDivision((prev) => {
        const currentIndex = divisions.findIndex((d) => d.id === prev.id)
        const nextIndex = (currentIndex + 1) % divisions.length
        return divisions[nextIndex]
      })
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none select-none">
      {/* Background Ambient Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/20 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Map Visual Window Card */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#09090B] p-4 sm:p-5 shadow-2xl overflow-hidden">
        
        {/* Top Window Header (Dots only, no text) */}
        <div className="flex items-center gap-2 pb-3 border-b border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Map Display Container with Image + Animated Interactive Overlays */}
        <div className="relative mt-3 flex items-center justify-center overflow-hidden rounded-xl bg-[#121214] p-3 sm:p-4 border border-white/[0.04]">
          
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Sweeping Geo-Grid Radar Laser Beam */}
          <div className="map-scan-laser absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70 pointer-events-none z-20 shadow-[0_0_12px_#34D399]" />

          {/* The Authentic Bangladesh Map Image */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[738/1024]">
            <Image
              src="/images/seo/bangladesh-divisions-map.png"
              alt="Bangladesh 8 Administrative Divisions Map"
              fill
              priority
              className="object-contain filter contrast-105 brightness-95 opacity-90 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 420px"
            />

            {/* SVG Linking Beams Between Active Division and Central Dhaka Hub */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {divisions.map((d) => {
                const x1 = parseFloat(divisions[0].left)
                const y1 = parseFloat(divisions[0].top)
                const x2 = parseFloat(d.left)
                const y2 = parseFloat(d.top)
                const isActive = activeDivision.id === d.id

                return (
                  <g key={d.id}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? '#34D399' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isActive ? '0.8' : '0.4'}
                      strokeDasharray={isActive ? '2 2' : '1 2'}
                      className={isActive ? 'animate-pulse' : ''}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Animated Pin Markers for All 8 Divisions */}
            {divisions.map((div) => {
              const isSelected = activeDivision.id === div.id
              return (
                <div
                  key={div.id}
                  onClick={() => setActiveDivision(div)}
                  style={{ top: div.top, left: div.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
                >
                  {/* Expanding continuous radar ripple waves */}
                  <span
                    className="absolute -inset-3 rounded-full opacity-70 animate-ping pointer-events-none"
                    style={{
                      border: `1.5px solid ${div.color}`,
                      animationDuration: '3.2s',
                      animationDelay: div.delay,
                    }}
                  />

                  {/* Secondary subtle wave */}
                  <span
                    className="absolute -inset-1.5 rounded-full opacity-40 pointer-events-none"
                    style={{ border: `1px solid ${div.color}` }}
                  />

                  {/* Pin Circle Core */}
                  <div
                    className={`relative flex items-center justify-center rounded-full transition-transform duration-300 ${
                      isSelected
                        ? 'h-4 w-4 ring-4 ring-white/30 scale-125 shadow-lg'
                        : 'h-3 w-3 hover:scale-125'
                    }`}
                    style={{ backgroundColor: div.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Floating Map Pack Badge above/below active division */}
                  {isSelected && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 pointer-events-none animate-bounce">
                      <div className="flex items-center gap-1 rounded-full bg-black/90 px-2 py-0.5 border border-white/20 shadow-xl text-[9px] font-mono font-bold text-emerald-400">
                        <MapPin className="h-2.5 w-2.5 text-emerald-400" />
                        <span>{div.rank}</span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Embedded CSS for Sweeping Radar Laser */}
      <style jsx>{`
        .map-scan-laser {
          animation: scanLaser 4.5s ease-in-out infinite;
        }

        @keyframes scanLaser {
          0% {
            top: 5%;
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            top: 95%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
