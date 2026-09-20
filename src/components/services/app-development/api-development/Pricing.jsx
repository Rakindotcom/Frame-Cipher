import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: "Single Integration",
    price: "৳60,000",
    timeline: "~1–2 weeks",
    featured: false,
    includes: [
      "One third-party service",
      "Standard authentication",
      "Basic testing",
      "Error handling",
      "Launch support"
    ]
  },
  {
    name: "Custom API (Standard)",
    price: "৳150,000",
    timeline: "~3–5 weeks",
    featured: true,
    includes: [
      "REST or GraphQL API",
      "Moderate endpoint count",
      "Documentation included",
      "Authentication & validation",
      "Integration testing",
      "Monitoring & alerting"
    ]
  },
  {
    name: "Multi-System Integration",
    price: "৳280,000",
    timeline: "~5–8 weeks",
    featured: false,
    includes: [
      "Multiple third-party systems",
      "Webhook handling",
      "Retry logic",
      "Data mapping",
      "Load or performance testing",
      "Error & queue handling"
    ]
  },
  {
    name: "Complex / Enterprise Integration",
    price: "Custom Quote",
    timeline: "~8+ weeks",
    featured: false,
    includes: [
      "High-volume data sync",
      "Multiple legacy systems",
      "Compliance-related requirements",
      "Custom authentication",
      "Dedicated architecture",
      "Ongoing support arrangement"
    ]
  }
]

const includedItems = [
  "Strategy and architecture",
  "API development",
  "Third-party integration",
  "Authentication and authorization",
  "API documentation",
  "Integration testing",
  "Load or performance testing",
  "Error handling",
  "Webhook implementation",
  "Retry handling",
  "Monitoring and alerting",
  "Launch support"
]

const timelineFactors = [
  "Multiple systems",
  "Complex data mapping",
  "Legacy infrastructure",
  "Custom authentication",
  "High-volume synchronization",
  "Extensive testing",
  "Compliance requirements",
  "Limited third-party documentation"
]

const governancePoints = [
  {
    title: "Project Scope",
    desc: "Before development starts, we define the agreed functionality, integrations, deliverables, timeline, and responsibilities."
  },
  {
    title: "Stakeholder Reviews",
    desc: "Architecture, development, and testing stages include review points where applicable. Your approval helps ensure the project continues in the agreed direction."
  },
  {
    title: "Third-Party Dependencies",
    desc: "Some API behavior depends on external providers. We cannot guarantee that a third-party service will never experience an outage, change its API, reject requests, or introduce new requirements. We can, however, build agreed error handling, retry logic, monitoring, and recovery mechanisms around those dependencies."
  },
  {
    title: "Change Requests",
    desc: "Requests outside the agreed scope may require additional development time and cost. Any significant scope change should be reviewed before implementation."
  },
  {
    title: "Post-Launch Support",
    desc: "Launch support can include checking the deployed integration, confirming expected data flow, and addressing agreed launch issues. Ongoing API maintenance is available separately."
  },
  {
    title: "Workmanship Warranty",
    desc: "Any workmanship warranty should follow the warranty period and terms stated in the final proposal or project agreement. Third-party outages, provider-side API changes, new requirements, and functionality outside the approved scope are not treated as development defects."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Scope Guidelines"
          title="API Development Pricing & Timeline"
        >
          API development pricing depends on the number of systems, endpoint complexity, authentication requirements, data flow, third-party dependencies, and testing requirements.
        </SectionIntro>

        {/* PACKAGES GRID */}
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
                    Most Popular
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
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                {pkg.includes && (
                  <div className="mt-4 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                      What&apos;s Included:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {pkg.includes.map((item, idx) => (
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
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT IS INCLUDED & WHAT CAN AFFECT TIMELINE */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* WHAT IS INCLUDED */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Is Included
            </h2>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
              Depending on the selected scope, projects can include:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includedItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-frame-muted-fg">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-frame-border/60 pt-4">
              <p className="text-xs md:text-sm font-medium text-frame-muted-fg italic">
                Prices shown are starting guidelines. The final proposal confirms the project scope, fee, deliverables, and delivery schedule before work begins.
              </p>
            </div>
          </div>

          {/* WHAT CAN AFFECT THE TIMELINE */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Can Affect the Timeline?
            </h2>
            <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Most API and integration projects take 1–8+ weeks. A single third-party integration usually moves faster than a multi-system integration. Projects can take longer when they involve:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {timelineFactors.map((factor, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm font-medium text-frame-muted-fg">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-frame-border/60 pt-4">
              <p className="text-xs md:text-sm font-semibold text-frame-fg">
                Projects also move faster when third-party documentation, credentials, API access, and required approvals are available early.
              </p>
            </div>
          </div>
        </div>

        {/* PROJECT SCOPE, REVIEW & SUPPORT */}
        <div className="mt-16">
          <div className="mb-8 items-end gap-8 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8 lg:grid lg:grid-cols-[1.5fr_1fr]">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
              Project Scope, Review &amp; Support
            </h2>
            <p className="mt-2 text-sm font-medium text-frame-muted-fg md:text-base lg:mt-0">
              Clear scope helps prevent unexpected development changes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {governancePoints.map((gov, gIdx) => (
              <div key={gIdx} className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
                <span className="font-heading text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Checkpoint 0{gIdx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {gov.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {gov.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

