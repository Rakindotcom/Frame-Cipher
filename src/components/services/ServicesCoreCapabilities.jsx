import Link from 'next/link'
import { servicePillars } from '../../data/agency'
import { Compass, TrendingUp, Sparkles, Video, Code2, Layers } from 'lucide-react'

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

export default function ServicesCoreCapabilities() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One team across five{' '}
            <span className="text-white">
              core capabilities.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Most projects need more than one skill. Frame Cipher keeps marketing, creative, media,
            and technology under one roof so nothing gets lost between partners.
          </p>
        </div>

        {/* Nuxt-Grade Modality B Card Grid with Real Gutters */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => {
            const IconComponent = pillarIcons[pillar.title] || Sparkles
            return (
              <article
                key={pillar.title}
                className="group relative flex min-h-64 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 overflow-hidden md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <IconComponent
                      className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110 shrink-0"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                      Engine 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200">
                      <Link
                        href={pillarLinks[pillar.title] || '/services'}
                        className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                      >
                        {pillar.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[1.1px]">
                  <span className="text-zinc-500">Capability Detail</span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-400 group-hover:text-purple-400 transition-colors">
                    <span>Explore</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </article>
            )
          })}

          {/* 6th Tile: Full 360 System Card */}
          <Link
            href="/contact"
            className="group relative flex min-h-64 flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#18181B] p-7 transition-all duration-300 hover:border-purple-500/60 hover:bg-[#1f1f23] hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-500 before:to-transparent overflow-hidden md:p-8 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <div>
              <div className="flex items-center justify-between gap-5">
                <Layers className="h-6 w-6 text-purple-400 shrink-0" strokeWidth={1.9} aria-hidden="true" />
                <span className="font-mono text-xs text-zinc-400 tabular-nums">
                  /06
                </span>
              </div>
              <div className="mt-5">
                <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                  Full 360 System
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200">
                  Need it all?
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  Unify all five capabilities under one accountable roadmap and one cohesive team.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[1.1px]">
              <span className="text-white">Start a Project</span>
              <span className="text-white transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
