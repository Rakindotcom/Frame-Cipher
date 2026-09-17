import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "STORE STRATEGY & PLANNING",
    "description": "Every Shopify build starts with a plan for your catalog, brand, and how customers will actually shop. What We Do A store planned around your actual catalog avoids the common trap of forcing a generic theme to do more than it should.",
    "bullets": [
      "Catalog Structure Planning: Collections and product organization built around how customers browse and search.",
      "Platform Fit Confirmation: Verifying Shopify matches your catalog size and business model before committing to the build.",
      "App Stack Planning: Identifying which functionality genuinely needs an app versus what can be built natively.",
      "Competitor Review: Identifying what similar stores are doing well or poorly in your category."
    ]
  },
  {
    "title": "CUSTOM THEME DEVELOPMENT",
    "description": "Design that matches your brand, not a barely modified free theme. What We Do Off-the-shelf themes are a starting point, the real work is making it convert for your specific products and customers.",
    "bullets": [
      "Custom Theme Development: Built on Shopify's Liquid templating language, matched to your brand and catalog structure.",
      "Product & Collection Page Design: Layouts built to convert, clear pricing, imagery, variant selection, and calls-to-action.",
      "Conversion-Optimized Checkout: Customizing Shopify's checkout experience within what the platform allows, to minimize friction.",
      "Mobile-First Design: Full functionality across devices, since most Shopify traffic arrives on mobile."
    ]
  },
  {
    "title": "APP INTEGRATION & CUSTOM DEVELOPMENT",
    "description": "The technical setup that extends Shopify without turning the storefront into a slow patchwork of apps. What We Do Every app added is a potential source of slowdown or checkout conflict, we treat the app stack as a deliberate decision, not a default habit.",
    "bullets": [
      "App Selection & Integration: Choosing and configuring apps for genuine functionality needs, reviews, subscriptions, upsells not stacking unnecessary tools.",
      "Shopify API & Custom App Development: Building specific functionality directly through Shopify's API when an app isn't the right fit.",
      "Payment Gateway Setup: Configuring Shopify Payments where available, alongside bKash, Nagad, or other regional gateways for Bangladeshi merchants.",
      "Third-Party Integrations: ERP, inventory, shipping, or marketing platform connections built to keep data accurate."
    ]
  },
  {
    "title": "PERFORMANCE & CONVERSION OPTIMIZATION",
    "description": "Speed and structure that keep visitors moving toward checkout instead of bouncing. What We Do A fast, well-structured store converts the traffic you're already getting, before you spend more on driving new visitors to it.",
    "bullets": [
      "Speed Optimization: Theme code, image handling, and app load management to keep pages fast.",
      "Product Schema & SEO Setup: Structured data for rich results, plus on-page SEO configured correctly from launch.",
      "Cart & Checkout Analysis: Identifying and fixing friction points in the path from product page to completed order.",
      "Analytics & Conversion Tracking: Shopify Analytics and ad platform tracking set up so every result is measurable."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A Shopify store's job isn't done at launch, apps update, themes need attention, and catalogs grow. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Theme & App Updates: Keeping custom theme code compatible as Shopify and app updates roll out.",
      "Performance Monitoring: Ongoing checks on speed and conversion as catalog and traffic grow.",
      "App Stack Review: Periodic audits to remove unused or conflicting apps before they slow the store down.",
      "Catalog & Feature Updates: Small changes and additions handled without a full redevelopment project."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Shopify removes the infrastructure burden, but the storefront built on top of it still determines whether visitors actually buy.",
  "Reliability You Don't Have to Manage",
  "Shopify handles hosting, security patching, and uptime, a genuine advantage for merchants who don't want to manage server infrastructure themselves.",
  "Trust & Checkout Confidence",
  "A generic or slow-loading store undercuts the platform's reliability advantage, shoppers judge your brand by the storefront, not by what's happening on Shopify's backend.",
  "Carts That Actually Convert",
  "A store built around your actual buyer journey turns browsers into buyers, traffic without a smooth path to checkout is traffic you paid for and lost at the final step.",
  "Built to Scale Within the Platform",
  "Shopify supports significant growth in catalog size and traffic without a platform change, a well-built store can keep scaling without you outgrowing the infrastructure."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a Shopify development company, we focus on stores that sell, not just stores that look good in a portfolio. Our clients get custom theme development, a clean app stack, and checkout and payment setup handled correctly from day one, since Shopify's biggest advantage, its managed, reliable infrastructure, is only worth it if the store built on top of it is set up properly. With hands-on experience building for both Bangladeshi and international merchants, we know how to use Shopify's ecosystem without letting an app-stacking habit slow the store down.",
    "text": "\"Shopify's real advantage is that you're not managing servers or security patches, that's handled for you. Where stores usually go wrong is stacking apps until the storefront is slow and the checkout has friction nobody planned for.\" Reliable Managed Platform | Custom Theme Development | Clean App Architecture"
  },
  {
    "title": "Our Shopify Development Services",
    "text": "We offer end-to-end Shopify development tailored to merchants who want a store that performs, not just launches."
  },
  {
    "title": "STORE STRATEGY & PLANNING",
    "text": "Every Shopify build starts with a plan for your catalog, brand, and how customers will actually shop."
  },
  {
    "title": "What We Do",
    "text": "* Catalog Structure Planning: Collections and product organization built around how customers browse and search. * Platform Fit Confirmation: Verifying Shopify matches your catalog size and business model before committing to the build. * App Stack Planning: Identifying which functionality genuinely needs an app versus what can be built natively. * Competitor Review: Identifying what similar stores are doing well or poorly in your category. A store planned around your actual catalog avoids the common trap of forcing a generic theme to do more than it should."
  },
  {
    "title": "CUSTOM THEME DEVELOPMENT",
    "text": "Design that matches your brand, not a barely modified free theme."
  },
  {
    "title": "What We Do",
    "text": "* Custom Theme Development: Built on Shopify's Liquid templating language, matched to your brand and catalog structure. * Product & Collection Page Design: Layouts built to convert, clear pricing, imagery, variant selection, and calls-to-action. * Conversion-Optimized Checkout: Customizing Shopify's checkout experience within what the platform allows, to minimize friction. * Mobile-First Design: Full functionality across devices, since most Shopify traffic arrives on mobile. Off-the-shelf themes are a starting point, the real work is making it convert for your specific products and customers."
  },
  {
    "title": "APP INTEGRATION & CUSTOM DEVELOPMENT",
    "text": "The technical setup that extends Shopify without turning the storefront into a slow patchwork of apps."
  },
  {
    "title": "What We Do",
    "text": "* App Selection & Integration: Choosing and configuring apps for genuine functionality needs, reviews, subscriptions, upsells not stacking unnecessary tools. * Shopify API & Custom App Development: Building specific functionality directly through Shopify's API when an app isn't the right fit. * Payment Gateway Setup: Configuring Shopify Payments where available, alongside bKash, Nagad, or other regional gateways for Bangladeshi merchants. * Third-Party Integrations: ERP, inventory, shipping, or marketing platform connections built to keep data accurate. Every app added is a potential source of slowdown or checkout conflict, we treat the app stack as a deliberate decision, not a default habit."
  },
  {
    "title": "PERFORMANCE & CONVERSION OPTIMIZATION",
    "text": "Speed and structure that keep visitors moving toward checkout instead of bouncing."
  },
  {
    "title": "What We Do",
    "text": "* Speed Optimization: Theme code, image handling, and app load management to keep pages fast. * Product Schema & SEO Setup: Structured data for rich results, plus on-page SEO configured correctly from launch. * Cart & Checkout Analysis: Identifying and fixing friction points in the path from product page to completed order. * Analytics & Conversion Tracking: Shopify Analytics and ad platform tracking set up so every result is measurable. A fast, well-structured store converts the traffic you're already getting, before you spend more on driving new visitors to it."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A Shopify store's job isn't done at launch, apps update, themes need attention, and catalogs grow."
  },
  {
    "title": "What We Do",
    "text": "* Theme & App Updates: Keeping custom theme code compatible as Shopify and app updates roll out. * Performance Monitoring: Ongoing checks on speed and conversion as catalog and traffic grow. * App Stack Review: Periodic audits to remove unused or conflicting apps before they slow the store down. * Catalog & Feature Updates: Small changes and additions handled without a full redevelopment project. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Shopify Development Partner Shopify removes the infrastructure burden, but the storefront built on top of it still determines whether visitors actually buy. Reliability You Don't Have to Manage Shopify handles hosting, security patching, and uptime, a genuine advantage for merchants who don't want to manage server infrastructure themselves."
  },
  {
    "title": "Trust & Checkout Confidence",
    "text": "A generic or slow-loading store undercuts the platform's reliability advantage, shoppers judge your brand by the storefront, not by what's happening on Shopify's backend."
  },
  {
    "title": "Carts That Actually Convert",
    "text": "A store built around your actual buyer journey turns browsers into buyers, traffic without a smooth path to checkout is traffic you paid for and lost at the final step."
  },
  {
    "title": "Built to Scale Within the Platform",
    "text": "Shopify supports significant growth in catalog size and traffic without a platform change, a well-built store can keep scaling without you outgrowing the infrastructure. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, development, and app integration handled by one team, not handed off between freelancers who've never spoken to each other."
  },
  {
    "title": "Disciplined About the App Stack",
    "text": "We don't default to solving every need with another app. We build directly where it makes the store faster and more stable, and use apps only where they're genuinely the right tool."
  },
  {
    "title": "Local & International Merchant Experience",
    "text": "Based in Dhaka, building Shopify stores for merchants across Bangladesh, with bKash and Nagad integration, as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage, architecture, design, development, goes through your review and approval before we move forward."
  },
  {
    "title": "Strategy & Consultation",
    "text": "We start by understanding your catalog, brand, and how you plan to run the store day to day."
  },
  {
    "title": "Store Architecture",
    "text": "Collection structure and navigation built around how your customers actually shop, not a generic template."
  },
  {
    "title": "Custom Theme Development",
    "text": "A theme built on Liquid, matched to your brand and product presentation, not a barely modified free template."
  },
  {
    "title": "App Integration & Custom Development",
    "text": "A deliberately chosen app stack, with custom development used where it keeps the store faster and more stable."
  },
  {
    "title": "Performance & Conversion Optimization",
    "text": "Speed, checkout flow, and tracking handled as standard, not an upsell added after launch."
  },
  {
    "title": "Transparent Process",
    "text": "Review checkpoints at every stage, so you approve direction before it's built, not after."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
