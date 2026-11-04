'use client'

import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const pitfalls = [
  {
    num: '01',
    title: 'Generic Audiences Create Generic Messaging',
    desc: 'Lumping all website traffic into one single 30-day "All Visitors" list is the root cause of remarketing failure. A visitor who bounced in 4 seconds has completely different intent than someone who spent 5 minutes reading your pricing tiers or examining a case study.',
    consequences: [
      'First-time researchers receiving aggressive discount pushes prematurely',
      'High-intent cart abandoners receiving generic brand awareness slogans',
      'Leads already talking to your sales reps receiving cold promotional offers',
    ],
  },
  {
    num: '02',
    title: 'Ignoring That Timing Fundamentally Alters Buyer Intent',
    desc: 'Someone who visited your product page 24 hours ago is in an active evaluation window. Someone who visited 75 days ago has likely either solved their problem or completely forgotten your brand. Default 30-day windows fail to reflect genuine customer recency.',
    consequences: [
      'Under-spending on high-intent prospects within the critical 48-hour decision window',
      'Over-spending on cold 60-day lists that produce negligible return',
      'Failing to adjust creative tone from urgency to re-discovery as time elapses',
    ],
  },
  {
    num: '03',
    title: 'Treating Past Buyers Like Brand-New Prospects',
    desc: 'Customers who have already completed a purchase should almost never see the initial acquisition campaign again. Showing new-customer welcome discounts to someone who just paid full price destroys trust and wastes precious advertising dollars.',
    consequences: [
      'Alienating loyal customers with un-segmented acquisition creative',
      'Missing lucrative post-purchase cross-sell and replenishment windows',
      'Wasting impression share that should be dedicated to undecided prospects',
    ],
  },
  {
    num: '04',
    title: 'Uncapped Frequency Turns Relevance Into Annoyance & Fatigue',
    desc: 'Remarketing becomes brand-damaging when prospects feel stalked across the web. Showing the identical static banner 12 times a day leads directly to banner blindness, negative brand sentiment, and skyrocketing effective CPAs.',
    consequences: [
      'Rapid creative fatigue and steep drop-offs in click-through rates (CTR)',
      'High platform cost penalties due to declining ad engagement quality scores',
      'Negative customer perception from inescapable, repetitive ad loops',
    ],
  },
]

export default function WhenWrong() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Most Remarketing{' '}
            <span className="italic text-frame-accent">Underperforms.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A common remarketing setup is one broad website-visitor audience, one creative asset, and an open-ended campaign budget. Treating every prospect identically makes it impossible to control message relevance or maximize conversion return.
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
                    The Resulting Performance Damage:
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
