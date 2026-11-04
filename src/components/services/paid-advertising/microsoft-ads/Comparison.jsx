'use client'

import React from 'react'

const comparisons = [
  {
    factor: 'Search Ecosystem',
    microsoft: 'Bing, Yahoo, DuckDuckGo, and syndicated search partner distribution',
    google: 'Google Search, Google Maps, and Google Search Network partners',
  },
  {
    factor: 'Search Volume',
    microsoft: 'Concentrated desktop search share (often 15%–25% in US/UK/CA/AU)',
    google: 'Dominant global search query volume across desktop and mobile',
  },
  {
    factor: 'LinkedIn Profile Targeting',
    microsoft: 'Directly overlays company, industry, job function, and seniority onto search',
    google: 'No direct native LinkedIn professional profile targeting capability',
  },
  {
    factor: 'Shopping Ads',
    microsoft: 'Available with Microsoft Merchant Center and Edge browser shopping hub',
    google: 'Available via Google Merchant Center and Performance Max campaigns',
  },
  {
    factor: 'Audience Advertising',
    microsoft: 'MSN, Microsoft Edge, Outlook, and native syndicated partner inventory',
    google: 'Google Display Network (GDN), YouTube, Discover, and Gmail placements',
  },
  {
    factor: 'Automation Solutions',
    microsoft: 'Performance Max and AI Max for Search (search-term matching & URL expansion)',
    google: 'Performance Max, Broad Match Smart Bidding, and Demand Gen',
  },
  {
    factor: 'Average Click Cost (CPC)',
    microsoft: 'Typically 20% to 35% lower CPCs with higher desktop purchasing power',
    google: 'Higher CPCs driven by broader commercial auction competition',
  },
  {
    factor: 'Strategic Role',
    microsoft: 'High-margin incremental demand capture and targeted B2B acquisition',
    google: 'Foundational baseline paid search and comprehensive market coverage',
  },
]

export default function Comparison() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Microsoft Ads vs.{' '}
            <span className="italic text-frame-accent">Google Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Microsoft Ads and Google Ads can complement each other effectively, but their search audiences, auction economics, and professional targeting capabilities differ substantially.
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
                  Microsoft Ads
                </th>
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-300">
                  Google Ads
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
                    {c.microsoft}
                  </td>
                  <td className="p-4 sm:p-5 text-zinc-400 leading-relaxed">
                    {c.google}
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
