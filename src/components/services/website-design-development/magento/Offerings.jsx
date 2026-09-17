import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CATALOG & STORE ARCHITECTURE",
    "description": "Every Magento build starts with a structure planned around your catalog's actual complexity. What We Do Catalog architecture decided upfront prevents the restructuring headaches that come from bolting complexity onto a simple setup later.",
    "bullets": [
      "Catalog Structure Planning: Category hierarchy and attribute sets built for large, varied product ranges.",
      "Multi-Store & Multi-Website Setup: Separate storefronts for different regions, brands, or customer segments under one backend.",
      "B2B Pricing Architecture: Tiered pricing, customer groups, and quote-based workflows for wholesale or B2B customers.",
      "Competitor & Platform Review: Confirming Magento is the right fit before committing to the build."
    ]
  },
  {
    "title": "THEME & UI/UX DESIGN",
    "description": "Design that handles large catalogs without becoming difficult to browse or slow to load. What We Do Large catalogs are only useful if shoppers can actually find what they're looking for; design here is about navigation, not just visuals.",
    "bullets": [
      "Custom Theme Development: Layouts built for your brand and catalog size, not a generic Magento theme.",
      "Advanced Filtering & Navigation: Layered navigation and search built to handle large product sets without overwhelming shoppers.",
      "Conversion-Focused Checkout: Streamlined checkout flow, including B2B-specific steps like quote requests where needed.",
      "Mobile-First Design: Full functionality across devices, since large-catalog browsing is easy to get wrong on mobile."
    ]
  },
  {
    "title": "DEVELOPMENT & SYSTEM INTEGRATION",
    "description": "The technical build that connects Magento to the systems your business already runs on. What We Do A large catalog running on disconnected systems creates data mismatches integration work here is what keeps stock, pricing, and orders accurate.",
    "bullets": [
      "Custom Module Development: Building specific functionality Magento's core and extensions don't cover.",
      "ERP & Inventory Integration: Connecting Magento to existing inventory, accounting, or fulfillment systems.",
      "Payment Gateway Integration: Including bKash and Nagad for Bangladeshi merchants, alongside international and B2B payment methods.",
      "API & Third-Party Integrations: CRM, shipping, and marketing tool connections built to handle high-volume data reliably."
    ]
  },
  {
    "title": "PERFORMANCE & SCALABILITY",
    "description": "Speed and stability that hold up under a large catalog and real transaction volume. What We Do Magento's flexibility comes with real infrastructure requirements. Getting hosting and performance tuning wrong is the most common cause of a slow Magento store.",
    "bullets": [
      "Speed Optimization: Caching, indexing, and code-level tuning for pages serving large product sets.",
      "Server & Hosting Configuration: Infrastructure sized correctly for Magento's resource requirements, not underprovisioned hosting.",
      "Security Hardening: Patch management and hardening against Magento-specific vulnerabilities.",
      "Load Testing: Confirming the store holds up under real or projected traffic and order volume."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A Magento store's job isn't done at launch; the platform requires more active maintenance than simpler ecommerce platforms. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Security Patch Management: Applying Magento security patches promptly, given the platform's history as a common attack target.",
      "Performance Monitoring: Ongoing checks on speed and server load as catalog and traffic grow.",
      "Backup & Recovery: Regular backups given the higher stakes of a large, transaction-heavy store.",
      "Integration Monitoring: Confirming ERP, payment, and third-party connections keep working as systems update."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Magento is powerful, but that power comes with real technical demands that punish a poorly planned build.",
  "Complexity That Simpler Platforms Can't Handle",
  "Large catalogs, multi-region storefronts, and B2B pricing logic are what Magento is built for, forcing that complexity onto a simpler platform usually means expensive workarounds later.",
  "Trust & Transaction Reliability",
  "A large-scale store handling B2B orders or high transaction volume needs to be reliable downtime or checkout errors at that scale cost more than they would on a smaller store.",
  "Infrastructure Sized Correctly",
  "Magento underperforms badly on underprovisioned hosting. Getting server sizing and configuration right from the start avoids a slow, frustrating store that undermines the platform's actual capability.",
  "Built to Scale Further",
  "Unlike simpler platforms with hard ceilings, a well-built Magento store can keep growing, new stores, new regions, new B2B segments without needing a full platform migration."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a Magento development company, we work on the platform where scale actually matters, large catalogs, multi-store setups, B2B pricing tiers, and complex integrations that simpler platforms like Shopify or WooCommerce aren't built to handle efficiently. Our clients get architecture planned around their actual catalog complexity, not a default setup stretched past what it should be doing. With hands-on experience across Bangladeshi and international merchants, we know when Magento is the right call, and when it's overkill.",
    "text": "\"Magento's overhead only pays off past a certain scale. Below that, it's more infrastructure than a business needs. We'll tell you directly if your catalog doesn't need it yet.\" Enterprise-Grade Catalogs | B2B & Multi-Store Ready | Honest Platform Fit"
  },
  {
    "title": "Our Magento Development Services",
    "text": "We offer end-to-end Magento development tailored to merchants operating at real scale."
  },
  {
    "title": "CATALOG & STORE ARCHITECTURE",
    "text": "Every Magento build starts with a structure planned around your catalog's actual complexity."
  },
  {
    "title": "What We Do",
    "text": "* Catalog Structure Planning: Category hierarchy and attribute sets built for large, varied product ranges. * Multi-Store & Multi-Website Setup: Separate storefronts for different regions, brands, or customer segments under one backend. * B2B Pricing Architecture: Tiered pricing, customer groups, and quote-based workflows for wholesale or B2B customers. * Competitor & Platform Review: Confirming Magento is the right fit before committing to the build. Catalog architecture decided upfront prevents the restructuring headaches that come from bolting complexity onto a simple setup later."
  },
  {
    "title": "THEME & UI/UX DESIGN",
    "text": "Design that handles large catalogs without becoming difficult to browse or slow to load."
  },
  {
    "title": "What We Do",
    "text": "* Custom Theme Development: Layouts built for your brand and catalog size, not a generic Magento theme. * Advanced Filtering & Navigation: Layered navigation and search built to handle large product sets without overwhelming shoppers. * Conversion-Focused Checkout: Streamlined checkout flow, including B2B-specific steps like quote requests where needed. * Mobile-First Design: Full functionality across devices, since large-catalog browsing is easy to get wrong on mobile. Large catalogs are only useful if shoppers can actually find what they're looking for; design here is about navigation, not just visuals."
  },
  {
    "title": "DEVELOPMENT & SYSTEM INTEGRATION",
    "text": "The technical build that connects Magento to the systems your business already runs on."
  },
  {
    "title": "What We Do",
    "text": "* Custom Module Development: Building specific functionality Magento's core and extensions don't cover. * ERP & Inventory Integration: Connecting Magento to existing inventory, accounting, or fulfillment systems. * Payment Gateway Integration: Including bKash and Nagad for Bangladeshi merchants, alongside international and B2B payment methods. * API & Third-Party Integrations: CRM, shipping, and marketing tool connections built to handle high-volume data reliably. A large catalog running on disconnected systems creates data mismatches integration work here is what keeps stock, pricing, and orders accurate."
  },
  {
    "title": "PERFORMANCE & SCALABILITY",
    "text": "Speed and stability that hold up under a large catalog and real transaction volume."
  },
  {
    "title": "What We Do",
    "text": "* Speed Optimization: Caching, indexing, and code-level tuning for pages serving large product sets. * Server & Hosting Configuration: Infrastructure sized correctly for Magento's resource requirements, not underprovisioned hosting. * Security Hardening: Patch management and hardening against Magento-specific vulnerabilities. * Load Testing: Confirming the store holds up under real or projected traffic and order volume. Magento's flexibility comes with real infrastructure requirements. Getting hosting and performance tuning wrong is the most common cause of a slow Magento store."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A Magento store's job isn't done at launch; the platform requires more active maintenance than simpler ecommerce platforms."
  },
  {
    "title": "What We Do",
    "text": "* Security Patch Management: Applying Magento security patches promptly, given the platform's history as a common attack target. * Performance Monitoring: Ongoing checks on speed and server load as catalog and traffic grow. * Backup & Recovery: Regular backups given the higher stakes of a large, transaction-heavy store. * Integration Monitoring: Confirming ERP, payment, and third-party connections keep working as systems update. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Magento Development Partner Magento is powerful, but that power comes with real technical demands that punish a poorly planned build. Complexity That Simpler Platforms Can't Handle Large catalogs, multi-region storefronts, and B2B pricing logic are what Magento is built for, forcing that complexity onto a simpler platform usually means expensive workarounds later."
  },
  {
    "title": "Trust & Transaction Reliability",
    "text": "A large-scale store handling B2B orders or high transaction volume needs to be reliable downtime or checkout errors at that scale cost more than they would on a smaller store."
  },
  {
    "title": "Infrastructure Sized Correctly",
    "text": "Magento underperforms badly on underprovisioned hosting. Getting server sizing and configuration right from the start avoids a slow, frustrating store that undermines the platform's actual capability."
  },
  {
    "title": "Built to Scale Further",
    "text": "Unlike simpler platforms with hard ceilings, a well-built Magento store can keep growing, new stores, new regions, new B2B segments without needing a full platform migration. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, architecture, design, and integration handled by one team, not handed off between freelancers who've never worked on a Magento build together."
  },
  {
    "title": "Honest About Platform Fit",
    "text": "We'll recommend Magento when your catalog and complexity genuinely need it and tell you directly if a simpler platform like Shopify or WooCommerce would serve you better and cost less."
  },
  {
    "title": "Local & International B2B Experience",
    "text": "Based in Dhaka, building Magento stores for merchants across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of architecture, design, development, goes through your review and approval before we move forward."
  },
  {
    "title": "Strategy & Consultation",
    "text": "We start by understanding your catalog size, B2B or multi-store needs, and whether Magento is genuinely the right platform."
  },
  {
    "title": "Catalog & Store Architecture",
    "text": "Category structure, multi-store setup, and B2B pricing logic planned around your actual business, not a generic template."
  },
  {
    "title": "Theme & UX Design",
    "text": "Navigation and checkout design built to handle large catalogs without becoming difficult to browse."
  },
  {
    "title": "Development & System Integration",
    "text": "Custom modules and ERP/payment integrations built to keep data accurate across your entire operation."
  },
  {
    "title": "Performance & Infrastructure",
    "text": "Hosting, caching, and server configuration sized correctly for Magento's real resource demands."
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
