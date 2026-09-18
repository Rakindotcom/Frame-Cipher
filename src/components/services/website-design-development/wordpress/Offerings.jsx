import Link from 'next/link'
import { SectionLabel, PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Custom WordPress Theme Development',
    description: 'We build custom WordPress themes around your brand, content structure, and user experience instead of forcing your business into a pre-built template. This can include custom layouts, Gutenberg blocks, responsive templates, reusable sections, and design systems that your team can manage after launch.',
  },
  {
    tag: 'Service 02',
    title: 'Custom WordPress Plugin Development',
    description: 'When an existing plugin cannot meet your requirements, we can develop custom functionality around your business workflow. This may include custom features, REST API integrations, admin tools, custom Gutenberg blocks, user roles, and other functionality that needs to work directly with your WordPress environment.',
  },
  {
    tag: 'Service 03',
    title: 'WordPress Page Builder Development',
    description: 'For businesses that need flexible visual editing, we can work with tools such as Elementor or Gutenberg. We configure reusable sections, templates, and responsive layouts while keeping performance and maintainability in mind. The goal is to give your team editing flexibility without adding unnecessary technical overhead.',
  },
  {
    tag: 'Service 04',
    title: 'WordPress Security & Hardening',
    description: 'We apply practical security measures during development to reduce common WordPress risks. Depending on the project, this can include login protection, SSL configuration, secure access settings, firewall or security plugin setup, update practices, backups, and other hardening measures.',
  },
  {
    tag: 'Service 05',
    title: 'WordPress Speed & Performance Optimization',
    description: 'We optimize the factors that affect WordPress performance, including caching, image handling, scripts, plugins, database performance, and mobile usability. Where required, CDN configuration and other performance improvements can also be considered to support a faster user experience and stronger Core Web Vitals.',
  },
  {
    tag: 'Service 06',
    title: 'WordPress Migration & Website Rebuild',
    description: 'We can move an existing website to WordPress or rebuild an outdated WordPress installation without treating migration as a simple content copy. The process can include content and media migration, URL mapping, redirects, metadata preservation, staging, testing, and SEO-conscious restructuring.',
  },
]

const woocommerceFeatures = [
  {
    tag: 'WooCommerce 01',
    title: 'Product & Catalog Setup',
    description: 'Organize products, categories, variations, attributes, images, pricing, and stock information around how customers browse your catalog.',
  },
  {
    tag: 'WooCommerce 02',
    title: 'Checkout & Payment Integration',
    description: 'Configure checkout and supported payment gateways based on your target market, platform requirements, and business workflow.',
  },
  {
    tag: 'WooCommerce 03',
    title: 'Inventory & Order Management',
    description: 'Set up products, stock, orders, customer information, and administrative workflows around how your team manages fulfillment.',
  },
  {
    tag: 'WooCommerce 04',
    title: 'Custom WooCommerce Functionality',
    description: 'Extend WooCommerce with custom checkout features, product logic, shipping rules, subscriptions, integrations, or other functionality where required.',
  },
  {
    tag: 'WooCommerce 05',
    title: 'Product SEO & Structured Data',
    description: 'Build product and category structures with appropriate URLs, metadata, internal linking, and structured data foundations.',
  },
  {
    tag: 'WooCommerce 06',
    title: 'WooCommerce Integrations',
    description: 'Connect supported CRM, shipping, marketing, analytics, payment, and third-party systems based on project requirements.',
  },
]

const businessSolutions = [
  {
    number: '01',
    title: 'Business & Corporate Websites',
    description: 'Structured around lead generation and credibility, with editorial control for teams that update service pages and content regularly.',
  },
  {
    number: '02',
    title: 'Ecommerce Stores (WooCommerce)',
    description: 'Product catalogs, payment integration, and inventory management built on WordPress\'s most widely used ecommerce plugin are a strong fit for merchants who want content and commerce managed in one place.',
  },
  {
    number: '03',
    title: 'Blogs & Content Publications',
    description: 'Fast, clean publishing workflows for teams producing regular content: category structure, author management, and SEO-friendly architecture built to scale with volume.',
  },
  {
    number: '04',
    title: 'Portfolios & Personal Brands',
    description: 'Visually driven builds for creatives, consultants, or personal brands where presentation matters as much as content structure.',
  },
  {
    number: '05',
    title: 'Membership & Community Sites',
    description: 'Gated content, user accounts, and subscription functionality for businesses building a paid or member-only audience.',
  },
  {
    number: '06',
    title: 'Directories & Listings',
    description: 'Structured, filterable content for businesses running job boards, classifieds, or resource directories.',
  },
]

