'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import FacebookHeroVisual from './FacebookHeroVisual'

const workflow = [
  { step: '01', title: 'Page Audit', desc: 'Structure, SEO & roles' },
  { step: '02', title: 'Strategy & Calendar', desc: 'Pillars, cadence & hooks' },
  { step: '03', title: 'Creative Production', desc: 'Graphics, Reels & copy' },
  { step: '04', title: 'Community Care', desc: 'Comments, DMs & reviews' },
  { step: '05', title: 'Monthly Reporting', desc: 'Data-driven refinements' },
]

const pillars = [
  {
    label: 'What We Handle',
    body: 'Page optimization, content strategy, creative content, publishing, Reels and Stories, comments, Messenger, reviews, moderation, and reporting.',
  },
  {
    label: 'Who We Build For',
    body: 'Local businesses, ecommerce brands, service companies, professional and B2B businesses, multi-location operators, and international brands.',
  },
  {
    label: 'Where We Work',
    body: 'Bangladesh, the US, UK, Australia, Canada, and UAE, with content and communication adapted to the market and audience.',
  },
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
            <span className="shrink-0 text-frame-accent">Facebook Management</span>
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
                  One In-House Team · Facebook-First Strategy
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Facebook Management{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-200">
                Your Facebook Page should do more than stay active. It should help people understand your business, trust your brand, ask questions, and take the next step.
              </p>

              {/* Supporting Copy */}
              <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                <p>
                  Framecipher provides Facebook Management Service in Bangladesh for businesses that want consistent, strategic, and professionally managed Facebook presence. We handle Facebook Page optimization, content strategy, creative content, publishing, Reels and Stories, comments, Messenger, reviews, moderation, reporting, and ongoing optimization.
                </p>
                <p>
                  Our team supports businesses in Bangladesh, the US, UK, Australia, Canada, and UAE, with content and communication adapted to the market, audience, and business goals.
                </p>
              </div>

              {/* Dual Symmetrical 52px CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Your Free Page Audit
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Request a Custom Plan
                </PosterButton>
              </div>

              {/* Quality & Trust Indicator Strip */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span className="line-clamp-1">Meta Business Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span className="line-clamp-1">Human Approval Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span className="line-clamp-1">Domestic &amp; Global</span>
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): 3D Facebook Architecture Visual */}
            <div className="lg:col-span-6">
              <FacebookHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER / WORKFLOW STRIP */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Section Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                 SYSTEMATIC EXECUTION · HOW YOUR PAGE GROWS 
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Facebook Is Not Instagram{' '}
              <span className="italic text-frame-accent">With A Different Logo.</span>
            </h2>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Facebook operates as a trust, customer inquiry, local discovery, and community engine. We manage every touchpoint strategically.
            </p>
          </div>

          {/* Modality 3: 5-Step Blueprint Matrix */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                      Step {item.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-base font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modality 2: 3 Core Delivery Pillars Column Band */}
          <div className="mt-12 border-y border-white/[0.08]">
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.label}
                  className="group flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-[#121214] sm:p-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-500">
                        0{index + 1}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-white sm:text-xl">
                      {pillar.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
