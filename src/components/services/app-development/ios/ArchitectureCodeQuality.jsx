const codeQuality = [
  {
    title: "Structured Codebase",
    desc: "We separate interface, business logic, networking, data, and reusable components where the project benefits from that structure."
  },
  {
    title: "Maintainable Components",
    desc: "Reusable components reduce unnecessary duplication and make future feature updates easier to manage."
  },
  {
    title: "API & Data Layers",
    desc: "Networking, models, local data, and application state are organized so the codebase remains easier to test and extend."
  },
  {
    title: "Dependency Management",
    desc: "Project dependencies are reviewed for compatibility, maintenance, and their impact on future iOS updates."
  },
  {
    title: "Code Review & Quality Checks",
    desc: "Important areas are reviewed for structure, reliability, maintainability, and consistency before release."
  }
]

export default function ArchitectureCodeQuality() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Codebase Standards
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          iOS App Architecture &amp; Code Quality
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Good iOS development is not only about how the application looks. The underlying code should remain understandable as the product grows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {codeQuality.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Standard 0{i + 1}
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