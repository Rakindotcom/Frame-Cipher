'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const journeySteps = [
  'Identify markets with meaningful search demand and commercial opportunity',
  'Research country-specific keywords, terminology, and search intent',
  'Choose a scalable website structure for countries and languages',
  'Connect regional and language versions with the right technical signals',
  'Localize content instead of relying on direct translation',
  'Improve technical performance across target markets',
  'Build relevant authority in priority countries',
  'Track visibility, traffic, leads, and conversions by market',
  'Create a framework that supports future market expansion',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Market Architecture</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            International SEO Built for{' '}
            <span className="italic text-frame-accent">New Markets</span>, Local Search Intent &amp; Sustainable Growth
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-1">
            International SEO should connect your business with the right searchers in the right markets.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            People searching for the same product or service in Bangladesh, the USA, the UK, or the UAE may use different terminology, search with different intent, and expect different information. A strategy that works in one country may not work the same way in another. Framecipher builds international SEO strategies around the complete market journey:
          </p>
        </div>

        {/* 9 Journey Steps Grid */}
        <div className="mt-12 grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between pb-4">
                <span className="font-mono text-xs text-zinc-500">
                  Step {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-[#A855F7]" />
              </div>
              <p className="text-sm sm:text-base font-medium leading-snug text-white">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Objective Box */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-colors duration-200 hover:border-white/[0.14]">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0" />
            <h3 className="font-heading text-lg md:text-xl font-medium tracking-tight text-white">
              The objective is not simply to rank in more countries.
            </h3>
          </div>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-4xl">
            It is to build a search presence that remains technically sound, locally relevant, and commercially useful as your international footprint grows.
          </p>
        </div>

        {/* Consultation Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              See where you stand // Diagnostic Scope
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
              Start with a free international consultation
            </h3>
            <p className="mt-2 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
              We review your current international setup and recommend where the work will have the most impact first.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
