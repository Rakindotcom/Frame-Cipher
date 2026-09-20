const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, design, development, integrations, testing, and release stay within one coordinated team."
  },
  {
    title: "Framework Chosen for Fit",
    desc: "We do not sell one framework to every client. We evaluate Flutter, React Native, native development, or a hybrid approach around your actual requirements."
  },
  {
    title: "Shared Where It Makes Sense",
    desc: "We use shared code where it improves development and maintenance without forcing platform-specific functionality into awkward workarounds."
  },
  {
    title: "Built for Both Platforms",
    desc: "Android and iOS are tested independently because a working build on one platform does not automatically guarantee the same result on the other."
  },
  {
    title: "Business-First Development",
    desc: "We start with the product goals, users, workflows, and technical requirements before deciding how the application should be built."
  },
  {
    title: "Clear Review Points",
    desc: "Important requirements, designs, builds, and release milestones are reviewed with you before the next stage begins."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue with bug fixes, framework updates, platform changes, performance work, and new feature development after launch."
  },
  {
    title: "Transparent Communication",
    desc: "We provide clear updates on progress, technical decisions, scope changes, and timelines throughout the project."
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
          Why Choose Framecipher for Cross-Platform App Development
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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