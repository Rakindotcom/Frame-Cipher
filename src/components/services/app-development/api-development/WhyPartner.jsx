const whyRealPartner = [
  {
    title: "Silent Failures Are the Real Risk",
    desc: "A failed API request is not always obvious. Data may stop syncing. A webhook may fail. A payment status may not update. An external service may return an unexpected response. We design integrations to detect and handle these situations rather than assuming every request will succeed."
  },
  {
    title: "Third-Party APIs Keep Changing",
    desc: "Your integration depends partly on another company's system. Third-party providers can change endpoints, authentication requirements, response formats, rate limits, or API versions. That is why version planning, error handling, monitoring, and ongoing maintenance matter."
  },
  {
    title: "APIs Become Long-Term Infrastructure",
    desc: "An API can become the connection point between your website, mobile app, internal systems, partners, and external services. A rushed API decision can create maintenance problems later. We focus on clear architecture and documentation so the API remains useful as your business grows."
  }
]

export default function WhyPartner() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Infrastructure Risk
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Your Business Needs a Real API Partner
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {whyRealPartner.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Pillar 0{i + 1}
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