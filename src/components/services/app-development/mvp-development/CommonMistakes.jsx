'use client'

import React from 'react'
import { AlertTriangle } from 'lucide-react'

const MISTAKES = [
  {
    num: '01',
    title: 'Building Too Many Features',
    takeaway: 'Excessive scope distorts behavioral attribution',
    desc: 'Adding more features does not automatically make an MVP more useful. Excessive scope increases development time and makes it harder to identify which part of the product influenced user behavior.',
  },
  {
    num: '02',
    title: 'Testing Too Many Hypotheses',
    takeaway: 'Multi-variable confusion muddles evidence',
    desc: 'An MVP becomes difficult to interpret when it tries to answer several unrelated questions at once. A focused MVP should have a clear primary hypothesis and supporting assumptions.',
  },
  {
    num: '03',
    title: 'Confusing Bugs With Product Feedback',
    takeaway: 'Flawed execution masks true product demand',
    desc: 'If users cannot complete the core workflow because of technical problems, their behavior may not tell you much about the product idea. Basic reliability is therefore part of useful validation.',
  },
  {
    num: '04',
    title: 'Ignoring Analytics',
    takeaway: 'Flying blind without baseline funnel instrumentation',
    desc: 'Without appropriate measurement, you may know that people used the product without knowing where they activated, dropped off, converted, or returned. Measurement should be planned before launch.',
  },
  {
    num: '05',
    title: 'Scaling Before Validation',
    takeaway: 'Premature optimization drains runtime runway',
    desc: 'Building infrastructure for a large user base before demand is established can consume budget without reducing the main business uncertainty. An MVP should be designed for its expected validation stage while leaving a sensible path for future growth.',
  },
]

export default function CommonMistakes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Common MVP Mistakes That{' '}
            <span className="italic text-frame-accent">Distort Validation.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            A technically functional MVP can still produce poor evidence if the product is scoped incorrectly. Here are the 5 critical failure modes we actively safeguard against.
          </p>
        </div>

        {/* Editorial Divided Rows (Modality 1) */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <div className="divide-y divide-white/[0.08]">
            {MISTAKES.map((mistake) => (
              <div
                key={mistake.num}
                className="group p-6 sm:p-8 transition-colors duration-200 hover:bg-[#161619]"
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-baseline">
                  {/* Metric Num & Badge */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-500 group-hover:text-amber-400 transition-colors">
                      {mistake.num}
                    </span>
                    
                  </div>

                  {/* Title & Takeaway */}
                  <div className="lg:col-span-4">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                      {mistake.title}
                    </h3>
                    <span className="mt-1 font-mono text-xs text-amber-400/90 block">
                      &bull; {mistake.takeaway}
                    </span>
                  </div>

                  {/* Consequence Explanation */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {mistake.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

