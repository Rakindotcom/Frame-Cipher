import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Essential Care',
    price: '৳5,000 / mo',
    scope: 'Blogs, portfolios & small brochure sites',
    features: [
      'Core & security patch updates',
      'Monthly off-site backups',
      'Basic uptime monitoring (5-min pings)',
      'SSL certificate renewal check',
      'Standard email support',
    ],
  },
  {
    name: 'Standard Business',
    price: '৳12,000 / mo',
    scope: 'Active business sites, WordPress, Wix & Webflow',
    featured: true,
    features: [
      'Core, theme & plugin updates',
      'Weekly off-site cloud backups',
      '24/7 continuous uptime monitoring',
      'Malware & security vulnerability scans',
      'Up to 2 hours of monthly content updates',
      'Monthly performance & health report',
      'Priority email & WhatsApp response',
    ],
  },
  {
    name: 'Growth & E-Commerce',
    price: '৳20,000 / mo',
    scope: 'WooCommerce, Shopify stores & lead engines',
    features: [
      'Daily automated off-site backups',
      'Staging environment testing before patch deploy',
      'Continuous checkout & payment gateway audits',
      'Speed & Core Web Vitals optimization',
      'Up to 4 hours of content & dev tweaks',
      'Priority 4-hour SLA incident response',
      'Dedicated Slack/WhatsApp communications',
    ],
  },
  {
    name: 'Enterprise Custom',
    price: 'Custom Quote',
    scope: 'Magento, custom Next.js apps & high-traffic sites',
    features: [
      'Real-time automated backups',
      'Custom server & database performance tuning',
      'Third-party ERP & courier API health checks',
      '1-hour emergency response SLA',
      'Unlimited minor content updates',
      'Dedicated senior lead engineer',
      'Custom NDA & SLA contracts',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Retainers / Proactive Care
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Website Maintenance Pricing Plans
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Transparent monthly retainers calibrated to your CMS platform, traffic volume, and incident response requirements.
          </p>
        </div>

        {/* PACKAGE CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-8 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Tier 0{idx + 1}
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.scope}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Retainer</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUDED AT EVERY TIER */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Standard Included</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Included Across Every Retainer
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Every maintenance client receives dedicated direct contact with our in-house engineering team, tested off-site cloud backup storage, transparent monthly logs, and zero long-term cancellation lock-in.
            </p>
          </div>

          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Multi-Platform</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              We Support Sites We Didn&apos;t Build
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Inherited an outdated site built by another agency? We run a comprehensive onboarding audit, patch existing vulnerabilities, stabilize performance, and take over ongoing maintenance seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
