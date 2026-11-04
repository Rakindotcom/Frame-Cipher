'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Sparkles, Video, Search, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import TikTokHeroVisual from './TikTokHeroVisual'

const capabilities = [
  { step: '01', title: 'Content Strategy', desc: 'Pillars, hooks & commercial direction' },
  { step: '02', title: 'Video Production', desc: 'Concept, scripts, editing & motion text' },
  { step: '03', title: 'TikTok SEO', desc: 'Search-aware topics, captions & bio' },
  { step: '04', title: 'Trend Adaptation', desc: 'Cultural relevance without copycat risk' },
  { step: '05', title: 'Community & DMs', desc: 'Active comments, feedback & escalation' },
  { step: '06', title: 'Performance Analytics', desc: 'Watch-time, retention & pipeline tracking' },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* FIXED NAV CLEARANCE & HERO CONTAINER */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link href="/services" className="shrink-0 transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link href="/services/social-media-management" className="shrink-0 transition-colors hover:text-white">
              Social Media Management
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <span className="shrink-0 text-frame-accent">TikTok Management</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent whitespace-nowrap">
                  Specialized Social Capability
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  One In-House Team · Search-Aware Strategy
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                TikTok Management{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-200">
                TikTok can help businesses build awareness, reach new audiences, showcase products, and create customer interest. But consistent results require more than posting random videos.
              </p>

              {/* Supporting Copy */}
              <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                <p>
                  Framecipher provides TikTok Management Service for businesses in Bangladesh and international markets. We combine TikTok strategy, audience research, content planning, short-form video production, trend research, search-aware content, publishing, community management, and performance reporting.
                </p>
                <p>
                  Our goal is to build a TikTok presence that supports your business goals instead of treating the platform as another content channel to maintain.
                </p>
              </div>

              {/* Tag Pill Indicators */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="rounded-md border border-white/[0.08] bg-[#121214] px-2.5 py-1">Content Strategy</span>
                <span className="rounded-md border border-white/[0.08] bg-[#121214] px-2.5 py-1">Video Production</span>
                <span className="rounded-md border border-white/[0.08] bg-[#121214] px-2.5 py-1">TikTok SEO</span>
                <span className="rounded-md border border-white/[0.08] bg-[#121214] px-2.5 py-1">Publishing</span>
                <span className="rounded-md border border-white/[0.08] bg-[#121214] px-2.5 py-1">Community Care</span>
                <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-purple-300">Reporting</span>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact">
                  Get Your Free TikTok Audit
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Request a Custom Quote
                </PosterButton>
              </div>

              {/* Trust Micro-Badge */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Video className="h-4 w-4 text-frame-accent" />
                  <span>Video-First Production</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Search className="h-4 w-4 text-frame-accent" />
                  <span>Search-Aware Discoverability</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Client-Owned Accounts</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (6 cols) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <TikTokHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 6-COLUMN ARCHITECTURAL WORKFLOW LEDGER RIBBON */}
      <section className="border-b border-white/[0.08] bg-[#121214]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-6">
            {capabilities.map((item) => (
              <div key={item.step} className="p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {item.step} · </span>
                <h3 className="mt-2.5 font-heading text-base font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
