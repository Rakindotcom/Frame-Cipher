import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Traffic-to-Message Match',
    body: [
      'We start by confirming who is arriving, why they are there, and what they already expect from the ad or source that sent them.',
    ],
    bullets: ['Audience', 'Intent', 'Source', 'Existing expectation'],
  },
  {
    number: '02',
    title: 'Headline &amp; Value Proposition',
    body: [
      'The headline communicates the offer and the main benefit in the clearest possible terms, supported by a subheadline that adds useful context.',
    ],
    bullets: ['Offer clarity', 'Primary benefit', 'Audience relevance'],
  },
  {
    number: '03',
    title: 'Benefits &amp; Offer Explanation',
    body: [
      'We explain what the offer includes, who it is for, and what the visitor is likely to gain, in benefit-led language rather than feature lists.',
    ],
    bullets: ['Included elements', 'Who it suits', 'Outcomes', 'Use cases'],
  },
  {
    number: '04',
    title: 'Proof &amp; Trust Signals',
    body: [
      'Testimonials, results, client names, credentials, or other proof are placed where they support the claim being made and where hesitation is most likely.',
    ],
    bullets: ['Testimonials', 'Results', 'Credentials', 'Logos or case evidence'],
  },
  {
    number: '05',
    title: 'Objections &amp; Risk Reduction',
    body: [
      'Common concerns about cost, time, fit, trust, or switching are addressed directly rather than left for the visitor to work out alone.',
    ],
    bullets: ['Cost concern', 'Time commitment', 'Fit', 'Risk reversal'],
  },
  {
    number: '06',
    title: 'CTA &amp; Conversion Path',
    body: [
      'The primary action is made clear, repeated where it is useful, and paired with microcopy that sets expectations about what happens next.',
    ],
    bullets: ['Primary CTA', 'Secondary CTA', 'Form expectations', 'Next-step clarity'],
  },
  {
    number: '07',
    title: 'Final Decision Section',
    body: [
      'The closing section gives the visitor a reason to act now, in language that is consistent with the rest of the page and the original offer.',
    ],
    bullets: ['Summary of value', 'Reinforced CTA', 'Closing reassurance'],
  },
]

export default function Structure() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Page structure" title="How We Structure a Landing Page">
          A logical order reduces friction. Each section should earn its place and help the next decision.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.number} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3
                  className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {step.body[0]}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {step.bullets.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-border/80 bg-frame-muted/10 px-2.5 py-1 text-xs font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
