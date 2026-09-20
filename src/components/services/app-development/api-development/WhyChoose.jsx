const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, development, integration, testing, and communication stay within one team. You do not need to coordinate separate vendors for each technical stage."
  },
  {
    title: "Built for Failure, Not Just Success",
    desc: "We do not treat the successful API response as the entire integration. Timeouts, errors, failed webhooks, unavailable services, and unexpected responses are part of real-world API behavior."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We define the API structure, authentication approach, data flow, and integration requirements before development gets too far."
  },
  {
    title: "Built Around Your Existing Systems",
    desc: "We work around the systems you already use instead of assuming everything needs to be replaced."
  },
  {
    title: "Local & International Integration Experience",
    desc: "Framecipher is based in Dhaka and serves businesses in Bangladesh alongside clients in the UAE, US, UK, Australia, and Canada. Our integration work can involve local platforms such as bKash and Nagad alongside international services."
  },
  {
    title: "Transparent Review Process",
    desc: "You receive defined review points throughout the project. The goal is to make technical progress visible instead of presenting everything only at the end."
  },
  {
    title: "Long-Term Support",
    desc: "API work often continues after launch. When needed, we can support version updates, third-party API changes, performance improvements, security updates, and integration troubleshooting."
  },
  {
    title: "Zero Lock-In & Full IP Ownership",
    desc: "You retain 100% intellectual property ownership of your API architecture, code, schema specifications, and documentation with zero restrictive vendor lock-in."
  }
]

export default function WhyChoose() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Agency Differentiators
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Framecipher for API Development &amp; Integration
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {whyChooseUs.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Advantage 0{i + 1}
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