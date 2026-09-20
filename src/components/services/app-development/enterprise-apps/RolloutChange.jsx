const rolloutChangeManagement = [
  {
    title: "Department-Based Rollout",
    desc: "Introduce the application to selected departments or teams in stages when a phased rollout is appropriate."
  },
  {
    title: "Pilot Deployment",
    desc: "Test the system with a controlled group of users before expanding it across the organization."
  },
  {
    title: "User Training",
    desc: "Provide appropriate guidance for employees, managers, administrators, and other user groups based on their responsibilities."
  },
  {
    title: "Documentation",
    desc: "Document important workflows, system behavior, administrative tasks, and operating procedures."
  },
  {
    title: "Admin Training",
    desc: "Prepare the internal team responsible for managing users, permissions, configurations, and business workflows."
  },
  {
    title: "Feedback Collection",
    desc: "Collect feedback from representative users during pilot and post-launch periods to identify usability and workflow issues."
  },
  {
    title: "Adoption Monitoring",
    desc: "Review suitable indicators such as workflow completion, feature usage, support requests, and other operational signals to understand how the system is being adopted."
  },
  {
    title: "Post-Rollout Review",
    desc: "After the initial rollout, we review adoption signals, usability feedback, and workflow observations to identify improvements for the next phase."
  }
]

export default function RolloutChange() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Change Governance
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Rollout &amp; Change Management
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Introducing an enterprise application involves more than putting software into production. Employees, managers, administrators, and other stakeholders need a practical path to adopt the new system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rolloutChangeManagement.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Rollout Phase 0{i + 1}
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