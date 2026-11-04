'use client'

import React from 'react'
import {
  Search,
  MapPin,
  Wrench,
  Sparkles,
  Award,
  BarChart3,
  Check,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Initial Store Audit',
    icon: Search,
    lead: "We begin by understanding your store's current SEO condition.",
    points: [
      'Technical SEO & crawlability',
      'Indexation & canonical status',
      'Product page structure & schema',
      'Category page discovery paths',
      'Site architecture & hierarchy',
      'Internal linking distribution',
      'Search intent alignment',
      'Content originality & value',
      'Structured data validation',
      'Core Web Vitals & performance',
      'Competitor visibility analysis',
    ],
    summary: 'We then prioritize the issues based on potential impact and implementation requirements.',
  },
  {
    step: '02',
    title: 'Keyword & Product-Catalog Mapping',
    icon: MapPin,
    lead: 'We connect search demand with your actual catalog.',
    points: [
      'Which keywords belong to categories',
      'Which keywords belong to products',
      'Which topics need supporting content',
      'Which searches need dedicated landing pages',
      'Which pages should target commercial intent',
      'Which pages may compete with each other (cannibalization)',
    ],
    summary: 'This creates a practical keyword-to-page roadmap.',
  },
  {
    step: '03',
    title: 'Technical & Architecture Fixes',
    icon: Wrench,
    lead: 'We address technical and structural issues based on priority.',
    points: [
      'Canonical fixes & self-referencing rules',
      'Indexation controls & noindex directives',
      'Duplicate URL & parameter management',
      'Faceted navigation cleanup',
      'Internal linking structural optimization',
      'XML sitemaps & image sitemaps',
      '301 redirects & broken link resolution',
      'Speed, mobile & Core Web Vitals fixes',
      'Scalable category hierarchy restructuring',
    ],
    summary: 'Development support may be required for complex changes.',
  },
  {
    step: '04',
    title: 'Product & Category Optimization',
    icon: Sparkles,
    lead: 'We optimize the pages that matter most to your search strategy.',
    points: [
      'Priority best-selling products',
      'Core commercial categories',
      'Seasonal collections',
      'Dedicated commercial landing pages',
      'Original customer-focused product descriptions',
      'Structured attributes & rich schema markup',
    ],
    summary: 'We focus on relevance, usefulness, internal relationships, and customer intent.',
  },
  {
    step: '05',
    title: 'Content & Authority Development',
    icon: Award,
    lead: 'Once your core pages are structured properly, we develop supporting content and authority where needed.',
    points: [
      'Buying guides & decision frameworks',
      'Product comparison content',
      'Customer-focused product FAQs',
      'Supporting commercial articles',
      'Internal link pathways to high-intent pages',
      'Relevant editorial link acquisition',
      'Content updates & refreshing',
    ],
    summary: 'This creates additional entry points into your store.',
  },
  {
    step: '06',
    title: 'Measurement & Continuous Optimization',
    icon: BarChart3,
    lead: 'SEO performance provides data for the next round of decisions.',
    points: [
      'Ranking movement across priority SKUs',
      'Overall store search visibility',
      'Organic clicks & impressions',
      'CTR improvements from rich snippets',
      'Product & category organic revenue performance',
      'Add-to-cart & organic checkout conversions',
    ],
    summary: 'We use these insights to identify what needs to be improved, expanded, updated, or prioritized next.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Methodology // 6-Stage Execution
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Approach{' '}
            <span className="italic text-frame-accent">Ecommerce SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Our process provides a clear path from research to implementation and continuous optimization.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => {
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
                    <span className="font-mono text-xs font-bold text-zinc-400">Step {item.step}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
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
                    &rarr; {item.summary}
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
