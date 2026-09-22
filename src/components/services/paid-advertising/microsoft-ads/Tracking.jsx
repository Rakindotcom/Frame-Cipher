import { SectionIntro } from '../../../Kinetic'

const methods = [
  {
    title: 'UET',
    body: 'Universal Event Tracking provides the website activity data needed for Microsoft Advertising conversion tracking and remarketing workflows. We configure and test the relevant events rather than assuming the tag is working simply because it has been installed.',
  },
  {
    title: 'Conversion Goals',
    body: 'Microsoft Advertising supports conversion goals for actions such as purchases, leads, events, and other measurable outcomes. We align conversion goals with the actual business objective.',
  },
  {
    title: 'GA4 & UTM Tracking',
    body: 'We use consistent UTM structures where appropriate so Microsoft Ads traffic can be reviewed alongside other acquisition channels. This helps identify differences between platform reporting and broader analytics.',
  },
  {
    title: 'CRM & Lead Quality Tracking',
    body: 'For lead-generation campaigns, a lead is only the beginning of the sales process. Where CRM data is available, we can help evaluate leads, qualified leads, opportunities, customers, revenue, cost per qualified lead, and cost per acquisition.',
  },
  {
    title: 'Revenue & ROAS Measurement',
    body: 'For ecommerce and measurable sales campaigns, we monitor revenue and acquisition costs where the available data supports meaningful analysis. ROAS can be useful, but it should be interpreted alongside conversion volume, sales cycle, attribution, margins, and customer value.',
  },
]

export default function Tracking() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Measurement" title="Tracking Microsoft Ads From Click to Conversion">
          Reliable measurement connects advertising spend to actual business outcomes rather than
          platform metrics alone.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {methods.map((method) => (
            <div
              key={method.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {method.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {method.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Microsoft Ads and Google Ads can complement each other, but they are not identical. The
            right approach depends on the market, audience, search demand, budget, offer, and
            existing acquisition strategy. For many businesses, the two platforms can work together
            rather than being treated as mutually exclusive.
          </p>
        </div>
      </div>
    </section>
  )
}