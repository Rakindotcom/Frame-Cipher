'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

const includedItems = [
  {
    num: '01',
    title: 'Strategy & Media Planning',
    body: 'A paid media plan built around your business model, customers, markets, goals, budget, and conversion economics.',
  },
  {
    num: '02',
    title: 'Campaign Management',
    body: 'Campaign setup, structure, targeting, budgeting, optimization, and ongoing account management based on the agreed scope.',
  },
  {
    num: '03',
    title: 'Creative & Testing',
    body: 'Ad concepts, messaging, creative coordination, and structured testing designed around platform context and audience behavior.',
  },
  {
    num: '04',
    title: 'Tracking & Attribution',
    body: 'Conversion measurement configured around the actions that matter to your business, with reporting designed to connect advertising activity to actual outcomes.',
  },
  {
    num: '05',
    title: 'Landing Page Alignment',
    body: 'Review and coordination between the ad, offer, landing page, form, checkout, or other conversion path so post-click performance is not ignored.',
  },
  {
    num: '06',
    title: 'Reporting & Optimization',
    body: 'Regular performance reporting that explains what your advertising produced, what changed, what needs attention, and where the next opportunity lies.',
  },
]

export default function Included() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Get With{' '}
            <span className="italic text-frame-accent">Framecipher.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Every paid advertising engagement is different. The actual scope depends on your platform mix, number of campaigns, creative requirements, tracking needs, landing-page work, and market coverage.
          </p>
        </div>

        {/* 6-Card Deliverables Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedItems.map((item) => (
            <div
              key={item.num}
              className="relative overflow-hidden group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    DELIVERABLE {item.num}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Alignment Note */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-center gap-4">
          <ShieldCheck className="h-6 w-6 text-frame-accent shrink-0" />
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
            We define the final scope after reviewing your account and goals so you pay for work that aligns with your actual paid advertising needs.
          </p>
        </div>
      </div>
    </section>
  )
}
