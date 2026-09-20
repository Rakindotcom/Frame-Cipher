import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Essential Care',
    price: '৳3,500/month',
    subtitle: 'Suitable for smaller websites that need regular technical upkeep and basic protection.',
    bestFor: 'Best for: Small business websites, portfolios, blogs and informational websites.',
    typicalCoverage: 'Updates, backups, security checks, uptime monitoring, minor fixes',
    scope: [
      'WordPress, theme, plugin or platform updates',
      'Monthly website backups',
      'Backup verification',
      'Uptime monitoring',
      'Basic security checks',
      'Minor bug fixes',
      'Broken-link checks',
      'Basic website health review',
      'Maintenance report',
    ],
    featured: false,
  },
  {
    name: 'Business Care',
    price: '৳7,500/month',
    subtitle: 'Designed for businesses that depend on their website for leads, inquiries, bookings, or regular customer interactions.',
    bestFor: 'Best for: Service businesses, corporate websites, growing companies and active content websites.',
    typicalCoverage: 'Everything in Essential + performance checks, content updates, integrations and technical support',
    scopePrefix: 'Includes everything in Essential Care, plus:',
    scope: [
      'More frequent updates and monitoring',
      'Performance checks',
      'Minor content and image updates',
      'Form and integration checks',
      'Minor functionality fixes',
      'Analytics and tracking checks',
      'Technical troubleshooting',
      'Priority support',
      'Monthly maintenance report',
    ],
    featured: true,
  },
  {
    name: 'Ecommerce Care',
    price: '৳15,000/month',
    subtitle: 'Ecommerce websites need more attention because technical problems can affect products, checkout, payments, orders, and revenue.',
    bestFor: 'Best for: WooCommerce, Shopify, Magento and other active ecommerce stores.',
    typicalCoverage: 'Store updates, checkout checks, payment monitoring, product support and performance monitoring',
    scope: [
      'Product and category updates',
      'Checkout testing',
      'Payment gateway checks',
      'Order-flow monitoring',
      'Inventory-related checks',
      'Shipping integration checks',
      'Coupon and promotion functionality',
      'Plugin, app or extension updates',
      'Store performance monitoring',
      'Security and compatibility checks',
      'Minor product/content updates',
      'Priority technical support',
      'Monthly maintenance report',
    ],
    featured: false,
  },
  {
    name: 'Custom / Priority Care',
    price: 'From ৳25,000/month',
    subtitle: 'For websites and applications that require a more specialized maintenance setup.',
    bestFor: 'Best for: Custom applications, high-traffic or business-critical websites.',
    typicalCoverage: 'Custom monitoring, priority support, technical maintenance and incident response',
    scopePrefix: 'Potential coverage includes:',
    scope: [
      'Custom application maintenance',
      'Dependency and framework updates',
      'API monitoring',
      'Advanced performance optimization',
      'Security improvements',
      'Deployment support',
      'Bug fixing',
      'Priority incident response',
      'Custom integrations',
      'Ongoing development support',
    ],
    note: 'The final price depends on application complexity, traffic, integrations, support requirements, response targets, and the amount of development work involved.',
    featured: false,
  },
]

const auditReviewItems = [
  'Security and update status',
  'Existing backups',
  'Website performance',
  'Platform and dependencies',
  'Important integrations',
  'Forms, checkout or other critical functions',
  'Known technical issues',
  'Maintenance requirements',
]

