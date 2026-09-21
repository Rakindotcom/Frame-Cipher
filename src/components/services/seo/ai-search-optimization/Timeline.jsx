import { SectionIntro } from '../../../Kinetic'

const paragraphs = [
  'AI Search Optimization timelines depend on the number of pages, prompt sets, markets, entity work, content restructuring, technical scope, and ongoing monitoring required.',
  'A standard AI visibility audit is typically delivered within about a week. A standard AEO/GEO package, focusing on priority content optimization, entity review, prompt testing, and implementation guidance, usually takes 3 to 4 weeks. A comprehensive AI visibility build covering content, entity, technical, source-authority, and visibility strategy can take 6 to 8 weeks.',
  'AI search visibility builds alongside traditional SEO foundations rather than replacing them, so we track progress, citations, and mentions repeatedly over time as AI systems, sources, and competitors change.',
]

const timelineRows = [
  { project: 'AI Visibility Audit', duration: '~1 week' },
  { project: 'Standard AEO/GEO Package', duration: '~3\u20134 weeks' },
  { project: 'Comprehensive AI Visibility Build', duration: '~6\u20138 weeks' },
  { project: 'Ongoing AI Visibility Monitoring', duration: 'Ongoing' },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Realistic expectations" title="AI Search Optimization Pricing & Timeline">
          Timelines depend on scope, readiness, and review speed, so we set expectations rather
          than promising a fixed schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Engagement &amp; typical delivery
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              What this looks like in practice
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b-2 border-frame-border pb-2 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Project Type
                    </th>
                    <th className="border-b-2 border-frame-border pb-2 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Typical Delivery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {timelineRows.map((row) => (
                    <tr key={row.project} className="border-b border-frame-border/60">
                      <td className="py-3 pr-4 text-xs md:text-sm font-semibold text-frame-fg">
                        {row.project}
                      </td>
                      <td className="py-3 text-xs md:text-sm font-medium text-frame-muted-fg">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}