import { SectionIntro, PosterButton } from '../../../Kinetic'

const documentation = [
  'Countries or regions',
  'International targeting model',
  'Customer journey',
  'Messaging',
  'Performance output',
  'Project timeframe',
  'Hreflang',
  'Canonicals',
  'Site architecture',
  'URL mapping',
  'Internal linking',
  'Indexation',
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Verified international SEO work" title="International SEO Results & Case Studies">
          Real project evidence is more useful than generic international SEO promises.
        </SectionIntro>

        <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          Framecipher will showcase verified international SEO case studies here as they become
          available. Each case study can cover:
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2">
            {documentation.map((body, index) => (
              <div key={body} className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
                <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
                  Section 0{index + 1}
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-frame-fg">{body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Measurable data only
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not publish unsupported traffic, ranking, or revenue claims. Results shown
                are based on actual project data tracked through verified reporting.
              </p>
            </div>
            <PosterButton href="/case-studies">View International SEO Results</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}