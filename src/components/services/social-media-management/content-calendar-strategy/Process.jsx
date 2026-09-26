import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Business & Content Audit',
    body: [
      'We begin by reviewing your business goals, existing social presence, current content, active platforms, campaigns, audience, brand direction, and existing planning process.',
      'If you already have a content calendar, we review how it is being used and where coordination can improve.',
    ],
  },
  {
    number: '02',
    title: 'Strategy & Content Pillars',
    body: ['We establish the strategic foundation for the calendar.'],
    listLabel: 'This can include',
    list: [
      'Audience priorities',
      'Content objectives',
      'Content pillars',
      'Messaging themes',
      'Platform roles',
      'Campaign priorities',
      'Content formats',
      'CTA direction',
    ],
    note: 'The objective is to make the calendar useful for the business, not simply full.',
  },
  {
    number: '03',
    title: 'Calendar & Campaign Planning',
    body: ['We translate the strategy into a coordinated publishing plan.'],
    listLabel: 'The calendar can include',
    list: [
      'Topics',
      'Platforms',
      'Formats',
      'Dates',
      'Campaigns',
      'Content pillars',
      'CTAs',
      'Asset requirements',
      'Production deadlines',
      'Approval deadlines',
    ],
  },
  {
    number: '04',
    title: 'Review & Approval',
    body: [
      'The planned content goes through the agreed review process before production or publishing.',
      'This gives stakeholders an opportunity to review campaign direction, important messages, dates, and content priorities before execution.',
    ],
  },
  {
    number: '05',
    title: 'Production Coordination',
    body: [
      'Once the plan is approved, we coordinate the required assets and platform-specific adaptations according to the agreed scope.',
      'This may involve content writing, design, video, repurposing, platform management, or coordination with your internal team.',
    ],
  },
  {
    number: '06',
    title: 'Performance Review & Optimization',
    body: [
      'After content is published, relevant performance signals can inform the next planning cycle.',
      'We review what audiences responded to, which content supported the intended objective, what needs improvement, and which ideas may deserve further development.',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How Our Content Calendar &amp; Strategy Process Works"
        >
          The calendar is treated as a working system rather than a document that becomes outdated after
          the first month.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
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
              </div>

              {step.list && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {step.listLabel}
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {step.list.map((entry) => (
                      <li
                        key={entry}
                        className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {step.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              A working system, not a document
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Each planning cycle builds on the previous one, so the calendar improves as your business,
              audience, and campaigns change.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We translate the strategy into a coordinated publishing plan your team can actually use.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start Your Content Planning Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
