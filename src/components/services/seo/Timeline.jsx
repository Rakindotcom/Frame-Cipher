import { SectionIntro } from '../../Kinetic'

const timelineFactors = [
  'Website age and authority',
  'Technical condition',
  'Industry competition',
  'Search intent and keyword difficulty',
  'Existing content quality',
  'Link and authority profile',
  'Target country or location',
  'Implementation speed',
  'Consistency of ongoing SEO work',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="How Long Does SEO Take?"
        >
          SEO does not follow one fixed timeline because every website starts from a different
          position.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              An initial SEO audit can often be completed within a few business days once the
              required information and access are available. Technical improvements may be
              implemented sooner, while meaningful organic growth usually requires sustained work
              over several months.
            </p>
            <p>
              Local visibility can sometimes improve sooner than highly competitive national or
              international rankings, but no reliable timeline applies to every website.
            </p>
            <p>
              For launches, seasonal campaigns, or important business dates, starting SEO early
              gives technical and content work more time to take effect.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Timeline drivers
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              The timeline can depend on:
            </h3>
            <ul className="mt-6 space-y-2.5">
              {timelineFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}