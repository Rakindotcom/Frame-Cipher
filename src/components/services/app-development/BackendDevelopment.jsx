const backendAreas = [
  "Backend architecture",
  "Database design",
  "API development",
  "Authentication and authorization",
  "Business logic",
  "Admin systems",
  "File and media handling",
  "Data validation",
  "Third-party connections",
  "Deployment and environment setup",
  "Scalability planning"
]

export default function BackendDevelopment() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Systems Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          App Architecture &amp; Backend Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          The mobile interface is only one part of a working application. Backend systems, databases, APIs, authentication, business logic, and infrastructure determine how the product operates behind the interface. Depending on the project, we can handle:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {backendAreas.map((area, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
          >
            <span className="text-xs font-black text-frame-accent font-mono">
              {(idx + 1).toString().padStart(2, '0')}.
            </span>
            <span className="text-sm font-semibold text-frame-fg">
              {area}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          We treat the application as one connected system rather than separating the mobile interface from the backend architecture.
        </p>
      </div>
    </div>
  )
}