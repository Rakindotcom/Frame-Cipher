import { SectionIntro, PosterButton } from '../../../Kinetic'

const metrics = [
  'Indexation improvements',
  'Crawlability improvements',
  'Core Web Vitals changes',
  'Organic clicks and impressions',
  'Organic traffic changes',
  'Ranking and page visibility changes',
  'Technical errors resolved',
  'Migration performance',
  'Qualified leads or conversions',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Measured outcomes"
          title="Technical SEO Results & Case Studies"
        >
          Technical SEO results should be measured using meaningful technical and business data
          rather than isolated audit scores.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified data and client permission are available, case studies can document:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric, index) => (
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
                How each case study is documented
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Each case study should explain the initial technical problem, work performed,
                implementation period, and measurable outcome.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Only verified Framecipher results should be published here, so every study is
                documented with available evidence rather than unverified performance claims.
              </p>
            </div>
            <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}