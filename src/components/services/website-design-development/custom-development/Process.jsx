const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We understand your business model, users, workflows, existing systems, technical requirements, integrations, and project goals.',
  },
  {
    number: '02',
    title: 'Technical Assessment',
    description: 'We determine whether Next.js and custom development are actually appropriate and define the major technical requirements.',
  },
  {
    number: '03',
    title: 'Architecture & UX Planning',
    description: 'We map user flows, system architecture, data structures, integrations, application components, and key technical dependencies.',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'We design the interface and reusable components around actual application workflows and user requirements.',
  },
  {
    number: '05',
    title: 'Development & Integration',
    description: 'We build the frontend, backend, database connections, APIs, authentication, integrations, and custom functionality.',
  },
  {
    number: '06',
    title: 'Testing & Optimization',
    description: 'We test functionality, responsiveness, security, performance, accessibility, and critical user workflows.',
  },
  {
    number: '07',
    title: 'Deployment & Launch',
    description: 'We prepare the production environment, deploy the application, complete final checks, and monitor the launch.',
  },
  {
    number: '08',
    title: 'Handover & Ongoing Development',
    description: 'We provide the agreed access, documentation, and guidance, with ongoing development available for future improvements.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Delivery
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Next.js Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our process is designed to reduce uncertainty before expensive development decisions are made.
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
