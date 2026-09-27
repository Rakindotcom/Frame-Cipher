import Link from 'next/link'
import {
  getPillarServices,
  getServiceDisplayName,
  getServiceSummary,
} from '../../data/servicePages'
import { getServiceLinkPlan } from '../../lib/seo/internalLinks'
import { growthCaseStudies } from '../../data/growthWork'

const specificCaseStudyMappings = {
  // Paid advertising sub-services
  'paid-advertising/meta-ads': ['facebook-instagram-ads-portfolio', 'ruposhi-mart-meta-ads'],
  'paid-advertising/google-ads': ['rpl-consultancy-meta-ads', 'travel-lifestyle-meta-ads'],
  'paid-advertising/tiktok-ads': ['sumons-aroma-messenger-commerce', 'luxury-beauty-rwt-meta-ads'],
  'paid-advertising/remarketing': ['travel-lifestyle-meta-ads', 'ipb-edu-happy-tours-meta-ads'],
  'paid-advertising/lead-generation-ads': ['rpl-consultancy-meta-ads', 'ipb-edu-happy-tours-meta-ads'],
  'paid-advertising/linkedin-ads': ['rpl-consultancy-meta-ads', 'rihawebtech-meta-ads'],
  'paid-advertising/chatgpt-ads': ['rihawebtech-meta-ads', 'facebook-instagram-ads-portfolio'],
  'paid-advertising/pinterest-ads': ['luxury-beauty-rwt-meta-ads', 'ruposhi-mart-meta-ads'],
  'paid-advertising/amazon-ads': ['ruposhi-mart-meta-ads', 'sumons-aroma-messenger-commerce'],
  'paid-advertising/microsoft-ads': ['rpl-consultancy-meta-ads', 'travel-lifestyle-meta-ads'],

  // SEO sub-services
  'seo/local-seo': ['phone-fashion-fix-local-seo', 'border-locksmiths-local-seo'],
  'seo/technical-seo': ['jarixo-topical-map-seo-visibility', 'pixc-retouch-global-seo'],
  'seo/ecommerce-seo': ['pixc-retouch-global-seo', 'sumons-aroma-messenger-commerce'],
  'seo/link-building': ['pixc-retouch-global-seo', 'border-locksmiths-local-seo'],
  'seo/on-page-seo': ['jarixo-topical-map-seo-visibility', 'phone-fashion-fix-local-seo'],
  'seo/international-seo': ['pixc-retouch-global-seo', 'jarixo-topical-map-seo-visibility'],
  'seo/seo-audit': ['jarixo-topical-map-seo-visibility', 'border-locksmiths-local-seo'],
  'seo/seo-strategy': ['jarixo-topical-map-seo-visibility', 'phone-fashion-fix-local-seo'],
  'seo/keyword-research': ['phone-fashion-fix-local-seo', 'jarixo-topical-map-seo-visibility'],
  'seo/ai-search-optimization': ['jarixo-topical-map-seo-visibility', 'pixc-retouch-global-seo'],

  // Content creation sub-services
  'content-creation/video-production': ['dr-ferdoush-saleheen', 'sumons-aroma-messenger-commerce'],
  'content-creation/short-form-video': ['dr-ferdoush-saleheen', 'luxury-beauty-rwt-meta-ads'],
  'content-creation/youtube-videos': ['dr-ferdoush-saleheen', 'facebook-instagram-ads-portfolio'],
  'content-creation/branding': ['dr-ferdoush-saleheen', 'ruposhi-mart-meta-ads'],
  'content-creation/motion-graphics-animation': ['dr-ferdoush-saleheen', 'sumons-aroma-messenger-commerce'],
  'content-creation/product-photography': ['ruposhi-mart-meta-ads', 'sumons-aroma-messenger-commerce'],

  // Website design & dev sub-services
  'website-design-development/landing-pages': ['rpl-consultancy-meta-ads', 'sumons-aroma-messenger-commerce'],
  'website-design-development/ecommerce-website': ['sumons-aroma-messenger-commerce', 'ruposhi-mart-meta-ads'],
  'website-design-development/shopify': ['ruposhi-mart-meta-ads', 'pixc-retouch-global-seo'],
  'website-design-development/business-website': ['border-locksmiths-local-seo', 'phone-fashion-fix-local-seo'],
  'website-design-development/wordpress': ['jarixo-topical-map-seo-visibility', 'phone-fashion-fix-local-seo'],
  'website-design-development/webflow': ['border-locksmiths-local-seo', 'dr-ferdoush-saleheen'],
  'website-design-development/custom-development': ['pixc-retouch-global-seo', 'jarixo-topical-map-seo-visibility'],
  'website-design-development/ui-ux-design': ['sumons-aroma-messenger-commerce', 'dr-ferdoush-saleheen'],

  // App development sub-services
  'app-development/mvp-development': ['jarixo-topical-map-seo-visibility', 'rihawebtech-meta-ads'],
  'app-development/saas-apps': ['jarixo-topical-map-seo-visibility', 'pixc-retouch-global-seo'],
  'app-development/cross-platform': ['jarixo-topical-map-seo-visibility', 'sumons-aroma-messenger-commerce'],
  'app-development/android': ['jarixo-topical-map-seo-visibility', 'rihawebtech-meta-ads'],
  'app-development/ios': ['jarixo-topical-map-seo-visibility', 'rihawebtech-meta-ads'],

  // Social media management sub-services
  'social-media-management/facebook': ['facebook-instagram-ads-portfolio', 'sumons-aroma-messenger-commerce'],
  'social-media-management/instagram': ['facebook-instagram-ads-portfolio', 'luxury-beauty-rwt-meta-ads'],
  'social-media-management/content-calendar-strategy': ['dr-ferdoush-saleheen', 'sumons-aroma-messenger-commerce'],

  // Content writing sub-services
  'content-writing/seo-blog-writing': ['jarixo-topical-map-seo-visibility', 'pixc-retouch-global-seo'],
  'content-writing/website-content': ['border-locksmiths-local-seo', 'phone-fashion-fix-local-seo'],
  'content-writing/landing-page-copy': ['rpl-consultancy-meta-ads', 'sumons-aroma-messenger-commerce'],
  'content-writing/case-study-writing': ['jarixo-topical-map-seo-visibility', 'dr-ferdoush-saleheen'],
}

