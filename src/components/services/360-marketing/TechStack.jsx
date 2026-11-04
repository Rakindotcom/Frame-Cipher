import { SectionIntro } from '../../Kinetic'

const techCategories = [
  {
    category: 'Paid Advertising & Media Buying',
    tools: ['Meta Ads Manager (Facebook & Instagram)', 'Google Ads & Performance Max (PMax)', 'YouTube Ads Studio', 'LinkedIn Campaign Manager', 'TikTok Ads Manager'],
  },
  {
    category: 'Analytics, Attribution & Tracking',
    tools: ['Google Analytics 4 (GA4)', 'Meta Conversions API (Server-Side CAPI)', 'Server-Side Google Tag Manager (sGTM)', 'Google Search Console', 'Looker Studio Executive Dashboards'],
  },
  {
    category: 'Web Development, Hosting & CRO',
    tools: ['Next.js & React (Headless Framework)', 'Tailwind CSS (Zero-Runtime Styling)', 'Webflow CMS Architecture', 'Vercel Edge Network (<100ms LCP)', 'Hotjar & Microsoft Clarity (Heatmaps)'],
  },
  {
    category: 'Creative Production & Visual Design',
    tools: ['DaVinci Resolve Studio (Color & Grade)', 'Adobe Premiere Pro & After Effects', 'Figma (Design Tokens & UI/UX)', 'Cinema 4D & Blender (3D Visuals)', 'Sony FX-series 4K Cinema Cameras'],
  },
  {
    category: 'CRM, Automation & Retention',
    tools: ['WhatsApp Business Cloud API', 'HubSpot CRM & Pipeline Automation', 'Klaviyo (E-Commerce Lifecycle Email)', 'Airtable & Zapier Growth Workflows', 'Mailchimp Transactional Engine'],
  },
  {
    category: 'SEO & Market Intelligence',
    tools: ['SEMrush Professional Toolkit', 'Ahrefs Deep Link Architecture', 'Screaming Frog SEO Spider', 'Google Merchant Center', 'Schema.org JSON-LD Structured Data'],
  },
]

export default function TechStack() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-[#FAFAFA] border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              Modern Growth Technology{' '}
              <span className="italic text-frame-accent">&amp; Tooling.</span>
            </>
          }
        >
          We do not rely on outdated spreadsheets or amateur shortcuts. Our team builds upon the
          world&apos;s leading enterprise marketing, advertising, analytics, and development frameworks.
        </SectionIntro>

        <div className="grid border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3 bg-[#09090B]">
          {techCategories.map((cat, idx) => (
            <article
              key={cat.category}
              className="group border-r border-b border-white/[0.08] bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              </div>
              <h3 className="mt-5 font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                {cat.category}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {cat.tools.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-xs sm:text-sm font-normal text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent flex-none" />
                    <span>{t}</span>
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
