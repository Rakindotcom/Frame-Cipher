import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'

const subServices = [
  {
    title: 'Business Website Development',
    slug: '/services/website-design-development/business-website',
    tag: 'Service 01',
    description: 'A structured, conversion-focused website for service businesses, professional firms, and local companies that need to establish credibility and generate inquiries. Includes homepage, service pages, about/contact pages, and a content structure built around what your customers actually search for.',
  },
  {
    title: 'Ecommerce Website Development',
    slug: '/services/website-design-development/ecommerce-website',
    tag: 'Service 02',
    description: 'A store built to handle product catalogs, payment processing, and order management on Shopify, WooCommerce, Magento, or custom infrastructure. For Bangladeshi merchants, this includes reviewing bKash and Nagad checkout compatibility as part of the build.',
  },
  {
    title: 'Landing Page Development',
    slug: '/services/website-design-development/landing-pages',
    tag: 'Service 03',
    description: 'A single-purpose, high-conversion page built for a specific campaign, product launch, or ad traffic source. Stripped of navigation distractions and built around one clear action not a scaled-down version of your main site.',
  },
  {
    title: 'WordPress Development',
    slug: '/services/website-design-development/wordpress',
    tag: 'Service 04',
    description: 'Custom WordPress builds and theme development for businesses that want ongoing content control without depending on a developer for every update. Including plugin selection, speed optimization, and security hardening.',
  },
  {
    title: 'Wix Development',
    slug: '/services/website-design-development/wix',
    tag: 'Service 05',
    description: 'Wix builds for businesses that want a fast, cost-effective launch with straightforward self-editing afterward. Best suited for smaller sites without complex custom functionality requirements.',
  },
  {
    title: 'Magento Development',
    slug: '/services/website-design-development/magento',
    tag: 'Service 06',
    description: 'Magento builds for larger product catalogs and businesses with complex inventory, multi-currency, or B2B pricing needs. Recommended for enterprise catalog scale.',
  },
  {
    title: 'Webflow Development',
    slug: '/services/website-design-development/webflow',
    tag: 'Service 07',
    description: 'Visually flexible, code-clean builds for design-forward businesses that want more creative control than WordPress templates typically allow, without needing a fully custom framework.',
  },
  {
    title: 'Shopify Development',
    slug: '/services/website-design-development/shopify',
    tag: 'Service 08',
    description: "Store builds and theme customization on Shopify's infrastructure are a strong fit for merchants who want reliable uptime and simplified backend management over full custom control.",
  },
  {
    title: 'Custom / Next.js Development',
    slug: '/services/website-design-development/custom-development',
    tag: 'Service 09',
    description: "Fully custom-coded websites and web applications for businesses with specific performance, integration, or scalability needs that pre-built platforms can't accommodate.",
  },
  {
    title: 'Website Redesign',
    slug: '/services/website-design-development/redesign',
    tag: 'Service 10',
    description: "Rebuilding an existing site that's underperforming outdated design, poor mobile experience, slow load times, or a structure that's stopped matching how the business operates.",
  },
  {
    title: 'Website Maintenance',
    slug: '/services/website-design-development/maintenance',
    tag: 'Service 11',
    description: 'Ongoing updates, security monitoring, backups, and technical fixes after launch. Maintenance keeps the site running securely and smoothly.',
  },
  {
    title: 'UI/UX Design',
    slug: '/services/website-design-development/ui-ux-design',
    tag: 'Service 12',
    description: 'Interface and experience design wireframes, user flow mapping, and visual design done before or alongside development so the site is planned around how real users navigate.',
  },
]

export default function Offerings() {
  return (
    <section id="sub-services" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Architecture & Scope" title="Our Website Design & Development Services" index="01">
          Website design and development covers everything needed to plan, design, build, and launch a functional website for businesses that need a new site, a platform migration, or a full redesign.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((sub) => (
            <Link
              key={sub.slug}
              href={sub.slug}
              className="group bg-frame-bg p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-muted/30"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {sub.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                  {sub.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {sub.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                <span>View Details & Pricing &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}