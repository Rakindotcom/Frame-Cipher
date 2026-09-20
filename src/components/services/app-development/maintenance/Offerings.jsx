import { SectionIntro, PosterButton } from '../../../Kinetic'

const maintenanceServices = [
  {
    title: "OS, SDK & Device Compatibility",
    desc: "Android and iOS regularly introduce new operating system versions, SDK requirements, and device changes. We review your application against relevant platform updates and make the changes needed to keep it working properly.",
    bullets: [
      "Android and iOS version compatibility",
      "SDK and dependency updates",
      "Deprecated API replacement",
      "Device compatibility checks",
      "Build and configuration updates",
      "Regression testing after platform changes",
      "App Store and Google Play technical requirements"
    ],
    footer: "We focus on compatibility before platform changes become production problems."
  },
  {
    title: "Bug Fixes & Crash Resolution",
    desc: "Every application can develop issues as users, devices, dependencies, and integrations change. We investigate reported bugs and production issues to identify the underlying cause rather than repeatedly treating the same symptom.",
    bullets: [
      "Crash investigation",
      "Functional bug fixes",
      "UI and interaction issues",
      "Login and authentication problems",
      "Payment and checkout issues",
      "Data-related errors",
      "Regression testing",
      "Root-cause investigation",
      "Post-release verification"
    ],
    footer: "We prioritize issues based on their impact on your users and business operations."
  },
  {
    title: "Performance Monitoring & Optimization",
    desc: "Slow screens, failed requests, crashes, and inefficient processes can affect the user experience. We monitor relevant application and infrastructure signals and investigate performance problems when they appear.",
    bullets: [
      "App performance checks",
      "Crash and error monitoring",
      "API response analysis",
      "Server health monitoring",
      "Database performance checks",
      "Memory and resource issues",
      "Slow application flows",
      "Performance optimization",
      "Regression testing after optimization"
    ],
    footer: "The goal is to keep performance issues visible before they become larger operational problems."
  },
  {
    title: "Security & Infrastructure Maintenance",
    desc: "Security requirements do not end when an application launches. We help keep the application, dependencies, and supporting infrastructure maintained as your technology environment changes.",
    bullets: [
      "Security patches",
      "Dependency updates",
      "Vulnerability reviews",
      "Server and hosting maintenance",
      "Database maintenance",
      "Backup and recovery checks",
      "Authentication and access reviews",
      "Configuration updates",
      "Security-related bug fixes"
    ],
    footer: "For applications with specific compliance requirements, the maintenance scope can be planned around those requirements."
  },
  {
    title: "Backend, API & Third-Party Integration Support",
    desc: "Mobile applications often depend on APIs, databases, payment systems, authentication services, analytics, and other external systems. A change in one system can affect the entire application. We maintain existing backend and integration components to help keep these connections working.",
    bullets: [
      "Existing API maintenance",
      "API error investigation",
      "Backend bug fixes",
      "Database-related issues",
      "Payment integration maintenance",
      "Authentication integrations",
      "Third-party service updates",
      "Integration monitoring",
      "API compatibility checks"
    ],
    footer: "This service focuses on maintaining existing systems. New API architecture or major API development can be handled as a separate development project."
  },
  {
    title: "App Release & Store Management",
    desc: "A technically complete update still needs to reach users safely. We support the release process by preparing, testing, and verifying application updates.",
    bullets: [
      "Version and build updates",
      "Release preparation",
      "Production build support",
      "Pre-release testing",
      "App Store submission support",
      "Google Play submission support",
      "Release verification",
      "Staged rollout support where appropriate",
      "Post-release issue monitoring",
      "Rollback planning"
    ],
    footer: "We help reduce the risk of releasing an update without understanding its production impact."
  },
  {
    title: "Feature Enhancements & UX Improvements",
    desc: "Maintenance does not always mean fixing something that is broken. As your business grows, you may need smaller product improvements without rebuilding the entire application.",
    bullets: [
      "Minor feature additions",
      "Existing feature improvements",
      "UI and UX refinements",
      "User-flow improvements",
      "Analytics-based improvements",
      "Third-party feature updates",
      "Small workflow changes",
      "Product experiments and testing support"
    ],
    footer: "Larger feature development can be scoped separately when it requires substantial development capacity."
  },
  {
    title: "Analytics, Monitoring & Reporting",
    desc: "Maintenance works better when your team can see what is happening inside the application. We use relevant application information to help identify recurring problems, performance issues, and maintenance priorities.",
    bullets: [
      "Application health",
      "Crash and error trends",
      "Performance issues",
      "Resolved bugs",
      "Pending issues",
      "Security and dependency updates",
      "Integration issues",
      "Completed maintenance work",
      "Recommended next steps"
    ],
    footer: "You receive clear communication about the work performed and issues that require attention."
  }
]

