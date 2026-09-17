import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Building a SaaS product means getting the foundation right before a single feature ships.",
    "description": "PRODUCT STRATEGY & MULTI-TENANT ARCHITECTURE The decisions made here are the ones you can't cheaply undo six months into having paying customers. What We Do A single-tenant assumption baked into the database early is one of the most expensive mistakes to unwind later.",
    "bullets": [
      "Tenant Architecture Planning: Deciding how customer data stays isolated and secure across a shared platform.",
      "Requirements & Feature Roadmap: Separating what launches now from what waits for a later release cycle.",
      "Database & Data Model Design: Structured for multi-tenancy from day one, not adapted afterward.",
      "Scalability Planning: Infrastructure decisions made with growth in mind, not just today's user count."
    ]
  },
  {
    "title": "UI/UX DESIGN FOR SAAS PRODUCTS",
    "description": "Design here has to work for a first-time trial user and a power user managing a team account, often on the same screen. What We Do A confusing onboarding flow is one of the most common reasons trial users never convert, and it's rarely a marketing problem.",
    "bullets": [
      "Onboarding Flow Design: A path from signup to \"aha moment\" short enough that trial users actually get there.",
      "Dashboard & Workflow Design: Interfaces built around how your users actually work, not a generic admin panel template.",
      "Role-Based UI Design: Different views and permissions for account owners, team members, and admins, designed intentionally.",
      "Prototype & Usability Testing: Validating the flow with real or representative users before development locks it in."
    ]
  },
  {
    "title": "DEVELOPMENT & BILLING INTEGRATION",
    "description": "This is where the architecture becomes a product people can actually sign up for and pay to use. What We Do Billing logic that doesn't handle plan changes and failed payments correctly is a support burden waiting to happen. PERFORMANCE, SECURITY & SCALABILITY The infrastructure work that keeps the product stable as usage climbs, not just at launch. What We Do A SaaS product that works fine for the first fifty signups and buckles at five hundred was never actually ready to launch.",
    "bullets": [
      "Full-Stack Development: Frontend and backend built around your specific workflows, not a generic CRUD app.",
      "Subscription & Billing Integration: Stripe, Paddle, or similar platforms configured for plans, upgrades, downgrades, and cancellations.",
      "Authentication & Team Management: Login, invitations, and role permissions built for multi-user accounts, not just individual signups.",
      "API Development: A documented API where your product needs one, whether for customers or internal use.",
      "Load Testing & Performance Tuning: Confirming the system holds up as tenant count and data volume grow.",
      "Data Security & Isolation Testing: Verifying tenant data actually stays separated under real conditions, not just in theory.",
      "Infrastructure & Hosting Setup: Sized for current needs with a clear path to scale, not overbuilt or underbuilt.",
      "Monitoring & Alerting Setup: Visibility into uptime, errors, and performance before customers have to report them."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A SaaS product doesn't have a finish line, it has customers depending on it staying up every day. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Feature Development: New functionality built as customer feedback and the product roadmap evolve.",
      "Security & Dependency Updates: Keeping frameworks, libraries, and infrastructure current and patched.",
      "Performance Monitoring: Ongoing tracking as tenant count and usage grow past launch numbers.",
      "Billing & Integration Support: Keeping payment processing and third-party connections working as those platforms change."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Subscription revenue is only as reliable as the infrastructure it's running on.",
  "Architecture Mistakes Compound With Growth",
  "A shortcut that seems harmless at ten users becomes a genuine liability at ten thousand. Getting tenant architecture right early is cheaper than every alternative.",
  "Trial Conversion Depends on the First Five Minutes",
  "If a new user can't reach value quickly, the trial ends before your product gets a fair chance. Onboarding design is a revenue decision, not just a UX one.",
  "Billing Logic Is Rarely as Simple as It Looks",
  "Upgrades, downgrades, proration, failed payments, cancellations, each one handled incorrectly becomes a support ticket or a chargeback.",
  "Built to Scale, Not Just to Launch",
  "A properly architected SaaS product absorbs growth without a rebuild. That's the actual difference: proper planning buys you."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most of what makes a SaaS product hard to build isn't the feature list, it's the architecture underneath it. Tenant isolation, subscription billing, usage-based limits, role permissions: none of that is visible to users, and all of it is expensive to fix after launch if it's built wrong the first time. We've architected multi-tenant systems that hold up under real growth, not just a demo with three test accounts.",
    "text": "\"The gap between a SaaS demo and a SaaS product that survives its first thousand paying customers is almost entirely architecture. Everything else is featured.\" Multi-Tenant Architecture | Subscription & Billing Built In | Infrastructure That Scales"
  },
  {
    "title": "Our SaaS App Development Services",
    "text": "Building a SaaS product means getting the foundation right before a single feature ships. PRODUCT STRATEGY & MULTI-TENANT ARCHITECTURE The decisions made here are the ones you can't cheaply undo six months into having paying customers."
  },
  {
    "title": "What We Do",
    "text": "* Tenant Architecture Planning: Deciding how customer data stays isolated and secure across a shared platform. * Requirements & Feature Roadmap: Separating what launches now from what waits for a later release cycle. * Database & Data Model Design: Structured for multi-tenancy from day one, not adapted afterward. * Scalability Planning: Infrastructure decisions made with growth in mind, not just today's user count. A single-tenant assumption baked into the database early is one of the most expensive mistakes to unwind later."
  },
  {
    "title": "UI/UX DESIGN FOR SAAS PRODUCTS",
    "text": "Design here has to work for a first-time trial user and a power user managing a team account, often on the same screen."
  },
  {
    "title": "What We Do",
    "text": "* Onboarding Flow Design: A path from signup to \"aha moment\" short enough that trial users actually get there. * Dashboard & Workflow Design: Interfaces built around how your users actually work, not a generic admin panel template. * Role-Based UI Design: Different views and permissions for account owners, team members, and admins, designed intentionally. * Prototype & Usability Testing: Validating the flow with real or representative users before development locks it in. A confusing onboarding flow is one of the most common reasons trial users never convert, and it's rarely a marketing problem."
  },
  {
    "title": "DEVELOPMENT & BILLING INTEGRATION",
    "text": "This is where the architecture becomes a product people can actually sign up for and pay to use."
  },
  {
    "title": "What We Do",
    "text": "* Full-Stack Development: Frontend and backend built around your specific workflows, not a generic CRUD app. * Subscription & Billing Integration: Stripe, Paddle, or similar platforms configured for plans, upgrades, downgrades, and cancellations. * Authentication & Team Management: Login, invitations, and role permissions built for multi-user accounts, not just individual signups. * API Development: A documented API where your product needs one, whether for customers or internal use. Billing logic that doesn't handle plan changes and failed payments correctly is a support burden waiting to happen. PERFORMANCE, SECURITY & SCALABILITY The infrastructure work that keeps the product stable as usage climbs, not just at launch."
  },
  {
    "title": "What We Do",
    "text": "* Load Testing & Performance Tuning: Confirming the system holds up as tenant count and data volume grow. * Data Security & Isolation Testing: Verifying tenant data actually stays separated under real conditions, not just in theory. * Infrastructure & Hosting Setup: Sized for current needs with a clear path to scale, not overbuilt or underbuilt. * Monitoring & Alerting Setup: Visibility into uptime, errors, and performance before customers have to report them. A SaaS product that works fine for the first fifty signups and buckles at five hundred was never actually ready to launch."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A SaaS product doesn't have a finish line, it has customers depending on it staying up every day."
  },
  {
    "title": "What We Do",
    "text": "* Feature Development: New functionality built as customer feedback and the product roadmap evolve. * Security & Dependency Updates: Keeping frameworks, libraries, and infrastructure current and patched. * Performance Monitoring: Ongoing tracking as tenant count and usage grow past launch numbers. * Billing & Integration Support: Keeping payment processing and third-party connections working as those platforms change. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real SaaS Development Partner Subscription revenue is only as reliable as the infrastructure it's running on. Architecture Mistakes Compound With Growth A shortcut that seems harmless at ten users becomes a genuine liability at ten thousand. Getting tenant architecture right early is cheaper than every alternative. Trial Conversion Depends on the First Five Minutes If a new user can't reach value quickly, the trial ends before your product gets a fair chance. Onboarding design is a revenue decision, not just a UX one. Billing Logic Is Rarely as Simple as It Looks Upgrades, downgrades, proration, failed payments, cancellations, each one handled incorrectly becomes a support ticket or a chargeback. Built to Scale, Not Just to Launch A properly architected SaaS product absorbs growth without a rebuild. That's the actual difference: proper planning buys you. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Architecture, design, development, billing integration, handled by people who see the whole system, not a contractor who only touches their one piece. Architecture First, Features Second We don't start with a feature list. We start with tenant structure and data architecture, because that's what determines whether the feature list is even buildable later without a rebuild."
  },
  {
    "title": "Local & International SaaS Experience",
    "text": "Based in Dhaka. Building for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage, architecture, design, development, goes through your review before we move to the next one."
  },
  {
    "title": "Strategy & Multi-Tenant Architecture",
    "text": "Data isolation, scalability, and system structure planned before a single feature gets built."
  },
  {
    "title": "Onboarding & Dashboard UI/UX",
    "text": "Interfaces designed around getting trial users to value fast, and power users to their daily workflow without friction."
  },
  {
    "title": "Full-Stack Development & Billing",
    "text": "Subscription logic, payment integration, and team account management built correctly from the start."
  },
  {
    "title": "Load Testing & Security",
    "text": "Infrastructure tested under real growth conditions, with tenant data isolation verified, not assumed."
  },
  {
    "title": "Monitoring & Alerting",
    "text": "Visibility into uptime and performance before your customers have to tell you something's wrong."
  },
  {
    "title": "Transparent Process",
    "text": "Approval checkpoints at every stage, nothing built without you seeing it first."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
