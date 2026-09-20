import { SectionIntro } from '../../../Kinetic'

const appsWeBuild = [
  {
    title: "Ecommerce & Retail Apps",
    desc: "Android shopping apps for product discovery, categories, search, cart, checkout, payments, order tracking, accounts, and customer communication."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Applications for customers, drivers, dispatch teams, order tracking, location services, delivery status, and operational workflows."
  },
  {
    title: "Booking & Service Apps",
    desc: "Apps for appointments, reservations, schedules, availability, reminders, service selection, and customer management."
  },
  {
    title: "Business & Internal Apps",
    desc: "Custom tools for staff workflows, inventory, reporting, approvals, field operations, CRM processes, and internal coordination."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Multi-user applications connecting customers with sellers, service providers, professionals, drivers, or other participant groups."
  },
  {
    title: "Customer & Companion Apps",
    desc: "Dedicated Android experiences for customer accounts, service management, subscriptions, support, notifications, and connected business platforms."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Android applications that extend a SaaS or web product with mobile access to dashboards, workflows, notifications, approvals, and account features."
  },
  {
    title: "Enterprise Android Apps",
    desc: "Custom applications for organizations with complex permissions, operational workflows, integrations, and security requirements."
  }
]

export default function AppsWeBuild() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Targeted Solutions"
        title="Android Apps We Build"
      >
        Different Android products require different user flows, features, and technical approaches. We build around the business use case rather than applying the same application structure to every project.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {appsWeBuild.map((app, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
              Solution 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {app.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {app.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}