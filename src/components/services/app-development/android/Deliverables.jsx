import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    category: "Product & UX",
    items: [
      "User flows",
      "Wireframes",
      "Android UI/UX designs",
      "Interactive prototypes where required",
      "Design system or reusable components where scoped"
    ]
  },
  {
    category: "Android Application",
    items: [
      "Production-ready Android application",
      "Native Kotlin source code",
      "Configured features",
      "Supported platform functionality",
      "Required integrations"
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      "API connections",
      "Backend services where scoped",
      "Database integration",
      "Authentication",
      "Required third-party integrations"
    ]
  },
  {
    category: "Testing & Release",
    items: [
      "Tested Android build",
      "Production configuration",
      "Release-ready package",
      "Google Play submission support where included"
    ]
  },
  {
    category: "Handoff & Documentation",
    items: [
      "Source code",
      "Design files where applicable",
      "Technical documentation",
      "Deployment information",
      "Relevant access and account documentation"
    ]
  }
]

export default function Deliverables() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Deliverables &amp; Handoff"
        title="What You Receive From an Android Development Project"
      >
        The final deliverables depend on the agreed scope, but a typical Android project can include:
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((del, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Deliverable 0{i + 1}
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
          The exact deliverables, source-code ownership, documentation level, and support terms are defined before development begins.
        </p>
      </div>
    </div>
  )
}