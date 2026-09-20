import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../Kinetic'

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
    description: 'Store builds and theme customization on Shopify\'s infrastructure are a strong fit for merchants who want reliable uptime and simplified backend management over full custom control.',
  },
  {
    title: 'Custom / Next.js Development',
    slug: '/services/website-design-development/custom-development',
    tag: 'Service 09',
    description: 'Fully custom-coded websites and web applications for businesses with specific performance, integration, or scalability needs that pre-built platforms can\'t accommodate.',
  },
  {
    title: 'Website Redesign',
    slug: '/services/website-design-development/redesign',
    tag: 'Service 10',
    description: 'Rebuilding an existing site that\'s underperforming outdated design, poor mobile experience, slow load times, or a structure that\'s stopped matching how the business operates.',
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

const businessNeeds = [
  { title: 'Startups', desc: 'Websites for new businesses that need to establish credibility, explain their offering, and create room for future growth.' },
  { title: 'Small & Service Businesses', desc: 'Professional websites designed to explain services clearly, build trust, and generate calls, inquiries, or consultation requests.' },
  { title: 'eCommerce Businesses', desc: 'Online stores designed around products, checkout, payments, inventory, and the overall customer journey.' },
  { title: 'Corporate & Established Businesses', desc: 'Structured websites for established brands that need a stronger digital presence, scalable content, and clear information architecture.' },
  { title: 'SaaS & Web Applications', desc: 'Custom websites and web applications for businesses that require user accounts, dashboards, integrations, or workflows beyond standard CMS functionality.' },
  { title: 'Institutions & Non-Profits', desc: 'Accessible, trust-focused digital portals designed for clear public information, community engagement, and organizational credibility.' },
]

const advantages = [
  { title: 'One In-House Team', desc: 'Your design, development, and content work under one team. This helps keep the project consistent and reduces communication gaps.' },
  { title: 'Business-First Planning', desc: 'We start with your business goals, audience, content needs, and budget. Our recommendations focus on what your business needs rather than pushing one platform.' },
  { title: 'Flexible Platform Choices', desc: 'We work with WordPress, Shopify, Webflow, Wix, Magento, and custom Next.js development, recommending the right fit for your requirements.' },
  { title: 'Clear Project Communication', desc: 'You review the project at defined stages before we move forward. We discuss scope, timeline, and quotation before development begins.' },
  { title: 'Design & Marketing Considerations', desc: 'We consider content structure, SEO-friendly foundations, and future marketing needs so your website is ready to grow with your business.' },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SUB-SERVICES GRID */}
      <section id="sub-services" className="px-4 py-20 md:px-8 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Architecture & Scope"
            title="Our Website Design & Development Services"
          >
            Website design and development covers everything needed to plan, design, build, and launch a functional website for businesses that need a new site, a platform migration, or a full redesign.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
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

      {/* SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Target Audience Alignment"
            title="Website Solutions for Different Business Needs"
          >
            From venture-backed startups to established corporate leaders, we adapt the stack to your operational realities.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Segment 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOUR WEBSITE MATTERS & ADVANTAGES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Strategic Impact"
            title="Why Your Website Matters for Business Growth"
          >
            A slow or confusing website actively loses visitors before they see your offer. We build digital assets that establish enduring credibility and drive measurable revenue.
          </SectionIntro>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Value & Impact
              </span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                The Compounding Cost of Weak Websites
              </h3>
              <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  A slow or confusing website doesn&apos;t just look unprofessional; it actively loses visitors before they see your offer, and that gap widens the longer it&apos;s left unaddressed, since competitors with better sites keep capturing the traffic and trust is missing. Mobile performance matters more than most businesses assume: a large share of Bangladeshi traffic is mobile-first, and a site that isn&apos;t built for that loses customers before they scroll past the homepage.
                </p>
                <p>
                  A common misunderstanding is treating a website as a one-time project rather than infrastructure that needs occasional updates, security patches, and periodic review as your business changes. Skipping maintenance doesn&apos;t save money; it usually costs more later, when a small fix becomes an emergency rebuild.
                </p>
              </div>
              <div className="mt-8">
                <PosterButton href="/contact">Book a Strategy Session</PosterButton>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  The Frame Cipher Standard
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Why Choose Frame Cipher for Website Development
                </h3>
              </div>

              <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                {advantages.map((item, index) => (
                  <div key={index} className="bg-frame-bg p-6">
                    <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
