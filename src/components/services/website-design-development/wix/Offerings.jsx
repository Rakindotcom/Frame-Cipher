const coreServices = [
  {
    tag: 'Service 01',
    title: 'Site Strategy & Planning',
    description: 'Every Wix project starts with a clear plan for what the website needs to achieve, ensuring the editor stays simple to use later.',
    bullets: [
      'Business goals and primary conversion actions definition.',
      'Sitemap, user navigation, and page structure planning.',
      'Customer journey mapping and content requirements.',
      'Wix platform, editor selection (Wix Editor vs Wix Studio), and apps.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'Custom Wix Website Design',
    description: 'We design Wix websites around your brand identity instead of leaving an off-the-shelf template unchanged.',
    bullets: [
      'Bespoke visual layouts matching your typography & brand guidelines.',
      'Mobile-first responsive layouts tailored for handheld devices.',
      'Conversion-focused calls to action, lead forms, and inquiry paths.',
      'Wix Bookings, inquiry flows, and scheduling interfaces.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'Wix Studio Development',
    description: 'For businesses needing greater design precision, responsive breakpoints, custom layouts, and deeper development flexibility.',
    bullets: [
      'Advanced responsive layouts with custom fluid breakpoints.',
      'Custom CSS styling and modular design component libraries.',
      'Fluid interactions, scroll-based animations, and transitions.',
      'CMS-connected page structures with client-friendly editing modes.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'Wix Velo Development & Custom Code',
    description: 'When built-in Wix features are not enough, Velo and developer tools extend site functionality with custom logic.',
    bullets: [
      'Custom forms, dynamic database collections, and business logic.',
      'Member-specific portals, dashboards, and role-based permissions.',
      'External API integrations, webhooks, and third-party automations.',
      'Custom calculations, backend functions, and bespoke booking flows.',
    ],
  },
  {
    tag: 'Service 05',
    title: 'Wix CMS & Dynamic Websites',
    description: 'Separating content from page design makes it easy to manage structured information as your website scales.',
    bullets: [
      'Dynamic page templates for directories, properties, and listings.',
      'Portfolio project showcases, case studies, and team profiles.',
      'Service catalogs, event calendars, and resource libraries.',
      'Consistent layouts driven by structured database collections.',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Integrations & Business Automation',
    description: 'Connecting your Wix website seamlessly with the tools and business software your team uses daily.',
    bullets: [
      'CRM connections, lead capture, and automated email sequences.',
      'Payment gateway setup (local and international options).',
      'Live chat, WhatsApp click-to-chat, and contact notifications.',
      'Google Analytics 4, Tag Manager, and Meta Pixel tracking setup.',
    ],
  },
  {
    tag: 'Service 07',
    title: 'Wix Ecommerce Development',
    description: 'Building streamlined online stores with product catalogs, payments, and manageable day-to-day order operations.',
    bullets: [
      'Product catalog setup, collections, and variant attributes.',
      'Secure checkout configuration, shipping rules, and payment setup.',
      'Inventory tracking, order notifications, and discount rules.',
      'Product-level SEO optimization and conversion-focused product pages.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'SEO & Performance Optimization',
    description: 'Building strong search foundations into the website from day one rather than treating SEO as an afterthought.',
    bullets: [
      'Semantic heading hierarchy, meta titles, and descriptions.',
      'Image compression (WebP), lazy loading, and asset tuning.',
      'XML sitemap generation, canonical tags, and 301 redirect mapping.',
      'Schema structured data and Google Search Console indexation.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'Wix Redesign & Website Migration',
    description: 'Modernizing underperforming Wix sites or moving from WordPress, Squarespace, or Webflow with zero SEO loss.',
    bullets: [
      'Visual, UX, and mobile layout overhaul for outdated Wix sites.',
      'Seamless content, media, and database migration to Wix.',
      'URL preservation and comprehensive 301 redirect mapping.',
      'Rebuilding standard Wix websites into high-performance Wix Studio builds.',
    ],
  },
]

const businessNeeds = [
  {
    title: 'Small Business Websites',
    desc: 'Professional online presence for local businesses needing clear service information, lead capture, and easy self-editing.',
  },
  {
    title: 'Service Business Websites',
    desc: 'Consultants, clinics, agencies, and contractors needing strong service pages, client inquiry forms, and booking integrations.',
  },
  {
    title: 'Startup Websites',
    desc: 'Fast-to-market websites that explain product value clearly, validate positioning, and allow rapid updates as the company grows.',
  },
  {
    title: 'Corporate & Professional Sites',
    desc: 'Structured brand presentation for established firms needing credibility, team bios, organized content, and lead generation.',
  },
  {
    title: 'Portfolio & Creative Websites',
    desc: 'Visual showcases for designers, photographers, architects, and agencies presenting projects through structured CMS collections.',
  },
  {
    title: 'Booking & Appointment Sites',
    desc: 'Connecting visitors with calendar slots, consultations, classes, or reservations via fully configured Wix Bookings.',
  },
  {
    title: 'Membership Websites',
    desc: 'Gated content, private member dashboards, subscription tiers, and member-only resources supported within Wix.',
  },
  {
    title: 'Ecommerce Stores',
    desc: 'Streamlined online shops with product catalogs, mobile-friendly checkout, automated notifications, and easy stock updates.',
  },
  {
    title: 'Dynamic CMS Websites',
    desc: 'Content-heavy websites utilizing structured collections to publish hundreds of directory entries or articles consistently.',
  },
]

const comparisonData = [
  {
    factor: 'Launch Speed',
    wix: 'Fast (~1–3 weeks for most builds)',
    wordpress: 'Moderate (~3–6 weeks)',
    custom: 'Longer (~8–16+ weeks)',
    highlight: 'wix',
  },
  {
    factor: 'Ease of Editing',
    wix: 'Exceptional visual drag-and-drop',
    wordpress: 'Strong with Gutenberg/Elementor',
    custom: 'Depends on custom CMS setup',
    highlight: 'wix',
  },
  {
    factor: 'Design Flexibility',
    wix: 'Strong (Pixel-level with Wix Studio)',
    wordpress: 'Very high with bespoke themes',
    custom: 'Unlimited frontend architecture',
  },
  {
    factor: 'Custom Functionality',
    wix: 'Strong for supported APIs & Velo',
    wordpress: 'Very high with open plugin ecosystem',
    custom: 'Highest possible flexibility',
  },
  {
    factor: 'Ecommerce Scale',
    wix: 'Ideal for small-to-mid catalogs',
    wordpress: 'High scale with WooCommerce',
    custom: 'Enterprise & headless architecture',
  },
  {
    factor: 'CMS & Dynamic Data',
    wix: 'Built-in Wix CMS collections',
    wordpress: 'Advanced custom post types',
    custom: 'Complete database schema freedom',
  },
  {
    factor: 'Hosting & Maintenance',
    wix: 'Fully managed cloud infrastructure',
    wordpress: 'Requires hosting, core & plugin patches',
    custom: 'Requires ongoing DevOps & server ops',
    highlight: 'wix',
  },
  {
    factor: 'Best Suited For',
    wix: 'Businesses wanting managed hosting & easy editing',
    wordpress: 'Brands needing wide extensibility & content scale',
    custom: 'SaaS products, complex portals & digital systems',
  },
]

const differentiators = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, development, content structure, SEO setup, and launch support stay within one coordinated, accountable team.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Wix when it genuinely fits your requirements. If WordPress or custom development makes more sense, we tell you honestly.',
  },
  {
    title: 'Business-First Planning',
    desc: 'We start with your business goals, target audience, customer journey, and conversion targets before writing a single line or moving pixels.',
  },
  {
    title: 'Wix Studio & Velo Code',
    desc: 'We go far beyond standard templates with advanced responsive breakpoints, CMS collections, custom JavaScript, and API connections.',
  },
  {
    title: 'SEO-Ready Foundations',
    desc: 'Site structure, meta tags, image compression, structured data, mobile usability, and Google Search Console are configured from day one.',
  },
  {
    title: 'Complete Handover & Training',
    desc: 'You receive full ownership access and basic video or live editor training so your team can manage updates without ongoing developer fees.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* PART 1: CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope of Work / Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Wix Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build Wix websites around your business goals, content workflow, customers, and long-term requirements. From streamlined business websites to advanced Wix Studio builds, we deliver the right technical architecture.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreServices.map((service, index) => (
              <article
                key={index}
                className="group flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border/60 pt-6 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: SOLUTIONS FOR BUSINESS NEEDS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Versatility / Models
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Solutions for Different Business Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Wix is not one single template; it is a platform versatile enough to power distinct business models when tailored to your exact workflow.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <article key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Model 0{index + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 3: COMPARISON MATRIX */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Technical Decision / Matrix
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Wix vs WordPress vs Custom
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Choosing the right platform starts with your business requirements, timeline, budget, and internal team capabilities.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom Development</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-7 ${row.highlight === 'wix' ? 'font-bold text-frame-accent' : 'text-frame-muted-fg'}`}>
                      {row.wix}
                    </td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PART 4: WHY CHOOSE US */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us for Wix Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build Wix websites around real business requirements, not around cookie-cutter templates or one-size-fits-all packages.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Differentiator 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {diff.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
