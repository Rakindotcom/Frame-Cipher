import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Site Strategy & Planning',
    description: 'Every Wix project starts with a clear plan for what the website needs to achieve. We define the site\'s goals, target audience, key pages, calls to action, content requirements, and required functionality before development begins.',
    items: [
      'Business goals and primary conversion actions',
      'Sitemap and page structure',
      'Customer journey and navigation',
      'Content requirements',
      'Wix platform and editor selection',
      'Required apps, integrations, and custom functionality',
    ],
    note: 'A clear structure makes the website easier to build, easier to use, and easier to manage after launch.',
  },
  {
    tag: 'Service 02',
    title: 'Custom Wix Website Design',
    description: 'We design Wix websites around your brand instead of leaving a template unchanged.',
    items: [
      'Custom page layouts',
      'Brand-focused typography and visual hierarchy',
      'Mobile and responsive layouts',
      'Conversion-focused calls to action',
      'Forms and lead-capture areas',
      'Booking and inquiry interfaces',
      'Content sections designed around your actual business',
    ],
    note: 'The goal is a website that feels like your business, not a lightly edited template.',
  },
  {
    tag: 'Service 03',
    title: 'Wix Studio Development',
    description: 'Wix Studio is designed for more advanced professional website development and responsive control. We use Wix Studio when a project needs greater design precision, responsive breakpoints, custom layouts, advanced interactions, or deeper development flexibility.',
    items: [
      'Advanced responsive layouts',
      'Custom breakpoints and responsive behavior',
      'Custom CSS where appropriate',
      'Reusable design components',
      'Advanced interactions and animations',
      'CMS-connected page structures',
      'Custom code and API-based functionality',
      'Client-friendly editing and handover',
    ],
    note: 'We recommend Wix Studio when the project needs more control than a standard Wix Editor build.',
  },
  {
    tag: 'Service 04',
    title: 'Wix Velo Development & Custom Functionality',
    description: 'When built-in Wix features are not enough, Velo and Wix\'s developer tools can extend the site\'s functionality. We use custom development when it solves a real business requirement rather than adding unnecessary complexity.',
    items: [
      'Custom forms and workflows',
      'Database-driven functionality',
      'Dynamic content',
      'Custom calculations and business logic',
      'Member-specific functionality',
      'API connections',
      'Third-party service integrations',
      'Custom interactions',
      'Backend functions',
      'Advanced booking or ecommerce flows',
    ],
    note: 'The exact implementation depends on the Wix capabilities, APIs, apps, and technical requirements involved in the project.',
  },
  {
    tag: 'Service 05',
    title: 'Wix CMS & Dynamic Website Development',
    description: 'Wix CMS can separate your content from the page design, making it easier to manage structured information as your website grows.',
    items: [
      'Service directories',
      'Portfolio projects',
      'Team profiles',
      'Property or listing websites',
      'Location pages',
      'Case studies',
      'Blog and editorial content',
      'Event or resource libraries',
      'Other structured business content',
    ],
    note: 'Dynamic pages allow one page structure to display different content items while keeping the design consistent. This is useful when your website needs many similar pages without manually building every page from scratch.',
  },
  {
    tag: 'Service 06',
    title: 'Wix Integrations & Business Automation',
    description: 'Your website often needs to work with more than Wix alone. We can configure supported apps, APIs, and third-party tools for your business workflows.',
    items: [
      'Lead capture and CRM',
      'Email marketing',
      'Booking systems',
      'Analytics and reporting',
      'Live chat',
      'Forms and notifications',
      'Payment services',
      'Marketing platforms',
      'Customer data workflows',
      'External APIs and business tools',
    ],
    note: 'We select integrations based on the actual workflow instead of adding unnecessary apps that make the website harder to maintain.',
  },
  {
    tag: 'Service 07',
    title: 'Wix Ecommerce Development',
    description: 'Wix can support ecommerce websites that need a streamlined storefront and manageable product operations.',
    items: [
      'Product catalogs',
      'Categories and collections',
      'Product variations',
      'Product pages',
      'Cart and checkout',
      'Payment setup',
      'Shipping rules',
      'Inventory management',
      'Promotions and discounts',
      'Order management',
      'Product SEO',
      'Analytics and conversion tracking',
    ],
    note: 'We also review catalog size, payment requirements, fulfillment workflows, and future growth before recommending Wix Ecommerce. For complex ecommerce operations, another platform may be more appropriate.',
  },
  {
    tag: 'Service 08',
    title: 'Wix SEO & Technical Performance Optimization',
    description: 'We build the SEO foundation into the website from the start rather than treating it as an afterthought.',
    items: [
      'SEO-friendly page structure',
      'Title tags and meta descriptions',
      'Heading hierarchy',
      'Image optimization',
      'Internal linking',
      'Sitemap and indexation checks',
      'Canonical and URL configuration where applicable',
      'Redirect planning',
      'Structured data where supported',
      'Mobile optimization',
      'Analytics and search measurement',
      'Performance-focused image and page configuration',
    ],
    note: 'We optimize what the platform allows and explain any platform-specific constraints before launch. No website platform can guarantee rankings on its own. Strong SEO also depends on content, competition, authority, technical quality, and ongoing optimization.',
  },
  {
    tag: 'Service 09',
    title: 'Wix Website Redesign & Optimization',
    description: 'An existing Wix website may not need a complete replacement. We can redesign and improve an existing Wix website when the platform still fits the business.',
    items: [
      'Outdated visual design',
      'Poor mobile layouts',
      'Weak navigation',
      'Low-converting page structures',
      'Inconsistent branding',
      'Difficult content management',
      'Slow or heavy pages',
      'Weak SEO foundations',
      'Poor calls to action',
      'Existing Wix sites that need a Wix Studio rebuild',
    ],
    note: 'We review the existing website first and recommend what should be retained, rebuilt, or removed.',
  },
  {
    tag: 'Service 10',
    title: 'Wix Migration & Website Rebuild',
    description: 'We can help businesses move an existing website to Wix when Wix is a better fit for their current needs.',
    items: [
      'WordPress to Wix',
      'Squarespace to Wix',
      'Webflow to Wix',
      'Existing Wix to Wix Studio',
      'Content and media migration',
      'Page structure recreation',
      'URL and redirect mapping',
      'Metadata migration',
      'Analytics setup',
      'SEO preservation checks',
      'Mobile and functionality testing',
    ],
    note: 'A migration should protect useful content and existing search visibility as much as possible while improving the new site\'s structure.',
  },
  {
    tag: 'Service 11',
    title: 'Ongoing Wix Maintenance & Support',
    description: 'After launch, we can provide ongoing support for businesses that need help maintaining or improving their Wix website.',
    items: [
      'Content updates',
      'Layout fixes',
      'App and integration checks',
      'Performance reviews',
      'Troubleshooting',
      'Minor functionality changes',
      'SEO updates',
      'Ongoing website improvements',
    ],
    note: 'Ongoing support is scoped separately based on the level of assistance your website requires.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities & Engineering" title="Our Wix Development Services" index="06">
          We build Wix websites around your business goals, content, customers, and day-to-day workflows. From a simple business website to a more advanced Wix Studio build, we choose the right level of functionality for the project.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[360px]"
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
                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-5 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {service.items.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-frame-border/40 pt-4">
                <p className="text-xs italic text-frame-muted-fg">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}