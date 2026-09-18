import { SectionIntro, PosterButton } from '../../../Kinetic'

const corePhases = [
  {
    tag: "Phase 01",
    title: "Idea Validation & Scope Definition",
    description: "Identifying the single riskiest assumption your MVP needs to test, separating essential functionality from backlog ideas.",
    bullets: [
      "Core Hypothesis Definition: Formulating the precise value proposition to test with real users rather than broad assumptions.",
      "Feature Prioritization Matrix: Aggressively pruning feature lists to isolate day-one necessities from v2 nice-to-haves.",
      "Target Persona Clarification: Defining the exact profile of the early adopter group most motivated to use your solution.",
      "Validation Metric Selection: Establishing quantitative success criteria (activation rate, retention, willingness to pay) upfront."
    ]
  },
  {
    tag: "Phase 02",
    title: "Rapid UI/UX Prototyping",
    description: "Designing streamlined, intuitive user task flows and clickable interactive Figma prototypes in days.",
    bullets: [
      "Frictionless User Journeys: Mapping the shortest possible path for a new user to experience your product's core value.",
      "Wireframing & Interface Layouts: Creating clean, mobile-responsive layouts adhering to platform design conventions.",
      "Clickable Prototypes: Demonstrating interactive user flows for rapid stakeholder review and investor presentations.",
      "User Testing Checkpoints: Gathering feedback from real potential customers before committing engineering budget."
    ]
  },
  {
    tag: "Phase 03",
    title: "Agile MVP Engineering",
    description: "Building production-grade, functional software with clean architecture ready for continuous feature expansion.",
    bullets: [
      "Speed-Optimized Frameworks: Leveraging modern Next.js, Flutter, or Supabase stacks to deliver functional builds in weeks.",
      "Clean Code Foundation: Writing modular, well-documented code that can be scaled into a full product rather than thrown away.",
      "Core Feature Implementation: Engineering the central interactive workflow with zero unnecessary bloat.",
      "Automated Testing Suites: Basic smoke and integration tests ensuring core user transaction funnels never break."
    ]
  },
  {
    tag: "Phase 04",
    title: "Third-Party & Payment Integrations",
    description: "Connecting the essential third-party services, authentications, and payment processors needed to conduct real business.",
    bullets: [
      "Payment Gateway Integration: bKash, Nagad, SSLCommerz, and Stripe to test customer willingness to pay immediately.",
      "Authentication & Onboarding: Social login (Google, Apple) or email OTP enabling 30-second user registration.",
      "Analytics & Telemetry Setup: Configuring PostHog, Mixpanel, and GA4 to track user drop-offs and feature engagement.",
      "Transactional Communications: Automated transactional emails or SMS alerts notifying users of activity."
    ]
  },
  {
    tag: "Phase 05",
    title: "User Launch & Iteration Roadmapping",
    description: "Deploying your MVP to production, observing live user cohorts, and drafting a validated feature roadmap for Version 2.",
    bullets: [
      "Production Deployment: Fast deployment to global cloud networks (Vercel, Supabase, Google Cloud, or App Stores).",
      "Live Cohort Observation: Analyzing behavioral analytics and session recordings to identify friction points.",
      "User Feedback Interviews: Structuring qualitative surveys and interviews with active users.",
      "Version 2 Product Roadmap: Prioritizing subsequent feature development backed by verified user data rather than guesswork."
    ]
  }
]

const mvpModels = [
  {
    title: "Single-Feature MVP",
    desc: "A lean build that does one specific job exceptionally well, proving whether users find the core functionality indispensable."
  },
  {
    title: "Functional SaaS MVP",
    desc: "A multi-tenant web application with essential workflows, authentication, and subscription billing to validate recurring demand."
  },
  {
    title: "Mobile App MVP",
    desc: "A cross-platform Flutter or React Native build launched to Google Play and the iOS App Store to test mobile user retention."
  },
  {
    title: "Concierge / Hybrid MVP",
    desc: "An automated frontend interface backed by streamlined manual operational workflows to validate high-touch services."
  },
  {
    title: "Marketplace MVP",
    desc: "A two-sided platform connecting buyers and sellers with structured search, catalog listings, and transaction inquiries."
  },
  {
    title: "On-Demand Service MVP",
    desc: "A location-aware service application with booking forms, provider notifications, and direct local payment collection."
  },
  {
    title: "Internal Tool MVP",
    desc: "A lightweight administrative tool built to automate an expensive manual company spreadsheet process before full software rollout."
  },
  {
    title: "Waitlist & Pre-Order MVP",
    desc: "A high-conversion landing page with interactive product previews, deposit checkout, and referral tracking to gauge pre-launch demand."
  }
]

