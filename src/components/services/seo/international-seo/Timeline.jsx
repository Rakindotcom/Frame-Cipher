import { SectionIntro } from '../../../Kinetic'

const paragraphs = [
  'International SEO does not have a fixed ranking timeline. The time required depends on the number of target markets, website structure, technical condition, competition, authority, content quality, localization needs, implementation speed, and search demand. A typical engagement may follow this general timeline:',
  'Technical fixes and structure changes can be completed relatively quickly. Organic ranking, traffic, and revenue changes usually take longer to develop and may vary by market.',
  'We track progress throughout the engagement rather than promising a specific ranking date, market entry date, or guaranteed results.',
]

const timelineRows = [
  { project: 'International SEO Audit', duration: '1\u20132 weeks' },
  { project: 'Single-Market Expansion', duration: '3\u20136 weeks' },
  { project: 'Multi-Market SEO Setup', duration: '6\u201312+ weeks' },
  { project: 'Complex International Migration', duration: 'Depends on site size and migration scope' },
  { project: 'Ongoing International SEO', duration: 'Continuous' },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Realistic expectations" title="How Long Does International SEO Take?">
          Timelines depend on scope, readiness, and review speed, so we set expectations rather
          than promising a fixed schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Project &amp; typical timeline
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              What this looks like in practice
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b-2 border-frame-accent pb-2 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Project
                    </th>
                    <th className="border-b-2 border-frame-accent pb-2 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Typical Timeline
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