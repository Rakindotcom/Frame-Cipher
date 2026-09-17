import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Milestones & Governance"
          title="Our Business Website Development Process"
        >
          Our process is built around visibility at every stage, not a black-box handoff at the end.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="bg-frame-bg p-7 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
