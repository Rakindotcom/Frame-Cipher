import { SectionIntro } from '../../../Kinetic'

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
    description: 'We create the approved design and build the WordPress website, including theme development, custom blocks, and plugin configuration.',
  },
  {
    number: '04',
    title: 'Security & Performance Testing',
    description: 'We review security settings, responsive behavior, functionality, loading performance, forms, integrations, and browser compatibility.',
  },
  {
    number: '05',
    title: 'Content Integration & Review',
    description: 'We add and organize the agreed content, providing you with review checkpoints so you can confirm design and functionality before launch.',
  },
  {
    number: '06',
    title: 'Launch & Editorial Handover',
    description: 'We publish the website, complete final checks, provide full administrator access, and guide your team through routine content management.',
  },
]

const timelines = [
  { type: 'Blog / Portfolio', time: '1–2 weeks' },
  { type: 'Business Website', time: '2–3 weeks' },
  { type: 'E-commerce Store', time: '4–6 weeks' },
  { type: 'Membership / Directory Site', time: '5–8 weeks' },
  { type: 'Migration / Complex Custom Build', time: '5–10+ weeks' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our WordPress Development Process"
        >
          We follow a clear process from initial consultation to launch and editorial handover.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-16 overflow-hidden border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{item.type}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
