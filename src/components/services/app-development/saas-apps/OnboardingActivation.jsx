const onboardingItems = [
  {
    title: "Signup & Account Creation",
    desc: "Keep registration clear while collecting the information required to create the account or workspace."
  },
  {
    title: "Workspace Setup",
    desc: "Guide new customers through company details, preferences, initial configuration, team setup, or other required steps."
  },
  {
    title: "Guided Onboarding",
    desc: "Help users discover the important parts of the platform rather than placing every feature in front of them at once."
  },
  {
    title: "Team Invitations",
    desc: "Allow account owners or administrators to bring additional team members into the product at the right stage."
  },
  {
    title: "Trial Activation",
    desc: "Connect trial creation with plan rules, feature limits, onboarding states, and billing events."
  },
  {
    title: "Feature Discovery",
    desc: "Introduce important functionality through contextual guidance and relevant user flows."
  },
  {
    title: "First-Value Experience",
    desc: "The onboarding process should move users toward the product's first meaningful outcome as efficiently as the workflow allows."
  },
  {
    title: "Email Onboarding & Automation",
    desc: "Where required, onboarding can extend outside the product through email, reminders, notifications, and event-based communication."
  }
]

export default function OnboardingActivation() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Product-Led Growth
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Onboarding &amp; Activation
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Signing up is only the first step. The product also needs to help new customers reach value.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {onboardingItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Activation Flow 0{i + 1}
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