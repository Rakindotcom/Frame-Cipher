import { SectionIntro } from '../../../Kinetic'

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Authentication flows are designed around secure sessions, account recovery, access control, and suitable authentication methods."
  },
  {
    title: "Protected Data",
    desc: "Sensitive information is handled using appropriate storage and transmission practices based on the application's requirements."
  },
  {
    title: "API Security",
    desc: "We account for authenticated endpoints, authorization, validation, secure communication, and backend access controls."
  },
  {
    title: "Permission Management",
    desc: "Camera, location, photos, notifications, Bluetooth, and other permissions are requested based on actual product needs."
  },
  {
    title: "Privacy-Aware Development",
    desc: "We review what data the app collects and how permissions, disclosures, and user-facing privacy requirements affect the product."
  }
]

export default function Security() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Privacy By Design"
        title="iOS Security, Privacy &amp; Permissions"
      >
        Security decisions should be considered during product development, not added as a final checklist.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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