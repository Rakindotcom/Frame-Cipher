const mvpStages = [
  {
    title: "Idea & Feature Prioritization",
    desc: "We identify the core problem, target audience, and features required for the first usable product."
  },
  {
    title: "UX & Product Structure",
    desc: "We design the essential flows and screens around the main user tasks."
  },
  {
    title: "Focused Development",
    desc: "We build the agreed core functionality without adding unnecessary features that delay validation."
  },
  {
    title: "Testing & Launch",
    desc: "The MVP is tested and prepared for real-world use so the team can begin collecting feedback."
  },
  {
    title: "Iteration",
    desc: "User feedback can then inform the next development phase instead of committing the entire budget before the product is validated."
  }
]

export default function MvpStartups() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Lean Validation
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          MVP App Development for Startups
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Not every product needs its complete feature set on the first release. An MVP focuses on the smallest practical version needed to test the core idea with real users.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mvpStages.map((stage, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Phase 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {stage.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {stage.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-semibold italic text-frame-fg">
          An MVP should be focused, not carelessly incomplete. The goal is to learn from a usable product.
        </p>
      </div>
    </div>
  )
}