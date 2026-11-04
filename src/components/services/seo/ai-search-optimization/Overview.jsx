'use client'

import React from 'react'

const pillars = [
  'Clear answers to real user questions',
  'Strong search intent alignment',
  'Structured and easy-to-understand content',
  'Entity and brand clarity',
  'Topical depth and supporting coverage',
  'Reliable and consistent source information',
  'Strong technical SEO foundations',
  'Competitor and prompt-level visibility analysis',
  'Ongoing measurement and refinement',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>The Approach // Strategic Architecture</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Improve Your Visibility Across{' '}
            <span className="italic text-frame-accent">AI Search</span> &amp; Answer Experiences
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AI Search Optimization is not about writing content for one specific AI platform.
            It is about making your website, brand, expertise, and supporting sources easier for
            modern search systems to understand, evaluate, and reference.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            Framecipher builds AI search strategies around:
          </p>
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-xl overflow-hidden">
          {pillars.map((pillar, index) => (
            <div
              key={pillar}
              className="group relative bg-[#121214] p-6 sm:p-7 hover:bg-[#18181B] transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs font-semibold text-frame-accent/80 tracking-widest pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm sm:text-base font-medium leading-snug text-zinc-200 group-hover:text-white transition-colors">
                  {pillar}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 border-l-4 border-l-frame-accent space-y-3">
          <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
            We look at both your website and the broader information ecosystem around your brand.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            The goal is to improve your visibility across AI-driven search experiences while
            strengthening the same content, technical, and authority foundations that support
            traditional organic search.
          </p>
        </div>
      </div>
    </section>
  )
}
