const useCases = [
  {
    title: "Web & Mobile Applications",
    desc: "Connect web and mobile applications to backend systems, databases, authentication services, and business logic."
  },
  {
    title: "SaaS Platforms",
    desc: "Build APIs that allow SaaS applications to communicate with web clients, mobile applications, integrations, and external users."
  },
  {
    title: "Ecommerce Systems",
    desc: "Connect stores with payment, inventory, CRM, ERP, accounting, shipping, and marketing systems."
  },
  {
    title: "Payment & Financial Workflows",
    desc: "Connect applications with supported payment gateways, banking services, transaction systems, and financial workflows."
  },
  {
    title: "CRM & ERP Connectivity",
    desc: "Synchronize customer, order, inventory, accounting, and operational data between systems."
  },
  {
    title: "Internal Business Systems",
    desc: "Connect internal applications, dashboards, admin panels, databases, and operational tools."
  },
  {
    title: "Partner Platforms",
    desc: "Build controlled API access for vendors, customers, affiliates, marketplaces, and other approved partners."
  },
  {
    title: "Real-Time Data Synchronization",
    desc: "Use webhooks and event-based workflows where systems need timely updates without constant polling."
  },
  {
    title: "Business Automation",
    desc: "Connect multiple systems so repetitive data-transfer workflows can happen automatically."
  }
]

export default function UseCases() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Business Workflows
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Development Use Cases
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          APIs support many different business workflows. We design the API around what your application and connected systems actually need to accomplish.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Use Case 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {uc.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {uc.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}