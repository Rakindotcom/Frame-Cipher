const performanceScalability = [
  {
    title: "Response Time Optimization",
    desc: "We identify slow endpoints and reduce unnecessary processing where possible."
  },
  {
    title: "Database Query Optimization",
    desc: "Slow database queries can become an API bottleneck. We review database interactions and optimize queries where the project requires it."
  },
  {
    title: "Caching",
    desc: "Caching can reduce repeated processing and database load for suitable data. We use caching only where the data and freshness requirements make it appropriate."
  },
  {
    title: "Pagination & Data Retrieval",
    desc: "Large datasets should not always be returned in one response. Pagination and controlled data retrieval can improve response size and application performance."
  },
  {
    title: "Load & Stress Testing",
    desc: "Testing under increased traffic helps reveal bottlenecks before production. The testing level depends on the expected traffic and project scope."
  },
  {
    title: "Horizontal Scaling",
    desc: "Applications with growing traffic may need additional application instances or other scaling strategies. We consider scalability during architecture planning when the expected workload requires it."
  },
  {
    title: "Performance Monitoring",
    desc: "Response time, error rate, traffic, and other relevant metrics can be monitored after deployment. This gives the team visibility as API usage changes."
  },
  {
    title: "Edge Caching & CDN Distribution",
    desc: "Deploy read-heavy API responses, media endpoints, and static resources to global edge networks and distributed Redis clusters to minimize server load and geographical latency."
  }
]

export default function PerformanceScalability() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Throughput &amp; Latency
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Performance &amp; Scalability
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          An API that works with ten users may behave differently when traffic grows. We consider performance during architecture, development, testing, and optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {performanceScalability.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Optimization 0{i + 1}
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