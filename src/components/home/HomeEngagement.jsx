import { engagementModels } from '../../data/agency'

export default function HomeEngagement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Choose the{' '}
            <span className="italic text-frame-accent">
              pressure level.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            From launch kits to full 360 partnerships, the model changes around your stage and the amount of execution your team needs.
          </p>
        </div>

        {/* Architectural 5-Column Engagement Continuum */}
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08] lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-5">
          {engagementModels.map((model, index) => (
            <article
              key={model.title}
              className="group relative flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.02] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider">
                  Model 0{index + 1}
                </span>
                <h3 className="mt-6 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  {model.title}
                </h3>
                <div className="mt-6">
                  <p className="text-[10px] text-zinc-500">
                    Best for
                  </p>
                  <p className="mt-1.5 text-sm font-normal leading-relaxed text-zinc-300">
                    {model.bestFor}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <p className="text-[10px] text-zinc-500">
                  Includes
                </p>
                <p className="mt-1.5 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {model.includes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
