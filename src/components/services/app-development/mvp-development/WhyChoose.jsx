'use client'

import React from 'react'
import {
  Users2,
  Compass,
  Layers,
  Eye,
  Globe2,
  LifeBuoy,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const PILLARS = [
  {
    icon: Users2,
    num: '01',
    title: 'One In-House Team',
    desc: 'Strategy, design, development, testing, and launch coordination stay within one team. You do not need to coordinate separate vendors for each stage of the MVP.',
  },
  {
    icon: Compass,
    num: '02',
    title: 'Scoped to Learn, Not to Impress',
    desc: 'We do not treat every requested feature as an MVP requirement. We focus on the functionality needed to test the defined product hypothesis and move additional features into later phases when appropriate.',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Built for the Next Phase',
    desc: 'An MVP should not create unnecessary rework. Where practical, we make technical and product decisions with the next development stage in mind so useful components can continue into future releases.',
  },
  {
    icon: Eye,
    num: '04',
    title: 'Transparent Review Process',
    desc: 'You receive review points throughout the project. The goal is to keep scope, design, development, and testing visible instead of presenting the finished product only at the end.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'Local & International Delivery',
    desc: 'Framecipher is based in Dhaka and works with businesses in Bangladesh alongside clients in the US, UK, Australia, Canada, and UAE. We account for market-specific requirements such as local payment methods, mobile-first usage patterns, and third-party services during product discovery.',
  },
  {
    icon: LifeBuoy,
    num: '06',
    title: 'Long-Term Support',
    desc: 'An MVP may become the foundation for a larger product. When needed, we can continue with bug fixes, integrations, performance improvements, new features, technical updates, and further product development.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column (Sticky Anchor - 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Choose Framecipher for MVP Development.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We build lean, functional products designed to generate definitive behavioral evidence before you commit full-scale capital. No fragmented freelancers, no agency bloat.
            </p>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
                Discuss Your MVP Scope
              </PosterButton>
            </div>

            {/* Quick Proof Card */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 space-y-3 font-mono text-xs text-zinc-400 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-zinc-400">ENGAGEMENT MODEL</span>
                <span className="text-white font-medium">Sprint-Based &amp; Fixed-Bid</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-zinc-400">CORE TIMELINE</span>
                <span className="text-emerald-400 font-medium">3 TO 8 WEEKS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">IP OWNERSHIP</span>
                <span className="text-white font-medium">100% CLIENT EXCLUSIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 Pillars - 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.num}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
