import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Site Audit & Diagnostic Analysis',
    description: 'We diagnose why your current website is underperforming, identifying technical bugs, UX bottlenecks, and crawl issues before designing.',
    bullets: [
      'Technical performance and Core Web Vitals diagnostic audit.',
      'Google Search Console crawl errors, indexing issues, and 404s.',
      'User journey analysis, form friction points, and drop-off rates.',
      'Analytics review to identify high-converting and underperforming pages.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'SEO Equity & Asset Preservation',
    description: 'Protecting your accumulated search rankings, backlinks, valuable URLs, and authority during the redesign transition.',
    bullets: [
      'Identification and preservation of top organic traffic URLs.',
      'Backlink audit to ensure external referral links remain intact.',
      'Content inventory identifying high-value articles and landing pages.',
      'Baseline ranking benchmarks established before making changes.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'UX & Information Architecture',
    description: 'Restructuring your sitemap, navigation, and conversion funnels so visitors find information and take action with zero friction.',
    bullets: [
      'Simplified, intuitive main navigation and mobile drawer menus.',
      'Logical sitemap restructuring and content consolidation.',
      'Optimized conversion funnels and high-visibility calls to action.',
      'Mobile-first responsive layouts engineered for handheld usability.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'Modern Visual & Brand Redesign',
    description: 'Modernizing your aesthetic to reflect your true market positioning, establishing strong brand credibility and visual prestige.',
    bullets: [
      'Clean visual hierarchy and contemporary typography systems.',
      'Brand alignment with customized modern color palettes.',
      'Modular UI component libraries and consistent design patterns.',
      'Interactive micro-animations and purposeful visual transitions.',
    ],
  },
  {
    tag: 'Service 05',
    title: 'Technical Rebuild & Performance Tuning',
    description: 'Eliminating bloated legacy code, outdated plugins, and slow database queries to achieve sub-second loading speeds.',
    bullets: [
      'Clean, semantic, modern code architecture (HTML5/CSS3/React).',
      'Modern image conversion (WebP/AVIF) and script minification.',
      'Removal of redundant third-party plugins and legacy tracking scripts.',
      'Significant Core Web Vitals improvements (LCP, CLS, and INP).',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Platform Migration & Modernization',
    description: 'Upgrading to modern CMS or frameworks (WordPress, Webflow, Shopify, Next.js) when your current platform is the bottleneck.',
    bullets: [
      'Safe transfer of all database content, media, and customer accounts.',
      'Rebuilding custom features in scalable, modern environments.',
      'Replatforming to managed ecosystems (Shopify/Webflow) for easy updates.',
      'Staging environment testing before live DNS cutover.',
    ],
  },
  {
    tag: 'Service 07',
    title: '301 Redirect Mapping & SEO Cutover',
    description: 'Meticulous 1-to-1 URL redirect mapping ensuring search engines and visitors are guided seamlessly to new page destinations.',
    bullets: [
      'Comprehensive 301 permanent redirect rules mapped and tested.',
      'Preservation of meta titles, descriptions, and canonical tags.',
      'XML sitemap regeneration and direct submission to Search Console.',
      'Post-launch crawl error monitoring and immediate link repair.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Turning your existing website visitors into qualified business leads, inquiries, and paying customers.',
    bullets: [
      'Frictionless multi-step inquiry and contact form redesigns.',
      'Strategically positioned social proof, client logos, and reviews.',
      'Clear value propositions above the fold on all key landing pages.',
      'Click-to-call, WhatsApp chat, and direct booking integrations.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'Pre-Launch Testing & Quality Assurance',
    description: 'Rigorous cross-device, cross-browser, and functional testing before a single visitor or search engine crawler sees the new site.',
    bullets: [
      'Testing across Apple iOS, Android, macOS, and Windows devices.',
      'Functional validation of forms, checkout pipelines, and API webhooks.',
      'Broken link checking and SSL certificate verification.',
      'Seamless DNS transition with zero website downtime.',
    ],
  },
]

const approaches = [
  {
    title: 'Visual Refresh',
    desc: 'Best when your current platform and structure are solid, but visual styling, typography, and imagery look dated and need modernizing.',
  },
  {
    title: 'UX & Conversion Redesign',
    desc: 'Best when your site receives traffic but visitors struggle to navigate, abandon contact forms, or drop out of purchase journeys.',
  },
  {
    title: 'Structural Redesign',
    desc: 'Best when your website has expanded over years without a clear plan, leading to cluttered navigation, duplicate pages, and confusing hierarchy.',
  },
  {
    title: 'Full Technical Rebuild',
    desc: 'Best when accumulated technical debt, obsolete plugins, or outdated codebases make the site slow, insecure, or impossible to maintain.',
  },
  {
    title: 'Platform Migration Redesign',
    desc: 'Best when your existing CMS platform actively restricts your business growth, requiring a migration to Next.js, Shopify, or Webflow.',
  },
  {
    title: 'Targeted Section Redesign',
    desc: 'Best when only specific high-priority areas—such as product pages, pricing tiers, or checkout—need rapid conversion optimization.',
  },
]

const comparisonData = [
  {
    approach: 'Visual Refresh',
    bestFor: 'Outdated visuals with sound platform and solid SEO',
    changes: 'Styling, color palette, typography, imagery',
    timeline: '~2–3 weeks',
  },
  {
    approach: 'UX & Conversion Redesign',
    bestFor: 'High traffic with low conversion or drop-off friction',
    changes: 'User journeys, form funnels, page layouts, CTAs',
    timeline: '~3–5 weeks',
  },
  {
    approach: 'Structural Redesign',
    bestFor: 'Disorganized content expanded over years',
    changes: 'Sitemap, category taxonomy, internal linking',
    timeline: '~4–6 weeks',
  },
  {
    approach: 'Full Technical Rebuild',
    bestFor: 'Severe technical debt, slow speeds, broken code',
    changes: 'Clean modern code, database cleanup, speed tuning',
    timeline: '~6–10 weeks',
  },
  {
    approach: 'Platform Migration Redesign',
    bestFor: 'Current CMS is the primary operational bottleneck',
    changes: 'New platform, full content, 301 redirects, integrations',
    timeline: '~6–12+ weeks',
  },
]

const differentiators = [
  {
    title: 'Audit Before Design',
    desc: 'We never design blindly. We first diagnose your analytics, SEO baseline, and user drop-offs to ensure every change has a purpose.',
  },
  {
    title: 'Strict SEO Equity Protection',
    desc: 'Your rankings and backlinks are valuable assets. We map exact 301 redirects and preserve metadata so you never lose search traffic.',
  },
  {
    title: 'One In-House Team',
    desc: 'Auditors, UX designers, full-stack developers, and SEO engineers collaborate seamlessly under one roof for complete accountability.',
  },
  {
    title: 'Platform-Neutral Advice',
    desc: 'If your existing platform can be refreshed cleanly, we do that. We only recommend migration when the platform itself limits your business.',
  },
  {
    title: 'Revenue & Conversion Focus',
    desc: 'We focus on business metrics—inquiries, calls, sales, and speed—rather than vanity designs that look pretty but fail to generate leads.',
  },
  {
    title: 'Transparent Milestone Reviews',
    desc: 'You review staging environments at defined checkpoints, ensuring complete alignment on structure, design, and functionality before launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope of Work
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Website Redesign Capabilities
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We transform underperforming websites into high-converting, modern digital assets while protecting the search authority and content you have built over the years.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border pt-6 text-xs sm:text-sm font-medium text-frame-fg">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC REDESIGN APPROACHES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Diagnosis
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Refresh, Redesign, Rebuild or Migrate?
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Not every website needs the largest possible overhaul. The right approach depends on what our diagnostic audit uncovers.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {approaches.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">
                  Approach {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH COMPARISON TABLE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope Decision
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Redesign Approaches & Deliverable Matrix
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Compare redesign approaches to match the level of investment and timeline required for your website.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Approach</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Best For</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Changes</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.approach}</td>
                    <td className="p-5 md:p-7 text-sm text-frame-muted-fg leading-relaxed">{row.bestFor}</td>
                    <td className="p-5 md:p-7 text-sm text-frame-fg font-medium leading-relaxed">{row.changes}</td>
                    <td className="p-5 md:p-7 font-bold text-frame-accent">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FRAMECIPHER */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us for Your Website Redesign
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A successful redesign needs more than a graphic designer. It needs rigorous audit discipline, conversion strategy, and meticulous SEO protection.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Differentiator 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {diff.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