const maintenanceTypes = [
  {
    title: "Corrective Maintenance",
    desc: "Corrective maintenance addresses problems that already exist. This includes bugs, crashes, failed integrations, broken features, and other issues affecting application functionality.",
    details: "The process typically involves identifying the issue, finding its cause, applying the fix, testing the affected areas, and verifying the result."
  },
  {
    title: "Adaptive Maintenance",
    desc: "Adaptive maintenance keeps an application compatible with changes around it. These changes can come from operating systems, devices, SDKs, APIs, third-party services, infrastructure, or platform requirements.",
    examples: [
      "Android or iOS updates",
      "SDK changes",
      "Dependency changes",
      "API changes",
      "Third-party service updates",
      "Infrastructure changes"
    ]
  },
  {
    title: "Preventive Maintenance",
    desc: "Preventive maintenance focuses on reducing future problems. Instead of waiting for outdated components to cause failures, we review areas that may become difficult to maintain later.",
    examples: [
      "Dependency reviews",
      "Security updates",
      "Codebase cleanup",
      "Technical debt identification",
      "Monitoring improvements",
      "Backup checks",
      "Deprecated component replacement",
      "Performance reviews"
    ]
  },
  {
    title: "Perfective Maintenance",
    desc: "Perfective maintenance improves an application even when it is already functioning correctly. The focus can be usability, performance, maintainability, or product improvements.",
    examples: [
      "UX improvements",
      "Performance optimization",
      "Minor feature improvements",
      "Interface refinements",
      "Workflow improvements",
      "Maintainability improvements"
    ]
  }
]

const appsWeMaintain = [
  {
    title: "Android Apps",
    desc: "We maintain Android applications across supported Android versions and device environments. Support can include compatibility updates, bug fixes, performance optimization, security updates, dependency maintenance, and release support."
  },
  {
    title: "iOS Apps",
    desc: "We help maintain iOS applications as Apple introduces new operating system versions, SDK requirements, devices, and platform changes. Maintenance can cover compatibility, bugs, performance, dependencies, integrations, security, and release updates."
  },
  {
    title: "Cross-Platform Apps",
    desc: "Cross-platform applications have their own framework, dependency, and platform compatibility requirements. We can maintain applications built with supported cross-platform technologies while addressing both the shared codebase and platform-specific issues."
  },
  {
    title: "SaaS & Web Applications",
    desc: "SaaS applications require ongoing attention across the frontend, backend, database, APIs, infrastructure, authentication, and integrations. Our maintenance approach can cover application stability, security, performance, infrastructure, integrations, and incremental product improvements."
  },
  {
    title: "Enterprise Applications",
    desc: "Enterprise applications often involve complex workflows, integrations, user roles, internal systems, and security requirements. We can structure maintenance around application stability, integration reliability, security updates, technical improvements, and controlled releases."
  }
]

