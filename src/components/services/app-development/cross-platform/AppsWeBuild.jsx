import { SectionIntro } from '../../../Kinetic'

const appsWeBuild = [
  {
    title: "E-commerce & Retail Apps",
    desc: "Build mobile shopping experiences with product discovery, search, customer accounts, carts, checkout, payments, order tracking, and notifications."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Connect customers, drivers, delivery teams, and operations through ordering, location tracking, route-related workflows, status updates, and notifications."
  },
  {
    title: "Booking & Service Apps",
    desc: "Manage appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from mobile devices."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Support customers, vendors, providers, and partners with profiles, listings, search, messaging, transactions, reviews, and service workflows."
  },
  {
    title: "Business & Internal Apps",
    desc: "Create staff, field-force, dealer, vendor, CRM, reporting, approval, and operational applications around your existing business processes."
  },
  {
    title: "FinTech & Payment Apps",
    desc: "Build transaction-focused experiences with authentication, account workflows, payment integrations, notifications, and financial data flows based on your product requirements."
  },
  {
    title: "Healthcare & Education Apps",
    desc: "Develop patient, wellness, learning, student, content, scheduling, tracking, and communication experiences for supported business models."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Extend an existing SaaS platform, website, or digital service into a dedicated mobile experience connected to your existing backend and user accounts."
  }
]

export default function AppsWeBuild() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Targeted Solutions"
        title="Cross-Platform Apps We Build"
      >
        We develop cross-platform apps for customer-facing products, internal business systems, marketplaces, and connected digital services.
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