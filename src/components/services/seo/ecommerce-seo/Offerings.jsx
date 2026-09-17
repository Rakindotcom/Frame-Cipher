import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PRODUCT & CATEGORY PAGE OPTIMIZATION",
    "description": "The pages that actually drive revenue get the most direct attention. What We Do A product page copied straight from the manufacturer rarely stands out to either search engines or shoppers.",
    "bullets": [
      "Product Page Content Optimization: Descriptions built around buyer-intent keywords, not generic manufacturer copy.",
      "Category Page Optimization: Structured, keyword-relevant category descriptions that also help users navigate.",
      "Buyer-Intent Keyword Targeting: Prioritizing terms that signal purchase readiness over broad informational searches.",
      "Internal Linking Between Products: Connecting related products and collections to distribute authority and support discovery."
    ]
  },
  {
    "title": "ECOMMERCE TECHNICAL SEO",
    "description": "Large catalogs create technical problems a small business site never has to deal with. What We Do Large catalogs amplify small technical issues into problems that affect thousands of pages at once.",
    "bullets": [
      "Duplicate Content Resolution: Fixing the variant and filtered-page duplication common on Shopify and WooCommerce stores.",
      "Faceted Navigation & Filter Handling: Managing how filters and sorting options get crawled and indexed.",
      "Site Speed for Large Catalogs: Optimizing performance across pages that platforms don't always handle efficiently by default.",
      "Crawl Budget Management: Making sure search engines spend their crawl activity on pages that actually matter."
    ]
  },
  {
    "title": "PRODUCT SCHEMA & RICH RESULTS",
    "description": "Structured data that helps your products stand out directly in search results. What We Do A product with rich result eligibility tends to earn more clicks than an identical listing without it.",
    "bullets": [
      "Product Schema Implementation: Price, availability, and review markup structured for rich result eligibility.",
      "Review & Rating Schema: Displaying star ratings directly in search results where genuinely available.",
      "Breadcrumb Schema: Helping search engines and users understand where a product sits in your site structure.",
      "Merchant Center Feed Optimization: Aligning product data for better performance in Google Shopping results, where relevant."
    ]
  },
  {
    "title": "SITE ARCHITECTURE FOR LARGE CATALOGS",
    "description": "Structuring a store so both search engines and shoppers can navigate thousands of products without friction. What We Do A catalog that's grown organically for years usually has structural debt nobody's had time to address.",
    "bullets": [
      "Category Hierarchy Planning: A logical structure that reflects how customers actually browse, not just how inventory is organized internally.",
      "URL Structure for Products & Categories: Clean, consistent URLs that scale across a large catalog.",
      "Pagination & Load-More Handling: Making sure paginated category pages get crawled and indexed correctly.",
      "Out-of-Stock & Discontinued Product Handling: Preventing dead product pages from quietly accumulating and dragging down site quality."
    ]
  },
  {
    "title": "ONGOING ECOMMERCE SEO MANAGEMENT",
    "description": "Catalogs change constantly, new products, seasonal shifts, discontinued lines, and SEO has to keep pace. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing ecommerce SEO fits into a broader retainer.",
    "bullets": [
      "New Product Optimization: Applying SEO best practices to new listings as they're added, not as an afterthought.",
      "Seasonal & Promotional Optimization: Adjusting strategy around sales events and seasonal demand shifts.",
      "Ranking & Revenue Tracking: Monitoring not just rankings but how organic traffic converts into actual sales.",
      "Ongoing Technical Health Checks: Catching new duplicate content or crawl issues as the catalog evolves."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "A store optimized like a regular business site usually leaves real revenue on the table.",
  "Buyer Intent Is Everything in Ecommerce",
  "Ranking for informational searches brings visitors who aren't ready to buy, ecommerce SEO has to prioritize the terms that actually signal purchase intent.",
  "Platforms Don't Fix Duplicate Content Automatically",
  "Shopify and WooCommerce both generate variant and filter pages that create duplicate content issues neither platform resolves without deliberate work.",
  "Rich Results Are a Real Click Advantage",
  "A product listing showing price, availability, and star ratings directly in search results tends to outperform a plain listing, all else being equal.",
  "Catalog Growth Creates Structural Debt",
  "A store that's added products for years without revisiting its architecture usually has navigation and crawl issues quietly limiting how much of the catalog can actually rank."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most product catalogs create their own SEO problems just by existing at scale, variant pages that duplicate each other, thin category descriptions, a site structure that buries half the inventory three clicks deep. We fix the structural issues platforms like Shopify and WooCommerce don't resolve automatically, then optimize around buyer-intent terms specifically, not the broader informational keywords that bring traffic without bringing sales. A store ranking for \"what is [product category]\" and a store ranking for \"buy [product] online\" are chasing very different visitors.",
    "text": "\"Traffic that doesn't convert isn't really a win, even when the ranking report looks good. Ecommerce SEO has to be judged by what it does to the cart, not just the click.\" Buyer-Intent Optimization | Platform-Specific Technical Fixes | Product Schema & Rich Results"
  },
  {
    "title": "Our Ecommerce SEO Services",
    "text": "An online store presents SEO challenges a regular business site doesn't."
  },
  {
    "title": "PRODUCT & CATEGORY PAGE OPTIMIZATION",
    "text": "The pages that actually drive revenue get the most direct attention."
  },
  {
    "title": "What We Do",
    "text": "* Product Page Content Optimization: Descriptions built around buyer-intent keywords, not generic manufacturer copy. * Category Page Optimization: Structured, keyword-relevant category descriptions that also help users navigate. * Buyer-Intent Keyword Targeting: Prioritizing terms that signal purchase readiness over broad informational searches. * Internal Linking Between Products: Connecting related products and collections to distribute authority and support discovery. A product page copied straight from the manufacturer rarely stands out to either search engines or shoppers."
  },
  {
    "title": "ECOMMERCE TECHNICAL SEO",
    "text": "Large catalogs create technical problems a small business site never has to deal with."
  },
  {
    "title": "What We Do",
    "text": "* Duplicate Content Resolution: Fixing the variant and filtered-page duplication common on Shopify and WooCommerce stores. * Faceted Navigation & Filter Handling: Managing how filters and sorting options get crawled and indexed. * Site Speed for Large Catalogs: Optimizing performance across pages that platforms don't always handle efficiently by default. * Crawl Budget Management: Making sure search engines spend their crawl activity on pages that actually matter. Large catalogs amplify small technical issues into problems that affect thousands of pages at once."
  },
  {
    "title": "PRODUCT SCHEMA & RICH RESULTS",
    "text": "Structured data that helps your products stand out directly in search results."
  },
  {
    "title": "What We Do",
    "text": "* Product Schema Implementation: Price, availability, and review markup structured for rich result eligibility. * Review & Rating Schema: Displaying star ratings directly in search results where genuinely available. * Breadcrumb Schema: Helping search engines and users understand where a product sits in your site structure. * Merchant Center Feed Optimization: Aligning product data for better performance in Google Shopping results, where relevant. A product with rich result eligibility tends to earn more clicks than an identical listing without it."
  },
  {
    "title": "SITE ARCHITECTURE FOR LARGE CATALOGS",
    "text": "Structuring a store so both search engines and shoppers can navigate thousands of products without friction."
  },
  {
    "title": "What We Do",
    "text": "* Category Hierarchy Planning: A logical structure that reflects how customers actually browse, not just how inventory is organized internally. * URL Structure for Products & Categories: Clean, consistent URLs that scale across a large catalog. * Pagination & Load-More Handling: Making sure paginated category pages get crawled and indexed correctly. * Out-of-Stock & Discontinued Product Handling: Preventing dead product pages from quietly accumulating and dragging down site quality. A catalog that's grown organically for years usually has structural debt nobody's had time to address."
  },
  {
    "title": "ONGOING ECOMMERCE SEO MANAGEMENT",
    "text": "Catalogs change constantly, new products, seasonal shifts, discontinued lines, and SEO has to keep pace."
  },
  {
    "title": "What We Do",
    "text": "* New Product Optimization: Applying SEO best practices to new listings as they're added, not as an afterthought. * Seasonal & Promotional Optimization: Adjusting strategy around sales events and seasonal demand shifts. * Ranking & Revenue Tracking: Monitoring not just rankings but how organic traffic converts into actual sales. * Ongoing Technical Health Checks: Catching new duplicate content or crawl issues as the catalog evolves. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing ecommerce SEO fits into a broader retainer. Why Your Business Needs Real Ecommerce SEO Work A store optimized like a regular business site usually leaves real revenue on the table."
  },
  {
    "title": "Buyer Intent Is Everything in Ecommerce",
    "text": "Ranking for informational searches brings visitors who aren't ready to buy, ecommerce SEO has to prioritize the terms that actually signal purchase intent. Platforms Don't Fix Duplicate Content Automatically Shopify and WooCommerce both generate variant and filter pages that create duplicate content issues neither platform resolves without deliberate work."
  },
  {
    "title": "Rich Results Are a Real Click Advantage",
    "text": "A product listing showing price, availability, and star ratings directly in search results tends to outperform a plain listing, all else being equal."
  },
  {
    "title": "Catalog Growth Creates Structural Debt",
    "text": "A store that's added products for years without revisiting its architecture usually has navigation and crawl issues quietly limiting how much of the catalog can actually rank. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Technical, content, and development work together, so a fix for duplicate variant pages doesn't get stuck waiting on a separate developer who's never seen the SEO strategy."
  },
  {
    "title": "Buyer Intent Over Traffic Volume",
    "text": "We don't chase high-volume informational keywords that bring visitors who were never going to buy. We prioritize terms that actually convert. Local & International Ecommerce Experience Based in Dhaka. Optimizing stores for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every content and technical change goes through your review before it touches the live store."
  },
  {
    "title": "Product & Category Optimization",
    "text": "Pages built around buyer-intent keywords, not generic manufacturer descriptions."
  },
  {
    "title": "Ecommerce Technical SEO",
    "text": "Duplicate content, faceted navigation, and crawl budget issues fixed at the platform level."
  },
  {
    "title": "Product Schema & Rich Results",
    "text": "Structured data that helps listings stand out directly in search results."
  },
  {
    "title": "Catalog Architecture",
    "text": "Category structure and URLs built to scale as your product count grows."
  },
  {
    "title": "Ongoing Management",
    "text": "New products optimized as they're added, with revenue tracked alongside rankings."
  },
  {
    "title": "Transparent Process",
    "text": "Every change reviewed and approved by you before it goes live."
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
