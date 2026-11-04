'use client'

import React from 'react'

const comparisons = [
  {
    factor: 'Creative Environment',
    tiktok: 'Fast-paced, sound-on vertical video with high visual hook priority',
    meta: 'Broad social and visual ecosystem spanning feed, stories, and reels',
  },
  {
    factor: 'Creative Testing',
    tiktok: 'Strong emphasis on rapid native short-form video iterations',
    meta: 'Broad mix of static images, carousels, videos, and catalog assets',
  },
  {
    factor: 'Creator Content',
    tiktok: 'Unmatched Spark Ads capability amplifying authentic organic posts',
    meta: 'Robust Partnership Ads and creator collaboration tools',
  },
  {
    factor: 'Audience Strategy',
    tiktok: 'Broad delivery, video engagement custom audiences, and Smart+',
    meta: 'Mature Advantage+ targeting, deep lookalike modeling, and pixel data',
  },
  {
    factor: 'Ecommerce Integration',
    tiktok: 'Direct TikTok Shop (in supported markets) and Smart+ Catalog Ads',
    meta: 'Advantage+ Shopping Campaigns (ASC) and highly mature checkout',
  },
  {
    factor: 'Search Intent',
    tiktok: 'Growing search intent, primarily visual and discovery-oriented',
    meta: 'Primarily social discovery and remarketing-focused',
  },
  {
    factor: 'Optimal Fit',
    tiktok: 'High-energy discovery, rapid product proof, and creator-led commerce',
    meta: 'Evergreen acquisition, full-funnel retargeting, and scalable conversion',
  },
]

export default function Comparison() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Ads vs.{' '}
            <span className="italic text-frame-accent">Meta Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            TikTok and Meta both support paid social acquisition, but their creative formats and delivery mechanics differ significantly. We help you choose the right mix.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Strategic Factor
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent">
                  TikTok Ads
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-300">
                  Meta Ads
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {comparisons.map((c, idx) => (
                <tr key={idx} className="hover:bg-[#18181B]/50 transition-colors">
                  <td className="p-4 sm:p-5 font-heading text-white font-medium whitespace-nowrap">
                    {c.factor}
                  </td>
                  <td className="p-4 sm:p-5 text-zinc-300 leading-relaxed">
                    {c.tiktok}
                  </td>
                  <td className="p-4 sm:p-5 text-zinc-400 leading-relaxed">
                    {c.meta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
