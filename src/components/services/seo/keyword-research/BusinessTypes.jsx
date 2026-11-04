'use client'

import React from 'react'
import { ShoppingBag, MapPin, Building2, Briefcase, Check } from 'lucide-react'

const types = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Ecommerce Keyword Research',
    description:
      'We research keywords across the entire product discovery and transactional buying funnel, building a scalable taxonomy for modern online stores.',
    points: [
      'Product-specific & category-level searches',
      'Brand searches & competitor product comparisons',
      'Feature-based queries & granular product attributes',
      'High-intent commercial modifiers & buying variations',
      'Long-tail, low-competition SKU & catalog terms',
    ],
    note: 'We organize terms into category, product, faceted filter, and supporting buying-guide structures—powering both rank visibility and frictionless customer purchase discovery.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Local Keyword Research',
    description:
      'Local service and retail businesses depend on geo-targeted queries that combine service, locality, urgent intent, and physical proximity.',
    points: [
      'Service + city / division queries (e.g., Dhaka, Chittagong)',
      'Service + neighborhood / area searches (Gulshan, Banani, Dhanmondi)',
      'Location modifiers & "near me" mobile proximity variations',
      'Local problem searches & emergency commercial intent',
      'Location-specific landing page & Google Business Profile alignment',
    ],
    note: 'For Bangladeshi businesses, this accounts for bilingual local terminology, Banglish phrasing, and regional search behavior across metropolitan zones.',
  },
  {
    number: '03',
    icon: Building2,
    title: 'B2B & SaaS Keyword Research',
    description:
      'B2B enterprise and software buyers conduct extensive problem and comparison research long before searching directly for a specific software brand.',
    points: [
      'Solution keywords & pain-point problem searches',
      'Industry terminology & technical workflow requirements',
      'Use-case specific searches & enterprise capability queries',
      'Head-to-head comparison terms & competitor alternative searches',
      'Integration-related searches across full buyer journey stages',
    ],
    note: 'Constructs strategic coverage from initial problem awareness through RFP evaluation, capturing high-ACV enterprise pipeline demand.',
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Service Business Keyword Research',
    description:
      'Professional service firms need keywords that connect verified search intent directly with profitable client service engagements.',
    points: [
      'Core service terms & specialized practice area variations',
      'Problem-based searches & commercial cost/pricing queries',
      'Service comparison terms & qualified vendor evaluations',
      'Industry-specific practice areas & geographic modifiers',
      'Supporting informational queries that pre-qualify inbound leads',
    ],
    note: 'Our strategy clearly separates high-converting service landing pages from top-of-funnel blog posts so your site never relies on vanity blog traffic alone.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Business Models
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Keyword Research for <span className="italic text-frame-accent">Different Business Types</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword opportunities vary dramatically by business model. Ecommerce stores, local service companies, B2B enterprises, and SaaS scale-ups do not share identical search behaviors.
          </p>
        </div>

        {/* 4 Business Types 2-Column Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {types.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Model {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.note}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
