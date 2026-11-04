import { processSteps } from '../../data/agency'

export default function ServicesProcess() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            From idea to{' '}
            <span className="italic text-frame-accent">
              execution.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every service follows the same delivery loop: discover, plan, create, build, launch, and
            optimize, so your system keeps improving, not just getting built.
          </p>
        </div>

        {/* 2x3 Architectural Blueprint Matrix */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="group flex min-h-64 flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#18181B] text-frame-accent border border-white/[0.08]">
                    Phase 0{index + 1}
                  </span>
                  <span className="font-mono text-sm font-medium text-zinc-500">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
