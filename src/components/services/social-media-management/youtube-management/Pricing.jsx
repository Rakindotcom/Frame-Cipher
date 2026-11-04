'use client'

import React from 'react'
import { Check, ShieldAlert, Sparkles, Sliders } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const packages = [
  {
    name: 'Standard YouTube Management',
    price: '৳30,000',
    priceNote: 'Per month',
    bestFor: 'Consistent channel management & steady discovery',
    features: [
      'Channel strategy & positioning',
      'Content planning & scripting',
      '2 long-form videos per month',
      'Shorts repurposed from long-form',
      'YouTube SEO & metadata optimization',
      'Title & description optimization',
      '2 custom thumbnail designs per month',
      'Channel branding & optimization',
      'Playlists & end-screen pathways',
      'Basic community management',
      'Monthly analytics & performance reporting',
      'Content repurposing',
      'Basic conversion/CTA strategy',
    ],
    popular: false,
  },
  {
    name: 'Growth YouTube Management',
    price: '৳50,000',
    priceNote: 'Per month',
    bestFor: 'Higher publishing volume & faster growth',
    features: [
      'Channel strategy & positioning',
      'Content planning & scripting',
      '4 long-form videos per month',
      'Dedicated + repurposed Shorts',
      'YouTube SEO & metadata optimization',
      'Title & description optimization',
      '4 custom thumbnail designs per month',
      'Channel branding & optimization',
      'Playlists & end-screen pathways',
      'Active community management',
      'Monthly analytics & performance reporting',
      'Thumbnail & title testing (A/B analysis)',
      'Content repurposing across formats',
      'Comprehensive conversion/CTA strategy',
    ],
    popular: true,
  },
  {
    name: 'Custom / Full-Service',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Complex, enterprise or multi-format channels',
    features: [
      'Channel strategy & positioning',
      'Custom content planning & series development',
      'Custom long-form video volume',
      'Dedicated Shorts production & repurposing',
      'Advanced YouTube SEO & search optimization',
      'Title & description optimization',
      'Custom thumbnail design volume',
      'Full channel branding & optimization',
      'Playlists, end screens & cards architecture',
      'Custom community management & moderation',
      'Advanced weekly/monthly analytics reporting',
      'Continuous thumbnail & title testing',
      'Multi-platform content repurposing',
      'Direct conversion & business funnel integration',
    ],
    popular: false,
  },
]

const matrixRows = [
  { feature: 'Channel Strategy & Positioning', standard: 'Included', growth: 'Included', custom: 'Custom Scope' },
  { feature: 'Content Planning & Ideation', standard: 'Included', growth: 'Included', custom: 'Custom Scope' },
  { feature: 'Long-Form Videos', standard: '2 / month', growth: '4 / month', custom: 'Custom Volume' },
  { feature: 'YouTube Shorts', standard: 'Repurposed', growth: 'Dedicated + Repurposed', custom: 'Custom Strategy' },
  { feature: 'YouTube SEO & Metadata', standard: 'Included', growth: 'Included', custom: 'Advanced' },
  { feature: 'Title & Description Optimization', standard: 'Included', growth: 'Included', custom: 'Included' },
  { feature: 'Thumbnail Design', standard: '2 / month', growth: '4 / month', custom: 'Custom Volume' },
  { feature: 'Channel Branding & Optimization', standard: 'Included', growth: 'Included', custom: 'Included' },
  { feature: 'Playlists & End Screens', standard: 'Included', growth: 'Included', custom: 'Included' },
  { feature: 'Community Management', standard: 'Basic', growth: 'Active', custom: 'Custom Tier' },
  { feature: 'Analytics & Reporting', standard: 'Monthly', growth: 'Monthly', custom: 'Advanced & Custom' },
  { feature: 'Thumbnail / Title Testing', standard: '—', growth: 'Included', custom: 'Continuous' },
  { feature: 'Content Repurposing', standard: 'Included', growth: 'Included', custom: 'Multi-Platform' },
  { feature: 'Conversion / CTA Strategy', standard: 'Basic', growth: 'Comprehensive', custom: 'Full Funnel' },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Transparent Pricing · Retainers
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            YouTube Management{' '}
            <span className="italic text-frame-accent">Pricing &amp; Plans.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our YouTube management packages are structured around content volume, production requirements, optimization, and reporting.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-colors duration-200 ${
                pkg.popular
                  ? 'border-purple-500/40 bg-[#15121C] shadow-2xl shadow-purple-950/20'
                  : 'border-white/[0.08] bg-[#121214] hover:border-purple-500/30'
              }`}
            >
              <div>
                {/* Header row with inline non-clipping badge */}
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Tier 0{index + 1}
                  </span>
                  {pkg.popular && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {pkg.name}
                </h3>

                <div className="my-5 border-y border-white/[0.08] py-4">
                  <div className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {pkg.price}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1 block">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="mb-6 rounded-lg border border-purple-500/20 bg-purple-500/[0.05] p-3 text-xs text-zinc-300">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Best For
                  </span>
                  {pkg.bestFor}
                </div>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-2">
                    Included Capabilities:
                  </span>
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.08] mt-8">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full text-center"
                >
                  Request a YouTube Proposal
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
              Feature Comparison Matrix
            </h3>
            <span className="font-mono text-xs uppercase text-frame-accent">
              Side-by-Side Breakdown
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#16141F] text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <th className="p-4 sm:p-5">Capability / Deliverable</th>
                  <th className="p-4 sm:p-5">Standard</th>
                  <th className="p-4 sm:p-5 text-frame-accent">Growth</th>
                  <th className="p-4 sm:p-5">Custom / Full</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm text-zinc-300">
                {matrixRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-zinc-400">{row.standard}</td>
                    <td className="p-4 sm:p-5 text-frame-accent font-semibold">{row.growth}</td>
                    <td className="p-4 sm:p-5 text-zinc-400">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* One-Time Audit Card & Scope Notice */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* One-time audit card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  One-Time Service
                </span>
                <span className="font-heading text-lg font-bold text-white">৳15,000</span>
              </div>
              <h4 className="font-heading text-base sm:text-lg font-medium text-white">
                YouTube Video SEO &amp; Metadata Audit
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Full metadata, title, and thumbnail review of your existing channel back catalog. Best for channels with existing content that is underperforming its discovery potential.
              </p>
            </div>
            <div>
              <PosterButton
                href="/contact"
                variant="secondary"
                size="md"
                className="w-full text-center"
              >
                Book One-Time Video Audit
              </PosterButton>
            </div>
          </div>

          {/* Pricing scope note */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 border-b border-white/[0.08] pb-3">
                <ShieldAlert className="h-4 w-4 text-frame-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Pricing Scope Notice
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Video volume refers to the agreed monthly production scope. Filming, travel, studio rental, talent, advanced animation, professional voice-over, creators, third-party production expenses, or other specialized requirements may require separate budgeting unless specifically included in your proposal.
              </p>
            </div>
            <div className="text-[11px] font-mono uppercase text-zinc-500">
              Clear upfront proposals · No hidden production fees
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
