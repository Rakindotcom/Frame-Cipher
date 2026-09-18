const coreServices = [
  {
    tag: 'Service 01',
    title: 'Webflow CMS & Component Architecture',
    subtitle: 'Every Webflow build starts with a content model that makes future updates easier rather than more fragile.',
    description: 'We structure the CMS and reusable components around how your team will actually create, manage, and reuse content after launch.',
    bullets: [
      'CMS Collection architecture',
      'Collection field planning',
      'Reference and multi-reference relationships',
      'Dynamic CMS templates',
      'Reusable components',
      'Component properties and reusable sections',
      'CMS-driven landing pages',
      'Dynamic filtering and sorting where required',
      'Structured content for blogs, case studies, services, teams, locations, and events',
      'Editor-friendly field naming and content organization',
    ],
    note: 'The goal is a CMS that your marketing team can understand and use without needing to understand the underlying development.',
  },
  {
    tag: 'Service 02',
    title: 'Custom Design & Interactions',
    subtitle: 'We use Webflow\'s visual development environment to create interfaces that match the approved design while remaining practical to maintain.',
    description: 'Webflow interactions are powerful, but animation should support the user experience rather than become the reason a page feels slow or distracting.',
    bullets: [
      'Pixel-accurate Webflow development',
      'Responsive layouts across breakpoints',
      'Custom interactions and animations',
      'Scroll-based effects',
      'Micro-interactions',
      'Hover and transition states',
      'Reusable components and style systems',
      'CMS-connected visual layouts',
      'Mobile interaction optimization',
    ],
    note: 'Where native Webflow interactions are not enough, advanced animation libraries or custom code can be considered based on the project requirements.',
  },
  {
    tag: 'Service 03',
    title: 'Figma to Webflow Development',
    subtitle: 'When the visual design already exists in Figma, we translate the approved design into a responsive Webflow implementation rather than rebuilding the design as a generic template.',
    description: 'Our Figma-to-Webflow workflow bridges pixel precision with robust responsive code:',
    bullets: [
      'Design and layout review',
      'Webflow-ready component planning',
      'Responsive breakpoint mapping',
      'Typography and spacing implementation',
      'Reusable component development',
      'CMS binding',
      'Interaction implementation',
      'Form and integration setup',
      'Cross-device testing',
      'Final visual comparison against the approved design',
    ],
    note: 'We also review the design before development to identify interactions, responsive states, CMS requirements, and reusable components that need to be planned differently for Webflow.',
  },
  {
    tag: 'Service 04',
    title: 'Webflow Apps, APIs & Integrations',
    subtitle: 'Webflow can handle many website requirements natively, while apps, integrations, APIs, and custom code can extend the platform when a project needs additional functionality.',
    description: 'Custom code is used only when it solves a genuine requirement to keep the project maintainable.',
    bullets: [
      'Webflow Apps',
      'CRM integrations',
      'Marketing automation',
      'Form integrations',
      'Booking systems',
      'Analytics and tracking',
      'Chat and support tools',
      'Custom JavaScript',
      'API connections',
      'External content feeds',
      'Custom widgets',
      'Automation workflows',
      'Third-party business tools',
    ],
    note: 'Custom code is used only when it solves a genuine requirement. The goal is to keep the Webflow project understandable and maintainable rather than turning every feature into a custom workaround.',
  },
  {
    tag: 'Service 05',
    title: 'Webflow Migration & Replatforming',
    subtitle: 'Moving an existing website to Webflow requires more than rebuilding the visual design.',
    description: 'We plan migrations around the content, URLs, SEO signals, functionality, and publishing workflow that need to survive the move.',
    supportedSources: 'We can support migrations from WordPress, Wix, Squarespace, HubSpot and other CMS platforms, Custom websites, Legacy Webflow builds, and other supported website environments.',
    bullets: [
      'Full URL inventory',
      'Page and content migration',
      'CMS restructuring',
      'Metadata migration',
      'Image and media migration',
      '301 redirect mapping',
      'Internal-link review',
      'Sitemap and robots configuration',
      'Canonical review',
      'Analytics and tracking setup',
      'Form and integration migration',
      'Pre-launch QA',
      'Post-launch indexing and redirect monitoring',
    ],
    note: 'We treat migration as both a development project and an SEO preservation project.',
  },
  {
    tag: 'Service 06',
    title: 'Webflow Localization & Multilingual Websites',
    subtitle: 'Webflow can support websites serving different languages or regional audiences through localized content and publishing workflows.',
    description: 'We structure localization around the actual markets and languages a business needs rather than simply duplicating every page.',
    bullets: [
      'Multiple locales',
      'Localized CMS content',
      'Localized static pages',
      'Locale-specific URLs',
      'Localized SEO titles and descriptions',
      'Localized Open Graph settings',
      'Localized components',
      'Language selectors',
      'Regional content variations',
      'International SEO structure',
    ],
    note: 'We structure localization around the actual markets and languages a business needs rather than simply duplicating every page.',
  },
  {
    tag: 'Service 07',
    title: 'Webflow Ecommerce Development',
    subtitle: 'For brands that need a design-focused storefront with a suitable product catalog, we can build ecommerce experiences within Webflow.',
    description: 'Depending on the project, our Webflow ecommerce setup includes:',
    bullets: [
      'Product catalog setup',
      'Product templates',
      'Category and collection structures',
      'Ecommerce CMS content',
      'Product presentation',
      'Cart and checkout setup',
      'Product SEO',
      'Responsive shopping experiences',
      'Analytics and tracking',
      'Third-party ecommerce integrations',
    ],
    note: 'For larger catalogs, complex inventory, or advanced ecommerce operations, we may recommend Shopify, WooCommerce, Magento, or another platform when those systems are a better fit.',
  },
  {
    tag: 'Service 08',
    title: 'Performance & SEO Setup',
    subtitle: 'Making sure a visually rich site still loads efficiently and provides a strong technical foundation for search.',
    description: 'Design-heavy sites can become slow when animations, images, fonts, and third-party scripts are not managed carefully.',
    bullets: [
      'Image compression and optimization',
      'Lazy loading where appropriate',
      'Asset optimization',
      'Clean page structure',
      'Meta titles and descriptions',
      'Heading hierarchy',
      'Image alt text',
      'Sitemap configuration',
      'Redirect planning',
      'Canonical configuration where applicable',
      'Internal linking',
      'Mobile performance checks',
      'Accessibility considerations',
      'Core Web Vitals-focused optimization',
    ],
    note: 'Design-heavy sites can become slow when animations, images, fonts, and third-party scripts are not managed carefully. We treat performance and SEO as part of the build rather than an afterthought.',
  },
  {
    tag: 'Service 09',
    title: 'Ongoing Support & Maintenance',
    subtitle: 'A Webflow site\'s work does not end at launch. CMS content grows, design requirements change, and connected services occasionally need attention.',
    description: 'We keep your Webflow ecosystem pristine, secure, and technologically up-to-date:',
    bullets: [
      'CMS content support',
      'New collection development',
      'Component improvements',
      'Design refinements',
      'Interaction updates',
      'Integration troubleshooting',
      'Custom-code updates',
      'SEO updates',
      'Performance reviews',
      'Accessibility improvements',
      'Ongoing content support',
    ],
    note: 'Ongoing support is scoped separately according to the level of assistance your website requires.',
  },
]

