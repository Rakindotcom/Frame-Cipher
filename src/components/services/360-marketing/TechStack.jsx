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
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Infrastructure"
          title="Modern Growth Technology &amp; Tooling."
        >
          We do not rely on outdated spreadsheets or amateur shortcuts. Our team builds upon the
          world&apos;s leading enterprise marketing, advertising, analytics, and development frameworks.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat) => (
            <article
              key={cat.category}
              className="bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-accent">
                {cat.category}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {cat.tools.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-frame-muted-fg">
                    <span className="h-1.5 w-1.5 bg-frame-accent flex-none" />
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
