import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: "Essential",
    fullName: "Essential Maintenance Plan",
    price: "৳15,000",
    period: "/month",
    bestFor: "Simple apps and lower-maintenance requirements",
    coverage: "OS checks, monthly crash review, basic monitoring",
    description: "Designed for simpler applications that require regular technical attention without extensive feature development.",
    featured: false,
    includes: [
      "OS compatibility checks",
      "Monthly crash report review",
      "Basic application monitoring",
      "Routine maintenance review",
      "Technical support within the agreed scope"
    ]
  },
  {
    name: "Standard",
    fullName: "Standard Maintenance Plan",
    price: "৳30,000",
    period: "/month",
    bestFor: "Native Android, iOS, and cross-platform apps",
    coverage: "Bug fixes, regular monitoring, monthly reporting, minor feature updates",
    description: "Suitable for applications that require regular bug-fix support and ongoing technical maintenance.",
    featured: true,
    includes: [
      "Regular bug fixes",
      "Continuous monitoring",
      "OS and dependency maintenance",
      "Monthly reporting",
      "Minor feature updates",
      "Technical support"
    ]
  },
  {
    name: "Growth",
    fullName: "Growth Maintenance Plan",
    price: "৳50,000",
    period: "/month",
    bestFor: "SaaS, ecommerce, and growing applications",
    coverage: "Priority support, security patching, integration monitoring, expanded feature support",
    description: "Designed for applications with more active users, integrations, or ongoing product requirements.",
    featured: false,
    includes: [
      "Priority support",
      "Security patching",
      "Integration monitoring",
      "Expanded feature support",
      "Performance maintenance",
      "Regular technical review",
      "Monthly reporting"
    ]
  },
  {
    name: "Enterprise",
    fullName: "Enterprise Maintenance Plan",
    price: "Custom",
    period: " Pricing",
    bestFor: "Complex applications and enterprise requirements",
    coverage: "Custom maintenance scope, dedicated support structure, complex integrations, compliance-focused requirements",
    description: "Enterprise applications often require a maintenance model based on their architecture, integrations, security requirements, user volume, and operational processes.",
    featured: false,
    includes: [
      "Dedicated maintenance capacity",
      "Complex integration monitoring",
      "Advanced infrastructure requirements",
      "Compliance-related maintenance",
      "Custom support workflows",
      "Planned feature development",
      "Custom reporting requirements"
    ],
    footnote: "The final scope and pricing are defined after an application assessment."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Predictable Support Tiers"
          title="App Maintenance Pricing"
        >
          The cost of app maintenance depends on the platform, codebase condition, application complexity, integrations, support scope, and required development capacity. Our current maintenance plans are structured for different levels of ongoing support.
        </SectionIntro>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Recommended
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.fullName}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-frame-accent">
                  Best for: {pkg.bestFor}
                </p>
                <div className="mt-4 flex items-baseline gap-1 border-b-2 border-frame-border pb-4">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-frame-fg">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-frame-muted-fg">
                    {pkg.period}
                  </span>
                </div>
                <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pkg.description}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-fg mb-3">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-frame-muted-fg">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t-2 border-frame-border pt-6">
                {pkg.footnote && (
                  <p className="mb-4 text-[11px] font-medium text-frame-muted-fg italic">
                    {pkg.footnote}
                  </p>
                )}
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full text-center justify-center"
                >
                  Choose {pkg.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs font-medium text-frame-muted-fg italic">
          The final scope and pricing are defined after an application assessment.
        </p>
      </div>
    </section>
  )
}
