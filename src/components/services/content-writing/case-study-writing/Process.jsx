import { SectionIntro } from '../../../Kinetic'

const reviewChecks = [
  'Accuracy',
  'Clarity',
  'Narrative flow',
  'Data consistency',
  'Quote accuracy',
  'Brand alignment',
  'Reader relevance',
]

const steps = [
  {
    number: '1',
    title: 'Story Selection & Scoping',
    description:
      'We identify the customer story, define the intended audience, establish the key outcome, and determine what evidence is available. We also clarify the intended use of the case study.',
  },
  {
    number: '2',
    title: 'Interviews & Research',
    description:
      'We conduct structured interviews with the customer and relevant internal team members. We gather project details, results, timelines, quotes, and supporting information.',
  },
  {
    number: '3',
    title: 'Story Development & Drafting',
    description:
      "We organize the research into a clear narrative. The draft connects the customer's challenge, solution, process, and outcome without turning the story into a generic sales pitch.",
  },
  {
    number: '4',
    title: 'Review, Fact-Checking & Revisions',
    description: 'We review the draft before delivery, and your feedback is incorporated during the agreed revision stage.',
    checks: reviewChecks,
  },
  {
    number: '5',
    title: 'Client Approval & Final Delivery',
    description:
      'Where customer approval is required, we coordinate the review process. Once the necessary approvals are complete, we deliver the final case study in the agreed format. Additional content adaptations can be included based on the project scope.',
  },
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow" title="Our Case Study Writing Process">
          Every project follows a structured process from story selection through approval.
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

              {step.checks && (
                <ul className="mt-5 border-t-2 border-frame-border pt-4">
                  {step.checks.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 py-1 text-sm font-medium leading-relaxed text-frame-fg"
                    >
                      <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
