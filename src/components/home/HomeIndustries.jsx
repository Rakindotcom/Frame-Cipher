import { industries, outcomes } from '../../data/agency'

export default function HomeIndustries() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Built for / Target
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Brands that cannot afford boring.
          </h2>
          <p className="mt-6 max-w-lg text-sm font-medium leading-relaxed text-frame-muted-fg sm:text-base md:text-lg">
            Whether consumer lifestyle, enterprise technology, leadership authority, or specialized manufacturing, we build digital infrastructure tailored to your exact industry dynamics.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="border-2 border-frame-border bg-frame-bg px-4 py-2.5 text-xs font-black uppercase tracking-wider text-frame-fg sm:px-5 sm:py-3 sm:text-sm"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="mt-8 grid bg-frame-border gap-px sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article key={outcome} className="flex min-h-24 items-center bg-frame-bg p-5 sm:p-6">
                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-xl md:text-2xl">
                  {outcome}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
