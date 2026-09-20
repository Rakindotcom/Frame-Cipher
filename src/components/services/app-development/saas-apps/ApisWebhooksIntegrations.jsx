const apiIntegrationItems = [
  {
    title: "REST APIs",
    desc: "Build structured APIs for web applications, mobile apps, internal tools, partners, or customer integrations."
  },
  {
    title: "GraphQL Where Appropriate",
    desc: "Use GraphQL when flexible data retrieval provides a practical benefit for the application."
  },
  {
    title: "API Authentication",
    desc: "Protect API access with suitable authentication and authorization mechanisms."
  },
  {
    title: "Rate Limiting",
    desc: "Control excessive requests and protect shared infrastructure from unnecessary API traffic."
  },
  {
    title: "Webhook Events",
    desc: "Send or receive events when important actions occur, such as payments, subscription changes, account updates, or workflow events."
  },
  {
    title: "Webhook Retry Handling",
    desc: "Retry logic can help prevent temporary delivery failures from becoming lost events."
  },
  {
    title: "Signature Verification",
    desc: "Where supported by the connected service, incoming webhook signatures can be verified before processing."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connect payment platforms, CRM systems, communication services, analytics tools, storage systems, email providers, and other required platforms."
  },
  {
    title: "Public API Access",
    desc: "For integration-focused SaaS products, public APIs can become part of the customer-facing product itself."
  }
]

export default function ApisWebhooksIntegrations() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Ecosystem Connectivity
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS APIs, Webhooks &amp; Integrations
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Modern SaaS products often need to connect with other software, services, and customer systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apiIntegrationItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Integration Layer 0{i + 1}
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
  )
}