const techStack = [
  {
    name: 'Webflow Designer',
    desc: 'Responsive page development, reusable styles, components, layouts, interactions, and responsive breakpoints.',
  },
  {
    name: 'Webflow CMS',
    desc: 'Structured Collections, dynamic templates, reference relationships, filtering, sorting, and CMS-driven page experiences.',
  },
  {
    name: 'Webflow Components',
    desc: 'Reusable design elements that help keep large websites consistent and easier to manage.',
  },
  {
    name: 'Custom Code',
    desc: 'HTML, CSS, JavaScript, embeds, and custom functionality where native Webflow capabilities are not enough.',
  },
  {
    name: 'Webflow APIs & Integrations',
    desc: 'Site data integrations, CMS workflows, external systems, automation, and custom application connections.',
  },
  {
    name: 'Webflow Apps',
    desc: 'Apps and extensions selected around genuine business requirements rather than unnecessary third-party functionality.',
  },
  {
    name: 'Webflow Localization',
    desc: 'Localized pages, CMS content, components, URLs, and SEO configurations for multilingual or multi-region websites.',
  },
  {
    name: 'Performance & SEO',
    desc: 'Semantic structure, image optimization, metadata, redirects, accessibility checks, mobile performance, and other technical considerations.',
  },
]

const marketingBenefits = [
  {
    title: 'Design Control',
    desc: 'Webflow gives teams strong control over layouts, responsive behavior, typography, interactions, and visual systems.',
  },
  {
    title: 'Structured Content',
    desc: 'The CMS allows blogs, case studies, services, team members, resources, listings, and other structured content to be managed separately from page design.',
  },
  {
    title: 'Reusable Components',
    desc: 'Reusable components help teams maintain consistent layouts while allowing approved content and properties to change across instances.',
  },
  {
    title: 'Marketing-Team Independence',
    desc: 'A well-architected Webflow project lets marketing teams make routine content changes without editing source code.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'SEO settings, structured content, redirects, responsive design, image optimization, and technical configuration can be considered throughout the Webflow build.',
  },
  {
    title: 'International Publishing',
    desc: 'Localization can support different languages and regions through localized content, URLs, SEO settings, and CMS publishing workflows.',
  },
  {
    title: 'A Platform That Can Stay Simple',
    desc: 'Webflow is powerful, but not every project needs extensive custom code or complex integrations. We use native capabilities first and add custom development only when the business requirement justifies it.',
  },
]

