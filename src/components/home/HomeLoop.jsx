import { Search, Target, Film, Code2, Rocket, BarChart3, TrendingUp, ArrowRight } from 'lucide-react'

const loopSteps = [
  { name: 'Audit', icon: Search, desc: 'Deep diagnostic of brand, metrics, and funnel leaks' },
  { name: 'Position', icon: Target, desc: 'Offer messaging and high-ticket customer definition' },
  { name: 'Produce', icon: Film, desc: 'In-house commercial 4K video, podcasts & reels' },
  { name: 'Build', icon: Code2, desc: 'Sub-second Next.js web platforms & automations' },
  { name: 'Launch', icon: Rocket, desc: 'Omnichannel campaign deployment & testing' },
  { name: 'Measure', icon: BarChart3, desc: 'Server-side CAPI tracking & blended ROAS' },
  { name: 'Scale', icon: TrendingUp, desc: 'Budget compounding and enterprise market capture' },
]

export default function HomeLoop() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Not a campaign.
            <br />
            A machine.
          </h2>
          <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-muted md:text-lg">
            Every client engagement moves through a closed-loop system designed to turn raw attention into qualified pipeline, customer retention, and compounding enterprise value.
          </p>
        </div>

        <div className="relative divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
          {loopSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.name}
                className="group grid min-h-20 items-center p-5 transition-colors duration-200 grid-cols-[auto_1fr_auto] gap-4 md:min-h-24 md:p-6 md:grid-cols-[0.2fr_1fr_auto] hover:bg-[#18181B]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-medium leading-none text-white/30 transition-colors duration-200 group-hover:text-frame-accent tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-600/30 bg-purple-600/10 text-purple-600 transition-colors duration-200">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-[1.05] text-highlighted tracking-tight">
                      {step.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted group-hover:text-default transition-colors hidden sm:block">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block font-heading text-xl font-medium text-zinc-600 transition-colors duration-200 group-hover:text-frame-accent group-hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
