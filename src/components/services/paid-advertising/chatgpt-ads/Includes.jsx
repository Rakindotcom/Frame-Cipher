import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Account & Campaign Setup',
    body: [
      'A strong ChatGPT Ads campaign starts with the right structure. We organize the campaign around a defined business goal, including campaign objectives, budgets, locations, dates, ad groups, ads, and landing pages.',
    ],
    bullets: [
      'Campaign and ad-group structure',
      'Campaign objective selection',
      'Budget planning',
      'Location targeting',
      'Product or service segmentation',
      'Landing-page alignment',
      'Conversion event planning',
      'Campaign naming and organization',
      'Initial creative structure',
      'Pre-launch readiness checks',
    ],
    note: 'OpenAI Ads Manager supports campaign, ad-group, and ad-level workflows for creating and managing ChatGPT advertising campaigns.',
  },
  {
    title: 'Context & Intent Targeting',
    body: [
      'Context is one of the key differences between ChatGPT Ads and traditional keyword advertising. We develop context hints around genuine customer needs, buying situations, use cases, and product or service relevance.',
    ],
    bullets: [
      'Customer intent',
      'Use cases',
      'Product categories',
      'Service needs',
      'Pain points',
      'Buying situations',
      'Customer characteristics',
      'Geographic relevance',
    ],
    note: 'Where different customer needs require different messaging or landing pages, we separate them into focused ad groups. The aim is not to fill an ad group with loosely related terms. The aim is to give the advertising system useful context around the situations where your offer can genuinely help.',
  },
  {
    title: 'Ad Creative & Copy',
    body: [
      'ChatGPT Ads appear inside an active research or decision-making environment. The creative therefore needs to communicate value quickly and clearly.',
    ],
    bullets: [
      'Headlines',
      'Descriptions',
      'Image creative',
      'Value propositions',
      'Use-case messaging',
      'Benefit-led variations',
      'Calls to action',
      'Landing-page alignment',
    ],
    note: 'OpenAI\u2019s current ad format supports a headline, description, landing page, and image asset alongside advertiser identification. We build multiple meaningful variations where testing makes sense. Each variation should test a different message, benefit, use case, or angle rather than simply changing a few words.',
  },
  {
    title: 'Conversion Tracking & Measurement',
    body: [
      'Advertising without reliable measurement can produce misleading performance data. Framecipher builds the measurement foundation needed to understand what happens after an ad interaction.',
    ],
    bullets: [
      'Conversion event planning',
      'OpenAI Pixel implementation',
      'Conversions API setup',
      'Event validation',
      'UTM tracking',
      'Landing-page analytics',
      'Conversion reporting',
      'Data quality checks',
    ],
    note: 'OpenAI currently supports conversion measurement through the OpenAI Pixel, Conversions API, or both. Advertisers can also preserve the OpenAI click reference and use tracking parameters to connect advertising traffic with other analytics systems. We also account for differences between Ads Manager and third-party analytics. Attribution windows, timestamps, consent settings, browser conditions, deduplication, campaign configuration, and modeled conversions can all affect reported totals.',
  },
  {
    title: 'Campaign Management & Optimization',
    body: [
      'Launching a campaign is only the beginning. We monitor performance and use available data to identify practical opportunities for improvement.',
    ],
    bullets: [
      'Budget adjustments',
      'Ad-group refinement',
      'Context-hint refinement',
      'Creative testing',
      'Landing-page alignment',
      'Bid strategy review',
      'Conversion optimization',
      'Underperforming variation analysis',
      'Campaign structure improvements',
    ],
    note: 'We do not treat every early performance change as a reason for an immediate adjustment. A new campaign needs enough relevant data to separate meaningful signals from normal performance variation.',
  },
  {
    title: 'Reporting & Performance Analysis',
    body: [
      'Your reporting should answer business questions, not simply display platform metrics.',
    ],
    bullets: [
      'Impressions',
      'Clicks',
      'CTR',
      'CPC',
      'CPM',
      'Spend',
      'Conversions',
      'Conversion rate',
      'Cost per conversion',
      'Campaign-level trends',
      'Creative performance',
      'Ad-group performance',
      'Landing-page performance',
    ],
    note: 'OpenAI Ads Manager currently provides performance reporting across metrics such as impressions, clicks, spend, CTR, average CPC, average CPM, and conversions. We turn those numbers into practical observations. You should understand what changed, what was tested, what the data suggests, and what should be tested next.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="Our ChatGPT Ads Management Services"
        >
          ChatGPT Ads management covers campaign setup, context targeting, creative, conversion
          tracking, optimization, and reporting. Each part is managed as one connected process.
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