const comparisonData = [
  {
    factor: 'Visual Design Control',
    webflow: 'Strong',
    wordpress: 'Strong with custom themes/builds',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'CMS & Structured Content',
    webflow: 'Strong',
    wordpress: 'Very strong',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Marketing-Team Editing',
    webflow: 'Strong',
    wordpress: 'Strong with the right setup',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Custom Code',
    webflow: 'Strong',
    wordpress: 'Very high flexibility',
    wix: 'Supported within platform constraints',
  },
  {
    factor: 'Animations & Interactions',
    webflow: 'Strong',
    wordpress: 'Depends on implementation',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Integrations',
    webflow: 'APIs, apps, custom code',
    wordpress: 'Large plugin ecosystem and APIs',
    wix: 'Apps and integrations',
  },
  {
    factor: 'Localization',
    webflow: 'Supported',
    wordpress: 'Broad options through plugins/custom setup',
    wix: 'Supported',
  },
  {
    factor: 'Ecommerce',
    webflow: 'Suitable for selected use cases',
    wordpress: 'Strong',
    wix: 'Suitable for many business stores',
  },
  {
    factor: 'Infrastructure',
    webflow: 'Managed platform',
    wordpress: 'More technical management',
    wix: 'Managed platform',
    highlight: 'webflow',
  },
  {
    factor: 'Best Fit',
    webflow: 'Design-led marketing sites with structured content',
    wordpress: 'Content-heavy or highly extensible websites',
    wix: 'Businesses wanting easy website management and built-in tools',
  },
]

const platformRecommendations = [
  {
    platform: 'When We Recommend Webflow',
    desc: 'Webflow is often a practical fit when design precision, structured content, marketing-team editing, responsive control, and a managed hosting environment are important.',
    accent: true,
  },
  {
    platform: 'When We Recommend WordPress',
    desc: 'WordPress can make more sense when the project requires a broad plugin ecosystem, complex publishing workflows, or functionality that fits naturally into the WordPress ecosystem.',
    accent: false,
  },
  {
    platform: 'When We Recommend Wix',
    desc: 'Wix can be suitable when fast deployment, simple management, and built-in business functionality are more important than deeper design-system control.',
    accent: false,
  },
]

