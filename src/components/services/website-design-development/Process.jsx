import { SectionIntro } from '../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Discovery and Consultation',
    description: 'We learn about your business, target audience, goals, and current website. We identify whether you need a new website, redesign, or platform migration.',
    deliverable: 'Project brief and initial requirements.',
  },
  {
    number: '02',
    title: 'Planning & Recommendation',
    description: 'We review your content needs, functionality, budget, and growth plans. We recommend a platform and outline the website structure.',
    deliverable: 'Sitemap, platform recommendation, and project scope.',
  },
  {
    number: '03',
    title: 'Proposal & Estimate',
    description: 'You receive a clear scope of work, estimated timeline, and quotation before development begins. We discuss what is included and what may require additional work.',
    deliverable: 'Project proposal and estimate.',
  },
  {
    number: '04',
    title: 'UI/UX Design & Development',
    description: 'We plan page layouts, create the visual design, and build the website. You review agreed milestones before we move to the next stage.',
    deliverable: 'Approved design and working website.',
  },
  {
    number: '05',
    title: 'Testing & Quality Check',
    description: 'We test the website across devices and browsers. We review mobile responsiveness, forms, functionality, and performance.',
    deliverable: 'Tested website and revision checklist.',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    description: 'We prepare the website for launch, publish it, and provide agreed handover guidance. We can also discuss maintenance and future improvements.',
    deliverable: 'Live website and handover materials.',
  },
]

const timelines = [
  { type: 'Landing Page', time: '1–2 weeks', note: 'Single-offer campaign page with conversion tracking setup' },
  { type: 'Business Website', time: '3–5 weeks', note: 'Multi-page conversion website with CMS and lead forms' },
  { type: 'eCommerce Website', time: '6–10 weeks', note: 'Full store build with payment gateways, inventory, and logistics' },
  { type: 'Website Redesign', time: '4–8 weeks', note: 'Rebuilding underperforming sites while preserving valuable SEO rankings' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our 6-Step Website Process"
        >
          We follow a clear process from the first consultation to launch and handover. The exact timeline depends on project scope, content readiness, and feedback.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {steps.map((step) => (
            <div key={step.number} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-semibold text-frame-fg">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-16 overflow-hidden border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Estimated Timeline</th>
                <th className="hidden md:table-cell p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Context</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{item.type}</td>
                  <td className="p-4 md:p-6 font-bold text-frame-accent">{item.time}</td>
                  <td className="hidden md:table-cell p-4 md:p-6 text-frame-muted-fg">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 border-t-2 border-frame-border pt-4">
          <p className="text-xs md:text-sm font-medium text-frame-muted-fg">
            * Complex integrations, custom applications, and large product catalogs may require additional time. Timelines commence once initial content and assets are provided.
          </p>
        </div>
      </div>
    </section>
  )
}
