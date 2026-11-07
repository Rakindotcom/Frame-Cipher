import { processSteps } from '../../data/agency'
import { Compass, Lightbulb, PenTool, Code2, Rocket, BarChart2 } from 'lucide-react'

const stepIcons = [Compass, Lightbulb, PenTool, Code2, Rocket, BarChart2]

export default function ServicesProcess() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            From idea to{' '}
            <span className="text-white">
              execution.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every service follows the same delivery loop: discover, plan, create, build, launch, and
            optimize, so your system keeps improving, not just getting built.
          </p>
        </div>

        {/* Modality B Nuxt Module Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Compass
            return (
              <article
                key={step.title}
                className="group relative flex min-h-64 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-purple-600 shrink-0" aria-hidden="true" />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-medium text-zinc-500 tabular-nums">
                        /{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                        Phase 0{index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
