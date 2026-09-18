const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We learn about your business, audience, content needs, current website, and the functionality your WordPress site requires.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the site structure, content hierarchy, theme approach, plugin requirements, integrations, and technical scope before development begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'We create the approved design and build the WordPress website, including theme development, page-builder setup, custom functionality, plugin configuration, and integrations where required.',
  },
  {
    number: '04',
    title: 'Security & Performance Testing',
    description: 'We review security settings, responsive behavior, functionality, loading performance, forms, integrations, and browser compatibility before launch.',
  },
  {
    number: '05',
    title: 'Content Integration & Review',
    description: 'We add or organize the agreed content and give you review checkpoints so you can confirm the design, functionality, and page structure before launch.',
  },
  {
    number: '06',
    title: 'Launch & Editorial Handover',
    description: 'We publish the website, complete final checks, provide agreed access, and guide your team through routine content management and supported WordPress features.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Milestones
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our WordPress Development Process
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We follow a clear process from initial consultation to launch and editorial handover. The exact workflow depends on your website type, functionality, content requirements, and project scope.
          </p>
        </div>

        {/* STEP CARDS IN UNIFORM GRID */}
        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative overflow-hidden bg-frame-bg p-7 md:p-10 flex flex-col justify-between min-h-[260px]">
              <span 
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[7rem] md:text-[8rem] font-bold leading-none tracking-tighter text-frame-muted/30 select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
