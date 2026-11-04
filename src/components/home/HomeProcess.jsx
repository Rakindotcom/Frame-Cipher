import { processSteps } from '../../data/agency'

export default function HomeProcess() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] text-white">
            From signal to <span className="italic text-frame-accent">scale.</span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            The work moves in a loop: understand the market, sharpen the message, create the assets, build the system, launch, measure, and improve.
          </p>
        </div>

        {/* Structured Process Matrix */}
        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative flex min-h-64 flex-col justify-between border-b sm:border-r border-white/[0.08] p-8 transition-colors duration-200 hover:bg-white/[0.02] sm:p-10"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-500 transition-colors group-hover:text-frame-accent tabular-nums">
                  Phase 0{index + 1}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-3xl">
                  {step.title}
                </h3>
              </div>

              <p className="mt-8 text-sm md:text-base font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
