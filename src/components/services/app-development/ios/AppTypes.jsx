import { SectionIntro } from '../../../Kinetic'

const appsWeBuild = [
  {
    title: "E-commerce & Retail Apps",
    desc: "Build mobile shopping experiences with product browsing, search, accounts, carts, checkout, payments, order tracking, and customer notifications."
  },
  {
    title: "Booking & Service Apps",
    desc: "Handle appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from one iOS application."
  },
  {
    title: "Delivery & On-Demand Apps",
    desc: "Connect customers, drivers, delivery teams, or service providers through ordering, location tracking, status updates, notifications, and operational workflows."
  },
  {
    title: "Business & Internal Apps",
    desc: "Create internal tools for teams, field staff, sales operations, approvals, reporting, CRM workflows, and business management."
  },
  {
    title: "Marketplace & Community Apps",
    desc: "Support multiple user types with profiles, listings, search, messaging, reviews, transactions, and moderation features."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Extend your existing SaaS product or web platform into a dedicated iOS experience connected to your backend, APIs, and customer accounts."
  },
  {
    title: "Education, Health & Lifestyle Apps",
    desc: "Build learning, fitness, wellness, content, tracking, subscription, and other user-focused mobile products around your business model."
  },
  {
    title: "Companion & Connected Apps",
    desc: "Create iOS companion apps for websites, software platforms, connected devices, wearables, or existing digital services."
  }
]

export default function AppTypes() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Targeted Solutions"
        title="iOS Apps We Build"
      >
        We develop iOS apps around the way your customers, employees, or business processes actually work.
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