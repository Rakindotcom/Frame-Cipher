'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import CalendarHeroVisual from './CalendarHeroVisual'
import { AutoLinks } from '../../../seo/AutoLinks'

const trustBadges = [
  'Content Strategy',
  'Content Pillars',
  'Master Calendar',
  'Campaign Planning',
  'Repurposing',
  'Platform Adaptation',
]

const ledgerSteps = [
  { step: '01', title: 'Business Audit', desc: 'Goals, active platforms & audience' },
  { step: '02', title: 'Content Pillars', desc: 'Thematic mix & customer journey' },
  { step: '03', title: 'Master Calendar', desc: 'Cross-platform publishing schedule' },
  { step: '04', title: 'Platform Adaptation', desc: 'Native formatting & hooks' },
  { step: '05', title: 'Asset Production', desc: 'Workflows, briefs & approvals' },
  { step: '06', title: 'Optimization', desc: 'Analytics & calendar refinement' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pt-10 pb-16 sm:px-6 md:px-8 md:pt-14 md:pb-24">
      {/* Background radial atmosphere */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-zinc-600">/</li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li className="text-zinc-600">/</li>
            <li>
              <Link
                href="/services/social-media-management"
                className="hover:text-white transition-colors"
              >
                Social Media Management
              </Link>
            </li>
            <li className="text-zinc-600">/</li>
            <li className="text-frame-accent font-semibold">Content Calendar &amp; Strategy</li>
          </ol>
        </nav>

        {/* 50/50 Desktop Master Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Direct Copy Hierarchy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Cross-Platform Planning · Practical Content System
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Content Calendar &amp; Strategy Service in{' '}
              <span className="italic text-frame-accent">Bangladesh</span>
            </h1>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-xl">
              Your social media content should work as one coordinated system, not as separate posts created independently for every platform.
            </p>

            <div className="space-y-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 max-w-xl">
              <p>
                <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing/content-strategy"]}>
                  Framecipher provides Content Calendar &amp; Strategy Service in Bangladesh for businesses that need a clear plan for what to publish, where to publish it, when to publish it, and why each piece of content matters.
                </AutoLinks>
              </p>
              <p>
                We connect business goals, audience needs, content pillars, campaigns, platform roles, publishing schedules, repurposing opportunities, and performance insights into one practical content system. Our team works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.
              </p>
            </div>

            {/* Symmetrical 52px CTA Button Pair */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <PosterButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Get a Content Strategy Consultation
              </PosterButton>

              <PosterButton
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Discuss Your Content Goals
              </PosterButton>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-400">
                {trustBadges.map((badge, idx) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent" />
                    <span>{badge}</span>
                    {idx < trustBadges.length - 1 && (
                      <span className="text-zinc-600 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Parallax Stage */}
          <div className="relative flex items-center justify-center">
            <CalendarHeroVisual />
          </div>
        </div>

        {/* Bottom Architectural Ledger Ribbon */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08]">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              End-to-End Content Strategy Architecture
            </span>
            <span className="font-mono text-[10px] text-frame-accent">06 Modular Execution Phases</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {ledgerSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-xl border border-white/[0.08] bg-[#121214] p-3.5 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 mb-1.5">
                  <span className="text-frame-accent font-semibold">{step.step}</span>
                  <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-frame-accent" />
                </div>
                <div className="font-heading text-xs uppercase font-medium text-white mb-1">
                  {step.title}
                </div>
                <p className="text-[11px] leading-snug text-zinc-400 font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
