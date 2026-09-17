import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PLATFORM STRATEGY FOR LEAD GENERATION",
    "description": "Different platforms produce genuinely different lead quality for the same offer, and picking the right mix matters more than picking one platform well. What We Do The cheapest lead by cost-per-form-fill is sometimes the most expensive lead once you account for how many of them actually convert to a sale.",
    "bullets": [
      "Multi-Platform Lead Strategy: Combining Google, Meta, and LinkedIn lead campaigns based on where your specific buyers actually are.",
      "Native Lead Form Setup: Using in-platform lead forms - Google Lead Form Extensions, Meta Lead Ads, LinkedIn Lead Gen Forms, that reduce friction versus sending traffic off-platform.",
      "Landing Page vs. Native Form Decisions: Choosing between a dedicated landing page and a native in-platform form based on which genuinely converts better for your offer.",
      "Budget Allocation Across Channels: Distributing spend based on lead quality by source, not just cost-per-lead in isolation."
    ]
  },
  {
    "title": "FORM STRATEGY & QUALIFICATION",
    "description": "The form itself is where lead quality gets decided, long before a sales conversation ever happens. What We Do A shorter form generates more submissions and often worse leads; a longer form does the opposite, the right length depends on what your sales team can actually act on.",
    "bullets": [
      "Form Field Optimization: Balancing completion rate against the qualifying information your sales team actually needs.",
      "Qualifying Question Design: Adding the specific questions that separate genuine prospects from casual browsers.",
      "Progressive Profiling: Collecting information gradually across touchpoints rather than front-loading a long form that scares people off.",
      "Thank You Page & Next-Step Design: Setting clear expectations immediately after submission, so leads know what happens next."
    ]
  },
  {
    "title": "CREATIVE & OFFER STRATEGY",
    "description": "What you're offering in exchange for someone's contact information shapes lead quality as much as targeting does. What We Do An overly generous incentive can flood a form with people who wanted the incentive, not the product or service behind it.",
    "bullets": [
      "Offer Development: Structuring what's being promised, a quote, a consultation, a resource, around genuine buyer readiness.",
      "Ad Copy & Creative for Lead Gen: Messaging built to attract qualified interest specifically, not just maximum click volume.",
      "Urgency & Incentive Calibration: Using incentives that attract genuine prospects without attracting people chasing the incentive alone.",
      "Creative Testing: Testing offers angles against each other to find what attracts quality, not just quantity."
    ]
  },
  {
    "title": "LEAD ROUTING & CRM INTEGRATION",
    "description": "The technical connection between a form submission and a salesperson actually seeing it matters more than most campaigns account for. What We Do A lead contacted within minutes converts at meaningfully higher rates than the same lead contacted the next day, the ad campaign can't fix a slow follow-up process on its own.",
    "bullets": [
      "CRM Integration: Connecting lead forms directly into your existing sales pipeline, so nothing sits in a spreadsheet or inbox unnoticed.",
      "Lead Routing & Notification Setup: Making sure the right person on your team gets notified immediately, not at the next scheduled check.",
      "Lead Scoring Implementation: Flagging higher-quality leads for priority follow-up based on form responses and behavior.",
      "Speed-to-Lead Process Review: Assessing how quickly your team actually responds, since response speed is one of the strongest predictors of lead conversion."
    ]
  },
  {
    "title": "LEAD QUALITY MEASUREMENT & OPTIMIZATION",
    "description": "Judging a lead campaign by form-fill count alone hides whether it's actually working. What We Do Lead generation performance depends heavily on what happens after the click - see our Landing Page Development page for how the destination page itself affects lead quality.",
    "bullets": [
      "Lead Quality Tracking: Working with your sales team to understand which leads actually convert, then optimizing campaigns toward that signal.",
      "Cost-Per-Qualified-Lead Reporting: Reporting on genuine quality-adjusted cost, not just raw cost-per-form-fill.",
      "Source-Level Performance Review: Identifying which platforms and campaigns produce leads that actually close, not just leads that submit.",
      "Ongoing Targeting Refinement: Adjusting audience and creative based on which leads turned into real customers."
    ]
  },
  {
    "title": "Lead Generation Isn't a Platform, It's a Goal",
    "description": "Unlike our other paid advertising pages, this one isn't about a single platform's mechanics. It's about an objective that gets pursued differently depending on where it runs. On Google Search intent already exists, someone typing \"get a quote for X\" is close to ready, and the lead form's job is mostly to reduce friction at the moment they act. On Meta Interest and intent often need to be created first, which means the offer and creative carry more weight in attracting genuinely interested leads rather than curious clickers. On LinkedIn Precision targeting means fewer, higher-value leads are the expected outcome, volume was never really the goal here in the first place. The Common Thread Regardless of platform, the form, the offer, and what happens in the minutes after submission determine whether a \"lead\" becomes a customer or a wasted click, that part of the strategy stays constant everywhere this runs.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "A lead generation campaign optimized only for volume solves the wrong problem convincingly.",
  "Volume Metrics Can Mask a Quality Problem",
  "A campaign generating plenty of leads that your sales team can't convert isn't succeeding by any measure that actually matters to the business.",
  "Response Speed Is Part of the Campaign, Not Separate From It",
  "An ad campaign feeding leads into a slow or disorganized follow-up process is only doing half its job, regardless of how well-targeted the ads themselves are.",
  "The Wrong Offer Attracts the Wrong Leads",
  "An incentive too generous relative to what you're actually selling can flood a form with people who wanted the incentive, not the product.",
  "Cross-Platform Strategy Beats Single-Channel Habit",
  "Committing to one platform out of familiarity, rather than where your specific buyers actually are, usually leaves genuine opportunity on another channel unaddressed."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Lead generation isn't tied to one platform, it's an objective that runs across Google, Meta, LinkedIn, and others, and treating it as a single-channel task usually means missing where your specific buyers actually are. We build lead campaigns around the whole path a form fill takes afterward, not just the moment someone clicks submit, because a beautifully optimized ad feeding a form nobody follows up with fast enough is money spent generating leads that quietly die in an inbox. Quality gets weighed against volume from day one here, since a smaller number of real prospects beats a large number of people who were never actually going to become customers.",
    "text": "\"The form submission isn't the finish line, it's the start of a race against how fast a competitor might follow up. A great ad feeding a slow response process is solving only half the problem.\" Cross-Platform Lead Strategy | Quality-Weighted, Not Volume-Chasing | Built Around the Full Follow-Up Path"
  },
  {
    "title": "Our Lead Generation Ads Services",
    "text": "Getting genuine inquiries touches platform strategy, form design, and what happens immediately after a submission."
  },
  {
    "title": "PLATFORM STRATEGY FOR LEAD GENERATION",
    "text": "Different platforms produce genuinely different lead quality for the same offer, and picking the right mix matters more than picking one platform well."
  },
  {
    "title": "What We Do",
    "text": "* Multi-Platform Lead Strategy: Combining Google, Meta, and LinkedIn lead campaigns based on where your specific buyers actually are. * Native Lead Form Setup: Using in-platform lead forms - Google Lead Form Extensions, Meta Lead Ads, LinkedIn Lead Gen Forms, that reduce friction versus sending traffic off-platform. * Landing Page vs. Native Form Decisions: Choosing between a dedicated landing page and a native in-platform form based on which genuinely converts better for your offer. * Budget Allocation Across Channels: Distributing spend based on lead quality by source, not just cost-per-lead in isolation. The cheapest lead by cost-per-form-fill is sometimes the most expensive lead once you account for how many of them actually convert to a sale."
  },
  {
    "title": "FORM STRATEGY & QUALIFICATION",
    "text": "The form itself is where lead quality gets decided, long before a sales conversation ever happens."
  },
  {
    "title": "What We Do",
    "text": "* Form Field Optimization: Balancing completion rate against the qualifying information your sales team actually needs. * Qualifying Question Design: Adding the specific questions that separate genuine prospects from casual browsers. * Progressive Profiling: Collecting information gradually across touchpoints rather than front-loading a long form that scares people off. * Thank You Page & Next-Step Design: Setting clear expectations immediately after submission, so leads know what happens next. A shorter form generates more submissions and often worse leads; a longer form does the opposite, the right length depends on what your sales team can actually act on."
  },
  {
    "title": "CREATIVE & OFFER STRATEGY",
    "text": "What you're offering in exchange for someone's contact information shapes lead quality as much as targeting does."
  },
  {
    "title": "What We Do",
    "text": "* Offer Development: Structuring what's being promised, a quote, a consultation, a resource, around genuine buyer readiness. * Ad Copy & Creative for Lead Gen: Messaging built to attract qualified interest specifically, not just maximum click volume. * Urgency & Incentive Calibration: Using incentives that attract genuine prospects without attracting people chasing the incentive alone. * Creative Testing: Testing offers angles against each other to find what attracts quality, not just quantity. An overly generous incentive can flood a form with people who wanted the incentive, not the product or service behind it."
  },
  {
    "title": "LEAD ROUTING & CRM INTEGRATION",
    "text": "The technical connection between a form submission and a salesperson actually seeing it matters more than most campaigns account for."
  },
  {
    "title": "What We Do",
    "text": "* CRM Integration: Connecting lead forms directly into your existing sales pipeline, so nothing sits in a spreadsheet or inbox unnoticed. * Lead Routing & Notification Setup: Making sure the right person on your team gets notified immediately, not at the next scheduled check. * Lead Scoring Implementation: Flagging higher-quality leads for priority follow-up based on form responses and behavior. * Speed-to-Lead Process Review: Assessing how quickly your team actually responds, since response speed is one of the strongest predictors of lead conversion. A lead contacted within minutes converts at meaningfully higher rates than the same lead contacted the next day, the ad campaign can't fix a slow follow-up process on its own."
  },
  {
    "title": "LEAD QUALITY MEASUREMENT & OPTIMIZATION",
    "text": "Judging a lead campaign by form-fill count alone hides whether it's actually working."
  },
  {
    "title": "What We Do",
    "text": "* Lead Quality Tracking: Working with your sales team to understand which leads actually convert, then optimizing campaigns toward that signal. * Cost-Per-Qualified-Lead Reporting: Reporting on genuine quality-adjusted cost, not just raw cost-per-form-fill. * Source-Level Performance Review: Identifying which platforms and campaigns produce leads that actually close, not just leads that submit. * Ongoing Targeting Refinement: Adjusting audience and creative based on which leads turned into real customers. Lead generation performance depends heavily on what happens after the click - see our Landing Page Development page for how the destination page itself affects lead quality. Lead Generation Isn't a Platform, It's a Goal Unlike our other paid advertising pages, this one isn't about a single platform's mechanics. It's about an objective that gets pursued differently depending on where it runs."
  },
  {
    "title": "On Google",
    "text": "Search intent already exists, someone typing \"get a quote for X\" is close to ready, and the lead form's job is mostly to reduce friction at the moment they act."
  },
  {
    "title": "On Meta",
    "text": "Interest and intent often need to be created first, which means the offer and creative carry more weight in attracting genuinely interested leads rather than curious clickers."
  },
  {
    "title": "On LinkedIn",
    "text": "Precision targeting means fewer, higher-value leads are the expected outcome, volume was never really the goal here in the first place."
  },
  {
    "title": "The Common Thread",
    "text": "Regardless of platform, the form, the offer, and what happens in the minutes after submission determine whether a \"lead\" becomes a customer or a wasted click, that part of the strategy stays constant everywhere this runs. Why Your Business Needs Real Lead Generation Ads Management A lead generation campaign optimized only for volume solves the wrong problem convincingly."
  },
  {
    "title": "Volume Metrics Can Mask a Quality Problem",
    "text": "A campaign generating plenty of leads that your sales team can't convert isn't succeeding by any measure that actually matters to the business. Response Speed Is Part of the Campaign, Not Separate From It An ad campaign feeding leads into a slow or disorganized follow-up process is only doing half its job, regardless of how well-targeted the ads themselves are."
  },
  {
    "title": "The Wrong Offer Attracts the Wrong Leads",
    "text": "An incentive too generous relative to what you're actually selling can flood a form with people who wanted the incentive, not the product. Cross-Platform Strategy Beats Single-Channel Habit Committing to one platform out of familiarity, rather than where your specific buyers actually are, usually leaves genuine opportunity on another channel unaddressed. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Platform strategy, form design, and CRM integration handled together, so a lead's journey from click to sales contact is managed as one connected process. Quality Over Volume, Genuinely We optimize toward what your sales team tells us is converting, not toward the platform metric that's easiest to inflate."
  },
  {
    "title": "Local & International Lead Gen Experience",
    "text": "Based in Dhaka. Building lead campaigns for clients across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "We Look Past the Click",
    "text": "Speed-to-lead, CRM routing, and follow-up process all get reviewed here, not treated as someone else's problem once the form is submitted."
  },
  {
    "title": "Multi-Platform Lead Strategy",
    "text": "Campaigns built across the right combination of Google, Meta, and LinkedIn for your specific buyers."
  },
  {
    "title": "Form & Qualification Design",
    "text": "Forms balanced between completion rate and genuine lead quality, not optimized for one at the expense of the other."
  },
  {
    "title": "Offer & Creative Strategy",
    "text": "Messaging built to attract qualified interest, tested and refined based on what actually converts."
  },
  {
    "title": "CRM Integration & Lead Routing",
    "text": "Leads flowing directly to your sales team the moment they arrive, not sitting unnoticed."
  },
  {
    "title": "Quality-Weighted Reporting",
    "text": "Reporting built around cost-per-qualified-lead, not raw form-fill volume alone."
  },
  {
    "title": "Speed-to-Lead Guidance",
    "text": "Direct input on your follow-up process, since it materially affects whether the campaign's leads actually convert."
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
