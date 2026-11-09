import { SectionIntro } from '../../Kinetic'
import { Megaphone, BarChart3, Code2, Video, Cpu, Search, Check } from 'lucide-react'

const techCategories = [
  {
    category: 'Paid Advertising & Media Buying',
    icon: Megaphone,
    tools: ['Meta Ads Manager (Facebook & Instagram)', 'Google Ads & Performance Max (PMax)', 'YouTube Ads Studio', 'LinkedIn Campaign Manager', 'TikTok Ads Manager'],
  },
  {
    category: 'Analytics, Attribution & Tracking',
    icon: BarChart3,
    tools: ['Google Analytics 4 (GA4)', 'Meta Conversions API (Server-Side CAPI)', 'Server-Side Google Tag Manager (sGTM)', 'Google Search Console', 'Looker Studio Executive Dashboards'],
  },
  {
    category: 'Web Development, Hosting & CRO',
    icon: Code2,
    tools: ['Next.js & React (Headless Framework)', 'Tailwind CSS (Zero-Runtime Styling)', 'Webflow CMS Architecture', 'Vercel Edge Network (<100ms LCP)', 'Hotjar & Microsoft Clarity (Heatmaps)'],
  },
  {
    category: 'Creative Production & Visual Design',
    icon: Video,
    tools: ['DaVinci Resolve Studio (Color & Grade)', 'Adobe Premiere Pro & After Effects', 'Figma (Design Tokens & UI/UX)', 'Cinema 4D & Blender (3D Visuals)', 'Sony FX-series 4K Cinema Cameras'],
  },
  {
    category: 'CRM, Automation & Retention',
    icon: Cpu,
    tools: ['WhatsApp Business Cloud API', 'HubSpot CRM & Pipeline Automation', 'Klaviyo (E-Commerce Lifecycle Email)', 'Airtable & Zapier Growth Workflows', 'Mailchimp Transactional Engine'],
  },
  {
    category: 'SEO & Market Intelligence',
    icon: Search,
    tools: ['SEMrush Professional Toolkit', 'Ahrefs Deep Link Architecture', 'Screaming Frog SEO Spider', 'Google Merchant Center', 'Schema.org JSON-LD Structured Data'],
  },
]

export default function TechStack() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Modern Growth Technology & Tooling.">
          We do not rely on outdated spreadsheets or amateur shortcuts. Our team builds upon the
          world&apos;s leading enterprise marketing, advertising, analytics, and development frameworks.
        </SectionIntro>

        <div className="grid border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3 bg-[#09090B]">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <article
                key={cat.category}
                className="group border-r border-b border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white transition-colors">
                  {cat.category}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {cat.tools.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm font-normal text-zinc-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                      <span>{t}</span>
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
