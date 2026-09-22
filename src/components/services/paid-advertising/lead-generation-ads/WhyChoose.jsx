import { SectionIntro } from '../../../Kinetic'

const flowItems = [
  'Lead',
  'Qualification',
  'Sales Follow-Up',
  'Opportunity',
  'Customer',
]

const reasons = [
  {
    title: 'Quality-Weighted Optimization',
    body: 'We do not optimize blindly toward the cheapest form fill. Campaign decisions are influenced by lead quality, qualification, sales outcomes, and available revenue data.',
  },
  {
    title: 'CRM + Paid Media Together',
    body: 'Campaigns and CRM workflows are considered as one connected acquisition system.',
  },
  {
    title: 'One In-House Team',
    body: 'Strategy, paid media, tracking, creative coordination, and reporting are handled through one in-house team.',
  },
  {
    title: 'Local & International Markets',
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets including the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    title: 'We Look Past the Click',
    body: 'We consider what happens after the lead is submitted, all the way through to customer.',
  },
  {
    title: 'Sales-Aligned Reporting',
    body: 'Reporting can go beyond platform metrics to include cost per qualified lead, opportunity rate, customer acquisition cost, and revenue where the required CRM data exists.',
  },
  {
    title: 'Client-Owned Accounts & Data',
    body: 'Advertising accounts, campaign data, tracking assets, CRM data, and customer information remain within the appropriate client-owned environment.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Why Framecipher" title="Why Businesses Choose Framecipher for Lead Generation" />

        <div className="mb-12 border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-frame-accent">
            The full journey we connect
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {flowItems.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                <span className="border border-frame-border px-4 py-2 text-sm font-bold uppercase tracking-wider text-frame-fg">
                  {item}
                </span>
                {index < flowItems.length - 1 && (
                  <span className="text-lg font-black text-frame-accent">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
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
        </div>
      </div>
    </section>
  )
}