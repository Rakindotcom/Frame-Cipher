import { SectionIntro } from '../../Kinetic'

const deliverables = [
  {
    category: "Product & UX",
    items: [
      "User flows",
      "Wireframes",
      "UI/UX designs",
      "Interactive prototypes where required"
    ]
  },
  {
    category: "Application",
    items: [
      "Production-ready mobile or web application",
      "Configured features",
      "User workflows",
      "Platform-specific builds where applicable"
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      "Backend services",
      "Database structure",
      "APIs",
      "Authentication and permissions",
      "Required integrations"
    ]
  },
  {
    category: "Testing & Release",
    items: [
      "Tested production build",
      "Release configuration",
      "Store submission support where included"
    ]
  },
  {
    category: "Handoff & Documentation",
    items: [
      "Source code",
      "Design files where applicable",
      "Technical documentation",
      "Deployment information",
      "Access and account documentation"
    ]
  }
]

export default function Deliverables() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Deliverables & Handoff"
        title="What You Receive From an App Development Project"
      >
        The final deliverables depend on the agreed scope, but a typical project can include:
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((del, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Package 0{i + 1}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                {del.category}
              </h3>
              <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4">
                {del.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-medium text-frame-muted-fg">
                    <span className="text-frame-accent font-bold">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          The exact deliverables, source-code ownership, documentation, and support terms are defined in the project agreement.
        </p>
      </div>
    </div>
  )
}