import { SectionIntro, PosterButton } from '../../../Kinetic'

const mvpServices = [
  {
    title: "Idea Validation & Scope Definition",
    desc: "Before development starts, we identify what your MVP actually needs to prove. We review the product idea, target users, business assumptions, and proposed workflow to determine what belongs in the first release and what can wait.",
    label: "What We Do",
    bullets: [
      "Core hypothesis definition",
      "Target user definition",
      "Problem and solution review",
      "Essential user journey mapping",
      "Feature prioritization",
      "Competitor and market review",
      "MVP scope definition",
      "Initial technical feasibility review",
      "Project priorities and constraints"
    ],
    footer: "The goal is to create a focused MVP scope instead of turning the first release into a smaller version of the entire product roadmap."
  },
  {
    title: "MVP Product Strategy & Feature Prioritization",
    desc: "An MVP can become expensive when every proposed feature is treated as essential. We separate the functionality required for validation from features that can be developed after the initial product receives real-world feedback.",
    label: "We consider:",
    bullets: [
      "Which problem the product needs to solve",
      "Which users need to test it",
      "Which workflow proves the core value",
      "Which features are essential to that workflow",
      "Which features can wait",
      "Which assumptions carry the most risk",
      "What evidence should influence the next product decision"
    ],
    footer: "This creates a practical feature roadmap with a clear boundary between the MVP and future development."
  },
  {
    title: "Rapid UI/UX Design & Prototyping",
    desc: "MVP design should move quickly without making the product too rough to evaluate. We design the core user experience around the workflows that matter most to the validation goal.",
    label: "What We Do",
    bullets: [
      "User-flow mapping",
      "Core-flow wireframing",
      "Functional UI design",
      "Clickable prototypes",
      "Mobile-first interface design",
      "Responsive layouts",
      "Design review and refinement",
      "Developer-ready design handoff"
    ],
    footer: "The prototype helps identify usability problems before development while keeping the design effort focused on the MVP's actual scope."
  },
  {
    title: "Lean MVP Development",
    desc: "We build the core product functionality required to test the defined hypothesis. The implementation is intentionally focused. We avoid unnecessary infrastructure and features that do not contribute to the MVP's purpose.",
    label: "Development can include:",
    bullets: [
      "Frontend development",
      "Backend development",
      "Database setup",
      "User authentication",
      "User accounts and profiles",
      "Admin functionality",
      "Core business workflows",
      "Third-party service integration",
      "Payment functionality",
      "API integration",
      "Basic analytics",
      "Deployment setup"
    ],
    footer: "The technical approach depends on the product, expected users, integrations, and future development requirements."
  },
  {
    title: "Integrations, Payments & APIs",
    desc: "Many MVPs depend on external services from the beginning. We can connect the MVP with the systems required for its core workflow, including payment services, APIs, authentication providers, communication tools, analytics platforms, and other supported third-party services.",
    label: "Integration work may include:",
    bullets: [
      "REST API integration",
      "GraphQL integration where appropriate",
      "Payment gateway integration",
      "Authentication services",
      "CRM connectivity",
      "Email and notification services",
      "Shipping and logistics services",
      "Analytics platforms",
      "Webhooks",
      "Other required third-party APIs"
    ],
    footer: "We prioritize integrations that are necessary for the MVP to function and validate its core use case."
  },
  {
    title: "Analytics & Measurement Setup",
    desc: "An MVP should produce evidence, not just user accounts and feature usage. We help identify the events and product signals that need to be measured before launch.",
    label: "Depending on the product, this may include:",
    bullets: [
      "Sign-ups & Activation",
      "Core feature usage",
      "Workflow completion",
      "Conversion & Transactions",
      "Repeat usage & Retention",
      "Drop-off points",
      "User feedback",
      "Error events"
    ],
    footer: "The exact measurement plan depends on the hypothesis the MVP is designed to test."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Real users should be testing your product idea, not discovering basic technical problems. We test the MVP's core workflows and critical functionality before launch.",
    label: "Testing can include:",
    bullets: [
      "Functional testing",
      "User-flow testing",
      "Form and validation testing",
      "Authentication testing",
      "Integration testing",
      "Payment testing",
      "API testing",
      "Responsive testing",
      "Error handling",
      "Regression testing",
      "Device and browser testing where applicable"
    ],
    footer: "The testing scope depends on the product, platform, integrations, and launch requirements."
  },
  {
    title: "Launch & Validation Support",
    desc: "An MVP only starts generating useful evidence after real users can interact with it. We help prepare the product for launch and establish the basic systems required to collect feedback and usage information.",
    label: "Launch support can include:",
    bullets: [
      "Production deployment",
      "App deployment preparation where applicable",
      "Analytics verification",
      "Feedback collection setup",
      "Core workflow monitoring",
      "Initial issue review",
      "Usage-data review",
      "Post-launch product discussion"
    ],
    footer: "The goal is to help you move from working product to usable evidence."
  },
  {
    title: "Ongoing MVP Support & Iteration",
    desc: "An MVP may need changes after real users begin using it. We can provide ongoing technical support for products that need fixes, small adjustments, dependency updates, or further development after launch.",
    label: "Support can include:",
    bullets: [
      "Bug fixes",
      "Minor feature adjustments",
      "Performance improvements",
      "Security and dependency updates",
      "Third-party API updates",
      "Technical troubleshooting",
      "Analytics adjustments",
      "Small UX improvements",
      "Preparation for the next development phase"
    ],
    footer: "Ongoing support is available separately based on the project's requirements."
  }
]

