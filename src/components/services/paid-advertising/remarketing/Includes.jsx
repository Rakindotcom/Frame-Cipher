import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Tracking & Audience Infrastructure',
    body: 'We build the foundation required for reliable remarketing before scaling audience campaigns.',
    items: [
      'Pixel and tag review',
      'Event configuration',
      'Server-side tracking support',
      'CRM audience integration',
      'Audience definitions',
      'Suppression rules',
      'Conversion tracking',
      'Tracking QA',
      'Data-quality checks',
    ],
  },
  {
    title: 'Audience Segmentation & List Building',
    body: 'We create audience structures based on behavior, intent, recency, customer status, and business objectives.',
    items: [
      'Funnel-stage segmentation',
      'Website visitor audiences',
      'Product and service audiences',
      'Cart and checkout audiences',
      'Lead audiences',
      'Customer audiences',
      'Engagement audiences',
      'CRM audience lists',
      'Recency windows',
      'Audience exclusions',
      'List refresh and hygiene',
    ],
  },
  {
    title: 'Cross-Platform Remarketing',
    body: 'Different platforms provide different audience and campaign controls. We translate the same business funnel into platform-specific strategies rather than forcing identical campaign structures across every channel.',
    items: [
      'Google Display and YouTube remarketing',
      'Meta retargeting',
      'Pinterest remarketing',
      'TikTok audience campaigns',
      'LinkedIn website and customer audiences where available',
      'Amazon audience and display strategies where supported',
      'Cross-platform messaging alignment',
      'Audience suppression',
      'Performance comparison',
    ],
  },
  {
    title: 'Dynamic Catalog Remarketing',
    body: 'For product businesses, dynamic remarketing can show relevant products or services based on previous interactions with the catalog.',
    items: [
      'Product catalog setup',
      'Feed review',
      'Dynamic audience configuration',
      'Product-view audiences',
      'Cart audiences',
      'Product-specific creative',
      'Cross-sell logic',
      'Upsell logic',
      'Feed troubleshooting',
      'Product availability checks',
    ],
  },
  {
    title: 'Lead & Service-Based Remarketing',
    body: 'Remarketing is not limited to ecommerce. For service and lead-generation businesses, we can build audiences around actions that indicate interest and intent.',
    label: 'Actions such as',
    items: [
      'Service-page views',
      'Pricing-page visits',
      'Form starts',
      'Form abandonment',
      'Content engagement',
      'Webinar interaction',
      'Consultation-page visits',
      'Previous leads',
      'Qualified prospects',
    ],
  },
  {
    title: 'Sequential Messaging',
    body: 'One message does not need to carry the entire conversion journey. We can structure creative sequences around different stages.',
    label: 'For example',
    items: [
      'Early stage: reintroduce the product, service, or brand',
      'Consideration stage: address benefits, objections, proof, and differentiation',
      'High-intent stage: use stronger conversion-focused messaging or relevant offers',
      'Post-conversion stage: move customers into cross-sell, loyalty, or retention campaigns',
    ],
  },
  {
    title: 'Frequency & Exposure Management',
    body: 'The goal is to remain visible without wasting impressions on the same person.',
    items: [
      'Frequency review',
      'Exposure monitoring',
      'Audience-window adjustments',
      'Creative rotation',
      'Creative fatigue monitoring',
      'Budget control',
      'Audience suppression',
      'Campaign overlap review',
    ],
  },
  {
    title: 'Creative Testing & Refresh',
    body: 'Remarketing creative can become stale when the same message runs for too long.',
    label: 'We can test',
    items: [
      'Different offers',
      'Product angles',
      'Social proof',
      'Testimonials',
      'Benefits',
      'Objection handling',
      'Visual formats',
      'Headlines',
      'Calls to action',
      'Sequential messages',
    ],
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Services" title="Remarketing Services">
          Everything required to build, run, and improve a remarketing system around real audience
          behavior.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          The objective is consistent strategy, not identical implementation. Creative decisions are
          guided by audience stage and performance data.
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12 transition-colors hover:border-frame-accent"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {service.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {service.label || 'What We Do'}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
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
      </div>
    </section>
  )
}