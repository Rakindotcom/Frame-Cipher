const architecturePillars = [
  {
    title: "Shared Application Logic",
    desc: "Common business rules, validation, models, workflows, and reusable application functionality can be structured for both platforms."
  },
  {
    title: "State Management",
    desc: "We organize application state so screens, sessions, data, and user actions remain predictable as the product grows."
  },
  {
    title: "API & Data Layer",
    desc: "Networking, authentication, models, API responses, local data, and error handling are structured separately from the interface where appropriate."
  },
  {
    title: "Local Storage",
    desc: "Applications that need local data can use suitable device storage for cached content, preferences, offline workflows, and temporary application state."
  },
  {
    title: "Modular Structure",
    desc: "Features can be organized into maintainable modules so the application remains easier to extend as the product becomes larger."
  },
  {
    title: "Scalable Backend Connection",
    desc: "The mobile architecture is planned around the backend it depends on, including authentication, APIs, file handling, notifications, business logic, and administrative workflows."
  }
]

export default function Architecture() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Systems Design
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Cross-Platform App Architecture
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A reliable cross-platform application should share the right code without forcing every feature into the same implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {architecturePillars.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Pillar 0{i + 1}
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