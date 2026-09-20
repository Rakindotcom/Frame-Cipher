const modernizationItems = [
  "Legacy Android codebase modernization",
  "Java-to-Kotlin migration where appropriate",
  "Android version compatibility updates",
  "Outdated dependency replacement",
  "Architecture improvements",
  "UI/UX modernization",
  "Performance optimization",
  "Security improvements",
  "API and backend updates",
  "New feature development",
  "Third-party integration updates"
]

export default function Modernization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Legacy Modernization
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Android App Modernization &amp; Migration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          An existing Android application may not need to be completely rebuilt. Sometimes the better approach is to modernize the current codebase and improve the areas causing problems. We can support:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modernizationItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-frame-fg">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          Before major changes begin, we assess the existing codebase, architecture, dependencies, integrations, and current issues. The recommendation may be modernization, migration, partial redevelopment, or a full rebuild depending on the condition of the application.
        </p>
      </div>
    </div>
  )
}