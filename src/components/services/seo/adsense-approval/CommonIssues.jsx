'use client'

import React from 'react'

const issues = [
  {
    title: 'Insufficient or Low-Value Content',
    body: 'Google may reject a site when it contains too little substantive content, is still under construction, or does not provide enough useful information for visitors. We identify pages that need deeper explanations, stronger coverage, better organization, or more original value.',
  },
  {
    title: 'Content Quality or Originality Problems',
    body: 'A site can have many pages and still offer too little original value. We look for thin, repetitive, copied, auto-generated, or weakly differentiated content and identify where meaningful improvements are needed. Google states that publishers should provide unique and relevant content that gives users a reason to visit the site.',
  },
  {
    title: 'Policy or Restricted-Content Issues',
    body: 'Some content can create direct AdSense policy problems, while other categories may fall under publisher restrictions. We review relevant content and implementation risks before you submit rather than assuming that every page is automatically monetization-ready. Google notes that policy compliance is the publisher’s responsibility and that policies may change over time.',
  },
  {
    title: 'Navigation & Site Usability Problems',
    body: 'A confusing website can make it difficult for users to find important information. Google specifically lists site navigation issues as a common reason an application may not be approved. We address broken links, poor organization, inaccessible pages, unfinished sections, and other usability problems that make the site harder to understand.',
  },
  {
    title: 'Traffic Source & Invalid-Traffic Risks',
    body: 'AdSense is not simply a content-quality review. Traffic quality also matters. Google warns against artificially generated clicks or impressions, traffic exchanges, paid-to-click schemes, automated traffic, and other practices that can create invalid traffic. We review obvious traffic-source risks and explain what should be changed before or after monetization.',
  },
  {
    title: 'Unsupported Language or Regional Issues',
    body: 'Google maintains a list of languages supported by its publisher products. Bengali is currently among the supported primary languages. We check whether your site’s primary content and language configuration create an eligibility or monetization issue before submission.',
  },
]

export default function CommonIssues() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Diagnosis &amp; Root Causes // Disapproval Fixes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Common Google AdSense{' '}
            <span className="italic text-frame-accent">Disapproval Issues We Fix</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The rejection notice may be generic, but the underlying causes are usually specific and
            fixable once the right issue is identified.
          </p>
        </div>

        {/* 6 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Issue 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
