'use client'

import React from 'react'
import { AlertCircle, ShieldAlert } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const problems = [
  {
    num: '01',
    title: 'Creative Fatigue',
    symptom: 'Ad worked strongly for 2 weeks, then CPA tripled as frequency spiked',
    body: 'An ad can work strongly and then weaken as the audience sees it repeatedly. We monitor creative performance and audience exposure so fatigue is identified before a previously useful asset becomes the sole driver of declining performance.',
    fix: 'Systematic hook rotation, UGC concept refreshes & multi-angle backup assets',
  },
  {
    num: '02',
    title: 'Weak Conversion Signals',
    symptom: 'Meta delivers ads to cheap link-clickers who bounce immediately',
    body: 'Meta cannot optimize effectively toward a business outcome if the account is sending incomplete, duplicated, or poorly configured conversion data. We review event tracking, Pixel implementation, Conversions API where applicable, and the relationship between reported conversions and actual business actions.',
    fix: 'Server-side CAPI integration with event deduplication & High Match Quality',
  },
  {
    num: '03',
    title: 'Rising Cost Per Result',
    symptom: 'Steadily increasing CAC with diminishing marginal returns on spend',
    body: 'A higher cost per lead or purchase can come from several sources. We look at the combination of creative performance, offer, audience, competition, conversion rate, landing page, frequency, and campaign structure rather than assuming the audience alone is responsible.',
    fix: 'Full-funnel diagnosis isolating offer friction, post-click CRO & ad relevance',
  },
  {
    num: '04',
    title: 'Fragmented Campaign Structure',
    symptom: '15 small ad sets stuck in "Learning Limited" burning budget',
    body: 'Too many campaigns, ad sets, and small audiences can divide the available data and budget. We look for unnecessary fragmentation and simplify the account where a more consolidated structure can provide clearer learning and stronger budget allocation.',
    fix: 'Account consolidation into high-liquidity Advantage+ testing & scaling silos',
  },
  {
    num: '05',
    title: 'Weak Offer-to-Creative Fit',
    symptom: 'High impressions, good CTR, but visitors refuse to purchase or submit forms',
    body: 'Sometimes the audience is not the problem. If the creative does not make the offer clear, demonstrate value, answer objections, or give the user a strong reason to act, changing the targeting may not solve the underlying issue. We test the message and offer alongside the audience and campaign structure.',
    fix: 'Value proposition overhaul, objection-handling copy & risk-reversal guarantees',
  },
  {
    num: '06',
    title: 'Tracking & Attribution Gaps',
    symptom: 'Ads Manager reports 50 purchases, but Shopify or CRM only shows 20',
    body: 'Platform reporting can become harder to interpret when website, CRM, Pixel, CAPI, and business data are disconnected. We identify measurement gaps so campaign decisions are based on better, verified information.',
    fix: 'First-party attribution auditing, UTM parameter standardization & CRM sync',
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Common Meta Ads{' '}
            <span className="italic text-frame-accent">Problems We Fix.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Many struggling Meta campaigns are not failing because Facebook or Instagram don&apos;t work. They are failing because of fatigued creative, broken conversion signals, or an overly fragmented account structure.
          </p>
        </div>

        {/* Modality 1 Divided Rows (6 Problems) */}
        <div className="border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y divide-white/[0.08] mb-12">
          {problems.map((problem) => (
            <div
              key={problem.num}
              className="p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-center">
                {/* Column 1: Number & Title (4 cols) */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {problem.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    Symptom: {problem.symptom}
                  </p>
                </div>

                {/* Column 2: Diagnosis Body (5 cols) */}
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {problem.body}
                  </p>
                </div>

                {/* Column 3: Framecipher Engineering Fix (3 cols) */}
                <div className="lg:col-span-3 lg:border-l lg:border-white/[0.08] lg:pl-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent block mb-1">How We Fix It</span>
                  <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                    {problem.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Action Box */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              Not sure why your cost per acquisition is climbing?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Every engagement starts with a comprehensive account audit that analyzes your ad fatigue curves, CAPI match scores, frequency caps, and audience saturation before any budget is spent.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get Your Free Account Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