const stageComparison = {
  headers: ["Product Stage", "Main Question", "Typical Users", "Primary Purpose"],
  rows: [
    [
      "Proof of Concept (PoC)",
      "Can the technical approach work?",
      "Internal team",
      "Test technical feasibility"
    ],
    [
      "Prototype",
      "Does the concept or user flow make sense?",
      "Stakeholders or test users",
      "Test experience and concept"
    ],
    [
      "MVP",
      "Will real users use or pay for the core solution?",
      "Early real users",
      "Validate the product assumption"
    ],
    [
      "Full Product",
      "How do we serve a broader market reliably?",
      "Larger user base",
      "Expand functionality and scale"
    ]
  ]
}

const mvpTypes = [
  {
    title: "SaaS MVPs",
    desc: "We build focused SaaS products around the core workflow users need to experience. We prioritize the functionality required to test whether users will adopt the service.",
    features: [
      "User registration & authentication",
      "Account management",
      "Core product functionality",
      "Dashboard",
      "Subscription or payment functionality",
      "Admin controls",
      "Notifications",
      "Basic analytics"
    ]
  },
  {
    title: "Web Application MVPs",
    desc: "Web application MVPs can provide a complete browser-based product experience without requiring a native mobile application. The scope depends on the core workflow being validated.",
    features: [
      "User accounts",
      "Dashboards",
      "Forms and workflows",
      "Search and filtering",
      "Admin functionality",
      "API integrations",
      "Payments",
      "Business automation"
    ]
  },
  {
    title: "Mobile App MVPs",
    desc: "We develop focused mobile experiences around the features required for initial validation. The platform strategy depends on the target users, product requirements, and validation goals.",
    features: [
      "User registration & profiles",
      "Core app functionality",
      "Push notifications",
      "Location features",
      "Payments",
      "API connectivity",
      "User feedback",
      "Analytics"
    ]
  },
  {
    title: "Marketplace MVPs",
    desc: "Marketplace MVPs connect different user groups around a specific transaction or interaction. We focus on the smallest complete marketplace workflow that can be tested with real participants.",
    features: [
      "Buyer and seller accounts",
      "Listings & search",
      "Product or service details",
      "Messaging where required",
      "Transactions & payments",
      "Order or booking workflows",
      "Admin controls"
    ]
  },
  {
    title: "Ecommerce MVPs",
    desc: "An ecommerce MVP can test whether customers will discover, evaluate, and purchase a defined product range. The MVP scope depends on the products, sales workflow, and systems involved.",
    features: [
      "Product catalog & product pages",
      "Cart & checkout",
      "Payment integration",
      "Order management",
      "Customer accounts",
      "Inventory connection",
      "Delivery integration"
    ]
  },
  {
    title: "AI-Powered MVPs",
    desc: "AI products require careful scope because model behavior, data requirements, and user expectations can affect the product experience. We focus on the AI workflow that needs to be validated rather than adding AI features simply because they are technically possible.",
    features: [
      "AI-assisted workflows",
      "Text generation & classification",
      "Semantic search & recommendations",
      "Document processing",
      "AI chat interfaces",
      "External AI API integration",
      "Usage tracking & token management"
    ]
  },
  {
    title: "Internal Tool MVPs",
    desc: "An internal MVP can help an organization test whether a new workflow or operational tool solves a real business problem. The first release can remain focused on the workflow that needs to be validated.",
    features: [
      "Internal dashboards",
      "Approval workflows",
      "Inventory tools",
      "Reporting systems",
      "CRM extensions",
      "Operations management tools",
      "Employee portals",
      "Internal automation"
    ]
  },
  {
    title: "Other Product-Specific MVPs",
    desc: "Some products do not fit neatly into a standard category. The common principle remains the same: identify the core user journey and build what is required to test it.",
    features: [
      "Booking platforms",
      "On-demand services",
      "Customer portals",
      "Business automation products",
      "Community platforms",
      "Subscription products",
      "Data-driven applications",
      "Product-specific web or mobile applications"
    ]
  }
]

