import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Conversion Research & Audience Understanding',
    body: [
      'Before writing, we review the offer, target audience, traffic source, competitors, objections, and existing customer language.',
    ],
    bullets: [
      'Audience awareness and intent',
      'Traffic source review',
      'Competitor message review',
      'Customer language and objections',
      'Existing analytics or campaign insight',
    ],
    note: 'Research keeps the copy specific to the audience instead of generic.',
  },
  {
    number: '02',
    title: 'Offer & Value Proposition Messaging',
    body: [
      'We identify what the offer actually provides, why it matters to the audience, and why it is different from the alternatives.',
    ],
    bullets: [
      'Core value proposition',
      'Primary and supporting benefits',
      'Offer framing',
      'Differentiation',
      'Pricing and risk framing where relevant',
    ],
    note: 'A clear value proposition gives every later section something specific to build on.',
  },
  {
    number: '03',
    title: 'Headline, Subheadline & Hero Copy',
    body: [
      'The hero section has a short amount of time to set the frame for the entire page.',
    ],
    bullets: [
      'Primary headline',
      'Supporting subheadline',
      'Short supporting statement',
      'Hero call to action',
      'Microcopy around buttons or forms',
    ],
    note: 'The hero should state the offer, the audience benefit, and the next step without unnecessary detail.',
  },
  {
    number: '04',
    title: 'Benefit-Led Page Copy',
    body: [
      'We translate features into outcomes the audience cares about, in language that is easy to understand and quick to scan.',
    ],
    bullets: [
      'Benefit statements',
      'Use-case framing',
      'Outcome language',
      'Specificity where the business has it',
      'Consistent message hierarchy',
    ],
    note: 'Specific and credible benefits are generally stronger than broad claims.',
  },
  {
    number: '05',
    title: 'Objection Handling & Trust Messaging',
    body: [
      'Most hesitation comes from unanswered questions. We identify likely objections and answer them honestly with the information you provide.',
    ],
    bullets: [
      'Common objections',
      'Risk and commitment concerns',
      'Trust signals',
      'Testimonials or proof placement',
      'FAQ and reassurance content',
    ],
    note: 'We only use genuine proof. Unsupported claims and invented statistics are never added.',
  },
  {
    number: '06',
    title: 'CTA & Microcopy',
    body: [
      'Calls to action should describe the next step accurately rather than using generic language that could apply to any page.',
    ],
    bullets: [
      'Primary CTA text',
      'Secondary CTA text',
      'Button microcopy',
      'Form labels and helper text',
      'Confirmation or follow-up messaging',
    ],
    note: 'Accurate CTA language usually communicates more than simply choosing the most aggressive wording.',
  },
  {
    number: '07',
    title: 'Message Match With Ads & Traffic Sources',
    body: [
      'When the campaign and the landing page communicate the same promise, visitors are less likely to feel they have been moved somewhere unrelated to what they clicked.',
    ],
    bullets: [
      'Ad-to-page consistency',
      'Audience and intent alignment',
      'Offer continuity',
      'Tone and terminology consistency',
      'Expectation setting',
    ],
    note: 'Message match is strongest when the ad and the page are developed from the same campaign brief.',
  },
  {
    number: '08',
    title: 'SEO-Aware Structure & On-Page Recommendations',
    body: [
      'Landing pages often need to be clear and campaign-focused first, but they can still be structured in a way that supports organic visibility where relevant.',
    ],
    bullets: [
      'Heading structure',
      'Keyword-aware phrasing',
      'Title and meta direction',
      'Internal linking recommendations',
      'Content depth considerations',
    ],
    note: 'SEO considerations are applied where they support the campaign goal rather than replacing it.',
  },
  {
    number: '09',
    title: 'A/B Test Variants & Copy Optimization',
    body: [
      'Where testing is appropriate, we can write structured copy variations around the elements most likely to affect conversion.',
    ],
    bullets: [
      'Alternative headlines',
      'CTA variations',
      'Section-level variants',
      'Offer framing variants',
      'Testing notes and hypotheses',
    ],
    note: 'Variants should test one meaningful idea at a time, and testing setup and analysis can be scoped separately.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Our Landing Page Copywriting Service Includes"
        >
          Every landing page needs a defined audience, offer, and action. The copy is planned around those three
          elements first.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {block.bullets && (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((item) => (
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
