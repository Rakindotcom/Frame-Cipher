import Link from 'next/link'
import { servicePillars } from '../../data/agency'
import { ArrowRight, Compass, TrendingUp, Sparkles, Video, Code2 } from 'lucide-react'

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

export default function AboutCapabilityMix() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
            Five engines. One rhythm.
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            The team structure is deliberately connected so strategy can shape production, production can feed campaigns, and data can sharpen the next build.
          </p>
        </div>

        {/* 5-Card Responsive Nuxt Grid (Modality B: Responsive Gap-6 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicePillars.map((pillar, index) => {
            const href = pillarLinks[pillar.title] || '/services'
            const Icon = pillarIcons[pillar.title] || Code2

            return (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex min-h-[320px] flex-col justify-between space-y-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold leading-tight text-highlighted">
                    <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                      {pillar.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-xl border border-white/[0.12] bg-[#18181B] px-4 text-xs font-medium text-white transition-all duration-200 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-white">
                    <span>Explore pillar</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
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
