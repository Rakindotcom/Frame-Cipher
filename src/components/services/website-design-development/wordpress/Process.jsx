import { PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We learn about your business, audience, content requirements, current website pain points, and the functionality your WordPress site needs to support.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the site structure, content hierarchy, custom theme vs page builder approach, plugin requirements, integrations, and technical scope before development begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'We create the approved design and build the WordPress website, including custom themes, modular Gutenberg blocks, custom post types, and third-party integrations.',
  },
  {
    number: '04',
    title: 'Security & Performance Testing',
    description: 'We audit security configurations, mobile responsiveness across devices, checkout flows, sub-second caching, database indexing, and browser compatibility.',
  },
  {
    number: '05',
    title: 'Content Integration & Review',
    description: 'We add and organize your live content, providing structured review checkpoints so you can test and confirm design, layout, and forms before deployment.',
  },
  {
    number: '06',
    title: 'Launch & Editorial Handover',
    description: 'We publish the website to production, run live DNS and SSL verification, provide complete administrator credentials, and train your team on managing content.',
  },
]

const timelines = [
  { type: 'Blog / Portfolio', time: '1–2 weeks', scope: 'Standard content structure, custom theme or clean builder setup' },
  { type: 'Business Website', time: '2–3 weeks', scope: 'Multi-page architecture, lead capture, CRM setup, service pages' },
  { type: 'E-commerce Store (WooCommerce)', time: '4–6 weeks', scope: 'Product catalog, payment gateway integration, shipping rules, tax' },
  { type: 'Membership / Directory Site', time: '5–8 weeks', scope: 'User profiles, access permissions, subscription billing, filters' },
  { type: 'Migration / Complex Custom Build', time: '5–10+ weeks', scope: 'Full database migration, custom plugin logic, SEO 301 preservation' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Milestones / Step-by-Step
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our WordPress Development Process
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A battle-tested 6-step workflow that ensures precision, performance, and transparent milestones from initial architecture to editorial handover.
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
              Typical Project Delivery Schedules
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
              Projects move faster when content, branding assets, and technical access are provided upfront.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.type}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.time}</td>
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
