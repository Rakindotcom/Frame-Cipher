const deploymentHandoffItems = [
  {
    title: "Source Code Ownership",
    desc: "The agreed source code is delivered according to the project scope and contract terms."
  },
  {
    title: "Cloud Account Ownership",
    desc: "Where appropriate, infrastructure can be maintained under the client's account or another agreed ownership structure."
  },
  {
    title: "Database Access",
    desc: "Appropriate database access, credentials, and documentation can be handed over according to the project's security model."
  },
  {
    title: "Environment Configuration",
    desc: "Development, staging, and production environments can be documented so the application remains understandable after launch."
  },
  {
    title: "Deployment Documentation",
    desc: "Provide the information needed to understand how the application is built, deployed, and maintained."
  },
  {
    title: "API Documentation",
    desc: "Document important APIs and integration points required for ongoing development."
  },
  {
    title: "Admin Access",
    desc: "Provide the agreed access to administrative interfaces and product-management tools."
  },
  {
    title: "Technical Handoff",
    desc: "At project completion, the agreed files, credentials, documentation, and other deliverables are handed over for continued operation."
  }
]

export default function DeploymentHandoff() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          IP &amp; Infrastructure Control
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Deployment, Ownership &amp; Handoff
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A SaaS project should leave you with a clear understanding of the product and the infrastructure that runs it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {deploymentHandoffItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Deliverable Standard 0{i + 1}
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