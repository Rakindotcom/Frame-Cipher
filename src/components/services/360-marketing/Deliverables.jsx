import { SectionIntro } from '../../Kinetic'

const deliverablesCategories = [
  {
    category: 'Creative Production & Assets',
    items: [
      '12 to 20 scripted, professionally edited short-form video reels, shorts & TikTok videos',
      'High-impact static and animated direct-response ad creative variations (angles, offers, hooks)',
      'Brand photography, product retouching, and motion graphic assets ready for multi-channel launch',
      'Consistent branded social media publishing calendar aligned with commercial seasonal moments',
    ],
  },
  {
    category: 'Paid Media & Performance Management',
    items: [
      'Full campaign architecture setup across Meta (Facebook/Instagram), Google & YouTube Ads',
      'Daily bid management, audience exclusion pruning, and budget reallocation to top-performing ads',
      'Continuous creative testing cycles (A/B testing hooks, thumbnails, copy, and audience segments)',
      'Cross-channel retargeting sequences tailored to specific visitor drop-off stages',
    ],
  },
  {
    category: 'Web, Search & Technical Optimization',
    items: [
      'Design, development, and hosting optimization of dedicated high-speed conversion landing pages',
      'Monthly technical SEO health maintenance (crawl error fixes, schema markup, Core Web Vitals)',
      'Local SEO audit and Google Business Profile citation updates for Bangladesh search domination',
      'Conversion Rate Optimization (CRO) heatmaps, user recording reviews, and form friction testing',
    ],
  },
  {
    category: 'Analytics, CRM & Executive Governance',
    items: [
      'Server-side Meta CAPI and Google Analytics 4 (GA4) continuous conversion verification',
      'Automated WhatsApp and email lead nurturing workflows connected to your sales team',
      'Live 24/7 Looker Studio business intelligence dashboard displaying blended CAC, ROAS & LTV',
      'Bi-weekly strategic executive growth calls and direct daily communication via dedicated Slack/WhatsApp',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Concrete Outputs"
          title="What You Receive in a 360 Partnership."
        >
          No vague promises or abstract retainers. Every month, your business receives a battle-tested
          suite of high-production assets, paid media execution, technical infrastructure, and executive
          data reporting.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-2">
          {deliverablesCategories.map((cat) => (
            <article
              key={cat.category}
              className="bg-frame-bg p-7 md:p-10 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-accent">
                {cat.category}
              </h3>
              <ul className="mt-6 space-y-4">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none bg-frame-accent" />
                    <span className="text-sm font-medium leading-relaxed text-frame-fg/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
