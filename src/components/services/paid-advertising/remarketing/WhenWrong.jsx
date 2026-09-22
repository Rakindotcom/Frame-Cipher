import { SectionIntro } from '../../../Kinetic'

const mistakes = [
  {
    title: 'Generic Audiences Create Generic Messaging',
    body: 'A broad visitor audience may contain very different people, which makes it harder to control the message and budget.',
    label: 'A broad visitor audience may contain',
    items: [
      'First-time visitors',
      'Product researchers',
      'Existing customers',
      'Accidental visitors',
      'Returning prospects',
      'High-intent shoppers',
      'Leads already in your CRM',
    ],
  },
  {
    title: 'Timing Changes Intent',
    body: 'Someone who visited yesterday may need a different message from someone who visited three months ago.',
    items: [
      'We use recency windows based on the product, service, buying cycle, traffic volume, and campaign objective rather than applying one default window to every business.',
    ],
  },
  {
    title: 'Previous Customers Should Not Be Treated Like New Prospects',
    body: 'A customer who already purchased has different needs from someone who has never bought.',
    label: 'A customer who already purchased may need',
    items: [
      'Cross-sell messaging',
      'Upsell offers',
      'Replenishment reminders',
      'New-product messaging',
      'Loyalty campaigns',
    ],
  },
  {
    title: 'Frequency Can Turn Relevance Into Fatigue',
    body: 'Repeated exposure can become wasteful when the same person sees the same creative too often.',
    items: [
      'Where a platform supports manual frequency controls, we use them appropriately.',
      'Where it does not, we manage exposure through audience windows, exclusions, campaign structure, budget, creative rotation, and sequencing.',
    ],
  },
]

export default function WhenWrong() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Context" title="Why Most Remarketing Underperforms">
          A common remarketing setup is one broad website-visitor audience, one creative, and an
          open-ended campaign.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          That approach can make every visitor look the same. Someone who left after four seconds
          has a different level of intent from someone who viewed a product, started checkout, or
          submitted a lead form. Different behavior requires different treatment.
        </p>

        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <div
              key={mistake.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent md:p-12"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {mistake.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {mistake.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  {mistake.label && (
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                      {mistake.label}
                    </p>
                  )}
                  <ul className="grid gap-3">
                    {mistake.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}