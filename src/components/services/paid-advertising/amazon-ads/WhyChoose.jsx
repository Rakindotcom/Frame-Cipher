import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Amazon-Specific Advertising Strategy',
    body: 'We do not treat Amazon as another version of Google Ads. Campaigns are structured around Amazon search behavior, product targeting, marketplace competition, product economics, and the customer journey inside Amazon.',
  },
  {
    title: 'Advertising + Listing Readiness',
    body: 'We evaluate the product detail page alongside the advertising campaign so obvious conversion barriers are identified before budgets are scaled.',
  },
  {
    title: 'ACOS + TACOS Context',
    body: 'We report advertising efficiency alongside broader sales performance rather than treating one campaign metric as the entire business picture.',
  },
  {
    title: 'Margin-Aware Campaign Management',
    body: 'ACOS targets are considered alongside product economics, contribution margin, and growth goals.',
  },
  {
    title: 'Cross-Channel Coordination',
    body: 'Where businesses also use Google Ads, Meta Ads, or other acquisition channels, we can coordinate messaging and measurement with Amazon Attribution where appropriate.',
  },
  {
    title: 'One In-House Team',
    body: 'Strategy, paid advertising, tracking, creative coordination, and reporting are handled through one in-house team. You do not need to coordinate separate vendors for every part of the growth system.',
  },
  {
    title: 'Client-Owned Accounts & Assets',
    body: 'Your Amazon advertising account, product data, campaign history, reporting data, and business assets remain under your ownership. We work within the appropriate client-owned environment.',
  },
  {
    title: 'Bangladesh + International Marketplaces',
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh as well as brands selling through international Amazon marketplaces. We adapt campaign strategy to the specific marketplace rather than assuming the same product, keyword, budget, or competitive environment exists everywhere.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Why Framecipher" title="Why Businesses Choose Framecipher for Amazon Ads" />

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