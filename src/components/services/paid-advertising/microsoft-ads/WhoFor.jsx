'use client'

import React from 'react'
import { Briefcase, ShoppingBag, ShieldCheck, Globe, Search } from 'lucide-react'

const targets = [
  {
    icon: Briefcase,
    title: 'B2B & Enterprise Services',
    desc: 'Unmatched targeting combination of active commercial search queries overlaid with LinkedIn job function, company, and seniority data.',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce & Retail Brands',
    desc: 'Reach high-intent desktop consumers actively comparing products across Bing search results and Microsoft Edge shopping assistants.',
  },
  {
    icon: ShieldCheck,
    title: 'High-Consideration Purchases',
    desc: 'Essential for software, financial instruments, enterprise consulting, and specialized services with longer research and evaluation cycles.',
  },
  {
    icon: Globe,
    title: 'International Export Businesses',
    desc: 'In major tier-1 markets (US, UK, Canada, Australia), Bing commands 15% to 25% of desktop search market share with high consumer purchasing power.',
  },
  {
    icon: Search,
    title: 'Brands Already Running Google Ads',
    desc: 'Capture incremental search volume and additional high-margin conversions that Google Ads accounts have already maxed out.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is Microsoft Ads{' '}
            <span className="italic text-frame-accent">Management For?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Microsoft Ads makes measurable commercial sense for businesses with validated search intent and an audience that values desktop buying power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {targets.map((t, idx) => {
            const Icon = t.icon
            return (
              <div
                key={t.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
