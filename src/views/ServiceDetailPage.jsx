import { portfolioProjects } from '../data/agency'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function ServiceDetailPage({ service }) {
  const relatedProjects = portfolioProjects
    .filter((project) => project.services.some((item) => service.title.includes(item) || item.includes(service.title.split(' ')[0])))
    .slice(0, 2)

  const fallbackProjects = relatedProjects.length > 0 ? relatedProjects : portfolioProjects.slice(0, 2)

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow={service.title}
        meta={`${service.process.length} step workflow / concrete deliverables`}
        number="01"
        title={service.headline}
        actions={
          <>
            <PosterButton href="/contact">{service.cta}</PosterButton>
            <PosterButton href="/projects" variant="outline">See our work</PosterButton>
          </>
        }
      >
        {service.subheadline}
      </PageHero>

      <TypeMarquee items={service.process} accent />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky top-28 self-start">
            <SectionIntro eyebrow="Service outcome" title="What this unlocks.">
              {service.description}
            </SectionIntro>
          </div>

          <div className="grid bg-frame-border gap-px md:grid-cols-2">
            {service.includes.map((item, index) => (
              <InversionCard key={item} title={item} number={String(index + 1).padStart(2, '0')} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-px bg-frame-border lg:grid-cols-2">
          <ListPanel title="Who it is for" items={service.audience} />
          <ListPanel title="Deliverables" items={service.deliverables} />
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Process" title="How the workflow moves.">
            A clear sequence keeps the service from becoming a loose pile of tasks.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-3 lg:grid-cols-6">
            {service.process.map((step, index) => (
              <article key={step} className="group min-h-64 bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent">
                <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-8 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Related work" title="Relevant project structures." />
          <div className="grid bg-frame-border gap-px md:grid-cols-2">
            {fallbackProjects.map((project, index) => (
              <article key={project.name} className="group bg-frame-bg">
                <div className="relative aspect-video overflow-hidden border-b-2 border-frame-border bg-frame-muted">
                  <img src={project.preview} alt={project.name} className="h-full w-full object-cover saturate-0 transition duration-300 group-hover:scale-105 group-hover:saturate-100" />
                  <p className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                    0{index + 1} / {project.category}
                  </p>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg">{project.description}</p>
                  <p className="mt-6 border-t-2 border-frame-border pt-5 text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
                    {project.scope}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to discuss ${service.title}?`} primaryText={service.cta}>
        Send the brief and Frame Cipher will help you shape the next strategic, creative, technical,
        or performance move.
      </CTASection>
    </main>
  )
}

function ListPanel({ title, items }) {
  return (
    <article className="bg-frame-bg p-7 md:p-10">
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        {title}
      </h2>
      <ul className="mt-10 grid gap-px bg-frame-border">
        {items.map((item) => (
          <li key={item} className="bg-frame-bg p-5 text-lg font-medium leading-tight text-frame-muted-fg md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
