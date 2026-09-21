import { SectionIntro } from '../../../Kinetic'

const groups = [
  {
    label: 'Discovery',
    points: [
      'Discovery',
      'Business Goal Review',
      'Current Performance Assessment',
      'Internal Team Capacity Review',
      'Scope & Engagement Model Definition',
    ],
  },
  {
    label: 'Strategy Development',
    points: [
      'Competitive Landscape Assessment',
      'Resource-Realistic Roadmapping',
      'Priority Sequencing',
      'Written Documentation',
    ],
  },
  {
    label: 'Delivery',
    points: ['Strategy Walkthrough Session', 'Follow-Up Q&A', 'Execution Planning (if applicable)'],
  },
  {
    label: 'Ongoing (Where Applicable)',
    points: [
      'Quarterly Strategy Reviews',
      'Algorithm Update Guidance',
      'Performance-Based Adjustment',
      'New Opportunity Identification',
    ],
  },
]

export default function StandardEngagement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Built into every engagement" title="Standard for Every Engagement">
          These elements are part of how we work, regardless of which engagement model you choose.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <div
              key={group.label}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Phase 0{index + 1}
              </span>
              <h3 className="mt-3 border-b-2 border-frame-border pb-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                {group.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}