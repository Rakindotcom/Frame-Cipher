const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, UI/UX, development, integrations, testing, and launch stay within one team instead of being divided between multiple vendors."
  },
  {
    title: "Built for iOS",
    desc: "We design around iOS interaction patterns and Apple platform requirements instead of treating iOS as a resized version of another platform."
  },
  {
    title: "Platform-Neutral Advice",
    desc: "We recommend native, cross-platform, or another approach based on your product, users, timeline, and budget."
  },
  {
    title: "Business-First Development",
    desc: "We begin with what the application needs to achieve. Then we decide what should be built and how it should work."
  },
  {
    title: "Clear Scope & Review",
    desc: "You review important requirements, designs, builds, and release stages before the project moves forward."
  },
  {
    title: "Long-Term Partnership",
    desc: "After launch, we can continue supporting bug fixes, platform updates, feature enhancements, and ongoing technical maintenance."
  }
]

export default function WhyChoose() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Agency Differentiators
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Framecipher for iOS App Development
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Advantage 0{i + 1}
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