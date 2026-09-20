import { SectionIntro } from '../../../Kinetic'

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Support email and phone login, social sign-in, secure sessions, biometrics, account recovery, and role-based access."
  },
  {
    title: "User Roles & Permissions",
    desc: "Create different experiences for customers, employees, vendors, drivers, providers, managers, administrators, and other user types."
  },
  {
    title: "Payments & Transactions",
    desc: "Integrate supported payment gateways, subscriptions, checkout workflows, transaction records, and payment-related application logic."
  },
  {
    title: "Push Notifications",
    desc: "Configure push notifications for both Android and iOS using the appropriate platform services and event flows."
  },
  {
    title: "GPS, Maps & Location",
    desc: "Build location-aware experiences for delivery, booking, field operations, route tracking, nearby services, and other location-based products."
  },
  {
    title: "Camera & Media",
    desc: "Support camera access, image uploads, document capture, media selection, and other device-based content workflows."
  },
  {
    title: "Chat & Real-Time Features",
    desc: "Build messaging, live status updates, real-time notifications, and other connected functionality where the application requires it."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Connect analytics and crash-monitoring tools to understand application behavior and identify issues after release."
  },
  {
    title: "CRM, ERP & Business Systems",
    desc: "Connect your mobile application with existing CRM, ERP, inventory, accounting, customer support, or internal business systems."
  },
  {
    title: "Third-Party API Integration",
    desc: "Integrate external services for payments, maps, shipping, authentication, communication, analytics, and other required workflows."
  },
  {
    title: "Offline & Local Storage",
    desc: "Support offline access, local data persistence, sync queues, and retry logic for applications used in low-connectivity environments."
  },
  {
    title: "Background Services",
    desc: "Run background tasks, periodic jobs, and event-driven processes on both Android and iOS where the product requires it."
  }
]

export default function FeaturesIntegrations() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Capabilities &amp; APIs"
        title="Cross-Platform App Features &amp; Integrations"
      >
        We build the application around the workflows, users, and integrations required by your business.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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