import Link from 'next/link'
import { getServiceDisplayName } from '../../data/servicePages'
import PosterButton from '../home/PosterButton'

export default function ServicesAllList({ pillarGroups = [] }) {
  return (
    <section
      id="all-services"
      className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Everything you need to{' '}
              <span className="text-white">
                build, market &amp; grow.
              </span>
            </h2>
            <p className="mt-5 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Browse every current service, grouped by the seven service areas that connect strategy,
              delivery, and measurable growth.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Start a brief
            </PosterButton>
          </div>
        </div>

        {/* 7 Pillar Blocks */}
        <div className="space-y-10">
          {pillarGroups.map(({ pillar, name, summary, subServices }, pillarIndex) => (
            <section
              key={pillar.slug}
              id={pillar.slug}
              className="scroll-mt-24 rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden shadow-2xl"
            >
              {/* Pillar Header Band */}
              <div className="grid gap-6 border-b border-white/[0.08] bg-[#18181B] p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
                <span
                  className="font-mono text-4xl sm:text-5xl font-medium text-zinc-500 tabular-nums"
                  aria-hidden="true"
                >
                  /{String(pillarIndex + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 font-medium tabular-nums">
                    {subServices.length + 1} service pages
                  </p>
                  <h3 className="mt-2 font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                    {name}
                  </h3>
                  <p className="mt-2.5 max-w-3xl text-sm font-normal leading-relaxed text-zinc-400">
                    {summary}
                  </p>
                </div>
                <div className="shrink-0">
                  <PosterButton href={pillar.fullPath} variant="outline" className="w-full sm:w-auto">
                    Explore this service
                  </PosterButton>
                </div>
              </div>

              {/* Subservices Modular Card Grid (Modality B) */}
              <div className="p-6 sm:p-8 bg-[#121214] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subServices.map((service, serviceIndex) => (
                  <Link
                    key={service.slug}
                    href={service.fullPath}
                    className="group relative flex min-h-28 flex-col justify-between rounded-xl border border-white/[0.08] bg-[#18181B] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#202024] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 tabular-nums font-medium">
                        {String(serviceIndex + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-purple-400"
                      >
                        &rarr;
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base sm:text-lg font-medium tracking-tight text-white transition-colors duration-200">
                      {getServiceDisplayName(service)}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
