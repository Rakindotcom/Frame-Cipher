'use client'

import React from 'react'
import { Check } from 'lucide-react'

const focusChecklist = [
  'Manual prospecting instead of bulk lists',
  'Relevant publishers instead of unrelated high-metric sites',
  'Useful content instead of content written only to hold a link',
  'Natural placement instead of forced anchor patterns',
  'Transparent reporting instead of unexplained backlink counts',
  'Long-term relationships instead of one-off placement transactions',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Core Philosophy // Relevance Over Manipulation
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Off-Page SEO Built on{' '}
            <span className="italic text-frame-accent">Relevance, Editorial Quality,</span>{' '}
            and Transparency
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Link building works best when a backlink makes sense outside of SEO.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <p>
              A relevant website links to useful content because it helps its readers. An industry publication references a resource because the resource adds context. A journalist cites original research because the information is useful to a story. These are the types of relationships our outreach aims to create.
            </p>
            <p>
              Google states that its ranking systems include link analysis systems that evaluate how pages link to one another, with PageRank remaining part of Google&apos;s core ranking systems. At the same time, Google treats links created primarily to manipulate rankings as link spam.
            </p>
            <p>
              That distinction shapes how we work. We do not build links simply to increase a third-party metric. We look at the relevance of the website, the context of the placement, the intended audience, the destination page, and the overall quality of the opportunity.
            </p>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 text-sm sm:text-base text-zinc-400">
              <p className="font-medium text-white">
                The goal is not to manufacture a backlink profile. It is to build legitimate opportunities for your brand to be referenced by other websites.
              </p>
            </div>
          </div>

          {/* Checklist Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Outreach Principles
            </span>
            <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Our approach focuses on
            </h3>

            <ul className="mt-6 space-y-4">
              {focusChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-frame-accent/20 text-frame-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
