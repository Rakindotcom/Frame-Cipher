import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Sales Page & Long-Form Copy',
    lead: 'For offers that require more explanation before a prospect is ready to act. We can develop:',
    items: [
      'Sales page copy',
      'Long-form offer pages',
      'Product or service sales pages',
      'Launch and campaign pages',
      'Offer-page sections',
      'Benefit and value-proposition copy',
      'Objection-handling sections',
      'Proof and testimonial placement',
      'Offer and CTA messaging',
    ],
    note: 'The structure depends on the offer, audience awareness, price, complexity, and amount of proof available.',
  },
  {
    number: '02',
    title: 'Offer & Persuasion Copy',
    lead: 'Sometimes the problem is not the writing. The offer itself may be difficult to understand or differentiate. We help clarify:',
    items: [
      'Core value proposition',
      'Customer problem and desired outcome',
      'Feature-to-benefit messaging',
      'Differentiators',
      'Offer positioning',
      'Supporting proof',
      'Objections and responses',
      'Risk-reduction messaging',
      'Primary and secondary calls to action',
    ],
    note: 'This gives the final copy a stronger strategic foundation before individual sections are written.',
  },
  {
    number: '03',
    title: 'Proposal & Pitch Deck Copy',
    lead: 'A proposal or pitch deck has to make a business case quickly. We structure proposals and decks around the information a decision-maker needs to evaluate the offer. This can include:',
    items: [
      'Executive summary',
      'Client problem and opportunity',
      'Proposed solution',
      'Business benefits',
      'Differentiation',
      'Relevant proof',
      'Scope and deliverables',
      'Commercial value',
      'Objection handling',
      'Next-step messaging',
    ],
    note: 'For B2B work, the argument is adapted to the buying committee, sales process, and decision context.',
  },
  {
    number: '04',
    title: 'Video Sales Letter & Sales Scripts',
    lead: 'Sales arguments do not always need to be read. For video-based offers, we write the argument as spoken communication and account for pacing, visuals, and the transition toward the CTA. Deliverables can include:',
    items: [
      'VSL scripts',
      'Sales video scripts',
      'Opening hooks',
      'Spoken value propositions',
      'Proof and testimonial sections',
      'Objection-handling segments',
      'Visual and on-screen notes',
      'CTA scripting',
    ],
    note: 'The final script can be prepared for an in-house production team or coordinated with a separate video production workflow.',
  },
  {
    number: '05',
    title: 'Direct-Response & Sales Collateral',
    lead: 'Sales copy can also support offline and direct-response campaigns. Depending on the project, this may include:',
    items: [
      'One-pagers',
      'Brochures',
      'Sales letters',
      'Direct-response materials',
      'Offer sheets',
      'Campaign collateral',
      'Sales presentation copy',
    ],
    note: 'The format changes, but the underlying goal remains the same: communicate the offer clearly and make the next action obvious.',
  },
  {
    number: '06',
    title: 'Sales Enablement Copy',
    lead: 'Your sales team should not have to rebuild the same argument during every conversation. We can adapt core sales messaging into practical materials such as:',
    items: [
      'Sales decks',
      'Battlecard content',
      'Objection-response documents',
      'Product or service talking points',
      'Executive summaries',
      'Follow-up messaging',
      'Sales conversation support materials',
    ],
    note: 'Where appropriate, these assets can be developed from the same research and proof used in the primary sales copy.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & scope" title="What Sales Copywriting Includes">
          Sales copy can live in many places across a buying journey. The format changes, but the underlying
          argument should remain clear and consistent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {block.lead}
                </p>

                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
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
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Not sure which format your offer needs? Start with the format and the decision it has to support.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Sales Copywriting Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
