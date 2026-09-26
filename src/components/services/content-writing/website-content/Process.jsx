import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Discovery & Content Audit',
    body: ['We start by understanding the business and the website. Depending on the project, we review:'],
    bullets: [
      'Existing website content',
      'Business goals',
      'Products and services',
      'Target audience',
      'Competitors',
      'Brand materials',
      'Existing messaging',
      'Page requirements',
    ],
    note: 'For an existing website, this can help identify what should be retained, rewritten, removed, or expanded.',
  },
  {
    number: '02',
    title: 'Messaging & Page Strategy',
    body: ['We establish the core message and determine the purpose of each page. This may include:'],
    bullets: [
      'Value proposition',
      'Positioning',
      'Voice and tone',
      'Key differentiators',
      'Page hierarchy',
      'Content priorities',
      'CTA direction',
    ],
  },
  {
    number: '03',
    title: 'Page-by-Page Writing',
    body: [
      'Each page is written according to its specific role.',
      'We avoid copying the same structure across every page simply to make production faster.',
    ],
  },
  {
    number: '04',
    title: 'Review & Revision',
    body: [
      'The draft is reviewed against the agreed scope and your feedback is incorporated within the revision process.',
    ],
    note: 'Your business knowledge is important here because internal expertise can help identify details that external research alone may not provide.',
  },
  {
    number: '05',
    title: 'Cross-Page Quality Review',
    body: ['For multi-page projects, we review the pages together. We check for:'],
    bullets: [
      'Repeated messaging',
      'Conflicting terminology',
      'Inconsistent tone',
      'Missing information',
      'Weak transitions',
      'Duplicate sections',
      'Inconsistent CTAs',
    ],
  },
  {
    number: '06',
    title: 'Final Delivery & Implementation Support',
    body: [
      'Final content is delivered in an agreed format and can be prepared for implementation by your website team.',
    ],
    note: 'Where included in the scope, we can also provide implementation notes or CMS publishing support.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Engagement workflow"
          title="Our Website Content Writing Process"
        >
          The process adapts by project scope, but the messaging phase comes before any full-page production.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {step.title}
                </h3>
                {step.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {step.bullets && (
                  <ul className="mt-4 space-y-2">
                    {step.bullets.map((item) => (
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

              {step.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {step.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want each page to accomplish, and we can help define the right content scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start Your Website Content Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
