const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "You don't need separate teams for design, mobile development, backend development, and technical coordination."
  },
  {
    title: "Platform-Neutral Recommendations",
    desc: "We recommend native, cross-platform, SaaS, web, or MVP approaches based on the project's actual requirements."
  },
  {
    title: "Design Before Development",
    desc: "User flows and interface structure are considered before development so technical work isn't built around unclear product decisions."
  },
  {
    title: "Development-Aware UI/UX",
    desc: "Our designers and developers can work within the same project context, making the transition from approved design to implementation clearer."
  },
  {
    title: "Transparent Review Process",
    desc: "Major stages can include review and approval checkpoints so you remain involved throughout development."
  },
  {
    title: "Full-Cycle Support",
    desc: "From discovery and architecture through testing, launch, and post-launch improvements, the project stays within one coordinated workflow."
  }
]

export default function WhyChoose() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Agency Accountability
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Framecipher for App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher connects product strategy, UI/UX, application development, backend engineering, and launch support within one in-house team.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Standard 0{i + 1}
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