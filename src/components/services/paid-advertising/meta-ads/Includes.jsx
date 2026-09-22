import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Account Audit & Campaign Strategy',
    body: [
      'We begin by understanding the business before changing the account.',
      'For existing campaigns, we review the business and ad account structure, campaign objectives, conversion events, Pixel configuration, Conversions API setup where applicable, audience strategy, creative performance, frequency, cost per result, budget distribution, landing-page experience, and existing campaign history. For new campaigns, we define the objective, offer, customer journey, measurement framework, creative direction, and initial testing plan before launch.',
    ],
    bullets: [
      'Business and ad account structure',
      'Campaign objectives',
      'Conversion events',
      'Pixel configuration',
      'Conversions API setup where applicable',
      'Audience strategy',
      'Creative performance',
      'Frequency',
      'Cost per result',
      'Budget distribution',
      'Landing-page experience',
      'Existing campaign history',
    ],
    note: 'The result is a strategy built around the business rather than a generic Meta Ads template.',
  },
  {
    title: 'Creative Strategy & Production',
    body: [
      'Creative is one of the most important inputs in Meta advertising, particularly when campaigns are reaching people who are not actively searching for the product.',
      'We do not treat "creative testing" as changing colors or headlines randomly. Each variation should test a meaningful hypothesis about the audience, offer, message, format, or proof.',
    ],
    bullets: [
      'Customer problems',
      'Product benefits',
      'Offers',
      'Proof',
      'Objections',
      'Demonstrations',
      'Before-and-after narratives where appropriate',
      'Product use cases',
      'Testimonials',
      'Social proof',
      'Brand differentiation',
    ],
    bullets2Label: 'Creative formats can include',
    bullets2: [
      'Static ads',
      'Carousels',
      'Short-form video',
      'Reels concepts',
      'Story creatives',
      'Product demonstrations',
      'UGC-style concepts',
      'Multiple hooks and opening frames',
    ],
    note: "Meta's current advertising ecosystem also includes Advantage+ creative tools that can help adapt or optimize creative assets for delivery, making creative diversity and asset quality increasingly important.",
  },
  {
    title: 'Audience Strategy & Advantage+ Targeting',
    body: [
      "Meta's targeting system has evolved beyond simply selecting interests and demographics. We combine appropriate first-party signals and audience inputs with Meta's automated delivery systems.",
      "Meta's current Advantage+ audience system allows advertisers to provide audience information and signals while using Meta's delivery system to find people more likely to respond. Meta's own Blueprint training still covers detailed targeting, Custom Audiences, Lookalike Audiences, and Advantage+ audience as parts of audience planning. We therefore do not build a campaign around the assumption that a long list of interests automatically creates better targeting.",
    ],
    bullets: [
      'Location',
      'Age and language where relevant',
      'Customer lists',
      'Website audiences',
      'Engagement audiences',
      'Purchase audiences',
      'Custom Audiences',
      'Lookalike signals',
      'CRM data where supported',
      'First-party conversion data',
      'Advantage+ audience',
    ],
    note: 'The audience strategy starts with the customer and the data available to teach the system, not with a long list of interests automatically creating better targeting.',
  },
  {
    title: 'Pixel, Conversions API & Conversion Tracking',
    body: [
      'Meta optimization depends on useful conversion signals. We configure and review measurement for the actions that matter to the business.',
      'Where appropriate, we use Meta Pixel together with Conversions API to improve the quality and resilience of event data. Conversions API creates a direct connection between business data and Meta technologies and can support measurement and campaign optimization. Meta\u2019s current training specifically presents CAPI as a way to improve ad delivery, measurement, and reporting. We also review event configuration, data consistency, and duplicate-event handling where both browser and server-side signals are used.',
    ],
    bullets: [
      'Purchases',
      'Leads',
      'Add to cart',
      'Checkout',
      'Registration',
      'Calls',
      'Messages',
      'Appointment requests',
      'Other defined business events',
    ],
    note: 'For lead-generation businesses, measurement can extend beyond the submitted form where the technical setup supports qualified-lead or downstream sales feedback.',
  },
  {
    title: 'Campaign, Budget & Delivery Optimization',
    body: [
      'Once campaigns are collecting reliable data, we monitor how spend is distributed and how campaigns are responding.',
      'We do not make major changes simply to keep an account "active." The objective is to identify what the data is telling us, determine whether enough evidence exists to make a change, and then test or implement that change with a clear reason.',
    ],
    bullets: [
      'Budget allocation',
      'Cost-per-result analysis',
      'Conversion-volume analysis',
      'Conversion-value analysis',
      'Campaign consolidation',
      'Audience refinement',
      'Creative allocation',
      'Placement analysis',
      'Bid and delivery settings where applicable',
      'Scaling and budget pacing',
      'Underperforming campaign restructuring',
    ],
    note: 'Changes are guided by evidence, not constant activity for the sake of activity.',
  },
  {
    title: 'Landing Page & Funnel Alignment',
    body: [
      'The ad is only one part of the acquisition system. We review whether the post-click or post-message experience supports the same promise that the creative makes.',
    ],
    bullets: [
      'Offer clarity',
      'Landing-page relevance',
      'Page speed',
      'Mobile usability',
      'Call-to-action clarity',
      'Trust signals',
      'Form friction',
      'Product-page quality',
      'Checkout experience',
      'Messenger or WhatsApp handoff',
    ],
    note: 'Where needed, our in-house web and creative capabilities can support improvements to the landing page or conversion flow rather than treating the ad account as an isolated system.',
  },
  {
    title: 'Creative Testing & Fatigue Management',
    body: [
      'Meta performance can change as audiences, competition, offers, and creative exposure change.',
      'Creative refresh is based on actual performance and audience exposure, not a rigid rule that every ad must be replaced after an arbitrary number of days.',
    ],
    bullets: [
      'Frequency',
      'Cost per result',
      'CTR',
      'Conversion rate',
      'Creative-level performance',
      'Audience size',
      'Spend concentration',
      'Comment sentiment',
      'Purchase or lead quality',
    ],
    note: 'We keep multiple meaningful creative angles available so the account is not dependent on one winning asset.',
  },
  {
    title: 'Reporting & Attribution',
    body: [
      'Reporting should explain what happened and what should happen next. We distinguish platform-reported performance from broader business results wherever the measurement setup allows us to do so.',
    ],
    bullets: [
      'Ad spend',
      'Reach',
      'Impressions',
      'Frequency',
      'Clicks',
      'Leads',
      'Purchases',
      'Cost per result',
      'Conversion rate',
      'Revenue where measurable',
      'ROAS where meaningful',
      'Creative performance',
      'Audience performance',
      'Market performance',
      'Key changes',
      'Recommended next actions',
    ],
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="What Our Meta Ads Management Service Includes"
        >
          Meta Ads management covers strategy, creative, audience inputs, conversion tracking,
          budget optimization, and reporting. Each part is managed as one connected process.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.bullets2?.length > 0 && (
                  <div className="mt-5">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      {item.bullets2Label}:
                    </span>
                    <ul className="mt-2 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                      {item.bullets2.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.note && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}