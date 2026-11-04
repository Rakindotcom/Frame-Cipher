'use client'

import React from 'react'

const audiences = [
  {
    title: 'Businesses With Low Organic Traffic',
    body: 'If your website receives little search traffic, we can identify whether the issue comes from technical limitations, keyword targeting, content coverage, authority, or search demand.',
  },
  {
    title: 'Businesses With Traffic but Few Leads',
    body: 'Traffic alone does not guarantee business growth. We can review search intent, landing pages, content relevance, user experience, and conversion paths to identify where organic visitors may be dropping out.',
  },
  {
    title: 'New Websites & New Businesses',
    body: 'New websites need a search strategy from the beginning. We can help establish keyword targeting, site architecture, technical foundations, content priorities, and indexing requirements before organic visibility becomes harder to build.',
  },
  {
    title: 'Websites That Have Lost Rankings',
    body: 'A ranking decline can have multiple causes. We investigate the available evidence before recommending recovery work.',
  },
  {
    title: 'Businesses Entering New Markets',
    body: 'Businesses expanding into new countries, cities, or customer segments need search strategies built around the new market rather than simply duplicating existing pages.',
  },
  {
    title: 'Businesses Scaling Ecommerce',
    body: 'Growing stores often face more complex problems around product architecture, filters, indexation, category pages, internal linking, and content.',
  },
  {
    title: 'Teams That Need SEO Strategy & Execution',
    body: 'If you have an internal marketing or development team, we can provide strategy, audits, recommendations, implementation support, or ongoing SEO execution based on your needs.',
  },
]

const businessTypes = [
  {
    title: 'Local & Small Businesses',
    body: 'We focus on service-area searches, local landing pages, Google Business Profile optimization, Google Maps visibility, reviews, citations, service pages, and conversion paths such as calls, forms, and messaging.',
  },
  {
    title: 'Ecommerce Businesses',
    body: 'Ecommerce SEO focuses on products, categories, commercial search terms, technical architecture, buyer-focused content, internal linking, and product discovery.',
  },
  {
    title: 'B2B & Corporate Websites',
    body: 'B2B searches often involve longer research journeys. We can build visibility around services, solutions, industries, use cases, technical questions, comparison searches, and other topics that support buyers before a sales conversation.',
  },
  {
    title: 'SaaS & Startups',
    body: 'SaaS businesses often compete with established websites for valuable searches. We can focus on realistic keyword opportunities, product-led content, comparison pages, solution pages, technical SEO, and scalable content structures.',
  },
  {
    title: 'International Businesses',
    body: 'International businesses need more than translated pages. We align keyword research, localization, architecture, technical signals, and market-specific content with each target market.',
  },
]

export default function WhoFor() {
  return (
    <div className="border-b border-white/[0.08] bg-[#09090B] text-white">
      {/* SECTION 1: WHO IS OUR SEO SERVICE FOR? */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Who We Help // Growth Stages
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Who Is Our{' '}
              <span className="italic text-frame-accent">SEO Service For?</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Our SEO services can support businesses at different stages of search growth.
            </p>
          </div>

          {/* Modality 3 Blueprint Matrix for 7 audiences */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-light text-zinc-600 group-hover:text-frame-accent transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SEO FOR DIFFERENT BUSINESS TYPES */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Industry Application // Vertical Specialization
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO for Different{' '}
              <span className="italic text-frame-accent">Business Types.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO should reflect how your business sells, how customers search, and what the website needs to achieve.
            </p>
          </div>

          {/* Modality 3 Matrix for 5 business types */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Business Type 0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {type.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {type.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