const caseStudyMappings = {
  seo: [
    'phone-fashion-fix-local-seo',
    'border-locksmiths-local-seo',
    'jarixo-topical-map-seo-visibility',
    'pixc-retouch-global-seo',
  ],
  'paid-advertising': [
    'facebook-instagram-ads-portfolio',
    'sumons-aroma-messenger-commerce',
    'ipb-edu-happy-tours-meta-ads',
    'ruposhi-mart-meta-ads',
  ],
  'content-creation': [
    'dr-ferdoush-saleheen',
  ],
  'social-media-management': [
    'facebook-instagram-ads-portfolio',
    'sumons-aroma-messenger-commerce',
  ],
  'content-writing': [
    'jarixo-topical-map-seo-visibility',
  ],
  'website-design-development': [
    'sumons-aroma-messenger-commerce',
    'pixc-retouch-global-seo',
  ],
  'app-development': [
    'jarixo-topical-map-seo-visibility',
  ],
}

const portfolioMappings = {
  'website-design-development': {
    title: 'Website Development Portfolio',
    href: '/projects#website-work',
    cta: 'View Live Websites',
    items: ['Business Websites', 'E-commerce Platforms', 'Landing Pages', 'Custom Web Apps'],
  },
  'app-development': {
    title: 'Software & App Engineering Portfolio',
    href: '/projects?view=software',
    cta: 'Explore App Architecture',
    items: ['Native Mobile Apps', 'Cross-Platform Apps', 'SaaS Platforms', 'Custom APIs'],
  },
  'content-creation': {
    title: 'Commercial Media & Video Portfolio',
    href: '/projects#video-work',
    cta: 'Explore Production Work',
    items: ['Commercial Video', 'Social Reels & Shorts', 'Brand Identity', 'Product Photography'],
  },
  'social-media-management': {
    title: 'Social Media & Brand Assets',
    href: '/projects#design-work',
    cta: 'View Brand Assets',
    items: ['Feed Campaigns', 'Visual Identity Systems', 'Video Reels', 'Content Calendars'],
  },
  'content-writing': {
    title: 'Strategic Content Architecture',
    href: '/case-studies/jarixo-topical-map-seo-visibility',
    cta: 'Inspect Content Framework',
    items: ['Topical Maps', 'SEO Articles', 'Landing Page Copy', 'Commercial Copywriting'],
  },
  seo: {
    title: 'Search Growth Case Studies',
    href: '/case-studies#seo',
    cta: 'View SEO Proof',
    items: ['Local SEO Maps', 'Technical Crawl Fixes', 'Global E-commerce SEO', 'Topical Authority'],
  },
  'paid-advertising': {
    title: 'Paid Media & ROAS Reporting',
    href: '/case-studies#paid-ads',
    cta: 'View Ad Results',
    items: ['Meta Ads Scaling', 'Messenger Commerce', 'Lead Gen Funnels', 'E-commerce ROAS'],
  },
}

