'use client'

import React from 'react'
import { Check } from 'lucide-react'

const challenges = [
  {
    title: 'Wrong Country or Language Version Ranking',
    body: 'A search engine may surface a different regional or language version than the one intended for a particular audience. We review:',
    points: [
      'Hreflang',
      'Canonicals',
      'Internal links',
      'URL structure',
      'Content localization',
      'Language signals',
      'Regional relevance',
      'Indexation',
    ],
    note: 'We then align the relevant signals so each version has a clearer purpose.',
  },
  {
    title: 'Hreflang & Canonical Conflicts',
    body: 'Hreflang and canonical signals serve different purposes, so they need to work together correctly. We review whether regional pages have consistent relationships across:',
    points: [
      'Canonical declarations',
      'Hreflang annotations',
      'Redirects',
      'Indexation',
      'Regional URLs',
    ],
    note: 'The aim is to reduce conflicting signals across international page sets and identify technical inconsistencies before they affect a larger portion of the site.',
  },
  {
    title: 'Duplicate or Overlapping Regional Pages',
    body: 'Similar regional pages are not automatically a problem. The greater risk is creating pages with little meaningful regional value while using inconsistent targeting signals. We evaluate:',
    points: [
      'Content similarity',
      'Search intent',
      'Regional relevance',
      'Keyword targeting',
      'Canonicals',
      'Hreflang',
      'Internal links',
      'Indexation',
    ],
    note: 'Where appropriate, we differentiate, consolidate, improve, or restructure pages instead of creating more URLs without a clear purpose.',
  },
  {
    title: 'Failed International Migrations',
    body: 'International migrations can affect rankings, indexation, redirects, internal links, and regional targeting at the same time. We review:',
    points: [
      'URL mapping',
      'Redirects',
      'Canonicals',
      'Hreflang',
      'Sitemaps',
      'Internal links',
      'Indexation',
      'Existing authority',
    ],
    note: 'The objective is to identify migration risks before launch and monitor the transition after deployment.',
  },
  {
    title: 'Weak Market Localization',
    body: 'A translated page may still fail to match how people search in the target market. We review:',
    points: [
      'Local terminology',
      'Search intent',
      'Page messaging',
      'Content depth',
      'Currency',
      'Units',
      'Calls to action',
      'Trust elements',
      'Competitive positioning',
    ],
    note: 'The objective is useful localization that serves the audience and supports the search strategy.',
  },
  {
    title: 'Limited Country-Level Authority',
    body: "A website can have strong overall authority while remaining less competitive within a specific market. We compare the site's market-level competitive position with relevant competitors and identify opportunities involving:",
    points: [
      'Local links',
      'Industry publications',
      'Regional resources',
      'Digital PR',
      'Partnerships',
      'Market-specific outreach',
      'Content promotion',
    ],
    note: 'The strategy focuses on building relevance and authority where it can support the business’s market priorities.',
  },
]

export default function Challenges() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Risk Mitigation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            International SEO{' '}
            <span className="italic text-frame-accent">Challenges We Solve</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO problems often appear as a website expands into more countries and languages. We focus on the issues that can prevent regional pages from being understood, indexed, competitive, or shown to the appropriate audience.
          </p>
        </div>

        {/* 6 Challenges Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Issue // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {challenge.title}
                </h3>
                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                  {challenge.body}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                  {challenge.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {challenge.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs text-zinc-300">
                    <p className="leading-relaxed">{challenge.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
