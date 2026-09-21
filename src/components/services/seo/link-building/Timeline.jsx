import { SectionIntro } from '../../../Kinetic'

const timelineFactors = [
  'Industry competitiveness',
  'Existing authority',
  'Target market or markets',
  'Publisher availability in the niche',
  'Content development requirements',
  'Outreach response rates',
  'Editorial review cycles',
  'Number of pages you need referenced',
  'Overall campaign scope',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="How Long Does Link Building Take?"
        >
          An initial backlink audit is typically delivered within a week. Ongoing link building
          runs as a monthly engagement, because earning genuinely relevant placements takes real
          outreach time that cannot be compressed without cutting corners on quality.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Some placements come together relatively quickly, while others require months of
              relationship building, content development, and editorial review before a link goes
              live. Both matter, and both belong in a realistic off-page program.
            </p>
            <p>
              Authority-building results tend to show gradually rather than in a single visible
              jump. Expect incremental ranking improvement over months as your backlink profile
              strengthens, not an overnight shift.
            </p>
            <p className="border-l-2 border-frame-accent bg-frame-bg p-4 md:p-5">
              There is no fixed schedule for ranking improvements. Visibility shifts depend on
              competition, site authority, and the specific queries being targeted.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Timeline drivers
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Progress depends on
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