import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Start With the Business Value Proposition',
    body: [
      'Before writing, we need to understand what the business actually offers and why someone should care.',
      'We look at:',
    ],
    bullets: [
      'Products or services',
      'Target customers',
      'Business model',
      'Key differentiators',
      'Customer problems',
      'Benefits',
      'Competitive positioning',
      'Desired actions',
    ],
    note: 'Without a clear value proposition, even polished writing can remain vague.',
  },
  {
    number: '02',
    title: 'Understand the Audience',
    body: ['Website content should reflect the people it is written for. We consider:'],
    bullets: [
      'Audience needs',
      'Awareness level',
      'Common questions',
      'Concerns and objections',
      'Buying stage',
      'Industry terminology',
      'Geographic market',
      'Desired action',
    ],
    note: 'The language should be appropriate for the intended customer rather than written for the business owner.',
  },
  {
    number: '03',
    title: 'Give Every Page a Clear Job',
    body: [
      'A homepage, About page, service page, and landing page should not all communicate the same information.',
    ],
    pairs: [
      'A homepage introduces and directs.',
      'An About page builds context and credibility.',
      'A service page explains and helps the visitor evaluate an offer.',
      'A landing page focuses on one specific action.',
      'A product page helps a buyer understand a specific product.',
    ],
    note: 'Clear page purpose helps prevent unnecessary repetition across the website.',
  },
  {
    number: '04',
    title: 'Lead With the Most Important Information',
    body: [
      'Website visitors often scan before deciding where to focus. Important information should therefore be easy to find.',
      'We prioritize:',
    ],
    bullets: [
      'Clear headlines',
      'Direct explanations',
      'Shorter sections where appropriate',
      'Descriptive subheadings',
      'Useful lists',
      'Relevant proof',
      'Clear calls to action',
    ],
    note: 'The objective is not to remove detail. It is to organize detail so the reader can understand it efficiently.',
  },
  {
    number: '05',
    title: 'Build Trust With Specific Evidence',
    body: [
      'Generic claims such as “high quality,” “professional service,” or “customer-focused” rarely differentiate a business on their own.',
      'Where available, stronger credibility can come from:',
    ],
    bullets: [
      'Experience',
      'Certifications',
      'Client examples',
      'Case studies',
      'Testimonials',
      'Results',
      'Processes',
      'Team expertise',
      'Industry knowledge',
      'Original information',
      'First-hand experience',
    ],
    note: 'We use the evidence available from the business rather than inventing credibility claims.',
  },
  {
    number: '06',
    title: 'Make the Next Step Clear',
    body: [
      'A visitor should not have to guess what to do after understanding the offer. The page can guide them toward an appropriate action such as:',
    ],
    bullets: [
      'Requesting a quote',
      'Booking a consultation',
      'Starting a project',
      'Viewing a product',
      'Contacting the business',
      'Exploring a related service',
    ],
    note: 'The CTA should support the page’s purpose rather than appear as an unrelated sales message.',
  },
  {
    number: '07',
    title: 'Keep the Voice Consistent Across the Site',
    body: [
      'A website should feel like one brand.',
      'We review terminology, tone, messaging, and positioning across pages so that the homepage does not promise something the service pages describe differently.',
    ],
    note: 'This becomes especially important during full-site rewrites and website redesign projects.',
  },
  {
    number: '08',
    title: 'Page Purpose Drives the Structure',
    body: [
      'Once purpose, audience, evidence, and next step are clear, the page structure follows. Sections are ordered to match how visitors actually read rather than to match a fixed template.',
    ],
  },
]

export default function Approach() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Writing method" title="How We Write Website Content That Works">
          Website content is planned around the business, the audience, and the job each page needs to do.
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

                {step.pairs && (
                  <ul className="mt-4 space-y-2">
                    {step.pairs.map((item) => (
                      <li
                        key={item}
                        className="border-t-2 border-frame-border/60 pt-2 text-sm font-medium leading-relaxed text-frame-fg first:border-t-0 first:pt-0"
                      >
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
      </div>
    </section>
  )
}
