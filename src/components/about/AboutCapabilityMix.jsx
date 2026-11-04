import Link from 'next/link'
import { servicePillars } from '../../data/agency'
import { ArrowRight } from 'lucide-react'

const pillarLinks = {
  Strategy: '/services/content-creation/branding',
  Marketing: '/services/paid-advertising',
  Creative: '/services/content-creation',
  Media: '/services/content-creation/video-production',
  Technology: '/services/website-design-development',
}

export default function AboutCapabilityMix() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            Five engines.{' '}
            <span className="italic text-frame-accent">
              One rhythm.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            The team structure is deliberately connected so strategy can shape production, production can feed campaigns, and data can sharpen the next build.
          </p>
        </div>

        {/* Modality 2: Architectural Divided Column Band (Continuum edge-to-edge band) */}
        <div className="border-t border-b border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-[#09090B]">
          {servicePillars.map((pillar, index) => {
            const href = pillarLinks[pillar.title] || '/services'
            return (
              <article
                key={pillar.title}
                className="group relative flex min-h-72 flex-col justify-between p-6 sm:p-7 space-y-6 transition-colors duration-200 hover:bg-[#121214]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs text-frame-accent tabular-nums">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  </div>

                  <h3 className="font-heading text-xl font-medium leading-tight text-white group-hover:text-frame-accent transition-colors">
                    <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                      {pillar.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.12] bg-[#18181B] px-5 text-xs font-medium text-white transition-all duration-200 group-hover:border-frame-accent/60 group-hover:bg-frame-accent group-hover:text-white">
                    <span>Explore pillar</span>
                    <ArrowRight className="h-3.5 w-3.5 text-frame-accent group-hover:text-white group-hover:translate-x-1 transition-all" />
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
