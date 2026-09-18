const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your current site (if any), your sales process, and where leads are currently getting lost.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We map your site structure around your actual buyer journey and define the scope before development starts.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'UI/UX design comes first, with review checkpoints, followed by build and CRM/marketing-tool integration.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'Speed, mobile responsiveness, form/CRM functionality, and cross-browser testing before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We go live, confirm lead capture is working correctly, and walk you through next-step guidance.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Milestones & Governance / Step-by-Step
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Business Website Development Process
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our process is built around visibility at every stage, not a black-box handoff at the end.
          </p>
        </div>

        {/* STEP CARDS WITH WATERMARK */}
        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative overflow-hidden bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
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
