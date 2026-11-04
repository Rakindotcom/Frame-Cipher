const trafficSources = [
  {
    title: 'Google Ads Landing Pages',
    desc: 'We align the landing page with the search intent, keyword theme, ad message, offer, and conversion goal so visitors immediately understand they are in the right place.',
  },
  {
    title: 'Meta & Instagram Ad Landing Pages',
    desc: 'The page can be structured around the audience, creative, offer, and message introduced in the ad, creating a smoother transition from social click to conversion.',
  },
  {
    title: 'TikTok Campaign Landing Pages',
    desc: 'For mobile-first audiences, we focus on fast loading, strong visual communication, concise messaging, and a clear action that matches the campaign.',
  },
  {
    title: 'LinkedIn & B2B Landing Pages',
    desc: 'B2B campaigns often need stronger value propositions, proof, trust signals, qualification questions, and a clear path to a demo, consultation, or sales conversation.',
  },
  {
    title: 'Email & Social Campaign Landing Pages',
    desc: 'Dedicated pages can be created for product launches, promotions, registrations, downloads, events, and other campaign-specific actions.',
  },
]

export default function TrafficSources() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Landing Pages Built for{' '}
            <span className="italic text-frame-accent">Your Traffic Source.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Visitors arrive with different expectations depending on where they came from. A landing page should carry the same message and intent from the traffic source through to the final action.
          </p>
        </div>

        {/* 3-Column Grid of Channel Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {trafficSources.map((source, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Channel 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {source.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            The traffic source helps shape the headline, offer, proof, CTA, and page structure. We build the landing experience around the audience you actually paid or worked to reach.
          </p>
        </div>
      </div>
    </section>
  )
}
