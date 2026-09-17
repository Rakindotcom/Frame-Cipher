import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "AUDIENCE STRATEGY & TARGETING",
    "description": "The targeting depth LinkedIn offers is the entire reason to use the platform, and it needs to be used deliberately. What We Do Broad targeting on LinkedIn defeats the entire reason the platform costs what it costs.",
    "bullets": [
      "Job Title & Seniority Targeting: Reaching the specific roles genuinely involved in your buying decision, not a broad job function guess.",
      "Company Size & Industry Targeting: Narrowing to the businesses that actually fit your ideal customer profile.",
      "Account-Based Marketing Setup: Targeting specific named companies directly, for sales motions built around a defined target account list.",
      "Matched Audiences: Uploading existing lead or customer lists to target or exclude specific known contacts."
    ]
  },
  {
    "title": "CAMPAIGN STRATEGY & FORMAT SELECTION",
    "description": "LinkedIn offers several distinct ad formats, each suited to a different stage of a buying journey. What We Do Choosing the wrong format for the buying stage is a common, avoidable reason LinkedIn campaigns underperform relative to their cost.",
    "bullets": [
      "Sponsored Content Strategy: Native feed ads built for awareness and thought leadership positioning.",
      "Lead Gen Form Campaigns: In-platform forms that pre-fill with LinkedIn profile data, reducing friction for conversions.",
      "Message & Conversation Ads: Direct, personalized outreach delivered through LinkedIn's messaging inbox.",
      "Document & Carousel Ads: Formats built for sharing genuinely substantive content reports, guides that fit a considered sales process."
    ]
  },
  {
    "title": "CREATIVE & MESSAGING STRATEGY",
    "description": "Creative on LinkedIn has to earn credibility, not just attention. What We Do A LinkedIn ad that reads like a consumer promotion tends to undermine the exact credibility a B2B buyer is evaluating you on. CONVERSION TRACKING & LEAD QUALITY MEASUREMENT On LinkedIn, lead quality matters more than lead volume in a way that changes how success actually gets measured. What We Do A hundred low-quality leads can look better on a dashboard than ten genuinely qualified ones, and only one of those numbers actually helps your sales team.",
    "bullets": [
      "Professional Ad Copy Development: Messaging written for how decision-makers actually evaluate offers, not consumer-style urgency tactics.",
      "Thought Leadership Content Positioning: Framing content and offers around genuine expertise, which performs better with a professional audience than a hard sell.",
      "Lead Gen Form Optimization: Structuring form fields to balance lead quality against completion rate.",
      "Creative Testing: Testing messaging angles against each other to find what actually resonates with a specific professional audience.",
      "LinkedIn Insight Tag Setup: Configuring conversion tracking correctly across your site and lead forms.",
      "CRM Integration: Connecting LinkedIn lead data directly into your sales pipeline, so nothing sits in a spreadsheet nobody checks.",
      "Lead Quality Scoring: Reviewing leads against your actual sales criteria, not just counting form submissions as a win.",
      "Sales Cycle Attribution: Understanding how LinkedIn contributes across a sales cycle that often extends well beyond the click."
    ]
  },
  {
    "title": "ONGOING OPTIMIZATION & REPORTING",
    "description": "LinkedIn campaigns move differently than consumer platforms, and optimization has to match that pace. What We Do LinkedIn leads often move through a longer sales cycle - see our Lead Generation Ads page for how form and follow-up strategy connects.",
    "bullets": [
      "Budget & Bid Management: Adjusting spend allocation based on which audiences and formats are actually producing qualified leads.",
      "Audience Refinement: Narrowing or expanding targeting based on real lead quality data as it accumulates.",
      "Creative Rotation: Refreshing messaging and format based on performance, at a pace suited to LinkedIn's longer engagement cycles.",
      "Sales-Aligned Reporting: Reporting built around what your sales team actually needs to know, not just platform-native metrics."
    ]
  },
  {
    "title": "Why LinkedIn Costs More, and Why That's Sometimes the Right Trade",
    "description": "Every platform in this silo prices differently, and LinkedIn's premium is worth understanding on its own terms. The Targeting Is the Product LinkedIn's cost reflects what you're actually buying, verified professional data most platforms can only guess at through inferred interest signals. Wasted Reach Costs More Than It Looks Like A cheap click on a consumer platform reaching the wrong professional audience is arguably more wasteful than an expensive click reaching exactly the right one, once you account for sales time spent on unqualified leads. It's Suited to Specific Situations, Not Every Business LinkedIn makes sense for considering B2B sales with a real buying committee and higher deal value, it's a poor fit for low-cost consumer products or impulse purchases, and we'll tell you directly if that describes your situation. Volume Isn't the Goal Here Success on LinkedIn looks different than success on Meta, fewer, better-qualified leads that a sales team can actually convert, not a maximized click count.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "LinkedIn's precision only pays off if the campaign is actually built to use it.",
  "Misused Precision Is Wasted Spend",
  "Running LinkedIn with broad, untargeted campaigns wastes the exact premium you're paying for platform-specific targeting depth.",
  "B2B Buying Committees Aren't One Person",
  "Reaching only the most senior title in a buying decision misses the other stakeholders often genuinely involved in getting a deal approved.",
  "Lead Quality Determines Whether the Spend Was Worth It",
  "A LinkedIn campaign generating high lead volume that your sales team can't actually convert isn't a success by any measure that matters to the business.",
  "The Sales Cycle Is Longer, and Reporting Should Reflect That",
  "Judging LinkedIn performance on the same short attribution window as an impulse-purchase consumer campaign misses how B2B decisions actually get made."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "LinkedIn's cost-per-click runs well above Meta's or Google's, and the reason isn't platform inefficiency, it's that you're paying for targeting precision no consumer platform can genuinely offer. Job title, seniority, company size, industry: LinkedIn knows these with a confidence level built from professional profile data, not inferred interest signals. We build campaigns around that precision deliberately, because using LinkedIn like a cheaper, broader platform wastes the exact thing you're paying the premium for in the first place.",
    "text": "\"LinkedIn isn't expensive because the platform is inefficient. It's expensive because you're paying for certainty about who's actually seeing the ad, a VP of Operations at a 200-person company, not a rough demographic guess.\" Precision B2B Targeting | Built for Considered Sales Cycles | Lead Quality Over Click Volume"
  },
  {
    "title": "Our LinkedIn Ads Management Services",
    "text": "Managing LinkedIn well means respecting what the platform is actually good at, rather than running it like an oversized version of Meta."
  },
  {
    "title": "AUDIENCE STRATEGY & TARGETING",
    "text": "The targeting depth LinkedIn offers is the entire reason to use the platform, and it needs to be used deliberately."
  },
  {
    "title": "What We Do",
    "text": "* Job Title & Seniority Targeting: Reaching the specific roles genuinely involved in your buying decision, not a broad job function guess. * Company Size & Industry Targeting: Narrowing to the businesses that actually fit your ideal customer profile. * Account-Based Marketing Setup: Targeting specific named companies directly, for sales motions built around a defined target account list. * Matched Audiences: Uploading existing lead or customer lists to target or exclude specific known contacts. Broad targeting on LinkedIn defeats the entire reason the platform costs what it costs."
  },
  {
    "title": "CAMPAIGN STRATEGY & FORMAT SELECTION",
    "text": "LinkedIn offers several distinct ad formats, each suited to a different stage of a buying journey."
  },
  {
    "title": "What We Do",
    "text": "* Sponsored Content Strategy: Native feed ads built for awareness and thought leadership positioning. * Lead Gen Form Campaigns: In-platform forms that pre-fill with LinkedIn profile data, reducing friction for conversions. * Message & Conversation Ads: Direct, personalized outreach delivered through LinkedIn's messaging inbox. * Document & Carousel Ads: Formats built for sharing genuinely substantive content reports, guides that fit a considered sales process. Choosing the wrong format for the buying stage is a common, avoidable reason LinkedIn campaigns underperform relative to their cost."
  },
  {
    "title": "CREATIVE & MESSAGING STRATEGY",
    "text": "Creative on LinkedIn has to earn credibility, not just attention."
  },
  {
    "title": "What We Do",
    "text": "* Professional Ad Copy Development: Messaging written for how decision-makers actually evaluate offers, not consumer-style urgency tactics. * Thought Leadership Content Positioning: Framing content and offers around genuine expertise, which performs better with a professional audience than a hard sell. * Lead Gen Form Optimization: Structuring form fields to balance lead quality against completion rate. * Creative Testing: Testing messaging angles against each other to find what actually resonates with a specific professional audience. A LinkedIn ad that reads like a consumer promotion tends to undermine the exact credibility a B2B buyer is evaluating you on. CONVERSION TRACKING & LEAD QUALITY MEASUREMENT On LinkedIn, lead quality matters more than lead volume in a way that changes how success actually gets measured."
  },
  {
    "title": "What We Do",
    "text": "* LinkedIn Insight Tag Setup: Configuring conversion tracking correctly across your site and lead forms. * CRM Integration: Connecting LinkedIn lead data directly into your sales pipeline, so nothing sits in a spreadsheet nobody checks. * Lead Quality Scoring: Reviewing leads against your actual sales criteria, not just counting form submissions as a win. * Sales Cycle Attribution: Understanding how LinkedIn contributes across a sales cycle that often extends well beyond the click. A hundred low-quality leads can look better on a dashboard than ten genuinely qualified ones, and only one of those numbers actually helps your sales team."
  },
  {
    "title": "ONGOING OPTIMIZATION & REPORTING",
    "text": "LinkedIn campaigns move differently than consumer platforms, and optimization has to match that pace."
  },
  {
    "title": "What We Do",
    "text": "* Budget & Bid Management: Adjusting spend allocation based on which audiences and formats are actually producing qualified leads. * Audience Refinement: Narrowing or expanding targeting based on real lead quality data as it accumulates. * Creative Rotation: Refreshing messaging and format based on performance, at a pace suited to LinkedIn's longer engagement cycles. * Sales-Aligned Reporting: Reporting built around what your sales team actually needs to know, not just platform-native metrics. LinkedIn leads often move through a longer sales cycle - see our Lead Generation Ads page for how form and follow-up strategy connects. Why LinkedIn Costs More, and Why That's Sometimes the Right Trade Every platform in this silo prices differently, and LinkedIn's premium is worth understanding on its own terms."
  },
  {
    "title": "The Targeting Is the Product",
    "text": "LinkedIn's cost reflects what you're actually buying, verified professional data most platforms can only guess at through inferred interest signals. Wasted Reach Costs More Than It Looks Like A cheap click on a consumer platform reaching the wrong professional audience is arguably more wasteful than an expensive click reaching exactly the right one, once you account for sales time spent on unqualified leads. It's Suited to Specific Situations, Not Every Business LinkedIn makes sense for considering B2B sales with a real buying committee and higher deal value, it's a poor fit for low-cost consumer products or impulse purchases, and we'll tell you directly if that describes your situation. Volume Isn't the Goal Here Success on LinkedIn looks different than success on Meta, fewer, better-qualified leads that a sales team can actually convert, not a maximized click count. Why Your Business Needs Real LinkedIn Ads Management LinkedIn's precision only pays off if the campaign is actually built to use it."
  },
  {
    "title": "Misused Precision Is Wasted Spend",
    "text": "Running LinkedIn with broad, untargeted campaigns wastes the exact premium you're paying for platform-specific targeting depth. B2B Buying Committees Aren't One Person Reaching only the most senior title in a buying decision misses the other stakeholders often genuinely involved in getting a deal approved. Lead Quality Determines Whether the Spend Was Worth It A LinkedIn campaign generating high lead volume that your sales team can't actually convert isn't a success by any measure that matters to the business. The Sales Cycle Is Longer, and Reporting Should Reflect That Judging LinkedIn performance on the same short attribution window as an impulse-purchase consumer campaign misses how B2B decisions actually get made. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Targeting, creative, and CRM integration reviewed together, so leads don't disappear into a system nobody's actually watching."
  },
  {
    "title": "We Respect What LinkedIn Is Actually For",
    "text": "No broad-targeting shortcuts to lower cost-per-click, the whole point of the platform is precision, and we manage it that way."
  },
  {
    "title": "Local & International B2B Experience",
    "text": "Based in Dhaka. Managing LinkedIn campaigns for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Full Account Access, No Black Box You retain ownership and full visibility into your own LinkedIn Campaign Manager account throughout the engagement."
  },
  {
    "title": "Audience Strategy & B2B Targeting",
    "text": "Job title, industry, and company-size targeting built around your actual buying committee."
  },
  {
    "title": "Campaign Strategy & Format Selection",
    "text": "Sponsored Content, Lead Gen Forms, or Message Ads chosen based on your specific sales cycle stage."
  },
  {
    "title": "Creative & Messaging Strategy",
    "text": "Professional copy and content built to earn credibility with decision-makers, not consumer-style urgency."
  },
  {
    "title": "Conversion Tracking & CRM Integration",
    "text": "Leads flowing directly into your sales pipeline, with quality tracked against real sales criteria."
  },
  {
    "title": "Ongoing Optimization",
    "text": "Budget and targeting refined based on lead quality data, not just platform-native click metrics."
  },
  {
    "title": "Sales-Aligned Reporting",
    "text": "Reports built around what actually matters to your sales team's pipeline."
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
