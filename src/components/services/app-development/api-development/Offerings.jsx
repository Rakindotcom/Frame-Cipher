import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "API STRATEGY & DESIGN",
    "description": "Before any endpoint gets built, we map out what the API actually needs to expose and to whom. What We Do An API designed without thinking about versioning is an API that breaks its own consumers the first time it needs to change.",
    "bullets": [
      "API Architecture Planning: REST or GraphQL, chosen based on what your data structure and consumers actually need.",
      "Endpoint & Resource Design: Structuring endpoints around clear, predictable resources, not an ad-hoc collection of routes.",
      "Authentication Strategy: API keys, OAuth, or token-based auth, matched to who's consuming the API and how.",
      "Rate Limiting & Versioning Planning: Deciding how the API handles load and future changes before either becomes a live problem."
    ]
  },
  {
    "title": "CUSTOM API DEVELOPMENT",
    "description": "Building the API itself clean, documented, and built to be consumed by people who aren't you. What We Do An undocumented API is an API only its original developer can actually use.",
    "bullets": [
      "REST or GraphQL API Development: Clean, well-structured endpoints built around your actual data model.",
      "Authentication & Authorization: Secure access control, scoped correctly to what each consumer should actually be able to do.",
      "Data Validation & Error Handling: Meaningful error responses instead of a generic failure that leaves the consumer guessing.",
      "API Documentation: Clear, usable documentation so whoever consumes the API, your own team or an external partner isn't reverse-engineering it."
    ]
  },
  {
    "title": "THIRD-PARTY INTEGRATION",
    "description": "Connecting your systems to the tools and services your business already depends on. What We Do Most third-party integrations fail quietly at the edges of a webhook that stops firing, a rate limit hit during a traffic spike, which is exactly where we focus testing. TESTING, MONITORING & RELIABILITY An integration that works today needs to keep working as the systems on either end change. What We Do A payment integration that fails silently during a traffic spike is a worse outcome than one that fails loudly and gets fixed fast.",
    "bullets": [
      "Payment Gateway Integration: Stripe, PayPal, bKash, Nagad, or other processors, connected and tested against real transaction scenarios.",
      "CRM & Marketing Platform Integration: Connecting your website, app, or internal tools to HubSpot, Salesforce, or similar platforms.",
      "ERP & Business System Integration: Linking custom applications to accounting, inventory, or operations systems already in use.",
      "Webhook Implementation: Real-time data sync built to handle retries and failures, not just the happy-path notification.",
      "Integration Testing: Testing against real API behavior, including error responses and edge cases, not just successful calls.",
      "Load & Performance Testing: Confirming the API or integration holds up under real traffic volume, not just a light demo load.",
      "Uptime & Error Monitoring: Alerting set up so a failed integration gets caught in minutes, not discovered by a customer.",
      "Retry & Fallback Logic: Built-in handling for when a third-party service is temporarily unavailable."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "APIs and the systems they connect to both keep changing after launch. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "API Version Updates: Keeping custom APIs current as your product or data model evolves.",
      "Third-Party API Change Monitoring: Tracking when connected services update or deprecate their own APIs, before it breaks your integration.",
      "Performance Monitoring: Ongoing tracking of response times and error rates as usage grows.",
      "Security Patching: Keeping authentication and dependency layers current and patched."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "The systems your business runs on are only as reliable as the connections between them.",
  "Silent Failures Are the Real Risk",
  "A crashed system gets noticed immediately. A silently failing integration can drop data for days before anyone catches it, that's the failure mode worth designing against.",
  "Third-Party APIs Change Without Asking",
  "Payment processors, CRMs, and other platforms update their own APIs on their own schedule. An integration that isn't monitored for those changes eventually breaks without warning.",
  "A Well-Designed API Is a Long-Term Asset",
  "An API built with clear structure and documentation gets adopted and extended easily. One built as an afterthought becomes something every future developer has to work around.",
  "Reliability Compounds Trust",
  "Payment processing, data sync, and system integrations touch the parts of your business customers actually notice when something goes wrong."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "An API is invisible when it's working and impossible to ignore when it isn't. We design endpoints, authentication, and error handling with the assumption that something downstream will eventually fail, a third-party service will time out, a payload will arrive malformed, because building for the happy path only is how integrations end up silently dropping data in production. Whether it's a custom API for your own product or a connection to a system you don't control, we build it to hold up under real conditions, not just a clean test environment.",
    "text": "\"Most integration failures aren't dramatic, they're quiet. A webhook that silently stops firing, an API that times out under load nobody tested for. The difference between a reliable integration and a fragile one usually comes down to how much thought goes into what happens when something goes wrong.\" Custom REST & GraphQL APIs | Reliable Third-Party Integrations | Built for Failure, Not Just Success Our API Development & Integration Services Two different problems live under this service, building an API from scratch, and connecting to ones that already exist."
  },
  {
    "title": "API STRATEGY & DESIGN",
    "text": "Before any endpoint gets built, we map out what the API actually needs to expose and to whom."
  },
  {
    "title": "What We Do",
    "text": "* API Architecture Planning: REST or GraphQL, chosen based on what your data structure and consumers actually need. * Endpoint & Resource Design: Structuring endpoints around clear, predictable resources, not an ad-hoc collection of routes. * Authentication Strategy: API keys, OAuth, or token-based auth, matched to who's consuming the API and how. * Rate Limiting & Versioning Planning: Deciding how the API handles load and future changes before either becomes a live problem. An API designed without thinking about versioning is an API that breaks its own consumers the first time it needs to change."
  },
  {
    "title": "CUSTOM API DEVELOPMENT",
    "text": "Building the API itself clean, documented, and built to be consumed by people who aren't you."
  },
  {
    "title": "What We Do",
    "text": "* REST or GraphQL API Development: Clean, well-structured endpoints built around your actual data model. * Authentication & Authorization: Secure access control, scoped correctly to what each consumer should actually be able to do. * Data Validation & Error Handling: Meaningful error responses instead of a generic failure that leaves the consumer guessing. * API Documentation: Clear, usable documentation so whoever consumes the API, your own team or an external partner isn't reverse-engineering it. An undocumented API is an API only its original developer can actually use."
  },
  {
    "title": "THIRD-PARTY INTEGRATION",
    "text": "Connecting your systems to the tools and services your business already depends on."
  },
  {
    "title": "What We Do",
    "text": "* Payment Gateway Integration: Stripe, PayPal, bKash, Nagad, or other processors, connected and tested against real transaction scenarios. * CRM & Marketing Platform Integration: Connecting your website, app, or internal tools to HubSpot, Salesforce, or similar platforms. * ERP & Business System Integration: Linking custom applications to accounting, inventory, or operations systems already in use. * Webhook Implementation: Real-time data sync built to handle retries and failures, not just the happy-path notification. Most third-party integrations fail quietly at the edges of a webhook that stops firing, a rate limit hit during a traffic spike, which is exactly where we focus testing. TESTING, MONITORING & RELIABILITY An integration that works today needs to keep working as the systems on either end change."
  },
  {
    "title": "What We Do",
    "text": "* Integration Testing: Testing against real API behavior, including error responses and edge cases, not just successful calls. * Load & Performance Testing: Confirming the API or integration holds up under real traffic volume, not just a light demo load. * Uptime & Error Monitoring: Alerting set up so a failed integration gets caught in minutes, not discovered by a customer. * Retry & Fallback Logic: Built-in handling for when a third-party service is temporarily unavailable. A payment integration that fails silently during a traffic spike is a worse outcome than one that fails loudly and gets fixed fast."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "APIs and the systems they connect to both keep changing after launch."
  },
  {
    "title": "What We Do",
    "text": "* API Version Updates: Keeping custom APIs current as your product or data model evolves. * Third-Party API Change Monitoring: Tracking when connected services update or deprecate their own APIs, before it breaks your integration. * Performance Monitoring: Ongoing tracking of response times and error rates as usage grows. * Security Patching: Keeping authentication and dependency layers current and patched. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real API Partner The systems your business runs on are only as reliable as the connections between them."
  },
  {
    "title": "Silent Failures Are the Real Risk",
    "text": "A crashed system gets noticed immediately. A silently failing integration can drop data for days before anyone catches it, that's the failure mode worth designing against."
  },
  {
    "title": "Third-Party APIs Change Without Asking",
    "text": "Payment processors, CRMs, and other platforms update their own APIs on their own schedule. An integration that isn't monitored for those changes eventually breaks without warning."
  },
  {
    "title": "A Well-Designed API Is a Long-Term Asset",
    "text": "An API built with clear structure and documentation gets adopted and extended easily. One built as an afterthought becomes something every future developer has to work around."
  },
  {
    "title": "Reliability Compounds Trust",
    "text": "Payment processing, data sync, and system integrations touch the parts of your business customers actually notice when something goes wrong. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Architecture, development, testing, monitoring handled by people who understand the full data flow, not a contractor who only sees their one endpoint. Built for Failure, Not Just Success We design error handling, retries, and monitoring as core requirements, not an afterthought added once something has already broken in production. Local & International Integration Experience Based in Dhaka. Building for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage architecture, development, testing goes through your review before we move to the next one."
  },
  {
    "title": "API Strategy & Design",
    "text": "Endpoint structure, authentication approach, and versioning strategy planned before development starts."
  },
  {
    "title": "Custom API Development",
    "text": "Clean, documented REST or GraphQL APIs built around your actual data model."
  },
  {
    "title": "Third-Party Integration",
    "text": "Payment, CRM, ERP, and webhook connections built and tested against real-world conditions."
  },
  {
    "title": "Testing & Reliability Engineering",
    "text": "Load testing, error handling, and retry logic built in, not bolted on after something breaks."
  },
  {
    "title": "Monitoring & Alerting",
    "text": "Visibility into API and integration health before your customers have to report a problem."
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
