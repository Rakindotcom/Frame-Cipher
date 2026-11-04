'use client'

import React from 'react'
import { Search, Briefcase, ShoppingBag, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Search,
    title: 'Microsoft Search Network',
    desc: 'Capture commercial search queries across Bing, Yahoo, DuckDuckGo, and partner syndication networks with lower auction CPCs.',
  },
  {
    icon: Briefcase,
    title: 'LinkedIn Profile Targeting',
    desc: 'Exclusively overlay professional B2B attributes—company, industry, job function, and seniority levels—directly onto search queries.',
  },
  {
    icon: ShoppingBag,
    title: 'Microsoft Shopping & Retail',
    desc: 'Connect product feeds with visual merchant catalog placements across Bing search results and Microsoft Edge shopping hubs.',
  },
  {
    icon: Sparkles,
    title: 'Performance Max & AI Max',
    desc: 'Deploy AI-powered search-term expansion, text customization, and final URL optimization tailored to your margin thresholds.',
  },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* SoftWebGrove 2-Column Master Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Strategic Thesis & Context (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              What Makes Microsoft Ads Different From{' '}
              <span className="italic text-frame-accent">Google Ads?</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Microsoft Ads can complement Google Ads, but the two platforms should not be treated as identical.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                Microsoft Advertising combines search inventory with audience, retail, display, and automated campaign solutions. Its search ecosystem includes Bing as well as partner distribution such as Yahoo and DuckDuckGo.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                Its broader advertising environment also reaches high-income desktop users across native Microsoft properties such as MSN, Outlook, and Microsoft Edge.
              </p>
              <p className="text-xs sm:text-sm font-mono text-zinc-300">
                <span className="text-frame-accent font-bold mr-1.5">✓</span> Framecipher builds Microsoft advertising around deliberate channel mechanics—adapting bidding, search-term themes, and native LinkedIn professional targeting to generate incremental, lower-CPA customer acquisition.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Architecture Alignment Vectors (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-medium text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
