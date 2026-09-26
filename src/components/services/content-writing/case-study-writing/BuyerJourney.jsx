import { SectionIntro, PosterButton } from '../../../Kinetic'

const stages = [
  {
    number: '01',
    title: 'Building Awareness With Relevant Proof',
    text: "A prospect may recognize the customer's problem before they understand your solution. A relevant case study gives them a real-world example they can relate to.",
  },
  {
    number: '02',
    title: 'Addressing Objections During Evaluation',
    lead: 'Prospects may wonder:',
    items: [
      'Has this worked for a business like mine?',
      'Can the solution handle this type of problem?',
      'What does implementation actually involve?',
      'How long did it take?',
      'What kind of result is realistic?',
      'What challenges appeared along the way?',
    ],
    text: 'A detailed customer story can provide useful evidence for those conversations.',
  },
  {
    number: '03',
    title: 'Supporting Sales Conversations',
    text: 'Sales teams can use case studies to demonstrate relevant experience instead of making unsupported claims. The right story can become a practical asset for proposals, discovery calls, follow-ups, presentations, and decision-stage conversations.',
  },
  {
    number: '04',
    title: 'Reinforcing the Final Buying Decision',
    text: 'When prospects are comparing options, real customer outcomes can help them understand what working with your company may actually look like.',
  },
]

export default function BuyerJourney() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Buyer journey" title="How Case Studies Support the Buyer Journey">
          A case study becomes more valuable when it answers the questions prospects actually have.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {stages.map((stage) => (
            <article key={stage.number} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                {stage.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {stage.title}
              </h3>

              {stage.lead && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{stage.lead}</p>
              )}

              {stage.text && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{stage.text}</p>
              )}

              {stage.items && (
                <ul className="mt-4 space-y-2">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                    >
                      <span aria-hidden="true" className="mt-1 text-frame-accent">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strongest case study is therefore not simply a marketing story. It is a piece of evidence that
            supports the buying decision.
          </p>
          <div className="shrink-0">
            <PosterButton href="/services/content-writing/sales-copywriting" variant="outline">
              Explore Sales Copywriting &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
