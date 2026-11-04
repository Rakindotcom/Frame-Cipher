import Link from 'next/link'
import { servicePillars } from '../../data/agency'

const pillarLinks = {
  Strategy: '/services/content-creation/branding',
  Marketing: '/services/paid-advertising',
  Creative: '/services/content-creation',
  Media: '/services/content-creation/video-production',
  Technology: '/services/website-design-development',
}

export default function ServicesCoreCapabilities() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One team across five{' '}
            <span className="italic text-frame-accent">
              core capabilities.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Most projects need more than one skill. Frame Cipher keeps marketing, creative, media,
            and technology under one roof so nothing gets lost between partners.
          </p>
        </div>

        {/* 2x3 Architectural Blueprint Matrix (Modality 3) */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative flex min-h-64 flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#18181B] text-frame-accent border border-white/[0.08]">
                    Engine 0{index + 1}
                  </span>
                  <span className="font-mono text-sm font-medium tabular-nums text-zinc-500">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent md:text-3xl">
                  <Link
                    href={pillarLinks[pillar.title] || '/services'}
                    className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent rounded"
                  >
                    {pillar.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[1.1px]">
                <span className="text-zinc-500">Capability Detail</span>
                <span className="inline-flex items-center gap-1.5 text-zinc-400 group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </article>
          ))}

          {/* 6th Tile: Full 360 System Card */}
          <Link
            href="/contact"
            className="group flex min-h-64 flex-col justify-between bg-[#18181B] p-7 transition-colors duration-200 hover:bg-[#1f1f23] md:p-8 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            <div>
              <div className="flex items-center justify-between gap-5">
                <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#27272A] text-frame-accent border border-white/[0.08]">
                  Full 360 System
                </span>
                <span className="font-mono text-sm font-medium tabular-nums text-zinc-400">
                  /06
                </span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent md:text-3xl">
                Need it all?
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                Unify all five capabilities under one accountable roadmap and one cohesive team.
              </p>
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
