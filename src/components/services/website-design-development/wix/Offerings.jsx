import { PosterButton } from '../../../Kinetic'

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

const businessSolutions = [
  {
    number: '01',
    title: 'Small Business Websites',
    description: 'Professional websites for businesses that need a clear online presence, service information, lead capture, and easy content updates.',
  },
  {
    number: '02',
    title: 'Service Business Websites',
    description: 'Websites for agencies, consultants, contractors, clinics, professionals, and other service providers that need strong service pages, inquiries, bookings, and calls to action.',
  },
  {
    number: '03',
    title: 'Startup Websites',
    description: 'Flexible websites for startups that need to launch quickly, explain their offer clearly, validate their positioning, and keep managing content as the business grows.',
  },
  {
    number: '04',
    title: 'Corporate & Professional Websites',
    description: 'Structured websites for established businesses that need strong brand presentation, organized content, lead generation, company information, and internal review workflows.',
  },
  {
    number: '05',
    title: 'Portfolio Websites',
    description: 'Visual websites for designers, photographers, architects, agencies, creators, and professionals who need to present projects through a consistent content structure.',
  },
  {
    number: '06',
    title: 'Booking & Appointment Websites',
    description: 'Websites that connect visitors with appointments, consultations, classes, or other scheduled services through supported Wix booking functionality.',
  },
  {
    number: '07',
    title: 'Membership Websites',
    description: 'Wix websites that require controlled member experiences, gated content, profiles, or member-focused interactions where the required functionality fits the platform.',
  },
  {
    number: '08',
    title: 'Ecommerce Websites',
    description: 'Online stores for businesses that need product catalogs, checkout, payments, orders, and manageable store content within the Wix ecosystem.',
  },
  {
    number: '09',
    title: 'Dynamic CMS Websites',
    description: 'Content-driven websites that use structured collections and dynamic pages to publish larger sets of similar content without manually designing every page.',
  },
]

const wixGoodFitPoints = [
  'You need a professional website without managing a complex technical stack',
  'Your team wants to edit content easily',
  'You need a relatively fast website launch',
  'Your site needs business features such as forms, bookings, CMS, or ecommerce',
  'You want design flexibility without managing separate hosting infrastructure',
  'Your website does not require highly specialized backend architecture',
]

const anotherPlatformBetterPoints = [
  'The project depends on highly specialized backend functionality',
  'The ecommerce operation has unusually complex requirements',
  'The website needs a highly customized application architecture',
  'Your team needs platform capabilities that Wix does not support',
  'Long-term technical requirements make another ecosystem a better fit',
]

