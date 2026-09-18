import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Custom Marketing Site',
    price: '৳120,000',
    description: 'Custom design, moderate functionality, no complex backend',
    timeline: '4–6 weeks',
    featured: false,
  },
  {
    name: 'Standard Web Application',
    price: '৳300,000',
    description: 'User accounts, custom database, moderate integrations',
    timeline: '8–12 weeks',
    featured: true,
  },
  {
    name: 'Complex Web Application',
    price: '৳500,000+',
    description: 'Multiple roles, extensive integrations, custom business logic',
    timeline: '12–20 weeks',
    featured: false,
  },
  {
    name: 'Enterprise / Large-Scale Platform',
    price: 'Custom Quote',
    description: 'High-volume infrastructure, multiple systems, ongoing development',
    timeline: '20+ weeks',
    featured: false,
  },
]

const pricingTable = [
  {
    type: 'Custom Marketing Site',
    price: '৳120,000',
    drivers: 'Custom design, moderate functionality, no complex backend',
  },
  {
    type: 'Standard Web Application',
    price: '৳300,000',
    drivers: 'User accounts, custom database, moderate integrations',
  },
  {
    type: 'Complex Web Application',
    price: '৳500,000+',
    drivers: 'Multiple roles, extensive integrations, custom business logic',
  },
  {
    type: 'Enterprise / Large-Scale Platform',
    price: 'Custom Quote',
    drivers: 'High-volume infrastructure, multiple systems, ongoing development',
  },
]

const timelineTable = [
  {
    type: 'Custom Marketing Site',
    timeline: '4–6 weeks',
  },
  {
    type: 'Standard Web Application',
    timeline: '8–12 weeks',
  },
  {
    type: 'Complex Web Application',
    timeline: '12–20 weeks',
  },
  {
    type: 'Enterprise / Large-Scale Platform',
    timeline: '20+ weeks',
  },
]

const inclusions = [
  'Technical discovery',
  'Architecture planning',
  'Custom UI/UX',
  'Full-stack development',
  'Security planning',
  'Testing',
  'Launch support',
]

const handoverItems = [
  'Source code repository access',
  'Deployment and hosting access',
  'Relevant database access',
  'Third-party account access',
  'Environment configuration documentation',
  'API documentation',
  'Technical documentation',
  'Design files',
  'Admin access',
  'Basic system walkthrough',
]

const ongoingSupportItems = [
  'Security and dependency updates',
  'Bug fixes',
  'Performance optimization',
  'Monitoring and troubleshooting',
  'New features',
  'API and integration changes',
  'Database or application improvements',
  'UX refinements',
  'Technical maintenance',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION 1: PRICING */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment &amp; Scope
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Custom / Next.js Development Pricing
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Custom development pricing depends heavily on architecture, functionality, integrations, user roles, data requirements, and infrastructure. Because every project is different, the figures below should be treated as starting references rather than fixed packages.
          </p>
        </div>

        {/* PACKAGES CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Timeline: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {pkg.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING TABLE */}
        <div className="mt-16 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
              {pricingTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-6 font-bold text-frame-fg">{row.type}</td>
                  <td className="p-5 md:p-6 font-bold text-frame-accent">{row.price}</td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.drivers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INCLUSIONS ACROSS CUSTOM PROJECTS */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Included Across Custom Projects:
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg">
            Final pricing is confirmed after the scope and architecture are reviewed.
          </p>
        </div>

        {/* SECTION 2: TIMELINE */}
        <div className="mt-20 border-t-2 border-frame-border pt-16">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Delivery Roadmaps
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Custom / Next.js Development Timeline
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              Custom projects take longer than standard platform websites because the functionality and architecture are built around the specific requirements of the application.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[500px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
                {timelineTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-6 font-bold text-frame-fg">{row.type}</td>
                    <td className="p-5 md:p-6 font-bold text-frame-accent">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
            Timeline depends on feature scope, content readiness, integrations, approvals, technical dependencies, and changes introduced during development. Projects generally move more efficiently when requirements, existing system access, content, and integration details are confirmed before development begins.
          </p>
        </div>

        {/* SECTION 3: SOURCE CODE OWNERSHIP, DOCUMENTATION & HANDOVER */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 sm:p-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              IP &amp; Deliverables
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Source Code Ownership, Documentation &amp; Handover
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A custom application should remain understandable and manageable after development is complete. Depending on the project agreement, handover can include:
            </p>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {handoverItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border/60 pt-6 space-y-2 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
            <p>
              Ownership of source code, intellectual property, licenses, and third-party accounts is defined in the project agreement.
            </p>
            <p className="font-semibold text-frame-fg">
              The goal is to give your team clear control over the agreed deliverables and the information needed to continue operating the application.
            </p>
          </div>
        </div>

        {/* SECTION 4: POST-LAUNCH SUPPORT & ONGOING DEVELOPMENT */}
        <div className="mt-20 border-2 border-frame-border bg-frame-bg p-6 sm:p-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Evolution
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Support &amp; Ongoing Development
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A custom application continues to evolve after launch as users, products, dependencies, and business requirements change. Ongoing support can include:
            </p>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
            {ongoingSupportItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
            Ongoing development is scoped around your product roadmap and technical priorities.
          </p>
        </div>
      </div>
    </section>
  )
}