const whyOngoingMaintenance = [
  {
    title: "Skipping Maintenance Increases Technical Debt",
    desc: "Small technical problems can become larger when they remain unresolved. Outdated dependencies, deprecated components, inefficient code, and recurring bugs can make future development slower and more expensive. Regular maintenance helps identify these issues before they become harder to address."
  },
  {
    title: "OS & SDK Changes Can Break Existing Apps",
    desc: "An application that worked correctly last year may require updates after a major platform change. New operating systems can affect APIs, permissions, background processes, device behavior, and store requirements. Regular compatibility checks help your team prepare for these changes instead of reacting after users encounter problems."
  },
  {
    title: "Security Risks Grow Over Time",
    desc: "Old dependencies and unpatched components can create unnecessary security exposure. Security maintenance helps keep application components and supporting infrastructure updated as vulnerabilities and technical requirements change."
  },
  {
    title: "Performance Problems Affect User Experience",
    desc: "Users notice slow loading, crashes, failed requests, and unreliable features quickly. Performance monitoring helps identify problems that may not be obvious during development or basic testing."
  },
  {
    title: "Third-Party Integrations Can Fail",
    desc: "Your app may depend on payment providers, APIs, authentication services, analytics systems, maps, messaging services, or other external platforms. When those services change, your application may require corresponding updates."
  },
  {
    title: "Maintenance Helps Prevent Costly Rework",
    desc: "Regular maintenance keeps technical issues from accumulating. It can also make future feature development easier because your application remains closer to a supported and maintainable state."
  }
]

const takeoverStages = [
  {
    title: "Codebase & Architecture Assessment",
    desc: "We review the existing codebase to understand how the application is structured and maintained.",
    bullets: [
      "Application architecture",
      "Code organization",
      "Build configuration",
      "Technical dependencies",
      "Known technical debt",
      "Development documentation",
      "Maintainability concerns",
      "Areas requiring immediate attention"
    ]
  },
  {
    title: "Dependency & Security Review",
    desc: "We identify outdated, deprecated, or potentially problematic dependencies where they are relevant to the project. The review can also identify security maintenance requirements and components that require updates."
  },
  {
    title: "Infrastructure & Integration Review",
    desc: "An application rarely operates alone. We review relevant infrastructure, APIs, databases, authentication systems, payment services, third-party integrations, and deployment environments. This helps identify dependencies that could affect future maintenance."
  },
  {
    title: "Maintenance Baseline & Backlog",
    desc: "After assessment, we organize identified issues into a practical maintenance baseline.",
    bullets: [
      "Critical technical issues",
      "Compatibility requirements",
      "Security updates",
      "Performance concerns",
      "Integration issues",
      "Technical debt",
      "Recommended improvements",
      "Future maintenance priorities"
    ],
    footer: "This gives both teams a clearer starting point before ongoing support begins."
  }
]

const includedInEveryPlan = [
  {
    title: "Onboarding & App Health Review",
    desc: "We review the application before ongoing maintenance begins. This helps us understand the current codebase, dependencies, infrastructure, integrations, known issues, and technical priorities."
  },
  {
    title: "Compatibility & Security Updates",
    desc: "We monitor relevant platform and dependency changes and identify updates that require attention. Security maintenance is handled according to the application's technology and agreed scope."
  },
  {
    title: "Monitoring & Issue Detection",
    desc: "Relevant application health signals are monitored based on the maintenance plan. The goal is to identify crashes, errors, performance issues, and other technical problems that require investigation."
  },
  {
    title: "Bug Fixes & Technical Support",
    desc: "Bug-fix support is included according to the selected maintenance plan. We investigate reported issues, apply appropriate fixes, test affected functionality, and verify the result."
  },
  {
    title: "Reporting & Communication",
    desc: "You receive updates about maintenance activities, resolved issues, outstanding work, and relevant recommendations."
  },
  {
    title: "Direct Team Access",
    desc: "You communicate directly with the team handling your application's maintenance. This keeps technical discussions, issue reporting, and maintenance decisions connected."
  }
]

const supportLevels = [
  {
    level: "Critical Issues",
    desc: "Critical issues can affect the application's core operation, major user flows, revenue-generating functions, or a significant portion of users.",
    examples: [
      "Application-wide crashes",
      "Major production outages",
      "Critical payment failures",
      "Severe authentication failures",
      "Major backend failures"
    ]
  },
  {
    level: "High-Priority Issues",
    desc: "High-priority issues affect important functionality but may not completely stop the application from operating.",
    examples: [
      "Major feature failures",
      "Significant API problems",
      "Recurring crashes",
      "Important integration failures",
      "Serious performance degradation"
    ]
  },
  {
    level: "Standard Issues",
    desc: "Standard issues generally affect specific features or user flows without causing a widespread outage.",
    examples: [
      "Individual feature bugs",
      "UI problems",
      "Non-critical API errors",
      "Device-specific issues",
      "Minor performance problems"
    ]
  },
  {
    level: "Minor Requests",
    desc: "Minor requests usually involve small changes or improvements that do not require emergency intervention.",
    examples: [
      "Small UI adjustments",
      "Minor content changes",
      "Small configuration updates",
      "Low-impact usability improvements"
    ]
  }
]

