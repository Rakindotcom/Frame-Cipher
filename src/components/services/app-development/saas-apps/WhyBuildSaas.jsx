const whyBuildSaas = [
  {
    title: "Recurring Revenue Model",
    desc: "Subscription-based access allows businesses to build an ongoing commercial relationship with customers instead of relying only on one-time software purchases."
  },
  {
    title: "Centralized Product Management",
    desc: "A SaaS provider can manage product updates, features, infrastructure, access, billing, and customer experience from a central platform."
  },
  {
    title: "Faster Product Iteration",
    desc: "The product can evolve continuously based on customer feedback, product analytics, support issues, and business priorities."
  },
  {
    title: "Expansion Into New Markets",
    desc: "A well-planned SaaS product can support additional organizations, users, plans, integrations, and markets without creating a completely separate product for every customer."
  },
  {
    title: "Product-Led Growth Opportunities",
    desc: "Trials, onboarding, feature limits, plan upgrades, invitations, usage prompts, and other growth mechanics can be built directly into the product."
  },
  {
    title: "Long-Term Product Value",
    desc: "The objective is not simply to launch software. It is to build a product that can support customers, subscriptions, new features, and operational growth over time."
  }
]

export default function WhyBuildSaas() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Strategic Advantages
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Businesses Build SaaS Products
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          SaaS changes not only how software is delivered, but also how the product is priced, managed, improved, and scaled.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyBuildSaas.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Driver 0{i + 1}
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