import {
  MessageSquare,
  Search,
  FileText,
  CheckCircle2,
  Layers,
  Rocket,
  Download,
  Star,
  Activity,
} from 'lucide-react'
import PosterButton from './PosterButton'

const stepIcons = [MessageSquare, Search, FileText, CheckCircle2, Layers, Rocket]

const onboardingSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    timeline: 'Within 24 Hours',
    desc: 'Discovery conversation to audit current bottlenecks, unit economics, and operational objectives.',
  },
  {
    step: '02',
    title: 'Technical & Media Audit',
    timeline: 'Day 2–3',
    desc: 'Deep-dive review of tracking pixels, ad account history, website architecture, and creative assets.',
  },
  {
    step: '03',
    title: 'Custom Growth Blueprint',
    timeline: 'Day 4–5',
    desc: 'Comprehensive multi-channel strategy document detailing timelines, budgets, and deliverable milestones.',
  },
  {
    step: '04',
    title: 'Scope & Milestone Sign-Off',
    timeline: 'Week 1',
    desc: 'Transparent agreement with zero lock-in, clear deliverables, and defined operational SLAs.',
  },
  {
    step: '05',
    title: 'Asset & Stack Setup',
    timeline: 'Week 1–2',
    desc: 'Production of high-converting creatives, CAPI tracking integration, and campaign staging.',
  },
  {
    step: '06',
    title: 'Live Launch & Scale',
    timeline: 'Week 2+',
    desc: 'Full-throttle campaign deployment, live dashboard access, and weekly performance reviews.',
  },
]

export default function HomeCTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Onboarding Roadmap: What happens next after you contact us */}
        <div className="mb-16">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
              Operational Onboarding
            </p>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-highlighted">
              What happens next after you reach out
            </h2>
            <p className="mt-3 text-sm font-normal text-muted">
              A transparent, engineering-grade 6-step roadmap from initial discovery to live production.
            </p>
          </div>

          {/* Nuxt-Grade Module Cards Grid (6 Onboarding Steps) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onboardingSteps.map((step, index) => {
              const IconComponent = stepIcons[index] || MessageSquare
              return (
                <article
                  key={step.step}
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
                        Step 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                      {step.desc}
                    </p>
                  </div>

                  {/* Nuxt Module Card Telemetry Footer */}
                  <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                      <span className="inline-flex items-center gap-1" title="Execution Timeline">
                        <Download className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{step.timeline}</span>
                      </span>
                      <span className="inline-flex items-center gap-1" title="SLA Guarantee">
                        <Star className="h-3.5 w-3.5 text-zinc-400" />
                        <span>SLA</span>
                      </span>
                      <span className="inline-flex items-center gap-1" title="Operational Readiness">
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

        {/* Master Conversion Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.16] sm:p-10 md:p-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/60 before:to-transparent">
          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tight text-highlighted">
              Bring us the brief.
              <br />
              We will bring the system.
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <p className="max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
              Tell us what you are building, selling, launching, or fixing. We will shape the
              strategy, content, technology, and marketing path around it.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">Book a strategy call</PosterButton>
              <PosterButton href="/contact" variant="outline">
                Send a brief
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
