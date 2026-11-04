'use client'

import React from 'react'
import { Target, Server, FolderTree, Package, Check } from 'lucide-react'

const factors = [
  {
    title: 'Buyer Intent Comes Before Traffic Volume',
    icon: Target,
    lead: 'Not every keyword represents the same business opportunity. Someone searching for "how to choose running shoes" has different intent from someone searching for "buy running shoes online."',
    subtext: 'We map keywords according to where the customer is in the buying journey. This can include:',
    points: [
      'Informational intent',
      'Commercial research intent',
      'Category intent',
      'Product intent',
      'Brand intent',
      'Model-specific intent',
      'Transactional intent',
    ],
    summary: 'This helps prevent your store from targeting valuable searches with the wrong type of page.',
  },
  {
    title: 'Large Catalogs Create Technical Complexity',
    icon: Server,
    lead: 'Growing product catalogs can create SEO problems that are difficult to see from the customer-facing website.',
    subtext: 'Common technical issues include:',
    points: [
      'Duplicate URLs',
      'Faceted navigation',
      'Filter-generated pages',
      'Product variants',
      'Thin or near-duplicate pages',
      'Incorrect canonical URLs',
      'Crawl inefficiency',
      'Orphaned products',
      'Pagination issues',
      'Out-of-stock products',
      'Discontinued products',
    ],
    summary: 'We identify these problems and prioritize fixes based on their effect on crawling, indexing, visibility, and user experience.',
  },
  {
    title: 'Category Pages Often Drive Commercial Discovery',
    icon: FolderTree,
    lead: 'Category pages help shoppers discover groups of related products. They can also target broader commercial searches than individual product pages.',
    subtext: 'We optimize category pages around:',
    points: [
      'Relevant commercial keywords',
      'Search intent',
      'Useful category content',
      'Logical product organization',
      'Internal links',
      'Subcategory relationships',
      'Search-friendly headings',
      'Product discovery',
      'Helpful navigation',
    ],
    summary: 'A strong category page should help both search engines and shoppers understand what the store offers.',
  },
  {
    title: 'Product Pages Need More Than Manufacturer Copy',
    icon: Package,
    lead: 'Using the same manufacturer description as other stores can make it harder for a product page to provide unique value.',
    subtext: 'We improve priority product pages with useful, customer-focused information. This may include:',
    points: [
      'Original product descriptions',
      'Product benefits and features',
      'Relevant specifications',
      'Search-intent alignment',
      'Product attributes',
      'Customer-focused FAQs',
      'Internal links',
      'Reviews and user-generated content',
      'Clear calls to action',
      'Structured data',
    ],
    summary: 'The aim is to make important product pages more useful, relevant, and competitive in organic search.',
  },
]

export default function WhyDifferent() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Scale &amp; Mechanics // Beyond Basic SEO
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Ecommerce SEO{' '}
            <span className="italic text-frame-accent">Is Different</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            An ecommerce website can contain hundreds or thousands of URLs. Products, categories, variants, filters, reviews, pagination, and inventory changes can all affect organic search performance.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            That makes ecommerce SEO different from optimizing a typical business website. A strong strategy must consider both search visibility and the shopping journey.
          </p>
        </div>

        {/* 4 Architectural Difference Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {factors.map((item, idx) => {
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
                    <span className="font-mono text-xs text-zinc-400">Factor 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
                  </p>

                  <p className="mt-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                    {item.subtext}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.08] pt-4">
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
