import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'ICP, Buying Committee & Audience Strategy',
    body: [
      'We start with the customer you actually want to acquire.',
      "Where appropriate, we evaluate LinkedIn's Auto-Targeting, Buyer Groups, Predictive Audiences, Audience Expansion, Matched Audiences, and other available audience tools.",
    ],
    bullets: [
      'Ideal customer profile',
      'Target industries',
      'Company size',
      'Job functions',
      'Seniority',
      'Geographic markets',
      'Buying-committee roles',
      'Named target accounts',
      'Existing customer segments',
      'Prospect lists',
      'Website audiences',
      'First-party customer data',
    ],
    note: "LinkedIn's Buyer Groups and Predictive Audiences are designed to help advertisers reach professionals involved in business purchase decisions and identify audiences likely to engage or convert based on available signals. The goal is not to build the largest possible audience. It is to build an audience that reflects the commercial opportunity.",
  },
  {
    title: 'Campaign Strategy & Objective Selection',
    body: [
      'A B2B campaign needs a clear job. We choose the campaign objective, audience, format, offer, and conversion path around that goal.',
    ],
    bullets: [
      'Building awareness in a target market',
      'Generating website engagement',
      'Promoting thought leadership',
      'Collecting leads',
      'Driving qualified leads',
      'Supporting account-based campaigns',
      'Creating sales opportunities',
    ],
    note: "LinkedIn's Campaign Manager supports objectives across awareness, consideration, and conversion, with available options depending on the campaign setup and format.",
  },
  {
    title: 'B2B Creative & Messaging Strategy',
    body: [
      'Professional audiences still need a compelling reason to stop, read, and act.',
    ],
    bullets: [
      'Business problems',
      'Commercial outcomes',
      'Industry challenges',
      'Product differentiation',
      'Research and insights',
      'Case studies',
      'Proof',
      'Product demonstrations',
      'Thought leadership',
      'Clear next steps',
    ],
    bullets2Label: 'Creative testing can compare',
    bullets2: [
      'Problem-led messaging',
      'Outcome-led messaging',
      'Educational content',
      'Proof-led messaging',
      'Industry-specific messaging',
      'Different offers',
      'Different CTAs',
      'Different formats',
    ],
    note: 'The objective is not to create more variations for the sake of activity. It is to identify which message creates meaningful engagement from the right professional audience.',
  },
  {
    title: 'Lead Gen Forms & Qualification',
    body: [
      'Lead generation needs to balance conversion simplicity with lead quality.',
    ],
    bullets: [
      'Form headline',
      'Offer',
      'Description',
      'Fields',
      'Qualification questions',
      'Privacy requirements',
      'Confirmation message',
      'Follow-up process',
      'Lead routing',
      'CRM handoff',
    ],
    note: 'LinkedIn Lead Gen Forms can automatically populate professional information and can include standard and custom fields. LinkedIn also supports hidden fields that can carry campaign or source information into lead reporting and downstream systems. For higher-value B2B offers, carefully selected qualification fields can help sales teams identify prospects that fit the actual customer profile.',
  },
  {
    title: 'Insight Tag, Conversions API & CRM Measurement',
    body: [
      'The first lead is often only the beginning of a B2B sales process.',
    ],
    bullets: [
      'LinkedIn Insight Tag',
      'Website conversion tracking',
      'Conversions API',
      'CRM-connected conversion data',
      'Qualified-lead measurement',
      'Offline conversion data',
      'UTM tracking',
      'Conversion values',
      'Lead-source attribution',
    ],
    note: 'Where supported by the technical setup, measurement can progress from Ad \u2192 Lead \u2192 Qualified Lead \u2192 Opportunity \u2192 Customer rather than stopping at the first form submission. LinkedIn currently supports qualified-lead optimization using qualified-lead conversion data from Conversions API or connected CRM data.',
  },
  {
    title: 'Qualified Lead & Pipeline Optimization',
    body: [
      'For B2B advertising, the cheapest lead is not necessarily the most valuable lead.',
    ],
    bullets: [
      'Lead-to-qualified-lead rate',
      'Sales acceptance',
      'Qualified opportunities',
      'Cost per qualified lead',
      'Opportunity creation',
      'Pipeline contribution',
      'Revenue where measurable',
      'Customer progression',
    ],
    note: 'Where sufficient qualified-lead data is available, LinkedIn can use that information as an optimization signal rather than optimizing solely toward raw lead volume. This creates a more useful feedback loop between advertising and sales.',
  },
  {
    title: 'Campaign, Budget & Bid Optimization',
    body: [
      'We continuously review how budget is distributed across the aspects that drive performance.',
    ],
    bullets: [
      'Audiences',
      'Campaign objectives',
      'Formats',
      'Target accounts',
      'Markets',
      'Retargeting audiences',
      'Creative variations',
    ],
    bullets2Label: 'Optimization may include',
    bullets2: [
      'Budget reallocation',
      'Audience refinement',
      'Campaign consolidation',
      'Creative rotation',
      'Bid and delivery adjustments',
      'Offer testing',
      'Geographic refinement',
      'Retargeting expansion',
      'Scaling campaigns that generate qualified outcomes',
    ],
    note: 'The goal is to make changes based on evidence rather than constantly altering an account simply to show activity.',
  },
  {
    title: 'Landing Page & Funnel Alignment',
    body: [
      'A strong LinkedIn ad can still underperform when the post-click experience does not support the promise made in the ad.',
    ],
    bullets: [
      'Offer clarity',
      'Landing-page relevance',
      'Business credibility',
      'Proof and trust signals',
      'Form friction',
      'Mobile experience',
      'Call-to-action clarity',
      'Demo or consultation flow',
      'Thank-you experience',
      'CRM handoff',
    ],
    note: 'Where needed, our in-house web and creative capabilities can support landing-page and conversion-flow improvements.',
  },
  {
    title: 'Sales-Aligned Reporting & Attribution',
    body: [
      'B2B advertising should be measured against the sales process wherever the available data allows.',
    ],
    bullets: [
      'Spend',
      'Impressions',
      'Reach',
      'Clicks',
      'Engagement',
      'Leads',
      'Cost per lead',
      'Qualified leads',
      'Cost per qualified lead',
      'Conversion rate',
      'Opportunities',
      'Pipeline value where measurable',
      'Revenue where measurable',
      'Audience performance',
      'Creative performance',
      'Market performance',
      'Key changes',
      'Next actions',
    ],
    note: 'The reporting model should reflect the actual sales journey instead of treating every form submission as an equal business result.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="What Our LinkedIn Ads Management Service Includes"
        >
          LinkedIn Ads management covers ICP research, professional audience targeting, creative,
          Lead Gen Forms, conversion tracking, CRM measurement, and sales-aligned reporting.
          Each part is managed as one connected process.
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