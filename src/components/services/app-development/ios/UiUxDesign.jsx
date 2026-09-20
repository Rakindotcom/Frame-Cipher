const uiUxPoints = [
  {
    title: "Apple Human Interface Guidelines",
    desc: "We use established iOS interface patterns where they improve usability while keeping the product's own brand identity."
  },
  {
    title: "User Flows & Interaction Design",
    desc: "We map key journeys before visual design so the interface supports the actual task a user needs to complete."
  },
  {
    title: "Responsive iPhone & iPad Layouts",
    desc: "Layouts are adapted to the supported screen sizes and device requirements instead of relying on one fixed design."
  },
  {
    title: "Prototyping & Usability",
    desc: "Interactive prototypes help validate important flows before development and reduce avoidable design changes later."
  }
]

export default function UiUxDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Native Experience
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          UI/UX Design for iOS
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We design your application around how iOS users move through tasks, screens, and actions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {uiUxPoints.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              UX Focus 0{i + 1}
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