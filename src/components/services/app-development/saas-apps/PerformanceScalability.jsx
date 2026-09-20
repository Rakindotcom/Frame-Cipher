const performanceInfraItems = [
  {
    title: "Horizontal Scaling",
    desc: "Suitable applications can distribute workloads across multiple instances instead of relying on one increasingly overloaded server."
  },
  {
    title: "Database Scaling",
    desc: "Database structure, indexing, query performance, connection management, and data growth should be considered from the beginning."
  },
  {
    title: "Caching",
    desc: "Frequently requested data can be cached where appropriate to reduce unnecessary database and processing work."
  },
  {
    title: "CDN & Asset Delivery",
    desc: "Images, files, downloads, and other static assets can use suitable content-distribution infrastructure when required."
  },
  {
    title: "Load Testing",
    desc: "Performance can be tested against representative traffic and data conditions before major launches or planned growth periods."
  },
  {
    title: "Cloud Deployment",
    desc: "Development, staging, and production environments can be structured around the application's operational needs."
  },
  {
    title: "CI/CD",
    desc: "Automated build, test, and deployment workflows can make controlled product releases easier to manage."
  },
  {
    title: "Monitoring & Alerting",
    desc: "Monitor errors, uptime, infrastructure health, and important system events so problems can be identified earlier."
  },
  {
    title: "Error Tracking",
    desc: "Centralized error tracking can help the team investigate issues without relying only on customer reports."
  },
  {
    title: "Backup & Recovery",
    desc: "Infrastructure planning can include suitable backup, restoration, and recovery procedures based on the product's risk profile."
  },
  {
    title: "Infrastructure Cost Review",
    desc: "Review cloud resource usage to identify over-provisioned or underused components as the product scales and infrastructure spend increases."
  },
  {
    title: "Environment Parity",
    desc: "Keep development, staging, and production environments aligned to reduce environment-specific issues and unexpected release surprises."
  }
]

export default function PerformanceScalability() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          High Availability
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Performance, Scalability &amp; Cloud Infrastructure
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your infrastructure should support the product you are building today while leaving a clear path for future growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {performanceInfraItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Infra Component {i + 1 < 10 ? `0${i + 1}` : i + 1}
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