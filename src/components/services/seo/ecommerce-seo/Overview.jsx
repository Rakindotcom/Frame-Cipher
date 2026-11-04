'use client'

import React from 'react'
import { ArrowRight, ShoppingCart, Layers, GitCompare, BookOpen, BookmarkCheck, FileText } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const intentMapping = [
  {
    intent: 'Product searches',
    destination: 'Product pages',
    description: 'High purchase intent, exact SKUs, models & variants ready to buy',
    icon: ShoppingCart,
  },
  {
    intent: 'Category searches',
    destination: 'Category pages',
    description: 'Commercial discovery for broad product groups and collections',
    icon: Layers,
  },
  {
    intent: 'Comparison searches',
    destination: 'Comparison content',
    description: 'Head-to-head evaluation, feature matrix & side-by-side breakdowns',
    icon: GitCompare,
  },
  {
    intent: 'Research queries',
    destination: 'Buying guides',
    description: 'Decision-stage educational guides, criteria & recommendation lists',
    icon: BookOpen,
  },
  {
    intent: 'Brand searches',
    destination: 'Relevant brand or product pages',
    description: 'Navigational & brand-affinity queries direct to brand hubs',
    icon: BookmarkCheck,
  },
  {
    intent: 'Supporting topics',
    destination: 'Informational content with commercial internal links',
    description: 'How-to guides, FAQs & blogs internally linking to products',
    icon: FileText,
  },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Core Philosophy // Search Intent &amp; Revenue
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Ecommerce SEO Built Around{' '}
            <span className="italic text-frame-accent">Buyers, Products &amp; Revenue</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Ecommerce SEO works best when search visibility connects with your buying journey.
            A customer searching for a specific product may already have strong purchase intent. Another visitor may still be comparing options or researching a problem.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Your SEO strategy should account for that difference. We connect search demand with the pages that can satisfy each intent:
          </p>
        </div>

        {/* Intent Mapping Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {intentMapping.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.16] hover:bg-[#161619]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">Intent 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-white">
                    {item.intent}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-mono font-semibold text-frame-accent">
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    <span className="text-emerald-400">{item.destination}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Summary & Action Callout */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h4 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
              End-to-End Commerce Infrastructure
            </h4>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              We also consider technical performance, site architecture, internal linking, structured data, and ecommerce analytics. The goal is simple: bring qualified searchers to useful pages and create more opportunities for them to become customers.
            </p>
          </div>

          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
