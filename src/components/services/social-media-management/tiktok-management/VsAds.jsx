'use client'

import React from 'react'
import { Sparkles, Zap, Check, ArrowRight, Layers } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const organic = [
  'Full content strategy',
  'Short-form content creation',
  'Trend research & adaptation',
  'TikTok SEO & bio optimization',
  'Scheduled publishing',
  'Community care & DMs',
  'Performance analysis',
  'Creative hook testing',
  'Organic content optimization',
]

const ads = [
  'Paid campaign strategy',
  'Audience targeting & pixel setup',
  'Direct-response ad creative',
  'Campaign setup & structure',
  'Budget & bid management',
  'A/B variant testing',
  'Conversion tracking & events API',
  'Paid ROAS / CPA optimization',
]

const together = [
  {
    title: 'Organic Content Fuels Paid Creative',
    body: 'Organic testing reveals which hooks, jokes, demonstrations, and angles captivate viewers before ad spend is committed.',
  },
  {
    title: 'Paid Insights Inform Organic Pillars',
    body: 'Paid campaign analytics reveal specific demographics and search intent that shape upcoming organic content series.',
  },
  {
    title: 'Sustained Presence Supports Paid Trust',
    body: 'When prospective buyers click from an ad to your profile, an active, well-maintained organic account validates your credibility.',
  },
]

export default function VsAds() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Channel Architecture · Scope Boundaries
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Organic TikTok vs{' '}
            <span className="italic text-frame-accent">TikTok Ads.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Organic management and paid advertising serve different functions. Keeping the distinction clear helps prevent confusion around scope, reporting, and commercial expectations.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Organic */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Organic Foundation · </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    Organic TikTok Management
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                Organic TikTok management focuses on building, maintaining, and growing the account through creative content and active community interactions:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-200">
                {organic.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-xs text-purple-200/90 leading-relaxed">
              <strong className="text-white">Scope Boundary: </strong>
              Media-buying ad budgets are separate from organic management fees unless specifically stated in an integrated proposal.
            </div>
          </article>

          {/* Card 2: Paid Ads */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Paid Distribution · </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    TikTok Ads Management
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                TikTok Ads Management focuses on paid campaigns, audience targeting, conversion events, and direct advertising objectives:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                {ads.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">Advertising Spend: </strong>
              Direct ad spend is paid directly to TikTok and is separate from agency management retainers.
            </div>
          </article>
        </div>

        {/* Coordination Architecture Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <div className="max-w-3xl space-y-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Harmonized Deployment · </span>
            <h4 className="font-heading text-xl font-medium tracking-tight text-white">
              How Organic and Paid Work Together
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Organic and paid strategies can support each other when planned cohesively under one in-house team without treating organic virality as a prerequisite for paid conversion:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06]">
            {together.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-2">
                  Synergy 0{idx + 1}
                </span>
                <h5 className="font-heading text-sm font-medium uppercase text-white mb-2">
                  {item.title}
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
