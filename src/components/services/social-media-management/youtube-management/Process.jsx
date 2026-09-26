import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Channel & Business Audit',
    body: 'We start by understanding your current channel and business.',
    points: [
      'Existing content',
      'Channel structure',
      'Branding',
      'Topics',
      'Titles',
      'Thumbnails',
      'SEO',
      'Audience',
      'Analytics',
      'Competitors',
      'Conversion opportunities',
    ],
  },
  {
    number: '02',
    title: 'Audience & Competitor Research',
    body: 'We research the people you want to reach and the content already competing for their attention. This helps identify opportunities.',
    points: [
      'Audience questions',
      'Content gaps',
      'Search opportunities',
      'Competitor topics',
      'Content formats',
      'Packaging patterns',
      'Market opportunities',
    ],
  },
  {
    number: '03',
    title: 'Strategy & Content Planning',
    body: 'We turn the research into an actionable content plan.',
    points: [
      'Content pillars',
      'Topics',
      'Video formats',
      'Publishing cadence',
      'Shorts opportunities',
      'Long-form opportunities',
      'CTAs',
      'Content priorities',
    ],
  },
  {
    number: '04',
    title: 'Production & Approval',
    body: 'Content moves through an organized production workflow.',
    flow: ['Brief', 'Script', 'Production', 'Editing', 'Thumbnail', 'SEO', 'Client Review', 'Approval'],
    note: 'Client approval remains part of the process where required by the service agreement.',
  },
  {
    number: '05',
    title: 'Publishing & Optimization',
    body: 'Approved videos are prepared and published according to the agreed schedule. We manage relevant upload elements.',
    points: [
      'Titles',
      'Descriptions',
      'Thumbnails',
      'Playlists',
      'Chapters',
      'End screens',
      'Publishing settings',
      'Related content connections',
    ],
  },
  {
    number: '06',
    title: 'Reporting & Continuous Improvement',
    body: 'Each reporting cycle turns performance data into practical next steps.',
    points: [
      'What performed well',
      'What underperformed',
      'Which topics attracted viewers',
      'Where retention changed',
      'How packaging performed',
      'Which formats generated stronger response',
      'What should be tested next',
    ],
    note: 'The strategy evolves as meaningful channel data becomes available.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Execution framework" title="How Our YouTube Management Process Works">
          A structured workflow keeps content aligned with your business goals and makes performance
          easier to evaluate.
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
                  {step.body}
                </p>
              </div>

              {step.flow && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <ul className="flex flex-wrap items-center gap-1.5">
                    {step.flow.map((entry, index) => (
                      <li key={entry} className="flex items-center gap-1.5">
                        <span className="border border-frame-accent/50 bg-frame-bg px-2 py-0.5 text-[10px] font-bold text-frame-fg">
                          {entry}
                        </span>
                        {index < step.flow.length - 1 && (
                          <span aria-hidden="true" className="text-frame-accent">
                            &rarr;
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.points && (
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {step.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {step.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Every stage produces something the next stage can use: research feeds planning, planning
            feeds production, and performance data feeds the next cycle.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
