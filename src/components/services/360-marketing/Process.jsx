import { SectionIntro } from '../../Kinetic'

const phases = [
  {
    phase: '01',
    timeframe: 'Days 1 to 7',
    name: 'Diagnostic Growth Audit & Baseline',
    desc: 'We conduct a deep audit of your current ad accounts, tracking architecture, search presence, website speed, and competitor moats to identify where budget is bleeding and where the biggest growth levers lie.',
  },
  {
    phase: '02',
    timeframe: 'Days 8 to 14',
    name: 'Positioning & Technical Infrastructure Setup',
    desc: 'We refine your offer proposition, build or optimize your conversion landing pages, configure server-side tracking (Meta CAPI & GA4), and set up CRM/WhatsApp routing so zero leads slip through the cracks.',
  },
  {
    phase: '03',
    timeframe: 'Days 15 to 21',
    name: 'Creative Production & Sprint Scripting',
    desc: 'Our media team scripts, films, and edits your initial batch of high-retention short-form video reels, direct-response ad graphics, and commercial assets tailored for Meta, Google, and TikTok.',
  },
  {
    phase: '04',
    timeframe: 'Days 22 to 30',
    name: 'Omnichannel Activation & Launch',
    desc: 'We deploy multi-platform paid campaigns, roll out the organic content publishing engine, submit search schema, and launch automated nurture flows to begin driving qualified traffic and sales.',
  },
  {
    phase: '05',
    timeframe: 'Month 2 & Beyond',
    name: 'Attribution, Iteration & Aggressive Scaling',
    desc: 'We analyze real customer acquisition costs (CAC) and return on ad spend (ROAS), kill underperforming ads, double down on winning creative angles, test new audiences, and scale budgets with confidence.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              The 5-Phase Growth{' '}
              <span className="italic text-frame-accent">Execution Engine.</span>
            </>
          }
        >
          Moving from planning to measurable revenue requires disciplined execution. Here is our exact
          onboarding and deployment timeline from Day 1 to profitable scale.
        </SectionIntro>

        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] lg:grid-cols-5 md:grid-cols-2 bg-[#09090B]">
          {phases.map((p) => (
            <article
              key={p.phase}
              className="group relative flex flex-col justify-between bg-[#09090B] p-6 sm:p-7 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    {p.phase}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {p.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg sm:text-xl font-medium leading-tight tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {p.name}
                </h3>

                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
