import { SectionIntro } from '../../../Kinetic'

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Support email and phone login, secure sessions, Sign in with Apple, biometric authentication, account recovery, and role-based access."
  },
  {
    title: "Notifications & Engagement",
    desc: "Use push notifications, deep links, widgets, reminders, and other supported iOS capabilities to keep users connected to important updates."
  },
  {
    title: "Apple Payments & Monetization",
    desc: "Depending on your business model, we can plan Apple Pay, in-app purchases, subscriptions, and related payment workflows."
  },
  {
    title: "Device & Location Features",
    desc: "Integrate supported device capabilities such as camera access, photo libraries, GPS, maps, Bluetooth, NFC, and location-based functionality."
  },
  {
    title: "Data, Storage & Sync",
    desc: "Connect your app to APIs, local storage, secure device storage, cloud services, and synchronization workflows based on product requirements."
  },
  {
    title: "Health & Specialized Features",
    desc: "For products that require them, supported Apple frameworks can be used for health, fitness, device, media, or other specialized application features."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Connect analytics and crash-monitoring tools to understand application behavior, identify issues, and improve future releases."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connect to CRMs, payment providers, logistics APIs, communication platforms, and other required services within the iOS application."
  }
]

export default function Capabilities() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Apple Ecosystem Features"
        title="iOS App Features &amp; Apple Integrations"
      >
        Your iOS app can use native Apple capabilities when they improve the user experience or support an important business workflow.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuresAndIntegrations.map((feat, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Integration 0{i + 1}
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