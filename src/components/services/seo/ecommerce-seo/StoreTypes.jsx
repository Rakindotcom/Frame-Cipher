'use client'

import React from 'react'
import { Store, Database, LayoutGrid, Globe, Check } from 'lucide-react'

const storeTypes = [
  {
    title: 'Small & Growing Online Stores',
    icon: Store,
    body: 'Smaller stores usually need focused optimization rather than hundreds of individual SEO tasks. We prioritize:',
    points: [
      'Important categories',
      'Best-selling products',
      'Commercial keywords',
      'Technical foundations',
      'Internal linking',
      'Product content',
      'High-value content opportunities',
    ],
    note: 'This creates a stronger foundation as the catalog grows.',
  },
  {
    title: 'Large Product Catalogs',
    icon: Database,
    body: 'Large catalogs require scalable SEO systems. We focus on:',
    points: [
      'Catalog architecture',
      'Crawl efficiency',
      'Indexation',
      'Faceted navigation',
      'Templates',
      'Internal linking',
      'Product prioritization',
      'Category structure',
      'Duplicate management',
      'Scalable content optimization',
    ],
    note: 'The goal is to improve large sections of the catalog without treating every URL as an isolated project.',
  },
  {
    title: 'Multi-Category Ecommerce Stores',
    icon: LayoutGrid,
    body: 'Stores with several product categories need clear commercial and topical organization. We structure SEO around:',
    points: [
      'Primary categories',
      'Subcategories',
      'Product groups',
      'Brand relationships',
      'Search intent',
      'Supporting content',
      'Internal links',
    ],
    note: 'This helps reduce overlap between pages targeting similar searches.',
  },
  {
    title: 'International Ecommerce Stores',
    icon: Globe,
    body: 'Selling across multiple countries introduces additional SEO requirements. We can plan for:',
    points: [
      'Country-specific search intent',
      'International keyword research',
      'Regional landing pages',
      'Language targeting',
      'Hreflang implementation',
      'Country-specific content',
      'Currency and product information',
      'International site architecture',
      'Duplicate regional content',
    ],
    note: 'The right setup depends on your target countries, languages, domains, and ecommerce platform.',
  },
]

export default function StoreTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Store Scale &amp; Scope // Tailored Strategy
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Ecommerce SEO for{' '}
            <span className="italic text-frame-accent">Different Store Types</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Your catalog size, business model, and target market affect how your ecommerce SEO strategy should be structured.
          </p>
        </div>

        {/* 4 Store Types Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {storeTypes.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Model 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {item.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
