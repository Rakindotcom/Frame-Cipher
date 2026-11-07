'use client'

import React from 'react'
import Link from 'next/link'
import { Clock, Users, Wrench, Film, Palette, Zap, ArrowRight } from 'lucide-react'
import { hubRateCard } from '../../data/studioPackages'

const rateLinks = {
  0: '/studio/rental/',
  1: '/studio/podcast/',
  2: '/studio/product-photography/',
  3: '/studio/social-media-video-production/',
  4: '/studio/promotional-video-production/',
  5: '/studio/corporate-video-production/',
  6: '/studio/commercial-video-production/',
  7: '/studio/commercial-video-production/',
  8: '/studio/event-video-production/',
  9: '/studio/live-streaming/',
  10: '/studio/wedding-videography/',
  11: '/studio/property-videography/',
  12: '/studio/documentary-production/',
  13: '/studio/voice-over/',
  14: '/studio/video-editing/',
}

const serviceAnchors = {
  0: 'studio rental in Dhaka',
  1: 'podcast studio in Dhaka',
  2: 'product photography in Dhaka',
  3: 'social media video production',
  4: 'promotional video production',
  5: 'corporate video production',
  6: 'commercial video production',
  7: 'TVC production in Dhaka',
  8: 'event videography in Dhaka',
  9: 'live streaming service in Dhaka',
  10: 'wedding videography in Dhaka',
  11: 'property videography in Dhaka',
  12: 'documentary production in Bangladesh',
  13: 'voice-over studio in Dhaka',
  14: 'video editing services in Dhaka',
}

const quoteFactors = [
  { factor: 'Session duration', why: 'Longer shoots reserve more studio hours and support.', icon: Clock },
  { factor: 'Crew', why: 'Directors, sound recordists, gaffers or prompters add coverage.', icon: Users },
  { factor: 'Equipment and set staging', why: 'Multi-mic setups, custom backdrops or product styling tables add prep time.', icon: Wrench },
  { factor: 'Number of deliverables', why: 'One 16:9 master costs less than a master plus ten vertical clips.', icon: Film },
  { factor: 'Editing complexity', why: 'Grading, multicam switching, kinetic captions and motion graphics set edit hours.', icon: Palette },
  { factor: 'Turnaround', why: 'Standard delivery is 5 to 10 working days. Priority delivery in 48 to 72 hours adds 30%.', icon: Zap },
]

function RateCardTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
      <div className="hidden grid-cols-[1.3fr_0.7fr_0.4fr] gap-4 border-b border-white/[0.08] bg-[#18181B] px-6 py-4 font-mono text-xs uppercase tracking-wider text-frame-accent md:grid">
        <span>Production Discipline</span>
        <span>Indicative Baseline Rate</span>
        <span className="text-right">Inspection</span>
      </div>
      <div className="divide-y divide-white/[0.08]">
        {hubRateCard.map(([service, rate], i) => (
          <Link
            key={i}
            href={rateLinks[i] || '/studio/'}
            className="grid grid-cols-1 gap-2 p-5 transition-colors hover:bg-white/[0.02] md:grid-cols-[1.3fr_0.7fr_0.4fr] md:items-center md:gap-4 md:px-6 md:py-4"
          >
            <span className="font-heading text-sm font-medium text-white">
              {service}
            </span>
            <span className="font-mono text-sm text-zinc-300">
              {rate}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent md:justify-end">
              <span>{serviceAnchors[i] || 'Studio service'}</span>
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function QuoteFactorsGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
      {quoteFactors.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={i}
            className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                  Factor 0{i + 1}
                </span>
                <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-medium text-white">
                {item.factor}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-300">
                {item.why}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function StudioPricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Studio rates &amp;{' '}
              <span className="text-white">pricing parameters.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Transparent baseline fees across all studio and post-production disciplines. Every shoot receives an itemised written quotation before confirmation.
          </p>
        </div>

        {/* Architectural Rate Card Table */}
        <RateCardTable />

        {/* Quote Variables Headline */}
        <div className="mt-16 mb-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
            Six variables that determine your final investment
          </h3>
        </div>

        {/* Modality 3 Blueprint Matrix for Factors */}
        <QuoteFactorsGrid />
      </div>
    </section>
  )
}
