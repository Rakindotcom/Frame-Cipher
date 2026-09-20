import { SectionIntro } from '../../Kinetic'

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Protecting accounts through appropriate authentication and authorization methods."
  },
  {
    title: "Role-Based Access",
    desc: "Controlling what customers, staff, administrators, and other user types can view or modify."
  },
  {
    title: "Secure API Communication",
    desc: "Protecting data exchanged between the application, backend, and third-party services."
  },
  {
    title: "Data Protection",
    desc: "Handling customer and business information according to the application's actual requirements."
  },
  {
    title: "Dependency & Platform Maintenance",
    desc: "Keeping relevant frameworks, libraries, and platform components updated to reduce avoidable security and compatibility risks."
  },
  {
    title: "Secure Payment Workflows",
    desc: "Using appropriate payment-provider integrations and following the provider's required transaction flow."
  }
]

export default function Security() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Protection & Compliance"
        title="App Security & Data Protection"
      >
        Security should be considered throughout application development rather than added at the end. Depending on the product, security planning can include:
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

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          Security requirements vary by product, industry, data, and integrations, so the exact approach is defined during technical planning.
        </p>
      </div>
    </div>
  )
}