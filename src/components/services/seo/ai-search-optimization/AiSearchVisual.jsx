'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Search,
  Mic,
  Camera,
  Sparkles,
  MapPin,
  MoreVertical,
  ExternalLink,
  Share2,
  Grid,
  ChevronDown,
} from 'lucide-react'

export default function AiSearchVisual() {
  const [activeTab, setActiveTab] = useState('All')

  const tabs = [
    'AI Mode',
    'All',
    'Short videos',
    'Images',
    'Videos',
    'Forums',
    'News',
    'More',
    'Tools',
  ]

  const filterPills = [
    'Online appointments',
    'Open now',
    'Top rated',
  ]

  return (
    <div className="relative mx-auto w-full select-none">
      {/* Subtle Ambient Violet-Blue Glow Behind the Browser */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-blue-600/15 to-emerald-500/10 blur-2xl pointer-events-none" />

      {/* Main Google Dark Mode Browser Window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#18181B] shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]">
        {/* macOS / Browser Header Window Controls */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#121214] px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/90" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-0.5 text-[10px] font-mono text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>google.com/search?q=best+seo+agency+in+bangladesh</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Google SERP Top Search Bar Section (Exact Replica of Screenshot) */}
        <div className="border-b border-white/[0.08] bg-[#18181B] px-4 pt-3.5 pb-2 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Google Multi-Color Logo */}
            <div className="flex items-center gap-px shrink-0 select-none cursor-pointer">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#4285F4]">G</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#EA4335]">o</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FBBC05]">o</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#4285F4]">g</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#34A853]">l</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#EA4335]">e</span>
            </div>

            {/* Google Pill Search Input Box */}
            <div className="flex-1 relative flex items-center justify-between rounded-full border border-white/[0.12] bg-[#242428] px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-inner hover:border-white/[0.2] transition-colors">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Search className="h-4 w-4 text-zinc-400 shrink-0 hidden sm:block" />
                <span className="text-xs sm:text-[13px] font-normal text-white truncate">
                  best seo agency in bangladesh
                </span>
              </div>

              {/* Inside Pill Controls: Surfer Metric Badge + Voice & Lens */}
              <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-400 shrink-0 pl-1">
                {/* Surfer SEO Chrome Extension Pill Mockup from Screenshot */}
                <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 bg-[#1B1B20] px-2 py-0.5 rounded border border-white/[0.06]">
                  <span className="h-2 w-2 rounded-sm border border-zinc-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>390</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-emerald-400 font-semibold">$0.00</span>
                  <span className="text-zinc-500 text-[9px]">✕</span>
                </div>
                <Mic className="h-3.5 w-3.5 hover:text-white transition-colors cursor-pointer" />
                <Camera className="h-3.5 w-3.5 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Top Right Icons: Share, Apps Grid, Profile Avatar */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 text-zinc-400">
              <button type="button" aria-label="Share" className="p-1.5 hover:text-white transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Google Apps" className="p-1.5 hover:text-white transition-colors">
                <Grid className="h-4 w-4" />
              </button>
              <div className="h-7 w-7 rounded-full bg-[#24242A] border border-white/[0.15] overflow-hidden p-0.5 flex items-center justify-center cursor-pointer ml-1">
                <Image
                  src="/logo.webp"
                  alt="Frame Cipher User Profile"
                  width={22}
                  height={22}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Tabs (Exact Order as Screenshot) */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none pt-3 text-[11px] sm:text-xs font-medium text-zinc-400">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive
                      ? 'border-[#8AB4F8] text-[#8AB4F8] font-semibold'
                      : 'border-transparent hover:text-zinc-200'
                  }`}
                >
                  <span>{tab}</span>
                  {tab === 'More' && <ChevronDown className="h-3 w-3" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Filter Badges Row (Exact from Screenshot: Online appointments, Open now, Top rated) */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#141418] px-4 py-2 sm:px-6 overflow-x-auto scrollbar-none text-[11px] text-zinc-300">
          {filterPills.map((pill) => (
            <button
              key={pill}
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-white/[0.12] bg-[#1E1E24] px-3 py-1 hover:border-white/[0.25] hover:text-white transition-colors shrink-0"
            >
              <span>{pill}</span>
            </button>
          ))}
        </div>

        {/* AI Overview Box (Exact Replica of Google Dark Mode AI Overview) */}
        <div className="p-4 sm:p-5 md:p-6 bg-[#121214]">
          {/* Location Bar: 📍 Bangladesh · Choose area */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 pb-2 border-b border-white/[0.04]">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-zinc-400" />
              <span>
                Bangladesh ·{' '}
                <button type="button" className="text-[#8AB4F8] hover:underline">
                  Choose area
                </button>
              </span>
            </div>
            <MoreVertical className="h-3.5 w-3.5 text-zinc-500 cursor-pointer" />
          </div>

          {/* AI Overview Header with Google Gemini Sparkle */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#4285F4] via-[#8AB4F8] to-[#A855F7] text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
            </div>
            <span className="font-heading text-sm sm:text-base font-semibold tracking-tight text-white">
              AI Overview
            </span>
          </div>

          {/* Main Content Grid: Left Narrative + Right Stacked Source Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* Left Narrative Text (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {/* Highlighted Lead Sentence (Matching the Blue Background in User's Screenshot) */}
              <div className="text-xs sm:text-[13px] leading-relaxed text-zinc-200">
                <span className="bg-[#8AB4F8]/20 text-white px-1.5 py-0.5 rounded border border-[#8AB4F8]/30 font-medium">
                  Top-rated SEO agencies and service providers in Bangladesh
                </span>{' '}
                <span>
                  stand out for their proven track records, white hat strategies, and measurable organic growth:
                </span>
                {/* Cited Source Chip Pill */}
                <span className="inline-flex items-center gap-1.5 ml-2 mt-1 rounded-full bg-[#1F1F26] px-2 py-0.5 border border-white/[0.1] align-middle">
                  <div className="h-3.5 w-3.5 rounded-full overflow-hidden bg-black/60 flex items-center justify-center">
                    <Image
                      src="/logo.webp"
                      alt="Frame Cipher"
                      width={12}
                      height={12}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-zinc-300 font-mono">framecipher.com</span>
                  <span className="text-[9px] text-zinc-500 font-mono">+2</span>
                </span>
              </div>

              {/* Bullet Points Matching the Structure of the Screenshot */}
              <ul className="space-y-2.5 text-xs leading-relaxed text-zinc-300 pt-1">
                {/* Bullet 1: Framecipher (Primary Featured Entity with Site Logo) */}
                <li className="flex items-start gap-2">
                  <span className="text-[#8AB4F8] font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-semibold">Framecipher</strong>: A premier technical SEO and AI Search Optimization (AEO/GEO) agency in Dhaka known for comprehensive technical/content SEO, entity authority, and generative AI search positioning. View their portfolio and service details on the{' '}
                    <a
                      href="/services/seo"
                      className="text-[#8AB4F8] hover:underline inline-flex items-center gap-0.5"
                    >
                      Framecipher SEO Agency Page <ExternalLink className="h-2.5 w-2.5 inline" />
                    </a>
                    .
                  </span>
                </li>

                {/* Bullet 2: VISER X */}
                <li className="flex items-start gap-2">
                  <span className="text-[#8AB4F8] font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-semibold">VISER X</strong>: A well-established digital marketing and SEO firm in Dhaka with over 9 years of experience, known for comprehensive technical/content SEO and high client retention. View their portfolio and service details on the{' '}
                    <span className="text-[#8AB4F8] hover:underline cursor-pointer inline-flex items-center gap-0.5">
                      VISER X SEO Agency Page <ExternalLink className="h-2.5 w-2.5 inline" />
                    </span>
                    .
                  </span>
                </li>

                {/* Bullet 3: Bizcope */}
                <li className="flex items-start gap-2">
                  <span className="text-[#8AB4F8] font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-semibold">Bizcope</strong>: An AI-powered digital agency with 16+ years of experience serving local and global brands across 30+ countries. Explore custom plans on the{' '}
                    <span className="text-[#8AB4F8] hover:underline cursor-pointer inline-flex items-center gap-0.5">
                      Bizcope SEO Services Page <ExternalLink className="h-2.5 w-2.5 inline" />
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Citing Source Cards (5 cols - Matching the Right Side of the Screenshot) */}
            <div className="lg:col-span-5 space-y-2.5">
              {/* Card 1: Framecipher (Using User's Site Icon as Requested) */}
              <div className="rounded-xl border border-white/[0.1] bg-[#1E1E24] p-3 hover:border-[#8AB4F8]/50 transition-all cursor-pointer group shadow-sm">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    {/* Site Favicon Icon + Domain Name + 3 Dots */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="h-4 w-4 rounded-full overflow-hidden bg-black/50 border border-white/[0.1] flex items-center justify-center shrink-0 p-0.5">
                          <Image
                            src="/logo.webp"
                            alt="Frame Cipher"
                            width={14}
                            height={14}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="text-[11px] font-medium text-white truncate">
                          Framecipher
                        </span>
                      </div>
                      <MoreVertical className="h-3 w-3 text-zinc-500 shrink-0" />
                    </div>

                    <h4 className="text-xs font-semibold text-white group-hover:text-[#8AB4F8] transition-colors line-clamp-2 leading-snug">
                      SEO Services: Best SEO Agency in Bangladesh | Framecipher
                    </h4>
                    <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                      Framecipher is an AI-powered SEO agency in Bangladesh with proven experience, generative AI visibility, and measurable organic growth...
                    </p>
                  </div>

                  {/* Thumbnail / Visual Brand Badge on Right */}
                  <div className="h-12 w-12 rounded-lg bg-[#282832] border border-white/[0.08] p-1.5 flex flex-col items-center justify-center shrink-0 overflow-hidden group-hover:border-frame-accent/40 transition-colors">
                    <Image
                      src="/logo.webp"
                      alt="Framecipher Logo"
                      width={28}
                      height={28}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="text-[7px] font-mono uppercase tracking-wider text-frame-accent mt-0.5">
                      Top SEO
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: VISER X / Secondary Source with Graph Mockup from Screenshot */}
              <div className="rounded-xl border border-white/[0.08] bg-[#18181E] p-3 hover:border-white/[0.15] transition-all cursor-pointer group shadow-sm">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    {/* Site Favicon Icon + Domain Name + 3 Dots */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="h-4 w-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                          X
                        </div>
                        <span className="text-[11px] font-medium text-zinc-300 truncate">
                          VISER X
                        </span>
                      </div>
                      <MoreVertical className="h-3 w-3 text-zinc-500 shrink-0" />
                    </div>

                    <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                      SEO Service Company in Bangladesh: Best SEO Agency
                    </h4>
                    <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                      Agency: VISER X (Bangladesh SEO company, 9+ years experience, 90% client return rate)...
                    </p>
                  </div>

                  {/* Thumbnail / Analytics Chart Mockup from Screenshot */}
                  <div className="h-12 w-12 rounded-lg bg-[#22222A] border border-white/[0.06] p-1 flex flex-col items-center justify-end shrink-0 gap-0.5">
                    <div className="w-full flex items-end justify-around h-7 px-1">
                      <span className="w-1.5 bg-[#4285F4]/40 h-3 rounded-t-sm" />
                      <span className="w-1.5 bg-[#4285F4]/60 h-4.5 rounded-t-sm" />
                      <span className="w-1.5 bg-[#4285F4] h-6 rounded-t-sm" />
                    </div>
                    <span className="text-[6px] font-mono text-zinc-500 uppercase">
                      SERP Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
