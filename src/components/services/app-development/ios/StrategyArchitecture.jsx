const strategyArchitecture = [
  {
    title: "Requirements & Feature Planning",
    desc: "We define the primary user journeys, business rules, account types, key features, integrations, and technical requirements before development starts."
  },
  {
    title: "iOS Device & Version Planning",
    desc: "We identify the supported iPhone and iPad devices and iOS versions based on your audience, required features, and project scope."
  },
  {
    title: "Backend & API Planning",
    desc: "We map the data your app needs, API connections, authentication, admin workflows, notifications, and third-party services."
  },
  {
    title: "Scalability Planning",
    desc: "The architecture is planned around future features, increasing users, new integrations, and ongoing product updates."
  },
  {
    title: "Technical Risk Review",
    desc: "We identify complex integrations, platform limitations, performance-sensitive features, and dependencies early so they do not become expensive surprises later."
  }
]

export default function StrategyArchitecture() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Blueprint &amp; Scoping
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Product Strategy &amp; Architecture
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A successful iOS app starts with decisions made before development begins.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}