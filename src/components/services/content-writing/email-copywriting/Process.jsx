import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '1',
    title: 'Initial Strategy & Audience Review',
    description:
      'We review the audience, offer, customer journey, existing email communication, and available performance information.',
  },
  {
    number: '2',
    title: 'Campaign & Sequence Planning',
    description: 'We define what each email needs to accomplish and how the messages connect.',
  },
  {
    number: '3',
    title: 'Subject Line & Message Development',
    description:
      'We develop subject lines, preview text, openings, body copy, proof, and CTAs as one communication system.',
  },
  {
    number: '4',
    title: 'Drafting & Refinement',
    description:
      'The copy is written around the agreed objective, audience, brand voice, and sequence structure.',
  },
  {
    number: '5',
    title: 'Review & Revision',
    description:
      'You review the draft and provide factual, strategic, or brand-level feedback. The agreed revision round is then incorporated before final delivery.',
  },
  {
    number: '6',
    title: 'Platform-Ready Delivery',
    description:
      'The final copy is delivered in an implementation-friendly format for your existing email platform or internal marketing workflow.',
  },
  {
    number: '7',
    title: 'Performance Feedback',
    description:
      'Where campaign data is available, future copy can be refined using meaningful performance indicators such as clicks, replies, conversions, unsubscribes, and other relevant metrics. Open rates can also be reviewed as a directional metric, but they should not be treated as the only measure of email performance.',
  },
]

export default function Process() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow" title="Our Email Copywriting Process">
          The purpose of the email is defined before the subject line is written, and the sequence is mapped before
          the drafting begins.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
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
