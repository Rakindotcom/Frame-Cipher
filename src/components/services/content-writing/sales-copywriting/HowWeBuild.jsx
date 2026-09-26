import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Audience & Buying Situation',
    lead: 'We identify who the copy needs to persuade and what situation they are already in. That includes:',
    items: [
      'Buyer needs',
      'Pain points',
      'Desired outcomes',
      'Awareness level',
      'Purchase motivation',
      'Common questions',
      'Decision criteria',
      'Buying objections',
    ],
    note: 'A message written for an impulse purchase should not read like one written for a six-month B2B buying cycle.',
  },
  {
    number: '02',
    title: 'Problem, Stakes & Desired Outcome',
    lead: 'The problem needs to be specific enough to feel relevant. We establish:',
    items: [
      'What the buyer is struggling with',
      'Why the problem matters',
      'What happens if it remains unresolved',
      'What the buyer actually wants instead',
    ],
    note: 'We do not manufacture fear to create urgency. The stakes should come from the real business or customer situation.',
  },
  {
    number: '03',
    title: 'Offer & Value Proposition',
    lead: 'The product or service needs to make sense within the argument. We clarify:',
    items: [
      'What is being offered',
      'Who it is for',
      'What it helps the buyer accomplish',
      'How the offer works',
      'What makes it meaningfully different',
      'What the buyer receives',
      'What action they need to take',
    ],
    note: 'Features still matter. The job is to connect those features to the outcomes and use cases that matter to the intended buyer.',
  },
  {
    number: '04',
    title: 'Proof & Credibility',
    lead: 'Claims become stronger when the business can support them. Depending on what is available, we can work with:',
    items: [
      'Customer testimonials',
      'Case studies',
      'Verified results',
      'Product evidence',
      'Demonstrations',
      'Certifications',
      'Client quotes',
      'Relevant experience',
      'Data and documented outcomes',
    ],
    note: 'We do not invent proof to make a page sound more convincing.',
  },
  {
    number: '05',
    title: 'Objection Handling',
    lead: 'A prospect may understand the offer and still hesitate. Common objections can involve:',
    items: [
      'Price',
      'Risk',
      'Complexity',
      'Switching',
      'Implementation',
      'Trust',
      'Timing',
      'Suitability',
      'Internal approval',
      'Existing alternatives',
    ],
    note: 'We identify the objections that matter to the specific offer and address them where they naturally fit in the argument.',
  },
  {
    number: '06',
    title: 'CTA & Next-Step Strategy',
    lead: 'The final action should not be unclear. Depending on the buying situation, the CTA may ask the reader to:',
    items: [
      'Buy',
      'Book a consultation',
      'Request a quote',
      'Schedule a demo',
      'Start a trial',
      'Submit an inquiry',
      'Contact the sales team',
      'Request a proposal',
    ],
    note: 'The CTA is matched to the stage of the buying journey rather than forcing every visitor toward the same action.',
  },
]

export default function HowWeBuild() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Argument strategy" title="How We Build a Sales Argument">
          We do not start by choosing a copywriting formula. We start by understanding the buying decision.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {block.number}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                    {block.title}
                  </h3>
                </div>

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
      </div>
    </section>
  )
}
