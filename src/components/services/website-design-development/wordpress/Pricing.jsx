import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Blog / Portfolio',
    price: '৳25,000',
    drivers: 'Content volume, category structure, and custom design',
  },
  {
    type: 'Business Website',
    price: '৳45,000',
    drivers: 'Page count, custom functionality, and integrations',
  },
  {
    type: 'E-commerce Store',
    price: '৳90,000',
    drivers: 'Product count, payment gateways, and inventory requirements',
  },
  {
    type: 'Membership / Directory Site',
    price: '৳120,000+',
    drivers: 'User accounts, subscriptions, access rules, and custom functionality',
  },
  {
    type: 'Migration or Complex Custom Build',
    price: 'Custom Quote',
    drivers: 'Content volume, migration complexity, integrations, and custom development',
  },
]

const timelines = [
  { type: 'Blog / Portfolio', time: '1–2 weeks' },
  { type: 'Business Website', time: '2–3 weeks' },
  { type: 'E-commerce Store', time: '4–6 weeks' },
  { type: 'Membership / Directory Site', time: '5–8 weeks' },
  { type: 'Migration / Complex Custom Build', time: '5–10+ weeks' },
]

const ownershipDeliverables = [
  'WordPress administrator access',
  'Hosting and domain access where applicable',
  'Website content and page-management access',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for supported content-management tasks',
]

const maintenanceItems = [
  'WordPress core, theme, and plugin updates',
  'Security monitoring and hardening',
  'Backup and recovery management',
  'Performance checks and optimization',
  'Technical troubleshooting',
  'Minor content or functionality updates',
  'Compatibility checks after major updates',
  'Future feature improvements',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* 1. WORDPRESS DEVELOPMENT PRICING */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Investment &amp; Tiers
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WordPress Development Pricing
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              WordPress development pricing depends on the type of website, page count, theme approach, functionality, plugin requirements, content volume, integrations, and migration needs. The following ranges provide a starting point for typical projects.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Site Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">{tier.type}</td>
                    <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">{tier.price}</td>
                    <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg leading-relaxed">{tier.drivers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
              Pricing is indicative rather than fixed. Final pricing is based on the project scope and requirements confirmed before development begins.
            </p>
            <div className="shrink-0">
              <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORDPRESS DEVELOPMENT TIMELINE */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Delivery Schedule
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WordPress Development Timeline
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              WordPress projects can take from about one week to several weeks depending on the website type, content volume, custom functionality, integrations, and migration requirements.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm max-w-4xl">
            <table className="w-full min-w-[500px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.type}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8 max-w-4xl">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Projects can move faster when content, brand assets, technical access, and required integrations are ready before development begins. Additional revisions, delayed approvals, custom functionality, or migration issues may extend the timeline.
            </p>
            <p className="mt-4 text-sm md:text-base font-semibold text-frame-fg">
              The final delivery schedule is confirmed after reviewing the complete project scope.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WEBSITE OWNERSHIP, EDITORIAL HANDOVER & TRAINING */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Assets &amp; Independence
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Ownership, Editorial Handover &amp; Training
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Your WordPress website should remain a practical business asset after development is complete.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <p className="text-sm md:text-base font-medium text-frame-fg/90 mb-6">
              The project agreement defines ownership, access, deliverables, and handover terms. Depending on the platform and project scope, this may include:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {ownershipDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-frame-border/80 bg-frame-muted/20 p-4">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-frame-border/80 pt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>
                We can also guide your team through routine WordPress tasks such as editing pages, publishing content, managing supported sections, and updating approved website information.
              </p>
              <p>
                Any source files, custom code, licenses, or third-party assets are handled according to the terms defined in the project agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POST-LAUNCH WORDPRESS SUPPORT & MAINTENANCE */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Long-Term Reliability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Post-Launch WordPress Support &amp; Maintenance
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              After launch, WordPress websites may require ongoing updates, security checks, backups, performance monitoring, troubleshooting, and future improvements.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <p className="text-sm md:text-base font-medium text-frame-fg/90 mb-6">
              Development projects include the launch support and handover defined in the project agreement. Ongoing maintenance can be provided separately and may include:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {maintenanceItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-frame-border/80 bg-frame-muted/20 p-4">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-frame-border/80 pt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Ongoing maintenance, new features, and larger changes are handled according to a separate maintenance scope.
              </p>
              <p className="text-xs md:text-sm italic">
                WordPress security and performance also depend on hosting, third-party plugins, future updates, and ongoing management. No website can be guaranteed immune to every future security or compatibility issue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
