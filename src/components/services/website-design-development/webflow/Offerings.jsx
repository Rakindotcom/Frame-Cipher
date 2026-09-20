import { SectionIntro } from '../../../Kinetic'

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

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities" title="Our Webflow Development Services" index="08">
          We provide end-to-end Webflow development for businesses that need design precision, structured content, and a manageable publishing workflow.
        </SectionIntro>

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
  )
}