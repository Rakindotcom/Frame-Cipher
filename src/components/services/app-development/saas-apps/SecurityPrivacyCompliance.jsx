const securityComplianceItems = [
  {
    title: "Tenant Data Isolation",
    desc: "Customer data should remain separated according to the application's tenant and authorization model."
  },
  {
    title: "Authentication & Authorization",
    desc: "Controls should determine both who can sign in and what each user is allowed to access."
  },
  {
    title: "Role-Based Access",
    desc: "Permissions should be enforced across the interface, APIs, and backend."
  },
  {
    title: "Two-Factor Authentication",
    desc: "Multi-factor authentication can be added where stronger account protection is required."
  },
  {
    title: "Encryption",
    desc: "Sensitive data should be protected through appropriate transmission and storage practices for the application's requirements."
  },
  {
    title: "Audit Logs",
    desc: "Important administrative and security-sensitive actions can be logged for accountability and troubleshooting."
  },
  {
    title: "Secure API Access",
    desc: "API endpoints should validate authentication, permissions, request data, and access to tenant-specific resources."
  },
  {
    title: "Data Backups",
    desc: "Backup strategies should consider database recovery and operational continuity."
  },
  {
    title: "Disaster Recovery",
    desc: "Critical SaaS products may require defined recovery priorities, backup restoration procedures, and documented response processes."
  },
  {
    title: "Data Retention",
    desc: "Retention and deletion behavior can be designed around product requirements and applicable legal obligations."
  },
  {
    title: "Enterprise SSO",
    desc: "Enterprise-focused SaaS products may require centralized identity and SSO integrations."
  }
]

export default function SecurityPrivacyCompliance() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Enterprise Governance
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Security, Privacy &amp; Compliance
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A SaaS platform can hold customer accounts, business records, payment information, internal workflows, and sensitive operational data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {securityComplianceItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Security Control {i + 1 < 10 ? `0${i + 1}` : i + 1}
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