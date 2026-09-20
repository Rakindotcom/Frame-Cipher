import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    title: "Framework Strategy & Architecture",
    desc: "Before development starts, we assess your requirements and decide whether Flutter, React Native, native development, or a hybrid approach fits the product. We map shared business logic, platform-specific functionality, API needs, state management, data flow, and scalability requirements before coding begins."
  },
  {
    title: "UI/UX Design for Both Platforms",
    desc: "We design a consistent product experience while respecting the conventions users expect on Android and iOS. That includes user flows, adaptive layouts, platform-aware navigation, interaction states, prototypes, and interface systems that work across supported devices."
  },
  {
    title: "Cross-Platform Development - Flutter / React Native",
    desc: "We build the shared application layer with Flutter or React Native based on the needs of your project. Common business logic, application workflows, API communication, and reusable components can be shared, while platform-specific features can be handled through native modules."
  },
  {
    title: "Testing, Deployment & Dual Store Launch",
    desc: "We test Android and iOS independently instead of assuming one working build guarantees the other will behave the same way. The release process can include real-device testing, regression checks, TestFlight, Google Play testing, App Store Connect, Play Console, and production deployment."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "After launch, we can continue supporting the application through bug fixes, framework updates, operating-system compatibility work, performance improvements, and new feature development."
  }
]

export default function CoreServices() {
  return (
    <div>
      <SectionIntro
        eyebrow="End-To-End Delivery"
        title="Our Cross-Platform App Development Services"
      >
        We build cross-platform applications around your product goals, users, integrations, and long-term roadmap.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((svc, i) => (
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