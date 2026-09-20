const whyRealPartner = [
  {
    title: "App Store Review Is a Real Gate",
    desc: "An iOS application must meet Apple's technical, content, privacy, and submission requirements before it can reach users through the App Store. We plan for those requirements during development instead of treating submission as an afterthought."
  },
  {
    title: "iOS Users Expect a Native Experience",
    desc: "Your app should feel natural on the platform. Navigation, gestures, layouts, typography, states, and interactions all need to work together as one product."
  },
  {
    title: "Native Performance When It Matters",
    desc: "Some applications depend heavily on device capabilities, performance, background behavior, or platform-specific features. In those cases, native iOS development gives us direct access to the tools the platform provides."
  },
  {
    title: "Architecture That Survives iOS Updates",
    desc: "An application should not need a major rebuild every time the platform evolves. We structure the codebase and dependencies with future updates and maintenance in mind."
  }
]

export default function WhyRealPartner() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Platform Engineering Reality
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Your Business Needs a Real iOS Development Partner
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyRealPartner.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Factor 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {reason.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}