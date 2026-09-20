const techStackTable = [
  { layer: "Frontend", technologies: "React, Next.js, Angular, Vue, or another suitable framework" },
  { layer: "Backend", technologies: "Node.js, .NET, Java, Python, Laravel/PHP, or an existing backend" },
  { layer: "Database", technologies: "PostgreSQL, MySQL, MongoDB, Oracle, or another suitable system" },
  { layer: "APIs", technologies: "REST, GraphQL, gRPC, Webhooks" },
  { layer: "Authentication", technologies: "SSO, OAuth, JWT, enterprise identity providers" },
  { layer: "Cache & Data", technologies: "Redis, queues, suitable messaging systems" },
  { layer: "Cloud", technologies: "AWS, Azure, Google Cloud, or project-specific infrastructure" },
  { layer: "Infrastructure", technologies: "Docker, Kubernetes, CI/CD, automation where required" },
  { layer: "Testing", technologies: "Unit, integration, API, security, performance, load, regression testing" },
  { layer: "Monitoring", technologies: "Logs, metrics, error tracking, uptime and application monitoring" }
]

export default function TechStack() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Technology Standards
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We choose technologies around the organization&apos;s requirements, existing systems, security needs, and long-term maintenance plan.
        </p>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border w-1/3">Layer</th>
              <th className="p-4">Technologies</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {techStackTable.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                  {row.layer}
                </td>
                <td className="p-4 font-medium text-frame-fg">
                  {row.technologies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4">
        <p className="text-xs md:text-sm font-semibold text-frame-muted-fg">
          The final technology stack is selected around the project rather than using the same tools for every enterprise system.
        </p>
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
          Only keep technologies here that Framecipher genuinely uses and supports.
        </p>
      </div>
    </div>
  )
}