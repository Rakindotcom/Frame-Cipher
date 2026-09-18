import Link from 'next/link'
import { getServiceDisplayName } from '../../data/servicePages'
import { PosterButton, SectionIntro } from '../Kinetic'

export default function ServicesAllList({ pillarGroups }) {
  return (
    <section id="all-services" className="scroll-mt-24 border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="All 74 services" title="Choose the capability your brand needs next.">
            Browse every current service, grouped by the seven service areas that connect strategy,
            delivery, and measurable growth.
          </SectionIntro>
          <PosterButton href="/contact" variant="outline">Start a brief</PosterButton>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-8">
          {pillarGroups.map(({ pillar, name, summary, subServices }, pillarIndex) => (
            <section
              key={pillar.slug}
              id={pillar.slug}
              className="min-w-0 scroll-mt-24 border-2 border-frame-border bg-frame-bg"
            >
              <div className="grid min-w-0 grid-cols-1 gap-6 border-b-2 border-frame-border p-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:p-8">
                <span className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted" aria-hidden="true">
                  {String(pillarIndex + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 [overflow-wrap:anywhere]">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {subServices.length + 1} service pages
                  </p>
                  <h2 className="mt-2 font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
                    {name}
                  </h2>
                  <p className="mt-4 max-w-4xl text-sm font-medium leading-snug text-frame-muted-fg md:text-base">
                    {summary}
                  </p>
                </div>
                <Link
                  href={pillar.fullPath}
                  className="border-2 border-frame-border px-5 py-3 text-center text-xs font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                >
                  Explore this service &rarr;
                </Link>
              </div>

              <div className="grid gap-px bg-frame-border md:grid-cols-2 xl:grid-cols-3">
                {subServices.map((service, serviceIndex) => (
                  <Link
                    key={service.slug}
                    href={service.fullPath}
                    className="group flex min-h-32 flex-col justify-between bg-frame-bg p-6 transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent transition-colors group-hover:text-frame-accent-fg/70">
                        {String(serviceIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-black" aria-hidden="true">&rarr;</span>
                    </div>
                    <h3 className="mt-8 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent-fg sm:text-2xl md:text-3xl">
                      {getServiceDisplayName(service)}
                    </h3>
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
