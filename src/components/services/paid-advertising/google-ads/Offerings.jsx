import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "ACCOUNT STRATEGY & CAMPAIGN STRUCTURE",
    "description": "The foundational decisions that determine how efficiently every dollar afterward actually gets spent. What We Do An account structured poorly at the start creates optimization problems that compound for as long as it keeps running.",
    "bullets": [
      "Campaign Type Selection: Choosing Search, Shopping, Performance Max, or a combination based on what your business actually needs.",
      "Account Structure Planning: Organizing campaigns and ad groups around genuine themes, not a flat list that makes optimization harder later.",
      "Conversion Goal Definition: Establishing exactly what counts as a result, a purchase, a form fill, a call, before spend begins.",
      "Budget Allocation Strategy: Distributing spend across campaigns based on realistic performance potential, not equal splits by default."
    ]
  },
  {
    "title": "KEYWORD RESEARCH & TARGETING",
    "description": "Making sure spend goes toward the searches most likely to actually convert. What We Do A negative keyword list left unmaintained is one of the more common, quietly expensive gaps in a Google Ads account.",
    "bullets": [
      "Buyer-Intent Keyword Research: Prioritizing terms that signal genuine purchase or inquiry readiness over broad, informational searches.",
      "Match Type Strategy: Using exact, phrase, and broad match deliberately, not defaulting to broad match and hoping for the best.",
      "Negative Keyword Management: Actively excluding irrelevant searches that burn budget without any real chance of converting.",
      "Audience & Demographic Targeting: Layering audience data on top of keyword targeting where it genuinely sharpens relevance."
    ]
  },
  {
    "title": "AD CREATIVE & LANDING PAGE ALIGNMENT",
    "description": "The click only matters if what happens after it actually supports a conversion. What We Do An ad that earns a click but sends the visitor to a mismatched landing page has done half the job and wasted the spend on the other half.",
    "bullets": [
      "Ad Copy Development: Writing headlines and descriptions built around what actually gets someone to click and follow through.",
      "Ad Extension Setup: Sitelinks, callouts, and other extensions configured to improve both visibility and click quality.",
      "Landing Page Relevance Review: Confirming the page an ad sends traffic to actually matches what the ad promised.",
      "A/B Testing: Testing ad variations against each other to identify what genuinely performs better, not guessing."
    ]
  },
  {
    "title": "CONVERSION TRACKING & MEASUREMENT",
    "description": "Making sure the account's own data actually reflects what happened, not just what the platform assumes. What We Do Bad conversion tracking doesn't just hide problems, it can actively mislead an account's own bidding algorithms into optimizing for the wrong outcome.",
    "bullets": [
      "Conversion Tracking Setup: Configuring tracking correctly for purchases, leads, calls, or whatever counts as a real result for your business.",
      "Google Analytics & Tag Manager Integration: Connecting Ads data with broader site analytics for a fuller picture of performance.",
      "Call Tracking Setup: Attributing phone call conversions accurately where calls are a genuine part of the buyer journey.",
      "Attribution Model Review: Understanding which campaigns and keywords are actually driving results, not just getting last-click credit."
    ]
  },
  {
    "title": "ONGOING OPTIMIZATION & REPORTING",
    "description": "An account managed once at setup and left alone tends to drift toward inefficiency over time. What We Do Google Ads performs best paired with a landing page genuinely built to convert its traffic - see our Landing Page Development page for how that connects.",
    "bullets": [
      "Bid Strategy Management: Adjusting bidding approach as performance data accumulates and goals evolve.",
      "Search Term Report Review: Regularly checking what people actually searched to trigger your ads, catching waste early.",
      "Performance Reporting: Clear, regular reporting on conversions and cost-per-conversion, not just clicks and impressions.",
      "Ongoing A/B Testing & Refinement: Continuous testing of ad copy, landing pages, and targeting based on real results."
    ]
  },
  {
    "title": "The Different Ways Google Ads Actually Works",
    "description": "\"Google Ads\" covers several genuinely different campaign types, and picking the right one matters more than most advertisers realize. Search Campaigns Text ads shown when someone actively searches for a relevant term, the closest thing to advertising to someone who's already raised their hand. Shopping Campaigns Product listings with image, price, and store name shown directly in search results, built for ecommerce catalogs competing at the moment of comparison. Performance Max Google's automated campaign type running across Search, Display, YouTube, and Gmail from one campaign, trading manual control for machine-learning-driven reach. Display & YouTube Visual and video ads shown across Google's network and video content, better suited to awareness and remarketing than direct response. Most accounts that perform well use more than one of these deliberately, not because more campaign types automatically means better results, but because different stages of the buyer journey are genuinely served by different formats.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Google Ads is powerful enough to reward good management and unforgiving enough to punish neglect quickly.",
  "Setup Mistakes Compound Every Day the Account Runs",
  "A broad match keyword with no negative list, or conversion tracking that's silently broken, doesn't cost a one-time amount, it costs a little more every single day it goes unnoticed.",
  "The Platform Rewards Attention",
  "Google's own algorithms respond to signals from active management, regular optimization tends to outperform an account left on autopilot, even with the same underlying budget.",
  "Vanity Metrics Can Mask Real Problems",
  "An account can show excellent click-through rates and still be losing money if those clicks aren't converting into anything that matters to your business.",
  "Fast Feedback Cuts Both Ways",
  "Google Ads can start producing results within days of a properly built campaign, and can just as quickly reveal when something's fundamentally wrong with the strategy."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most underperforming Google Ads accounts aren't victims of a bad platform, they're victims of broad match keywords with no negative keyword list, conversion tracking that was never set up correctly, or bids left on autopilot for months without review. We start by finding out what's actually happening inside an account before touching anything, since half of the \"Google Ads doesn't work for us\" conclusions we encounter trace back to setup mistakes rather than the platform itself. Every account we manage gets structured around what a conversion is actually worth to your business, not just what keeps cost-per-click low on a report.",
    "text": "\"A campaign spending efficiently on the wrong keywords is still wasting money efficiently. Low cost-per-click means nothing if the clicks were never going to convert in the first place.\" Conversion-First Setup | Full Campaign Type Coverage | Transparent, Reviewable Account Access"
  },
  {
    "title": "Our Google Ads Management Services",
    "text": "Managing a Google Ads account well touches strategy, structure, and ongoing optimization together."
  },
  {
    "title": "ACCOUNT STRATEGY & CAMPAIGN STRUCTURE",
    "text": "The foundational decisions that determine how efficiently every dollar afterward actually gets spent."
  },
  {
    "title": "What We Do",
    "text": "* Campaign Type Selection: Choosing Search, Shopping, Performance Max, or a combination based on what your business actually needs. * Account Structure Planning: Organizing campaigns and ad groups around genuine themes, not a flat list that makes optimization harder later. * Conversion Goal Definition: Establishing exactly what counts as a result, a purchase, a form fill, a call, before spend begins. * Budget Allocation Strategy: Distributing spend across campaigns based on realistic performance potential, not equal splits by default. An account structured poorly at the start creates optimization problems that compound for as long as it keeps running."
  },
  {
    "title": "KEYWORD RESEARCH & TARGETING",
    "text": "Making sure spend goes toward the searches most likely to actually convert."
  },
  {
    "title": "What We Do",
    "text": "* Buyer-Intent Keyword Research: Prioritizing terms that signal genuine purchase or inquiry readiness over broad, informational searches. * Match Type Strategy: Using exact, phrase, and broad match deliberately, not defaulting to broad match and hoping for the best. * Negative Keyword Management: Actively excluding irrelevant searches that burn budget without any real chance of converting. * Audience & Demographic Targeting: Layering audience data on top of keyword targeting where it genuinely sharpens relevance. A negative keyword list left unmaintained is one of the more common, quietly expensive gaps in a Google Ads account."
  },
  {
    "title": "AD CREATIVE & LANDING PAGE ALIGNMENT",
    "text": "The click only matters if what happens after it actually supports a conversion."
  },
  {
    "title": "What We Do",
    "text": "* Ad Copy Development: Writing headlines and descriptions built around what actually gets someone to click and follow through. * Ad Extension Setup: Sitelinks, callouts, and other extensions configured to improve both visibility and click quality. * Landing Page Relevance Review: Confirming the page an ad sends traffic to actually matches what the ad promised. * A/B Testing: Testing ad variations against each other to identify what genuinely performs better, not guessing. An ad that earns a click but sends the visitor to a mismatched landing page has done half the job and wasted the spend on the other half."
  },
  {
    "title": "CONVERSION TRACKING & MEASUREMENT",
    "text": "Making sure the account's own data actually reflects what happened, not just what the platform assumes."
  },
  {
    "title": "What We Do",
    "text": "* Conversion Tracking Setup: Configuring tracking correctly for purchases, leads, calls, or whatever counts as a real result for your business. * Google Analytics & Tag Manager Integration: Connecting Ads data with broader site analytics for a fuller picture of performance. * Call Tracking Setup: Attributing phone call conversions accurately where calls are a genuine part of the buyer journey. * Attribution Model Review: Understanding which campaigns and keywords are actually driving results, not just getting last-click credit. Bad conversion tracking doesn't just hide problems, it can actively mislead an account's own bidding algorithms into optimizing for the wrong outcome."
  },
  {
    "title": "ONGOING OPTIMIZATION & REPORTING",
    "text": "An account managed once at setup and left alone tends to drift toward inefficiency over time."
  },
  {
    "title": "What We Do",
    "text": "* Bid Strategy Management: Adjusting bidding approach as performance data accumulates and goals evolve. * Search Term Report Review: Regularly checking what people actually searched to trigger your ads, catching waste early. * Performance Reporting: Clear, regular reporting on conversions and cost-per-conversion, not just clicks and impressions. * Ongoing A/B Testing & Refinement: Continuous testing of ad copy, landing pages, and targeting based on real results. Google Ads performs best paired with a landing page genuinely built to convert its traffic - see our Landing Page Development page for how that connects. The Different Ways Google Ads Actually Works \"Google Ads\" covers several genuinely different campaign types, and picking the right one matters more than most advertisers realize."
  },
  {
    "title": "Search Campaigns",
    "text": "Text ads shown when someone actively searches for a relevant term, the closest thing to advertising to someone who's already raised their hand."
  },
  {
    "title": "Shopping Campaigns",
    "text": "Product listings with image, price, and store name shown directly in search results, built for ecommerce catalogs competing at the moment of comparison."
  },
  {
    "title": "Performance Max",
    "text": "Google's automated campaign type running across Search, Display, YouTube, and Gmail from one campaign, trading manual control for machine-learning-driven reach."
  },
  {
    "title": "Display & YouTube",
    "text": "Visual and video ads shown across Google's network and video content, better suited to awareness and remarketing than direct response. Most accounts that perform well use more than one of these deliberately, not because more campaign types automatically means better results, but because different stages of the buyer journey are genuinely served by different formats. Why Your Business Needs Real Google Ads Management Google Ads is powerful enough to reward good management and unforgiving enough to punish neglect quickly. Setup Mistakes Compound Every Day the Account Runs A broad match keyword with no negative list, or conversion tracking that's silently broken, doesn't cost a one-time amount, it costs a little more every single day it goes unnoticed."
  },
  {
    "title": "The Platform Rewards Attention",
    "text": "Google's own algorithms respond to signals from active management, regular optimization tends to outperform an account left on autopilot, even with the same underlying budget."
  },
  {
    "title": "Vanity Metrics Can Mask Real Problems",
    "text": "An account can show excellent click-through rates and still be losing money if those clicks aren't converting into anything that matters to your business."
  },
  {
    "title": "Fast Feedback Cuts Both Ways",
    "text": "Google Ads can start producing results within days of a properly built campaign, and can just as quickly reveal when something's fundamentally wrong with the strategy. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, creative, and landing page alignment reviewed together, so a Google Ads recommendation isn't disconnected from what happens after the click."
  },
  {
    "title": "We Audit Before We Manage",
    "text": "Every new account gets a real review of existing structure, tracking, and spend efficiency before we change anything, not assumptions applied blind. Local & International Google Ads Experience Based in Dhaka. Managing accounts for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Full Account Access, No Black Box You retain ownership and full visibility into your own Google Ads account, nothing runs in a system you can't see into yourself."
  },
  {
    "title": "Account Strategy & Structure",
    "text": "Campaigns organized around genuine themes and conversion goals, not a flat structure that's hard to optimize."
  },
  {
    "title": "Keyword Research & Targeting",
    "text": "Spend directed toward genuinely buyer-intent searches, with negative keywords actively maintained."
  },
  {
    "title": "Ad Creative & Landing Page Alignment",
    "text": "Ad copy and the pages it sends traffic to reviewed together, not managed as separate, disconnected pieces."
  },
  {
    "title": "Conversion Tracking Setup",
    "text": "Tracking is configured correctly from day one, so account data reflects reality, not platform assumptions."
  },
  {
    "title": "Ongoing Optimization",
    "text": "Regular bid, search term, and creative review, not a set-and-forget account."
  },
  {
    "title": "Transparent Reporting",
    "text": "Clear, regular reporting on conversions and cost-per-conversion, with full account access retained by you."
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
