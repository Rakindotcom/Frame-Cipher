import Link from 'next/link'
import { SectionLabel, PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    title: 'STRATEGY & ARCHITECTURE',
    tag: 'Phase 01',
    description: 'Every business website starts with a plan built around your sales funnel, not a generic template sitemap.',
    bullets: [
      'Buyer Journey Mapping: Structuring pages around how customers actually decide.',
      'Site Architecture: Clear navigation built for conversion, not just aesthetics.',
      'Competitor Review: Identifying what\'s missing from sites you\'re up against.',
      'Content Planning: Defining what each page needs to say and do.',
    ],
    takeaway: 'Good architecture means visitors find what they need without friction and take the next step.',
    link: '/contact',
  },
  {
    title: 'UI/UX DESIGN',
    tag: 'Phase 02',
    description: 'Design that looks professional while guiding visitors toward an inquiry, not just scrolling past.',
    bullets: [
      'Wireframing: Mapping layout and flow before visual design begins.',
      'Conversion-Focused Layout: CTAs and forms placed where decisions happen.',
      'Brand-Aligned Visuals: Design that matches how your business presents itself.',
      'Mobile-First Design: Built for the device most visitors actually use.',
    ],
    takeaway: 'Design isn\'t decoration here; every layout choice is tied to a reason a visitor should act.',
    link: '/services/website-design-development/ui-ux-design',
  },
  {
    title: 'DEVELOPMENT & CRM INTEGRATION',
    tag: 'Phase 03',
    description: 'The technical build that connects your website to the tools your sales team already uses.',
    bullets: [
      'Custom Development: Clean, maintainable code, not bloated page-builder output.',
      'CRM Integration: Connecting forms and lead capture to your existing systems.',
      'Analytics Setup: Tracking visitor behavior and conversion points from day one.',
      'Third-Party Integrations: Booking tools, live chat, or marketing platforms as needed.',
    ],
    takeaway: 'A website that doesn\'t talk to your CRM is a website your sales team has to work around.',
    link: '/contact',
  },
  {
    title: 'TECHNICAL PERFORMANCE',
    tag: 'Phase 04',
    description: 'Speed and stability that keep visitors on the page long enough to convert.',
    bullets: [
      'Speed Optimization: Fast load times across devices and connection speeds.',
      'Mobile Responsiveness: Full functionality on every screen size.',
      'Security Setup: SSL, secure hosting practices, and basic hardening.',
      'Clean Code Structure: Built to be maintained and extended, not rebuilt in a year.',
    ],
    takeaway: 'Technical performance is invisible when it works, and costly when it doesn\'t.',
    link: '/contact',
  },
  {
    title: 'ONGOING SUPPORT & MAINTENANCE',
    tag: 'Phase 05',
    description: 'A website\'s job isn\'t done at launch; it needs regular attention to stay secure, fast, and current as your business changes.',
    bullets: [
      'Security Monitoring & Updates: Keeping core software, plugins, and dependencies current and patched.',
      'Backup & Recovery: Regular backups so a recoverable version of the site always exists.',
      'Performance Checks: Monitoring speed and uptime, and fixing issues before visitors notice them.',
      'Content & Feature Updates: Small changes and additions handled without a full redevelopment project.',
    ],
    takeaway: 'Available as a separate ongoing service, see our Website Maintenance page for full details, since this isn\'t included by default in a development engagement.',
    link: '/services/website-design-development/maintenance',
  },
]

const includedCategories = [
  {
    title: 'Strategy & Planning',
    items: [
      'Business and audience discovery',
      'Buyer journey and conversion planning',
      'Sitemap and page structure',
      'Competitor and market review',
      'Content requirements and page planning',
    ],
  },
  {
    title: 'UI/UX Design',
    items: [
      'Wireframes and page layouts',
      'Conversion-focused CTA placement',
      'Brand-aligned visual design',
      'Mobile-first responsive layouts',
      'Review and approval checkpoints',
    ],
  },
  {
    title: 'Website Development',
    items: [
      'Responsive front-end development',
      'CMS or custom development based on requirements',
      'Contact and lead capture forms',
      'Content integration',
      'Essential third-party integrations',
    ],
  },
  {
    title: 'SEO-Ready Foundation',
    items: [
      'Clean URL structure',
      'Logical page and heading hierarchy',
      'Metadata implementation',
      'XML sitemap setup',
      'Image and media optimization',
      'Internal linking foundations',
      'Search engine-friendly technical structure',
    ],
  },
  {
    title: 'Tracking & Lead Management',
    items: [
      'Analytics setup',
      'Conversion tracking where required',
      'Form and lead routing',
      'CRM integration based on compatibility',
      'Marketing and communication tool integration',
    ],
  },
  {
    title: 'Testing & Launch',
    items: [
      'Mobile and desktop testing',
      'Browser compatibility checks',
      'Form and integration testing',
      'Performance review',
      'Launch support',
      'Agreed handover guidance',
    ],
  },
]

