import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    category: "Product & UX",
    desc: "Requirements, user flows, wireframes, interface design, prototypes, and iOS-specific interaction patterns."
  },
  {
    category: "iOS Application",
    desc: "A production-ready iOS application built around the approved features, workflows, and supported devices."
  },
  {
    category: "Backend & Integrations",
    desc: "Required APIs, backend connections, authentication, payments, notifications, analytics, and third-party integrations."
  },
  {
    category: "Testing & Release",
    desc: "QA testing, release builds, TestFlight support, App Store submission assistance, and launch preparation."
  },
  {
    category: "Handoff & Documentation",
    desc: "Source code, project files, technical documentation, access handover where applicable, and release information."
  }
]

export default function Deliverables() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Deliverables &amp; Handoff"
        title="What You Receive From an iOS Development Project"
      >
        Your final deliverables depend on the approved project scope, but a complete iOS engagement can include:
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
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                {del.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}