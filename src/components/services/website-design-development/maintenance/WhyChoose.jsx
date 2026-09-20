import { SectionIntro } from '../../../Kinetic'

const whyFramecipherPillars = [
  {
    title: 'One In-House Team',
    description: 'Security, updates, backups, monitoring, content support, and technical maintenance stay coordinated within one team.',
  },
  {
    title: 'Platform-Specific Maintenance',
    description: 'We adapt maintenance to the actual platform and website type rather than applying one generic checklist to every site.',
  },
  {
    title: 'Proactive Monitoring',
    description: 'The goal is to identify issues before they become customer-facing problems wherever monitoring can detect them.',
  },
  {
    title: 'Tested Backup & Recovery Approach',
    description: 'Backups are treated as part of a recovery process, not simply as files stored somewhere in the background.',
  },
  {
    title: 'Transparent Reporting',
    description: 'You receive clear information about completed maintenance work, detected issues, and recommended next steps.',
  },
  {
    title: 'Direct Team Access',
    description: 'You work with a team that already understands your website instead of repeatedly explaining the same setup to a new support contact.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'When a website has outgrown its existing platform, we can recommend redesign, migration, or custom development rather than forcing every problem into a maintenance plan.',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Agency Advantage" title="Why Choose Framecipher for Website Maintenance" align="center">
          Website maintenance works best when the team understands the website before problems appear.
        </SectionIntro>

        <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyFramecipherPillars.map((pillar, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{idx + 1}
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