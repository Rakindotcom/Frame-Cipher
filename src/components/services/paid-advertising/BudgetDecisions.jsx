'use client'

import React from 'react'
import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'
import { AutoLinks } from '../../seo/AutoLinks'

const decisionAreas = [
  {
    num: '01',
    title: 'Search & High-Intent Demand',
    body: 'Search advertising is useful when potential customers already express demand through relevant queries. This can make search particularly valuable for services, products, urgent needs, local demand, and other categories where people actively look for a solution.',
    note: 'The key question is not simply how many searches exist. It is whether those searches have enough commercial intent to justify the cost of acquiring the customer.',
  },
  {
    num: '02',
    title: 'Social & Discovery',
    body: 'Social platforms can reach audiences before they actively search for a solution. That makes creative, offer, audience segmentation, and message-market fit particularly important.',
    note: 'We consider social advertising when the product, offer, visual assets, audience behavior, and customer economics support demand generation or conversion through social environments.',
  },
  {
    num: '03',
    title: 'B2B & Professional Audiences',
    body: 'B2B acquisition can involve multiple decision-makers, longer sales cycles, higher customer values, and greater consideration before purchase. Paid strategy therefore needs to account for the actual buying process rather than optimizing only for low-cost traffic.',
    note: 'LinkedIn and other channels can be combined with search, remarketing, content, landing pages, and lead-nurturing activity where appropriate.',
  },
  {
    num: '04',
    title: 'Ecommerce & Marketplace Demand',
    body: 'Ecommerce campaigns need to connect advertising with product-level economics. We consider factors such as product margin, average order value, purchase frequency, catalog size, shopping intent, product feed quality, conversion rate, customer acquisition cost, and repeat purchase potential.',
    note: 'A campaign can generate sales and still be commercially weak if the acquisition cost does not work with the underlying economics.',
  },
  {
    num: '05',
    title: 'Emerging AI Advertising Channels',
    body: 'New advertising environments can create opportunities before they become as crowded as established channels. We monitor emerging AI advertising options and assess them based on actual availability, audience relevance, campaign maturity, measurement options, and fit with your business.',
    note: 'We do not recommend an emerging channel simply because it is new.',
  },
]

export default function BudgetDecisions() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Decide Where Your{' '}
            <span className="italic text-frame-accent">Ad Budget Goes.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            There is no universal platform mix that works for every business. We evaluate your customers, offer, sales process, geography, competition, budget, conversion economics, and available data before deciding where paid media should be invested.
          </p>
        </div>

        {/* 5-Area Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decisionAreas.map((area) => (
            <div
              key={area.num}
              className="relative overflow-hidden group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    DECISION {area.num}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  <AutoLinks currentPath="/services/paid-advertising" allowed={["/services/website-design-development/landing-pages"]}>
                    {area.body}
                  </AutoLinks>
                </p>
              </div>

              {area.note && (
                <div className="pt-4 mt-6 border-t border-white/[0.06]">
                  <div className="rounded-xl border border-white/[0.08] bg-purple-500/[0.03] p-3 text-[11px] leading-relaxed text-zinc-400 font-mono">
                    <span className="text-frame-accent font-semibold block mb-0.5">EVALUATION CRITERIA:</span>
                    {area.note}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Interactive Calculator Callout Card as 6th Tile */}
          <div className="relative overflow-hidden group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs font-semibold text-frame-accent">
                  MEDIA SCIENCE TOOL
                </span>
                <span className="flex h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
              </div>

              <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                Simulate Your Ad Spend, Break-Even ROAS &amp; CPA
              </h3>

              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Before committing marketing capital, run our full-funnel budget simulator. Model Meta, Google Ads Quality Scores, TikTok video retention (VVR), and conversational AI search economics tailored to your industry and unit margins.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <Link
                href="/calculators"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-purple-500/20 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-purple-200 transition-colors hover:bg-purple-500/30"
              >
                <span>Launch Ads Calculator</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
