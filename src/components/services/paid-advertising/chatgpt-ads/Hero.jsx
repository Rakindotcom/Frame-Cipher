'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import ChatGptHeroVisual from './ChatGptHeroVisual'

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
            <Link href="/services/paid-advertising" className="shrink-0 transition-colors hover:text-white">
              Paid Advertising
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <span className="shrink-0 text-frame-accent">ChatGPT Ads</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols on desktop) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              {/* H1 Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Best ChatGPT Ads Management{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Hero Narrative Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                <p>
                  Reach customers while they research, compare options, and make decisions inside ChatGPT.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Framecipher provides ChatGPT Ads Management Service from Dhaka for businesses targeting eligible international markets. We manage campaign setup, context targeting, ad creative, conversion tracking, optimization, and performance reporting. Our approach combines paid advertising expertise with practical AI search experience. We look beyond the ad itself and consider the full journey from conversational intent to landing page and conversion.
                </p>
                <p className="text-xs sm:text-sm font-mono text-zinc-300">
                  <span className="text-frame-accent mr-1 font-bold">✓</span> ChatGPT Ads are an evolving advertising channel, but the core campaign workflow is already operational through OpenAI Ads Manager. We work with the features and markets currently available, test carefully, and report what the data actually supports.
                </p>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact" variant="accent">
                  Request a Consultation &rarr;
                </PosterButton>
                <PosterButton href="#how-it-works" variant="outline">
                  Explore ChatGPT Ads &rarr;
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span>OpenAI Ads Manager</span>
                <span className="text-zinc-700">|</span>
                <span>Contextual Intent Targeting</span>
                <span className="text-zinc-700">|</span>
                <span>OpenAI Pixel &amp; CAPI</span>
              </div>
            </div>

            {/* Right Column: Animated 3D ChatGPT / OpenAI Knot Visual (6 cols on desktop) */}
            <div className="flex w-full justify-center lg:col-span-6">
              <ChatGptHeroVisual />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