const timelineTableRows = [
  {
    stage: 'Initial Website Review',
    timeline: '1–2 business days',
    whatWeDo: 'Review the website, platform, security status, backups, performance, integrations, and existing technical issues.',
  },
  {
    stage: 'Maintenance Setup',
    timeline: '1–2 business days',
    whatWeDo: 'Confirm the maintenance scope, backup process, monitoring, access requirements, support level, and reporting setup.',
  },
  {
    stage: 'Initial Fixes & Updates',
    timeline: '2–5 business days*',
    whatWeDo: 'Apply important updates, resolve existing minor issues, verify backups, and address priority technical problems.',
  },
  {
    stage: 'Ongoing Maintenance',
    timeline: 'Weekly / Monthly',
    whatWeDo: 'Perform updates, security checks, backups, monitoring, performance checks, minor fixes, and other tasks included in your plan.',
  },
  {
    stage: 'Monthly Review & Report',
    timeline: 'Every month',
    whatWeDo: 'Review website health, completed maintenance tasks, issues found, and recommended actions for the next maintenance cycle.',
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* SECTION 1: WEBSITE MAINTENANCE PRICING */}
      <section className="border-t-2 border-frame-border px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Plans &amp; Investment
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Maintenance Pricing
            </h2>
            <div className="mt-6 space-y-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Website maintenance pricing depends on your platform, website size, update frequency, security requirements, support needs, and how important the website is to your daily business operations.
              </p>
              <p>
                A simple business website may only need routine updates, backups, security checks, and minor fixes. An ecommerce store or custom application needs closer monitoring, more technical support, and faster response when critical functions fail.
              </p>
              <p className="font-bold text-frame-fg">
                Our maintenance plans are structured around the actual needs and risk level of your website.
              </p>
            </div>
          </div>

          {/* DETAILED PLAN CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                  pkg.featured
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                    {pkg.subtitle}
                  </p>
                  <p className="mt-4 text-xs font-bold text-frame-fg border-t border-frame-border/60 pt-4">
                    {pkg.bestFor}
                  </p>

                  <div className="mt-6 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-black uppercase tracking-wider text-frame-fg mb-3">
                      {pkg.scopePrefix || 'Includes:'}
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-frame-fg">
                      {pkg.scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.note && (
                    <p className="mt-6 border-t border-frame-border/60 pt-4 text-xs italic text-frame-muted-fg leading-relaxed">
                      {pkg.note}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton
                    href="/contact"
                    variant={pkg.featured ? 'accent' : 'outline'}
                    className="w-full text-xs"
                  >
                    Select Plan &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* ONE-TIME WEBSITE HEALTH AUDIT */}
          <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standalone Diagnostic
                </span>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  One-Time Website Health Audit
                </h3>
              </div>
              <p className="font-heading text-2xl sm:text-3xl font-black text-frame-accent">
                From ৳7,500
              </p>
            </div>

            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed max-w-4xl">
              If you are not ready for a monthly maintenance plan, we can first assess the current condition of your website.
            </p>

            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-wider text-frame-fg mb-3">
                The audit can review:
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-medium text-frame-fg">
                {auditReviewItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm font-medium text-frame-muted-fg italic">
              The audit gives you a clearer picture of what needs attention before committing to ongoing maintenance.
            </p>

            <div className="mt-6">
              <PosterButton href="/contact">
                Request a Website Health Assessment &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WEBSITE MAINTENANCE TIMELINE */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Schedule &amp; Cadence
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Maintenance Timeline
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Website maintenance is an ongoing process rather than a one-time task. We first review your website, identify priority issues, and set up the maintenance scope. After that, we handle routine updates, monitoring, fixes, and reporting based on your selected plan.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Stage</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Timeline</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What We Do</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelineTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-6 font-heading text-base font-bold uppercase text-frame-fg">{row.stage}</td>
                    <td className="p-5 md:p-6 font-bold text-frame-accent whitespace-nowrap">{row.timeline}</td>
                    <td className="p-5 md:p-6 text-sm text-frame-muted-fg leading-relaxed">{row.whatWeDo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-medium text-frame-muted-fg italic">
            *The timeline for initial fixes can vary depending on the website&apos;s condition, technical complexity, and the number of issues identified.
          </p>

          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8 max-w-4xl space-y-3">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              How Ongoing Maintenance Works
            </h3>
            <p className="text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed">
              Once your maintenance plan is active, we continuously manage the technical tasks included in your selected package. Routine work may happen weekly or monthly depending on your website and its maintenance requirements.
            </p>
            <p className="text-sm sm:text-base font-bold text-frame-fg leading-relaxed">
              For ecommerce stores and business-critical websites, we can provide more frequent monitoring and priority support where required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
