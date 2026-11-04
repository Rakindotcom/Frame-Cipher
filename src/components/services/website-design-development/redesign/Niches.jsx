'use client'

import React from 'react'

const nicheTypes = [
  {
    title: 'Business & Corporate Websites',
    description: 'Redesigns focused on credibility, service discovery, lead generation, clear messaging, and stronger paths from visitor to inquiry.',
  },
  {
    title: 'Ecommerce Stores',
    description: 'Redesigns focused on product discovery, category structure, product-page conversion, checkout friction, mobile shopping, catalog organization, and performance.',
  },
  {
    title: 'Blogs & Content Publications',
    description: 'Redesigns focused on content discovery, category architecture, readability, internal linking, search, archive pages, and publishing workflows.',
  },
  {
    title: 'Portfolios & Personal Brands',
    description: 'Redesigns focused on presenting work clearly, improving project discovery, strengthening credibility, and creating a better path to inquiries.',
  },
  {
    title: 'Membership & Community Sites',
    description: 'Redesigns focused on account journeys, member navigation, gated content, dashboards, and outdated functionality.',
  },
  {
    title: 'Directories & Listing Websites',
    description: 'Redesigns focused on search, filtering, taxonomy, structured listings, category navigation, and scalability as listings grow.',
  },
]

export default function Niches() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Redesign for{' '}
            <span className="italic text-frame-accent">Every Niche &amp; Purpose.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different websites fail in different ways. A business website may have a weak lead path, while an ecommerce store may have checkout friction or a difficult product structure. A content website may have thousands of pages but poor content discovery. We adapt the redesign around how your website works and what users need to accomplish.
          </p>
        </div>

        {/* 6 Niches Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nicheTypes.map((niche, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Niche 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {niche.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {niche.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Card */}
        <p className="mt-8 text-xs sm:text-sm font-normal text-zinc-400 italic">
          We scope the redesign around what your specific website needs rather than applying the same business-site checklist to every project.
        </p>
      </div>
    </section>
  )
}
