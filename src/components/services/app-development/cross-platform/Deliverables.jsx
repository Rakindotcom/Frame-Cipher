import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    category: "Strategy & Architecture",
    desc: "Requirements, framework recommendation, technical architecture, shared-vs-native decisions, and project planning."
  },
  {
    category: "UI/UX",
    desc: "Platform-aware user flows, interface design, prototypes, adaptive layouts, and approved design assets."
  },
  {
    category: "Cross-Platform Application",
    desc: "Flutter or React Native development with shared application logic and native modules where required."
  },
  {
    category: "Backend & Integrations",
    desc: "API connections, authentication, payment services, notifications, analytics, business systems, and other agreed integrations."
  },
  {
    category: "Testing & Release",
    desc: "Android and iOS testing, production builds, TestFlight support, Google Play testing, and store submission assistance."
  },
  {
    category: "Handoff & Documentation",
    desc: "Source code, project files, technical documentation, access handover where applicable, and relevant release information."
  }
]

export default function Deliverables() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Deliverables &amp; Handoff"
        title="What You Receive From a Cross-Platform Development Project"
      >
        Your final deliverables depend on the approved scope, but a complete engagement can include:
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