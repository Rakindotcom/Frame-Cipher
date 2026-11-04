import React from 'react'

const audiences = [
  {
    number: '01',
    archetype: 'DTC & Retail',
    title: 'Ecommerce & Product Brands',
    description:
      'For brands receiving product questions, order inquiries, delivery questions, reviews, and purchase-related messages.',
  },
  {
    number: '02',
    archetype: 'High-Touch Care',
    title: 'Service Businesses',
    description:
      'For businesses where customers often ask about pricing, availability, process, appointments, or service details.',
  },
  {
    number: '03',
    archetype: 'Enterprise & Pipeline',
    title: 'B2B & Professional Businesses',
    description:
      'For companies managing professional conversations, prospects, industry discussions, partnerships, and business inquiries.',
  },
  {
    number: '04',
    archetype: 'Local Presence',
    title: 'Local & Multi-Location Businesses',
    description:
      'For businesses where customer reviews, local questions, recommendations, and reputation are important across multiple locations.',
  },
  {
    number: '05',
    archetype: 'High Velocity',
    title: 'Startups & Growing Businesses',
    description:
      'For growing brands that need a structured response process before community activity becomes difficult to manage internally.',
  },
  {
    number: '06',
    archetype: 'Global Reach',
    title: 'International Businesses',
    description:
      'For businesses serving audiences across multiple markets where time zones, language, cultural context, and response expectations need to be considered.',
  },
]

export default function WhoFor() {
  return (
    <section id="who-for" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Who our community management service is{' '}
              <span className="italic text-frame-accent">for.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Community management is designed for businesses whose audiences ask questions, leave feedback, and raise concerns across active channels.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {audience.archetype}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {audience.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {audience.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {audience.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                  Audience Profile
                </span>
                <span className="mt-1 font-heading text-xs text-zinc-200 block">
                  Tailored workflow for {audience.title.toLowerCase()}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
