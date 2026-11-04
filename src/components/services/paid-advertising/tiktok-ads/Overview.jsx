'use client'

import React from 'react'
import { Sparkles, Video, Flame, ShieldCheck, Activity, Target } from 'lucide-react'

const pillars = [
  {
    icon: Video,
    title: 'TikTok-Native Creative Testing',
    desc: 'Scripting and producing short-form video variations with high-converting hooks, problem-solution arcs, and organic platform pacing.',
  },
  {
    icon: Flame,
    title: 'Spark Ads & Creator Amplification',
    desc: 'Leveraging authentic creator content and organic posts with full Spark code authorization to retain native social proof and comment threads.',
  },
  {
    icon: Activity,
    title: 'Pixel & Server-Side Events API',
    desc: 'Dual-layer tracking implementation ensuring complete conversion signal capture, robust event deduplication, and CRM attribution.',
  },
  {
    icon: Target,
    title: 'Smart+ & Manual Hybrid Bidding',
    desc: 'Evaluating automated Smart+ campaign workflows alongside manual bid strategies to scale what the commercial data actually validates.',
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
              TikTok Advertising Built Around Creative, Data, and{' '}
              <span className="italic text-frame-accent">Business Outcomes.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                TikTok is a creative-led advertising platform, but creativity alone does not make a campaign successful.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                The right campaign needs a clear objective, suitable audience strategy, strong creative variations, reliable conversion tracking, and enough testing to identify what actually works.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                TikTok's current advertising ecosystem supports both manual campaign control and automated Smart+ workflows, allowing advertisers to choose the level of automation that fits their campaign and account.
              </p>
              <p className="text-xs sm:text-sm font-mono text-zinc-300">
                <span className="text-frame-accent font-bold mr-1.5">✓</span> Framecipher brings these elements together in one unified management service—connecting native video production, Spark Ads, audience signals, and server-side measurement around measurable revenue and pipeline growth.
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
