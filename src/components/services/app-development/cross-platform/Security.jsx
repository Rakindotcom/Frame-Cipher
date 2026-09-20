import { SectionIntro } from '../../../Kinetic'

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Implement suitable authentication, session handling, account recovery, and access control based on application requirements."
  },
  {
    title: "Role-Based Authorization",
    desc: "Different users should only access the data and features assigned to their roles."
  },
  {
    title: "API Security",
    desc: "We account for authentication, authorization, validation, secure communication, and appropriate backend controls."
  },
  {
    title: "Secure Data Storage",
    desc: "Sensitive information is handled using suitable storage and transmission practices for the product."
  },
  {
    title: "Payment Security",
    desc: "Payment workflows are implemented around the selected provider and its required security model without storing unnecessary sensitive payment information inside the application."
  },
  {
    title: "Permission Management",
    desc: "Camera, location, notifications, contacts, Bluetooth, and other permissions are requested based on actual feature requirements."
  },
  {
    title: "Dependency Maintenance",
    desc: "Frameworks, plugins, packages, and dependencies need ongoing review as the application evolves and platform versions change."
  },
  {
    title: "Privacy-Aware Development",
    desc: "We review what data the application collects, how permissions are requested, and what user-facing disclosures are required for each platform."
  }
]

export default function Security() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Security &amp; Privacy"
        title="Cross-Platform App Security &amp; Data Protection"
      >
        Security needs to be considered as part of architecture and application development.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {securityPillars.map((sec, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Security Protocol 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {sec.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {sec.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}