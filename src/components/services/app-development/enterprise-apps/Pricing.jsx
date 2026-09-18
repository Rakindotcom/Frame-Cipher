import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: "Departmental Tool",
    price: "৳500,000",
    costDrivers: "Single department, limited integrations, standard roles",
    timeline: "12–16 weeks",
    featured: false
  },
  {
    name: "Cross-Departmental System",
    price: "৳900,000",
    costDrivers: "Multiple departments, ERP integration, role-based access",
    timeline: "18–24 weeks",
    featured: true
  },
  {
    name: "Complex Enterprise Platform",
    price: "৳1,600,000",
    costDrivers: "Multiple legacy integrations, advanced security, higher user volume",
    timeline: "24–36 weeks",
    featured: false
  },
  {
    name: "Large-Scale Enterprise System",
    price: "Custom Quote",
    costDrivers: "Organization-wide deployment, extensive integrations, dedicated architecture",
    timeline: "36+ weeks",
    featured: false
  }
]

const projectGovernance = [
  {
    title: "Project Scope",
    desc: "Features, user roles, integrations, environments, supported systems, revision rounds, and deliverables are agreed before development begins."
  },
  {
    title: "Stakeholder Approvals",
    desc: "Important requirements, designs, architecture decisions, testing milestones, and rollout stages are reviewed with the appropriate stakeholders."
  },
  {
    title: "Workmanship Warranty",
    desc: "Any defect-fixing or workmanship warranty is provided according to Framecipher's actual terms and the project agreement."
  },
  {
    title: "Third-Party Dependencies",
    desc: "ERPs, identity providers, APIs, cloud services, legacy systems, and other external platforms can affect project functionality, availability, and delivery timelines."
  },
  {
    title: "Change Requests",
    desc: "Requirements outside the approved scope are reviewed separately based on their potential impact on architecture, cost, resources, and timeline."
  },
  {
    title: "Post-Launch Support",
    desc: "Ongoing maintenance, infrastructure support, security updates, integrations, and new functionality can be provided through an agreed support arrangement."
  }
]

const supportSlaItems = [
  {
    title: "Application Monitoring",
    desc: "Monitor application health, errors, integrations, infrastructure, and other important production signals."
  },
  {
    title: "Incident Response",
    desc: "Investigate production issues according to the agreed support process, priority structure, and escalation path."
  },
  {
    title: "Bug Fixes",
    desc: "Identify, resolve, test, and release defects discovered after launch according to the applicable support arrangement."
  },
  {
    title: "Security Updates",
    desc: "Review application dependencies, security-sensitive components, and relevant infrastructure as the system evolves."
  },
  {
    title: "Performance Optimization",
    desc: "Investigate application, database, API, or infrastructure bottlenecks when performance changes or workloads increase."
  },
  {
    title: "Infrastructure Support",
    desc: "Support agreed cloud environments, backups, monitoring, deployment processes, and infrastructure requirements."
  },
  {
    title: "Feature Enhancements",
    desc: "Continue developing workflows, integrations, reports, and other functionality as organizational requirements change."
  },
  {
    title: "SLA-Based Support Options",
    desc: "Where offered, support arrangements can define response targets, escalation paths, support windows, priorities, and service responsibilities."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: ENTERPRISE APP DEVELOPMENT PRICING & TIMELINE */}
        <div>
          <SectionIntro
            eyebrow="Scope & Investment"
            title="Enterprise App Development Pricing & Timeline"
          >
            Enterprise pricing depends on application complexity, integration scope, number of user roles, security requirements, existing systems, data migration, infrastructure, and rollout needs.
          </SectionIntro>

          {/* PRICING TIERS GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                  tier.featured
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                <div>
                  {tier.featured && (
                    <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                      Most Requested
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.name}
                  </h3>
                  <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {tier.timeline}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {tier.costDrivers}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton href="/contact" variant={tier.featured ? 'accent' : 'outline'} className="w-full text-xs">
                    Get Free Consultation &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING TABLE */}
          <div className="mt-12 overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Project Type</th>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Starting Price</th>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">What Drives the Cost</th>
                  <th className="p-4">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {tier.name}
                    </td>
                    <td className="p-4 font-bold text-frame-accent border-r-2 border-frame-border whitespace-nowrap">
                      {tier.price}
                    </td>
                    <td className="p-4 font-medium text-frame-fg border-r-2 border-frame-border">
                      {tier.costDrivers}
                    </td>
                    <td className="p-4 font-medium text-frame-fg whitespace-nowrap">
                      {tier.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm font-semibold italic text-frame-fg border-t border-frame-border/60 pt-4">
            The final price is confirmed after discovery, scope definition, and technical assessment.
          </p>
        </div>

        {/* SECTION 2: ENTERPRISE PROJECT SCOPE, WARRANTY & SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Project Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Project Scope, Warranty &amp; Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise projects require clear expectations around requirements, approvals, responsibilities, revisions, third-party dependencies, and post-launch services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectGovernance.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Standard 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: ENTERPRISE SUPPORT, MAINTENANCE & SLA */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Operations &amp; SLA
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Support, Maintenance &amp; SLA
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise applications can support daily business operations, so post-launch services should match the organization&apos;s technical and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportSlaItems.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  SLA Discipline 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
