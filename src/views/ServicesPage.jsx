import Link from 'next/link'
import { engagementModels } from '../data/agency'
import {
  getAllServicePages,
  getPillarServices,
  getServiceDisplayName,
  getServiceSummary,
  getSubServicesForPillar,
} from '../data/servicePages'
import { GrowthOSServices } from '../components/GrowthOS'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

const allServices = getAllServicePages()
const pillarGroups = getPillarServices().map((pillar) => ({
  pillar,
  name: getServiceDisplayName(pillar),
  summary: getServiceSummary(pillar),
  subServices: getSubServicesForPillar(pillar.slug),
}))

export default function ServicesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Services"
        meta={`${allServices.length} services / ${pillarGroups.length} core pillars / one operating system`}
        number={String(allServices.length)}
        title="Every service your brand needs, connected under one roof"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">See the work</PosterButton>
          </>
        }
      >
        From websites and apps to search, paid media, social, writing, and production, every service
        is connected to one accountable growth system.
      </PageHero>

      <GrowthOSServices />

      <TypeMarquee items={pillarGroups.map((group) => group.name)} slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Core architecture" title="Seven pillars carrying the work.">
            Start with one specialist service or connect several pillars into a single delivery system.
            Every route below leads to a dedicated service team, process, and scope.
          </SectionIntro>

          <div className="grid gap-px bg-frame-border md:grid-cols-2 xl:grid-cols-4">
            {pillarGroups.map(({ pillar, name, summary, subServices }, index) => (
              <InversionCard
                key={pillar.slug}
                href={pillar.fullPath}
                eyebrow={`${subServices.length} specialist services`}
                title={name}
                number={String(index + 1).padStart(2, '0')}
              >
                <p>{summary}</p>
                <span className="mt-8 inline-block border-b-2 border-current pb-1 text-sm font-black uppercase tracking-tighter">
                  Explore pillar &rarr;
                </span>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="all-services" className="scroll-mt-24 border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionIntro eyebrow="All 74 services" title="Choose the capability your brand needs next.">
              Browse every current service, grouped by the seven pillars that connect strategy,
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
                    <h3 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                      {name}
                    </h3>
                    <p className="mt-4 max-w-4xl text-sm font-medium leading-snug text-frame-muted-fg md:text-base">
                      {summary}
                    </p>
                  </div>
                  <Link
                    href={pillar.fullPath}
                    className="border-2 border-frame-border px-5 py-3 text-center text-xs font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                  >
                    Pillar overview &rarr;
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
                      <h4 className="mt-8 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent-fg md:text-2xl">
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

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Engagement models" title="Pick the pressure level.">
            The model changes around the stage of the business and the amount of execution the team needs.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px lg:grid-cols-5">
            {engagementModels.map((model) => (
              <article key={model.title} className="bg-frame-bg p-7">
                <h3 className="font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-2xl">
                  {model.title}
                </h3>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Best for</p>
                <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.bestFor}</p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Includes</p>
                <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.includes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need the whole system or just the sharpest next part?">
        Tell us what is blocking growth. We will help decide whether your next move is strategy, content,
        software, campaigns, or the full operating loop.
      </CTASection>
    </main>
  )
}
