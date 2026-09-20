const uiUxDesignItems = [
  {
    title: "Onboarding Experience",
    desc: "Guide new customers toward the first meaningful value instead of overwhelming them with every feature."
  },
  {
    title: "Dashboard Design",
    desc: "Prioritize the information and actions each user needs most often."
  },
  {
    title: "Workflow Design",
    desc: "Break complex processes into clear steps so users understand what to do and what happens next."
  },
  {
    title: "Role-Based Interfaces",
    desc: "Different user types can receive different navigation, views, actions, and controls based on their responsibilities."
  },
  {
    title: "Design Systems",
    desc: "Reusable UI components help maintain consistency across dashboards, forms, settings, billing pages, and workflows."
  },
  {
    title: "Responsive SaaS Interfaces",
    desc: "Design the product for desktop, tablet, or mobile access based on how customers use the software."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be evaluated through prototypes, feedback, and iterative design before development is finalized."
  },
  {
    title: "Navigation Architecture",
    desc: "Design clear top-level navigation, sidebar menus, sub-navigation, and contextual actions so users can move through the product without confusion."
  }
]

export default function UiUxProductDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Interface Ergonomics
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS UI/UX &amp; Product Design
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A SaaS interface often needs to serve new trial users, regular users, team members, managers, and administrators.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {uiUxDesignItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Design Principle 0{i + 1}
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