'use client'

import React from 'react'
import { Check, Sliders, ShieldAlert, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Standard TikTok Management',
    price: '৳25,000',
    priceNote: 'Per month',
    bestFor: 'Consistent brand presence',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      '8 videos per month',
      'Video editing',
      'Trend research',
      'Basic TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Basic community management',
      'Monthly performance reporting',
      'Content optimization',
    ],
    popular: false,
  },
  {
    name: 'Growth TikTok Management',
    price: '৳40,000',
    priceNote: 'Per month',
    bestFor: 'Faster content testing & growth',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      '16 videos per month',
      'Video editing',
      'Trend research',
      'Advanced TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Active community management',
      'Monthly performance reporting',
      'Content optimization',
      'Creative testing',
    ],
    popular: true,
  },
  {
    name: 'TikTok Management + Ads Coordination',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Organic + paid campaigns',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      'Custom video volume',
      'Video editing',
      'Trend research',
      'Advanced TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Active community management',
      'Advanced performance reporting',
      'Content optimization',
      'Creative testing',
      'Ads coordination',
    ],
    popular: false,
  },
]

const columns = [
  'Standard TikTok Management',
  'Growth TikTok Management',
  'TikTok Management + Ads Coordination',
]

const rows = [
  { label: 'Monthly Investment', values: ['৳25,000/month', '৳40,000/month', 'Custom Quote'] },
  { label: 'TikTok Strategy', values: ['check', 'check', 'check'] },
  { label: 'Content Pillar Planning', values: ['check', 'check', 'check'] },
  { label: 'TikTok Video Production', values: ['8 videos/month', '16 videos/month', 'Custom'] },
  { label: 'Video Editing', values: ['check', 'check', 'check'] },
  { label: 'Trend Research', values: ['check', 'check', 'check'] },
  { label: 'TikTok SEO & Discoverability', values: ['Basic', 'Advanced', 'Advanced'] },
  { label: 'Captions & Hashtag Strategy', values: ['check', 'check', 'check'] },
  { label: 'Publishing & Scheduling', values: ['check', 'check', 'check'] },
  { label: 'Community Management', values: ['Basic', 'Active', 'Active'] },
  { label: 'Performance Reporting', values: ['Monthly', 'Monthly', 'Advanced'] },
  { label: 'Content Optimization', values: ['check', 'check', 'check'] },
  { label: 'Creative Testing', values: ['dash', 'check', 'check'] },
  { label: 'Ads Coordination', values: ['dash', 'dash', 'check'] },
  {
    label: 'Best For',
    values: ['Consistent brand presence', 'Faster content testing & growth', 'Organic + paid campaigns'],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Retainers · Pricing Matrix
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Management{' '}
            <span className="italic text-frame-accent">Pricing &amp; Plans.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher&rsquo;s pricing covers more than video production or posting. Each plan combines strategy, content planning, production, publishing, discoverability, community management, and reporting according to the selected scope.
          </p>
        </div>

        {/* 3 Package Tiers Grid (Non-clipping headers) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 md:p-8 transition-colors ${
                pkg.popular
                  ? 'border-purple-500/50 bg-[#15121c] ring-1 ring-purple-500/30 shadow-2xl shadow-purple-950/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                {/* Header row with non-clipping featured badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Tier 0{index + 1} · </span>
                  {pkg.popular && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-violet-300">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>

                <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-frame-accent">
                  {pkg.price}
                </p>

                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {pkg.priceNote}
                </p>

                <p className="mt-4 text-xs font-normal leading-relaxed text-zinc-300 min-h-[36px]">
                  {pkg.bestFor}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2.5 text-xs font-normal text-zinc-200">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full text-center"
                >
                  {pkg.price === 'Custom Quote' ? 'Request Custom Quote' : 'Select Plan'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURE COMPARISON TABLE */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214]">
          <div className="flex flex-col gap-2 border-b border-white/[0.08] p-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-heading text-lg font-medium tracking-tight text-white sm:text-xl">
              Plan Comparison Matrix
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Standard &nbsp;&rarr;&nbsp; Growth &nbsp;&rarr;&nbsp; Custom
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#18181B]">
                  <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Feature &amp; Deliverable
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="p-4 sm:p-5 text-center font-heading text-xs sm:text-sm font-medium uppercase text-white"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {rows.map((row) => (
                  <tr key={row.label} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-medium text-zinc-200">
                      {row.label}
                    </td>
                    {row.values.map((value, vIdx) => (
                      <td key={vIdx} className="p-4 sm:p-5 text-center text-zinc-400">
                        {value === 'check' ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-frame-accent">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </span>
                        ) : value === 'dash' ? (
                          <span className="text-zinc-600 font-mono">&mdash;</span>
                        ) : (
                          <span className="font-mono text-xs text-zinc-300 font-medium">
                            {value}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            Framecipher&rsquo;s TikTok management plans start at ৳25,000 per month. Growth is ৳40,000 per month, while larger or combined organic and paid programs are customized according to scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Request a Custom TikTok Plan
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
