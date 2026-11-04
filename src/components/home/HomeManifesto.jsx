const manifesto = [
  {
    title: 'Stop buying fragments',
    description:
      'A brand does not grow because one vendor made a logo, another edited reels, and a third shipped a landing page. Growth needs one connected operating rhythm.',
  },
  {
    title: 'Make the system visible',
    description:
      'We map the offer, message, creative, web flow, campaigns, automations, and data so every moving part knows what the others are doing.',
  },
  {
    title: 'Ship with pressure',
    description:
      'Frame Cipher turns strategy into assets, assets into launches, launches into data, and data into the next sharper move.',
  },
]

export default function HomeManifesto() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            The old agency stack is{' '}
            <span className="italic text-frame-accent">
              broken.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Disconnected work creates slow teams, mixed messages, weaker campaigns, and websites that cannot carry the weight of the offer.
          </p>
        </div>

        {/* Linear/Raycast Architectural Continuum Matrix (Shared 1px Hairlines, No Box Clutter) */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] grid lg:grid-cols-3 gap-px before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:z-10">
          {manifesto.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] sm:p-8 md:p-10"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-3xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-8 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
