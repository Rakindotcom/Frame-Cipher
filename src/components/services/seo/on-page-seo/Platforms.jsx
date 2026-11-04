'use client'

import React from 'react'
import {
  Layers,
  ShoppingBag,
  BookOpen,
  MapPin,
} from 'lucide-react'

const pageTypes = [
  {
    num: '01',
    icon: Layers,
    title: 'Service & Landing Pages',
    intro:
      'Service pages need to communicate what the business offers while matching commercial search intent.',
    bullets: [
      'Service descriptions',
      'Benefits and capabilities',
      'Target search terms',
      'Headings',
      'FAQs',
      'Trust elements',
      'Internal links',
      'Service-area information',
      'Calls to action',
      'Supporting content',
    ],
    closing:
      'The goal is to make the page useful to someone actively evaluating a service while maintaining natural, search-focused content.',
  },
  {
    num: '02',
    icon: ShoppingBag,
    title: 'Ecommerce Product & Category Pages',
    intro:
      'Ecommerce pages require a balance between search visibility and product discovery. For product and category pages, on-page work can include:',
    bullets: [
      'Product and category titles',
      'Product descriptions',
      'Search-intent alignment',
      'Supporting product information',
      'Internal linking',
      'Image optimization',
      'Product and category headings',
      'Relevant structured data',
      'Buyer-focused content',
      'Related-product connections',
    ],
    closing:
      'We avoid duplicating manufacturer descriptions or creating thin category pages simply to target additional keywords. Broader ecommerce SEO, technical store architecture, and platform-level issues can be handled as part of the relevant ecommerce SEO or technical SEO scope.',
  },
  {
    num: '03',
    icon: BookOpen,
    title: 'Blog & Resource Pages',
    intro:
      'Blog and resource pages should answer the intended query thoroughly while connecting users to relevant parts of the website. We can optimize:',
    bullets: [
      'Search intent',
      'Topic coverage',
      'Article structure',
      'Headings',
      'Supporting questions',
      'Internal links',
      'Author and content context',
      'Metadata',
      'Images',
      'Content freshness',
      'Links to relevant services or products',
    ],
    closing:
      'A useful resource should also support the wider website rather than existing as an isolated article.',
  },
  {
    num: '04',
    icon: MapPin,
    title: 'Local Business Pages',
    intro:
      'Local pages need to communicate both service relevance and geographic context. We can optimize:',
    bullets: [
      'Service and location relevance',
      'Local terminology',
      'Business information',
      'Location-specific content',
      'Internal links',
      'Local FAQs',
      'Service-area sections',
      'Relevant local entities',
      'LocalBusiness structured data where appropriate',
    ],
    closing:
      'We avoid creating near-identical city pages with minimal differences simply to target more locations.',
  },
]

export default function Platforms() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Page-Type Alignment // Tailored Archetypes
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            On-Page SEO for{' '}
            <span className="italic text-frame-accent">Different Page Types</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Different pages serve different purposes. We adapt on-page optimization to the role each page plays within the website.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageTypes.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-frame-accent transition-colors">
                      PAGE_ARCHETYPE_0{p.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    {p.intro}
                  </p>

                  <div className="mt-4 border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Key Optimization Elements:
                    </span>
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {p.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-xs text-zinc-400 font-normal">
                          <span className="h-1.5 w-1.5 rounded-full bg-frame-accent/60 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed italic border-l-2 border-frame-accent/40 pl-3">
                    {p.closing}
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
