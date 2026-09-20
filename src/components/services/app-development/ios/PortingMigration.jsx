const portingMigration = [
  {
    title: "Existing iOS App Modernization",
    desc: "We can review older iOS applications and update architecture, dependencies, interface components, supported iOS versions, or technical functionality."
  },
  {
    title: "UIKit to SwiftUI Transition",
    desc: "Where appropriate, parts of an existing application can be modernized with SwiftUI without requiring an unnecessary full rewrite."
  },
  {
    title: "Legacy Code & Dependency Review",
    desc: "We identify outdated libraries, technical debt, unstable integrations, and areas that may create future maintenance problems."
  },
  {
    title: "Android-to-iOS Development",
    desc: "When you already have an Android product, we can use the existing business logic and workflows as a reference while creating a proper iOS experience."
  },
  {
    title: "Feature Migration",
    desc: "Existing accounts, integrations, data workflows, and product functionality can be reviewed for reuse, redesign, or replacement during migration."
  }
]

export default function PortingMigration() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Codebase Modernization
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          iOS App Porting &amp; Migration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Already have an application? We can improve or extend the product you already built.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portingMigration.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Upgrade 0{i + 1}
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