const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, product design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "Architecture First, Features Second",
    desc: "We begin with tenant structure, data architecture, business rules, and product requirements before expanding the feature list."
  },
  {
    title: "Business-First Development",
    desc: "We consider how customers will use, pay for, and grow with the product instead of focusing only on technical implementation."
  },
  {
    title: "Scalable Product Thinking",
    desc: "The application is planned around future users, features, integrations, and operational requirements."
  },
  {
    title: "Clear Review Points",
    desc: "Important requirements, designs, product milestones, and release stages are reviewed before moving forward."
  },
  {
    title: "Platform & Technology-Neutral Advice",
    desc: "We recommend the technology and architecture that fit the product rather than forcing every SaaS project into the same solution."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue with feature development, maintenance, platform updates, performance work, and integrations after launch."
  },
  {
    title: "Transparent Review Process",
    desc: "Requirements, designs, product milestones, and release stages are reviewed before moving forward so nothing advances without shared understanding."
  }
]

export default function WhyChooseFramecipher() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Excellence
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Framecipher for SaaS App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Strategic, technical, and operational reasons to partner with our dedicated in-house product team.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {whyChooseUs.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Differentiator 0{i + 1}
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