const validationMetrics = [
  {
    title: "Activation & Engagement",
    desc: "Activation measures whether users reach the point where they experience the product's core value. Engagement measures whether users continue interacting with the product after initial activation.",
    bullets: [
      "Completing onboarding",
      "Creating a first project",
      "Completing a first search",
      "Uploading a first file",
      "Using a core feature",
      "Completing a first workflow"
    ]
  },
  {
    title: "Core Workflow Completion",
    desc: "For many MVPs, the most important signal is whether users can and will complete the core workflow. The workflow should reflect the main assumption being tested.",
    bullets: [
      "Completing a booking",
      "Creating an order",
      "Completing a transaction",
      "Publishing a listing",
      "Generating a report",
      "Using a core SaaS feature"
    ]
  },
  {
    title: "Conversion & Transactions",
    desc: "For commercial products, conversion can provide evidence about whether users are willing to take a meaningful business action. Transaction data should be interpreted alongside acquisition and user behavior.",
    bullets: [
      "Paid subscriptions",
      "Purchases",
      "Bookings",
      "Deposits",
      "Lead submissions",
      "Paid feature usage",
      "Upgrade actions"
    ]
  },
  {
    title: "Retention & Repeat Usage",
    desc: "A product can attract initial users without becoming useful enough for repeated use. The appropriate retention period depends on how frequently the product is expected to be used.",
    bullets: [
      "Returning users",
      "Repeat transactions",
      "Subscription renewal",
      "Recurring feature usage",
      "Repeat bookings",
      "Continued account activity"
    ]
  },
  {
    title: "User Feedback & Qualitative Signals",
    desc: "Analytics show what users do. Feedback can help explain why. The strongest validation picture often combines behavioral data with direct user feedback.",
    bullets: [
      "User interviews",
      "Surveys",
      "Feedback forms",
      "Support requests",
      "Usability observations",
      "Feature requests",
      "Reported problems",
      "Reasons for abandonment"
    ]
  }
]

const mvpMistakes = [
  {
    title: "Building Too Many Features",
    desc: "Adding more features does not automatically make an MVP more useful. Excessive scope increases development time and makes it harder to identify which part of the product influenced user behavior."
  },
  {
    title: "Testing Too Many Hypotheses",
    desc: "An MVP becomes difficult to interpret when it tries to answer several unrelated questions at once. A focused MVP should have a clear primary hypothesis and supporting assumptions."
  },
  {
    title: "Confusing Bugs With Product Feedback",
    desc: "If users cannot complete the core workflow because of technical problems, their behavior may not tell you much about the product idea. Basic reliability is therefore part of useful validation."
  },
  {
    title: "Ignoring Analytics",
    desc: "Without appropriate measurement, you may know that people used the product without knowing where they activated, dropped off, converted, or returned. Measurement should be planned before launch."
  },
  {
    title: "Scaling Before Validation",
    desc: "Building infrastructure for a large user base before demand is established can consume budget without reducing the main business uncertainty. An MVP should be designed for its expected validation stage while leaving a sensible path for future growth."
  }
]

