'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Overview() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Strategic Approach // Search Intent
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SEO That Turns Search Visibility{' '}
            <span className="italic text-frame-accent">Into Business Growth.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Search Engine Optimization is not simply about getting more visitors. It is about helping the right people find the right page when they are actively searching for a product, service, solution, or business.
          </p>
        </div>

        {/* 12-Column Responsive Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Column: Descriptive Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
              <p>
                Framecipher connects technical SEO, search intent, content, website structure, authority, and conversion paths into one SEO strategy. Instead of optimizing isolated pages or chasing rankings without context, we look at how your entire website can attract and convert relevant search demand.
              </p>
              <div className="h-px w-full bg-white/[0.06]" />
              <p>
                We work with startups, SMEs, ecommerce businesses, B2B companies, SaaS businesses, and established brands in Bangladesh and international markets. We begin by identifying the opportunities and limitations that matter most, then prioritize the work based on search potential, business value, and implementation requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Free SEO Audit Action Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] shadow-xl">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-purple-600/10 blur-2xl" />

              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Free SEO Audit
                </span>
              </div>

              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                See where your website actually stands
              </h3>

              <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                We review the factors limiting your organic visibility and identify the search opportunities that matter to your business before any work begins.
              </p>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <PosterButton href="/contact" variant="accent" className="w-full justify-center">
                  Get a Free SEO Audit &rarr;
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
