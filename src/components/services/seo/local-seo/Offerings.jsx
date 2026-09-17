import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "GOOGLE BUSINESS PROFILE MANAGEMENT",
    "description": "Often the first thing a potential customer sees, before they ever reach your website. What We Do A profile set up once and never touched again tends to lose ground to competitors actively managing theirs.",
    "bullets": [
      "Profile Setup & Category Optimization: Getting the business category and details right, since miscategorization quietly suppresses visibility.",
      "Business Description Writing: Descriptions written for both search relevance and genuine reader conversion.",
      "Photo & Post Management: Regular photo uploads and Google Posts that keep the profile active and engaging.",
      "Q&A Monitoring & Review Response: Managing the profile's ongoing activity, not just setting it up once and leaving it."
    ]
  },
  {
    "title": "LOCAL KEYWORD & ON-PAGE OPTIMIZATION",
    "description": "Making sure your site itself signals the right location to search engines, not just your Google profile. What We Do Local rankings depend on your site reinforcing the same location signals your Business Profile is sending.",
    "bullets": [
      "Location-Based Keyword Research: Identifying the specific terms local customers use, including neighborhood and area-specific searches.",
      "City & Service-Area Page Optimization: Building or refining pages that clearly establish where you operate.",
      "Local Schema Markup: Structured data that helps Google understand your business type and service area precisely.",
      "NAP Consistency on Page: Making sure your name, address, and phone number are accurate and consistent on your own site."
    ]
  },
  {
    "title": "CITATION BUILDING & CONSISTENCY",
    "description": "Building the foundational trust signals that support local rankings across the web. What We Do Inconsistent business information across the web is one of the more common, avoidable drags on local ranking potential.",
    "bullets": [
      "Local Directory Citations: Consistent listings across relevant local and industry-specific directories.",
      "NAP Consistency Audits: Finding and fixing mismatched business details across every existing citation.",
      "Duplicate Listing Cleanup: Removing or merging duplicate profiles that dilute local ranking signals.",
      "Industry-Specific Directory Placement: Listings on directories genuinely relevant to your specific business category."
    ]
  },
  {
    "title": "REVIEW GENERATION & MANAGEMENT",
    "description": "Reviews influence both rankings and whether a customer actually chooses you over the next listing. What We Do A steady flow of genuine reviews, responded to consistently, is one of the stronger local trust signals available.",
    "bullets": [
      "Review Generation Strategy: Practical, policy-compliant approaches to encouraging genuine customer reviews.",
      "Review Response Management: Timely, thoughtful responses to both positive and negative reviews.",
      "Review Monitoring: Tracking new reviews across platforms so nothing goes unanswered for long.",
      "Reputation Signal Reporting: Regular visibility into how your review profile compares to nearby competitors."
    ]
  },
  {
    "title": "MAP PACK & LOCAL RANKING TRACKING",
    "description": "Understanding exactly where you stand in local results, not just guessing based on your own searches. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing local tracking fits into a broader retainer.",
    "bullets": [
      "Local Rank Tracking: Monitoring Map Pack and organic local rankings for your key terms and service areas.",
      "Competitor Local Analysis: Understanding what nearby competitors are doing well that's outranking you.",
      "Insights & Performance Reporting: Tracking calls, direction requests, and profile views through Business Profile Insights.",
      "Ongoing Optimization Adjustments: Refining the strategy based on what the ranking data actually shows."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "For a business tied to a physical location or service area, local visibility often matters more than broad national rankings ever will.",
  "The Map Pack Captures Most of the Local Click",
  "Falling outside those top three local results means losing the majority of location-based search traffic to whichever competitors made it in.",
  "A Neglected Profile Loses to an Active One",
  "Google increasingly favors profiles showing regular activity, posts, photo updates, review responses, over ones set up once and forgotten.",
  "Inconsistent Listings Quietly Undermine Trust",
  "Mismatched business details across directories confuse both search engines and potential customers trying to reach you.",
  "Reviews Compound Into Real Competitive Advantage",
  "A stronger review profile than nearby competitors becomes a genuine differentiator, not just a vanity metric."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "The Map Pack, those three businesses at the top of a local search, captures most of the clicks that matter for location-based searches, and getting into it takes more than a filled-out Google Business Profile. It's a combination of profile completeness, review authority, citation consistency, and on-page local signals working together, not any single one of them in isolation. We manage all of it as one connected strategy, because treating a Business Profile and local SEO as separate projects is how businesses end up doing half the work and getting none of the visibility.",
    "text": "\"A customer searching nearby has already decided to buy something close to now. Losing that click to a competitor with a more complete listing is one of the more avoidable ways to lose business.\" Google Business Profile Management | Map Pack Optimization | Citation & Review Authority"
  },
  {
    "title": "Our Local SEO Services",
    "text": "Ranking locally depends on several signals working together, not any single fix."
  },
  {
    "title": "GOOGLE BUSINESS PROFILE MANAGEMENT",
    "text": "Often the first thing a potential customer sees, before they ever reach your website."
  },
  {
    "title": "What We Do",
    "text": "* Profile Setup & Category Optimization: Getting the business category and details right, since miscategorization quietly suppresses visibility. * Business Description Writing: Descriptions written for both search relevance and genuine reader conversion. * Photo & Post Management: Regular photo uploads and Google Posts that keep the profile active and engaging. * Q&A Monitoring & Review Response: Managing the profile's ongoing activity, not just setting it up once and leaving it. A profile set up once and never touched again tends to lose ground to competitors actively managing theirs."
  },
  {
    "title": "LOCAL KEYWORD & ON-PAGE OPTIMIZATION",
    "text": "Making sure your site itself signals the right location to search engines, not just your Google profile."
  },
  {
    "title": "What We Do",
    "text": "* Location-Based Keyword Research: Identifying the specific terms local customers use, including neighborhood and area-specific searches. * City & Service-Area Page Optimization: Building or refining pages that clearly establish where you operate. * Local Schema Markup: Structured data that helps Google understand your business type and service area precisely. * NAP Consistency on Page: Making sure your name, address, and phone number are accurate and consistent on your own site. Local rankings depend on your site reinforcing the same location signals your Business Profile is sending."
  },
  {
    "title": "CITATION BUILDING & CONSISTENCY",
    "text": "Building the foundational trust signals that support local rankings across the web."
  },
  {
    "title": "What We Do",
    "text": "* Local Directory Citations: Consistent listings across relevant local and industry-specific directories. * NAP Consistency Audits: Finding and fixing mismatched business details across every existing citation. * Duplicate Listing Cleanup: Removing or merging duplicate profiles that dilute local ranking signals. * Industry-Specific Directory Placement: Listings on directories genuinely relevant to your specific business category. Inconsistent business information across the web is one of the more common, avoidable drags on local ranking potential."
  },
  {
    "title": "REVIEW GENERATION & MANAGEMENT",
    "text": "Reviews influence both rankings and whether a customer actually chooses you over the next listing."
  },
  {
    "title": "What We Do",
    "text": "* Review Generation Strategy: Practical, policy-compliant approaches to encouraging genuine customer reviews. * Review Response Management: Timely, thoughtful responses to both positive and negative reviews. * Review Monitoring: Tracking new reviews across platforms so nothing goes unanswered for long. * Reputation Signal Reporting: Regular visibility into how your review profile compares to nearby competitors. A steady flow of genuine reviews, responded to consistently, is one of the stronger local trust signals available."
  },
  {
    "title": "MAP PACK & LOCAL RANKING TRACKING",
    "text": "Understanding exactly where you stand in local results, not just guessing based on your own searches."
  },
  {
    "title": "What We Do",
    "text": "* Local Rank Tracking: Monitoring Map Pack and organic local rankings for your key terms and service areas. * Competitor Local Analysis: Understanding what nearby competitors are doing well that's outranking you. * Insights & Performance Reporting: Tracking calls, direction requests, and profile views through Business Profile Insights. * Ongoing Optimization Adjustments: Refining the strategy based on what the ranking data actually shows. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing local tracking fits into a broader retainer. Why Your Business Needs Real Local SEO Work For a business tied to a physical location or service area, local visibility often matters more than broad national rankings ever will. The Map Pack Captures Most of the Local Click Falling outside those top three local results means losing the majority of location-based search traffic to whichever competitors made it in. A Neglected Profile Loses to an Active One Google increasingly favors profiles showing regular activity, posts, photo updates, review responses, over ones set up once and forgotten. Inconsistent Listings Quietly Undermine Trust Mismatched business details across directories confuse both search engines and potential customers trying to reach you. Reviews Compound Into Real Competitive Advantage A stronger review profile than nearby competitors becomes a genuine differentiator, not just a vanity metric. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Business Profile management, on-page work, and citation building handled together, not split across separate tools and vendors that don't coordinate. We Treat Local SEO as One Connected Strategy Profile, website, citations, and reviews all reinforce each other here, not managed as isolated, disconnected tasks. Local & International Local SEO Experience Based in Dhaka. Building local visibility for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process You see exactly what's being changed on your profile and site, with regular reporting on results."
  },
  {
    "title": "Google Business Profile Management",
    "text": "Full setup, ongoing posting, and review response handled as an active, maintained profile."
  },
  {
    "title": "Local On-Page Optimization",
    "text": "Your site reinforcing the same location signals your Business Profile sends."
  },
  {
    "title": "Citation Building & Cleanup",
    "text": "Consistent, accurate business listings across relevant directories."
  },
  {
    "title": "Review Generation & Response",
    "text": "A steady, policy-compliant approach to building and managing your review profile."
  },
  {
    "title": "Local Rank Tracking",
    "text": "Real visibility into Map Pack and local organic rankings, not guesswork."
  },
  {
    "title": "Transparent Process",
    "text": "Regular reporting on what's changed and what results it's producing."
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
