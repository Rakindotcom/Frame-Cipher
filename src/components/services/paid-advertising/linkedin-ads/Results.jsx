import { SectionIntro, PosterButton } from '../../../Kinetic'

const caseStudyMetrics = [
  'Business objective',
  'Industry',
  'Target market',
  'Ideal customer profile',
  'Campaign objective',
  'Audience strategy',
  'Ad format',
  'Offer',
  'Tracking setup',
  'Campaign period',
  'Advertising spend range',
  'Leads generated',
  'Qualified leads',
  'Opportunities',
  'Pipeline or revenue where measurable',
  'Key optimization decisions',
  'Outcome',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Evidence based"
          title="LinkedIn Ads Results & Case Studies"
        >
          B2B advertising results should be evaluated in commercial context, not presented as
          isolated screenshots or headline numbers.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified Framecipher case studies are available, we can show:
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
                A meaningful LinkedIn case study should show more than lead volume. It should
                explain whether the leads matched the intended customer profile and progressed
                through the sales process.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not publish performance figures that cannot be supported by the underlying
                account or approved client evidence.
              </p>
            </div>
            <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}