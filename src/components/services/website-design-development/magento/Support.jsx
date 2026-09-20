import { SectionIntro } from '../../../Kinetic'

const supportItems = [
  'Magento updates',
  'Security patch assistance',
  'Performance checks',
  'Integration troubleshooting',
  'Extension compatibility review',
  'Minor development changes',
  'Technical maintenance',
  'SEO-related technical updates',
  'Backup and recovery support',
]

export default function Support() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Stability &amp; Operations" title="Post-Launch Support &amp; Warranty">
          Launching a Magento store is only one part of the project. Ongoing maintenance helps keep the store secure, stable, and compatible as the business and its technology environment change.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-2">
          {/* POST-LAUNCH SUPPORT */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Ongoing Maintenance
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Post-Launch Support
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
                Support can include:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WARRANTY & WORKMANSHIP */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Accountability &amp; Scope
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Warranty &amp; Workmanship
              </h3>
              <div className="mt-4 space-y-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  Any post-launch warranty or workmanship coverage should follow the exact terms agreed in the project contract.
                </p>
                <p>
                  We do not guarantee a specific sales volume, revenue figure, traffic level, or conversion rate from the website alone. Ecommerce results also depend on products, pricing, traffic, competition, customer demand, marketing, and other factors outside the development project.
                </p>
                <p className="text-frame-fg font-semibold border-t border-frame-border/60 pt-3">
                  Our responsibility is to deliver the agreed architecture, functionality, integrations, and technical implementation according to the approved scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}