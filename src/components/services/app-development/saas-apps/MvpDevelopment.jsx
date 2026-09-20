const mvpDevelopmentItems = [
  {
    title: "Problem & Market Definition",
    desc: "Identify the customer problem, primary users, business model, and core workflow before expanding the feature list."
  },
  {
    title: "Core Feature Selection",
    desc: "Separate essential launch features from functionality that can be introduced during later product releases."
  },
  {
    title: "MVP Architecture",
    desc: "Build the initial architecture around the core product while leaving room for future users, features, billing changes, and integrations."
  },
  {
    title: "Billing & Revenue Path",
    desc: "For subscription products, the MVP should have a practical path from signup to trial or payment."
  },
  {
    title: "User Onboarding",
    desc: "The initial release should help early users understand the product and reach its primary value."
  },
  {
    title: "Initial Analytics",
    desc: "Measure important product events from the beginning so real usage can inform later product decisions."
  },
  {
    title: "Launch Preparation",
    desc: "Prepare the application, infrastructure, integrations, accounts, and operating workflow for the first release."
  },
  {
    title: "Feedback & Iteration",
    desc: "Prioritize future improvements using customer feedback, product usage, support data, and business goals."
  }
]

export default function MvpDevelopment() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Lean Validation
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS MVP Development: From Idea to First Users
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          An MVP should validate the core product without creating unnecessary complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mvpDevelopmentItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              MVP Discipline 0{i + 1}
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