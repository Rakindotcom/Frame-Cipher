import { SectionIntro } from '../../Kinetic'

const appTypes = [
  {
    title: "Ecommerce & Retail Apps",
    desc: "Mobile shopping experiences for product discovery, search, filtering, cart, checkout, payments, orders, accounts, and customer communication."
  },
  {
    title: "Booking & Appointment Apps",
    desc: "Applications for appointments, reservations, schedules, availability, reminders, service selection, and customer management."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Apps for delivery tracking, driver workflows, order status, location services, route-related features, and operational coordination."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Multi-sided platforms that connect customers with sellers, service providers, professionals, drivers, or other user groups."
  },
  {
    title: "Internal Business Apps",
    desc: "Custom software for inventory, staff management, reporting, approvals, field operations, CRM workflows, and internal coordination."
  },
  {
    title: "Customer & Service Apps",
    desc: "Applications for service requests, customer accounts, communication, subscriptions, support, and recurring customer interactions."
  },
  {
    title: "SaaS & Web Applications",
    desc: "Browser-based applications with dashboards, accounts, subscriptions, permissions, workflows, reporting, and other product features."
  },
  {
    title: "MVP & Startup Apps",
    desc: "Focused products designed to validate the core idea with real users before expanding into a larger application."
  }
]

export default function AppTypes() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Targeted Use Cases"
        title="What Type of App Do You Need?"
      >
        The right application depends on what your users need to accomplish and how your business operates. We build around the use case rather than forcing every project into the same application model.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {appTypes.map((type, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
              Type 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {type.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {type.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}