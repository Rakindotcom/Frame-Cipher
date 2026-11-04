'use client'

import React from 'react'
import { Check } from 'lucide-react'

const headlessCmsFeatures = [
  'Structured content',
  'Dynamic pages',
  'Case studies',
  'Service content',
  'Location pages',
  'Resource libraries',
  'Editorial workflows',
  'Preview and publishing workflows',
]

export default function HeadlessCms() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js with{' '}
            <span className="italic text-frame-accent">Headless CMS.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A headless CMS can separate content management from the frontend experience. This can be useful when your content team needs an easy editing system while the website needs a highly customized Next.js frontend. Depending on the project, we can connect Next.js with a suitable headless CMS for:
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {headlessCmsFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/[0.14]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Takeaway Footnote */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-400">
          The CMS is selected around the content model, editorial process, integrations, and long-term requirements rather than added simply because it is popular.
        </p>
      </div>
    </section>
  )
}
