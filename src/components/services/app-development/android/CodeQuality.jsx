const codeQuality = [
  {
    title: "Clear Separation of Responsibilities",
    desc: "Keeping interface, business logic, data access, and external services organized so changes remain easier to manage."
  },
  {
    title: "Modern Android Architecture",
    desc: "Using established Android patterns such as MVVM where appropriate for the product and development requirements."
  },
  {
    title: "Reusable Components",
    desc: "Creating reusable code and interface components where practical to reduce duplication and support consistency."
  },
  {
    title: "API & Data Layers",
    desc: "Separating network communication, local storage, and business logic for a more predictable application structure."
  },
  {
    title: "Dependency Management",
    desc: "Keeping frameworks, libraries, and dependencies organized and maintained throughout development."
  },
  {
    title: "Testing & Code Review",
    desc: "Using appropriate testing and review practices to identify problems early and support long-term maintainability."
  }
]

export default function CodeQuality() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Standards
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Android App Architecture &amp; Code Quality
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A maintainable Android application needs a clear code structure as well as functional features. Depending on the project, architecture can include:
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

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          The architecture should fit the product. We do not add patterns simply to make the technical stack look more complex.
        </p>
      </div>
    </div>
  )
}