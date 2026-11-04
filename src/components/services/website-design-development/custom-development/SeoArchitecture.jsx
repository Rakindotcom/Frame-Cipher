'use client'

import React from 'react'
import { Check } from 'lucide-react'

const seoFeatures = [
  'Search-friendly URL structures',
  'Page titles and descriptions',
  'Dynamic metadata',
  'Open Graph metadata',
  'Canonical URL handling',
  'XML sitemap configuration',
  'Robots directives',
  'Structured data where appropriate',
  'Semantic HTML',
  'Internal linking',
  'SEO-friendly rendering decisions',
  'Image optimization',
  'Redirect planning during migrations',
]

export default function SeoArchitecture() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js SEO{' '}
            <span className="italic text-frame-accent">Architecture.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SEO should be considered during architecture, especially when organic search is an important acquisition channel. Our Next.js SEO foundation can include:
          </p>
        </div>

        {/* 13 Features Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {seoFeatures.map((seo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-3.5 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/[0.14]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </span>
              <span>{seo}</span>
            </div>
          ))}
        </div>

        {/* Technical Context Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-xs sm:text-sm text-zinc-300 space-y-2 leading-relaxed">
          <p>
            Next.js provides built-in capabilities for metadata and different rendering approaches, which can be used as part of a broader technical SEO strategy.
          </p>
          <p className="italic text-zinc-400">
            Technical implementation alone does not guarantee rankings. Content quality, search intent, competition, authority, and ongoing optimization still matter.
          </p>
        </div>
      </div>
    </section>
  )
}
