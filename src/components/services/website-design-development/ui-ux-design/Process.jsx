const steps = [
  {
    number: '01',
    title: 'Initial Consultation & Strategy',
    description: 'We review your product vision, target audience personas, business goals, and what users need to accomplish effortlessly.',
  },
  {
    number: '02',
    title: 'User Research & Flow Mapping',
    description: 'We map user journeys, friction points, and key conversion task flows, defining information architecture before drafting wireframes.',
  },
  {
    number: '03',
    title: 'Wireframing & Prototyping',
    description: 'Low-fidelity wireframes come first with stakeholder review checkpoints, followed by clickable interactive Figma prototypes.',
  },
  {
    number: '04',
    title: 'Visual Design & Usability Testing',
    description: 'High-fidelity UI design built on validated structure, tested with real representative users to eliminate friction before code.',
  },
  {
    number: '05',
    title: 'Handoff & Development Support',
    description: 'We deliver comprehensive Figma tokens, responsive layout specs, component variants, and stay available to support frontend engineering.',
  },
]

const timelines = [
  { type: 'Single Flow / Landing Page', time: '~1 week', scope: 'One key user conversion flow, up to 5 mobile & desktop screens' },
  { type: 'Website UI/UX Package', time: '~2–3 weeks', scope: 'Full site design, up to 15 screens, wireframes to high-fidelity UI' },
  { type: 'Application / Product Design', time: '~4–6 weeks', scope: 'Multiple user flows, design system library, prototype usability testing' },
  { type: 'Complex / Multi-Role Product', time: '~6–10+ weeks', scope: 'Multiple user permission types, extensive flows, ongoing design system' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Delivery
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Structured UI/UX Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We guide your digital product from user psychology and wireframes through to clickable validation and dev-ready component handoff.
          </p>
        </div>

        {/* STEPS GRID WITH WATERMARK NUMBERS */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-2 border-frame-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:bg-frame-accent"
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
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-16 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{item.type}</td>
                  <td className="p-5 md:p-7 font-bold text-frame-accent">{item.time}</td>
                  <td className="p-5 md:p-7 text-sm text-frame-muted-fg leading-relaxed">{item.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

