import { SectionIntro } from '../../Kinetic'
import { Palette, TrendingUp, Code2, ShieldCheck, Check } from 'lucide-react'

const deliverablesCategories = [
  {
    category: 'Creative Production & Assets',
    icon: Palette,
    items: [
      '12 to 20 scripted, professionally edited short-form video reels, shorts & TikTok videos',
      'High-impact static and animated direct-response ad creative variations (angles, offers, hooks)',
      'Brand photography, product retouching, and motion graphic assets ready for multi-channel launch',
      'Consistent branded social media publishing calendar aligned with commercial seasonal moments',
    ],
  },
  {
    category: 'Paid Media & Performance Management',
    icon: TrendingUp,
    items: [
      'Full campaign architecture setup across Meta (Facebook/Instagram), Google & YouTube Ads',
      'Daily bid management, audience exclusion pruning, and budget reallocation to top-performing ads',
      'Continuous creative testing cycles (A/B testing hooks, thumbnails, copy, and audience segments)',
      'Cross-channel retargeting sequences tailored to specific visitor drop-off stages',
    ],
  },
  {
    category: 'Web, Search & Technical Optimization',
    icon: Code2,
    items: [
      'Design, development, and hosting optimization of dedicated high-speed conversion landing pages',
      'Monthly technical SEO health maintenance (crawl error fixes, schema markup, Core Web Vitals)',
      'Local SEO audit and Google Business Profile citation updates for Bangladesh search domination',
      'Conversion Rate Optimization (CRO) heatmaps, user recording reviews, and form friction testing',
    ],
  },
  {
    category: 'Analytics, CRM & Executive Governance',
    icon: ShieldCheck,
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
    <section className="relative isolate px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="What You Receive in a 360 Partnership.">
          No vague promises or abstract retainers. Every month, your business receives a battle-tested
          suite of high-production assets, paid media execution, technical infrastructure, and executive
          data reporting.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {deliverablesCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <article
                key={cat.category}
                className="group rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#18181B] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-white transition-colors">
                  {cat.category}
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
