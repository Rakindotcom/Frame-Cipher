import { getServiceLandingContent, portfolioProjects } from '../data/agency'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function ServiceDetailPage({ service }) {
  const landing = getServiceLandingContent(service)
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
            <SectionIntro eyebrow="Search intent" title="The problems this page is built to solve.">
              {landing.problemIntro}
            </SectionIntro>
          </div>

          <div className="grid bg-frame-border gap-px md:grid-cols-2">
            {landing.problems.map((problem, index) => (
              <InversionCard key={problem.title} title={problem.title} number={String(index + 1).padStart(2, '0')}>
                <p>{problem.text}</p>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="What Frame Cipher does" title={service.description}>
            {landing.whatWeDo}
          </SectionIntro>
          <div className="grid gap-px bg-frame-border lg:grid-cols-2">
            <ListPanel title="Who it is for" items={service.audience} />
            <ListPanel title="What it includes" items={service.includes} />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Detailed deliverables" title="What you receive.">
            Concrete outputs keep the service practical, trackable, and easier for your team to use.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
            {landing.detailedDeliverables.map((item, index) => (
              <DetailCard key={item.title} title={item.title} number={String(index + 1).padStart(2, '0')}>
                {item.text}
              </DetailCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Process" title="How the workflow moves.">
            A clear sequence keeps the service from becoming a loose pile of tasks.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-3">
            {landing.process.map((step, index) => (
              <article key={step.title} className="group min-h-72 bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent">
                <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-8 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-2">
          <ListPanel title="Sample outputs" items={landing.sampleOutputs} />
          <ListPanel title="Keywords we can help target" items={landing.keywords} />
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-24 text-frame-accent-fg md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] opacity-80">Why Frame Cipher is different</p>
            <h2 className="mt-5 font-heading text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.82] tracking-tighter">
              Connected to brand, content, web, ads, and analytics.
            </h2>
          </div>
          <div className="grid gap-px bg-frame-accent-fg/30">
            <article className="bg-frame-accent p-7 md:p-10">
              <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter">Local relevance</h3>
              <p className="mt-5 text-lg font-medium leading-tight opacity-85">{landing.localRelevance}</p>
            </article>
            <article className="bg-frame-accent p-7 md:p-10">
              <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter">Related services</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {landing.relatedServices.map((relatedService) => (
                  <PosterButton key={relatedService.slug} href={`/services/${relatedService.slug}`} variant="dark" className="min-h-12 px-5 py-3 text-xs md:min-h-14 md:px-6 md:text-sm">
                    {relatedService.navTitle}
                  </PosterButton>
                ))}
              </div>
            </article>
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

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="FAQs" title={`Common questions about ${service.title}.`} />
          <div className="grid gap-px bg-frame-border">
            {landing.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
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

function DetailCard({ title, number, children }) {
  return (
    <article className="min-h-64 bg-frame-bg p-7">
      <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted">{number}</p>
      <h3 className="mt-8 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
        {title}
      </h3>
      <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg">{children}</p>
    </article>
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

function FAQItem({ question, answer }) {
  return (
    <article className="grid gap-4 bg-frame-bg p-7 md:grid-cols-[0.45fr_1fr] md:p-10">
      <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
        {question}
      </h3>
      <p className="text-base font-medium leading-tight text-frame-muted-fg md:text-lg">{answer}</p>
    </article>
  )
}
