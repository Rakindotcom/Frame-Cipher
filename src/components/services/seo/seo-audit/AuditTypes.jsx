'use client'

import React from 'react'
import { ShoppingBag, MapPin, Globe, Database, Check } from 'lucide-react'

const auditTypes = [
  {
    title: 'Ecommerce SEO Audit',
    icon: ShoppingBag,
    lead: 'For ecommerce websites, we audit product, category, and transactional architectures:',
    points: [
      'Product and category architecture',
      'Faceted navigation & filters',
      'Product and category indexation',
      'Variant URLs & duplicate pages',
      'Out-of-stock & discontinued pages',
      'Product Schema & offer markup',
      'Internal linking & category silos',
      'Ecommerce conversion tracking in GA4',
    ],
    note: 'Tailored to platforms such as Shopify, WooCommerce, Magento, or custom ecommerce systems.',
  },
  {
    title: 'Local SEO Audit',
    icon: MapPin,
    lead: 'For businesses targeting local geographic customers across Bangladesh and overseas:',
    points: [
      'Google Business Profile optimization',
      'Local landing pages & service areas',
      'NAP citation consistency',
      'Local keyword targeting & intent',
      'Review signals & customer sentiment',
      'Local competitors & Map Pack visibility',
      'Location-page content quality',
      'Local internal linking signals',
    ],
    note: 'Can be used as a standalone diagnostic or alongside an ongoing Local SEO strategy.',
  },
  {
    title: 'International SEO Audit',
    icon: Globe,
    lead: 'For multi-country and multilingual websites targeting global searchers:',
    points: [
      'Country and language targeting',
      'URL architecture (ccTLD vs subfolder)',
      'Hreflang implementation & canonicals',
      'Regional indexation & crawl pathways',
      'International internal linking',
      'Localized content & currency signaling',
      'Country-specific keyword targeting',
      'Market-level competitors (USA, UK, UAE, AU)',
    ],
    note: 'Essential for businesses expanding into the USA, UK, UAE, Australia, and Canada.',
  },
  {
    title: 'Enterprise & Large Website Audit',
    icon: Database,
    lead: 'Large websites require deeper auditing because small structural problems affect thousands of URLs:',
    points: [
      'Large-scale crawl analysis (10k–1M+ URLs)',
      'Template-level issues & dynamic code',
      'Indexation patterns & crawl efficiency',
      'JavaScript rendering & hydration',
      'Faceted navigation & parameter filters',
      'Internal-link architecture at scale',
      'Log-file analysis where available',
      'Multi-market technical configurations',
    ],
    note: "Scope is adjusted to the site's size, platform, business goals, and technical environment.",
  },
]

export default function AuditTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Specialized Scope // Tailored Dimensions
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Specialized SEO{' '}
            <span className="italic text-frame-accent">Audit Options</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Different websites require different audit layers. We can extend the standard audit based on your platform, business model, market, and technical complexity.
          </p>
        </div>

        {/* 4 Specialized Audits Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {auditTypes.map((item, idx) => {
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
                    <span className="font-mono text-xs text-zinc-400">Specialization 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
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
