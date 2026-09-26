import { SectionIntro, PosterButton } from '../../../Kinetic'

const ctaExamples = [
  'Request a Quote',
  'Book a Consultation',
  'Schedule a Call',
  'Get Started',
  'Request Pricing',
  'Contact the Team',
]

const linkTargets = [
  'Service pages',
  'Supporting content',
  'Products',
  'Categories',
  'Location pages',
  'Blog content',
  'Related business pages',
]

const blocks = [
  {
    number: '01',
    title: 'Page Messaging & Structure',
    body: [
      'We define what each page needs to communicate and how the information should be organized.',
    ],
    bullets: [
      'Page purpose',
      'Target audience',
      'Core message',
      'Section hierarchy',
      'Content priorities',
      'CTA direction',
    ],
  },
  {
    number: '02',
    title: 'Website Copy',
    body: [
      'You receive the finished copy written for the specific page, audience, brand voice, and business objective.',
    ],
  },
  {
    number: '03',
    title: 'CTA & Conversion Messaging',
    body: [
      'Where appropriate, we develop calls to action that clearly communicate the next step.',
      'Examples can include:',
    ],
    chips: ctaExamples,
    note: 'The CTA should match the page’s purpose and the visitor’s likely decision stage.',
  },
  {
    number: '04',
    title: 'SEO-Aware Recommendations',
    body: [
      'Website content can be written with search visibility in mind without turning the page into keyword-heavy copy.',
      'Depending on scope, recommendations can include:',
    ],
    bullets: [
      'Primary topic or keyword direction',
      'Search-aware headings',
      'Title recommendations',
      'Meta description recommendations',
      'Relevant terminology',
      'Content hierarchy',
      'FAQ opportunities',
      'Search-focused page structure',
    ],
    note: 'SEO considerations should support clear communication rather than make the copy unnatural.',
  },
  {
    number: '05',
    title: 'Internal-Link Recommendations',
    body: [
      'Relevant internal links can help visitors discover related pages and help search engines understand the relationship between pages.',
      'We can recommend links between:',
    ],
    bullets: linkTargets,
    note: 'Anchor text and placement should make sense in context rather than forcing keywords into every link.',
  },
  {
    number: '06',
    title: 'Revision & Final Delivery',
    body: [
      'Your content is reviewed against the agreed brief and project requirements.',
      'After your feedback, revisions are incorporated within the agreed revision scope before final delivery.',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Receive With Your Website Content">
          Website content writing should provide more than a block of text. Depending on the project scope, your
          deliverables can include the following.
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

                {block.chips && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {block.chips.map((chip) => (
                      <li
                        key={chip}
                        className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {chip}
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

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A free content consultation can be requested before a larger engagement so you can evaluate the
            approach and fit.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Website Content Sample &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
