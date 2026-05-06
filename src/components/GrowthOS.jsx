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
    <span className="h-2 w-12 bg-gradient-to-r from-cyan-300 via-frame-accent to-fuchsia-500 md:w-14" aria-hidden="true" />
  )
}

export function GrowthOSHome() {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border bg-[#05070c] px-4 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(6,182,212,0.18),transparent_38%,rgba(168,85,247,0.22))]" aria-hidden="true" />

      <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
        <div>
          <p className="mb-8 inline-flex border border-cyan-400/60 px-4 py-3 text-xs font-black uppercase tracking-[0.32em] text-cyan-200 md:px-5">
            One team for brand, content, tech, and growth.
          </p>
          <h2 className="font-heading text-[clamp(3rem,7.5vw,7rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Growth OS for brands that need momentum.
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
            Strategy, content, media, software, ads, and analytics mapped as one operating system
            instead of scattered execution.
          </p>
        </div>

        <div className="border border-frame-border/80 bg-[#15101f]/85 p-4 shadow-2xl shadow-frame-accent/10 md:p-6">
          <div className="flex items-start justify-between gap-6 border-b border-frame-border pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-300">Growth OS</p>
              <p className="mt-2 text-sm font-medium text-frame-muted-fg md:text-base">Strategy to execution map</p>
            </div>
            <span className="mt-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" aria-hidden="true" />
          </div>

          <div className="grid gap-3 border-b border-frame-border py-4 md:grid-cols-2">
          {growthModules.map((module) => (
            <article key={module.title} className="group min-h-40 border border-frame-border bg-[#0b0a12] p-5 transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent">
              <div className="flex items-start justify-between gap-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/70">
                  {module.number}
                </p>
                <SignalBar />
              </div>
              <h3 className="mt-7 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-3xl">
                {module.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80 md:text-base">
                {module.description}
              </p>
            </article>
          ))}
          </div>

          <p className="border border-dashed border-frame-border p-5 text-sm font-medium leading-tight text-frame-muted-fg md:text-base">
            Every launch feeds the next sharper move: plan, produce, build, launch, measure, and scale.
          </p>
        </div>
      </div>
    </section>
  )
}

export function GrowthOSServices() {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(250,250,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden="true" />
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Growth OS
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
              How services connect.
            </h2>
          </div>
          <p className="max-w-3xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
            Each service can be hired alone, but the system is strongest when strategy, production,
            technology, campaigns, and reporting share the same path.
          </p>
        </div>

        <div className="grid border border-frame-border bg-[#120f19]/90 lg:grid-cols-[0.42fr_1fr]">
          <div className="border-b border-frame-border p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
              Operating sequence
            </p>
            <div className="mt-8 grid gap-3">
              {serviceFlow.map((step, index) => (
                <div key={step} className="group flex items-center gap-4 border border-frame-border bg-frame-bg/60 p-3 transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-frame-border font-heading text-sm font-bold text-frame-fg transition-colors duration-300 group-hover:border-frame-accent-fg group-hover:text-frame-accent-fg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
            {growthModules.map((module) => (
              <article key={module.title} className="min-h-48 border border-frame-border bg-frame-bg p-6">
                <div className="mb-8 flex items-center justify-between gap-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {module.number}
                  </p>
                  <SignalBar />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-tight text-frame-muted-fg md:text-base">
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
