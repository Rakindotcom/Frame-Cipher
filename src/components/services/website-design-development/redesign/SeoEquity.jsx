'use client'

import React from 'react'
import { Check } from 'lucide-react'

const preLaunchChecks = [
  'Redirects',
  'Status codes',
  'Canonicals',
  'Robots directives',
  'XML sitemap',
  'Internal links',
  'Metadata',
  'Structured data',
  'Indexability',
  'Mobile experience',
]

export default function SeoEquity() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Redesign Without Losing{' '}
            <span className="italic text-frame-accent">Your SEO Equity.</span>
          </h2>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-3">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              A website redesign can change URLs, content, navigation, templates, internal links, structured data, and technical signals at the same time.
            </p>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
              That is why SEO needs to be considered before development and checked again after launch.
            </p>
          </div>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* 01: Before Development */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                Before Development
              </h3>
              <div className="mt-6 space-y-5 border-t border-white/[0.08] pt-5">
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Existing URL Inventory</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    We identify the important URLs on the existing website and determine which should remain, change, consolidate, or be removed.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Ranking &amp; Traffic Baseline</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    We document important organic pages, search visibility, traffic patterns, and other available SEO data before major structural changes begin.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Content Review</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    We identify valuable ranking and conversion content that should be preserved, improved, consolidated, or intentionally retired.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02: During the Rebuild */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                During the Rebuild
              </h3>
              <div className="mt-6 space-y-5 border-t border-white/[0.08] pt-5">
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Page-Level Redirect Mapping</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    When URLs change, old URLs are mapped to the most relevant new destinations instead of leaving valuable pages to return errors or sending unrelated pages to the homepage.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Metadata &amp; Content Preservation</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    Important titles, descriptions, headings, content, images, and other search-relevant elements are reviewed during migration.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Internal Linking Review</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    New navigation and page structures are checked so important pages remain discoverable and connected.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Canonical &amp; Structured Data Review</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    Canonical URLs, schema, and other technical SEO elements are reviewed as templates and page structures change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 03: Before Launch */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                Before Launch
              </h3>
              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <h4 className="font-heading text-base font-medium text-white ">Pre-Launch SEO QA</h4>
                <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-400 mb-4">We check:</p>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
                  {preLaunchChecks.map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 04: After Launch */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                After Launch
              </h3>
              <div className="mt-6 border-t border-white/[0.08] pt-5 space-y-4">
                <div>
                  <h4 className="font-heading text-base font-medium text-white ">Post-Launch Monitoring</h4>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    We monitor important search and technical signals after launch to identify issues that may appear during the transition.
                  </p>
                </div>
                <p className="text-xs font-normal text-zinc-400 italic">
                  Search engines need time to process changes, and post-launch vigilance ensures that unexpected crawl anomalies are addressed instantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaway Footnote Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The goal isn&apos;t simply to launch a newer website. It&apos;s to launch a better website without unnecessarily giving up the search visibility, content, and authority the existing website has already earned.
          </p>
        </div>
      </div>
    </section>
  )
}
