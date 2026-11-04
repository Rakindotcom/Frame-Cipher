'use client'

import React from 'react'
import { ShoppingBag, Box, Terminal, Check } from 'lucide-react'

const platforms = [
  {
    name: 'Shopify SEO',
    icon: ShoppingBag,
    badge: 'Hosted Platform',
    description: 'We optimize Shopify stores around their product, collection, theme, app, and URL structures.',
    points: [
      'Product and collection optimization',
      'Shopify metadata',
      'Canonical review',
      'Duplicate URL management',
      'Collection structure',
      'Internal linking',
      'XML sitemap review',
      'Theme performance',
      'App-related SEO issues',
      'Product structured data',
      'Indexation controls',
    ],
    summary: 'Tailored specifically for Shopify collections, variants, and Liquid theme rendering.',
  },
  {
    name: 'WooCommerce SEO',
    icon: Box,
    badge: 'Open-Source WP',
    description: 'WooCommerce provides extensive flexibility, but plugins, taxonomies, attributes, filters, and themes can create SEO complexity.',
    points: [
      'Product and category optimization',
      'WooCommerce taxonomy structure',
      'SEO plugin configuration',
      'Product attributes',
      'Faceted navigation',
      'Canonicals',
      'XML sitemaps',
      'Schema',
      'Performance',
      'Internal linking',
      'Indexation management',
    ],
    summary: 'Optimized for WordPress databases, custom fields, and complex plugin ecosystems.',
  },
  {
    name: 'Custom Ecommerce SEO',
    icon: Terminal,
    badge: 'Headless / Next.js',
    description: 'Custom ecommerce platforms often require SEO and development to work together.',
    points: [
      'Product URLs',
      'Category structures',
      'Rendering (SSR / ISR / SSG)',
      'JavaScript hydration',
      'Pagination',
      'Filters & query parameters',
      'Search functionality',
      'Canonicals',
      'Structured data',
      'XML sitemaps',
      'Redirects',
      'Indexation controls',
    ],
    summary: 'This approach is useful when important SEO improvements require development-level changes.',
  },
]

export default function Platforms() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Technology Agnostic // Architecture Specialization
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Platform-Specific{' '}
            <span className="italic text-frame-accent">Ecommerce SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Different ecommerce platforms create different technical structures and SEO challenges.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            We adapt the strategy to your platform instead of applying the same checklist to every store.
          </p>
        </div>

        {/* 3 Platforms Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon
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
                    <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400 border border-white/[0.06]">
                      {platform.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-white">
                    {platform.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {platform.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    {platform.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {platform.summary}
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

