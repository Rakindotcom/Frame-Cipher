import { SectionIntro, PosterButton } from '../../../Kinetic'

const sections = [
  {
    number: '01',
    title: 'Executive Performance Summary',
    body: [
      'A concise overview of the month\u2019s most important developments.',
      'This section highlights:',
    ],
    list: [
      'Major gains',
      'Significant declines',
      'Important campaigns',
      'Top-performing content',
      'Key audience changes',
      'Major opportunities',
      'Important issues',
    ],
  },
  {
    number: '02',
    title: 'Platform-by-Platform Analysis',
    body: [
      'Each active platform is reviewed within its own context.',
      'The analysis can include relevant:',
    ],
    list: [
      'Reach',
      'Engagement',
      'Audience growth',
      'Content performance',
      'Video performance',
      'Traffic',
      'Campaign activity',
      'Community activity',
    ],
  },
  {
    number: '03',
    title: 'Content & Campaign Highlights',
    body: [
      'We identify the content and campaigns that deserve attention rather than hiding them inside averages.',
      'This can include:',
    ],
    list: [
      'Top-performing posts',
      'Underperforming posts',
      'Strong content formats',
      'Strong topics',
      'Campaign highlights',
      'Notable audience responses',
    ],
  },
  {
    number: '04',
    title: 'Audience Insights',
    body: ['Where platform data is available, we review meaningful changes in:'],
    list: [
      'Audience growth',
      'Demographics',
      'Location',
      'Activity',
      'Audience response',
      'Audience composition',
    ],
  },
  {
    number: '05',
    title: 'Key Learnings & Opportunities',
    body: [
      'This is where the data becomes useful.',
      'We summarize what the reporting period suggests about:',
    ],
    list: [
      'Audience preferences',
      'Content direction',
      'Campaign opportunities',
      'Platform priorities',
      'Messaging',
      'Creative formats',
    ],
  },
  {
    number: '06',
    title: 'Next-Month Recommendations',
    body: [
      'Every reporting cycle should create a practical starting point for the next one.',
      'Recommendations can be translated into:',
    ],
    list: [
      'Content priorities',
      'Campaign actions',
      'Testing ideas',
      'Platform adjustments',
      'Community actions',
      'Measurement improvements',
    ],
  },
]

export default function ReportSections() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Report structure"
          title="What&rsquo;s Included in Your Monthly Social Media Report"
        >
          A typical report can include the following sections, adjusted to your business goals and selected
          scope.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {section.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {section.title}
                </h3>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 border-t-2 border-frame-border/60 pt-4">
                {section.list.map((entry) => (
                  <li
                    key={entry}
                    className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Every reporting cycle should create a practical starting point for the next one.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Sample Report &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
