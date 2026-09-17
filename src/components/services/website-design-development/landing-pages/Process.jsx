import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your campaign goal, traffic source, and offer to define the single action the page needs to drive.',
  },
  {
    number: '02',
    title: 'Strategy & Message Planning',
    description: 'We map the page structure and messaging around your specific audience and define the scope before development starts.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Conversion-focused design comes first, with review checkpoints, followed by fast, lightweight development and tracking setup.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'Speed, mobile responsiveness, form/tracking functionality, and cross-browser testing before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We go live, confirm tracking and lead capture are working correctly, and walk you through next-step guidance.',
  },
]

const timelines = [
  { package: 'Launch Page', timeline: '3–5 business days', desc: 'Single-offer campaign page with focused copy and core lead capture.' },
  { package: 'Growth Page', timeline: '5–7 business days', desc: 'Expanded sections, CRM integration, and multi-event conversion tracking.' },
  { package: 'Campaign Build', timeline: '1.5–2 weeks', desc: 'Complex tracking, custom interactions, and multiple A/B testing variants.' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Speed & Execution"
          title="How We Approach a Landing Page Build"
        >
          Our process is built around speed and clarity, since campaign timing usually matters.
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

        {/* TIMELINE ROW */}
        <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-3">
          {timelines.map((item, idx) => (
            <div key={idx} className="bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Delivery Speed</span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">{item.package}</h4>
              <div className="mt-3 font-heading text-2xl font-bold text-frame-fg">{item.timeline}</div>
              <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