const techStackCategories = [
  "Frontend technologies",
  "Backend technologies",
  "Mobile development technologies",
  "Databases",
  "REST or GraphQL APIs",
  "Authentication systems",
  "Payment integrations",
  "Cloud infrastructure",
  "Analytics tools",
  "Automated testing",
  "Third-party APIs",
  "Deployment and monitoring tools"
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, design, development, testing, and launch coordination stay within one team. You do not need to coordinate separate vendors for each stage of the MVP."
  },
  {
    title: "Scoped to Learn, Not to Impress",
    desc: "We do not treat every requested feature as an MVP requirement. We focus on the functionality needed to test the defined product hypothesis and move additional features into later phases when appropriate."
  },
  {
    title: "Built for the Next Phase",
    desc: "An MVP should not create unnecessary rework. Where practical, we make technical and product decisions with the next development stage in mind so useful components can continue into future releases."
  },
  {
    title: "Transparent Review Process",
    desc: "You receive review points throughout the project. The goal is to keep scope, design, development, and testing visible instead of presenting the finished product only at the end."
  },
  {
    title: "Local & International Delivery",
    desc: "Framecipher is based in Dhaka and works with businesses in Bangladesh alongside clients in the US, UK, Australia, Canada, and UAE. We can account for market-specific requirements such as local payment methods, mobile-first usage patterns, and third-party services during product discovery."
  },
  {
    title: "Long-Term Support",
    desc: "An MVP may become the foundation for a larger product. When needed, we can continue with bug fixes, integrations, performance improvements, new features, technical updates, and further product development."
  }
]


