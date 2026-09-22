import { SectionIntro, PosterButton } from '../../../Kinetic'

const caseStudyMetrics = [
  'Business objective',
  'Market',
  'Campaign type',
  'Starting challenge',
  'Strategy implemented',
  'Tracking approach',
  'Campaign period',
  'Relevant spend range',
  'Measured outcome',
  'Key lessons',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Evidence based"
          title="Google Ads Results & Case Studies"
        >
          We believe paid advertising results should be presented with context, not isolated
          screenshots or headline numbers.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where a verified case study is available, we show the:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {caseStudyMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-frame-fg">{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Why the context matters
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                For businesses considering Google Ads management, this makes it easier to
                understand not only what changed, but why the campaign was structured that way
                and what conditions influenced the result.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                We only publish performance figures that can be supported by the underlying
                account or client-approved evidence.
              </p>
            </div>
            <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}