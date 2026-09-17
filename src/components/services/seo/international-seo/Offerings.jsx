import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SITE STRUCTURE STRATEGY",
    "description": "The foundational decision that shapes everything else about an international SEO strategy. What We Do The structural decision made early is expensive to reverse later, which is exactly why it gets evaluated carefully before anything else.",
    "bullets": [
      "ccTLD vs. Subdirectory vs. Subdomain Strategy: Recommending the right structure based on your resources, brand, and target markets.",
      "Country & Language Targeting Setup: Configuring Search Console and site signals to clearly indicate market targeting.",
      "Migration Planning: For businesses restructuring an existing site to support multiple markets without losing current rankings.",
      "Content Duplication Risk Assessment: Identifying where near-identical content across markets could create ranking conflicts."
    ]
  },
  {
    "title": "HREFLANG IMPLEMENTATION",
    "description": "The technical signal that tells search engines which page version belongs to which audience. What We Do Hreflang implemented incorrectly is often worse than not implementing it at all, since it can actively confuse search engines about which page to rank where. MARKET-SPECIFIC CONTENT & KEYWORD STRATEGY The same product or service gets searched for differently depending on where the searcher is. What We Do A direct translation without localization often reads as foreign to the very audience it's meant to reach.",
    "bullets": [
      "Hreflang Tag Implementation: Correctly annotated tags connecting each regional or language variant to its counterparts.",
      "Hreflang Validation & Error Fixing: Catching the common implementation mistakes that render hreflang tags ineffective or even harmful.",
      "Self-Referencing Tag Verification: Confirming every page correctly references itself as part of the tag cluster.",
      "Ongoing Hreflang Auditing: Checking that tags stay accurate as pages get added, removed, or restructured.",
      "Market-Specific Keyword Research: Identifying how the same intent gets expressed differently across regions and languages.",
      "Localized Content Adaptation: Adjusting content for cultural relevance and local search behavior, not just direct translation.",
      "Currency & Unit Localization: Making sure pricing, measurements, and other details match what each market actually expects.",
      "Local Search Intent Analysis: Understanding what searchers in each specific market actually want from a given query."
    ]
  },
  {
    "title": "INTERNATIONAL TECHNICAL SEO",
    "description": "The infrastructure work that supports multi-market sites specifically. What We Do Site speed for a visitor on the other side of the world depends on infrastructure decisions most single-market sites never have to think about.",
    "bullets": [
      "Geo-Targeting Configuration: Setting country targeting signals correctly in Google Search Console.",
      "Server Location & CDN Strategy: Making sure site speed holds up for visitors in every target market, not just the primary one.",
      "Multi-Language Sitemap Structure: XML sitemaps structured to reflect language and regional variants clearly.",
      "International Schema Markup: Structured data that supports multi-region business information where relevant."
    ]
  },
  {
    "title": "ONGOING INTERNATIONAL SEO MANAGEMENT",
    "description": "Multi-market sites need continued attention as each market's search landscape evolves independently. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing international tracking fits into a broader retainer.",
    "bullets": [
      "Per-Market Ranking Tracking: Monitoring performance separately for each target country or language, not one blended report.",
      "Hreflang Health Monitoring: Catching new implementation errors as the site grows and changes.",
      "Market-Specific Algorithm Impact Review: Understanding when a ranking shift affects one market versus all of them.",
      "Expansion Planning: Guidance on structuring the next market addition without disrupting existing ones."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Reaching multiple markets without the right technical foundation often means each market performs worse than a properly structured single-market site would have.",
  "Duplicate Content Across Markets Isn't Automatically Safe",
  "Near-identical pages targeting different countries can be misread as duplicate content without correct hreflang signals in place.",
  "One Wrong Structural Decision Affects Everything Downstream",
  "Choosing between a ccTLD, subdirectory, or subdomain isn't a minor detail, it shapes SEO, branding, and technical maintenance for as long as the structure exists.",
  "Direct Translation Isn't Localization",
  "Content translated word-for-word often misses the actual search terms and cultural context a local audience uses and expects.",
  "Markets Move at Different Speeds",
  "A ranking change in one country doesn't necessarily reflect what's happening in another, treating international performance as one blended number hides real, actionable detail."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Two nearly identical pages targeting the UK and the US can end up fighting each other in search results if hreflang tags aren't implemented correctly, and neither one ranks as well as either could have alone. International SEO is less about writing new content for each market and more about getting the underlying technical signals right, country targeting, language annotation, URL structure, so search engines know exactly which version to show to which visitor. Get that wrong, and expansion effort quietly cannibalizes itself.",
    "text": "\"Most international SEO problems aren't content problems. They're technical signals telling Google two things at once, and Google picking one somewhat arbitrarily.\" Hreflang & Geo-Targeting | Multi-Region Site Architecture | Market-Specific Keyword Strategy"
  },
  {
    "title": "Our International SEO Services",
    "text": "Reaching multiple markets well touches structure, content, and technical signals together."
  },
  {
    "title": "SITE STRUCTURE STRATEGY",
    "text": "The foundational decision that shapes everything else about an international SEO strategy."
  },
  {
    "title": "What We Do",
    "text": "* ccTLD vs. Subdirectory vs. Subdomain Strategy: Recommending the right structure based on your resources, brand, and target markets. * Country & Language Targeting Setup: Configuring Search Console and site signals to clearly indicate market targeting. * Migration Planning: For businesses restructuring an existing site to support multiple markets without losing current rankings. * Content Duplication Risk Assessment: Identifying where near-identical content across markets could create ranking conflicts. The structural decision made early is expensive to reverse later, which is exactly why it gets evaluated carefully before anything else."
  },
  {
    "title": "HREFLANG IMPLEMENTATION",
    "text": "The technical signal that tells search engines which page version belongs to which audience."
  },
  {
    "title": "What We Do",
    "text": "* Hreflang Tag Implementation: Correctly annotated tags connecting each regional or language variant to its counterparts. * Hreflang Validation & Error Fixing: Catching the common implementation mistakes that render hreflang tags ineffective or even harmful. * Self-Referencing Tag Verification: Confirming every page correctly references itself as part of the tag cluster. * Ongoing Hreflang Auditing: Checking that tags stay accurate as pages get added, removed, or restructured. Hreflang implemented incorrectly is often worse than not implementing it at all, since it can actively confuse search engines about which page to rank where. MARKET-SPECIFIC CONTENT & KEYWORD STRATEGY The same product or service gets searched for differently depending on where the searcher is."
  },
  {
    "title": "What We Do",
    "text": "* Market-Specific Keyword Research: Identifying how the same intent gets expressed differently across regions and languages. * Localized Content Adaptation: Adjusting content for cultural relevance and local search behavior, not just direct translation. * Currency & Unit Localization: Making sure pricing, measurements, and other details match what each market actually expects. * Local Search Intent Analysis: Understanding what searchers in each specific market actually want from a given query. A direct translation without localization often reads as foreign to the very audience it's meant to reach."
  },
  {
    "title": "INTERNATIONAL TECHNICAL SEO",
    "text": "The infrastructure work that supports multi-market sites specifically."
  },
  {
    "title": "What We Do",
    "text": "* Geo-Targeting Configuration: Setting country targeting signals correctly in Google Search Console. * Server Location & CDN Strategy: Making sure site speed holds up for visitors in every target market, not just the primary one. * Multi-Language Sitemap Structure: XML sitemaps structured to reflect language and regional variants clearly. * International Schema Markup: Structured data that supports multi-region business information where relevant. Site speed for a visitor on the other side of the world depends on infrastructure decisions most single-market sites never have to think about."
  },
  {
    "title": "ONGOING INTERNATIONAL SEO MANAGEMENT",
    "text": "Multi-market sites need continued attention as each market's search landscape evolves independently."
  },
  {
    "title": "What We Do",
    "text": "* Per-Market Ranking Tracking: Monitoring performance separately for each target country or language, not one blended report. * Hreflang Health Monitoring: Catching new implementation errors as the site grows and changes. * Market-Specific Algorithm Impact Review: Understanding when a ranking shift affects one market versus all of them. * Expansion Planning: Guidance on structuring the next market addition without disrupting existing ones. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing international tracking fits into a broader retainer. Why Your Business Needs Real International SEO Work Reaching multiple markets without the right technical foundation often means each market performs worse than a properly structured single-market site would have. Duplicate Content Across Markets Isn't Automatically Safe Near-identical pages targeting different countries can be misread as duplicate content without correct hreflang signals in place. One Wrong Structural Decision Affects Everything Downstream Choosing between a ccTLD, subdirectory, or subdomain isn't a minor detail, it shapes SEO, branding, and technical maintenance for as long as the structure exists. Direct Translation Isn't Localization Content translated word-for-word often misses the actual search terms and cultural context a local audience uses and expects."
  },
  {
    "title": "Markets Move at Different Speeds",
    "text": "A ranking change in one country doesn't necessarily reflect what's happening in another, treating international performance as one blended number hides real, actionable detail. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Technical structure, localized content, and ongoing tracking handled together, so hreflang implementation doesn't get disconnected from the content strategy it's supposed to support. Structure Decided Before Content Is Written We don't localize content onto a structure that hasn't been properly evaluated first, the foundational decision comes before the execution."
  },
  {
    "title": "Local & International Market Experience",
    "text": "Based in Dhaka. Structuring multi-market sites for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every structural and content decision goes through your review before implementation."
  },
  {
    "title": "Site Structure Strategy",
    "text": "A properly evaluated recommendation on ccTLD, subdirectory, or subdomain structure for your specific situation."
  },
  {
    "title": "Hreflang Implementation",
    "text": "Correctly annotated, validated tags connecting your market and language variants."
  },
  {
    "title": "Market-Specific Content & Keywords",
    "text": "Content adapted for local search behavior and cultural relevance, not just translated."
  },
  {
    "title": "International Technical SEO",
    "text": "Geo-targeting, site speed, and sitemap structure built to support every target market properly."
  },
  {
    "title": "Ongoing Per-Market Tracking",
    "text": "Separate visibility into how each market is actually performing, not one blended report."
  },
  {
    "title": "Transparent Process",
    "text": "Every decision is reviewed and approved by you before implementation."
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
