const integrationTypes = [
  "Payment gateways",
  "bKash and Nagad where applicable",
  "CRM systems",
  "Maps and location services",
  "SMS and email services",
  "Social authentication",
  "Analytics platforms",
  "Cloud services",
  "External APIs",
  "Existing business software"
]

export default function Integrations() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Ecosystem Connectivity
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API, Payment &amp; Third-Party Integrations
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Modern applications often depend on external services. We plan integrations around the required data flow, authentication, business rules, and failure conditions. Integrations can include:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {integrationTypes.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
          >
            <span className="h-2 w-2 bg-frame-accent"></span>
            <span className="text-sm font-semibold text-frame-fg">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          The exact integration scope depends on the provider, available APIs, authentication requirements, data flow, and project complexity.
        </p>
      </div>
    </div>
  )
}