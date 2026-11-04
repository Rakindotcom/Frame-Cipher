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
    <section className="relative isolate px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              What You Receive in a{' '}
              <span className="italic text-frame-accent">360 Partnership.</span>
            </>
          }
        >
          No vague promises or abstract retainers. Every month, your business receives a battle-tested
          suite of high-production assets, paid media execution, technical infrastructure, and executive
          data reporting.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {deliverablesCategories.map((cat, idx) => (
            <article
              key={cat.category}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#151518]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              </div>
              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-tight tracking-tight text-white group-hover:text-frame-accent transition-colors">
                {cat.category}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-frame-accent" />
                    <span className="text-sm font-normal leading-relaxed text-zinc-300">
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
