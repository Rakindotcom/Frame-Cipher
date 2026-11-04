'use client'

import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const pitfalls = [
  {
    num: '01',
    title: 'Volume Without Qualification Floods Sales Reps',
    desc: 'Optimizing purely for the lowest cost-per-lead (CPL) produces vanity volume. Unfiltered single-click forms attract students, unqualified consumers, and competitors, burying sales reps in dead-end calls.',
    consequences: [
      'Sales reps wasting hours calling uninterested, low-budget contacts',
      'Declining morale as lead contact and qualification rates plummet',
      'Algorithms continuously bidding on low-quality leads because they are cheap',
    ],
  },
  {
    num: '02',
    title: 'Weak or Gimmicky Lead Magnets Attract Freebie Seekers',
    desc: 'Promoting broad generic incentives (e.g. "Win an iPad" or fluffy 3-page checklists) captures email addresses interested in the giveaway rather than your actual commercial service.',
    consequences: [
      'Inquiries who have zero commercial intention or budget to hire you',
      'Inflated subscriber counts that produce near-zero pipeline revenue',
      'Disconnect between the lead magnet topic and your core business offer',
    ],
  },
  {
    num: '03',
    title: 'The Wrong Lead Destination Introduces Severe Friction',
    desc: 'Forcing mobile social users to load slow 8-field desktop landing pages causes immediate drop-off. Conversely, using native forms when high-intent technical details are needed attracts superficial inquiries.',
    consequences: [
      'High bounce rates on landing pages that fail mobile speed standards',
      'Low data completeness when forms lack progressive qualification logic',
      'Mismatched contact channels (e.g. email forms when buyers expect instant WhatsApp)',
    ],
  },
  {
    num: '04',
    title: 'Slow Lead Routing Allows Fresh Commercial Demand to Go Cold',
    desc: 'Leads left sitting in an email inbox or manual Google Sheet for 4+ hours experience a 400%+ drop in contact rates. High-intent buyers quickly contact your competitors if you delay follow-up.',
    consequences: [
      'Lost deals because competitors reached the prospect first',
      'Prospects forgetting they submitted an inquiry within 24 hours',
      'Wasted advertising spend on leads that are uncontactable by the time sales calls',
    ],
  },
  {
    num: '05',
    title: 'Zero CRM Feedback Starves Platform Bidding Algorithms',
    desc: 'If Google, Meta, or LinkedIn only observe the initial form submission, smart bidding algorithms optimize for whoever fills forms easiest—not who actually signs high-ticket contracts.',
    consequences: [
      'Ad platforms unable to differentiate a spam submission from a $50k deal',
      'Inability to calculate true Customer Acquisition Cost (CAC) by campaign',
      'Bidding budgets moving toward low-quality audiences that convert cheaply',
    ],
  },
  {
    num: '06',
    title: 'Defaulting to a Single Familiar Advertising Platform',
    desc: 'Assuming one channel fits every stage of buyer research restricts growth. B2B buyers frequently need Google Search intent combined with LinkedIn credibility and Meta retargeting.',
    consequences: [
      'Over-relying on saturated channels while ignoring where buyers actually evaluate',
      'Failing to capture high-intent search demand during the active buying moment',
      'Inconsistent multi-touch visibility across the B2B buying committee',
    ],
  },
]

export default function WhyUnderperform() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Lead Generation Ads{' '}
            <span className="italic text-frame-accent">Underperform.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Most lead campaigns optimize around the easiest metric to inflate: form submission counts. That creates an illusion of performance while concealing deep conversion friction and qualification failures deeper down the sales funnel.
          </p>
        </div>

        <div className="space-y-4">
          {pitfalls.map((pitfall) => (
            <div
              key={pitfall.num}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14]"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    {pitfall.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {pitfall.desc}
                  </p>
                </div>

                <div className="lg:col-span-7 rounded-lg border border-white/[0.06] bg-black/40 p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
                    Downstream Impact on Sales Pipeline:
                  </p>
                  <div className="space-y-2.5">
                    {pitfall.consequences.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
