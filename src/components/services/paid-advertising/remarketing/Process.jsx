import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Tracking & Data Audit',
    body: 'We review the existing tracking and data infrastructure before building campaigns on top of it.',
    items: [
      'Pixels',
      'Tags',
      'Events',
      'Server-side tracking',
      'CRM data',
      'Conversion signals',
      'Audience lists',
      'Exclusions',
    ],
  },
  {
    title: 'Segmentation Strategy',
    body: 'We map the customer journey and define the audience structure before touching the ad account.',
    items: [
      'Audience stages',
      'Recency windows',
      'Conversion exclusions',
      'Customer segments',
      'Funnel movement',
      'Messaging requirements',
    ],
  },
  {
    title: 'Audience & Suppression Setup',
    body: 'We build the required audiences and exclusion logic across the relevant platforms. The exact implementation depends on platform capabilities, traffic volume, consent requirements, and available data.',
  },
  {
    title: 'Campaign & Creative Setup',
    body: 'We build the campaigns, assign the appropriate audiences, prepare creative, configure available frequency controls, and establish the reporting framework.',
  },
  {
    title: 'Launch & Exposure Tuning',
    body: 'After launch, we monitor the evidence and adjust exposure and messaging based on it.',
    label: 'After launch, we monitor',
    items: [
      'Audience size',
      'Frequency',
      'Creative response',
      'Conversion rate',
      'CPA',
      'Revenue',
      'Campaign overlap',
      'Audience movement',
    ],
  },
  {
    title: 'Ongoing Optimization & Reporting',
    body: 'Reporting is structured around meaningful audience and business segments rather than one blended remarketing number.',
    label: 'We continuously review',
    items: [
      'Audience performance',
      'Recency',
      'Creative fatigue',
      'Suppression',
      'Budget allocation',
      'Conversion quality',
      'Cross-platform performance',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Process" title="Our Remarketing Process">
          We apply the same structured method to every remarketing program, with the specific
          implementation adapted to each business.
        </SectionIntro>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {step.body}
                  </p>
                </div>

                {step.items && (
                  <div className="lg:w-1/2">
                    {step.label && (
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                        {step.label}
                      </p>
                    )}
                    <ul className="grid gap-3 md:grid-cols-2">
                      {step.items.map((item) => (
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
      </div>
    </section>
  )
}