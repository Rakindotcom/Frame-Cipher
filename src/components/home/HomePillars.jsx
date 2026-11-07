import Link from 'next/link'
import { Compass, TrendingUp, Sparkles, Video, Code2, Download, Star, Activity } from 'lucide-react'
import { servicePillars } from '../../data/agency'

const pillarLinks = {
  Strategy: '/services/content-creation/branding',
  Marketing: '/services/paid-advertising',
  Creative: '/services/content-creation',
  Media: '/services/content-creation/video-production',
  Technology: '/services/website-design-development',
}

const pillarIcons = {
  Strategy: Compass,
  Marketing: TrendingUp,
  Creative: Sparkles,
  Media: Video,
  Technology: Code2,
}

const pillarTelemetry = {
  Strategy: { speed: 'GTM', tag: 'Audit', score: '100' },
  Marketing: { speed: 'Scale', tag: 'Paid/SEO', score: '99' },
  Creative: { speed: 'Vector', tag: 'Identity', score: '100' },
  Media: { speed: '4K/Pro', tag: 'Studio', score: '98' },
  Technology: { speed: 'Next.js', tag: 'Fullstack', score: '100' },
}

export default function HomePillars() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      {/* Atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.08),transparent_70%)]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            One roof. No vendor drift.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
            Frame Cipher is built for teams that need the thinking, the assets, the platforms, and the campaign machine to behave like one system.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((pillar, index) => {
            const IconComponent = pillarIcons[pillar.title] || Sparkles
            const stats = pillarTelemetry[pillar.title] || { speed: 'System', tag: 'Core', score: '100' }
            const href = pillarLinks[pillar.title] || '/services'

            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  {/* Top Row: Iconic Accent (Deep Purple, bare on dark canvas) & Sequence */}
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

                  {/* Title with full card hit area */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    <Link
                      href={href}
                      className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
                    >
                      {pillar.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                    {pillar.description}
                  </p>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Execution Speed">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{stats.speed}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Capability Focus">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{stats.tag}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Integration Readiness">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>{stats.score}</span>
                    </span>
                  </div>

                  {/* Terminal CLI prompt pill */}
                  <span
                    className="flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors"
                    aria-hidden="true"
                  >
                    &gt;_
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
