const mobileOfflineItems = [
  {
    title: "Employee Apps",
    desc: "Give employees mobile access to approved tasks, information, notifications, internal services, and selected business workflows."
  },
  {
    title: "Field Force Apps",
    desc: "Support sales representatives, inspectors, technicians, delivery teams, service staff, and other field workers who need access to business systems while working outside the office."
  },
  {
    title: "Sales & CRM Apps",
    desc: "Allow sales teams to access customer records, manage leads, update activities, review accounts, and complete important sales workflows from mobile devices."
  },
  {
    title: "Approval Apps",
    desc: "Allow authorized managers to review and approve requests, expenses, documents, purchases, and other workflows from mobile devices."
  },
  {
    title: "Inventory & Warehouse Apps",
    desc: "Support stock checks, receiving, dispatch, barcode workflows, warehouse activity, and other inventory operations where required."
  },
  {
    title: "Customer Self-Service Apps",
    desc: "Give customers access to approved services such as orders, accounts, documents, support requests, service information, or other business workflows."
  },
  {
    title: "Executive Dashboards",
    desc: "Provide management with mobile access to selected KPIs, reports, alerts, and operational information."
  },
  {
    title: "ERP & Business System Access",
    desc: "Connect mobile workflows with enterprise APIs and backend systems while limiting access to only the functionality required by each user role."
  },
  {
    title: "Offline Data Access",
    desc: "Field users can continue selected workflows when a device temporarily loses network connectivity."
  },
  {
    title: "Local Data Storage",
    desc: "Store approved information locally so supported tasks can continue without a constant internet connection."
  },
  {
    title: "Sync Queues",
    desc: "Queue changes made while offline and synchronize them with the central system when connectivity returns."
  },
  {
    title: "Conflict Resolution",
    desc: "Define how conflicting updates are handled when the same information changes from different devices or locations."
  },
  {
    title: "Retry Handling",
    desc: "Recover from temporary network or service failures without forcing users to repeat completed actions."
  },
  {
    title: "Weak Network Support",
    desc: "Design important mobile workflows for environments where connectivity may be slow, inconsistent, or temporarily unavailable."
  }
]

export default function MobileOffline() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Field &amp; Mobile Operations
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Mobile &amp; Offline-First App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise mobile applications can extend internal systems and business workflows beyond the desktop. We build mobile experiences around the needs of employees, field teams, sales representatives, customers, managers, and other enterprise users.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mobileOfflineItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Mobile Workflow {i + 1 < 10 ? `0${i + 1}` : i + 1}
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