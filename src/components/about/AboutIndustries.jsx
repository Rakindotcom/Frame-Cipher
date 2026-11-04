import { industries } from '../../data/agency'

export default function AboutIndustries() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            Built for brands that{' '}
            <span className="italic text-frame-accent">
              move in public.
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-colors duration-200 hover:border-white/[0.18] hover:text-white"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="pt-2 text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
            We start with the business problem, define the growth system around it, then move through
            strategy, creative direction, production, development, launch, reporting, and optimization.
          </p>
        </div>
      </div>
    </section>
  )
}
