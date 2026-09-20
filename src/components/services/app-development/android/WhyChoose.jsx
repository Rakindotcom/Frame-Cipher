const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, design, development, testing, and deployment stay connected rather than being divided between unrelated contractors."
  },
  {
    title: "Built for Android, Not Simply Ported to It",
    desc: "We consider Android platform conventions, device diversity, supported versions, and native capabilities from the beginning."
  },
  {
    title: "Platform-Neutral Advice",
    desc: "Although this page focuses on Android, we can also advise when cross-platform development or another technical approach makes more sense for your wider product."
  },
  {
    title: "Development-Aware UI/UX",
    desc: "Our design decisions consider responsive behavior, interaction states, implementation requirements, and Android-specific conventions."
  },
  {
    title: "Transparent Review Process",
    desc: "Key stages can include review and approval checkpoints so you remain involved throughout the project."
  },
  {
    title: "Full-Cycle Support",
    desc: "We can support the product from discovery and architecture through development, testing, Google Play release, and post-launch improvements."
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
          Why Choose Framecipher for Android App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher connects product planning, Android UI/UX, native development, backend engineering, testing, and Google Play release within one coordinated in-house workflow.
        </p>
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