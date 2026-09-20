const securityAccessItems = [
  {
    title: "Authentication",
    desc: "Authentication verifies who or what is making an API request. Depending on the project, this may use API keys, tokens, OAuth, or another appropriate authentication mechanism."
  },
  {
    title: "Authorization",
    desc: "Authentication alone does not determine what a consumer can access. Authorization controls which resources and actions each user, application, or partner can access."
  },
  {
    title: "Rate Limiting",
    desc: "Rate limiting helps control excessive requests and protect APIs from unexpected traffic or abuse. Limits are planned around the API's expected usage and business requirements."
  },
  {
    title: "Input Validation",
    desc: "Incoming data should not be trusted automatically. We validate requests and reject invalid or unexpected data before it reaches sensitive business logic or connected systems."
  },
  {
    title: "API Gateway Security",
    desc: "Where the architecture requires an API gateway, it can provide a centralized layer for authentication, routing, rate limiting, traffic control, and monitoring."
  },
  {
    title: "Sensitive Data Protection",
    desc: "API responses should expose only the data required by the consumer. We consider data exposure, access permissions, credentials, and sensitive information when designing API workflows."
  },
  {
    title: "Security Testing",
    desc: "Security checks can be included within API testing based on the project's scope and requirements."
  },
  {
    title: "Audit Logging & Compliance",
    desc: "Capture comprehensive request and response telemetry, security access logs, and administrative actions with immutable audit trails to meet regulatory and corporate security policies."
  }
]

export default function Security() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Access Governance
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Security &amp; Access Control
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Security needs to be considered before an API reaches production. We design security controls around the application&apos;s users, integrations, data, and access requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {securityAccessItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Security Pillar 0{i + 1}
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