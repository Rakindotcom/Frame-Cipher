import { SectionIntro } from '../../Kinetic'

const phases = [
  {
    phase: 'Phase 01',
    timeframe: 'Days 1 – 7',
    name: 'Diagnostic Growth Audit & Baseline',
    desc: 'We conduct a deep audit of your current ad accounts, tracking architecture, search presence, website speed, and competitor moats to identify where budget is bleeding and where the biggest growth levers lie.',
  },
  {
    phase: 'Phase 02',
    timeframe: 'Days 8 – 14',
    name: 'Positioning & Technical Infrastructure Setup',
    desc: 'We refine your offer proposition, build or optimize your conversion landing pages, configure server-side tracking (Meta CAPI & GA4), and set up CRM/WhatsApp routing so zero leads slip through the cracks.',
  },
  {
    phase: 'Phase 03',
    timeframe: 'Days 15 – 21',
    name: 'Creative Production & Sprint Scripting',
    desc: 'Our media team scripts, films, and edits your initial batch of high-retention short-form video reels, direct-response ad graphics, and commercial assets tailored for Meta, Google, and TikTok.',
  },
  {
    phase: 'Phase 04',
    timeframe: 'Days 22 – 30',
    name: 'Omnichannel Activation & Launch',
    desc: 'We deploy multi-platform paid campaigns, roll out the organic content publishing engine, submit search schema, and launch automated nurture flows to begin driving qualified traffic and sales.',
  },
  {
    phase: 'Phase 05',
    timeframe: 'Month 2 & Beyond',
    name: 'Attribution, Iteration & Aggressive Scaling',
    desc: 'We analyze real customer acquisition costs (CAC) and return on ad spend (ROAS), kill underperforming ads, double down on winning creative angles, test new audiences, and scale budgets with confidence.',
  },
]

export default function Process() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Roadmap"
          title="The 5-Phase Growth Execution Engine."
        >
          Moving from planning to measurable revenue requires disciplined execution. Here is our exact
          onboarding and deployment timeline from Day 1 to profitable scale.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px lg:grid-cols-5 md:grid-cols-2">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                    {p.phase}
                  </span>
                  <span className="text-xs font-bold uppercase text-frame-muted-fg">
                    {p.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {p.name}
                </h3>

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-frame-accent">
                  Milestone Delivered ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
