import { SectionIntro } from '../../Kinetic'

const appCapabilities = [
  {
    title: "User Accounts & Authentication",
    desc: "Signup, login, password recovery, profiles, authentication, and role-based access where required."
  },
  {
    title: "Push Notifications",
    desc: "Notifications for orders, bookings, messages, reminders, updates, promotions, and other important events."
  },
  {
    title: "Payment & Subscription Integration",
    desc: "Payment gateways, recurring billing, transaction workflows, refunds, and subscription management where required."
  },
  {
    title: "Maps, GPS & Location",
    desc: "Maps, location services, delivery tracking, distance calculations, and other geographic functionality."
  },
  {
    title: "Chat & Communication",
    desc: "In-app messaging, support workflows, SMS, email, and notification systems where needed."
  },
  {
    title: "Admin Dashboards",
    desc: "Interfaces for managing users, products, orders, content, transactions, reports, permissions, and settings."
  },
  {
    title: "Analytics & Monitoring",
    desc: "Event tracking, usage data, crash monitoring, and performance information where required by the product."
  },
  {
    title: "Offline & Data Synchronization",
    desc: "Offline functionality and synchronization can be designed for applications that need to continue operating during limited connectivity."
  }
]

export default function Capabilities() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Core Functionality"
        title="App Features & Capabilities"
      >
        Application features vary by product, user roles, platform, and business requirements. Common capabilities can include:
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {appCapabilities.map((cap, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
              Capability 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {cap.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {cap.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}