const mvpCapabilities = [
  {
    title: "Rapid Time-to-Market",
    desc: "Launching within 3 to 6 weeks so you validate user demand before burning through funding runways."
  },
  {
    title: "Clean Modular Code",
    desc: "Architected so you keep and expand the codebase as you scale, rather than having to rebuild from scratch."
  },
  {
    title: "Real Payment Processing",
    desc: "Accept real money on day one via bKash, Nagad, Stripe, or credit cards to verify genuine buying intent."
  },
  {
    title: "In-App Telemetry & Events",
    desc: "PostHog and Mixpanel event funnels measuring exact user actions, drop-off screens, and feature retention."
  },
  {
    title: "Self-Service Admin Portal",
    desc: "Simple backend interface allowing founders to view registrations, approve items, and export user records."
  },
  {
    title: "Automated Error Tracking",
    desc: "Instant notifications via Sentry whenever an early adopter encounters an edge-case error or system failure."
  },
  {
    title: "Serverless Cloud Scaling",
    desc: "Cost-effective cloud hosting that costs virtually nothing on low volume while handling sudden viral surges effortlessly."
  },
  {
    title: "100% IP & Repo Ownership",
    desc: "You retain full intellectual property ownership, source code Git repositories, and cloud account credentials."
  }
]

const comparisonData = [
  {
    stage: "Proof of Concept (PoC)",
    objective: "Test whether a complex technical feature or algorithm is theoretically possible to build",
    audience: "Internal engineering team & technical leads",
    code: "Throwaway prototype script; not built for production use",
    timeline: "1–2 weeks",
    cost: "Lowest",
    question: "\"Is this technically possible?\""
  },
  {
    stage: "Clickable UI Prototype",
    objective: "Validate interface layouts, visual aesthetics, and usability flows with stakeholders",
    audience: "Angel investors, design testers, and early prospects",
    code: "Zero production code (Figma / Proto.io design mockup)",
    timeline: "1–3 weeks",
    cost: "Low",
    question: "\"Do users understand the design?\""
  },
  {
    stage: "Minimum Viable Product (MVP)",
    objective: "Launch functional software to early adopters to measure real-world demand and willingness to pay",
    audience: "Real early-adopter customers and paying beta users",
    code: "Production-ready, clean, scalable modular code foundation",
    timeline: "3–6 weeks",
    cost: "Moderate (Highest ROI)",
    question: "\"Will people actually use and pay for this?\""
  },
  {
    stage: "Full Commercial Product",
    objective: "Scale market share, automate complex edge cases, and serve thousands of concurrent organizations",
    audience: "Broad market, enterprise organizations, and mass consumer segments",
    code: "Comprehensive microservices, advanced integrations, automated CI/CD",
    timeline: "3–6+ months",
    cost: "Highest",
    question: "\"How fast can we scale market distribution?\""
  }
]

const techStack = [
  { layer: "Web Application Frontend", stack: "Next.js (App Router), React, TypeScript, Tailwind CSS (Fastest delivery, SEO-optimized)" },
  { layer: "Cross-Platform Mobile App", stack: "Flutter / Dart or React Native (Single codebase delivering native iOS & Android apps)" },
  { layer: "Backend & Database as a Service", stack: "Supabase (PostgreSQL, Realtime subscriptions, automated Row-Level Security, Storage)" },
  { layer: "Custom API Services", stack: "Node.js (NestJS / Express) or Python (FastAPI) for custom business calculation logic" },
  { layer: "Authentication & User Management", stack: "Supabase Auth, Auth.js (NextAuth), Clerk, OAuth 2.0 (Google, Apple, Email OTP)" },
  { layer: "Payment Gateways", stack: "bKash, Nagad, SSLCommerz (Bangladesh local) / Stripe Checkout, Paddle (Global)" },
  { layer: "Product Telemetry & Analytics", stack: "PostHog (Event tracking, heatmaps, session recordings), Google Analytics 4" },
  { layer: "Cloud Hosting & DevOps", stack: "Vercel, Supabase Cloud, Google Cloud Platform, GitHub Actions CI/CD" },
  { layer: "Error Diagnostics & Monitoring", stack: "Sentry (Real-time production crash logging), Better Uptime status monitor" }
]

