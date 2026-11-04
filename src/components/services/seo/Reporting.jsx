'use client'

import React from 'react'

const reportItems = [
  'Organic clicks and impressions',
  'Keyword and page-level ranking movement',
  'Branded and non-branded search visibility',
  'Organic traffic trends',
  'Organic leads and conversions',
  'Ecommerce actions and revenue where tracking is available',
  'Indexed pages and technical health',
  'Backlink and authority development',
  'Local search visibility',
  'Content performance',
  'Completed SEO work',
  'New issues and recommended priorities',
]

const dataSources = [
  {
    title: 'Google Search Console',
    body: 'For search visibility, indexing, queries, and page performance.',
  },
  {
    title: 'Google Analytics 4',
    body: 'For website behavior and conversion measurement.',
  },
  {
    title: 'Google Business Profile',
    body: 'For local search and business-profile insights.',
  },
  {
    title: 'Google Trends',
    body: 'For search-interest patterns and topic research.',
  },
  {
    title: 'Crawling Tools',
    body: 'For technical SEO and website architecture analysis.',
  },
  {
    title: 'Third-Party SEO Platforms',
    body: 'For keyword, competitor, backlink, and SERP research.',
  },
]

export default function Reporting() {
  return (
    <div className="border-b border-white/[0.08] bg-[#09090B] text-white">
      {/* SECTION 1: SEO REPORTING & PERFORMANCE TRACKING */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Transparent Tracking // Actionable Analytics
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO Reporting &amp;{' '}
              <span className="italic text-frame-accent">Performance Tracking.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO reporting should make it easy to understand what changed, what is working, and what should happen next. Depending on the project and available access, reporting can cover:
            </p>
          </div>

          {/* 12 Report Items Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]"
              >
                <span className="font-mono text-xs font-semibold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          {/* Reporting Takeaways Split */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Where appropriate, we use Google Search Console, Google Analytics 4, Google Business Profile, and relevant SEO platforms to connect search performance with website activity.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                The purpose of reporting is not to create a longer spreadsheet. It is to make the next SEO decision clearer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEO TOOLS & DATA SOURCES */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Evidence Versus Noise // Tool Ecosystem
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO Tools &amp;{' '}
              <span className="italic text-frame-accent">Data Sources We Use.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO tools are useful when they help answer a specific business or search question. Depending on the project, our analysis may use:
            </p>
          </div>

          {/* Modality 3 Matrix for 6 data sources */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((tool, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Source 0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {tool.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {tool.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              The exact tools depend on the website and objectives. We use the data to support decisions rather than treating any single tool&apos;s score as the SEO strategy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
