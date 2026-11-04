'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const comparisonRows = [
  {
    organic: 'Covers your unpaid presence',
    paid: 'Uses an advertising budget to reach selected audiences',
  },
  {
    organic: 'Includes content strategy, creation, publishing, and community engagement',
    paid: 'Supports specific campaign objectives such as leads, sales, or traffic',
  },
  {
    organic: 'Built around profile management and reporting',
    paid: 'Built around targeting, budgets, and campaign optimization',
  },
  {
    organic: 'Results build gradually through consistent execution',
    paid: 'Can generate reach soon after a campaign launches',
  },
  {
    organic: 'Keeps working while the budget stays constant',
    paid: 'Requires ongoing spend to maintain distribution',
  },
  {
    organic: 'Develops relationships with an existing audience',
    paid: 'Reaches new audiences who have no prior relationship with you',
  },
]

const reasons = [
  {
    title: 'A managed profile builds trust for paid traffic',
    body: 'When someone discovers your business through an ad and then checks your profile, an active, useful presence gives them information and trust signals they would not get from the ad alone.',
  },
  {
    title: 'Paid campaigns distribute what matters faster',
    body: 'Organic publishing builds reach over time. Paid social can push an important offer, launch, or campaign to a targeted audience without waiting for organic distribution to catch up.',
  },
  {
    title: 'They support different parts of the same funnel',
    body: 'Organic builds the presence that paid traffic lands on, while paid creates the demand and reach that the organic presence then has to convert. Together they reinforce each other rather than competing for the same budget.',
  },
]

export default function VsPaid() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               STRATEGIC COMPARISON 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Organic Social Media Management{' '}
            <span className="italic text-[#A855F7]">vs Paid Advertising.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Social media management and paid social advertising support different parts of your marketing system.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] mb-12">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">
              Comparison of organic social media management and paid social advertising
            </caption>
            <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
              <tr>
                <th scope="col" className="w-1/2 border-r border-white/[0.08] p-4 sm:p-5">
                  Organic Social (Unpaid Presence)
                </th>
                <th scope="col" className="w-1/2 p-4 sm:p-5 text-[#A855F7]">
                  Paid Social (Targeted Media Spend)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-zinc-300">
              {comparisonRows.map((row, rIdx) => (
                <tr key={rIdx} className="align-top transition-colors hover:bg-white/[0.02]">
                  <td className="border-r border-white/[0.08] p-4 sm:p-5 font-normal text-zinc-200">
                    {row.organic}
                  </td>
                  <td className="p-4 sm:p-5 font-normal text-zinc-300">
                    {row.paid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 Detail Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Organic Social
            </span>
            <p className="text-sm font-normal leading-relaxed text-zinc-300">
              Covers your unpaid presence: content strategy, content creation, publishing, community engagement, profile management, and reporting. The goal is to build a consistent presence and develop relationships with your audience over time.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Paid Social
              </span>
              <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-300">
                Uses advertising budgets to reach selected audiences and support specific campaign objectives such as lead generation, ecommerce sales, traffic, remarketing, or campaign promotion. Framecipher provides paid advertising separately through our broader Paid Advertising Services.
              </p>
            </div>
            <Link
              href="/services/paid-advertising"
              className="inline-flex items-center gap-2 pt-3 font-mono text-xs uppercase tracking-wider text-[#A855F7] hover:text-white transition-colors"
            >
              <span>Explore Paid Advertising Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Why Businesses May Need Both Header & Cards */}
        <div className="border-t border-white/[0.08] pt-14">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Unified Marketing System
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-medium text-white">
              Why Businesses May Need Both
            </h3>
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              Organic and paid social can support each other rather than competing for the same budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                  Reason 0{index + 1}
                </span>
                <h4 className="font-heading text-lg font-medium text-white leading-snug">
                  {reason.title}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-sm text-zinc-300 font-normal leading-relaxed">
            The right mix depends on your business goals, audience, budget, and customer journey.
          </div>
        </div>
      </div>
    </section>
  )
}