export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR MVP DEVELOPMENT SERVICES */}
        <div>
          <SectionIntro
            eyebrow="Core Service Capabilities"
            title="Our MVP Development Services"
          >
            A strong MVP starts with a focused question and ends with useful evidence. We help define what needs to be tested, design the essential experience, build the required functionality, launch it to real users, and review what happens next.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mvpServices.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
              >
                <div>
                  <span className="font-heading text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service Discipline 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {service.desc}
                  </p>

                  <div className="mt-5 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-frame-fg">
                      {service.label}
                    </p>
                    <ul className="mt-2.5 space-y-2">
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

        {/* SECTION 2: MVP VS PROTOTYPE VS POC VS FULL PRODUCT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Validation Hierarchy
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              MVP vs Prototype vs PoC vs Full Product
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              These terms are often used interchangeably, but they serve different purposes.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  {stageComparison.headers.map((h, i) => (
                    <th key={i} className="p-4 border-r-2 border-frame-border last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {stageComparison.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={`p-4 border-r-2 border-frame-border last:border-r-0 ${cIdx === 0 ? 'font-semibold text-frame-fg' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-frame-border bg-frame-muted/10 p-5">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Proof of Concept (PoC)
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A PoC can be useful when technical feasibility is the biggest uncertainty.
              </p>
            </div>
            <div className="border border-frame-border bg-frame-muted/10 p-5">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Prototype
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A prototype can be appropriate when you need to test an idea or user experience before building working software.
              </p>
            </div>
            <div className="border border-frame-border bg-frame-muted/10 p-5">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                MVP &amp; Full Product
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                An MVP goes further. It contains enough working functionality for real users to interact with the product and generate meaningful evidence. A full product normally expands beyond the initial validation scope with additional features, deeper infrastructure, broader integrations, and greater operational requirements.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHEN SHOULD YOU BUILD AN MVP? */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Timing &amp; Decision Criteria
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            When Should You Build an MVP?
          </h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            An MVP is useful when you have enough clarity about the problem to build a focused solution, but important uncertainty still remains.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase text-frame-fg">
                When an MVP Makes Sense
              </h3>
              <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
                An MVP can be appropriate when:
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "You have identified a specific problem to solve",
                  "You know who the initial users are",
                  "Real user behavior needs to be tested",
                  "A prototype cannot answer the main question",
                  "You need usage or transaction data",
                  "You want evidence before a larger investment",
                  "You need to test a core product workflow",
                  "You want to validate demand before expanding development"
                ].map((item, idx) => (
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
              <p className="mt-5 border-t border-frame-border/60 pt-4 text-xs md:text-sm font-semibold text-frame-fg">
                The MVP should answer a defined question rather than attempt to represent the entire future product.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase text-frame-fg">
                When You May Need a Prototype or PoC First
              </h3>
              <div className="mt-4 space-y-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                <p>An MVP is not always the first step.</p>
                <p>A prototype may be more appropriate when the main uncertainty is the user experience or product concept.</p>
                <p>A PoC may be more appropriate when the main uncertainty is whether a technical approach can work.</p>
                <p>You may also need more customer research before development if the target problem, audience, or value proposition is still unclear.</p>
              </div>
              <div className="mt-6 border-t border-frame-border/60 pt-4">
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-frame-accent">
                  Strategic Safeguard:
                </p>
                <p className="mt-1 text-xs md:text-sm font-medium text-frame-fg">
                  Choosing the right starting point prevents you from spending development budget before you know what needs to be tested.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: TYPES OF MVPS WE BUILD */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Archetypes
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Types of MVPs We Build
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The right MVP structure depends on the product model, users, and core workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mvpTypes.map((type, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Model 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {type.desc}
                  </p>

                  <div className="mt-4 border-t border-frame-border/60 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                      Core Scope Elements:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                      {type.features.map((f, fIdx) => (
                        <li key={fIdx}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: HOW WE MEASURE MVP VALIDATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Evidence &amp; Telemetry
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              How We Measure MVP Validation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              There is no single metric that proves every MVP succeeded. The right measurement depends on the hypothesis, target users, product model, and business objective.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {validationMetrics.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Metric 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <div className="mt-4 border-t border-frame-border/60 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                    Observed Signals:
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: COMMON MVP MISTAKES THAT DISTORT VALIDATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Risk Avoidance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Common MVP Mistakes That Distort Validation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A technically functional MVP can still produce poor evidence if the product is scoped incorrectly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {mvpMistakes.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pitfall 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: MVP DEVELOPMENT TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture Foundation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              MVP Development Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The technology stack should support the MVP&apos;s actual requirements rather than follow a fixed technology list. Framecipher selects technologies based on the product type, platform, integrations, expected workload, development requirements, and future product direction. Our MVP projects may involve:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStackCategories.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent border-t border-frame-border/60 pt-4">
            The goal is to use a practical stack that allows the MVP to launch efficiently without creating unnecessary technical limitations for the next phase.
          </p>
        </div>

        {/* SECTION 8: WHY CHOOSE FRAMECIPHER FOR MVP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for MVP Development
            </h2>
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


        {/* SECTION 10: MVP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            MVP Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher is based in Dhaka, Bangladesh, and provides MVP development services for businesses and product teams in Bangladesh and international markets.
            </p>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                MVP Development in Bangladesh
              </h4>
              <p className="mt-1">
                For Bangladeshi businesses, an MVP may need to account for local payment methods, mobile-first usage, local logistics, customer behavior, and existing business systems. Depending on the product, MVP development can involve: bKash integration, Nagad integration, local banking APIs, ecommerce systems, CRM and ERP systems, logistics platforms, local business workflows, and internal business tools. These requirements are considered during discovery rather than added automatically to every MVP.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                International Clients
              </h4>
              <p className="mt-1">
                Framecipher also works with clients in the United States, United Kingdom, Australia, Canada, and United Arab Emirates. International MVP projects may involve different payment providers, compliance-related technical requirements, cloud services, APIs, user expectations, and operational workflows. We define those requirements during discovery before finalizing the MVP scope.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your MVP Project &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
