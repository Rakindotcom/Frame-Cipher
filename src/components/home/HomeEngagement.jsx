import { Rocket, Zap, TrendingUp, Users, ShieldCheck, Download, Star, Activity } from 'lucide-react'
import { engagementModels } from '../../data/agency'

const modelIcons = [Rocket, Zap, TrendingUp, Users, ShieldCheck]

const modelTelemetry = [
  { speed: '2-3 Wks', tag: 'Fixed', score: '99' },
  { speed: 'Monthly', tag: 'Retainer', score: '100' },
  { speed: 'Bi-Weekly', tag: 'Studio', score: '98' },
  { speed: '3-6 Wks', tag: 'Agile', score: '99' },
  { speed: 'Dedicated', tag: 'Full 360', score: '100' },
]

export default function HomeEngagement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Choose the pressure level
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
            From launch kits to full 360 partnerships, the model changes around your stage and the amount of execution your team needs.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementModels.map((model, index) => {
            const IconComponent = modelIcons[index] || Rocket
            const telemetry = modelTelemetry[index] || { speed: 'Sprint', tag: 'Custom', score: '100' }
            return (
              <article
                key={model.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
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
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {model.title}
                  </h3>

                  {/* Best For Specification */}
                  <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#18181B] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      Best for
                    </p>
                    <p className="mt-1 text-xs font-normal leading-relaxed text-white">
                      {model.bestFor}
                    </p>
                  </div>

                  {/* Scope Details */}
                  <div className="mt-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      Includes
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default">
                      {model.includes}
                    </p>
                  </div>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Delivery Timeline">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{telemetry.speed}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Model Scope">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{telemetry.tag}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Engagement Health">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>{telemetry.score}</span>
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