const mvpTypes = [
  { title: "SaaS MVPs", desc: "Focused SaaS products around the core workflow users need to experience.", items: ["User registration", "Authentication", "Account management", "Core product functionality", "Dashboard", "Subscription or payment functionality", "Admin controls", "Notifications", "Basic analytics"] },
  { title: "Web Application MVPs", desc: "Browser-based product experiences with the workflows needed for initial validation.", items: ["User accounts", "Dashboards", "Forms and workflows", "Search and filtering", "Admin functionality", "API integrations", "Payments", "Business automation"] },
  { title: "Mobile App MVPs", desc: "Focused mobile experiences around the features required for initial validation.", items: ["User registration", "Profiles", "Core app functionality", "Notifications", "Location features", "Payments", "API connectivity", "User feedback", "Analytics"] },
  { title: "Marketplace MVPs", desc: "The smallest complete workflow connecting different user groups around a transaction or interaction.", items: ["Buyer and seller accounts", "Listings", "Search", "Product or service details", "Messaging where required", "Transactions", "Payments", "Order or booking workflows", "Admin controls"] },
  { title: "Ecommerce MVPs", desc: "A focused store experience to test whether customers will discover, evaluate, and purchase a defined product range.", items: ["Product catalog", "Product pages", "Cart", "Checkout", "Payment integration", "Order management", "Customer accounts", "Inventory connection", "Delivery integration"] },
  { title: "AI-Powered MVPs", desc: "A focused AI workflow that validates the product value instead of adding AI features simply because they are technically possible.", items: ["AI-assisted workflows", "Text generation", "Classification", "Search", "Recommendations", "Document processing", "AI chat interfaces", "External AI API integration", "Usage tracking"] },
  { title: "Internal Tool MVPs", desc: "Focused operational tools that help organizations test whether a new workflow solves a real business problem.", items: ["Internal dashboards", "Approval workflows", "Inventory tools", "Reporting systems", "CRM extensions", "Operations management tools", "Employee portals", "Internal automation"] },
  { title: "Other Product-Specific MVPs", desc: "Product-specific web or mobile applications scoped around the core user journey.", items: ["Booking platforms", "On-demand services", "Customer portals", "Business automation products", "Community platforms", "Subscription products", "Data-driven applications"] },
]

const validationMetrics = [
  { title: "Activation & Engagement", desc: "Measure whether users reach the point where they experience the product's core value, then whether they continue interacting after activation.", items: ["Completing onboarding", "Creating a first project", "Completing a first search", "Uploading a first file", "Using a core feature", "Completing a first workflow"] },
  { title: "Core Workflow Completion", desc: "For many MVPs, the most important signal is whether users can and will complete the core workflow.", items: ["Completing a booking", "Creating an order", "Completing a transaction", "Publishing a listing", "Generating a report", "Using a core SaaS feature"] },
  { title: "Conversion & Transactions", desc: "For commercial products, conversion shows whether users are willing to take a meaningful business action.", items: ["Paid subscriptions", "Purchases", "Bookings", "Deposits", "Lead submissions", "Paid feature usage", "Upgrade actions"] },
  { title: "Retention & Repeat Usage", desc: "A product can attract initial users without becoming useful enough for repeated use.", items: ["Returning users", "Repeat transactions", "Subscription renewal", "Recurring feature usage", "Repeat bookings", "Continued account activity"] },
  { title: "User Feedback & Qualitative Signals", desc: "Analytics show what users do. Feedback can help explain why.", items: ["User interviews", "Surveys", "Feedback forms", "Support requests", "Usability observations", "Feature requests", "Reported problems", "Reasons for abandonment"] },
]

