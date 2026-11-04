'use client'

import React from 'react'

const scopeRows = [
  ['SEO Audit', 'Technical, on-page, content, backlink, competitor, and visibility analysis'],
  ['Keyword Strategy', 'Keyword research, search-intent analysis, keyword mapping'],
  ['Technical SEO', 'Crawl, indexation, redirects, canonicalization, architecture, performance, schema'],
  ['On-Page SEO', 'Titles, headings, content, URLs, internal links, page optimization'],
  ['Content SEO', 'Content briefs, new pages, optimization, refreshes, topic planning'],
  ['Local SEO', 'Google Business Profile, local pages, citations, reviews, local keyword strategy'],
  ['Ecommerce SEO', 'Product and category optimization, filters, structured data, internal linking'],
  ['International SEO', 'Country targeting, localization, architecture, hreflang where applicable'],
  ['Off-Page SEO', 'Outreach, relevant link acquisition, citations, authority-building activities'],
  ['AI Search SEO', 'AEO/GEO-focused content, entity clarity, structured information'],
  ['Reporting', 'Performance tracking, completed work, findings, priorities, recommendations'],
]

export default function Included() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Scope &amp; Deliverables // Full Architectural Coverage
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What&apos;s Included in Our{' '}
            <span className="italic text-frame-accent">SEO Services.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Every SEO campaign is different. The actual scope depends on your website, market, competition, business goals, technical environment, and available resources.
          </p>
        </div>

        {/* Architectural Ledger Table */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="p-5 border-r border-white/[0.08] w-1/3">SEO Discipline</th>
                  <th className="p-5">Typical Deliverables &amp; Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-zinc-300">
                {scopeRows.map((row, rIdx) => (
                  <tr key={rIdx} className="align-top transition-colors hover:bg-white/[0.02]">
                    <td className="p-5 border-r border-white/[0.08] font-medium text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                      <span>{row[0]}</span>
                    </td>
                    <td className="p-5 font-normal leading-relaxed text-zinc-300">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note Callout */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            We define the final scope after reviewing the website so you pay for work that aligns with your actual SEO needs.
          </p>
        </div>
      </div>
    </section>
  )
}
