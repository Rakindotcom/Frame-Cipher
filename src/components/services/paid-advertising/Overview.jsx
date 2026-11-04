'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const knowList = [
  'Which channels are receiving budget',
  'Which campaigns and audiences are producing conversions',
  'Which creative is generating useful response',
  'What happens after someone clicks',
  'Which parts of the funnel are losing potential customers',
  'Where the next optimization opportunity exists',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Paid Advertising Built Around Business Outcomes,{' '}
              <span className="italic text-frame-accent">Not Clicks.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                A paid campaign can generate thousands of clicks and still produce very little business value. The difference is what happens before and after the click.
              </p>
              <p>
                Effective paid advertising starts with a clear business objective, the right audience, a relevant offer, strong creative, accurate tracking, and a conversion path that makes sense for the customer. From there, performance data guides what to test, reduce, improve, and scale.
              </p>
              <p>
                Framecipher manages paid advertising with that full system in mind. Whether the goal is ecommerce revenue, qualified leads, booked appointments, software sign-ups, product sales, or customer acquisition, campaign decisions are tied to the outcomes that matter to your business.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 font-mono text-xs text-zinc-400">
              <p className="text-white font-medium">The Core Objective:</p>
              <p className="mt-1 leading-relaxed">
                The objective is not simply to spend more. It is to make each advertising decision more measurable, deliberate, and commercially useful.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Ledger (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                You should always know:
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                If your current agency or internal campaigns cannot answer these with certainty, ad budget is being wasted:
              </p>

              <div className="mt-6 divide-y divide-white/[0.08]">
                {knowList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-frame-accent/15 text-frame-accent text-xs font-mono font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-base font-normal text-zinc-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
