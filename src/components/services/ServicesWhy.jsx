import { Compass, Cpu, Sparkles, Shuffle, Target, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    number: '01',
    title: 'Strategy + execution',
    icon: Compass,
    description: 'Most agencies sell execution. We run strategy first, so every deliverable has a reason.',
  },
  {
    number: '02',
    title: 'Marketing + technology',
    icon: Cpu,
    description: 'Brands need marketing and software to grow. We do both under one roof.',
  },
  {
    number: '03',
    title: 'Creative + performance',
    icon: Sparkles,
    description: 'Content that looks good and performs. Design work is verified against reports, not opinions.',
  },
  {
    number: '04',
    title: 'Flexible engagement',
    icon: Shuffle,
    description: 'One-off project or full 360 partner; the model changes around the business stage.',
  },
  {
    number: '05',
    title: 'Built around your business',
    icon: Target,
    description: 'No force-fed packages. Everything is mapped to your goal, audience, and budget.',
  },
]

export default function ServicesWhy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One team.{' '}
            <span className="text-white">
              Multiple capabilities.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Instead of coordinating five vendors, you get one accountable partner across strategy,
            marketing, creative, media, and technology.
          </p>
        </div>

        {/* Modality B Nuxt Module Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.number}
                className="group relative flex min-h-56 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-medium text-zinc-500 tabular-nums">
                        /{reason.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                        Advantage
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-normal leading-relaxed text-zinc-400">
                    {reason.description}
                  </p>
                </div>
              </article>
            )
          })}

          {/* 6th Tile: Comparison Summary Card */}
          <article className="group relative flex min-h-56 flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#151518] p-7 md:p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#18181B] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-500/60 before:to-transparent">
            <div>
              <div className="flex items-start justify-between gap-4">
                <ShieldCheck className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                  Outcome
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                vs. hiring five separate agencies
              </h3>
              <p className="mt-2.5 text-sm font-normal leading-relaxed text-zinc-300">
                One brief, one budget, one point of contact, one accountable outcome.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
