import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '1',
    title: 'Offer & Audience Research',
    description:
      'We review the offer, target audience, existing messaging, available proof, competitors, and buying context.',
  },
  {
    number: '2',
    title: 'Argument Strategy',
    description:
      'We map the central case before drafting. This establishes the problem, stakes, solution, proof, objections, offer, and CTA.',
  },
  {
    number: '3',
    title: 'Copy Structure',
    description:
      'The argument is translated into the format required for the project. A sales page, proposal, pitch deck, and VSL each need different presentation and pacing.',
  },
  {
    number: '4',
    title: 'Drafting & Refinement',
    description:
      'We write the first complete version and refine the language for clarity, specificity, flow, and consistency.',
  },
  {
    number: '5',
    title: 'Client Review',
    description:
      'You review the draft against your business knowledge and offer details. Required factual corrections and agreed revisions are incorporated during the revision stage.',
  },
  {
    number: '6',
    title: 'Final Delivery',
    description:
      'The final copy is delivered in the agreed format and prepared for implementation, presentation, publication, or production.',
  },
  {
    number: '7',
    title: 'Performance Feedback',
    description:
      'Where performance data is available, future copy can be refined using actual customer and campaign feedback. Copy is only one part of the result, so performance analysis considers the offer, audience, traffic, pricing, page experience, and other relevant factors too.',
  },
]

export default function Process() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Workflow" title="Our Sales Copywriting Process">
          The argument is mapped before any copy is written, and the format is decided before the drafting
          begins.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-[#A855F7]">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