const seoFeatures = [
  {
    tag: 'SEO 01',
    title: 'Search-Friendly Site Architecture',
    description: 'Organize pages, categories, navigation, and internal links so users and search engines can understand the relationship between important content.',
  },
  {
    tag: 'SEO 02',
    title: 'Metadata & Heading Structure',
    description: 'Configure relevant title tags, meta descriptions, headings, and indexation settings based on the agreed project scope.',
  },
  {
    tag: 'SEO 03',
    title: 'XML Sitemap & Indexation',
    description: 'Review sitemap generation, indexation controls, canonical URLs, and other technical foundations that help search engines crawl the site effectively.',
  },
  {
    tag: 'SEO 04',
    title: 'Schema Markup',
    description: 'Implement relevant structured data where appropriate for businesses, articles, products, services, organizations, or other supported content types.',
  },
  {
    tag: 'SEO 05',
    title: 'Image & Performance Optimization',
    description: 'Optimize media, page structure, scripts, and other performance factors that affect usability and search experience.',
  },
  {
    tag: 'SEO 06',
    title: 'Redirects & SEO Preservation',
    description: 'For redesigns and migrations, review old URLs and implement appropriate redirects where needed to help preserve existing search value.',
  },
  {
    tag: 'SEO 07',
    title: 'Search Console & Analytics',
    description: 'Set up or connect relevant Google tools where included in the project scope so the site can be monitored after launch.',
  },
]

const dynamicFeatures = [
  {
    tag: 'Structure 01',
    title: 'Custom Post Types',
    description: 'Create structured content types for properties, jobs, team members, case studies, products, locations, or other business-specific information.',
  },
  {
    tag: 'Structure 02',
    title: 'Custom Taxonomies',
    description: 'Organize content with custom categories, filters, and relationships beyond WordPress\'s standard taxonomy system.',
  },
  {
    tag: 'Structure 03',
    title: 'Dynamic Fields',
    description: 'Use structured fields and reusable content components to make large websites easier for your team to manage.',
  },
  {
    tag: 'Structure 04',
    title: 'Dynamic Templates',
    description: 'Build templates that automatically display structured content consistently across relevant pages.',
  },
]

