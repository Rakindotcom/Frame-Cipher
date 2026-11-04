'use client'

import React from 'react'
import { Server, Cpu, Database, ShieldAlert, CheckCircle2 } from 'lucide-react'

const components = [
  {
    icon: Cpu,
    title: 'Platform Pixels & Browser Tags',
    desc: 'Auditing and hardening client-side tracking tags across Google Ads, Meta Pixel, TikTok Pixel, Pinterest Tag, and LinkedIn Insight Tag.',
    items: [
      'Standardized event taxonomy (ViewContent, AddToCart, InitiateCheckout, Lead, Purchase)',
      'Custom parameter extraction (product IDs, cart value, lead category)',
      'Cross-domain tracking verification across checkout gateways',
      'Event payload validation and trigger condition QA',
    ],
  },
  {
    icon: Server,
    title: 'Server-Side Conversions API (CAPI)',
    desc: 'Bypassing ad-blocker suppression and browser cookie expiration by transmitting validated conversion events directly from server to ad platform.',
    items: [
      'Meta Conversions API & TikTok Events API implementation',
      'Server-to-browser event deduplication via unique event_id tokens',
      'Enhanced Event Quality Match (EMQ) scoring with hashed user parameters',
      'Resilient signal preservation regardless of browser tracking prevention',
    ],
  },
  {
    icon: Database,
    title: 'First-Party CRM Data Integration',
    desc: 'Securely synchronizing your customer database and sales pipeline with advertising platforms for precision offline and high-intent targeting.',
    items: [
      'Customer list hashing and automated CRM synchronization',
      'Offline conversion tracking tying ad clicks to completed sales contracts',
      'Lead status mapping (MQL, SQL, Opportunity, Closed Won)',
      'Consent-compliant customer matching protocols',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Audience Suppression & Deduplication',
    desc: 'Configuring negative audience exclusions to ensure converted users are instantly removed from prospecting and pre-purchase remarketing.',
    items: [
      'Instant exclusion of recent purchasers (last 7, 30, 90 days)',
      'Exclusion of converted leads from ongoing lead-gen campaigns',
      'Suppression rules preventing cross-campaign audience overlap',
      'Automated audience migration as user behavior advances',
    ],
  },
]

export default function Tracking() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Tracking Infrastructure for{' '}
            <span className="italic text-frame-accent">Modern Remarketing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Flawless remarketing requires flawless audience data. Before spending a single ad dollar, we verify and harden the data infrastructure that powers audience creation, suppression, and attribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {c.desc}
                </p>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {c.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
