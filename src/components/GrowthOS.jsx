const growthModules = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Position the offer, audience, message, and campaign angle before production starts.',
  },
  {
    number: '02',
    title: 'Content',
    description: 'Turn the strategy into platform-ready visuals, copy, video, and campaign assets.',
  },
  {
    number: '03',
    title: 'Software',
    description: 'Build the websites, landing pages, CRM flows, dashboards, and automation layer.',
  },
  {
    number: '04',
    title: 'Media',
    description: 'Produce the photography, video, reels, and visual coverage that make the brand move.',
  },
  {
    number: '05',
    title: 'Ads',
    description: 'Launch paid and organic campaigns with clear offers, tracking, and creative tests.',
  },
  {
    number: '06',
    title: 'Analytics',
    description: 'Read the signal, sharpen the next move, and keep the system improving.',
  },
]

const serviceFlow = ['Audit', 'Map', 'Build', 'Launch', 'Measure', 'Improve']

function SignalBar() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-frame-accent" />
      <span className="h-1 w-7 rounded-full bg-frame-accent/30" />
    </div>
  )
}

export function GrowthOSHome() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Growth OS for brands that{' '}
              <span className="italic text-frame-accent">
                need momentum.
              </span>
            </h2>
          </div>
          <div className="max-w-xl border-l border-white/[0.08] pl-6">
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
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
                <span className="flex h-6 w-6 items-center justify-center rounded border border-white/[0.08] bg-white/[0.04] font-mono text-[11px] font-medium text-frame-accent tabular-nums">
                  0{sIdx + 1}
                </span>
                <span className="font-heading text-sm font-medium tracking-tight text-white">
                  {step}
                </span>
                {sIdx < serviceFlow.length - 1 && (
                  <span className="pl-3 text-sm font-normal text-zinc-600" aria-hidden="true">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6-Module Bento Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {growthModules.map((module) => (
            <article
              key={module.title}
              className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.2] hover:bg-[#151518] sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent tabular-nums">
                    Module {module.number}
                  </span>
                  <SignalBar />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent-light sm:text-3xl">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200 md:text-base">
                  {module.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs font-normal text-zinc-400">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">Phase {module.number} / Integrated</span>
                <span className="text-frame-accent font-medium group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </article>
          ))}
        </div>

        {/* Continuous Feedback Loop Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:items-center md:p-7">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm font-normal leading-relaxed text-zinc-300">
              <strong className="text-white font-medium">Continuous Feedback Loop:</strong> Every launch feeds the next sharper move: plan, produce, build, launch, measure, and scale without vendor drift.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 font-mono text-[11px] text-zinc-300">
            Audit to Scale
          </span>
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
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              How services connect.
            </h2>
          </div>
          <p className="max-w-3xl text-sm font-normal leading-relaxed text-zinc-300 md:text-base">
            Each service can be hired alone, but the system is strongest when strategy, production,
            technology, campaigns, and reporting share the same path.
          </p>
        </div>

        <div className="grid rounded-xl border border-white/[0.08] bg-[#121214] lg:grid-cols-[0.42fr_1fr] overflow-hidden">
          <div className="border-b border-white/[0.08] p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-frame-accent">
              Operating sequence
            </p>
            <div className="mt-8 grid gap-2.5">
              {serviceFlow.map((step, index) => (
                <div key={step} className="group flex items-center gap-4 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors duration-200 hover:border-frame-accent/40 hover:bg-white/[0.04]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/[0.08] bg-white/[0.04] font-heading text-xs font-medium text-zinc-300 group-hover:text-frame-accent group-hover:border-frame-accent/40 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-base font-medium leading-none tracking-tight text-white group-hover:text-frame-accent">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3.5 p-6 lg:p-8 sm:grid-cols-2 xl:grid-cols-3">
            {growthModules.map((module) => (
              <article key={module.title} className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.04]">
                <div className="mb-5 flex items-center justify-between gap-5">
                  <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 group-hover:text-frame-accent">
                    {module.number}
                  </span>
                  <SignalBar />
                </div>
                <h3 className="font-heading text-lg font-medium leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {module.title}
                </h3>
                <p className="mt-3 text-xs font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
