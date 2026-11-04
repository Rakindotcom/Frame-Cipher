'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, Lock, Eye, Layers, Search, Cpu } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const advantages = [
  {
    num: '01',
    icon: Layers,
    title: 'One In-House Team',
    body: 'Your advertising strategy does not sit in isolation. Framecipher can connect paid advertising with landing pages, website development, creative, analytics, and other digital services through one in-house team. That makes it easier to identify problems that exist outside the ad account itself.',
    proof: 'Copywriters, media buyers & Next.js engineers collaborate in one room.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Audit Before Optimization',
    body: 'We do not assume an existing campaign is broken simply because performance is weak. We first examine the structure, tracking, search traffic, budgets, offers, landing pages, and available performance data before deciding what should change.',
    proof: 'Zero blind edits; every change is documented against historical baselines.',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Conversion Tracking Before Scaling',
    body: 'Scaling without reliable measurement creates more exposure to the same uncertainty. We prioritize measurement so that campaign decisions are based on clearer information about what is producing leads, purchases, calls, or other defined outcomes.',
    proof: 'Enhanced Conversions, GTM server-side tagging & offline CRM imports.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Local & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses targeting both local and international markets. That allows us to consider the differences in search behavior, competition, targeting, commercial expectations, and customer journeys between markets.',
    proof: 'Proven campaigns across Dhaka, US, UK, Australia, Canada, and UAE.',
  },
  {
    num: '05',
    icon: Lock,
    title: 'Transparent Account Ownership',
    body: 'Your Google Ads account remains yours. You retain access to campaigns, spend data, conversion data, and account history throughout the engagement. Our role is to manage and improve the advertising system without placing your business inside a black-box account you cannot access.',
    proof: 'Admin-level ownership granted to you; zero vendor lock-in.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Modality 4 Asymmetrical Editorial Split (5 cols sticky + 7 cols feed) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Sticky Anchor (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Businesses Choose{' '}
              <span className="italic text-frame-accent">Framecipher.</span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-zinc-300">
              The way an account is managed matters as much as the platform, the budget, and the offer. We operate with strict engineering accountability, zero black-box obscurity, and total data transparency.
            </p>

            {/* Permanent Account Ownership Callout Box */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-frame-accent">
                <Eye className="h-4 w-4 text-frame-accent" />
                <span>100% Client Ownership Policy</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Your ad accounts, conversion data, pixel tags, and billing profiles always remain strictly under your company email. If you ever leave, you keep 100% of the historical asset.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Book an Account Walkthrough &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Scrolling Standards Feed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {advantages.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4 transition-colors duration-200 hover:border-white/[0.14]"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Standard {item.num}
                    </span>
                    <Icon className="h-4 w-4 text-frame-accent" />
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>

                  <div className="pt-2">
                    <div className="rounded-lg border border-white/[0.04] bg-[#09090B] p-3 text-xs font-mono text-zinc-400">
                      <span className="text-frame-accent font-semibold">Verification: </span>
                      {item.proof}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