export default function ServiceClusterSection({ service }) {
  if (!service) return null

  const isPillar = service.pageType === 'Pillar Service'
  const pillarKey = service.pillarSlug || service.slug || ''

  const linkPlan = getServiceLinkPlan(service) || {}

  // Index-adjacent siblings (sub-services) or sibling pillars, per the link map
  const relatedServices = isPillar
    ? getPillarServices()
        .filter((p) => p.slug !== service.slug)
        .slice(0, 4)
        .map((p) => ({ ...p, href: p.fullPath, anchor: getServiceDisplayName(p) }))
    : linkPlan.siblings || []

  // Matching case studies
  const relevantStudySlugs =
    specificCaseStudyMappings[service.slug] ||
    caseStudyMappings[pillarKey] ||
    []
  const relevantStudies = relevantStudySlugs
    .map((slug) => growthCaseStudies.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 2)

  const portfolio = portfolioMappings[pillarKey]

  const currentDisplayName = getServiceDisplayName(service)
  const rawPillarTitle = service.pillarParent || currentDisplayName
  const pillarTitle = String(rawPillarTitle || '')
    .replace(/ Service Page$/i, '')
    .replace(/ Services? in Bangladesh$/i, '')
    .trim()

  return (
    <section className="w-full border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[95vw]">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b-2 border-frame-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Internal Ecosystem
              </span>
              {!isPillar && service.pillarSlug && (
                <span className="text-xs font-bold text-frame-muted-fg">
                  · Part of{' '}
                  <Link
                    href={`/services/${service.pillarSlug}`}
                    className="text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent hover:decoration-frame-accent transition-colors"
                  >
                    {pillarTitle}
                  </Link>
                </span>
              )}
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-3xl md:text-4xl">
              {isPillar ? 'Strategic Core Capabilities & Proof' : `Related ${pillarTitle} Services`}
            </h2>
          </div>
          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-muted-fg hover:text-frame-accent transition-colors"
            >
              <span>Explore All 74 Services</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Grid: Left Sibling Services (50%), Right Case Studies & Portfolio (50%) */}
        <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="w-full min-w-0 space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
              {isPillar ? 'Other Macro Capability Pillars' : 'Lateral Cluster Services'}
            </p>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedServices.map((sub, idx) => (
                <div
                  key={sub.slug}
                  className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-muted/15 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:bg-frame-bg hover:shadow-lg w-full min-w-0"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-frame-accent">
                        0{idx + 1}
                      </span>
                      <span
                        className="text-sm text-frame-muted-fg group-hover:translate-x-1 group-hover:text-frame-accent transition-all"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-snug text-frame-fg group-hover:text-frame-accent transition-colors">
                      <Link
                        href={sub.href || `/services/${sub.slug}`}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {sub.anchor || getServiceDisplayName(sub)}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg line-clamp-2">
                      {sub.summary || getServiceSummary(sub)}
                    </p>
                  </div>
                  <span className="mt-5 text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    View Service Specifications
                  </span>
                </div>
              ))}
            </div>

            {!isPillar && linkPlan.hub && (
              <div className="mt-4 border-2 border-dashed border-frame-border/80 bg-frame-muted/10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
                <span className="text-xs font-semibold text-frame-muted-fg">
                  Looking for full-scope strategy across this pillar?
                </span>
                <Link
                  href={linkPlan.hub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent hover:text-frame-fg transition-colors shrink-0"
                >
                  <span>{linkPlan.hub.anchor}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            )}

            {(linkPlan.crossCluster?.length > 0 || linkPlan.comparison?.length > 0) && (
              <div className="space-y-4 pt-2">
                {linkPlan.crossCluster?.length > 0 && (
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      Works Best Alongside
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {linkPlan.crossCluster.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1.5 border-2 border-frame-border px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                        >
                          <span>{link.anchor}</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {linkPlan.comparison?.length > 0 && (
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      Comparing Platforms
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {linkPlan.comparison.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1.5 border border-frame-border/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg transition-colors hover:border-frame-accent hover:text-frame-accent"
                        >
                          <span>{link.anchor}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {linkPlan.geoContext && (
              <p className="pt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Clients also ask about{' '}
                <Link
                  href={linkPlan.geoContext.href}
                  className="font-bold text-frame-fg underline decoration-frame-accent/40 underline-offset-4 hover:text-frame-accent transition-colors"
                >
                  {linkPlan.geoContext.anchor}
                </Link>{' '}
                when scoping this engagement.
              </p>
            )}
          </div>

          {/* Right Column: Case Studies & Portfolio */}
          <div className="w-full min-w-0 space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
              Documented Client Proof
            </p>

            {/* Case Studies */}
            {relevantStudies.length > 0 ? (
              <div className="space-y-4 w-full">
                {relevantStudies.map((study) => (
                  <article
                    key={study.slug}
                    className="group relative block w-full min-w-0 border-2 border-frame-border bg-frame-muted/15 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:bg-frame-bg hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-frame-accent">
                      <span>{study.client}</span>
                      <span className="text-frame-muted-fg">Case Study</span>
                    </div>
                    <h4 className="mt-3 font-heading text-base font-bold uppercase leading-snug text-frame-fg group-hover:text-frame-accent transition-colors">
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {study.title}
                      </Link>
                    </h4>
                    {study.metrics?.[0] && (
                      <div className="mt-4 flex items-baseline justify-between border-t border-frame-border/60 pt-3 text-xs" aria-hidden="true">
                        <span className="font-heading text-xl font-bold text-frame-fg">
                          {study.metrics[0][0]}
                        </span>
                        <span className="font-semibold uppercase tracking-wider text-frame-muted-fg">
                          {study.metrics[0][1]}
                        </span>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : null}

            {/* Portfolio Link Card */}
            {portfolio && (
              <div className="w-full min-w-0 border-2 border-frame-border bg-frame-bg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                    {portfolio.title}
                  </h4>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolio.items.map((item) => (
                    <span
                      key={item}
                      className="border border-frame-border/80 bg-frame-muted/30 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={portfolio.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent hover:text-frame-fg transition-colors"
                  >
                    <span>{portfolio.cta}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
