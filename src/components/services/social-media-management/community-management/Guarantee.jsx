import React from 'react'
import { Check, X } from 'lucide-react'

const columns = [
  {
    title: 'What We Control & Guarantee',
    tag: 'Operational Commitments',
    items: [
      'The agreed response workflow',
      'Monitoring process',
      'Brand voice implementation',
      'Moderation process',
      'Escalation system',
      'Reporting',
      'Ongoing workflow improvements',
    ],
    highlight: true,
  },
  {
    title: "What We Don't Guarantee",
    tag: 'Platform & Algorithmic Boundaries',
    items: [
      'A specific follower increase',
      'A specific engagement rate',
      'Positive responses from every customer',
      'Removal of legitimate negative reviews',
      'A specific number of leads or sales',
      'Viral content',
      'Platform algorithmic outcomes',
      'Resolution of issues controlled by your internal team',
    ],
    highlight: false,
  },
]

export default function Guarantee() {
  return (
    <section id="guarantee" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Service standards &amp; response{' '}
              <span className="italic text-frame-accent">commitments.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Professional community management requires clear operational boundaries and transparent accountability rather than inflated promises.
          </p>
        </div>

        {/* 2-Column Comparative Ledger */}
        <div className="grid gap-8 lg:grid-cols-2">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`rounded-xl border border-white/[0.08] p-8 sm:p-10 transition-colors duration-200 ${
                column.highlight ? 'bg-[#18181B]' : 'bg-[#121214]'
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="font-mono text-xs text-frame-accent">
                  {column.tag}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium text-white">
                {column.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-white/[0.04] pb-3 text-sm font-normal leading-relaxed text-zinc-300 last:border-b-0"
                  >
                    {column.highlight ? (
                      <Check className="mt-1 h-4 w-4 shrink-0 text-frame-accent" />
                    ) : (
                      <X className="mt-1 h-4 w-4 shrink-0 text-zinc-500" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Boundary Note Callout Box */}
        <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
          <p className="text-sm font-normal leading-relaxed text-zinc-300 md:text-base">
            Customer response depends on the underlying issue, offer, service quality, audience, platform environment, and many factors outside a community manager's control. Our responsibility is to provide the agreed response and escalation process consistently and professionally.
          </p>
        </div>
      </div>
    </section>
  )
}
