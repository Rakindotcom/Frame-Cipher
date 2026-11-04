'use client'

import React from 'react'
import {
  Users,
  ShieldCheck,
  Repeat,
  Filter,
  Globe2,
  Lock,
  Compass,
} from 'lucide-react'

const reasons = [
  {
    icon: Filter,
    title: 'Segmented Audience Architecture',
    desc: 'Audiences structured around behavioral intent, visit depth, and recency rather than one massive, generic 30-day visitor pool.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-Aware Signal Engineering',
    desc: 'Dual browser pixel and server-side CAPI tracking respecting Consent Mode v2, safeguarding audience durability across privacy shifts.',
  },
  {
    icon: Repeat,
    title: 'Sequential Narrative Messaging',
    desc: 'Dynamic multi-stage creative sequences matching message tone, social proof, and offers to where prospects stand in their decision journey.',
  },
  {
    icon: Users,
    title: 'Strict Suppression & Exclusion Logic',
    desc: 'Automated exclusion rules ensuring purchasers and converted leads are instantly removed from prospecting and pre-purchase campaigns.',
  },
  {
    icon: Globe2,
    title: 'Cross-Platform Unified Alignment',
    desc: 'Harmonizing remarketing strategy across Google, Meta, TikTok, Pinterest, LinkedIn, and Amazon while preserving platform-native ad styles.',
  },
  {
    icon: Compass,
    title: '100% Dedicated In-House Team',
    desc: 'Strategy, audience architecture, server-side tracking, creative design, and reporting are handled through one expert in-house team in Dhaka.',
  },
  {
    icon: Lock,
    title: 'Client-Owned Accounts & Assets',
    desc: 'Your advertising accounts, pixel data, CRM audience lists, and conversion histories remain 100% under your direct administrative ownership.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Get With{' '}
            <span className="italic text-frame-accent">Framecipher.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We replace generic, looped remarketing with deliberate behavioral segmentation, frequency controls, and resilient server-side tracking infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {r.desc}
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
