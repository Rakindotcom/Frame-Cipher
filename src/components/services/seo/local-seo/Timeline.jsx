import { SectionIntro } from '../../../Kinetic'

const timelineFactors = [
  'Current website quality',
  'Existing Google Business Profile strength',
  'Competition',
  'Business location',
  'Number of target areas',
  'Existing authority',
  'Review profile',
  'Technical SEO condition',
  'Content requirements',
  'Consistency of implementation',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="How Long Does Local SEO Take?"
        >
          Local SEO is an ongoing process rather than a one-time website change. The timeline
          depends on a range of business, website, and market factors.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Initial improvements may appear at different times depending on the business and the
              changes made. Google Business Profile improvements and local citation cleanup can
              sometimes be visible sooner than broader organic work, while authority building and
              review growth take longer to accumulate.
            </p>
            <p>
              More competitive markets generally require longer-term work. A business competing in
              a dense city area will face different timelines than one serving a quieter
              neighborhood or smaller service area.
            </p>
            <p>
              We focus on building sustainable local visibility instead of promising a fixed
              ranking date.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Timeline drivers
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              The timeline can depend on:
            </h3>
            <ul className="mt-6 space-y-2.5">
              {timelineFactors.map((factor, index) => (
                <li key={factor} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
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