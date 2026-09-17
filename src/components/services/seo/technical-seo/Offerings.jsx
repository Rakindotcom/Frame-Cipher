import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CRAWLABILITY & INDEXATION",
    "description": "If Google can't find and index your pages properly, nothing else about your SEO strategy matters. What We Do A page search engines can't find is a page that doesn't exist as far as rankings are concerned.",
    "bullets": [
      "XML Sitemap Optimization: Making sure your sitemap accurately reflects what should actually be indexed.",
      "Robots.txt Review: Confirming you're not accidentally blocking pages search engines should be crawling.",
      "Crawl Budget Analysis: Identifying wasted crawl activity on low-value pages that pulls attention from ones that matter.",
      "Orphan Page & Broken Link Fixes: Finding pages with no internal links pointing to them, and links that lead nowhere."
    ]
  },
  {
    "title": "SITE SPEED & CORE WEB VITALS",
    "description": "Speed is both a ranking factor and a conversion factor, fixing it serves two goals at once. What We Do A three-second delay in load time is enough to send a meaningful share of visitors somewhere else.",
    "bullets": [
      "Page Speed Audits: Identifying exactly what's slowing pages down, not just reporting a generic score.",
      "Image & Asset Optimization: Compression and format fixes that cut load time without visibly hurting quality.",
      "Core Web Vitals Fixes: Addressing loading, interactivity, and visual stability metrics Google actively measures.",
      "Mobile Performance Optimization: Making sure speed holds up on real mobile connections, not just desktop broadband."
    ]
  },
  {
    "title": "STRUCTURED DATA & SCHEMA MARKUP",
    "description": "Helping search engines understand exactly what's on the page, not just that something is there. What We Do Structured data doesn't guarantee a rich result, but skipping it guarantees you're not eligible for one.",
    "bullets": [
      "Schema Markup Implementation: Product, review, FAQ, and article schema, matched to what each page actually contains.",
      "Rich Result Eligibility: Structuring data so pages qualify for enhanced search listings where relevant.",
      "Schema Validation & Testing: Confirming markup is implemented correctly, not just present.",
      "Local Business Schema: Structured data that supports local search and Google Business Profile visibility."
    ]
  },
  {
    "title": "SITE ARCHITECTURE & TECHNICAL CLEANUP",
    "description": "The underlying structure that determines whether search engines understand how your site fits together. What We Do Search engines reward sites that are easy to understand, technical clutter works against that even when the content itself is strong.",
    "bullets": [
      "URL Structure Review: Clean, logical URLs that reflect site hierarchy instead of generated strings.",
      "Duplicate Content Resolution: Canonical tags and redirects fixed where the same content is competing against itself.",
      "HTTPS & Security Configuration: Confirming certificates and security setup meet current standards.",
      "Mobile-Friendliness & Responsive Fixes: Addressing layout or functionality issues specific to mobile crawling and indexing."
    ]
  },
  {
    "title": "ONGOING TECHNICAL MONITORING",
    "description": "Technical health isn't a one-time fix, sites drift out of good shape as content and code accumulate. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing technical monitoring fits into a broader retainer.",
    "bullets": [
      "Regular Crawl Health Checks: Catching new indexation issues before they compound.",
      "Core Web Vitals Monitoring: Tracking performance metrics over time, not just at a single audit snapshot.",
      "Search Console Error Tracking: Monitoring for crawl errors, security issues, and manual actions as they appear.",
      "Technical Regression Prevention: Flagging when a site update accidentally reintroduces a fixed issue."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Content and link building work harder and produce better results faster once the technical foundation underneath them is solid.",
  "Rankings Can't Outrun a Broken Foundation",
  "No amount of content strategy compensates for pages Google can't properly crawl or index in the first place.",
  "Speed Affects Both Rankings and Revenue",
  "Slow-loading pages lose rankings and lose visitors before they even see what you're offering, it's a compounding cost, not a one-time inconvenience.",
  "Technical Debt Accumulates Quietly",
  "Small issues, a missing sitemap update, an unnoticed redirect chain build up over time until they're collectively suppressing a meaningful share of your traffic.",
  "A Clean Foundation Makes Everything Else Work Better",
  "Content, link building, and local SEO all perform better once crawlability and speed aren't working against them."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Google can't rank a page it can't crawl properly, and it won't rank a page users abandon because it loads too slowly. We start by finding the specific technical issues actually suppressing your rankings, broken internal links, unindexed pages, bloated code, missing structured data, instead of running a generic checklist and calling it done. A site that looks fine to a visitor can still be quietly invisible to search engines, and that gap is exactly where we focus.",
    "text": "\"Most sites don't have a content problem. They have a foundation problem that content work can't fix, no matter how good the writing is.\" Crawl & Indexation Fixes | Core Web Vitals Optimization | Structured Data Implementation"
  },
  {
    "title": "Our Technical SEO Services",
    "text": "Technical SEO covers a lot of ground, here's how we break it down."
  },
  {
    "title": "CRAWLABILITY & INDEXATION",
    "text": "If Google can't find and index your pages properly, nothing else about your SEO strategy matters."
  },
  {
    "title": "What We Do",
    "text": "* XML Sitemap Optimization: Making sure your sitemap accurately reflects what should actually be indexed. * Robots.txt Review: Confirming you're not accidentally blocking pages search engines should be crawling. * Crawl Budget Analysis: Identifying wasted crawl activity on low-value pages that pulls attention from ones that matter. * Orphan Page & Broken Link Fixes: Finding pages with no internal links pointing to them, and links that lead nowhere. A page search engines can't find is a page that doesn't exist as far as rankings are concerned."
  },
  {
    "title": "SITE SPEED & CORE WEB VITALS",
    "text": "Speed is both a ranking factor and a conversion factor, fixing it serves two goals at once."
  },
  {
    "title": "What We Do",
    "text": "* Page Speed Audits: Identifying exactly what's slowing pages down, not just reporting a generic score. * Image & Asset Optimization: Compression and format fixes that cut load time without visibly hurting quality. * Core Web Vitals Fixes: Addressing loading, interactivity, and visual stability metrics Google actively measures. * Mobile Performance Optimization: Making sure speed holds up on real mobile connections, not just desktop broadband. A three-second delay in load time is enough to send a meaningful share of visitors somewhere else."
  },
  {
    "title": "STRUCTURED DATA & SCHEMA MARKUP",
    "text": "Helping search engines understand exactly what's on the page, not just that something is there."
  },
  {
    "title": "What We Do",
    "text": "* Schema Markup Implementation: Product, review, FAQ, and article schema, matched to what each page actually contains. * Rich Result Eligibility: Structuring data so pages qualify for enhanced search listings where relevant. * Schema Validation & Testing: Confirming markup is implemented correctly, not just present. * Local Business Schema: Structured data that supports local search and Google Business Profile visibility. Structured data doesn't guarantee a rich result, but skipping it guarantees you're not eligible for one."
  },
  {
    "title": "SITE ARCHITECTURE & TECHNICAL CLEANUP",
    "text": "The underlying structure that determines whether search engines understand how your site fits together."
  },
  {
    "title": "What We Do",
    "text": "* URL Structure Review: Clean, logical URLs that reflect site hierarchy instead of generated strings. * Duplicate Content Resolution: Canonical tags and redirects fixed where the same content is competing against itself. * HTTPS & Security Configuration: Confirming certificates and security setup meet current standards. * Mobile-Friendliness & Responsive Fixes: Addressing layout or functionality issues specific to mobile crawling and indexing. Search engines reward sites that are easy to understand, technical clutter works against that even when the content itself is strong."
  },
  {
    "title": "ONGOING TECHNICAL MONITORING",
    "text": "Technical health isn't a one-time fix, sites drift out of good shape as content and code accumulate."
  },
  {
    "title": "What We Do",
    "text": "* Regular Crawl Health Checks: Catching new indexation issues before they compound. * Core Web Vitals Monitoring: Tracking performance metrics over time, not just at a single audit snapshot. * Search Console Error Tracking: Monitoring for crawl errors, security issues, and manual actions as they appear. * Technical Regression Prevention: Flagging when a site update accidentally reintroduces a fixed issue. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing technical monitoring fits into a broader retainer. Why Your Business Needs Real Technical SEO Work Content and link building work harder and produce better results faster once the technical foundation underneath them is solid. Rankings Can't Outrun a Broken Foundation No amount of content strategy compensates for pages Google can't properly crawl or index in the first place."
  },
  {
    "title": "Speed Affects Both Rankings and Revenue",
    "text": "Slow-loading pages lose rankings and lose visitors before they even see what you're offering, it's a compounding cost, not a one-time inconvenience."
  },
  {
    "title": "Technical Debt Accumulates Quietly",
    "text": "Small issues, a missing sitemap update, an unnoticed redirect chain build up over time until they're collectively suppressing a meaningful share of your traffic. A Clean Foundation Makes Everything Else Work Better Content, link building, and local SEO all perform better once crawlability and speed aren't working against them. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Technical fixes, content, and development work together under one roof, so a technical recommendation isn't disconnected from what your dev team can actually implement."
  },
  {
    "title": "We Diagnose Before We Prescribe",
    "text": "No generic technical checklist applied regardless of your site. We find the specific issues actually suppressing your rankings, then fix those first. Local & International Technical Experience Based in Dhaka. Working with clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every technical change goes through your review before it touches the live site."
  },
  {
    "title": "Crawlability & Indexation Fixes",
    "text": "Sitemap, robots.txt, and internal linking cleaned up so search engines can actually find your important pages."
  },
  {
    "title": "Site Speed Optimization",
    "text": "Core Web Vitals and mobile performance addressed at the source, not patched around."
  },
  {
    "title": "Structured Data Implementation",
    "text": "Schema markup matched to what each page actually contains, tested for correctness."
  },
  {
    "title": "Site Architecture Cleanup",
    "text": "URL structure, duplicate content, and security configuration brought up to current standards."
  },
  {
    "title": "Ongoing Monitoring",
    "text": "Technical health tracked over time, so new issues get caught before they compound."
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
