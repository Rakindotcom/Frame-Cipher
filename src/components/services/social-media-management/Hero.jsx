'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap, ArrowRight } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import SocialMediaHeroVisual from './SocialMediaHeroVisual'

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Fixed Nav Clearance & Hero Container */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs (§2.3 Clearance Standard) */}
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
            <span className="shrink-0 text-[#A855F7]">Social Media Management</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300 overflow-hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#A855F7] whitespace-nowrap">
                  Complete Social Media Solution
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  One In-House Team · Built For Your Brand
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Social Media Management{' '}
                <span className="italic text-[#A855F7]">Services in Bangladesh.</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Social media should do more than keep your profiles active. Framecipher manages content, publishing, community engagement, and performance across the platforms that matter to your business. We build platform-specific strategies for businesses in Bangladesh and international markets, with one in-house team managing your social presence from planning to reporting.
              </p>

              {/* Micro-Action Invitation */}
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                Get a free social audit and see what is working, what is missing, and where your social presence can improve.
              </p>

              {/* Dual Symmetrical 52px CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Your Free Social Audit
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Talk to Our Social Team
                </PosterButton>
              </div>

              {/* Quality & Trust Indicator Strip */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#A855F7]" />
                  <span className="line-clamp-1">One In-House Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A855F7]" />
                  <span className="line-clamp-1">Client Approval Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 shrink-0 text-[#A855F7]" />
                  <span className="line-clamp-1">Domestic &amp; Global</span>
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): 3D Social Media Architecture Visual */}
            <div className="lg:col-span-6">
              <SocialMediaHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER / WORKFLOW STRIP */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
                Strategy To Reporting, Handled By One Team
              </p>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-[1.0] text-white">
              Get A Free Social Audit And See What Is Working
            </h2>
          </div>

          {/* 5-Step Process Pill Pipeline */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {['Social Audit', 'Content Strategy', 'Creation & Approval', 'Publishing', 'Community & Reporting'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="rounded-lg border border-white/[0.08] bg-[#121214] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-zinc-200">
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span className="font-mono text-[#A855F7] select-none">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 3 Overview Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Who We Manage For
              </span>
              <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                SMEs, startups, ecommerce brands, local companies, B2B brands, established businesses, and personal brands.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Where We Work
              </span>
              <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                Facebook, Instagram, LinkedIn, TikTok, and YouTube across Bangladesh and international markets.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                How We Deliver
              </span>
              <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                Platform-specific planning, original content, publishing, community care, and transparent monthly reporting.
              </p>
            </div>
          </div>

          {/* Honest Platform Mix Advisory Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Objective Platform Recommendation
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-200">
                Not sure which platforms your business should be on? We will tell you honestly which ones make sense instead of recommending all five by default.
              </p>
            </div>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get Your Free Social Audit
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
