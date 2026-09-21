import { SectionIntro } from '../../../Kinetic'

const timelineFactors = [
  'Number of pages being optimized',
  'Existing content quality and condition',
  'Search-intent research requirements',
  'Keyword mapping complexity',
  'Amount of content writing required',
  'Internal-linking scope',
  'Client review and approval time',
  'Development requirements',
  'Number of target markets',
  'Ecommerce or product-page complexity',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="How Long Does On-Page SEO Take?"
        >
          Timing depends on the number of pages, content condition, research requirements, and
          how quickly changes are reviewed and implemented.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              A single page optimization typically takes around 3–5 days. A standard site with up
              to 10 pages usually runs 2–3 weeks, while a larger site with 10–30 pages needing
              extensive content work can take 4–6 weeks or longer.
            </p>
            <p>
              Ranking movement from on-page changes can appear within a few weeks for
              lower-competition terms, while more competitive keywords typically take longer
              regardless of how well the page itself is optimized.
            </p>
            <p className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
              There is no fixed schedule for ranking improvements. Visibility shifts depend on
              competition, site authority, and the specific queries being targeted.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Timeline drivers
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              The time required can depend on:
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