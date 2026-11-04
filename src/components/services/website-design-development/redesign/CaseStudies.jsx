'use client'

import React from 'react'
import { Check } from 'lucide-react'

const caseStudyPillars = [
  {
    title: 'The Starting Point',
    desc: 'Original website, legacy platform, accumulated technical debt, and existing performance bottlenecks.',
  },
  {
    title: 'The Challenge',
    desc: 'Real UX friction, mobile usability issues, SEO preservation risks, and specific business conversion targets.',
  },
  {
    title: 'What We Changed',
    desc: 'Information architecture restructuring, modern UI design, clean code redevelopment, and 1-to-1 redirect mapping.',
  },
  {
    title: 'Before → After',
    desc: 'Side-by-side visual progression demonstrating improved hierarchy, readability, and modern brand alignment.',
  },
  {
    title: 'Verified Results',
    desc: 'Sub-second Core Web Vitals, 100% organic search equity preserved, and measurable improvements in qualified inquiries.',
  },
]

const trackedMetrics = [
  'Core Web Vitals & Speed Scores',
  'Preserved Organic Search Rankings',
  'Form & Checkout Conversion Rates',
  'Mobile Usability & Engagement',
  'Zero 404 Crawl Error Rate',
  'Clean CMS Content Management',
  'Zero-Downtime DNS Cutover',
  'Qualified Leads & Inquiries',
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What Each Redesign{' '}
            <span className="italic text-frame-accent">Case Study Demonstrates.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We document our redesign projects from original diagnostic audit through live cutover, highlighting the concrete technical and commercial outcomes achieved.
          </p>
        </div>

        {/* 5 Stage Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Metrics Tracked Post-Redesign */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
            Core Metrics Tracked Post-Redesign
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {trackedMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#09090B] p-3.5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            All published results reflect genuine analytics, Search Console verification, and client-approved benchmarks.
          </p>
        </div>
      </div>
    </section>
  )
}
