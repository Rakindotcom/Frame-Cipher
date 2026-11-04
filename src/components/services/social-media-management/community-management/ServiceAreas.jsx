import React from 'react'

const areas = [
  {
    number: '01',
    region: 'Headquarters & Domestic',
    title: 'Bangladesh',
    body: 'Framecipher is based in Dhaka and provides community management for businesses across Bangladesh. Where relevant, response workflows can support Bangla-English communication based on your audience and brand requirements.',
    list: null,
  },
  {
    number: '02',
    region: 'Global Markets & Time Zones',
    title: 'International Markets',
    body: 'We also support businesses serving international audiences, accounting for different time zones, language requirements, audience expectations, and platform usage patterns within the agreed scope.',
    list: [
      'United States',
      'United Kingdom',
      'Australia',
      'Canada',
      'United Arab Emirates',
      'Other international markets',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Community management service{' '}
              <span className="italic text-frame-accent">areas.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Time zones, language, audience expectations, and platform usage patterns differ by market, so coverage accounts for those differences instead of applying one region’s response habits everywhere.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2 Geographic Columns) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {area.region}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {area.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {area.body}
                </p>

                {area.list && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                      Key Coverage Regions
                    </span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {area.list.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                  Regional Focus
                </span>
                <span className="mt-1 font-heading text-xs text-zinc-200 block">
                  {area.title} Operation &amp; Multilingual Support
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
