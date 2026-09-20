import { SectionIntro } from '../../../Kinetic'

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Signup, login, password recovery, profiles, session management, social authentication, and role-based access where required."
  },
  {
    title: "Firebase & Push Notifications",
    desc: "Firebase services can support authentication, cloud messaging, analytics, crash reporting, and other application requirements where appropriate."
  },
  {
    title: "Payments & Subscriptions",
    desc: "Payment gateways, transaction workflows, recurring billing, refunds, and subscription features based on the selected provider."
  },
  {
    title: "Maps, GPS & Location",
    desc: "Maps, location services, delivery tracking, address selection, distance calculations, and location-based functionality."
  },
  {
    title: "Camera & Device Features",
    desc: "Camera access, media selection, biometric authentication, file handling, Bluetooth, and other Android device capabilities where required."
  },
  {
    title: "Offline Storage & Synchronization",
    desc: "Local storage and synchronization for applications that need useful functionality during limited or unstable connectivity."
  },
  {
    title: "Admin Dashboards",
    desc: "Interfaces for managing users, products, orders, content, reports, transactions, permissions, and settings."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Event tracking, usage information, performance monitoring, and crash reporting where included in the project."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connections with CRMs, payment providers, external APIs, communication services, business software, and other required systems."
  }
]

export default function FeaturesIntegrations() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Capabilities & Modules"
        title="Android App Features &amp; Integrations"
      >
        The exact functionality depends on the application, but we can build and integrate common Android capabilities required by modern business and consumer products.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuresAndIntegrations.map((feat, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Module 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {feat.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}