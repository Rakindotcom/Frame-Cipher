import { SectionIntro } from '../../../Kinetic'

const reportingMetrics = [
  'Spend',
  'Impressions',
  'Clicks',
  'CTR',
  'CPC',
  'Conversions',
  'Conversion rate',
  'CPA',
  'Leads',
  'Qualified leads',
  'Purchases',
  'Revenue',
  'ROAS',
  'Search-term performance',
  'Audience performance',
  'Campaign performance',
]

const reasons = [
  {
    title: 'Microsoft-Specific Strategy',
    body: 'We do not simply duplicate Google Ads and call the job complete. We adapt keyword strategy, campaign structure, network settings, audience layers, conversion goals, and bidding to the Microsoft Advertising environment.',
  },
  {
    title: 'LinkedIn Profile Targeting Used Deliberately',
    body: 'Professional audience signals can be valuable for B2B and other high-consideration campaigns. We evaluate them as part of the strategy rather than leaving them unused by default.',
  },
  {
    title: 'Clean Google Ads Migration',
    body: 'We can use Microsoft\u2019s import workflow to accelerate account setup, then review and adapt the imported structure before campaigns run.',
  },
  {
    title: 'One In-House Team',
    body: 'Strategy, campaign management, tracking, creative coordination, and reporting are handled through one in-house team. You do not need to coordinate separate vendors for every part of the campaign.',
  },
  {
    title: 'Client-Owned Accounts & Assets',
    body: 'Your advertising accounts, tracking assets, campaign data, catalogs, and business assets remain under your ownership. We work within the appropriate client-owned advertising environment.',
  },
  {
    title: 'Bangladesh + International Markets',
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets. We adapt campaign structure, creative, audience strategy, language, offers, and measurement to the target market.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Why Framecipher" title="Why Businesses Choose Framecipher for Microsoft Ads" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {reason.body}
              </p>
            </div>
          ))}

          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Transparent Reporting
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Reporting can include the metrics that matter to the campaign rather than a fixed
              dashboard of volume metrics.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {reportingMetrics.map((metric) => (
                <li
                  key={metric}
                  className="flex items-start gap-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-frame-accent pl-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
              For B2B campaigns, reporting can also extend into lead quality and downstream sales
              data where CRM information is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}