const mvpMistakes = [
  ["Building Too Many Features", "Adding more features does not automatically make an MVP more useful. Excessive scope increases development time and makes it harder to identify which part of the product influenced user behavior."],
  ["Testing Too Many Hypotheses", "An MVP becomes difficult to interpret when it tries to answer several unrelated questions at once. A focused MVP should have a clear primary hypothesis and supporting assumptions."],
  ["Confusing Bugs With Product Feedback", "If users cannot complete the core workflow because of technical problems, their behavior may not tell you much about the product idea. Basic reliability is part of useful validation."],
  ["Ignoring Analytics", "Without appropriate measurement, you may know that people used the product without knowing where they activated, dropped off, converted, or returned. Measurement should be planned before launch."],
  ["Scaling Before Validation", "Building infrastructure for a large user base before demand is established can consume budget without reducing the main business uncertainty. An MVP should be designed for its expected validation stage while leaving a sensible path for future growth."],
]

const handoverItems = ["Source code", "Repository access", "Project documentation", "API documentation where applicable", "Database information", "Deployment information", "Design files where included", "Third-party integration details", "Environment and configuration information", "Basic technical handoff", "Development guidance for the next phase"]

const whyChooseUs = [
  ["One In-House Team", "Strategy, design, development, testing, and launch coordination stay within one team. You do not need to coordinate separate vendors for each stage of the MVP."],
  ["Scoped to Learn, Not to Impress", "We focus on the functionality needed to test the defined product hypothesis and move additional features into later phases when appropriate."],
  ["Built for the Next Phase", "Where practical, we make technical and product decisions with the next development stage in mind so useful components can continue into future releases."],
  ["Transparent Review Process", "You receive review points throughout the project. The goal is to keep scope, design, development, and testing visible instead of presenting the finished product only at the end."],
  ["Local & International Delivery", "Framecipher is based in Dhaka and works with businesses in Bangladesh alongside clients in the US, UK, Australia, Canada, and UAE. We account for market-specific requirements during product discovery."],
  ["Long-Term Support", "An MVP may become the foundation for a larger product. When needed, we can continue with bug fixes, integrations, performance improvements, new features, technical updates, and further product development."],
]

const supportingServices = [
  ["Integrations, Payments & APIs", "Many MVPs depend on external services from the beginning. We connect payment services, APIs, authentication providers, communication tools, analytics platforms, shipping services, logistics systems, webhooks, and other supported third-party services required for the core workflow."],
  ["Analytics & Measurement Setup", "An MVP should produce evidence, not just user accounts and feature usage. We help identify events and product signals such as sign-ups, activation, core feature usage, workflow completion, conversion, transactions, repeat usage, retention, drop-off points, user feedback, and error events before launch."],
  ["Testing & Quality Assurance", "Real users should be testing your product idea, not discovering basic technical problems. Testing can include functional, user-flow, form and validation, authentication, integration, payment, API, responsive, error-handling, regression, device, and browser testing where applicable."],
  ["Launch & Validation Support", "We help prepare the product for launch and establish the basic systems required to collect feedback and usage information. Launch support can include production deployment, app deployment preparation, analytics verification, feedback collection, core workflow monitoring, initial issue review, usage-data review, and post-launch product discussion."],
  ["Ongoing MVP Support & Iteration", "After real users begin using the MVP, support can include bug fixes, minor feature adjustments, performance improvements, security and dependency updates, third-party API updates, technical troubleshooting, analytics adjustments, small UX improvements, and preparation for the next development phase."],
]

