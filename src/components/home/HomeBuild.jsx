import Link from 'next/link'
import SectionButton from './SectionButton'

const coreServices = [
  {
    title: '360 Growth Marketing & Paid Acquisition',
    description: 'Full-funnel campaign planning, Meta & Google ad management, offer testing, and continuous ROAS optimization.',
    href: '/services/paid-advertising',
    anchor: 'Explore paid advertising and 360 growth marketing services',
    tag: 'Growth / Acquisition',
    metric: 'Data-Driven ROAS Scaling',
    deliverables: ['Brand Strategy', 'Meta & Google Ads', 'Funnel CRO', 'Attribution Tracking'],
  },
  {
    title: 'High-Converting Websites & E-Commerce',
    description: 'Fast, modern Next.js web applications, headless Shopify storefronts, and conversion-engineered landing pages.',
    href: '/services/website-design-development',
    anchor: 'Explore website design and e-commerce development services',
    tag: 'Web / E-Commerce',
    metric: '100% Performance & LCP <0.8s',
    deliverables: ['Next.js 15 Web Apps', 'Shopify Storefronts', 'Sub-Second Speed', 'Landing Page Sprints'],
  },
  {
    title: 'Custom Software, CRM & Automations',
    description: 'Custom web platforms, executive dashboards, CRM lead routing, and business workflow automations.',
    href: '/services/app-development',
    anchor: 'Explore custom software and business automation systems',
    tag: 'Software / Automation',
    metric: 'Automated Pipelines',
    deliverables: ['Custom Dashboards', 'CRM Pipelines', 'Workflow Automations', 'API Integrations'],
  },
  {
    title: 'Cinematic Media & Studio Video Production',
    description: 'Commercial 4K filming, viral short-form reels/TikTok engine, studio photography, and cinematic post-production.',
    href: '/services/content-creation/video-production',
    anchor: 'Explore video production and media studio services',
    tag: 'Studio / Media',
    metric: 'In-House Studio & 4K Video',
    deliverables: ['Commercial Shoots', 'Viral Reels Engine', 'Studio Photography', 'Color Grading'],
  },
  {
    title: 'Technical & Local Search Dominance (SEO)',
    description: 'Dhaka Google Maps 3-pack domination, technical search audits, keyword clusters, and modern AEO/GEO optimization.',
    href: '/services/seo',
    anchor: 'Explore search engine optimization and local SEO services',
    tag: 'Search / Local SEO',
    metric: 'Organic Search Authority',
    deliverables: ['Local Map 3-Pack', 'Technical SEO Audits', 'Keyword Clustering', 'AEO / GEO Strategy'],
  },
  {
    title: 'Brand Strategy & Visual Design Systems',
    description: 'Market positioning, offer messaging, comprehensive design systems, campaign visuals, and kinetic brand identity.',
    href: '/services/content-creation/branding',
    anchor: 'Explore branding and visual identity design services',
    tag: 'Brand / Creative',
    metric: 'Full Identity & Direction',
    deliverables: ['Brand Positioning', 'Visual Identity', 'Design Systems', 'Campaign Creatives'],
  },
]

export default function HomeBuild() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Core services built for{' '}
              <span className="italic text-frame-accent">
                compounding growth.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            We combine strategy, creative, marketing, and engineering to build complete growth
            systems around your business without vendor friction.
          </p>
        </div>

        {/* Linear/Raycast Architectural Continuum Grid (Shared 1px Hairlines, Zero Box Clutter) */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] grid gap-px sm:grid-cols-2 lg:grid-cols-3 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:z-10">
          {coreServices.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between bg-[#121214] p-6 transition-colors duration-200 hover:bg-[#151518] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  <Link href={item.href} className="after:absolute after:inset-0 after:content-['']" title={item.anchor}>
                    {item.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {item.description}
                </p>

                {/* Key Deliverables Pills (Nested concentric radii: rounded-md) */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="font-mono text-xs text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {item.metric}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-frame-accent"
                  aria-hidden="true"
                >
                  <span>Explore</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <SectionButton href="/services">Explore all services</SectionButton>
        </div>
      </div>
    </section>
  )
}
