import { PosterButton } from '../../../Kinetic'

const costDrivers = [
  'Theme customization or custom theme development',
  'Online Store 2.0 architecture',
  'Product and collection structure',
  'App configuration and integration requirements',
  'Custom app development',
  'Shopify Plus or B2B requirements',
  'Migration and data transformation',
  'Multi-market or multi-language setup',
  'Headless development',
  'ERP, CRM, inventory, payment, or shipping integrations',
  'Performance and conversion requirements',
]

const packages = [
  {
    name: 'Starter Store',
    price: '৳45,000',
    description: 'Up to 50 products, customized existing theme',
    timeline: '~1–2 weeks',
    featured: false,
  },
  {
    name: 'Custom Theme Build',
    price: '৳85,000',
    description: 'Fully custom theme, up to 300 products, standard app integrations',
    timeline: '~3–4 weeks',
    featured: true,
  },
  {
    name: 'Growth Store',
    price: '৳140,000',
    description: 'Larger catalog, multiple integrations, conversion optimization',
    timeline: '~4–6 weeks',
    featured: false,
  },
  {
    name: 'Shopify Plus / Custom App Build',
    price: 'Custom Quote',
    description: 'High-volume catalogs, custom API development, advanced integrations',
    timeline: '~6–10+ weeks',
    featured: false,
  },
]

const inclusions = [
  'Strategy & Consultation',
  'Store Architecture',
  'Theme Customization / Development',
  'Payment Integration Setup',
  'On-Page SEO & Product Schema',
  'Launch Support',
]

const merchantEditingTopics = [
  'Editing homepage sections',
  'Updating product information',
  'Managing collections',
  'Updating images and content',
  'Editing navigation',
  'Managing blog content',
  'Working with metafields',
  'Managing basic theme sections',
  'Reviewing orders and customer information',
]

const postLaunchSupportItems = [
  'Theme updates',
  'App and integration checks',
  'Performance reviews',
  'Technical troubleshooting',
  'Minor feature changes',
  'Catalog and content updates',
  'SEO-related technical updates',
  'Analytics and tracking updates',
  'Ongoing storefront improvements',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION 1: PRICING & TIMELINE */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment &amp; Scope
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Shopify Development Pricing &amp; Timeline
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Shopify development pricing depends on how much of the store needs to be customized rather than product count alone.
          </p>
        </div>

        {/* COST DRIVERS */}
        <div className="mb-12 border-2 border-frame-border bg-frame-muted/20 p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Common Cost Drivers Include:
          </h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-frame-fg/90">
                <span className="text-frame-accent font-bold">•</span>
                <span>{driver}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
            A store using an existing theme and standard functionality can usually move faster than a fully custom storefront with integrations, migration work, or advanced Shopify features.
          </p>
        </div>

        {/* PACKAGES CARDS */}
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
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {pkg.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUSIONS AT EVERY APPLICABLE TIER */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Included at Every Applicable Tier:
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg">
            Final pricing and timeline should be confirmed after the technical scope, content requirements, integrations, and Shopify plan requirements are reviewed.
          </p>
        </div>

        {/* SECTION 2: SHOPIFY STORE HANDOVER & TRAINING */}
        <div className="mt-24 pt-16 border-t-2 border-frame-border">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Merchant Autonomy
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify Store Handover &amp; Training
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              Your Shopify store should remain manageable after development is complete. We provide the agreed access, configuration details, and basic guidance needed for your team to operate the store without depending on a developer for every routine change.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Module 01
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                Merchant Editing
              </h3>
              <p className="mt-3 text-xs text-frame-muted-fg">
                Depending on the project, we can guide your team through:
              </p>
              <ul className="mt-4 space-y-2 text-xs font-medium text-frame-fg/90">
                {merchantEditingTopics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 02
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  App &amp; Integration Handover
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We document the important apps, integrations, accounts, and configuration decisions included within the agreed project scope.
                </p>
              </div>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 03
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  Practical Training
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Training focuses on the Shopify features your team will actually use rather than overwhelming you with unnecessary technical details.
                </p>
              </div>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 04
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  Documentation &amp; Ownership
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Where included in the project scope, we provide basic documentation covering routine store management, important access details, and agreed post-launch procedures. The exact access, documentation, account ownership, licenses, and training provided depend on the project agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH SUPPORT & WARRANTY */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 sm:p-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Long-Term Reliability
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Support &amp; Warranty
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Launching a Shopify store is only one part of the project. Ongoing maintenance helps keep the storefront stable, compatible, and aligned with changing business requirements.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-heading text-lg font-bold uppercase text-frame-fg mb-4">
              Post-Launch Support Can Include:
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {postLaunchSupportItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3 text-xs sm:text-sm font-medium text-frame-fg">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-frame-border/60 pt-6">
            <h3 className="font-heading text-lg font-bold uppercase text-frame-fg mb-2">
              Warranty &amp; Workmanship
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
              <p>
                Any post-launch warranty or workmanship coverage should follow the exact terms agreed in the project contract.
              </p>
              <p>
                We do not guarantee a specific sales volume, revenue figure, traffic level, or conversion rate from the website alone. Ecommerce results also depend on products, pricing, traffic, competition, customer demand, and marketing.
              </p>
              <p className="font-medium text-frame-fg">
                Our responsibility is to deliver the agreed Shopify implementation, functionality, integrations, and technical work according to the approved project scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
