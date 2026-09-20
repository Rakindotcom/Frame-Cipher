const modernizationAreas = [
  "Legacy technology modernization",
  "UI/UX redesign",
  "New feature development",
  "Backend or API improvements",
  "Performance optimization",
  "OS compatibility updates",
  "Security improvements",
  "Integration updates",
  "Codebase improvements",
  "Architecture modernization"
]

export default function Modernization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Codebase Evolution
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          App Modernization &amp; Existing Application Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          You may already have an application that works but needs technical, usability, or product improvements. We can support existing applications that require:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modernizationAreas.map((item, idx) => (
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
          Before major changes begin, we review the existing technology stack, dependencies, architecture, integrations, and current problems so the modernization approach reflects the actual condition of the product.
        </p>
      </div>
    </div>
  )
}