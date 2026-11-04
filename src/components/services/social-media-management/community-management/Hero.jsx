'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'
import SocialMediaHeroVisual from '../SocialMediaHeroVisual'

const PLATFORM_CHANNELS = [
  { id: 'all', label: 'All Channels' },
  { id: 'comments', label: 'Comments' },
  { id: 'dms', label: 'Direct Messages' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'escalations', label: 'Escalations' },
]

export default function Hero() {
  const [activeChannel, setActiveChannel] = useState('all')

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.07] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />
      </div>

      {/* TOP TIER: Display H1 & Interactive Visual Split */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation & Live Status Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/" className="shrink-0 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services" className="shrink-0 hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services/social-media-management" className="shrink-0 hover:text-white transition-colors">
                Social Media Management
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <span className="text-frame-accent shrink-0">Community Management</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Full-Stack Community Ops · Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master 12-Column Side-by-Side Display Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Master Display Headline & Intro (6 or 7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                <span className="inline-block whitespace-nowrap">Community Management</span>{' '}
                <span className="italic text-frame-accent inline-block">Service in Bangladesh.</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
                Your social media should not go quiet after you publish. When customers ask questions, send messages, leave reviews, or raise concerns, your response becomes part of their experience with your brand. Framecipher provides Community Management Service in Bangladesh to help businesses manage comments, DMs, reviews, moderation, and audience interactions across their active platforms.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact" variant="accent">
                  Get a Free Community Consultation
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Discuss Your Needs
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Zero automated holding replies</span>
                <span className="text-zinc-700">|</span>
                <span>In-house moderation</span>
                <span className="text-zinc-700">|</span>
                <span>Brand voice consistency</span>
              </div>
            </div>

            {/* Right Column: Interactive Stage & Channels Control */}
            <div className="flex justify-center lg:col-span-6 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[560px] space-y-3">
                {/* Single-row Segmented Platform Control */}
                <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#121214] p-1 font-mono w-full gap-1 select-none overflow-x-auto scrollbar-none">
                  {PLATFORM_CHANNELS.map((item) => {
                    const isActive = activeChannel === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveChannel(item.id)}
                        className={`flex-1 rounded-md py-1.5 px-2 text-center uppercase tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap text-[10px] sm:text-[11px] ${
                          isActive
                            ? 'bg-frame-accent/10 text-frame-accent font-medium shadow-sm border border-frame-accent/40'
                            : 'text-zinc-400 hover:text-white border border-transparent'
                        }`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>

                {/* Interactive 3D Social Media Tilt Visual */}
                <SocialMediaHeroVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC CALLOUT TIER: Modality 1 & 3 Architecture */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Community Management Built Around{' '}
              <span className="italic text-frame-accent">Customer Response &amp; Brand Trust.</span>
            </h2>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              We combine timely response, brand voice, escalation workflows, moderation, and community engagement into one coordinated system. Based in Dhaka, we work with businesses across Bangladesh and international markets including the US, UK, Australia, Canada, and UAE.
            </p>
          </div>

          {/* Workflow Pipeline Band */}
          <div className="mb-12 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Listen</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Moderate &amp; Filter</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">First-Line Response</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Escalate &amp; Track</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-frame-accent/30 bg-[#18181B] px-4 py-2 text-frame-accent">Community Intelligence</span>
          </div>

          {/* Modality 2 Architectural Divided Band (3-Column Continuum) */}
          <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 mb-10">
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                Who We Manage For
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Ecommerce and product brands, service businesses, B2B and professional businesses, local and multi-location businesses, startups and growing businesses, and international businesses.
              </p>
            </div>
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                Where We Work
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE with response workflows adapted to time zones, language, and audience expectations.
              </p>
            </div>
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                How We Deliver
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                <AutoLinks currentPath="/services/social-media-management/community-management" allowed={["/services/content-creation"]}>
                  Comment and message response, review monitoring, escalation workflows, moderation, social listening, proactive engagement, and community reporting.
                </AutoLinks>
              </p>
            </div>
          </div>

          {/* Honest Assessment Callout Box */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Your audience should not have to wonder whether anyone is listening. Talk to us and we will help you establish a clear, dependable community management workflow.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Discuss Your Community Needs
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
