const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Discovery, architecture, design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "We Start With the Organization",
    desc: "We understand how people, processes, systems, and information work together before turning requirements into application features."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We map workflows, integrations, security, data, and scalability before committing the project to implementation."
  },
  {
    title: "Built Around Existing Systems",
    desc: "Where replacement is not practical, we design the new application to work alongside the platforms your organization already depends on."
  },
  {
    title: "Business-First Development",
    desc: "The objective is not simply to produce software. It is to improve the workflow the software is responsible for supporting."
  },
  {
    title: "Clear Stakeholder Reviews",
    desc: "Important requirements, designs, architecture decisions, and release milestones are reviewed before moving forward."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue supporting application updates, integrations, performance, security, and future development after launch."
  },
  {
    title: "Platform & Technology Advice",
    desc: "We recommend the architecture, technologies, and integration approach that fit the organization's actual requirements rather than forcing every project into one fixed solution."
  }
]

export default function WhyChoose() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Value
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Framecipher for Enterprise App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Partnering with Framecipher means building robust enterprise systems with an experienced, accountable in-house team.
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