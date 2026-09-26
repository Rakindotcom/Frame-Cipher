import { SectionIntro, PosterButton } from '../../Kinetic'

const serviceRoles = [
  {
    role: 'Creation',
    title: 'Content Creation Makes the Asset',
    lead: 'The tangible production stage.',
    description: 'Turns ideas, briefs, and requirements into actual videos, photographs, graphics, animations, and creative assets. Without creation, plans remain abstract documents that generate no impressions or sales.',
    deliverable: 'Actual videos, photos, carousels, pitch decks & designs'
  },
  {
    role: 'Strategy',
    title: 'Content Strategy Decides What Gets Made',
    lead: 'The architectural planning stage.',
    description: 'Determines what content should be created, who it is for, what role it plays in the buyer journey, and which priority channels to focus on. Strategy ensures production budget is never spent on random, zero-ROI assets.',
    deliverable: 'Content pillars, audience research & production roadmap'
  },
  {
    role: 'Management',
    title: 'Social Media Management Distributes & Engages',
    lead: 'The publishing & operational stage.',
    description: 'Covers ongoing publishing, scheduling, community management, comment moderation, platform optimization, and analytics tracking. Management ensures assets get distributed consistently and audience trust is built.',
    deliverable: 'Publishing schedule, community engagement & monthly reports'
  }
]

const workflowSteps = [
  { step: '01', title: 'Strategy', note: 'Audience & Journey' },
  { step: '02', title: 'Content Plan', note: 'Editorial Calendar' },
  { step: '03', title: 'Production', note: 'Framecipher Creation' },
  { step: '04', title: 'Publishing', note: 'Channel Distribution' },
  { step: '05', title: 'Performance Review', note: 'Data & Iteration' }
]

export default function ContentVsStrategy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service Boundaries & Synergy"
          title="Content Creation vs. Content Strategy vs. Social Media Management"
          index="04"
        >
          These services work together, but they solve fundamentally different business problems.
        </SectionIntro>

        {/* 3 DISTINCT ROLES */}
        <div className="grid border-2 border-frame-border bg-frame-border gap-px lg:grid-cols-3">
          {serviceRoles.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 md:p-9 flex flex-col justify-between ${
                idx === 0 ? 'bg-frame-accent/10 border-2 border-frame-accent' : 'bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Function {idx + 1}: {item.role}
                  </span>
                  {idx === 0 && (
                    <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-frame-accent-fg">
                      This Service
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-accent">
                  {item.lead}
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Core Responsibility
                </span>
                <span className="text-xs font-semibold text-frame-fg">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERCONNECTED WORKFLOW */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/30 p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Integrated Workflow
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              How The Services Work Together
            </h3>
            <p className="mt-2 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              You can utilize only the production stage you need, or combine multiple services when you want one seamlessly coordinated workflow from strategy through execution.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {workflowSteps.map((wf, wIdx) => (
              <div
                key={wIdx}
                className="border-2 border-frame-border bg-frame-bg p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl font-black text-frame-accent">
                    {wf.step}
                  </span>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                    {wf.title}
                  </h4>
                </div>
                <p className="mt-3 text-xs font-medium text-frame-muted-fg border-t border-frame-border/60 pt-2">
                  {wf.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
            <p className="text-xs sm:text-sm font-medium text-frame-fg max-w-xl">
              Already have a content strategy in place? We produce against your established brief. Need strategy first? Our strategy team can map your plan before production starts.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Build Your Content Production Plan &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
