import { SectionIntro, SectionLabel, PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    title: 'Custom WordPress Theme Development',
    tag: 'Service 01',
    description: 'We build custom WordPress themes around your brand, content structure, and user experience instead of forcing your business into a pre-built template.',
    bullets: [
      'Bespoke visual layouts & typography matching your brand identity.',
      'Custom Gutenberg blocks allowing easy, modular page assembly.',
      'Responsive design systems that your team can manage after launch.',
      'Clean semantic markup ensuring high Core Web Vitals performance.',
    ],
  },
  {
    title: 'Custom Plugin & API Development',
    tag: 'Service 02',
    description: 'When existing plugins cannot meet your requirements, we develop custom functionality around your business workflow.',
    bullets: [
      'Custom REST API endpoints and third-party data integrations.',
      'Tailored administrative workflows and client-side dashboards.',
      'Custom user roles, permission structures, and private portals.',
      'Lightweight code avoiding plugin dependency vulnerabilities.',
    ],
  },
  {
    title: 'WordPress Page Builder Development',
    tag: 'Service 03',
    description: 'For businesses that need flexible visual editing, we work with Gutenberg or Elementor without bloat.',
    bullets: [
      'Pre-configured reusable sections and modular design libraries.',
      'Mobile-responsive layout controls optimized for non-technical editors.',
      'Performance-tuned asset loading minimizing redundant CSS/JS.',
      'Editorial independence without breaking core layouts.',
    ],
  },
  {
    title: 'WordPress Security & Hardening',
    tag: 'Service 04',
    description: 'We apply practical security measures during development to protect against common vulnerabilities.',
    bullets: [
      'Login protection, two-factor authentication, and brute-force shields.',
      'SSL/TLS configuration and database prefix hardening.',
      'Firewall setup, security headers, and malware scanning.',
      'Automated off-site backup routines and recovery testing.',
    ],
  },
  {
    title: 'Speed & Core Web Vitals Optimization',
    tag: 'Service 05',
    description: 'We optimize the factors that affect WordPress performance to ensure fast, sub-second load times.',
    bullets: [
      'Advanced server-side page caching and Redis/Memcached object caching.',
      'Next-gen image conversion (WebP/AVIF) and lazy loading.',
      'Script deferral, stylesheet minification, and database indexing.',
      'Global CDN configuration for lightning-fast international delivery.',
    ],
  },
  {
    title: 'WordPress Migration & Rebuilds',
    tag: 'Service 06',
    description: 'Moving an existing site to WordPress or rebuilding an outdated installation with zero SEO loss.',
    bullets: [
      'Complete database, content, media, and user account transfer.',
      'Comprehensive 301 redirect mapping protecting search rankings.',
      'Metadata and schema preservation during restructuring.',
      'Staging environment review before live DNS cutover.',
    ],
  },
]

const woocommerceFeatures = [
  {
    title: 'Product & Catalog Setup',
    tag: 'WooCommerce 01',
    desc: 'Organize products, categories, variations, attributes, images, pricing, and stock information around how customers browse your catalog.'
  },
  {
    title: 'Checkout & Payment Integration',
    tag: 'WooCommerce 02',
    desc: 'Configure frictionless checkout with local gateways (bKash, Nagad, Rocket, SSLCommerz) and global processors (Stripe, PayPal).'
  },
  {
    title: 'Inventory & Order Management',
    tag: 'WooCommerce 03',
    desc: 'Set up products, stock notifications, order fulfillment workflows, and admin notifications tailored to how your team manages operations.'
  },
  {
    title: 'Custom WooCommerce Logic',
    tag: 'WooCommerce 04',
    desc: 'Extend WooCommerce with custom checkout fields, conditional shipping rules, multi-tier pricing, subscription recurring billing, and ERP sync.'
  },
  {
    title: 'Product SEO & Structured Data',
    tag: 'WooCommerce 05',
    desc: 'Build product and category pages with search-optimized URLs, schema markup (Product, Offer, AggregateRating), and canonical indexing.'
  },
  {
    title: 'Third-Party Integrations',
    tag: 'WooCommerce 06',
    desc: 'Connect supported CRM, courier APIs (Pathao, Steadfast, RedX), email marketing (Mailchimp, Klaviyo), and analytics suites.'
  }
]

const useCases = [
  { title: 'Business & Corporate Sites', desc: 'Structured around lead generation, service clarity, and credibility for teams updating content regularly.' },
  { title: 'WooCommerce Stores', desc: 'Full product catalogs, local payment integration (bKash/Nagad), and inventory management in one CMS.' },
  { title: 'Blogs & Publications', desc: 'Fast publishing workflows, author management, category taxonomy, and SEO-friendly architecture.' },
  { title: 'Portfolios & Personal Brands', desc: 'Visually driven builds for executives, consultants, and creative agencies where presentation matters.' },
  { title: 'Membership & Community Sites', desc: 'Gated content, paid member tiers, user accounts, and recurring subscription workflows.' },
  { title: 'Directories & Listings', desc: 'Structured, filterable content for job boards, classifieds, and business directories with custom post types.' },
]

