import { industryDetails, outcomes } from '../../data/agency'

export default function HomeIndustries() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Brands that cannot{' '}
              <span className="italic text-frame-accent">
                afford boring.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-300 lg:pb-1 md:text-lg">
            Whatever the vertical, the system stays the same: strategy, creative, web, media, and performance
            built as one connected machine. Here is what that looks like for each industry we serve.
          </p>
        </div>

        {/* Architectural Matrix of Industries */}
        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((item, index) => (
            <article
              key={item.industry}
              className="group relative flex flex-col justify-between border-b border-white/[0.08] sm:border-r p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500 transition-colors duration-200 group-hover:text-frame-accent tabular-nums tracking-wider">
                  Sector {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  {item.industry}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {item.line}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Outcomes Band */}
        <div className="mt-14 border-t border-white/[0.08] pt-8">
          <p className="mb-4 text-[11px] text-zinc-500">
            Guaranteed System Outcomes
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="relative flex items-center justify-center overflow-hidden rounded-lg border border-white/[0.08] bg-[#121214] p-4 text-center transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/30 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <span className="font-heading text-xs sm:text-sm font-medium text-zinc-200">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
