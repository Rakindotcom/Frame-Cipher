const analyticsItems = [
  {
    title: "Product Usage Metrics",
    desc: "Track important events such as sessions, activity, feature usage, transactions, or other product-specific actions."
  },
  {
    title: "Activation Tracking",
    desc: "Measure whether users complete the actions that indicate they have started receiving value from the product."
  },
  {
    title: "Feature Adoption",
    desc: "Understand which features customers use and which features remain underused."
  },
  {
    title: "Retention Tracking",
    desc: "Monitor customer activity over time to identify changes in product engagement."
  },
  {
    title: "Churn Analysis",
    desc: "Track subscription cancellations and customer changes to understand where users leave the product."
  },
  {
    title: "Tenant Usage",
    desc: "View activity by organization, workspace, customer, or plan when customer-level usage data is important."
  },
  {
    title: "Revenue Reporting",
    desc: "Connect subscription and transaction information with dashboards that matter to the SaaS business."
  },
  {
    title: "Subscription Metrics",
    desc: "Track plans, trials, active subscriptions, upgrades, downgrades, cancellations, and other subscription activity."
  },
  {
    title: "Admin Dashboards",
    desc: "Provide internal administrators with tools for customers, users, subscriptions, configuration, support, and system management."
  },
  {
    title: "Custom Reports",
    desc: "Create reporting around the specific operational and commercial metrics your SaaS product needs."
  },
  {
    title: "Customer Health Scoring",
    desc: "Track product activity signals that indicate whether an account is engaged, at risk, or approaching a natural point for expansion."
  },
  {
    title: "Alerting \u0026 Anomaly Detection",
    desc: "Configure alerts for important usage thresholds, error rates, billing events, or business conditions that fall outside expected ranges."
  }
]

export default function AnalyticsDashboards() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Operational Visibility
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Analytics &amp; Admin Dashboards
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          SaaS products need visibility into both customer behavior and business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {analyticsItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Telemetry {i + 1 < 10 ? `0${i + 1}` : i + 1}
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