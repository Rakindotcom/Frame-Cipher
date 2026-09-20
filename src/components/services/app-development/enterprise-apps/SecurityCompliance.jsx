const securityCompliance = [
  {
    title: "Identity & Access Management",
    desc: "Control authentication and access across users, departments, applications, and connected enterprise systems."
  },
  {
    title: "Role-Based Access Control",
    desc: "Define which users can view, create, edit, approve, export, or administer specific information and functions."
  },
  {
    title: "Single Sign-On",
    desc: "Integrate supported identity providers so employees can use existing organizational authentication."
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Add additional authentication factors where the application's security requirements call for them."
  },
  {
    title: "Data Encryption",
    desc: "Protect sensitive information during transmission and through appropriate storage practices."
  },
  {
    title: "Audit Logs",
    desc: "Record important administrative, security, and business actions for accountability and investigation."
  },
  {
    title: "API Security",
    desc: "Secure APIs through authentication, authorization, validation, access controls, and suitable rate controls."
  },
  {
    title: "Security Monitoring",
    desc: "Monitor important security and application events so unusual activity and technical issues can be identified earlier."
  },
  {
    title: "Data Retention",
    desc: "Define retention, archival, and deletion behavior according to business and legal requirements."
  },
  {
    title: "Compliance Requirements",
    desc: "Enterprise applications can be designed around the regulatory, contractual, or internal security requirements that apply to the organization."
  },
  {
    title: "Network & Infrastructure Security",
    desc: "Network-level controls, access rules, and infrastructure hardening can be included where the application's risk profile and deployment environment require them."
  },
  {
    title: "Third-Party Security Review",
    desc: "Connected external services, vendors, and integrations can introduce additional risk. Where appropriate, third-party interfaces and access are reviewed alongside the application itself."
  }
]

export default function SecurityCompliance() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Security Standards
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Security, Governance &amp; Compliance
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Security should be built into the architecture rather than added near the end of the project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {securityCompliance.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Control {i + 1 < 10 ? `0${i + 1}` : i + 1}
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