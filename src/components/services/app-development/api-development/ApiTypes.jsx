const apiTypes = [
  {
    title: "REST API Development",
    desc: "We build REST APIs with structured resources, predictable endpoints, appropriate HTTP methods, validation, authentication, error handling, pagination, and versioning. REST APIs work well for websites, mobile applications, SaaS platforms, internal systems, and third-party integrations."
  },
  {
    title: "GraphQL API Development",
    desc: "GraphQL can help applications request the specific data they need through a defined schema. We can develop GraphQL APIs when the application's data structure and client requirements make the approach appropriate."
  },
  {
    title: "Web API Development",
    desc: "We build web-facing APIs that allow applications and services to exchange data over web protocols. Depending on the project, a web API can support browser-based applications, mobile applications, backend services, client portals, dashboards, external integrations, and internal business tools. The API design depends on the application's consumers, data requirements, security model, and integration needs."
  },
  {
    title: "Internal APIs",
    desc: "Internal APIs connect different applications or services within the same organization. They can help separate systems while maintaining controlled communication between them.",
    examples: [
      "Website to ERP",
      "Ecommerce platform to inventory system",
      "CRM to internal application",
      "Mobile app to backend",
      "Admin panel to business system"
    ]
  },
  {
    title: "Public & Partner APIs",
    desc: "If your customers, vendors, developers, or business partners need controlled access to your platform, we can design APIs around that requirement.",
    capabilities: [
      "Authentication & authorization",
      "API keys or tokens",
      "Access scopes & rate limits",
      "Versioning & documentation",
      "Usage controls & partner onboarding"
    ]
  },
  {
    title: "Webhook & Event APIs",
    desc: "Webhooks allow one system to notify another when something happens. We can implement webhook-based workflows for events such as payment confirmation, order creation, shipment updates, customer updates, subscription events, inventory changes, and status notifications. Where required, we add retry and failure handling so temporary delivery problems do not silently lose important events."
  },
  {
    title: "Microservice APIs",
    desc: "For applications using multiple services, APIs can provide controlled communication between independent components. We can design service-to-service APIs around the application's architecture, data requirements, authentication model, and scaling needs."
  },
  {
    title: "Event-Driven & Streaming APIs",
    desc: "We build real-time event pipelines and streaming APIs using WebSockets, Server-Sent Events (SSE), and message brokers (Kafka, RabbitMQ) for live chats, telemetry, bidding, and low-latency status updates."
  },
  {
    title: "B2B & Partner Integration APIs",
    desc: "High-throughput, authenticated endpoints architected for third-party vendors, suppliers, and enterprise partners with dedicated token scoping, IP whitelisting, custom rate tiers, and rigorous SLAs."
  }
]

const checkIcon = (
  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function ApiTypes() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Architecture Styles
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Types We Build
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Different applications need different API architectures. We select the approach based on how your systems exchange and consume data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apiTypes.map((type, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Type 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {type.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {type.desc}
            </p>

            {type.examples && (
              <div className="mt-4 border-t border-frame-border/60 pt-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                  Examples:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-frame-fg">
                  {type.examples.map((ex, exIdx) => (
                    <li key={exIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        {checkIcon}
                      </span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {type.capabilities && (
              <div className="mt-4 border-t border-frame-border/60 pt-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                  Includes:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-frame-fg">
                  {type.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        {checkIcon}
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}