const comparisonData = [
  {
    factor: 'Launch Speed',
    wix: 'Fast for many projects',
    wordpress: 'Moderate',
    custom: 'Usually longer',
  },
  {
    factor: 'Ease of Editing',
    wix: 'Strong',
    wordpress: 'Strong with the right setup',
    custom: 'Depends on the system',
  },
  {
    factor: 'Design Flexibility',
    wix: 'Strong, especially with Wix Studio',
    wordpress: 'Very high with custom themes',
    custom: 'Very high',
  },
  {
    factor: 'Custom Functionality',
    wix: 'Strong for supported use cases and APIs',
    wordpress: 'Very high with plugins and custom development',
    custom: 'Highest flexibility',
  },
  {
    factor: 'Ecommerce',
    wix: 'Suitable for many stores',
    wordpress: 'Strong with WooCommerce and other solutions',
    custom: 'Fully customizable',
  },
  {
    factor: 'CMS & Dynamic Content',
    wix: 'Strong with Wix CMS',
    wordpress: 'Strong with custom structures',
    custom: 'Fully customizable',
  },
  {
    factor: 'Maintenance',
    wix: 'Managed platform',
    wordpress: 'Requires more technical management',
    custom: 'Requires ongoing development',
  },
  {
    factor: 'Best Fit',
    wix: 'Businesses wanting managed infrastructure and easy editing',
    wordpress: 'Businesses needing a broad ecosystem and deeper extensibility',
    custom: 'Complex applications and specialized systems',
  },
]

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, content structure, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    tag: 'Pillar 02',
    title: 'Platform-Neutral Recommendations',
    description: 'We recommend Wix when it fits the project. When another platform is more suitable, we explain why instead of forcing the project into Wix.',
  },
  {
    tag: 'Pillar 03',
    title: 'Business-First Website Planning',
    description: 'We start with the website\'s purpose, target audience, customer journey, content structure, and conversion goals before choosing the implementation approach.',
  },
  {
    tag: 'Pillar 04',
    title: 'Wix Studio & Custom Development',
    description: 'We can go beyond standard drag-and-drop builds when the project needs advanced responsive design, CMS functionality, custom code, APIs, or other supported integrations.',
  },
  {
    tag: 'Pillar 05',
    title: 'SEO-Ready Foundations',
    description: 'We consider site structure, metadata, internal linking, indexation, mobile experience, performance, and analytics from the beginning.',
  },
  {
    tag: 'Pillar 06',
    title: 'Easy Client Handover',
    description: 'The finished website should remain manageable after launch. We provide the agreed access, setup, and basic guidance needed to manage the site confidently.',
  },
  {
    tag: 'Pillar 07',
    title: 'Transparent Review Process',
    description: 'We use review checkpoints throughout the project so you can approve structure, design, functionality, and content direction before launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR WIX DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities &amp; Engineering
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Wix Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build Wix websites around your business goals, content, customers, and day-to-day workflows. From a simple business website to a more advanced Wix Studio build, we choose the right level of functionality for the project.
            </p>
          </div>

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

      {/* 2. WIX SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Versatility / Specific Niches
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Wix Solutions for Different Business Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Wix can support different website models when the platform matches the business requirements. We tailor the structure, content, functionality, and editing experience around what each business needs.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessSolutions.map((item, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[200px]">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Solution {item.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IS WIX THE RIGHT PLATFORM FOR YOUR BUSINESS? */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Fit &amp; Evaluation
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Is Wix the Right Platform for Your Business?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Wix can be an excellent fit for many businesses, but choosing a website platform should start with requirements rather than trends.
              </p>
              <p>
                We recommend Wix when its editing experience, built-in features, development options, and long-term flexibility match what your business actually needs.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* GOOD FIT */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-emerald-500">
                  Recommended For
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Wix Can Be a Good Fit When:
                </h3>
                <ul className="mt-6 space-y-3 text-sm sm:text-base font-medium text-frame-fg/90">
                  {wixGoodFitPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ANOTHER PLATFORM */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-amber-500">
                  Alternative Architecture
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Another Platform May Be Better When:
                </h3>
                <ul className="mt-6 space-y-3 text-sm sm:text-base font-medium text-frame-fg/90">
                  {anotherPlatformBetterPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold">&rarr;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* OUR APPROACH */}
          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Our Advisory Standard
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Our Approach
            </h3>
            <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              We do not recommend Wix simply because Wix is what you asked for. We first review the business model, content structure, integrations, functionality, SEO requirements, ecommerce needs, and future plans. Then we recommend the platform that makes the most practical sense for the project.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WIX VS WORDPRESS VS CUSTOM DEVELOPMENT */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Architecture &amp; Decision Matrix
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Wix vs WordPress vs Custom Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The right platform depends on the website&apos;s goals, functionality, content workflow, and long-term requirements.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom Development</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.wix}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RECOMMENDATION TAKEAWAYS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 01</span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  When We Recommend Wix
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  Wix is often a practical choice when ease of management, professional design, business functionality, and a managed platform are priorities.
                </p>
              </div>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 02</span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  When We Recommend WordPress
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  WordPress may be better when the project needs a broader plugin ecosystem, deeper content flexibility, or functionality that fits the WordPress ecosystem more naturally.
                </p>
              </div>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 03</span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  When We Recommend Custom Development
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  Custom development becomes more appropriate when the website is really a software product, application, or highly specialized digital system rather than a conventional business website.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-bold uppercase tracking-wider text-frame-fg">
              The goal is not to choose the most complicated platform. It is to choose the platform that fits the project.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WIX DEVELOPMENT FOR BANGLADESH & INTERNATIONAL BUSINESSES */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Regional &amp; Global Execution
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Wix Development for Bangladesh &amp; International Businesses
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher builds Wix websites for businesses in Bangladesh and for clients serving international markets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Domestic Market Optimization
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For Bangladesh-Based Businesses
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  For Bangladesh-based businesses, we consider practical local requirements such as mobile-first browsing, clear inquiry options, WhatsApp or direct-call actions, local business information, and Bangla-English content where needed.
                </p>
              </div>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  International Standards
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For International Businesses
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  For international businesses, we adapt the website structure, messaging, content, forms, and integrations around the target market and business model.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The goal is not to apply one local template everywhere. We build the website around the audience, market, and business requirements of each project.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE FRAMECIPHER FOR WIX DEVELOPMENT */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Wix Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build Wix websites around business requirements, not around a fixed template or one-size-fits-all package.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyChoosePillars.map((diff, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {diff.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {diff.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Start Your Wix Project &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
