'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const factors = [
  'Current website quality & mobile speed',
  'Existing Google Business Profile maturity & health',
  'Local competitor density & review count',
  'Physical business location proximity to high-density areas',
  'Number of geographic target areas & service radiuses',
  'Existing domain authority & local citation footprint',
  'Current customer review profile & sentiment',
  'Technical SEO & local structured data condition',
  'Local content depth & neighborhood relevance',
  'Consistency of ongoing weekly implementation',
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Velocity &amp; Momentum
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How Long Does{' '}
            <span className="italic text-frame-accent">Local SEO Take?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO is an ongoing process rather than a one-time website change. We focus on building sustainable local visibility instead of promising a fixed ranking date.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <Clock className="h-5 w-5 text-frame-accent" />
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                  Progression &amp; Momentum
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Initial improvements may appear within 30 to 60 days as profile category errors, duplicate citations, and technical GBP blockers are resolved.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                However, dominating competitive 3-Pack keywords against established local incumbents requires sustained review acquisition, localized content depth, and authoritative local citations built steadily over months.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Timeline Variables
            </span>
            <h3 className="mt-2 font-heading text-xl font-medium text-white">
              Progress depends on:
            </h3>

            <ul className="mt-6 space-y-2.5">
              {factors.map((factor, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
