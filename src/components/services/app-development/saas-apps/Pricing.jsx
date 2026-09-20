import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: "SaaS MVP",
    price: "৳450,000",
    timeline: "10–14 weeks",
    featured: false,
    includes: [
      "Core workflow",
      "Basic multi-tenancy",
      "Initial billing",
      "Standard admin dashboard",
      "Foundational testing"
    ]
  },
  {
    name: "Standard SaaS Product",
    price: "৳800,000",
    timeline: "16–22 weeks",
    featured: true,
    includes: [
      "Full multi-tenant architecture",
      "Tiered subscription billing",
      "Team accounts & roles",
      "Admin dashboards",
      "API integrations",
      "Launch support"
    ]
  },
  {
    name: "Advanced SaaS Platform",
    price: "৳1,400,000",
    timeline: "22–30 weeks",
    featured: false,
    includes: [
      "Complex permission model",
      "Usage-based billing",
      "Extensive integrations",
      "Automation & background jobs",
      "Analytics & reporting",
      "Advanced security"
    ]
  },
  {
    name: "Enterprise-Scale SaaS",
    price: "Custom Quote",
    timeline: "30+ weeks",
    featured: false,
    includes: [
      "Large-scale infrastructure",
      "Advanced security & compliance",
      "Complex integrations",
      "High availability",
      "Dedicated architecture",
      "Ongoing SLA support"
    ]
  }
]

const pricingFactors = [
  "Number of user roles",
  "Multi-tenant architecture",
  "Subscription model",
  "Billing complexity",
  "Admin dashboards",
  "APIs and integrations",
  "Automation",
  "Analytics",
  "Security requirements",
  "Infrastructure",
  "Mobile applications",
  "Enterprise requirements"
]

const governanceCheckpoints = [
  {
    title: "Project Scope",
    desc: "Features, user roles, integrations, supported environments, revision rounds, and deliverables are agreed before development begins."
  },
  {
    title: "Client Approvals",
    desc: "You review important requirements, designs, functionality, and production milestones before the project progresses."
  },
  {
    title: "Workmanship Warranty",
    desc: "Any warranty or defect-fixing period is provided according to Framecipher's actual terms and the project agreement."
  },
  {
    title: "Third-Party Dependencies",
    desc: "Payment providers, cloud services, APIs, authentication services, email platforms, and other external systems can affect functionality or timing."
  },
  {
    title: "Post-Launch Support",
    desc: "Bug fixes, infrastructure support, platform updates, new features, and ongoing development can be provided under an agreed support arrangement."
  }
]

const postLaunchItems = [
  {
    title: "Bug Fixes & Technical Support",
    desc: "Investigate application bugs, API issues, crashes, and other technical problems after launch."
  },
  {
    title: "Security & Dependency Updates",
    desc: "Keep frameworks, libraries, packages, and infrastructure components current based on the product's maintenance needs."
  },
  {
    title: "Performance Monitoring",
    desc: "Review application behavior, infrastructure, database performance, and other important technical indicators as usage grows."
  },
  {
    title: "Framework & Infrastructure Updates",
    desc: "Update application frameworks, deployment environments, dependencies, and infrastructure when required."
  },
  {
    title: "Feature Enhancements",
    desc: "Add new functionality and improve existing workflows as customer needs and the product roadmap develop."
  },
  {
    title: "Billing & Integration Support",
    desc: "Maintain payment integrations, APIs, webhooks, communication services, and other connected systems as they evolve."
  },
  {
    title: "Future Product Releases",
    desc: "Plan, build, test, and deploy future product updates based on the agreed development scope."
  },
  {
    title: "Tenant Isolation & DB Health Audits",
    desc: "Regular multi-tenant data boundary checks, automated query profiling, backup recovery drills, and database index tuning."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: SAAS DEVELOPMENT PRICING AND TIMELINE */}
        <div>
          <SectionIntro
            eyebrow="Scope & Investment"
            title="SaaS Development Pricing and Timeline"
          >
            SaaS development cost depends on the product model, tenant architecture, number of user roles, billing complexity, integrations, backend requirements, infrastructure, and testing scope.
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
                  <div className="mt-4 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                      What&apos;s Included:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {tier.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton href="/contact" variant={tier.featured ? 'accent' : 'outline'} className="w-full text-xs">
                    Get Free Consultation &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING FACTORS */}
          <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
            <h4 className="font-heading text-base md:text-lg font-bold uppercase text-frame-fg">
              Pricing Factors
            </h4>
            <p className="mt-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-muted-fg">
              The final cost can change based on:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pricingFactors.map((factor, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold italic text-frame-fg border-t border-frame-border/60 pt-4">
              We confirm the final scope, deliverables, timeline, and price before development begins.
            </p>
          </div>
        </div>

        {/* SECTION 2: SAAS PROJECT SCOPE, WARRANTY & SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8 items-end gap-8 lg:grid lg:grid-cols-[1.5fr_1fr] lg:mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Project Governance
              </span>
              <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                SaaS Project Scope, Warranty &amp; Support
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base lg:mt-0">
              Every SaaS project should have clear expectations around scope, revisions, ownership, support, and third-party dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {governanceCheckpoints.map((item, i) => (
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

        {/* SECTION 3: POST-LAUNCH SAAS SUPPORT & MAINTENANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8 items-end gap-8 lg:grid lg:grid-cols-[1.5fr_1fr] lg:mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Lifecycle &amp; Maintenance
              </span>
              <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                Post-Launch SaaS Support &amp; Maintenance
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base lg:mt-0">
              A SaaS product does not stop evolving after its first production release.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Support Area 0{idx + 1}
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
