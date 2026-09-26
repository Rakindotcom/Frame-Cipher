import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Account & Business Audit',
    lead: 'We review your existing TikTok presence and understand your business before creating the strategy. The audit can cover:',
    groups: [
      {
        items: [
          'Current profile',
          'Existing content',
          'Content performance',
          'Audience',
          'Brand positioning',
          'Brand voice',
          'Competitors',
          'Content gaps',
          'Business goals',
          'Conversion paths',
        ],
      },
    ],
    notes: [
      'We also determine whether your existing account has useful content, audience data, or performance history that can inform the new strategy.',
    ],
  },
  {
    number: '02',
    title: 'Audience & Competitor Research',
    lead: 'We identify who you want to reach and examine how similar businesses communicate with that audience. Research may include:',
    groups: [
      {
        items: [
          'Audience interests',
          'Customer questions',
          'Competitor content',
          'Content formats',
          'Market opportunities',
          'Topic gaps',
          'Creative patterns',
          'Search topics',
          'Competitor content gaps',
        ],
      },
    ],
    notes: ['The goal is to identify opportunities rather than simply copy competitor content.'],
  },
  {
    number: '03',
    title: 'Strategy & Content Planning',
    lead: 'We turn research into a practical content system. This stage can define:',
    groups: [
      {
        items: [
          'Content pillars',
          'Brand voice',
          'Content formats',
          'Creative direction',
          'Posting frequency',
          'Topics',
          'Video concepts',
          'Search opportunities',
          'Calls to action',
          'Testing priorities',
          'Reporting metrics',
        ],
      },
    ],
    notes: ['We also establish the first content cycle and approval workflow.'],
  },
  {
    number: '04',
    title: 'Production & Approval',
    lead: 'We develop the agreed content and prepare it for publishing. Depending on the scope, this can include:',
    groups: [
      {
        items: [
          'Scripting',
          'Hooks',
          'Editing',
          'Captions',
          'On-screen text',
          'Graphics',
          'Short-form video production',
          'Creator/UGC coordination',
        ],
      },
    ],
    notes: [
      'Content follows the agreed review and approval process before publishing.',
      'The number of revision rounds, approval deadlines, and publishing responsibilities are defined in the service scope.',
    ],
  },
  {
    number: '05',
    title: 'Publishing & Community Management',
    lead: 'Once content is approved, we publish according to the agreed schedule. We also manage community interactions within the agreed scope and identify useful audience feedback or content opportunities.',
    notes: [
      'Where relevant, we coordinate timely trend-based publishing without allowing trends to replace the planned content strategy.',
    ],
  },
  {
    number: '06',
    title: 'Reporting & Optimization',
    lead: 'Performance data is reviewed regularly. We identify:',
    groups: [
      {
        label: 'We identify',
        items: [
          'Strong content',
          'Weak content',
          'Topic patterns',
          'Hook performance',
          'Retention patterns',
          'Completion trends',
          'Audience responses',
          'Format opportunities',
          'Creative improvements',
          'Business actions',
          'Next-cycle priorities',
        ],
      },
      {
        label: 'We can test variables such as',
        items: [
          'Hooks',
          'Topics',
          'Formats',
          'Storytelling approaches',
          'Editing styles',
          'Creative angles',
          'Calls to action',
        ],
      },
    ],
    notes: [
      'Stronger patterns are developed further. Weaker approaches are adjusted or removed from future content cycles.',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How Our TikTok Management Process Works"
        >
          We use a structured process so strategy, production, publishing, community management, and
          optimization stay connected.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.lead}
                </p>
              </div>

              {(step.groups || step.notes) && (
                <div className="mt-6 space-y-5 border-t-2 border-frame-border/60 pt-5 transition-colors duration-200 group-hover:border-frame-accent-fg/30">
                  {step.groups &&
                    step.groups.map((group, gIdx) => (
                      <div key={group.label || `group-${gIdx}`}>
                        {group.label && (
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                            {group.label}
                          </span>
                        )}
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs font-medium leading-snug text-frame-fg/90 transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-sm"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {step.notes &&
                    step.notes.map((note) => (
                      <p
                        key={note}
                        className="text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80"
                      >
                        {note}
                      </p>
                    ))}
                </div>
              )}
            </article>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Transparency by default
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Every reporting cycle explains what should continue, what should change, and what should
              be tested next, based on actual performance rather than assumptions.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Stronger patterns are developed further. Weaker approaches are adjusted or removed from future
            content cycles.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free TikTok Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