const bodyGuidance = [
  ["Focused MVP Direction", "A strong MVP starts with a focused question and ends with useful evidence. We help define what needs to be tested, design the essential experience, build the required functionality, launch it to real users, and review what happens next."],
  ["Scope Before Development", "Before development starts, we identify what your MVP actually needs to prove. We review the product idea, target users, business assumptions, and proposed workflow to determine what belongs in the first release and what can wait. The goal is to create a focused MVP scope instead of turning the first release into a smaller version of the entire product roadmap."],
  ["Feature Prioritization", "An MVP can become expensive when every proposed feature is treated as essential. We separate the functionality required for validation from features that can be developed after the initial product receives real-world feedback. This creates a practical feature roadmap with a clear boundary between the MVP and future development."],
  ["Design for Evaluation", "MVP design should move quickly without making the product too rough to evaluate. We design the core user experience around the workflows that matter most to the validation goal. The prototype helps identify usability problems before development while keeping the design effort focused on the MVP's actual scope."],
  ["Lean Product Build", "We build the core product functionality required to test the defined hypothesis. The implementation is intentionally focused. We avoid unnecessary infrastructure and features that do not contribute to the MVP's purpose. The technical approach depends on the product, expected users, integrations, and future development requirements."],
  ["Integrations and Evidence", "We prioritize integrations that are necessary for the MVP to function and validate its core use case. We help identify the events and product signals that need to be measured before launch, and the exact measurement plan depends on the hypothesis the MVP is designed to test."],
  ["Launch to Usable Evidence", "An MVP only starts generating useful evidence after real users can interact with it. Launch support helps move the product from a working build to usable evidence. An MVP may need changes after real users begin using it, so ongoing technical support can cover fixes, small adjustments, dependency updates, and further development after launch."],
  ["Prototype, PoC and Full Product", "These terms are often used interchangeably, but they serve different purposes. A PoC can be useful when technical feasibility is the biggest uncertainty. A prototype can be appropriate when you need to test an idea or user experience before building working software. An MVP goes further: it contains enough working functionality for real users to interact with the product and generate meaningful evidence. A full product normally expands beyond the initial validation scope with additional features, deeper infrastructure, broader integrations, and greater operational requirements."],
  ["Choosing the Right Starting Point", "The MVP should answer a defined question rather than attempt to represent the entire future product. You may also need more customer research before development if the target problem, audience, or value proposition is still unclear. Choosing the right starting point prevents you from spending development budget before you know what needs to be tested."],
  ["Validation Signals", "Engagement measures whether users continue interacting with the product after initial activation. The workflow should reflect the main assumption being tested. For commercial products, conversion can provide evidence about whether users are willing to take a meaningful business action. Transaction data should be interpreted alongside acquisition and user behavior rather than treated as a standalone answer. The appropriate retention period depends on how frequently the product is expected to be used, and the strongest validation picture often combines behavioral data with direct user feedback."],
  ["Technology Decisions", "The technology stack should support the MVP's actual requirements rather than follow a fixed technology list. Framecipher selects technologies based on the product type, platform, integrations, expected workload, development requirements, and future product direction. The goal is to use a practical stack that allows the MVP to launch efficiently without creating unnecessary technical limitations for the next phase."],
  ["Timeline and Access", "Projects can move faster when the core hypothesis, scope, content, design requirements, third-party documentation, credentials, and approvals are available early. The exact timeline should be confirmed after reviewing the actual product requirements."],
  ["Handover and Warranty", "The exact handover package depends on the project agreement, but an MVP handover can include source code, repository access, project documentation, API and database information, deployment details, design files, third-party integration details, environment information, and development guidance for the next phase. Any workmanship warranty should follow the period and terms stated in the final proposal or project agreement. The warranty should apply to qualifying development defects within the agreed scope; third-party outages, provider-side changes, new requirements, user-generated content, and functionality outside the approved scope should be handled separately."],
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION 1: 5 CORE PHASES */}
        <SectionIntro
          eyebrow="Lean Product Engineering"
          title="Our MVP Development Services"
        >
          We build focused first versions designed to validate product demand with real users before committing to extensive development budgets.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corePhases.map((phase, i) => (
            <div
              key={i}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {phase.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {phase.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-6 text-xs md:text-sm font-medium text-frame-fg/90">
                  {phase.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportingServices.map(([title, description]) => (
            <div key={title} className="border-2 border-frame-border bg-frame-muted/20 p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <SectionIntro eyebrow="MVP Guidance" title="The Details Behind a Useful MVP">The important part of an MVP is not only what gets built, but what the product is designed to learn.</SectionIntro>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {bodyGuidance.map(([title, description]) => (
              <div key={title} className="border-2 border-frame-border bg-frame-bg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{title}</h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: MVP MODELS WE BUILD */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Validation Archetypes"
            title="MVP Formats We Build"
          >
            We help you select the leanest format capable of testing your core business thesis with the least capital expenditure.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mvpModels.map((app, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Model 0{i + 1}
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

        {/* SECTION 3: MVP CAPABILITIES */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Strategic Infrastructure"
            title="MVP Engineering Principles"
          >
            Built with production-grade frameworks, analytics, and payment infrastructure so early user feedback represents real market behavior.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mvpCapabilities.map((cap, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Principle 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {cap.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: COMPARISON TABLE (H2) */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Stage Framework
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Product Stage Comparison: PoC vs Prototype vs MVP vs Full Product
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Understanding which development stage your product requires protects your budget and ensures you answer the right question at the right time.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/5">Product Stage</th>
                  <th className="p-4 border-r-2 border-frame-border">Core Objective</th>
                  <th className="p-4 border-r-2 border-frame-border">Working Code?</th>
                  <th className="p-4 border-r-2 border-frame-border">Timeline</th>
                  <th className="p-4">Key Question Answered</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className={`hover:bg-frame-muted/20 transition-colors ${row.stage.includes('MVP') ? 'bg-frame-accent/5' : ''}`}>
                    <td className={`p-4 font-semibold border-r-2 border-frame-border ${row.stage.includes('MVP') ? 'text-frame-accent' : 'text-frame-fg'}`}>
                      {row.stage}
                    </td>
                    <td className="p-4 border-r-2 border-frame-border">
                      {row.objective}
                    </td>
                    <td className="p-4 border-r-2 border-frame-border">
                      {row.code}
                    </td>
                    <td className="p-4 font-bold text-frame-fg border-r-2 border-frame-border">
                      {row.timeline}
                    </td>
                    <td className="p-4 italic text-frame-fg">
                      {row.question}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5: MVP TECH STACK (H2) */}
        <div className="mt-20 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              High-Velocity Stack
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              MVP Technology Stack & Decision Matrix
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Technologies vetted for extraordinary development speed, instant cloud deployment, and seamless scalability into full production products.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Architecture Layer</th>
                  <th className="p-4">High-Velocity Technologies & Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {techStack.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.layer}
                    </td>
                    <td className="p-4 font-medium text-frame-accent">
                      {row.stack}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-28 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Product Decision</span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">When Should You Build an MVP?</h2>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">An MVP is useful when you have enough clarity about the problem to build a focused solution, but important uncertainty still remains.</p>
            <ul className="mt-6 grid gap-3 text-sm font-medium text-frame-muted-fg">{["You have identified a specific problem to solve", "You know who the initial users are", "Real user behavior needs to be tested", "A prototype cannot answer the main question", "You need usage or transaction data", "You want evidence before a larger investment", "You need to test a core product workflow", "You want to validate demand before expanding development"].map((item) => <li key={item} className="flex gap-3"><span className="text-frame-accent">✓</span>{item}</li>)}</ul>
          </div>
          <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10"><h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">When You May Need a Prototype or PoC First</h2><p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">An MVP is not always the first step. A prototype may be more appropriate when the main uncertainty is the user experience or product concept. A PoC may be more appropriate when the main uncertainty is whether a technical approach can work.</p><p className="mt-4 text-sm md:text-base font-semibold leading-relaxed text-frame-fg">Choosing the right starting point prevents you from spending development budget before you know what needs to be tested.</p></div>
        </div>

        <div className="mt-28"><SectionIntro eyebrow="Product Models" title="Types of MVPs We Build">The right MVP structure depends on the product model, users, and core workflow.</SectionIntro><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{mvpTypes.map((type) => <div key={type.title} className="border-2 border-frame-border bg-frame-bg p-6 hover:border-frame-accent transition-colors"><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{type.title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p><ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg">{type.items.map((item) => <li key={item} className="flex gap-2"><span className="text-frame-accent">✓</span>{item}</li>)}</ul></div>)}</div></div>

        <div className="mt-28"><SectionIntro eyebrow="Evidence & Learning" title="How We Measure MVP Validation">There is no single metric that proves every MVP succeeded. The right measurement depends on the hypothesis, target users, product model, and business objective.</SectionIntro><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{validationMetrics.map((metric) => <div key={metric.title} className="border-2 border-frame-border bg-frame-bg p-6"><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{metric.title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{metric.desc}</p><ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg">{metric.items.map((item) => <li key={item} className="flex gap-2"><span className="text-frame-accent">✓</span>{item}</li>)}</ul></div>)}</div></div>

        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12"><SectionIntro eyebrow="Validation Risks" title="Common MVP Mistakes That Distort Validation">A technically functional MVP can still produce poor evidence if the product is scoped incorrectly.</SectionIntro><div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{mvpMistakes.map(([title, desc]) => <div key={title} className="border-2 border-frame-border bg-frame-bg p-6"><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{desc}</p></div>)}</div></div>

        <div className="mt-28 grid grid-cols-1 gap-6 lg:grid-cols-2"><div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10"><h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">MVP Ownership &amp; Handover</h2><p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">Your MVP should remain usable after the development engagement ends. The exact handover package depends on the project agreement, but it can include:</p><ul className="mt-5 grid gap-2 text-sm font-medium text-frame-muted-fg">{handoverItems.map((item) => <li key={item} className="flex gap-3"><span className="text-frame-accent">✓</span>{item}</li>)}</ul><p className="mt-5 text-sm font-semibold leading-relaxed text-frame-fg">Ownership, access, documentation, and handover responsibilities should be clearly defined in the final project agreement.</p></div><div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10"><h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">Project Scope, Review &amp; Support</h2><p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">Clear scope helps keep MVP development focused and prevents the first release from expanding into the entire product roadmap.</p><div className="mt-5 space-y-4 text-sm font-medium leading-relaxed text-frame-muted-fg"><p><strong className="text-frame-fg">Project Scope:</strong> Before development begins, we define the agreed functionality, platforms, integrations, deliverables, responsibilities, and expected timeline. Features outside that scope can be considered for a later phase or handled through an approved change request.</p><p><strong className="text-frame-fg">Review &amp; Approval:</strong> Design and development stages include review points where applicable. You can review the agreed work before the project moves into the next stage.</p><p><strong className="text-frame-fg">Third-Party Dependencies:</strong> We can build and test integrations within the agreed scope, but cannot control outages, policy changes, API changes, approval delays, or service restrictions imposed by third-party providers.</p><p><strong className="text-frame-fg">Post-Launch Support:</strong> Launch support can include deployment checks, agreed issue resolution, and confirmation that the core functionality is working as expected. Ongoing maintenance and additional product development can be provided separately.</p></div></div></div>

        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12"><SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher for MVP Development">A focused MVP should help you learn without creating unnecessary technical or financial risk.</SectionIntro><div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{whyChooseUs.map(([title, desc]) => <div key={title} className="border-2 border-frame-border bg-frame-muted/10 p-6"><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{title}</h3><p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{desc}</p></div>)}</div></div>

        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12"><SectionIntro eyebrow="Domestic & Global Reach" title="MVP Development Services Across Bangladesh & Worldwide"><p>Framecipher is based in Dhaka, Bangladesh, and provides MVP development services for businesses and product teams in Bangladesh and international markets.</p></SectionIntro><div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg"><div><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">MVP Development in Bangladesh</h3><p className="mt-3">For Bangladeshi businesses, an MVP may need to account for local payment methods, mobile-first usage patterns, local logistics, customer behavior, and existing business systems. Depending on the product, this can involve bKash, Nagad, local banking APIs, ecommerce systems, CRM and ERP systems, logistics platforms, local business workflows, and internal business tools.</p></div><div><h3 className="font-heading text-lg font-bold uppercase text-frame-fg">International Clients</h3><p className="mt-3">Framecipher also works with clients in the United States, United Kingdom, Australia, Canada, and United Arab Emirates. International MVP projects may involve different payment providers, compliance-related requirements, cloud services, APIs, user expectations, and operational workflows.</p></div></div></div>
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12"><SectionIntro eyebrow="Case Evidence" title="MVP Development Portfolio &amp; Case Studies">Every MVP project has different product goals, users, workflows, and technical constraints. Where client approval allows, our case studies should show the actual development work rather than generic claims.</SectionIntro><p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">A useful MVP case study can include the product type, business problem, target users, core hypothesis, MVP scope, key features, platform, technology, third-party integrations, development timeline, launch details, testing approach, and verified project outcomes.</p><p className="mt-5 text-sm font-semibold leading-relaxed text-frame-fg">We publish only project details, client information, metrics, and outcomes that are approved and supported by actual project evidence.</p></div>
      </div>
    </section>
  )
}
