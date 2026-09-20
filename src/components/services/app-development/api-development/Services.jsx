import { SectionIntro, PosterButton } from '../../../Kinetic'

const apiServices = [
  {
    title: "API Strategy & Planning",
    desc: "A reliable API starts with understanding how your business systems work together. We first map your requirements, existing infrastructure, data flows, and integration dependencies before development begins.",
    bullets: [
      "Business and technical requirements",
      "Existing systems and infrastructure",
      "API consumers and connected applications",
      "Data flow between systems",
      "Third-party integration dependencies",
      "REST or GraphQL approach",
      "Scalability and performance requirements",
      "Project constraints and implementation priorities",
      "Long-term maintenance considerations"
    ],
    footer: "This gives the project a clear direction before we move into technical API architecture and contract design."
  },
  {
    title: "Custom API Development",
    desc: "We build custom APIs around your application's actual business logic and data model. Depending on the project, this can include REST or GraphQL APIs for websites, mobile apps, SaaS products, internal systems, and partner platforms.",
    bullets: [
      "REST API development",
      "GraphQL API development",
      "Authentication and authorization",
      "Request validation",
      "Response formatting",
      "Error handling",
      "Pagination and filtering",
      "API versioning",
      "Database integration",
      "Webhook endpoints"
    ],
    footer: "The result is an API that your own applications, partners, or approved third-party systems can consume."
  },
  {
    title: "API Integration & Connectivity",
    desc: "We connect your application with the external systems it needs to exchange data with. This may include payment platforms, CRMs, ERPs, ecommerce systems, banking services, logistics platforms, SaaS tools, and other business applications. Our integration work covers authentication, data mapping, request and response handling, webhooks, error handling, and integration testing based on each system's requirements."
  },
  {
    title: "API Testing & Quality Assurance",
    desc: "An API should not only work when everything goes right. We test normal requests, invalid inputs, authentication failures, integration errors, webhook behavior, and other realistic conditions.",
    bullets: [
      "Functional API testing",
      "Integration testing",
      "Endpoint testing",
      "Authentication testing",
      "Error-response testing",
      "Contract testing",
      "Load testing",
      "Performance testing",
      "Failure-scenario testing",
      "Regression testing"
    ],
    footer: "This helps identify problems before they affect customers or connected systems."
  },
  {
    title: "API Monitoring & Observability",
    desc: "API reliability does not end when an integration goes live. We monitor critical API behavior so problems can be identified before they disrupt connected systems.",
    bullets: [
      "API uptime and availability",
      "Response-time monitoring",
      "Error-rate tracking",
      "Webhook status",
      "Health checks",
      "API and application logs",
      "Failure alerts"
    ]
  },
  {
    title: "API Maintenance & Support",
    desc: "APIs need ongoing attention as applications, traffic, and connected platforms change. We provide maintenance when your API needs updates, troubleshooting, or continued technical support.",
    bullets: [
      "API version updates",
      "Third-party API change updates",
      "Documentation updates",
      "Performance improvements",
      "Security updates",
      "Integration troubleshooting",
      "Bug fixes and technical adjustments",
      "Monitoring and reliability improvements"
    ],
    footer: "Ongoing maintenance is available separately when a project requires continued API support."
  }
]

export default function Services() {
  return (
    <div>
      <SectionIntro
        eyebrow="Core Offerings"
        title="Our API Development & Integration Services"
      >
        We handle API projects from architecture and development through integration, testing, monitoring, and ongoing improvement.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apiServices.map((svc, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Service 0{i + 1}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {svc.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {svc.desc}
              </p>

              {svc.bullets && (
                <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg">
                  {svc.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {svc.footer && (
              <div className="mt-6 border-t border-frame-border/60 pt-3">
                <p className="text-xs font-semibold italic text-frame-muted-fg">
                  {svc.footer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <PosterButton href="/contact">Discuss Your API Requirements &rarr;</PosterButton>
      </div>
    </div>
  )
}