const maintenanceVsDevelopment = {
  headers: ["Situation", "Appropriate Approach"],
  rows: [
    ["Existing app works but needs regular updates", "Maintenance"],
    ["Existing feature needs improvement", "Feature Enhancement"],
    ["Codebase has growing technical limitations", "Modernization"],
    ["Architecture is no longer practical to maintain", "Redevelopment"],
    ["Application needs a completely different product direction", "New Development"]
  ]
}

const approachesDetail = [
  {
    title: "Maintenance",
    desc: "Choose maintenance when the existing application remains suitable for your business and mainly needs ongoing technical support."
  },
  {
    title: "Feature Enhancement",
    desc: "Choose feature enhancement when the core application is stable but you need additional functionality or improvements."
  },
  {
    title: "Major Modernization",
    desc: "Modernization may be appropriate when the application needs significant technical improvements while preserving important parts of the existing product."
  },
  {
    title: "Complete Redevelopment",
    desc: "Redevelopment may make more sense when the existing architecture has become too difficult or costly to maintain."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Your maintenance work stays with our in-house team. This keeps communication, technical decisions, development, testing, and ongoing support connected."
  },
  {
    title: "Platform-Specific Support",
    desc: "Android, iOS, cross-platform, SaaS, and enterprise applications have different maintenance requirements. We structure support around the actual platform and architecture instead of treating every application the same way."
  },
  {
    title: "Existing Codebase Takeover",
    desc: "We can assess applications developed by another team. Our takeover process helps establish the application's current condition before ongoing maintenance begins."
  },
  {
    title: "Transparent Reporting",
    desc: "You receive clear information about completed work, current issues, maintenance activities, and recommended improvements."
  },
  {
    title: "Local & International Delivery",
    desc: "We provide app maintenance support from Bangladesh for businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE."
  },
  {
    title: "Long-Term Product Support",
    desc: "An application should not become difficult to maintain after launch. Our ongoing support model helps businesses manage technical changes, resolve issues, maintain integrations, and improve their applications over time."
  }
]


