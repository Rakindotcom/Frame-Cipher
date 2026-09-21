import { SectionIntro, PosterButton } from '../../../Kinetic'

const metrics = [
  'The pages optimized and the intent each one targets',
  'Content and structural changes made page by page',
  'Keyword and topic mapping decisions',
  'Internal linking improvements and context',
  'Implementation timeline for each page',
  'Organic impressions before and after',
  'Organic clicks and click-through rate before and after',
  'Ranking changes for target queries',
  'Visibility changes across pages, groups, or categories',
  'Leads, sales, or other business outcomes, where verifiable',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Measured outcomes"
          title="On-Page SEO Results & Case Studies"
        >
          On-page SEO results should be measured with meaningful search and business data, not
          by how many keywords a report claims a page targets.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified data and client permission are available, case studies document:
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
                Each case study explains the starting problem, the on-page work performed, the
                implementation period, and the measurable result.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Only verified Framecipher results are published here, documented with available
                search and business evidence rather than unverified performance claims.
              </p>
            </div>
            <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}