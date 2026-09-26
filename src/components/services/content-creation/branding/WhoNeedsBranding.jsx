import { SectionIntro } from '../../../Kinetic'

const profiles = [
  {
    num: '01',
    title: 'New Businesses Building From Scratch',
    badge: 'Foundational',
    situation: 'Launching a new venture or disruptive startup.',
    solution: 'You have the unique opportunity to establish strategic positioning, visual identity, and voice before inconsistent design habits take root and become costly to reverse.'
  },
  {
    num: '02',
    title: 'Businesses With a Logo but No System',
    badge: 'Systemization',
    situation: 'Possessing a great visual mark, but chaotic collateral.',
    solution: 'Your logo works, but your colors shift between projects, fonts vary across slide decks, and social media sounds disjointed from your website. We engineer the complete system around your existing logo.'
  },
  {
    num: '03',
    title: 'Growing Teams With Inconsistent Output',
    badge: 'Governance',
    situation: 'Multiple teams, agencies, and vendors creating assets.',
    solution: 'As your team expands, designers, writers, marketers, and developers make independent creative choices. A documented brand guidebook gives everyone the exact same authoritative operational reference.'
  },
  {
    num: '04',
    title: 'Established Brands Preparing for a Rebrand',
    badge: 'Modernization',
    situation: 'Strong brand equity, but outdated positioning or aesthetics.',
    solution: 'Your business has evolved into higher-value services or enterprise tiers, but your visual identity feels dated. We assess what brand equity to preserve while modernizing the system.'
  },
  {
    num: '05',
    title: 'Companies Entering New Geographic Markets',
    badge: 'Expansion',
    situation: 'Expanding into international markets or bilingual regions.',
    solution: 'Entering the US, UK, Australia, Canada, or domestic bilingual markets requires tailored visual conventions and tone of voice without discarding the parent brand identity.'
  }
]

export default function WhoNeedsBranding() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target Scenarios"
          title="Who Needs a Branding Service?"
        >
          Branding is not limited to companies launching for the first time. Different growth stages demand different levels of strategic and visual brand systemization.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p, idx) => (
            <div
              key={idx}
              className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    SCENARIO 0{p.num}
                  </span>
                  <span className="rounded bg-frame-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {p.title}
                </h3>
                <div className="mt-4 border-l-2 border-frame-accent/40 pl-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg">
                    Current Challenge:
                  </span>
                  <p className="text-xs font-medium text-frame-fg mt-0.5">
                    {p.situation}
                  </p>
                </div>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