const featuresList = [
  {
    title: 'Lead Capture Forms',
    desc: 'Contact, inquiry, quote, and consultation forms designed to collect the information your sales team needs.',
  },
  {
    title: 'CRM Integration',
    desc: 'Where supported, website leads can be connected to your existing CRM so inquiries can move into your sales workflow without manual copying.',
  },
  {
    title: 'Analytics & Conversion Tracking',
    desc: 'We can configure analytics and relevant conversion events so you can understand where visitors come from and which actions they take.',
  },
  {
    title: 'WhatsApp & Call Integration',
    desc: 'For businesses that rely on direct communication, we can add WhatsApp, click-to-call, and other contact options where appropriate.',
  },
  {
    title: 'Booking & Appointment Tools',
    desc: 'Service businesses can connect booking or scheduling tools to make it easier for visitors to request appointments or consultations.',
  },
  {
    title: 'Live Chat & Communication Tools',
    desc: 'We can integrate suitable chat and communication tools based on your business workflow and technical requirements.',
  },
  {
    title: 'Maps & Location Features',
    desc: 'Location-based businesses can include Google Maps, service areas, directions, and other relevant local contact information.',
  },
  {
    title: 'Marketing Integrations',
    desc: 'Email platforms, newsletter tools, remarketing systems, and other marketing integrations can be included when they support the project goals.',
  },
]

const seoFoundations = [
  {
    title: 'Search-Friendly Website Structure',
    desc: 'We organize pages, navigation, URLs, headings, and content relationships so search engines and visitors can understand the website more easily.',
  },
  {
    title: 'Metadata & Indexing Foundations',
    desc: 'Relevant pages can be configured with appropriate title tags, meta descriptions, indexation settings, XML sitemaps, and other basic technical SEO elements.',
  },
  {
    title: 'Mobile & Performance Considerations',
    desc: 'We build responsive layouts and review loading performance, usability, image handling, and other factors that can affect the experience across devices.',
  },
  {
    title: 'Internal Linking & Content Structure',
    desc: 'Important pages should be connected logically. We consider internal linking opportunities and content hierarchy during development so the website has a stronger foundation for future content and SEO work.',
  },
  {
    title: 'Analytics & Search Tools',
    desc: 'Where included in the project scope, we can set up analytics and search monitoring tools to help you measure traffic, user behavior, and conversions after launch.',
  },
  {
    title: 'Redesign & SEO Preservation',
    desc: 'For redesign projects, we consider existing URLs, valuable content, redirects, rankings, and backlinks before replacing the old structure.',
  },
]

const industries = [
  {
    title: 'Service Businesses',
    desc: 'Websites built to explain services clearly, establish credibility, and generate calls, inquiries, consultations, or quote requests.',
  },
  {
    title: 'Professional Firms',
    desc: 'Structured websites for consultants, agencies, legal firms, financial businesses, and other professional services that depend on trust and expertise.',
  },
  {
    title: 'Startups & SMEs',
    desc: 'Scalable websites that help growing businesses establish a professional presence while leaving room for new services, content, and functionality.',
  },
  {
    title: 'Corporate & Established Businesses',
    desc: 'Larger websites with clearer information architecture, structured service sections, multiple audiences, and scalable content management.',
  },
  {
    title: 'Local Businesses',
    desc: 'Websites designed around location, services, contact information, maps, calls, and other actions that help local customers reach the business.',
  },
  {
    title: 'SaaS & Technology Businesses',
    desc: 'Websites that explain complex products clearly while supporting demos, sign-ups, lead generation, integrations, and future product growth.',
  },
]

