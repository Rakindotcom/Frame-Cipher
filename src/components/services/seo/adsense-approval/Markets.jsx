'use client'

import React from 'react'

const marketBlocks = [
  {
    title: 'Google AdSense Support for Bangladeshi Publishers',
    body: 'We help Bangladesh-based bloggers, publishers, niche website owners, and businesses prepare their websites for AdSense review.',
    closing:
      'For Bangladeshi websites, we assess the actual site rather than applying a generic “Bangladesh approval” formula.',
  },
  {
    title: 'International Publishers & Website Owners',
    body: 'Our AdSense approval support is also available to website owners serving audiences in markets such as the US, UK, Australia, Canada, and UAE.',
    closing:
      'We review the website, content, language, traffic sources, and applicable policy considerations based on the actual project rather than assuming every market follows the same publishing model.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Geographic Reach // Publisher Audiences</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AdSense preparation should reflect the market the website actually serves. We review sites
            for Bangladeshi and international publishers rather than applying a single approval
            formula everywhere.
          </p>
        </div>

        {/* 2 Market Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Market 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              <div className="mt-6 border-l-2 border-frame-accent bg-[#09090B] p-4 text-xs sm:text-sm leading-relaxed text-zinc-400 rounded-r-md">
                {item.closing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
