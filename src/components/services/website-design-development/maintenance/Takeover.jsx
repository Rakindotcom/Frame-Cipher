import { SectionIntro } from '../../../Kinetic'

const takeoverChecklist = [
  'Platform and technology stack',
  'Website access',
  'Hosting and domain setup',
  'Existing backups',
  'Security status',
  'Update backlog',
  'Plugin, app, or dependency issues',
  'Performance concerns',
  'Important integrations',
  'Known bugs',
  'Critical website functions',
]

export default function Takeover() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Seamless Transition" title="Website Maintenance for Existing or Third-Party Builds">
          You do not need to work with the original developer to maintain your website. We can take over maintenance for websites built by another agency, freelancer, internal team, or previous developer. Before ongoing maintenance begins, we review the current setup so we understand what we are taking responsibility for.
        </SectionIntro>

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Audit Protocol
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Initial Takeover Review
          </h3>
          <p className="mt-2 text-sm font-medium text-frame-muted-fg mb-6">We assess:</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {takeoverChecklist.map((chk, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-frame-bg p-3.5 border border-frame-border">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg">{chk}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
            <p>
              We then identify the priority issues and define a maintenance scope around the current condition of the website.
            </p>
            <p className="font-bold text-frame-fg">
              This gives the new maintenance relationship a documented starting point instead of assuming the site is already healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}