export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR APP MAINTENANCE & SUPPORT SERVICES */}
        <div>
          <SectionIntro
            eyebrow="Core Service Capabilities"
            title="Our App Maintenance & Support Services"
          >
            App maintenance involves more than fixing problems after they appear. We monitor the parts of your application that can change over time and keep the product aligned with new technical requirements.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {maintenanceServices.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
              >
                <div>
                  <span className="font-heading text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Discipline 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {service.desc}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4">
                    {service.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-frame-muted-fg">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <p className="text-xs font-medium italic text-frame-muted-fg">
                    {service.footer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: TYPES OF APP MAINTENANCE WE PROVIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Modalities
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Types of App Maintenance We Provide
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Different applications require different types of maintenance. We organize maintenance work around the reason the application needs an update.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {maintenanceTypes.map((type, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Category 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {type.desc}
                  </p>

                  {type.details && (
                    <p className="mt-3 text-xs font-medium text-frame-fg border-t border-frame-border/60 pt-3">
                      {type.details}
                    </p>
                  )}

                  {type.examples && (
                    <div className="mt-4 border-t border-frame-border/60 pt-3">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                        Examples include:
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                        {type.examples.map((ex, exIdx) => (
                          <li key={exIdx}>• {ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: APPS WE MAINTAIN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Scope
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Apps We Maintain
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We adapt the maintenance approach to the application&apos;s platform, architecture, integrations, and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {appsWeMaintain.map((app, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Platform 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {app.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: WHY YOUR BUSINESS NEEDS ONGOING APP MAINTENANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Lifecycle Realities
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Why Your Business Needs Ongoing App Maintenance
          </h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Launching an application is only the beginning of its technical lifecycle. Your application operates within an environment that continues to change. Operating systems update. Dependencies become outdated. APIs change. Security requirements evolve. User expectations also change.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOngoingMaintenance.map((reason, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pillar 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: TAKING OVER AN EXISTING APP */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Codebase Transition
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Taking Over an Existing App
            </h2>
            <div className="mt-3 max-w-3xl space-y-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>You do not have to return to the original development company for ongoing maintenance.</p>
              <p>Framecipher can assess an application built by another developer or agency and establish a practical maintenance baseline. Before taking responsibility for ongoing support, we review the application and its surrounding systems.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {takeoverStages.map((stage, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Takeover Phase 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {stage.desc}
                  </p>

                  {stage.bullets && (
                    <ul className="mt-4 space-y-1.5 border-t border-frame-border/60 pt-3 text-xs text-frame-muted-fg">
                      {stage.bullets.map((b, bIdx) => (
                        <li key={bIdx}>• {b}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {stage.footer && (
                  <div className="mt-4 border-t border-frame-border/60 pt-3">
                    <p className="text-xs font-semibold text-frame-fg">
                      {stage.footer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: WHAT’S INCLUDED IN EVERY MAINTENANCE PLAN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Standard SLA Inclusions
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What’s Included in Every Maintenance Plan
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The exact level of support changes by plan, but every engagement starts with a clear understanding of the application and its maintenance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedInEveryPlan.map((item, i) => (
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

        {/* SECTION 7: SUPPORT LEVELS & RESPONSE TIMES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Severity Matrix
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Support Levels &amp; Response Times
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Not every application issue has the same business impact. We categorize support requests by severity so critical problems can receive the appropriate level of attention. Specific response times should be defined in the service agreement based on the selected maintenance plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportLevels.map((lvl, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Severity Tier 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                    {lvl.level}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {lvl.desc}
                  </p>

                  <div className="mt-4 border-t border-frame-border/60 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                      Examples include:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                      {lvl.examples.map((ex, exIdx) => (
                        <li key={exIdx}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent border-t border-frame-border/60 pt-4">
            Response and resolution expectations depend on the agreed support plan, issue severity, and technical complexity.
          </p>
        </div>

        {/* SECTION 8: APP MAINTENANCE VS. NEW DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Decision Matrix
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Maintenance vs. New Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Not every application problem requires a new app. Sometimes maintenance is enough. Other situations require modernization or redevelopment.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  {maintenanceVsDevelopment.headers.map((h, i) => (
                    <th key={i} className="p-4 border-r-2 border-frame-border last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {maintenanceVsDevelopment.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={`p-4 border-r-2 border-frame-border last:border-r-0 ${cIdx === 1 ? 'font-bold text-frame-accent' : 'font-medium text-frame-fg'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachesDetail.map((app, i) => (
              <div key={i} className="border border-frame-border bg-frame-muted/10 p-5">
                <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                  {app.title}
                </h4>
                <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent border-t border-frame-border/60 pt-4">
            We assess the application before recommending the appropriate path.
          </p>
        </div>

        {/* SECTION 9: WHY CHOOSE FRAMECIPHER FOR APP MAINTENANCE & SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for App Maintenance &amp; Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Maintenance requires more than reacting to support tickets. Your team needs a partner that understands the application, its business purpose, and the technical environment around it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{i + 1}
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


        {/* SECTION 11: APP MAINTENANCE SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Support
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            App Maintenance Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides ongoing application maintenance from Bangladesh for businesses that need a reliable technical partner after launch.
            </p>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                App Maintenance in Bangladesh
              </h4>
              <p className="mt-1">
                We support businesses in Dhaka and across Bangladesh with ongoing application maintenance, bug fixes, platform updates, security maintenance, performance support, and technical improvements. Our local delivery model makes it easier to coordinate directly with your team while maintaining a structured engineering workflow.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                International App Support
              </h4>
              <p className="mt-1">
                We also work with businesses targeting international markets, including the US, UK, Australia, Canada, and UAE. Remote collaboration allows us to support applications across different markets while keeping maintenance communication organized and transparent.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your Maintenance Plan &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
