import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "TECHNICAL DISCOVERY & ARCHITECTURE",
    "description": "Every custom build starts with confirming custom development is actually the right call, then planning the architecture properly. What We Do Skipping proper architecture planning is the most common reason custom projects go over budget and timeline.",
    "bullets": [
      "Platform Fit Assessment: Honest evaluation of whether your needs genuinely require custom development or would be served better by a platform.",
      "System Architecture Planning: Designing data models, API structure, and application logic around your actual business requirements.",
      "Tech Stack Selection: Next.js, database, and hosting decisions matched to your performance and scalability needs.",
      "Integration Mapping: Identifying every system the application needs to connect to before development begins."
    ]
  },
  {
    "title": "UI/UX DESIGN FOR CUSTOM APPLICATIONS",
    "description": "Design built around real user flows and application logic, not a template's predefined sections. What We Do Custom design work here is functional, not just visual, every screen is built around a specific user task. FULL-STACK NEXT.JS DEVELOPMENT The technical build itself, clean, modern, and built for the specific requirements platforms can't handle. What We Do This is where the ceiling platforms stop applying, if your business logic is genuinely custom, the code that runs it should be too. PERFORMANCE, SECURITY & SCALABILITY Building for real-world load and growth from the start, not retrofitting it later. What We Do Custom development gives you control over performance and scale that platforms structurally can't match, but only if it's architected correctly from day one.",
    "bullets": [
      "Custom Interface Design: Layouts and components designed specifically for your product, user roles, or workflows.",
      "User Flow Mapping: Designing around how users actually move through the application, not a generic page-by-page structure.",
      "Design System Development: Reusable components and consistent styling that scale as the application grows.",
      "Responsive & Accessible Design: Built to perform correctly across devices and meet accessibility standards from the start.",
      "Frontend Development: React/Next.js components built for performance, using server-side rendering and static generation where they genuinely help.",
      "Backend & API Development: Custom APIs, database design, and business logic built around your actual data and workflows.",
      "Authentication & User Management: Custom login, roles, and permissions systems where a platform's built-in options fall short.",
      "Third-Party & System Integrations: Payment processors, CRMs, ERPs, or internal tools connected through custom-built, reliable integrations.",
      "Performance Optimization: Next.js's rendering strategies used deliberately to hit real speed benchmarks, not just default settings.",
      "Security Architecture: Custom authentication, data handling, and API security built to the requirements of your specific application.",
      "Scalable Infrastructure Setup: Hosting and database architecture sized for current needs with a clear path to handle growth.",
      "Testing & Quality Assurance: Automated and manual testing built into the development process, not added only before launch."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A custom application's job isn't done at launch, it needs active development support as your business and its requirements evolve. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Ongoing Feature Development: Building new functionality as business needs change, since a custom application doesn't have platform-provided updates to rely on.",
      "Security & Dependency Updates: Keeping frameworks, libraries, and dependencies current and patched.",
      "Performance Monitoring: Ongoing checks on speed and server load as usage and data grow.",
      "Bug Fixes & Technical Support: Addressing issues that come up in a live, actively used application."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Custom development is a bigger investment than a platform build, which makes getting the foundation right non-negotiable.",
  "Solving Problems Platforms Structurally Can't",
  "Complex business logic, unique data models, or specific performance requirements often can't be solved within a platform's constraints, no matter how many plugins or apps get added on top.",
  "Trust & Long-Term Reliability",
  "A poorly architected custom build is expensive to fix later, proper planning upfront is what keeps a custom application maintainable as it grows, not just functional at launch.",
  "Performance You Can Actually Control",
  "Next.js gives direct control over rendering, loading, and performance strategy, a level of control platform-based sites structurally can't offer, since you're not working within someone else's constraints.",
  "Built to Scale Without a Platform Ceiling",
  "Unlike template platforms with real limits on customization and scale, a well-architected custom application can grow with your business without hitting a wall that forces a rebuild."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a custom development company, we build for businesses that have hit the ceiling of what WordPress, Shopify, or Webflow can do, not as a default first choice, but as the right tool once a project genuinely needs it. Our clients get full control over architecture, performance, and integrations, built on Next.js's modern React framework rather than assembled through a stack of plugins and workarounds. With hands-on experience across Bangladeshi and international businesses, we know custom development is a bigger investment, and we'll tell you directly if your project doesn't actually need it yet.",
    "text": "\"Most projects don't need custom development; they need a well-built platform site. Custom is the right call when you're hitting a wall a template genuinely can't solve, not because custom sounds more impressive.\" Full Architecture Control | Modern Performance Standards | Built to Scale Without Limits Our Custom / Next.js Development Services We offer end-to-end custom development tailored to businesses with requirements that platforms can't meet."
  },
  {
    "title": "TECHNICAL DISCOVERY & ARCHITECTURE",
    "text": "Every custom build starts with confirming custom development is actually the right call, then planning the architecture properly."
  },
  {
    "title": "What We Do",
    "text": "* Platform Fit Assessment: Honest evaluation of whether your needs genuinely require custom development or would be served better by a platform. * System Architecture Planning: Designing data models, API structure, and application logic around your actual business requirements. * Tech Stack Selection: Next.js, database, and hosting decisions matched to your performance and scalability needs. * Integration Mapping: Identifying every system the application needs to connect to before development begins. Skipping proper architecture planning is the most common reason custom projects go over budget and timeline."
  },
  {
    "title": "UI/UX DESIGN FOR CUSTOM APPLICATIONS",
    "text": "Design built around real user flows and application logic, not a template's predefined sections."
  },
  {
    "title": "What We Do",
    "text": "* Custom Interface Design: Layouts and components designed specifically for your product, user roles, or workflows. * User Flow Mapping: Designing around how users actually move through the application, not a generic page-by-page structure. * Design System Development: Reusable components and consistent styling that scale as the application grows. * Responsive & Accessible Design: Built to perform correctly across devices and meet accessibility standards from the start. Custom design work here is functional, not just visual, every screen is built around a specific user task. FULL-STACK NEXT.JS DEVELOPMENT The technical build itself, clean, modern, and built for the specific requirements platforms can't handle."
  },
  {
    "title": "What We Do",
    "text": "* Frontend Development: React/Next.js components built for performance, using server-side rendering and static generation where they genuinely help. * Backend & API Development: Custom APIs, database design, and business logic built around your actual data and workflows. * Authentication & User Management: Custom login, roles, and permissions systems where a platform's built-in options fall short. * Third-Party & System Integrations: Payment processors, CRMs, ERPs, or internal tools connected through custom-built, reliable integrations. This is where the ceiling platforms stop applying, if your business logic is genuinely custom, the code that runs it should be too. PERFORMANCE, SECURITY & SCALABILITY Building for real-world load and growth from the start, not retrofitting it later."
  },
  {
    "title": "What We Do",
    "text": "* Performance Optimization: Next.js's rendering strategies used deliberately to hit real speed benchmarks, not just default settings. * Security Architecture: Custom authentication, data handling, and API security built to the requirements of your specific application. * Scalable Infrastructure Setup: Hosting and database architecture sized for current needs with a clear path to handle growth. * Testing & Quality Assurance: Automated and manual testing built into the development process, not added only before launch. Custom development gives you control over performance and scale that platforms structurally can't match, but only if it's architected correctly from day one."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A custom application's job isn't done at launch, it needs active development support as your business and its requirements evolve."
  },
  {
    "title": "What We Do",
    "text": "* Ongoing Feature Development: Building new functionality as business needs change, since a custom application doesn't have platform-provided updates to rely on. * Security & Dependency Updates: Keeping frameworks, libraries, and dependencies current and patched. * Performance Monitoring: Ongoing checks on speed and server load as usage and data grow. * Bug Fixes & Technical Support: Addressing issues that come up in a live, actively used application. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Custom Development Partner Custom development is a bigger investment than a platform build, which makes getting the foundation right non-negotiable. Solving Problems Platforms Structurally Can't Complex business logic, unique data models, or specific performance requirements often can't be solved within a platform's constraints, no matter how many plugins or apps get added on top."
  },
  {
    "title": "Trust & Long-Term Reliability",
    "text": "A poorly architected custom build is expensive to fix later, proper planning upfront is what keeps a custom application maintainable as it grows, not just functional at launch."
  },
  {
    "title": "Performance You Can Actually Control",
    "text": "Next.js gives direct control over rendering, loading, and performance strategy, a level of control platform-based sites structurally can't offer, since you're not working within someone else's constraints."
  },
  {
    "title": "Built to Scale Without a Platform Ceiling",
    "text": "Unlike template platforms with real limits on customization and scale, a well-architected custom application can grow with your business without hitting a wall that forces a rebuild. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Architecture, design, and development handled by one team, not handed off between contractors who never see the full picture of the system they're building. Honest About When Custom Is the Right Call We'll recommend custom development when your requirements genuinely need it, and tell you directly if a platform build would get you the same result faster and at lower cost. Local & International Technical Experience Based in Dhaka, building custom applications for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of architecture, design, development, goes through your review and approval before we move forward."
  },
  {
    "title": "Technical Discovery & Consultation",
    "text": "We start by understanding your requirements honestly, including whether custom development is actually the right fit."
  },
  {
    "title": "System Architecture",
    "text": "Data models, API structure, and tech stack decisions planned around your actual business logic, not a generic starting point."
  },
  {
    "title": "Custom UI/UX Design",
    "text": "Interfaces designed around real user workflows and roles, not a template's predefined page structure."
  },
  {
    "title": "Full-Stack Development",
    "text": "Frontend, backend, and integrations built specifically for your requirements, using Next.js's modern architecture."
  },
  {
    "title": "Performance & Security Architecture",
    "text": "Speed, scalability, and security built in from the start, not retrofitted after problems appear."
  },
  {
    "title": "Transparent Process",
    "text": "Review checkpoints at every stage, so you approve direction before it's built, not after."
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
