import React from 'react'
import PosterButton from '../../../home/PosterButton'

const reasons = [
  {
    number: '01',
    title: 'Turn Questions Into Conversations',
    body: 'A customer asking about price, availability, delivery, features, or services is already showing interest. A useful response can move that interaction forward.',
  },
  {
    number: '02',
    title: 'Reduce Missed Customer Inquiries',
    body: 'Comments and DMs can contain genuine buying questions. Without a defined response process, important conversations can easily be missed.',
  },
  {
    number: '03',
    title: 'Handle Public Feedback Professionally',
    body: 'Public complaints are visible to more than the original customer. A calm, relevant response shows that the business is paying attention without turning every disagreement into a public argument.',
  },
  {
    number: '04',
    title: 'Protect Consistent Brand Voice',
    body: 'Different people can easily respond in different ways. Clear response guidelines help maintain a recognizable tone across platforms and conversations.',
  },
  {
    number: '05',
    title: 'Identify Recurring Customer Issues',
    body: 'Repeated questions can reveal gaps in product information, content, website copy, or customer service. Community management can turn those interactions into useful business insight.',
  },
  {
    number: '06',
    title: 'Build Stronger Customer Relationships',
    body: 'People do not only interact with brands through published content. They interact through questions, feedback, complaints, recommendations, and everyday conversations. Consistent responses help make those interactions feel intentional rather than neglected.',
  },
]

export default function WhyMatters() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why community management matters for{' '}
              <span className="italic text-frame-accent">your business.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            A social account can look active while still feeling unresponsive. Consistent community management helps close that gap and build enduring brand equity.
          </p>
        </div>

        {/* 6 Elevated Archetype Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100 sm:p-8"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider">
                  {reason.number}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-300 transition-colors">
                  {reason.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Conversion Ledger Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300">
            Turn social questions, reviews, and community conversations into lasting customer loyalty and brand credibility.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Your Community Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
