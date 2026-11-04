import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const subServices = [
  {
    title: 'Business Website Development',
    slug: '/services/website-design-development/business-website',
    tag: '01',
    description: 'A structured, conversion-focused website for service businesses, professional firms, and local companies that need to establish credibility and generate inquiries. Includes homepage, service pages, about/contact pages, and a content structure built around what your customers actually search for.',
  },
  {
    title: 'Ecommerce Website Development',
    slug: '/services/website-design-development/ecommerce-website',
    tag: '02',
    description: 'A store built to handle product catalogs, payment processing, and order management on Shopify, WooCommerce, Magento, or custom infrastructure. For Bangladeshi merchants, this includes reviewing bKash and Nagad checkout compatibility as part of the build.',
  },
  {
    title: 'Landing Page Development',
    slug: '/services/website-design-development/landing-pages',
    tag: '03',
    description: 'A single-purpose, high-conversion page built for a specific campaign, product launch, or ad traffic source. Stripped of navigation distractions and built around one clear action not a scaled-down version of your main site.',
  },
  {
    title: 'WordPress Development',
    slug: '/services/website-design-development/wordpress',
    tag: '04',
    description: 'Custom WordPress builds and theme development for businesses that want ongoing content control without depending on a developer for every update. Including plugin selection, speed optimization, and security hardening.',
  },
  {
    title: 'Wix Development',
    slug: '/services/website-design-development/wix',
    tag: '05',
    description: 'Wix builds for businesses that want a fast, cost-effective launch with straightforward self-editing afterward. Best suited for smaller sites without complex custom functionality requirements.',
  },
  {
    title: 'Magento Development',
    slug: '/services/website-design-development/magento',
    tag: '06',
    description: 'Magento builds for larger product catalogs and businesses with complex inventory, multi-currency, or B2B pricing needs. Recommended for enterprise catalog scale.',
  },
  {
    title: 'Webflow Development',
    slug: '/services/website-design-development/webflow',
    tag: '07',
    description: 'Visually flexible, code-clean builds for design-forward businesses that want more creative control than WordPress templates typically allow, without needing a fully custom framework.',
  },
  {
    title: 'Shopify Development',
    slug: '/services/website-design-development/shopify',
    tag: '08',
    description: "Store builds and theme customization on Shopify's infrastructure are a strong fit for merchants who want reliable uptime and simplified backend management over full custom control.",
  },
  {
    title: 'Custom / Next.js Development',
    slug: '/services/website-design-development/custom-development',
    tag: '09',
    description: "Fully custom-coded websites and web applications for businesses with specific performance, integration, or scalability needs that pre-built platforms can't accommodate.",
  },
  {
    title: 'Website Redesign',
    slug: '/services/website-design-development/redesign',
    tag: '10',
    description: "Rebuilding an existing site that's underperforming outdated design, poor mobile experience, slow load times, or a structure that's stopped matching how the business operates.",
  },
  {
    title: 'Website Maintenance',
    slug: '/services/website-design-development/maintenance',
    tag: '11',
    description: 'Ongoing updates, security monitoring, backups, and technical fixes after launch. Maintenance keeps the site running securely and smoothly.',
  },
  {
    title: 'UI/UX Design',
    slug: '/services/website-design-development/ui-ux-design',
    tag: '12',
    description: 'Interface and experience design wireframes, user flow mapping, and visual design done before or alongside development so the site is planned around how real users navigate.',
  },
]

export default function Offerings() {
  return (
    <section id="sub-services" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website design &amp; development{' '}
              <span className="italic text-frame-accent">services.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Website design and development covers everything needed to plan, design, build, and launch a functional website for businesses that need a new site, a platform migration, or a full redesign.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (4x3 Technical Continuum) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((sub) => (
            <article
              key={sub.slug}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  <Link href={sub.slug}>
                    {sub.title}
                  </Link>
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {sub.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <Link href={sub.slug} className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"><span>View Details &amp; Pricing</span><ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
