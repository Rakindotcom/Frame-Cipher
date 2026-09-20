import { SectionIntro } from '../../../Kinetic'

const whyFramecipherPillars = [
  {
    title: 'One In-House Team',
    description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the business objectives, UX decisions, and technical implementation connected.',
  },
  {
    title: 'Audit Before Design',
    description: 'We don\'t begin with a design file and work backward. We first identify what is actually underperforming so the redesign has a clear purpose.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We can work with an existing platform when it is suitable and recommend migration when the platform itself is creating limitations.',
  },
  {
    title: 'Local & International Experience',
    description: 'We work with businesses in Bangladesh and international markets, adapting the redesign to different audiences, requirements, and technical environments.',
  },
  {
    title: 'Transparent Review Process',
    description: 'Major stages include review and approval checkpoints so you can confirm direction before the next stage begins.',
  },
]

export default function WhyFramecipher() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Agency Difference" title="Why Framecipher for Website Redesign" align="center">
          We approach every redesign with analytical rigor, in-house technical depth, and complete commitment to protecting your digital equity.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyFramecipherPillars.map((pillar, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}