import { SectionIntro } from '../../../Kinetic'

const iosServices = [
  {
    title: "Product Strategy & Architecture",
    desc: "We define your core features, user journeys, technical requirements, integrations, and application structure before development begins."
  },
  {
    title: "UI/UX Design for iOS",
    desc: "We design clear iOS interfaces around user flow, accessibility, responsive layouts, and familiar platform interaction patterns."
  },
  {
    title: "Native iOS Development",
    desc: "We develop native applications with Swift, SwiftUI, UIKit, and Apple frameworks based on the needs of your product."
  },
  {
    title: "API & Backend Integration",
    desc: "We connect your iOS application with APIs, databases, authentication systems, payment services, admin panels, and other required platforms."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test application functionality, supported devices, integrations, performance, and critical user journeys before release."
  },
  {
    title: "App Store Launch",
    desc: "We prepare the production build, TestFlight testing, App Store Connect setup, submission, and technical release workflow."
  },
  {
    title: "iOS App Support & Maintenance",
    desc: "We continue supporting your application with bug fixes, updates, improvements, new features, and ongoing technical maintenance."
  },
  {
    title: "App Performance Optimisation",
    desc: "We review startup time, memory use, API behaviour, rendering, and other performance-sensitive areas to ensure the app runs smoothly across supported devices."
  }
]

export default function Services() {
  return (
    <div>
      <SectionIntro
        eyebrow="Specialized iOS Engineering"
        title="Our iOS App Development Services"
      >
        We build iOS applications around your business model, users, technical requirements, and long-term goals.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {iosServices.map((svc, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Service 0{i + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {svc.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {svc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}