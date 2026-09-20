const technologyTooling = [
  "REST APIs",
  "GraphQL",
  "Webhooks",
  "OpenAPI and Swagger",
  "OAuth and token-based authentication",
  "API keys and access controls",
  "Database integration",
  "Caching",
  "Automated API testing",
  "Logging and monitoring",
  "Cloud and existing infrastructure",
  "Message Queues & Event Streaming"
]

export default function TechTooling() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Stack &amp; Frameworks
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Technology &amp; Tooling
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We select API technologies and supporting tools based on your application&apos;s requirements, existing infrastructure, integration needs, and long-term maintenance. Our API projects can involve:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologyTooling.map((tech, i) => (
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
          The final technology choices depend on the project&apos;s architecture, existing systems, and technical requirements.
      </p>
    </div>
  )
}