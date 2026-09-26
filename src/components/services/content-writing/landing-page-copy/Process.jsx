import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '1',
    title: 'Discovery & Research',
    description:
      'We review your offer, audience, traffic source, existing materials, competitors, and conversion goal.',
  },
  {
    number: '2',
    title: 'Offer and Message Strategy',
    description:
      'We define the core value proposition, supporting benefits, objections, proof, and CTA direction.',
  },
  {
    number: '3',
    title: 'Page Structure',
    description: 'We map the sections and information sequence before writing the complete page.',
  },
  {
    number: '4',
    title: 'Copywriting',
    description: 'We write the landing page around the agreed strategy, audience, offer, and traffic source.',
  },
  {
    number: '5',
    title: 'Review & Revision',
    description:
      'You review the copy and provide feedback. We refine the agreed content within the included revision scope.',
  },
  {
    number: '6',
    title: 'Launch & Optimization Support',
    description:
      'Where included, we can support copy variants and ongoing refinement after launch. Testing setup, analytics implementation, development, and campaign management are scoped separately where required.',
  },
]

export default function Process() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow" title="Our Landing Page Copywriting Process">
          The process is structured so that the messaging is decided before the writing begins.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
