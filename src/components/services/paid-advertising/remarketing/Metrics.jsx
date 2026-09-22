import { SectionIntro } from '../../../Kinetic'

const audienceItems = [
  'Site visitors',
  'Product viewers',
  'Cart abandoners',
  'Lead audiences',
  'Customers',
  'Engaged audiences',
  'Recency segments',
]

const conversionItems = [
  'Clicks',
  'CTR',
  'Conversions',
  'Conversion rate',
  'CPA',
  'Purchases',
  'Leads',
  'Qualified leads',
  'Revenue',
  'ROAS',
]

const incrementalItems = [
  'Conversion lift',
  'Audience comparisons',
  'Exclusion tests',
  'Holdout approaches',
  'Blended business metrics',
]

const blocks = [
  {
    title: 'Audience-Level Performance',
    body: 'We can compare audience performance so budget flows to the segments that matter.',
    label: 'We can compare',
    items: audienceItems,
  },
  {
    title: 'Conversion Metrics',
    body: 'Reporting can include the conversion and business metrics that fit the campaign type.',
    label: 'Depending on the campaign, reporting can include',
    items: conversionItems,
  },
  {
    title: 'Attribution',
    body: 'Platform attribution can differ across Google, Meta, TikTok, Pinterest, LinkedIn, Amazon, and analytics systems. We therefore interpret reported conversions within the broader measurement setup rather than assuming every platform-reported conversion is independently incremental.',
  },
  {
    title: 'Incremental Impact',
    body: 'A person who was already highly likely to purchase may also be the person most likely to see and convert from a remarketing ad. That means attributed conversions and incremental conversions are not always the same.',
    label: 'Where the available data supports it, we consider',
    items: incrementalItems,
  },
]

export default function Metrics() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Measurement" title="Measuring Remarketing Performance">
          Remarketing should not be judged by one platform-reported number.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          We evaluate performance using campaign, audience, funnel, and business metrics together.
        </p>

        <div className="space-y-6">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="border-2 border-frame-border bg-frame-bg p-8 md:p-12"
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
                    {block.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {block.body}
                  </p>
                </div>

                {block.items && (
                  <div className="lg:w-1/2">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                      {block.label}
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The goal is to understand whether remarketing is creating additional business value, not
            simply collecting attributed conversions.
          </p>
        </div>
      </div>
    </section>
  )
}