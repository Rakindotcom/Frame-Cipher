import { industryDetails, outcomes } from '../../data/agency'

export default function HomeIndustries() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Built for / Target
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Brands that cannot afford boring.
            </h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-relaxed text-frame-muted-fg sm:text-base md:text-lg lg:pb-1">
            Whatever the vertical, the system stays the same — strategy, creative, web, media, and performance
            built as one connected machine. Here is what that looks like for each industry we serve.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((item, index) => (
            <article
              key={item.industry}
              className="group bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-muted/40 md:p-7"
            >
              <p
                className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent md:text-4xl"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg sm:text-2xl">
                {item.industry}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.line}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome} className="flex min-h-24 items-center bg-frame-bg p-5 sm:p-6">
              <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-xl md:text-2xl">
                {outcome}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}