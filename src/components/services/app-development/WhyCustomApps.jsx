const whyCustomApps = [
  {
    title: "Direct Customer Experience",
    desc: "A dedicated application can make recurring actions such as ordering, booking, account management, and communication easier to access."
  },
  {
    title: "Business Process Automation",
    desc: "Custom applications can replace spreadsheets, manual approvals, repeated data entry, and disconnected workflows with structured digital processes."
  },
  {
    title: "Access to Device Features",
    desc: "Mobile applications can use capabilities such as push notifications, GPS, camera, biometrics, and other platform functions where they support the product."
  },
  {
    title: "Greater Product Control",
    desc: "A custom application gives your business more control over workflows, integrations, user experience, and future product development."
  },
  {
    title: "Scalable Digital Products",
    desc: "A well-planned application can grow from an MVP into a larger SaaS product, marketplace, customer platform, or business system."
  },
  {
    title: "Offline Resilience & Sync",
    desc: "Critical workflows can continue working during weak connectivity, syncing data reliably once the device reconnects to your servers."
  }
]

export default function WhyCustomApps() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Strategic Value
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Businesses Build Custom Apps
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A custom app can solve problems that a standard website, plugin, or off-the-shelf platform cannot handle efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyCustomApps.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Advantage 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {reason.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t-2 border-frame-border pt-6">
        <p className="text-sm md:text-base font-semibold italic text-frame-fg">
          The reason to build an app should be clear before development starts. The technology should support that reason rather than become the reason itself.
        </p>
      </div>
    </div>
  )
}