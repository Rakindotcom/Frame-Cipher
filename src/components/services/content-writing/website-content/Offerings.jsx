import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Homepage Content Writing',
    body: [
      'Your homepage introduces the business and helps visitors understand where they are and what you offer.',
    ],
    bullets: [
      'Hero headline and supporting copy',
      'Value proposition',
      'Audience positioning',
      'Key benefits',
      'Service or product summaries',
      'Trust and credibility sections',
      'Differentiation messaging',
      'Supporting section copy',
      'Calls to action',
      'FAQ content where appropriate',
    ],
    note: 'The homepage should give visitors a clear reason to continue exploring the website without trying to explain everything at once.',
  },
  {
    number: '02',
    title: 'About Page Writing',
    body: [
      'An About page should do more than repeat the company’s history. We develop About page content around the information that helps your audience understand and trust the business.',
    ],
    bullets: [
      'Brand story',
      'Company background',
      'Founder or leadership story',
      'Experience and expertise',
      'Values and principles',
      'Approach to the work',
      'Differentiators',
      'Team introductions',
      'Relevant credibility signals',
    ],
    note: 'Where genuine experience, client knowledge, or first-hand information is available, we use it to make the content more specific and credible.',
  },
  {
    number: '03',
    title: 'Service Page Writing',
    body: [
      'A service page needs to explain a specific offer clearly enough for the visitor to evaluate it.',
    ],
    bullets: [
      'What the service is',
      'Who it is for',
      'Problems it addresses',
      'Benefits and outcomes',
      'What’s included',
      'How the process works',
      'Relevant proof or credibility',
      'Common objections',
      'FAQs',
      'Calls to action',
    ],
    note: 'The objective is to help the right visitor understand the service and take the appropriate next step.',
  },
  {
    number: '04',
    title: 'Brand Voice & Messaging',
    body: [
      'A website should sound like one business, not a collection of pages written by different people at different times.',
    ],
    bullets: [
      'Voice and tone',
      'Core messaging',
      'Brand terminology',
      'Value proposition',
      'Key differentiators',
      'Audience language',
      'Messaging hierarchy',
      'Cross-page consistency',
    ],
    note: 'This is particularly useful when several pages need to be rewritten or when a business has changed its positioning.',
  },
  {
    number: '05',
    title: 'Website Rewrites & Content Refresh',
    body: ['Existing website content does not always need to be replaced completely.'],
    bullets: [
      'Minor copy improvements',
      'Structural changes',
      'Section rewrites',
      'A complete page rewrite',
      'Updated messaging',
      'Better differentiation',
      'New or missing information',
      'Stronger calls to action',
      'Cross-page consistency improvements',
    ],
    note: 'The approach depends on the condition and purpose of the existing content.',
  },
  {
    number: '06',
    title: 'Supporting Website Pages',
    body: ['Depending on the project, we can also write or improve supporting pages such as:'],
    bullets: [
      'Landing pages',
      'Product and category pages',
      'Location pages',
      'Pricing pages',
      'FAQ pages',
      'Contact page copy',
      'Portfolio pages',
      'Case study pages',
      'Team and founder bios',
      'Other business-critical website sections',
    ],
    note: 'The exact scope is defined during project discovery.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Our Website Content Writing Service Includes"
        >
          Every website page has a different role. We plan and write the content around that role instead of
          applying the same template to every page.
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
