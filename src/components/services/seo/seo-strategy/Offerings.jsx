import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'SEO Strategy Development',
    body: 'Building the overall roadmap that everything else gets prioritized against.',
    points: [
      'Business Goal Alignment: Connecting SEO priorities to what actually matters for your business, leads, sales, brand visibility.',
      'Competitive Landscape Assessment: Understanding where genuine opportunity exists relative to what you\u2019re actually up against.',
      'Resource-Realistic Roadmapping: A plan built around the team, budget, and timeline you actually have, not an idealized version of them.',
      'Priority Sequencing: Deciding what to tackle first based on impact and feasibility together, not impact alone.',
    ],
    note: 'A strategy that ignores your actual resources is a strategy that gets abandoned three months in.',
  },
  {
    title: 'Fractional SEO Leadership',
    body: 'Ongoing strategic direction for businesses that need senior-level guidance without a full-time hire.',
    points: [
      'Ongoing Strategic Advisory: Regular check-ins to review progress, adjust priorities, and answer questions as they come up.',
      'Internal Team Direction: Providing the strategic oversight an internal marketing team often lacks without a dedicated SEO lead.',
      'Executive Reporting: Translating SEO performance into terms that make sense to leadership and stakeholders.',
      'Vendor & Agency Oversight: Reviewing work from other SEO vendors or freelancers on your behalf, if you\u2019re already working with one.',
    ],
    note: 'Not every business is ready for a full-time SEO hire, and not every business needs one, fractional leadership fills that gap deliberately.',
  },
  {
    title: 'Audit-to-Roadmap Translation',
    body: "Turning a completed audit, ours or anyone else's, into an actual execution plan.",
    points: [
      'Findings Prioritization: Taking a list of audit findings and turning it into a sequenced, resourced plan.',
      'Internal Team Briefing: Explaining findings and priorities to your team in terms they can act on directly.',
      'Execution Planning: Breaking a roadmap into specific tasks, owners, and realistic timelines.',
      'Progress Check-Ins: Periodic reviews to confirm the plan is actually being executed as intended.',
    ],
    note: 'An audit tells you what\u2019s wrong. This is where \u201cwhat\u2019s wrong\u201d becomes \u201chere\u2019s what we\u2019re doing about it, starting Monday.\u201d',
  },
  {
    title: 'Team Training & Enablement',
    body: 'Building internal SEO capability, not just handing over answers.',
    points: [
      'SEO Fundamentals Training: Getting your existing content or marketing team up to speed on core SEO principles.',
      'Tool & Workflow Setup: Establishing the reporting and tracking systems your team needs to work independently over time.',
      'Content Team SEO Coaching: Working directly with writers and content creators to build SEO thinking into their process.',
      'Documentation & Playbooks: Written guides your team can reference after the engagement ends, not knowledge that leaves when we do.',
    ],
    note: 'Some clients want us to do the work forever. Others want to eventually not need us for this specific thing, both are legitimate goals we plan around honestly.',
  },
  {
    title: 'Ongoing Strategic Advisory',
    body: "Strategy isn't a one-time document: markets, algorithms, and business priorities all keep shifting.",
    points: [
      'Quarterly Strategy Reviews: Revisiting the roadmap as results come in and priorities evolve.',
      'Algorithm Update Guidance: Interpreting what a significant Google update actually means for your specific situation.',
      'New Opportunity Identification: Flagging emerging channels or tactics, like AI search optimization, worth considering as they mature.',
      'Performance-Based Adjustment: Recalibrating priorities based on what\u2019s actually working, not sticking rigidly to the original plan regardless of results.',
    ],
    note: 'A strategy engagement can lead into full execution, see our other SEO service pages for the specific work a roadmap might call for.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Scope" title="Our SEO Strategy & Consulting Services">
          Strategic work covers several distinct needs, depending on where a business actually
          stands.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <p className="mt-6 border-t-2 border-frame-border/60 pt-4 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  What We Do
                </p>
                <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}