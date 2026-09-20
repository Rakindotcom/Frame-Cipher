const techStackTable = [
  { layer: "Frontend", technologies: "React, Next.js, Vue, or another suitable framework" },
  { layer: "Backend", technologies: "Node.js, Laravel/PHP, Python, or an existing backend" },
  { layer: "Database", technologies: "PostgreSQL, MySQL, MongoDB, or another suitable database" },
  { layer: "Cache", technologies: "Redis or another suitable caching layer" },
  { layer: "Authentication", technologies: "Session-based authentication, JWT, OAuth, SSO" },
  { layer: "Payments", technologies: "Stripe, Paddle, local gateways, or another required provider" },
  { layer: "APIs", technologies: "REST, GraphQL where appropriate" },
  { layer: "Storage", technologies: "Cloud object storage or another suitable solution" },
  { layer: "Background Processing", technologies: "Queues, workers, scheduled jobs" },
  { layer: "Infrastructure", technologies: "AWS, cloud platforms, containers, or project-specific hosting" },
  { layer: "Development", technologies: "Git, GitHub/GitLab, CI/CD workflows" },
  { layer: "Monitoring", technologies: "Logs, error tracking, analytics, uptime monitoring" },
  { layer: "Testing", technologies: "Unit, integration, API, UI, regression, load testing" },
]

export default function TechnologyStack() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Architecture &amp; Frameworks
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We choose technologies based on the application&apos;s requirements rather than forcing every SaaS product into one fixed stack.
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

      <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
        The final stack depends on the product, expected usage, existing systems, security requirements, and long-term roadmap.
      </p>
    </div>
  )
}