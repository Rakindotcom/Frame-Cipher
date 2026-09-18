const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your current site (if any), your sales process, target customer persona, and where inquiries or leads are currently getting lost.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We map your site structure around your actual buyer journey, wireframe content hierarchies, and define the complete scope before development begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Bespoke UI/UX design comes first with review checkpoints, followed by clean frontend development and seamless CRM and marketing tool integrations.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'We rigorously test mobile responsiveness, page speed, form submissions, CRM data capture, and cross-browser performance before go-live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We deploy to production, verify live lead capture workflows, and provide tailored editorial training so your team can manage content with ease.',
  },
]

const timelines = [
  { package: 'Launch Kit', timeline: '1–2 weeks', scope: 'Up to 5 pages, core architecture, lead capture forms, speed & SEO optimization' },
  { package: 'Growth Build', timeline: '2–4 weeks', scope: 'Up to 15 pages, advanced architecture, CRM integration, conversion tracking' },
  { package: 'Enterprise Tech Build', timeline: '4–8+ weeks', scope: 'Up to 40+ pages, custom APIs, multi-system CRM, full event tracking' },
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
            Our process is built around complete visibility at every stage, not a black-box handoff at the end.
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

        {/* TIMELINE TABLE */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Delivery Expectations
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Typical Delivery Schedules
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
              Projects proceed rapidly when branding guidelines, core copy, and third-party access are ready during kickoff.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Package Tier</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.package}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.timeline}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