const bangladeshMarketPoints = [
  'Bangla-English content requirements',
  'Mobile-first browsing behavior',
  'WhatsApp and direct-call communication',
  'Local business locations and Google Maps',
  'bKash and Nagad considerations for suitable eCommerce projects',
  'Local service-area information',
  'Bangladesh-focused content and SEO requirements',
]

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, development, content, and technical implementation stay under one team. That creates clearer communication and keeps the project moving in one direction.',
  },
  {
    title: 'Built Around Your Sales Process',
    desc: 'We start with how your business attracts, qualifies, and converts leads. The website structure is then designed around those customer journeys.',
  },
  {
    title: 'CRM & Marketing Integration',
    desc: 'Your website can connect with the CRM, analytics, booking, communication, and marketing tools your business already uses, where technically supported.',
  },
  {
    title: 'Platform Recommendations Based on Your Needs',
    desc: 'We do not force one platform on every business. We consider your content, functionality, budget, management needs, integrations, and future plans before recommending an approach.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review key stages before we move forward. This gives you visibility into the structure, design, and development instead of receiving a finished website without meaningful checkpoints.',
  },
  {
    title: 'Built for Long-Term Use',
    desc: 'We consider maintainability, performance, SEO-ready foundations, content management, and future marketing needs so the website can continue supporting your business after launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR BUSINESS WEBSITE DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              End-to-End Capabilities / Sales Alignment
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Business Website Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We offer end-to-end website development tailored to how your business actually sells.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-frame-border/60 pt-5">
                    <span className="text-xs font-black uppercase tracking-widest text-frame-accent">What We Do</span>
                    <ul className="mt-3 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-frame-border/60 pt-5">
                  <p className="text-xs font-medium italic leading-relaxed text-frame-muted-fg mb-4">
                    {service.takeaway}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHAT'S INCLUDED IN OUR BUSINESS WEBSITE DEVELOPMENT SERVICE */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope Breakdown / Complete Coverage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What's Included in Our Business Website Development Service
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Every business website project is scoped around your requirements, but our standard approach covers the core elements needed to launch a professional, usable, and lead-focused website.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {includedCategories.map((cat, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Module 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {cat.title}
                  </h3>
                  <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            The exact deliverables depend on the platform, functionality, integrations, and scope agreed before development begins.
          </p>
        </div>
      </section>

      {/* 3. BUSINESS WEBSITE FEATURES & INTEGRATIONS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Tools & Ecosystem / Lead Capture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Business Website Features & Integrations
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A business website often needs more than pages and contact information. We can connect the website to the tools your team uses to manage leads, communication, bookings, and marketing.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {featuresList.map((feature, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <SectionLabel className="mb-2">Capability {String(index + 1).padStart(2, '0')}</SectionLabel>
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            Integration availability depends on the platform, third-party software, API access, and project scope. We confirm compatibility before development begins.
          </p>
        </div>
      </section>

      {/* 4. SEO-READY BUSINESS WEBSITE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Built-In Technical Foundations / Long-Term Growth
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              SEO-Ready Business Website Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Your website should give future SEO campaigns a strong technical foundation from the day it launches. We build important on-page and technical elements into the development process instead of treating SEO as something to consider after launch.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {seoFoundations.map((pillar, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">SEO Pillar 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A technically sound website does not guarantee rankings. Search visibility also depends on content quality, competition, authority, technical performance, and ongoing SEO work.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS WEBSITE SOLUTIONS FOR DIFFERENT INDUSTRIES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Market Alignment / Domain Tailoring
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Business Website Solutions for Different Industries
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Different businesses need different website structures, content, functionality, and conversion paths. We adapt the website around how your customers research, compare, and contact your business.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Industry 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            Every project starts with your actual business model and customer journey rather than forcing the same structure on every company.
          </p>
        </div>
      </section>

      {/* 6. BUSINESS WEBSITES FOR THE BANGLADESH MARKET & WORLDWIDE */}
      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Local & Global Execution / Dual Market Alignment
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Business Websites for the Bangladesh Market
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A website for a Bangladeshi business may need different communication, contact, and conversion considerations than a website built for another market.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Domestic Focus</span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Where relevant, we can account for:
              </h3>
              <ul className="mt-6 space-y-3 text-sm md:text-base font-medium text-frame-fg/90">
                {bangladeshMarketPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">International Standards</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Serving Global Clients
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  We also build for businesses targeting international customers. In those projects, we consider the target market, audience expectations, language, platform requirements, and business workflow.
                </p>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  The goal is not to build a &ldquo;Bangladesh version&rdquo; or an &ldquo;international version&rdquo; by default. The website structure should match the market your business actually serves.
                </p>
              </div>
              <div className="mt-8 border-t border-frame-border/60 pt-4">
                <span className="text-xs font-mono text-frame-muted-fg">Served clients across: US, UK, Australia, Canada, UAE & Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY BUSINESSES CHOOSE FRAME CIPHER FOR WEBSITE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Our Value Standard / Guaranteed Accountability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Businesses Choose Frame Cipher for Website Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We design and engineer business websites as long-term customer generation engines.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((adv, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Pillar 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Request a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
