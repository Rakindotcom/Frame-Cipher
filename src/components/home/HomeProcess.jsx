import {
  Compass,
  FileText,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  Download,
  Star,
  Activity,
} from 'lucide-react'
import { processSteps } from '../../data/agency'

const phaseIcons = [Compass, FileText, Palette, Code2, Rocket, TrendingUp]

const deliverablesByStep = [
  'Market & Competitor Audit',
  'Positioning & Offer Blueprint',
  'Creative & Visual Identity Assets',
  'Production Platforms & Automations',
  'Multi-Channel Launch Execution',
  'Performance Analytics & Scaling',
]

export default function HomeProcess() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            From signal to scale
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
            The work moves in a loop: understand the market, sharpen the message, create the assets, build the system, launch, measure, and improve.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid (6 Operational Phases in 3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const IconComponent = phaseIcons[index] || Compass
            return (
              <article
                key={step.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  {/* Top-Left Iconic Accent Icon (Deep Purple, sitting cleanly on canvas) */}
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                    {step.description}
                  </p>

                  {/* Deliverable Badge */}
                  <div className="mt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Deliverable
                    </span>
                    <span className="inline-block rounded-md border border-white/[0.08] bg-[#18181B] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-colors duration-200 hover:border-white/[0.16] hover:text-white">
                      {deliverablesByStep[index] || 'System Asset'}
                    </span>
                  </div>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Phase Sequence">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>0{index + 1}/06</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Methodology SLA">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>SLA</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Readiness Score">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>100</span>
                    </span>
                  </div>

                  {/* Nuxt Terminal Prompt Badge (>_) */}
                  <div className="flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors">
                    &gt;_
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
