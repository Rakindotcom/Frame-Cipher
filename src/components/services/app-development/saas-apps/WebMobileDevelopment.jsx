const webMobileItems = [
  {
    title: "SaaS Web Applications",
    desc: "Build browser-based experiences for customer accounts, dashboards, workspaces, workflows, billing, and administration."
  },
  {
    title: "iOS SaaS Apps",
    desc: "Extend suitable SaaS products to iPhone and iPad with dedicated mobile experiences connected to the same backend."
  },
  {
    title: "Android SaaS Apps",
    desc: "Provide Android access for customers, field teams, employees, or other mobile users."
  },
  {
    title: "Cross-Platform SaaS Apps",
    desc: "Use Flutter or React Native when a shared mobile development approach fits the product."
  },
  {
    title: "Shared Backend & Authentication",
    desc: "Web and mobile applications can connect to the same APIs, accounts, permissions, billing records, and business data."
  },
  {
    title: "Unified Customer Experience",
    desc: "Customers should be able to move between supported platforms without creating disconnected accounts or inconsistent workflows."
  }
]

export default function WebMobileDevelopment() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Multi-Device Access
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Web &amp; Mobile App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your SaaS product may need to serve customers across more than one interface.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {webMobileItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Platform Surface 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}