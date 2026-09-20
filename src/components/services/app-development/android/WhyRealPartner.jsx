const whyRealPartner = [
  {
    title: "Device Diversity Needs Planning",
    desc: "Android products can run across different screen sizes, hardware configurations, memory levels, and operating-system versions. Your supported environment should be defined during planning rather than discovered after launch."
  },
  {
    title: "Performance Affects Usability",
    desc: "Slow startup, heavy screens, excessive network requests, and inefficient background processing can create a poor user experience even when the application technically works."
  },
  {
    title: "Platform Features Need Native Consideration",
    desc: "Apps that depend on GPS, camera, notifications, biometrics, background tasks, Bluetooth, or other Android capabilities may need platform-specific implementation."
  },
  {
    title: "Errors Need Proper Handling",
    desc: "Network failures, API errors, expired sessions, payment interruptions, and unavailable services can break important workflows. The application should have clear loading, error, fallback, and recovery states."
  },
  {
    title: "Android Apps Need Long-Term Maintenance",
    desc: "Android versions, dependencies, devices, and connected services change over time. A maintainable application makes future updates and feature development easier."
  }
]

export default function WhyRealPartner() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Reliability
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Your Business Needs a Real Android Development Partner
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Android applications need more than functional code. They need to work across the devices, operating systems, network conditions, and user environments relevant to the product.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyRealPartner.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Factor 0{i + 1}
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
          A strong Android development process considers what happens after the app works on the developer&apos;s device.
        </p>
      </div>
    </div>
  )
}