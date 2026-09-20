const swiftSwiftUiPoints = [
  {
    title: "Swift Development",
    desc: "We use Swift to build application logic, networking, data handling, integrations, and native iOS functionality."
  },
  {
    title: "SwiftUI Interfaces",
    desc: "SwiftUI provides a modern way to build interfaces with reusable components, adaptive layouts, and a structured UI development workflow."
  },
  {
    title: "UIKit When It Makes Sense",
    desc: "UIKit remains useful for existing applications, specific interface requirements, advanced controls, and projects that need to work with an established UIKit codebase."
  },
  {
    title: "Native iOS Capabilities",
    desc: "When your product depends on platform-specific behavior, device features, performance, background activity, or Apple frameworks, native development provides direct access to the required iOS capabilities."
  },
  {
    title: "Modernization Without an Unnecessary Rewrite",
    desc: "For existing applications, SwiftUI can be introduced gradually alongside UIKit instead of forcing the entire application into a single framework."
  }
]

export default function SwiftSwiftUi() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Platform Native
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Native iOS Development With Swift &amp; SwiftUI
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We build native iOS applications with Swift and use SwiftUI, UIKit, or both depending on the product requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {swiftSwiftUiPoints.map((item, i) => (
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