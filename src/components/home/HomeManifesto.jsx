import { Boxes, Network, Zap, Download, Star, Activity } from 'lucide-react'

const manifesto = [
  {
    title: 'Stop buying fragments',
    description:
      'A brand does not grow because one vendor made a logo, another edited reels, and a third shipped a landing page. Growth needs one connected operating rhythm.',
    icon: Boxes,
    stats: {
      speed: 'Unified',
      tag: 'System',
      score: '100',
    },
  },
  {
    title: 'Make the system visible',
    description:
      'We map the offer, message, creative, web flow, campaigns, automations, and data so every moving part knows what the others are doing.',
    icon: Network,
    stats: {
      speed: 'Full Map',
      tag: 'Signals',
      score: '100',
    },
  },
  {
    title: 'Ship with pressure',
    description:
      'Frame Cipher turns strategy into assets, assets into launches, launches into data, and data into the next sharper move.',
    icon: Zap,
    stats: {
      speed: 'Speed SLA',
      tag: 'Velocity',
      score: '100',
    },
  },
]

export default function HomeManifesto() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            The old agency stack is broken
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
            Disconnected work creates slow teams, mixed messages, weaker campaigns, and websites that cannot carry the weight of the offer.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manifesto.map((item, index) => {
            const IconComponent = item.icon
            return (
              <article
                key={item.title}
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
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                    {item.description}
                  </p>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Delivery Architecture">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{item.stats.speed}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Focus Area">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{item.stats.tag}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="System Cohesion">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>{item.stats.score}</span>
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
