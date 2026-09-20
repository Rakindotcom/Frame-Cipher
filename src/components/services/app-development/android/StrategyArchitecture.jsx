const strategyArchitecture = [
  {
    title: "Requirements & Feature Planning",
    desc: "We identify the core features, user roles, key workflows, and functionality required for the initial release."
  },
  {
    title: "Device & OS Targeting",
    desc: "We define the Android versions, device categories, screen sizes, and other compatibility requirements relevant to the target users."
  },
  {
    title: "Data & API Planning",
    desc: "We determine what data the application needs, where it comes from, and how the Android client communicates with backend systems."
  },
  {
    title: "Scalability Planning",
    desc: "The architecture is planned around the expected product roadmap so future features can be added without unnecessarily restructuring the application."
  }
]

export default function StrategyArchitecture() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Blueprint &amp; Roadmap
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Product Strategy &amp; Architecture
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Before development starts, we establish how the application should work as a product and as a technical system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strategyArchitecture.map((item, i) => (
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

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-semibold italic text-frame-fg">
          Good architecture reduces uncertainty later. It should support the product without introducing unnecessary technical complexity.
        </p>
      </div>
    </div>
  )
}