'use client'

import React from 'react'

const reasons = [
  {
    title: 'Technical & Indexing Problems',
    body: 'Search engines need to access, render, understand, and index your important pages. Crawl issues, incorrect canonical tags, broken redirects, blocked resources, duplicate URLs, rendering problems, or poor site architecture can limit visibility.',
  },
  {
    title: 'Search Intent Mismatch',
    body: 'A page can target the right keyword but still fail to satisfy the reason behind the search. For example, an informational query may require an educational resource while a commercial query may require a detailed service or product page.',
  },
  {
    title: 'Weak or Thin Content',
    body: 'Pages with limited useful information may struggle when competing against resources that address the topic more completely. The solution is not simply adding more words. The content needs to answer the query clearly, cover relevant subtopics, and provide a useful experience.',
  },
  {
    title: 'Poor Internal Linking',
    body: 'Important pages need to be discoverable and connected within the website. A weak internal-link structure can make it harder for search engines and users to understand which pages are important and how different topics relate to one another.',
  },
  {
    title: 'Weak Authority & Relevant Links',
    body: 'Competitive searches often require stronger authority signals. Relevant, trustworthy references from other websites can help establish the credibility and importance of a page. Quality matters more than simply increasing backlink volume.',
  },
  {
    title: 'Stronger Competition in the SERPs',
    body: 'Your competitors may have stronger content, better site architecture, greater authority, stronger brand signals, or years of accumulated search visibility. A useful SEO strategy identifies those differences instead of assuming that changing a few keywords will solve the problem.',
  },
]

export default function WhyNotRanking() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Audit &amp; Diagnostics // Common Limitations
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Is Your Website{' '}
            <span className="italic text-frame-accent">Not Ranking?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A website can have good products or services and still struggle to gain organic visibility. The cause is rarely just one missing keyword.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
            >
              <div>
                <span className="font-mono text-3xl sm:text-4xl font-light text-zinc-600 group-hover:text-frame-accent transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
