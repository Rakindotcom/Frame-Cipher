import { processSteps } from '../../data/agency'

export default function HomeProcess() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Process / Execution
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            From signal to scale.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            The work moves in a loop: understand the market, sharpen the message, create the assets, build the system, launch, measure, and improve.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative flex min-h-72 flex-col justify-between overflow-hidden border-2 border-frame-border bg-frame-bg p-6 transition-all duration-300 hover:border-frame-accent hover:bg-frame-accent sm:p-8"
            >
              <p
                className="absolute -right-2 -top-4 select-none font-heading text-[7rem] font-bold leading-none tracking-tighter text-frame-muted/50 transition-colors duration-300 group-hover:text-frame-accent-fg/20 sm:text-[9rem] md:text-[11rem]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  Phase 0{index + 1}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl md:text-4xl">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90 sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
