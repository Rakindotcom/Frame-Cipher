const billingItems = [
  {
    title: "Monthly & Annual Plans",
    desc: "Create recurring subscription plans with different billing intervals and access levels."
  },
  {
    title: "Free Trials",
    desc: "Support trial periods with controlled access, expiration rules, and conversion into paid subscriptions."
  },
  {
    title: "Tiered Pricing",
    desc: "Different plans can unlock different features, limits, storage, users, or usage levels."
  },
  {
    title: "Seat-Based Billing",
    desc: "Charge according to the number of users or licensed seats when the business model requires it."
  },
  {
    title: "Usage-Based Billing",
    desc: "Some SaaS products charge based on transactions, storage, API calls, processed documents, messages, or another measurable unit."
  },
  {
    title: "Upgrades & Downgrades",
    desc: "Plan changes should update account access, limits, billing state, and subscription records consistently."
  },
  {
    title: "Proration",
    desc: "Where supported by the billing model, mid-cycle plan changes can account for partial-period charges or credits."
  },
  {
    title: "Failed Payments & Recovery",
    desc: "Billing systems need a clear workflow for failed payments, retries, account status changes, and access rules."
  },
  {
    title: "Invoices & Receipts",
    desc: "Customers can have access to billing records, invoices, receipts, and transaction history based on the product requirements."
  },
  {
    title: "Feature Gating",
    desc: "Subscription plans can control which features, limits, integrations, or usage levels are available to customers."
  },
  {
    title: "Billing Webhooks",
    desc: "Payment and subscription events can be synchronized with the SaaS platform so billing status and product access remain aligned."
  }
]

export default function BillingMonetization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Revenue Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Subscription Billing &amp; Monetization
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Billing is part of the product architecture, not simply a payment form added to the final screen.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {billingItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Monetization Feature {i + 1 < 10 ? `0${i + 1}` : i + 1}
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