const dynamicStructures = [
  {
    title: 'Custom Post Types',
    desc: 'Create structured content types for properties, jobs, team members, case studies, products, locations, or business-specific data models.'
  },
  {
    title: 'Custom Taxonomies',
    desc: 'Organize content with custom categories, tags, multi-level filters, and relational links beyond WordPress default categories.'
  },
  {
    title: 'Dynamic Fields (ACF Pro)',
    desc: 'Use repeatable fields, flexible content blocks, and relational component pickers to make large content libraries intuitive to maintain.'
  },
  {
    title: 'Dynamic Templates',
    desc: 'Build modular single and archive templates that automatically display structured content cleanly across hundreds of pages.'
  }
]

const comparisonData = [
  { factor: 'Initial Investment', builder: 'Lower starting cost', custom: 'Higher initial investment' },
  { factor: 'Launch Speed', builder: 'Faster turnaround (1–3 weeks)', custom: 'Longer design & build cycle (3–6 weeks)' },
  { factor: 'Design Flexibility', builder: 'Constrained to builder grid logic', custom: '100% pixel-perfect bespoke styling' },
  { factor: 'Performance & Speed', builder: 'Requires diligent tuning to avoid bloat', custom: 'Sub-second Core Web Vitals, clean markup' },
  { factor: 'Content Editing', builder: 'Visual drag-and-drop live editor', custom: 'Modular Gutenberg block editor' },
  { factor: 'Plugin Dependency', builder: 'Moderate to high overhead', custom: 'Minimal; lean custom architecture' },
  { factor: 'Best Suited For', builder: 'SMEs needing quick visual revisions', custom: 'Brands needing scalability, speed & control' },
]

const advantages = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, custom design, theme development, SEO architecture, and editorial handover remain strictly under one in-house team.'
  },
  {
    title: 'Purpose-Built Architecture',
    desc: 'We never apply generic multipurpose themes. Every website structure is tailored specifically to how your customers explore and buy.'
  },
  {
    title: 'Uncompromising Speed',
    desc: 'We optimize server caching, database queries, image delivery, and asset deferrals to ensure sub-second loads and strong Core Web Vitals.'
  },
  {
    title: 'Security Hardening from Day One',
    desc: 'We implement firewall configuration, SSL hardening, database prefix isolation, brute-force mitigation, and automated off-site backups.'
  },
  {
    title: 'Transparent Milestones',
    desc: 'Staging preview environments, milestone approvals, and clear timeline communication keep you in full control before go-live.'
  },
  {
    title: 'Full Ownership & Editorial Handover',
    desc: 'You receive complete administrator access, zero vendor lock-in, clean code documentation, and personalized training for your team.'
  }
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities / Specialized Engineering
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our WordPress Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end WordPress development based on your website&apos;s purpose, content workflow, functionality, and long-term business requirements.
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
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WOOCOMMERCE COMMERCE SUITE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              WooCommerce Engineering / High Conversion
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WooCommerce Development & Store Architecture
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Build a WordPress-powered online store around your catalog, payment gateways, and fulfillment pipeline for merchants who want content and commerce in one CMS.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {woocommerceFeatures.map((feat, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{feat.tag}</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Versatility / Strategic Fit
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WordPress Solutions for Different Business Needs
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              WordPress isn&apos;t one type of website; it&apos;s a flexible engine capable of powering corporate portals, membership systems, and high-volume publications.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8">
                <SectionLabel className="mb-2">Architecture {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {uc.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC STRUCTURES & ACF */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Custom Data Models / Scalability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Custom Content Structures & Dynamic WordPress
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Some websites need more than simple pages and posts. We create structured content systems that make complex information effortless to manage and display.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {dynamicStructures.map((struct, idx) => (
              <div key={idx} className="bg-frame-bg p-6 md:p-8">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Structure 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {struct.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {struct.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE BUILDER VS CUSTOM THEME TABLE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Technical Comparison / Informed Choice
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Page Builder vs Custom WordPress Theme
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Both approaches have their strengths. We guide you to the right architecture based on budget, editing autonomy, and performance goals.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Page Builder (Elementor / Gutenberg)</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom WordPress Theme</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.builder}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FRAME CIPHER */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Excellence / Our Guarantee
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Frame Cipher for WordPress
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              WordPress done right gives you complete digital independence, speed, and long-term security without recurring vendor dependency.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv, idx) => (
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
            <PosterButton href="/contact">Book a Technical Discovery Call</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
