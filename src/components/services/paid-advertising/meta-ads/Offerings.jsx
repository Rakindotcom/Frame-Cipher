import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CAMPAIGN STRATEGY & OBJECTIVE SETUP",
    "description": "Meta's own campaign objectives shape how the algorithm optimizes delivery, so getting this right early matters more than it looks like it should. What We Do Choosing the wrong campaign objective quietly tells Meta's algorithm to optimize for the wrong outcome from day one.",
    "bullets": [
      "Campaign Objective Selection: Choosing conversion, traffic, or awareness objectives based on what actually matters to your business, not the default suggestion.",
      "Funnel Stage Strategy: Structuring campaigns around where an audience sits cold, warm, or ready to convert, rather than one campaign trying to do everything.",
      "Budget Allocation & Bid Strategy: Distributing spend across campaign stages based on realistic performance potential.",
      "Placement Strategy: Deciding where ads actually run Feed, Stories, Reels based on where your specific audience engages, not a default blanket setting."
    ]
  },
  {
    "title": "AUDIENCE RESEARCH & TARGETING",
    "description": "Meta's targeting depth is a real advantage, and also easy to use badly without genuine research behind it. What We Do A broad, untested audience often performs worse than a smaller, genuinely relevant one, regardless of reach numbers.",
    "bullets": [
      "Interest & Behavior-Based Targeting: Building audiences around genuine buyer signals, not broad demographic guessing.",
      "Custom Audience Setup: Targeting people who've already interacted with your business, site visitors, past customers, email lists.",
      "Lookalike Audience Development: Finding new prospects who resemble your best existing customers, built from real conversion data.",
      "Audience Testing & Refinement: Testing multiple audience segments against each other to identify what actually performs."
    ]
  },
  {
    "title": "CREATIVE STRATEGY & DEVELOPMENT",
    "description": "On a platform built around scrolling, the creative is doing most of the actual persuasion work. What We Do The single biggest lever on Meta performance is usually creative, not targeting refinement - most underperforming accounts have a creative problem mislabeled as a targeting problem.",
    "bullets": [
      "Ad Creative Concepting: Developing visual and video concepts built around what actually stops a scroll in your specific category.",
      "Copywriting for Social: Headlines and captions written for how people actually read on Facebook and Instagram, not repurposed website copy.",
      "Video & Static Ad Production Guidance: Direction on format and style that performs well within Meta's specific placements.",
      "Creative Variation & Testing: Multiple creative angles tested against each other, since Meta creative fatigues faster than most advertisers expect."
    ]
  },
  {
    "title": "CONVERSION TRACKING & MEASUREMENT",
    "description": "Making sure Meta's own optimization has accurate data to actually work from. What We Do Meta's advertising algorithm learns from your conversion data, inaccurate tracking doesn't just hide problems, it actively misdirects future optimization.",
    "bullets": [
      "Meta Pixel & Conversions API Setup: Configuring tracking correctly, including server-side tracking as browser-based tracking becomes less reliable.",
      "Event Tracking Configuration: Setting up purchase, lead, and custom event tracking specific to what actually matters for your business.",
      "Attribution Window Review: Understanding how Meta credits conversions across its attribution settings.",
      "Cross-Platform Measurement: Connecting Meta data with broader analytics for a fuller picture beyond the platform's own reporting."
    ]
  },
  {
    "title": "ONGOING OPTIMIZATION & CREATIVE REFRESH",
    "description": "Meta campaigns need more frequent attention than search campaigns, since creative fatigue sets in faster than keyword performance typically declines. What We Do Meta Ads perform best paired with a landing page built for that specific traffic - see our Landing Page Development page for how that connects.",
    "bullets": [
      "Performance Monitoring: Regular review of frequency, cost-per-result, and creative-level performance data.",
      "Creative Refresh Scheduling: Rotating in new creative before fatigue meaningfully hurts performance, not after.",
      "Audience Expansion & Refinement: Adjusting targeting as performance data reveals what's actually working.",
      "Budget Reallocation: Shifting spend toward what's performing, away from what isn't, based on real results."
    ]
  },
  {
    "title": "Why Creative Carries More Weight on Meta Than Almost Anywhere Else",
    "description": "Search advertising and social advertising ask fundamentally different things about the advertiser, and it's worth understanding why. Search: Answering a Question Already Asked Someone searching has already expressed intent, the ad's job is mostly to be relevant and show up at the right moment. Meta: Creating Interest From Nothing Someone scrolling wasn't looking for you, the ad has to generate the interest a search ad gets to assume already exists, which is a creative problem before it's a targeting problem. Why That Changes the Management Approach Because the creative is doing the heavier lift, testing has to be continuous and fatigue has to be actively managed, a \"set it and check quarterly\" approach that might work reasonably on search tends to underperform badly here.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Meta rewards genuine creative and targeting effort more visibly than most platforms, and punishes neglect just as visibly.",
  "Creative Fatigue Is Real and Fast",
  "The same ad shown to the same audience repeatedly loses effectiveness within weeks, sometimes days at higher spend levels, a static creative library is a quietly declining one.",
  "Broad Targeting Isn't Automatically Efficient",
  "Meta's algorithm can find efficiency at scale, but that efficiency still depends on accurate conversion data and a genuinely relevant starting audience to learn from.",
  "The Platform's Depth Cuts Both Ways",
  "Meta's targeting and creative tools offer real depth, but that depth is exactly where inexperienced management tends to waste budget on unused or poorly configured options.",
  "Attention Is the Actual Currency Here",
  "Every scroll past your ad without a stop is a missed opportunity that a slightly better creative angle might have caught, small creative improvements often move performance more than targeting tweaks."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Meta's ad platform runs on a genuinely different logic than search, it doesn't wait for someone to type in what they want, it has to interrupt attention and create interest that wasn't there a moment earlier. That means creative carries more weight here than almost anywhere else in paid media, and audience targeting has to be built around actual behavior and interest signals, not a demographic guess dressed up as a strategy. We treat testing as continuous, not a one-time setup step, because what works on Meta today can fatigue and stop working within weeks in a way search keywords generally don't.",
    "text": "\"On Meta, the ad has to do more work than the offer. Someone scrolling past isn't looking for you yet, the creative's job is to make them stop and reconsider that.\" Creative-Led Strategy | Behavior-Based Audience Targeting | Continuous Creative Testing"
  },
  {
    "title": "Our Meta Ads Management Services",
    "text": "Managing Meta campaigns well means treating creative, audience, and measurement as equally important, not creative as an afterthought to targeting."
  },
  {
    "title": "CAMPAIGN STRATEGY & OBJECTIVE SETUP",
    "text": "Meta's own campaign objectives shape how the algorithm optimizes delivery, so getting this right early matters more than it looks like it should."
  },
  {
    "title": "What We Do",
    "text": "* Campaign Objective Selection: Choosing conversion, traffic, or awareness objectives based on what actually matters to your business, not the default suggestion. * Funnel Stage Strategy: Structuring campaigns around where an audience sits cold, warm, or ready to convert, rather than one campaign trying to do everything. * Budget Allocation & Bid Strategy: Distributing spend across campaign stages based on realistic performance potential. * Placement Strategy: Deciding where ads actually run Feed, Stories, Reels based on where your specific audience engages, not a default blanket setting. Choosing the wrong campaign objective quietly tells Meta's algorithm to optimize for the wrong outcome from day one."
  },
  {
    "title": "AUDIENCE RESEARCH & TARGETING",
    "text": "Meta's targeting depth is a real advantage, and also easy to use badly without genuine research behind it."
  },
  {
    "title": "What We Do",
    "text": "* Interest & Behavior-Based Targeting: Building audiences around genuine buyer signals, not broad demographic guessing. * Custom Audience Setup: Targeting people who've already interacted with your business, site visitors, past customers, email lists. * Lookalike Audience Development: Finding new prospects who resemble your best existing customers, built from real conversion data. * Audience Testing & Refinement: Testing multiple audience segments against each other to identify what actually performs. A broad, untested audience often performs worse than a smaller, genuinely relevant one, regardless of reach numbers."
  },
  {
    "title": "CREATIVE STRATEGY & DEVELOPMENT",
    "text": "On a platform built around scrolling, the creative is doing most of the actual persuasion work."
  },
  {
    "title": "What We Do",
    "text": "* Ad Creative Concepting: Developing visual and video concepts built around what actually stops a scroll in your specific category. * Copywriting for Social: Headlines and captions written for how people actually read on Facebook and Instagram, not repurposed website copy. * Video & Static Ad Production Guidance: Direction on format and style that performs well within Meta's specific placements. * Creative Variation & Testing: Multiple creative angles tested against each other, since Meta creative fatigues faster than most advertisers expect. The single biggest lever on Meta performance is usually creative, not targeting refinement - most underperforming accounts have a creative problem mislabeled as a targeting problem."
  },
  {
    "title": "CONVERSION TRACKING & MEASUREMENT",
    "text": "Making sure Meta's own optimization has accurate data to actually work from."
  },
  {
    "title": "What We Do",
    "text": "* Meta Pixel & Conversions API Setup: Configuring tracking correctly, including server-side tracking as browser-based tracking becomes less reliable. * Event Tracking Configuration: Setting up purchase, lead, and custom event tracking specific to what actually matters for your business. * Attribution Window Review: Understanding how Meta credits conversions across its attribution settings. * Cross-Platform Measurement: Connecting Meta data with broader analytics for a fuller picture beyond the platform's own reporting. Meta's advertising algorithm learns from your conversion data, inaccurate tracking doesn't just hide problems, it actively misdirects future optimization."
  },
  {
    "title": "ONGOING OPTIMIZATION & CREATIVE REFRESH",
    "text": "Meta campaigns need more frequent attention than search campaigns, since creative fatigue sets in faster than keyword performance typically declines."
  },
  {
    "title": "What We Do",
    "text": "* Performance Monitoring: Regular review of frequency, cost-per-result, and creative-level performance data. * Creative Refresh Scheduling: Rotating in new creative before fatigue meaningfully hurts performance, not after. * Audience Expansion & Refinement: Adjusting targeting as performance data reveals what's actually working. * Budget Reallocation: Shifting spend toward what's performing, away from what isn't, based on real results. Meta Ads perform best paired with a landing page built for that specific traffic - see our Landing Page Development page for how that connects. Why Creative Carries More Weight on Meta Than Almost Anywhere Else Search advertising and social advertising ask fundamentally different things about the advertiser, and it's worth understanding why. Search: Answering a Question Already Asked Someone searching has already expressed intent, the ad's job is mostly to be relevant and show up at the right moment. Meta: Creating Interest From Nothing Someone scrolling wasn't looking for you, the ad has to generate the interest a search ad gets to assume already exists, which is a creative problem before it's a targeting problem."
  },
  {
    "title": "Why That Changes the Management Approach",
    "text": "Because the creative is doing the heavier lift, testing has to be continuous and fatigue has to be actively managed, a \"set it and check quarterly\" approach that might work reasonably on search tends to underperform badly here. Why Your Business Needs Real Meta Ads Management Meta rewards genuine creative and targeting effort more visibly than most platforms, and punishes neglect just as visibly."
  },
  {
    "title": "Creative Fatigue Is Real and Fast",
    "text": "The same ad shown to the same audience repeatedly loses effectiveness within weeks, sometimes days at higher spend levels, a static creative library is a quietly declining one. Broad Targeting Isn't Automatically Efficient Meta's algorithm can find efficiency at scale, but that efficiency still depends on accurate conversion data and a genuinely relevant starting audience to learn from. The Platform's Depth Cuts Both Ways Meta's targeting and creative tools offer real depth, but that depth is exactly where inexperienced management tends to waste budget on unused or poorly configured options."
  },
  {
    "title": "Attention Is the Actual Currency Here",
    "text": "Every scroll past your ad without a stop is a missed opportunity that a slightly better creative angle might have caught, small creative improvements often move performance more than targeting tweaks. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Creative, targeting, and landing page alignment reviewed together, not managed by a media buyer disconnected from what the ad actually says or where it sends traffic. Creative-First, Not Targeting-First We treat creative as the primary performance lever here, testing and refreshing continuously rather than setting an ad and revisiting it occasionally."
  },
  {
    "title": "Local & International Meta Ads Experience",
    "text": "Based in Dhaka. Managing campaigns for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Full Account Access, No Black Box You retain ownership and full visibility into your own Meta Business account, nothing runs in a system you can't see into yourself."
  },
  {
    "title": "Campaign Strategy & Objectives",
    "text": "Campaigns structured around genuine funnel stages, with objectives chosen for what actually matters to your business."
  },
  {
    "title": "Audience Research & Targeting",
    "text": "Interest, behavior, custom, and lookalike audiences built from real signals, not demographic guessing."
  },
  {
    "title": "Creative Strategy & Development",
    "text": "Visual and copy concepts built specifically to stop a scroll, tested continuously against each other."
  },
  {
    "title": "Conversion Tracking Setup",
    "text": "Pixel and Conversions API configured correctly, so Meta's own algorithm is optimizing from accurate data."
  },
  {
    "title": "Ongoing Optimization & Creative Refresh",
    "text": "Regular monitoring and creative rotation, staying ahead of fatigue rather than reacting to it."
  },
  {
    "title": "Transparent Reporting",
    "text": "Clear, regular reporting on conversions and cost-per-result, with full account access retained by you."
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
