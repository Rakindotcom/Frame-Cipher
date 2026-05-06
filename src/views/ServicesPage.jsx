import { engagementModels, servicePillars, services } from '../data/agency'
import { GrowthOSServices } from '../components/GrowthOS'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function ServicesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Services"
        meta={`${services.length} service engines / one operating system`}
        number="12"
        title="Strategy, media, software, and growth under one roof"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">See the work</PosterButton>
          </>
        }
      >
        Frame Cipher helps brands move from scattered execution to an integrated growth system:
        positioning, content, production, websites, software, campaigns, and optimization.
      </PageHero>

      <GrowthOSServices />

      <TypeMarquee items={services.map((service) => service.navTitle)} slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Core architecture" title="Five pillars carrying the work.">
            Each service can stand alone, but the real force appears when strategy, creative, media,
            technology, and performance run in the same direction.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-5">
            {servicePillars.map((pillar, index) => (
              <InversionCard key={pillar.title} title={pillar.title} number={`0${index + 1}`}>
                <p>{pillar.description}</p>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionIntro eyebrow="Service architecture" title="Choose the system your brand needs next." />
            <PosterButton href="/contact" variant="outline">Start a brief</PosterButton>
          </div>

          <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <InversionCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow={service.navTitle}
                title={service.title}
                number={String(index + 1).padStart(2, '0')}
              >
                <p>{service.description}</p>
                <span className="mt-8 inline-block border-b-2 border-current pb-1 text-sm font-black uppercase tracking-tighter">
                  {service.cta}
                </span>
              </InversionCard>
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
