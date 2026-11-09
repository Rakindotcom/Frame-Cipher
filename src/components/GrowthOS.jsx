import {
  Compass,
  Palette,
  Code2,
  Video,
  TrendingUp,
  BarChart3,
  Download,
  Star,
  Activity,
} from 'lucide-react'

const growthModules = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Position the offer, audience, message, and campaign angle before production starts.',
    icon: Compass,
    stage: 'Audit & Angle',
  },
  {
    number: '02',
    title: 'Content',
    description: 'Turn the strategy into platform-ready visuals, copy, video, and campaign assets.',
    icon: Palette,
    stage: 'Creative Assets',
  },
  {
    number: '03',
    title: 'Software',
    description: 'Build the websites, landing pages, CRM flows, dashboards, and automation layer.',
    icon: Code2,
    stage: 'Next.js & CAPI',
  },
  {
    number: '04',
    title: 'Media',
    description: 'Produce the photography, video, reels, and visual coverage that make the brand move.',
    icon: Video,
    stage: '4K Studio Sets',
  },
  {
    number: '05',
    title: 'Ads',
    description: 'Launch paid and organic campaigns with clear offers, tracking, and creative tests.',
    icon: TrendingUp,
    stage: 'Algorithmic Ads',
  },
  {
    number: '06',
    title: 'Analytics',
    description: 'Read the signal, sharpen the next move, and keep the system improving.',
    icon: BarChart3,
    stage: 'Feedback Loop',
  },
]

const serviceFlow = ['Audit', 'Map', 'Build', 'Launch', 'Measure', 'Improve']

export function GrowthOSHome() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Growth OS for brands that need momentum
            </h2>
          </div>
          <div className="max-w-xl border-l border-white/[0.08] pl-6">
            <p className="text-base font-normal leading-relaxed text-white md:text-lg">
              One team for brand, content, tech, and growth. Strategy, content, media, software, ads, and analytics mapped as one operating system instead of scattered execution.
            </p>
          </div>
        </div>

        {/* 6-Step Operating Sequence Pill Bar */}
        <div className="mb-10 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] p-3">
          <div className="flex min-w-max items-center justify-between gap-3">
            {serviceFlow.map((step, sIdx) => (
              <div
                key={step}
                className="group flex items-center gap-3 rounded-lg border border-white/[0.08] bg-[#18181B] px-4 py-2.5 transition-colors duration-200 hover:border-white/[0.14]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded border border-purple-600/30 bg-purple-600/10 font-mono text-[11px] font-medium text-purple-600 tabular-nums">
                  0{sIdx + 1}
                </span>
                <span className="font-heading text-sm font-semibold tracking-tight text-highlighted">
                  {step}
                </span>
                {sIdx < serviceFlow.length - 1 && (
                  <span className="pl-3 text-sm font-normal text-zinc-600" aria-hidden="true">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Nuxt-Grade Module Cards Grid (6 Modules in 3-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthModules.map((module, index) => {
            const IconComponent = module.icon
            return (
              <article
                key={module.title}
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
                      Module {module.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default">
                    {module.description}
                  </p>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Pipeline Stage">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{module.stage}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Architecture Scope">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Growth OS</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Signal Health">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>100%</span>
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

export function GrowthOSServices() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              How services connect
            </h2>
          </div>
          <p className="max-w-3xl text-sm font-normal leading-relaxed text-white md:text-base">
            Each service can be hired alone, but the system is strongest when strategy, production,
            technology, campaigns, and reporting share the same path.
          </p>
        </div>

        <div className="grid rounded-2xl border border-white/[0.08] bg-[#121214] lg:grid-cols-[0.42fr_1fr] overflow-hidden">
          <div className="border-b border-white/[0.08] p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold">
              Operating sequence
            </p>
            <div className="mt-8 grid gap-2.5">
              {serviceFlow.map((step, index) => (
                <div key={step} className="group flex items-center gap-4 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors duration-200 hover:border-purple-600/40 hover:bg-white/[0.04]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/[0.08] bg-white/[0.04] font-heading text-xs font-semibold text-muted group-hover:text-purple-600 group-hover:border-purple-600/40 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-base font-semibold leading-none tracking-tight text-highlighted group-hover:text-purple-600">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-6 lg:p-8 sm:grid-cols-2 xl:grid-cols-3">
            {growthModules.map((module) => {
              const IconComponent = module.icon
              return (
                <article key={module.title} className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-5">
                      <IconComponent className="h-5 w-5 text-purple-600" />
                      <span className="font-mono text-xs text-zinc-500 tabular-nums">
                        {module.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold leading-tight tracking-tight text-highlighted">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-xs font-normal leading-relaxed text-white">
                      {module.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted">
                    <span className="font-mono text-[11px]">{module.stage}</span>
                    <span className="font-mono text-[11px] text-purple-600">&gt;_</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
