'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import InstagramHeroVisual from './InstagramHeroVisual'

const workflow = [
  { step: '01', title: 'Profile & SEO Audit', desc: 'Structure, bio keywords & highlights' },
  { step: '02', title: 'Strategy & Calendar', desc: 'Pillars, formats & audience intent' },
  { step: '03', title: 'Reels & Carousels', desc: 'Short-form video & branded visual assets' },
  { step: '04', title: 'Community & DMs', desc: 'Comment moderation & lead qualification' },
  { step: '05', title: 'Monthly Reporting', desc: 'Insights-led ongoing optimization' },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Fixed Nav Clearance & Hero Container */}
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
            <span className="shrink-0 text-[#A855F7]">Instagram Management</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#A855F7] whitespace-nowrap">
                  Specialized Social Capability
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  One In-House Team · Instagram-First Strategy
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Instagram Management{' '}
                <span className="italic text-[#A855F7]">Service in Bangladesh.</span>
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-200">
                Instagram can help people discover your brand, understand what you offer, build trust, and contact your business. But keeping an account active is not the same as managing it strategically.
              </p>

              {/* Supporting Copy */}
              <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                <p>
                  Framecipher provides Instagram Management Service in Bangladesh and for international businesses. Our in-house team brings strategy, profile optimization, content creation, Reels, Stories, community management, DMs, publishing, and performance reporting into one coordinated workflow.
                </p>
                <p>
                  We build your Instagram presence around your business goals, target audience, content performance, and the way Instagram currently recommends and distributes content. That means using the right format for the right objective instead of forcing every idea into the same type of post.
                </p>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact">
                  Get Your Free Instagram Account Audit
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Discuss Your Instagram Strategy
                </PosterButton>
              </div>

              {/* Trust Micro-Badge */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <ShieldCheck className="h-4 w-4 text-[#A855F7]" />
                  <span>Human Review &amp; Approval</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Client-Owned Accounts</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>Reels &amp; Short-Form Focused</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (6 cols) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <InstagramHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 5-COLUMN ARCHITECTURAL WORKFLOW LEDGER RIBBON */}
      <section className="border-b border-white/[0.08] bg-[#121214]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
            {workflow.map((item) => (
              <div key={item.step} className="p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#A855F7]">
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
