const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your brand, audience, existing website, content structure, integrations, goals, and how your team plans to manage the site after launch.',
  },
  {
    number: '02',
    title: 'Content & CMS Planning',
    description: 'We define Collections, fields, relationships, reusable components, content requirements, and the publishing workflow.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We plan page hierarchy, responsive layouts, visual systems, interactions, and conversion paths before final development.',
  },
  {
    number: '04',
    title: 'Webflow Development',
    description: 'We build the approved design in Webflow, connect CMS content, implement components, configure interactions, and add agreed integrations or custom code.',
  },
  {
    number: '05',
    title: 'SEO, Accessibility & Performance QA',
    description: 'We review metadata, links, redirects, responsive behavior, forms, interactions, page performance, accessibility, and other agreed technical requirements.',
  },
  {
    number: '06',
    title: 'Client Review & Revisions',
    description: 'You review the project at defined checkpoints so major design, CMS, and functionality decisions are addressed before launch.',
  },
  {
    number: '07',
    title: 'Launch & CMS Handoff',
    description: 'We complete final launch checks, publish the website, provide the agreed access and documentation, and train your team on routine CMS management.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Delivery
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Webflow Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We structure the process around getting the content model and design system right before the final build is locked in.
          </p>
        </div>

        {/* STEPS GRID WITH UNIFORM ALIGNMENT */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:bg-frame-accent"
            >
              <p
                className="absolute -right-2 -top-4 select-none font-heading text-[7.5rem] sm:text-[9rem] font-bold leading-none tracking-tighter text-frame-muted/30 transition-colors duration-300 group-hover:text-frame-accent-fg/20"
                aria-hidden="true"
              >
                {step.number}
              </p>
              <div className="relative z-10">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  Phase {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
