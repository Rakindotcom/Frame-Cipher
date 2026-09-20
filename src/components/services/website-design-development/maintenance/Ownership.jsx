import { SectionIntro } from '../../../Kinetic'

const documentationItems = [
  'Website and hosting access',
  'Domain management',
  'CMS or application access',
  'Analytics and tracking',
  'Important integrations',
  'Backup and recovery procedures',
  'Maintenance scope',
  'Technical notes',
  'Third-party accounts',
]

export default function Ownership() {
  return (
    <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Asset Security & Control" title="Website Ownership, Access & Documentation">
          Website maintenance should not mean giving up control of your digital assets. We work with the agreed access structure for your website, hosting, domain, analytics, third-party services, and other systems required for maintenance.
        </SectionIntro>

        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
            Where applicable, documentation can cover:
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documentationItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 border border-frame-border bg-frame-muted/10 p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
            <p>
              Domain and hosting ownership should remain clearly documented and aligned with the project agreement.
            </p>
            <p className="font-bold text-frame-fg">
              Our goal is to make the maintenance relationship accountable without making the business dependent on one individual to understand how its website works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}