const whyChooseUsPillars = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, CMS architecture, development, integrations, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    title: 'CMS-First Planning',
    desc: 'We plan the content model before building pages so your team can add and update content without breaking the design structure.',
  },
  {
    title: 'Design & Development in One Workflow',
    desc: 'Visual design, responsive behavior, components, interactions, and CMS implementation are developed as one system rather than being handed between disconnected teams.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Webflow when design flexibility, structured content, and marketing-team editing are the right priorities. When the project requires a different architecture, we explain that before development starts.',
  },
  {
    title: 'Clean Custom-Code Strategy',
    desc: 'We use custom JavaScript, embeds, APIs, and external integrations when they solve genuine requirements while avoiding unnecessary code that makes the site harder to maintain.',
  },
  {
    title: 'SEO & Performance Built In',
    desc: 'We consider page structure, metadata, redirects, images, mobile behavior, accessibility, and performance throughout the build.',
  },
  {
    title: 'International-Ready Development',
    desc: 'For businesses serving multiple markets, we can plan localization, multilingual content, localized SEO, and regional publishing workflows around the project\'s requirements.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'CMS architecture, design, interactions, development, and testing move through defined review checkpoints so you can approve the direction before launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SECTION 1: CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Webflow Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end Webflow development for businesses that need design precision, structured content, and a manageable publishing workflow.
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
                  <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-frame-accent">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>

                  {service.supportedSources && (
                    <p className="mt-3 text-xs font-semibold text-frame-fg/80 border-l-2 border-frame-accent pl-3 py-1">
                      {service.supportedSources}
                    </p>
                  )}

                  <div className="mt-6 border-t-2 border-frame-border/60 pt-6">
                    <p className="text-xs font-black uppercase tracking-wider text-frame-accent mb-3">
                      What We Do
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t-2 border-frame-border/60 pt-5 text-xs font-medium italic text-frame-muted-fg leading-relaxed">
                  {service.note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WEBFLOW TECHNOLOGY STACK */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture &amp; Platform Components
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow Technology Stack
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Webflow development works best when the visual system, CMS, components, integrations, custom code, SEO, and publishing workflow are planned together. Depending on the project, our Webflow stack can include:
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Stack Layer 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tech.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-sm font-medium text-frame-muted-fg">
            We use the technology required by the project rather than adding complexity simply to make the technical stack look more advanced.
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WEBFLOW WORKS FOR MODERN MARKETING TEAMS */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Operational Agility
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Webflow Works for Modern Marketing Teams
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Webflow is particularly useful for organizations that need strong visual control, structured content, and the ability for marketing teams to publish without depending on developers for every routine update.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {marketingBenefits.map((item, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Benefit 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM COMPARISON */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision Framework
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow vs WordPress vs Wix
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The right website platform depends on design requirements, content workflows, editing needs, integrations, ecommerce complexity, and long-term technical requirements.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[700px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-6 ${row.highlight === 'webflow' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.webflow}
                    </td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.wix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RECOMMENDATION SCENARIOS */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {platformRecommendations.map((card, i) => (
              <div
                key={i}
                className={`border-2 p-6 sm:p-8 bg-frame-bg ${
                  card.accent ? 'border-frame-accent' : 'border-frame-border'
                }`}
              >
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-frame-fg">
                  {card.platform}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
            We recommend the platform based on the actual requirements rather than forcing every project into Webflow.
          </p>
        </div>
      </section>

      {/* SECTION 5: BANGLADESH & GLOBAL BUSINESSES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Regional &amp; International Delivery
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow Development for Bangladesh &amp; Global Businesses
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and builds Webflow websites for businesses across Bangladesh as well as international markets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Focus
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We consider mobile-first browsing, local content requirements, performance on varied connections, and practical publishing workflows so local teams can scale without bottlenecks.
              </p>
            </div>

            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Worldwide Reach
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We can structure websites around different markets, languages, localized content, domains, and SEO requirements across the US, UK, Australia, Canada, and UAE.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg">
            The implementation depends on the markets, languages, and localization requirements included in the project.
          </p>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE FRAMECIPHER */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Webflow Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Webflow development is not only about making a site look good. CMS architecture, responsive behavior, interactions, SEO, integrations, performance, and the way your team manages content after launch all affect the quality of the final website.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {whyChooseUsPillars.map((pillar, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