const comparisonData = [
  { factor: 'Initial Cost', builder: 'Lower', custom: 'Higher' },
  { factor: 'Launch Speed', builder: 'Faster', custom: 'Longer' },
  { factor: 'Design Flexibility', builder: 'Good', custom: 'High' },
  { factor: 'Performance Control', builder: 'Depends on implementation', custom: 'Greater control' },
  { factor: 'Content Editing', builder: 'Easy visual editing', custom: 'Gutenberg/custom editing' },
  { factor: 'Plugin Dependency', builder: 'Can be higher', custom: 'Can be lower' },
  { factor: 'Best For', builder: 'Smaller sites and businesses needing easy editing', custom: 'Brands needing custom structure and greater control' },
  { factor: 'Custom Functionality', builder: 'Possible within limits', custom: 'Greater flexibility' },
]

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, SEO considerations, content structure, and technical implementation stay under one team from planning through launch.',
  },
  {
    tag: 'Pillar 02',
    title: 'Built Around Your Website\'s Purpose',
    description: 'A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.',
  },
  {
    tag: 'Pillar 03',
    title: 'Platform & Architecture Recommendations',
    description: 'We consider your editing needs, functionality, budget, integrations, performance requirements, and long-term plans before recommending a WordPress approach.',
  },
  {
    tag: 'Pillar 04',
    title: 'SEO & Performance Considerations',
    description: 'We account for technical SEO foundations, content structure, mobile usability, and performance during development rather than treating them as separate problems after launch.',
  },
  {
    tag: 'Pillar 05',
    title: 'Transparent Review Process',
    description: 'You review important stages of strategy, design, development, and technical setup before we move forward.',
  },
  {
    tag: 'Pillar 06',
    title: 'Long-Term Maintainability',
    description: 'We consider updates, plugin dependencies, content management, security, and future functionality so the site remains practical to operate after launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR WORDPRESS DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Capabilities &amp; Custom Builds
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our WordPress Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end WordPress development based on your website&apos;s purpose, content workflow, functionality, and long-term requirements.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Our recommendations depend on your website&apos;s purpose, technical requirements, content workflow, and budget. We use only the functionality your project actually needs rather than adding unnecessary themes, plugins, or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WOOCOMMERCE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Ecommerce &amp; Online Retail
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WooCommerce Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Build a WordPress-powered online store around your products, customers, payment methods, and fulfillment workflow. WooCommerce can be a strong fit for businesses that want ecommerce and content management within the same WordPress environment.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {woocommerceFeatures.map((feat, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{feat.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We recommend WooCommerce when its flexibility and WordPress content ecosystem provide a clear advantage for the business.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WORDPRESS SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Versatility / Specific Niches
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WordPress Solutions for Different Business Needs
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              WordPress isn&apos;t one type of website; it&apos;s a platform flexible enough to power almost any kind of site, and each type needs its own approach.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <SectionLabel className="mb-2">Solution {solution.number}</SectionLabel>
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              We recommend theme structure, plugin stack, and functionality based on which of these your site actually is, not a one-size-fits-all business template applied regardless of purpose.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-frame-border bg-frame-bg px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg shrink-0"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SEO-READY WORDPRESS DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Search Visibility &amp; Organic Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              SEO-Ready WordPress Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A WordPress website should provide a strong technical foundation for ongoing SEO work. We consider search structure during development rather than treating SEO as an afterthought.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {seoFeatures.map((seo, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{seo.tag}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {seo.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {seo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A WordPress website built with SEO-ready foundations does not guarantee rankings. Search visibility still depends on content, competition, authority, technical quality, and ongoing SEO work.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM CONTENT STRUCTURES & DYNAMIC WORDPRESS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Custom Post Types &amp; Taxonomies
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Custom Content Structures &amp; Dynamic WordPress
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Some WordPress websites need more than standard pages and posts. We can create structured content systems that make complex information easier to manage and display.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {dynamicFeatures.map((struct, idx) => (
              <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{struct.tag}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {struct.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {struct.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              This approach is useful for directories, real estate websites, job boards, publications, portfolios, and other content-heavy WordPress projects.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PAGE BUILDER VS CUSTOM WORDPRESS THEME */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Architecture &amp; Strategy
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Page Builder vs Custom WordPress Theme
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Both approaches can work well. The right choice depends on your budget, design requirements, editing workflow, performance needs, and future plans.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Page Builder</th>
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

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We recommend the approach based on your website&apos;s purpose, content workflow, functionality, budget, and long-term maintenance needs—not simply on which option is faster to sell.
            </p>
          </div>
        </div>
      </section>

      {/* 7. WORDPRESS DEVELOPMENT FOR BANGLADESH & INTERNATIONAL BUSINESSES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Dual Market Expertise
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              WordPress Development for Bangladesh &amp; International Businesses
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Frame Cipher builds WordPress websites for businesses across Bangladesh and international markets. The technical architecture, content workflow, integrations, and user experience are adapted to the market your business serves.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* BANGLADESH */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Local Market Optimization
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For Bangladesh-Based Businesses
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium text-frame-muted-fg">
                  Where relevant, we can account for:
                </p>
                <ul className="mt-4 space-y-2.5 text-sm md:text-base font-medium text-frame-fg/90">
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>Bangla-English content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>Mobile-first experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>Local business information and Google Maps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>WhatsApp and click-to-call actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>bKash, Nagad, or other supported payment requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>Bangladesh-focused SEO and content structures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* INTERNATIONAL */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Global Standards &amp; Scalability
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For International Businesses
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  We consider the target market, language, content requirements, integrations, technical standards, and business workflows required for international audiences.
                </p>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  The goal is not to force the same WordPress setup on every market. Your website architecture should match your audience, operations, and growth plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE FRAME CIPHER FOR WORDPRESS DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Quality &amp; Accountability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Frame Cipher for WordPress Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {whyChoosePillars.map((adv, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{adv.tag}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Start Your WordPress Project &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
