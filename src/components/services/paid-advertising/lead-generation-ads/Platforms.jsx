'use client'

import React from 'react'
import { Search, Share2, Briefcase, PlusCircle, ArrowUpRight } from 'lucide-react'

const channels = [
  {
    icon: Search,
    platform: 'Google Ads',
    badge: 'High-Intent Demand Capture',
    desc: 'Capturing active commercial search queries when prospects are researching specific solutions, comparing providers, or requesting immediate quotes.',
    capabilities: [
      'High-intent exact and phrase match search campaigns',
      'High-converting mobile-responsive landing pages',
      'Call-only ads and call extensions for immediate phone inquiries',
      'Enhanced Conversions for Leads and Google Data Manager CRM sync',
      'Market eligibility verification for Google Lead Form Assets',
    ],
  },
  {
    icon: Share2,
    platform: 'Meta Ads (Facebook & Instagram)',
    badge: 'Visual Demand Generation & Native Forms',
    desc: 'Engaging prospective buyers in their social feeds with scroll-stopping video hooks, high-utility assessments, and low-friction native Instant Forms.',
    capabilities: [
      'Native in-app Instant Lead Forms with auto-filled fields',
      'Direct Click-to-WhatsApp and Messenger automated lead funnels',
      'Custom audience retargeting based on video and social engagement',
      'Server-side Meta Conversions API (CAPI) lead event tracking',
      'Lookalike audience modeling built from your highest-value customers',
    ],
  },
  {
    icon: Briefcase,
    platform: 'LinkedIn Ads',
    badge: 'B2B & High-Ticket Professional Targeting',
    desc: 'Targeting exact job titles, company seniority, industry sectors, and buying committees with pre-filled LinkedIn Lead Gen Forms.',
    capabilities: [
      'Native LinkedIn Lead Gen Forms achieving 2x higher completion rates',
      'Precise firmographic targeting (job title, function, company headcount)',
      'Account-based marketing (ABM) matched company lists',
      'Direct CRM integration syncing leads to HubSpot and Salesforce',
      'Closed-loop lead-to-revenue pipeline reporting',
    ],
  },
  {
    icon: PlusCircle,
    platform: 'Other Paid Channels (TikTok & Microsoft Ads)',
    badge: 'Selective Channel Expansion',
    desc: 'Deploying secondary channels such as Microsoft Advertising (for desktop business audiences) or TikTok Lead Gen only when they provide a clear, lower-CPA role in the funnel.',
    capabilities: [
      'Microsoft Ads search campaigns with LinkedIn profile targeting overlays',
      'TikTok Instant Forms for younger demographics and trade services',
      'Cross-platform audience suppression preventing duplicated reach',
      'Unified multi-touch attribution across all active advertising networks',
    ],
  },
]

export default function Platforms() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Lead Generation Ads{' '}
            <span className="italic text-frame-accent">by Platform.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Lead generation is a business objective, not an advertising channel. We select and synchronize platforms based on where your buyers search, evaluate, and commit to purchasing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <div
                key={ch.platform}
                className="group rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-medium text-white mb-2 flex items-center justify-between">
                    <span>{ch.platform}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-frame-accent" />
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {ch.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Key Execution Capabilities:
                  </p>
                  {ch.capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0 mt-1.5" />
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
