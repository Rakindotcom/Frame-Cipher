export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We review your product, audience, business goals, technical context, and the actions users need to complete.',
    },
    {
      number: '02',
      title: 'Research & Flow Mapping',
      description: 'We define user journeys, important task flows, project requirements, and scope before wireframing begins.',
    },
    {
      number: '03',
      title: 'Wireframing & Prototyping',
      description: 'We create low-fidelity wireframes, refine the structure through review, and build interactive prototypes for important journeys.',
    },
    {
      number: '04',
      title: 'Visual Design & Interaction',
      description: 'We turn approved wireframes into high-fidelity interfaces, define interaction patterns, and create reusable components.',
    },
    {
      number: '05',
      title: 'Testing & Refinement',
      description: 'Where included, we test prototypes with real or representative users, review available evidence, and refine the experience based on findings.',
    },
    {
      number: '06',
      title: 'Handoff & Development Support',
      description: 'We organize final design files, specifications, assets, and component references for development and provide implementation support where included.',
    },
  ]

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Methodology
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            How We Approach a UI/UX Design Project
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our process is designed to validate structure and important user decisions before the final visual direction is locked in.
          </p>
        </div>

        {/* 6 STEPS UNIFORM WATERMARK GRID */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
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
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
