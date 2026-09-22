import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    title: 'Platform Pixels & Tags',
    body: 'We can review and configure relevant tracking systems and verify the events that support audiences and conversions.',
    label: 'Tracking systems',
    items: [
      'Google Ads tags',
      'Meta Pixel',
      'Pinterest Tag',
      'TikTok Pixel',
      'LinkedIn Insight Tag',
      'Other supported platform tracking',
    ],
  },
  {
    title: 'Server-Side Tracking',
    body: 'Server-side tracking can complement browser-based tracking by sending selected event data directly from business systems.',
    label: 'We can help evaluate',
    items: [
      'Server-side event implementation',
      'Conversion APIs',
      'Event matching',
      'Deduplication',
      'Data quality',
      'Event validation',
    ],
  },
  {
    title: 'First-Party Data & CRM',
    body: 'First-party data can become an important remarketing asset as privacy requirements and platform measurement systems evolve.',
    label: 'We can work with customer and lead data for',
    items: [
      'Customer matching',
      'Exclusions',
      'Win-back',
      'Cross-sell',
      'Lead nurturing',
      'Existing-customer campaigns',
    ],
  },
  {
    title: 'Audience Suppression & Deduplication',
    body: 'Suppression rules help prevent people from sitting in the wrong audience after their behavior changes.',
    label: 'Examples include',
    items: [
      'Excluding purchasers from acquisition campaigns',
      'Removing converted leads from lead-generation remarketing',
      'Excluding existing customers from new-customer campaigns',
      'Moving audiences between funnel stages',
      'Preventing overlapping audience strategies where possible',
    ],
  },
]

export default function Tracking() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Infrastructure" title="Tracking Infrastructure for Modern Remarketing">
          Good remarketing depends on accurate audience signals.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Before building campaigns, we review the tracking and data infrastructure that supports
          audience creation, exclusions, conversion measurement, and optimization.
        </p>

        <div className="space-y-6">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12 transition-colors hover:border-frame-accent"
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Server-side tracking is not a replacement for every browser signal. It is part of a
            broader measurement architecture. Audience use depends on platform requirements,
            consent, data quality, and campaign eligibility.
          </p>
        </div>
      </div>
    </section>
  )
}