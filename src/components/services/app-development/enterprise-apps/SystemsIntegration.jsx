const systemsIntegration = [
  {
    title: "ERP Integration",
    desc: "Connect applications with ERP platforms for finance, inventory, procurement, operations, and other business workflows."
  },
  {
    title: "CRM Integration",
    desc: "Synchronize customers, leads, accounts, sales activities, and service information with existing CRM platforms."
  },
  {
    title: "HRMS Integration",
    desc: "Connect employee records, organizational structures, attendance, leave, and other required HR workflows."
  },
  {
    title: "Accounting Systems",
    desc: "Exchange financial information with accounting and finance platforms based on the required process."
  },
  {
    title: "Legacy Database Integration",
    desc: "Connecting modern applications with existing databases when replacing the underlying system is not practical."
  },
  {
    title: "API Integration",
    desc: "Use secure APIs to connect internal applications, mobile clients, third-party services, and business platforms."
  },
  {
    title: "Middleware & Integration Layers",
    desc: "Complex environments may benefit from an integration layer that manages routing, transformation, authentication, and communication between systems."
  },
  {
    title: "Real-Time Data Exchange",
    desc: "Where required, systems can exchange information through APIs, events, webhooks, or other appropriate mechanisms."
  },
  {
    title: "Third-Party Services",
    desc: "Integrate approved services for payments, communication, analytics, identity, storage, logistics, or other business needs."
  }
]

export default function SystemsIntegration() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Ecosystem Connectivity
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Systems Integration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          New enterprise software often succeeds or fails based on how well it works with existing systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {systemsIntegration.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Integration Area 0{i + 1}
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