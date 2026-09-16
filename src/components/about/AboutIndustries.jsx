import { industries } from '../../data/agency'

export default function AboutIndustries() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-16 text-frame-accent-fg sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.85] tracking-tighter">
          Built for brands that move in public.
        </h2>
        <div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="border-2 border-frame-accent-fg px-4 py-2.5 text-xs font-black uppercase tracking-wider sm:px-5 sm:py-3 sm:text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="mt-7 text-sm font-semibold leading-relaxed sm:text-base md:text-xl">
            We start with the business problem, define the growth system around it, then move through
            strategy, creative direction, production, development, launch, reporting, and optimization.
          </p>
        </div>
      </div>
    </section>
  )
}
