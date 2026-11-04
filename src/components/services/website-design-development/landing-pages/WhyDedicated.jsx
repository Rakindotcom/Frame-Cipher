const whyDedicatedPage = [
  {
    title: 'Paid Traffic Needs a Focused Destination',
    desc: 'Sending ad traffic to a general homepage gives visitors too many paths to explore. A dedicated landing page keeps the message and action aligned with the campaign.',
  },
  {
    title: 'Message Match Builds Continuity',
    desc: 'When the landing page reflects the promise, language, and offer from the ad or campaign, visitors can understand the connection faster.',
  },
  {
    title: 'One Primary CTA Reduces Distraction',
    desc: 'A focused CTA gives visitors a clear next step instead of asking them to decide where to go across a full website.',
  },
  {
    title: 'Faster Launch Supports Faster Testing',
    desc: 'Landing pages can be launched faster than full website projects, allowing campaigns to move from idea to live testing without waiting for a broader website rebuild.',
  },
  {
    title: 'Better Tracking Supports Better Decisions',
    desc: 'When the page, traffic source, and conversion events are properly tracked, campaign data can help identify what needs improvement.',
  },
]

export default function WhyDedicated() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why a Dedicated Landing Page Can{' '}
            <span className="italic text-frame-accent">Improve Campaign Performance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A landing page gives a campaign a focused destination built around one audience, one offer, and one primary action.
          </p>
        </div>

        {/* 3-Column Grid of Advantage Cards */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {whyDedicatedPage.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Factor 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            <strong className="text-white font-medium">Please Note:</strong> A dedicated landing page does not guarantee campaign success. Traffic quality, offer strength, targeting, pricing, and market demand still play major roles.
          </p>
        </div>
      </div>
    </section>
  )
}
