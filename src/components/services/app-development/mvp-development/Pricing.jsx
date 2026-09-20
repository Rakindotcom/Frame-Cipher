import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: "Minimal MVP",
    price: "৳180,000",
    timeline: "~4–6 weeks",
    featured: false,
    includes: [
      "Single core workflow",
      "Basic backend",
      "One platform",
      "Standard UI/UX",
      "Core testing"
    ]
  },
  {
    name: "Standard MVP",
    price: "৳300,000",
    timeline: "~6–10 weeks",
    featured: true,
    includes: [
      "Multiple core features",
      "Standard backend",
      "Single platform",
      "Custom UI/UX",
      "API integrations",
      "Launch support"
    ]
  },
  {
    name: "Multi-Platform MVP",
    price: "৳450,000",
    timeline: "~10–14 weeks",
    featured: false,
    includes: [
      "Core functionality on web & mobile",
      "Moderate backend",
      "Shared codebase",
      "Payment or API integration",
      "Cross-device testing"
    ]
  },
  {
    name: "Complex MVP",
    price: "Custom Quote",
    timeline: "~14+ weeks",
    featured: false,
    includes: [
      "Multiple core workflows",
      "Advanced backend",
      "Extensive integrations",
      "Real-time functionality",
      "Dedicated architecture",
      "Ongoing support arrangement"
    ]
  }
]

const timelineFactors = [
  "Multiple platforms",
  "Complex user workflows",
  "Advanced backend requirements",
  "Payment systems",
  "Multiple third-party APIs",
  "Real-time functionality",
  "Complex authentication",
  "Large data requirements",
  "Extensive testing",
  "Advanced analytics",
  "Legacy-system integration",
  "Complex administrative functionality"
]

const handoverItems = [
  "Source code",
  "Repository access",
  "Project documentation",
  "API documentation where applicable",
  "Database information",
  "Deployment information",
  "Design files where included",
  "Third-party integration details",
  "Environment and configuration information",
  "Basic technical handoff",
  "Development guidance for the next phase"
]

const governancePoints = [
  {
    title: "Project Scope",
    desc: "Before development begins, we define the agreed functionality, platforms, integrations, deliverables, responsibilities, and expected timeline. Features outside that scope can be considered for a later phase or handled through an approved change request."
  },
  {
    title: "Review & Approval",
    desc: "Design and development stages include review points where applicable. You can review the agreed work before the project moves into the next stage. This keeps decisions visible and helps prevent major scope changes late in development."
  },
  {
    title: "Third-Party Dependencies",
    desc: "MVPs may depend on payment providers, APIs, cloud services, app stores, analytics platforms, or other external systems. We can build and test the integration within the agreed scope, but we cannot control outages, policy changes, API changes, approval delays, or service restrictions imposed by third-party providers."
  },
  {
    title: "Change Requests",
    desc: "New features or major changes after scope approval may affect the project cost and timeline. Significant changes should be reviewed before implementation so their impact is clear."
  },
  {
    title: "Post-Launch Support",
    desc: "Launch support can include deployment checks, agreed issue resolution, and confirmation that the core functionality is working as expected. Ongoing maintenance and additional product development can be provided separately when required."
  },
  {
    title: "Workmanship Warranty",
    desc: "Any workmanship warranty should follow the period and terms stated in the final proposal or project agreement. The warranty should apply to qualifying development defects within the agreed scope. Third-party outages, provider-side changes, new requirements, user-generated content, and functionality outside the approved scope should be handled separately."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Scope Guidelines"
          title="MVP Development Pricing & Timeline"
        >
          MVP development pricing depends on the number of platforms, core workflows, backend complexity, integrations, authentication, payment requirements, testing needs, and overall scope.
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

        {/* WHAT AFFECTS COST & TIMELINE AND MVP OWNERSHIP */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* WHAT AFFECTS TIMELINE */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Affects MVP Cost &amp; Timeline?
            </h2>
            <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Most MVPs can take approximately 4–14+ weeks, depending on scope. Projects can take longer when they involve:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {timelineFactors.map((factor, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm font-medium text-frame-muted-fg">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-frame-border/60 pt-4 space-y-2 text-xs md:text-sm font-medium text-frame-muted-fg">
              <p className="font-semibold text-frame-fg">
                Projects can move faster when the core hypothesis, scope, content, design requirements, third-party documentation, credentials, and approvals are available early.
              </p>
              <p className="italic">
                The final timeline should be confirmed after reviewing the actual product requirements.
              </p>
            </div>
          </div>

          {/* MVP OWNERSHIP & HANDOVER */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              MVP Ownership &amp; Handover
            </h2>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
              Your MVP should remain usable after the development engagement ends. The exact handover package depends on the project agreement, but an MVP handover can include:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {handoverItems.map((item, idx) => (
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
              <p className="text-xs md:text-sm font-semibold text-frame-fg">
                Ownership, access, documentation, and handover responsibilities should be clearly defined in the final project agreement.
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
              Clear scope helps keep MVP development focused and prevents the first release from expanding into the entire product roadmap.
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
