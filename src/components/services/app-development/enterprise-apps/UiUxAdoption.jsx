const uiUxAdoption = [
  {
    title: "Role-Based Interfaces",
    desc: "Different departments and job functions can receive interfaces that show the actions and information relevant to their responsibilities."
  },
  {
    title: "Workflow-First Design",
    desc: "We start with the task users need to complete before deciding how the interface should be structured."
  },
  {
    title: "Information Architecture",
    desc: "Large enterprise applications need clear navigation, search, filtering, hierarchy, and predictable access to important information."
  },
  {
    title: "Dashboard Design",
    desc: "Dashboards are structured around the metrics, tasks, alerts, and decisions relevant to each role."
  },
  {
    title: "Accessibility",
    desc: "Interfaces can include readable content, suitable controls, keyboard support, screen-reader considerations, and other accessibility requirements where applicable."
  },
  {
    title: "Training-Minimal Interfaces",
    desc: "Clear labels, familiar patterns, consistent interactions, and useful feedback can reduce unnecessary learning effort."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be reviewed with representative users and stakeholders before development is finalized."
  },
  {
    title: "Responsive Design",
    desc: "Enterprise interfaces may need to support desktop workstations, tablets, and mobile devices depending on how different user groups access the application."
  }
]

export default function UiUxAdoption() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          User-Centric Enterprise Design
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise UI/UX &amp; User Adoption
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise software needs to make complex work easier for people who may use it every day.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {uiUxAdoption.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Design Standard 0{i + 1}
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