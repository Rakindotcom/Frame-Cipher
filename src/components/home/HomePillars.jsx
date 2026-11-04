import Link from 'next/link'
import { servicePillars } from '../../data/agency'

const pillarLinks = {
  Strategy: '/services/content-creation/branding',
  Marketing: '/services/paid-advertising',
  Creative: '/services/content-creation',
  Media: '/services/content-creation/video-production',
  Technology: '/services/website-design-development',
}

export default function HomePillars() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      {/* Atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(141,167,184,0.06),transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One roof.{' '}
            <span className="italic text-frame-accent">
              No vendor drift.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Frame Cipher is built for teams that need the thinking, the assets, the platforms, and the campaign machine to behave like one system.
          </p>
        </div>

        {/* Architectural 5-Column Divided Band */}
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08] lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-5">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.02] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500 transition-colors duration-200 group-hover:text-frame-accent tabular-nums tracking-wider">
                  0{index + 1}
                </span>
                <h3 className="mt-8 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  <Link
                    href={pillarLinks[pillar.title] || '/services'}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {pillar.title}
                  </Link>
                </h3>
              </div>
              <p className="mt-8 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
