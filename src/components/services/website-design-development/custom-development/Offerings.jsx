const coreServices = [
  {
    tag: 'Service 01',
    title: 'Technical Discovery & Architecture',
    subtitle: 'Every custom project starts with understanding what the system actually needs to do.',
    description: 'We review your business model, users, workflows, existing software, data, integrations, performance requirements, and future plans before defining the technical direction.',
    bullets: [
      'Platform-fit assessment',
      'System architecture planning',
      'Data model planning',
      'API and integration mapping',
      'Authentication requirements',
      'User roles and permissions',
      'Hosting and deployment planning',
      'Technical scope and milestones',
    ],
    note: 'Good architecture reduces unnecessary complexity and gives future development a stronger foundation.',
  },
  {
    tag: 'Service 02',
    title: 'UI/UX Design for Custom Applications',
    subtitle: 'Custom applications need interfaces built around tasks, not templates.',
    description: 'We design user experiences around real workflows, user roles, content, actions, and business requirements.',
    bullets: [
      'User flow mapping',
      'Wireframes',
      'Custom interface design',
      'Responsive layouts',
      'Reusable components',
      'Design systems',
      'Accessibility considerations',
      'Developer-ready design handoff',
    ],
    note: 'Every screen should support a specific user task or business goal.',
  },
  {
    tag: 'Service 03',
    title: 'Next.js App Router & Modern Architecture',
    subtitle: 'For new projects, we use modern Next.js architecture where it fits the application requirements.',
    description: 'We choose the architecture based on how your application handles content, data, users, and interactions.',
    bullets: [
      'App Router',
      'Server Components',
      'Client Components',
      'Server Actions',
      'Static rendering',
      'Dynamic rendering',
      'Caching and revalidation',
      'Structured route architecture',
      'Server-side data fetching',
      'Streaming where appropriate',
    ],
    note: 'The goal is not to use every feature simply because it exists. We choose the architecture based on how your application handles content, data, users, and interactions.',
  },
  {
    tag: 'Service 04',
    title: 'Full-Stack Next.js Development',
    subtitle: 'We develop the frontend and application logic as a connected system.',
    description: 'This approach keeps the application\'s frontend, backend, data, and business logic aligned.',
    bullets: [
      'Next.js and React frontend development',
      'Custom interfaces',
      'Backend business logic',
      'Database-connected functionality',
      'API development',
      'Forms and workflows',
      'Admin interfaces',
      'Customer dashboards',
      'Custom calculations',
      'Business rules',
      'Third-party integrations',
    ],
    note: 'This approach keeps the application\'s frontend, backend, data, and business logic aligned.',
  },
  {
    tag: 'Service 05',
    title: 'API & Backend Development',
    subtitle: 'Custom applications often need their own APIs and backend logic.',
    description: 'Where an external platform already provides the required API, we integrate with it instead of rebuilding functionality unnecessarily.',
    bullets: [
      'REST APIs',
      'API-driven application features',
      'Database-backed functionality',
      'Custom business logic',
      'Webhooks',
      'External system integrations',
      'Data validation',
      'Application workflows',
    ],
    note: 'Where an external platform already provides the required API, we integrate with it instead of rebuilding functionality unnecessarily.',
  },
  {
    tag: 'Service 06',
    title: 'Authentication & User Management',
    subtitle: 'Applications with multiple user types need clear access rules and secure account workflows.',
    description: 'Authentication and authorization are designed around the actual users and responsibilities within your application.',
    bullets: [
      'Registration and login',
      'Password recovery',
      'User profiles',
      'Role-based access',
      'Permission systems',
      'Protected application areas',
      'Customer accounts',
      'Admin access',
      'Team or organization-based access',
    ],
    note: 'Authentication and authorization are designed around the actual users and responsibilities within your application.',
  },
  {
    tag: 'Service 07',
    title: 'Performance, Security & Scalability',
    subtitle: 'Performance and security are considered during architecture rather than left until the end.',
    description: 'The right architecture depends on expected traffic, data volume, application complexity, and business requirements.',
    bullets: [
      'Appropriate rendering strategies',
      'Image and asset optimization',
      'JavaScript and bundle optimization',
      'Caching strategies',
      'API performance considerations',
      'Secure authentication',
      'Input validation',
      'Access control',
      'Database optimization',
      'Infrastructure planning',
    ],
    note: 'The right architecture depends on expected traffic, data volume, application complexity, and business requirements.',
  },
  {
    tag: 'Service 08',
    title: 'Testing & Quality Assurance',
    subtitle: 'Custom software needs structured testing before launch.',
    description: 'Testing is introduced throughout development instead of being treated only as a final launch task.',
    bullets: [
      'Functional testing',
      'Component testing',
      'Integration testing',
      'API testing',
      'End-to-end testing',
      'Cross-browser testing',
      'Responsive testing',
      'Performance testing',
      'Regression testing',
      'Accessibility checks',
    ],
    note: 'Testing is introduced throughout development instead of being treated only as a final launch task.',
  },
  {
    tag: 'Service 09',
    title: 'Ongoing Custom Development',
    subtitle: 'Your product may continue to change after launch.',
    description: 'Ongoing development is scoped around your product roadmap and changing business requirements.',
    bullets: [
      'New features',
      'New integrations',
      'Workflow improvements',
      'Performance optimization',
      'Dependency updates',
      'Security improvements',
      'Bug fixes',
      'UI refinements',
      'Application enhancements',
    ],
    note: 'Ongoing development is scoped around your product roadmap and changing business requirements.',
  },
]

const solutionTypes = [
  {
    title: 'Custom Business Websites',
    desc: 'Custom websites for companies that have outgrown conventional website builders or need more specialized functionality.',
    bullets: [
      'Custom content structures',
      'Advanced interactions',
      'API integrations',
      'Multilingual content',
      'Lead workflows',
      'Application-specific features',
    ],
  },
  {
    title: 'SaaS Applications',
    desc: 'We build SaaS platforms around the workflows your customers and internal teams need.',
    bullets: [
      'User onboarding',
      'Authentication',
      'Subscription workflows',
      'Billing',
      'Dashboards',
      'User roles',
      'Admin controls',
      'Notifications',
      'Usage-based features',
      'API integrations',
    ],
  },
  {
    title: 'Dashboards & Customer Portals',
    desc: 'We build authenticated interfaces for customers, employees, partners, and administrators.',
    bullets: [
      'Customer portals',
      'Admin dashboards',
      'Partner portals',
      'Employee dashboards',
      'Reporting interfaces',
      'Account management',
      'Operational dashboards',
      'Data-driven application interfaces',
    ],
  },
  {
    title: 'CRM & Internal Business Applications',
    desc: 'When existing software does not match the way your team operates, a custom application can be designed around your actual workflow.',
    bullets: [
      'Lead management',
      'Customer records',
      'Internal approvals',
      'Staff workflows',
      'Operational dashboards',
      'Reporting',
      'Custom roles',
      'External system integrations',
    ],
  },
  {
    title: 'Marketplaces & Multi-User Platforms',
    desc: 'For businesses that connect multiple user groups, supporting complex multi-sided workflows.',
    bullets: [
      'User registration',
      'Seller or partner onboarding',
      'Listings',
      'Customer accounts',
      'Transactions',
      'Dashboards',
      'Admin management',
      'Notifications',
      'Role-based access',
    ],
  },
  {
    title: 'Headless Ecommerce',
    desc: 'A headless approach gives businesses more control over the storefront experience while keeping a commerce platform behind the scenes.',
    bullets: [
      'Headless Shopify',
      'Headless WooCommerce',
      'API-based product catalogs',
      'Custom storefronts',
      'Advanced product interfaces',
      'Custom filtering',
      'Content integrations',
      'Performance-focused ecommerce architecture',
    ],
    note: 'We recommend headless ecommerce when its additional development complexity is justified by the business requirements.',
  },
  {
    title: 'Content & Publishing Platforms',
    desc: 'Powering content-heavy websites that need greater control over performance, design, and structured content.',
    bullets: [
      'Publishing platforms',
      'Editorial websites',
      'Knowledge bases',
      'Content libraries',
      'Resource platforms',
      'Large content-driven websites',
    ],
  },
  {
    title: 'AI-Powered Web Applications',
    desc: 'When AI is part of the product itself, a custom Next.js application provides the interface around AI workflows, user accounts, dashboards, APIs, and business logic.',
    bullets: [
      'AI-assisted workflows',
      'User-specific AI features',
      'Dashboard interfaces',
      'API-based AI functionality',
      'Usage tracking',
      'Account management',
      'Supporting business systems',
    ],
  },
]

const migrationTypes = [
  {
    title: 'WordPress to Next.js',
    desc: 'Rebuild the frontend in Next.js while preserving important content structures, URLs, metadata, redirects, and SEO requirements.',
  },
  {
    title: 'React SPA to Next.js',
    desc: 'Modernize an existing React application where the business needs improved architecture, rendering options, routing, or performance.',
  },
  {
    title: 'Pages Router to App Router',
    desc: 'Refactor an existing Next.js application toward the App Router while reviewing data fetching, component boundaries, routing, caching, and existing functionality.',
  },
  {
    title: 'Legacy Frontend Modernization',
    desc: 'Replace outdated frontend architecture with a more maintainable Next.js structure while protecting the business functionality that already works.',
  },
  {
    title: 'Existing Next.js Codebase Takeover',
    desc: 'We can review and continue an existing Next.js project when a business needs a new development partner, technical improvements, or ongoing feature development.',
  },
]

const headlessCmsFeatures = [
  'Structured content',
  'Dynamic pages',
  'Case studies',
  'Service content',
  'Location pages',
  'Resource libraries',
  'Editorial workflows',
  'Preview and publishing workflows',
]

const seoFeatures = [
  'Search-friendly URL structures',
  'Page titles and descriptions',
  'Dynamic metadata',
  'Open Graph metadata',
  'Canonical URL handling',
  'XML sitemap configuration',
  'Robots directives',
  'Structured data where appropriate',
  'Semantic HTML',
  'Internal linking',
  'SEO-friendly rendering decisions',
  'Image optimization',
  'Redirect planning during migrations',
]

const performanceAreas = [
  'Rendering strategy',
  'Server and client component boundaries',
  'JavaScript bundle size',
  'Image and asset delivery',
  'Data fetching',
  'Caching and revalidation',
  'API response efficiency',
  'Code splitting',
  'Lazy loading',
  'Mobile performance',
  'Core Web Vitals',
]

const accessibilityAreas = [
  'Semantic HTML',
  'Keyboard navigation',
  'Focus management',
  'Accessible forms',
  'Screen-reader support',
  'Appropriate ARIA usage',
  'Readable interfaces',
  'Responsive interaction patterns',
]

const devopsAreas = [
  'Production environment setup',
  'Hosting configuration',
  'Environment variables',
  'Preview environments',
  'CI/CD workflows',
  'Deployment configuration',
  'Error monitoring',
  'Performance monitoring',
  'Application analytics',
  'Production troubleshooting',
  'Release and rollback planning',
]

const techStack = [
  {
    category: 'Frontend',
    desc: 'Next.js, React, TypeScript, and the frontend technologies selected for the project\'s requirements.',
  },
  {
    category: 'UI & Design Systems',
    desc: 'Reusable interface components, responsive systems, and the styling approach appropriate for the application.',
  },
  {
    category: 'Backend & APIs',
    desc: 'Application logic, APIs, databases, authentication, and integrations based on the system architecture.',
  },
  {
    category: 'Data & CMS',
    desc: 'The database and content management approach selected around the application\'s data model and editorial workflow.',
  },
  {
    category: 'Payments & Integrations',
    desc: 'Payment services, CRM systems, ERP platforms, external APIs, and other business tools where required.',
  },
  {
    category: 'Deployment & Infrastructure',
    desc: 'Hosting, deployment, monitoring, and infrastructure configured according to the application\'s operational requirements.',
  },
]

const comparisonData = [
  {
    requirement: 'Custom application logic',
    nextjs: 'Strong fit',
    wordpress: 'Possible with development',
    platforms: 'More limited for complex logic',
    highlight: 'nextjs',
  },
  {
    requirement: 'Content-driven websites',
    nextjs: 'Strong',
    wordpress: 'Strong',
    platforms: 'Strong for many use cases',
  },
  {
    requirement: 'Visual editing',
    nextjs: 'Depends on CMS setup',
    wordpress: 'Strong with the right setup',
    platforms: 'Strong',
  },
  {
    requirement: 'Complex integrations',
    nextjs: 'Strong',
    wordpress: 'Strong with development',
    platforms: 'Depends on available integrations',
    highlight: 'nextjs',
  },
  {
    requirement: 'SaaS / dashboards',
    nextjs: 'Strong fit',
    wordpress: 'Possible with additional architecture',
    platforms: 'Usually less suitable',
    highlight: 'nextjs',
  },
  {
    requirement: 'Headless architecture',
    nextjs: 'Strong fit',
    wordpress: 'Strong option',
    platforms: 'Depends on platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Technical flexibility',
    nextjs: 'High',
    wordpress: 'High with development',
    platforms: 'Varies by platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Platform maintenance',
    nextjs: 'More development responsibility',
    wordpress: 'More ongoing management',
    platforms: 'Lower for many hosted solutions',
  },
  {
    requirement: 'Best fit',
    nextjs: 'Custom websites, applications, SaaS, portals, advanced systems',
    wordpress: 'Content-driven and extensible CMS websites',
    platforms: 'Businesses prioritizing managed editing and faster implementation',
  },
]

const whyChooseUsPillars = [
  {
    title: 'Business-First Architecture',
    desc: 'We start with business requirements, users, workflows, data, and integrations before deciding how the system should be built.',
  },
  {
    title: 'One In-House Team',
    desc: 'Strategy, UX, architecture, design, development, and launch support stay coordinated within one team.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend custom development when it solves a real limitation. When WordPress, Shopify, Webflow, Wix, or another platform is more practical, we say so.',
  },
  {
    title: 'Full-Stack Capability',
    desc: 'Frontend, backend, APIs, authentication, integrations, and application logic are treated as one connected system.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'We consider rendering, technical SEO, data delivery, mobile experience, and application performance from the beginning.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Important stages of architecture, design, and development go through defined review points before the project moves forward.',
  },
  {
    title: 'Built for Long-Term Maintenance',
    desc: 'The objective is not simply to launch the application. We structure the system so new features and future improvements can be added without unnecessary technical debt.',
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
              Our Custom / Next.js Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build custom Next.js websites and applications around your business requirements, technical needs, users, content, integrations, and long-term plans.
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

      {/* SECTION 2: SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Applied Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js Solutions for Different Business Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Next.js can power much more than a standard marketing website. We use it when a project needs greater control over functionality, data, integrations, performance, or user experience.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {solutionTypes.map((sol, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Solution 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                    {sol.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                    {sol.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-frame-accent">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {sol.note && (
                  <p className="mt-6 border-t border-frame-border/60 pt-3 text-xs italic text-frame-muted-fg">
                    {sol.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MIGRATION & MODERNIZATION */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Replatforming
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js Migration &amp; Modernization
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Moving an existing website or application to Next.js requires more than rebuilding the frontend. We first review the current architecture, content, URLs, data, integrations, functionality, and technical limitations.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-2 border-frame-border">
            {migrationTypes.map((mig, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-7">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Modernization 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-base sm:text-lg font-bold uppercase text-frame-fg">
                    {mig.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                    {mig.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg border-l-2 border-frame-accent pl-3 py-1">
            A migration plan should protect valuable content and functionality while giving the new architecture a clear path forward.
          </p>
        </div>
      </section>

      {/* SECTION 4: HEADLESS CMS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Decoupled Content Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js with Headless CMS
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A headless CMS can separate content management from the frontend experience. This can be useful when your content team needs an easy editing system while the website needs a highly customized Next.js frontend. Depending on the project, we can connect Next.js with a suitable headless CMS for:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {headlessCmsFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-4 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
            The CMS is selected around the content model, editorial process, integrations, and long-term requirements rather than added simply because it is popular.
          </p>
        </div>
      </section>

      {/* SECTION 5: SEO ARCHITECTURE */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Technical Discovery / Organic Acquisition
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js SEO Architecture
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              SEO should be considered during architecture, especially when organic search is an important acquisition channel. Our Next.js SEO foundation can include:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {seoFeatures.map((seo, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{seo}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-xs sm:text-sm text-frame-muted-fg space-y-2 leading-relaxed">
            <p>
              Next.js provides built-in capabilities for metadata and different rendering approaches, which can be used as part of a broader technical SEO strategy.
            </p>
            <p className="italic">
              Technical implementation alone does not guarantee rankings. Content quality, search intent, competition, authority, and ongoing optimization still matter.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: PERFORMANCE & CORE WEB VITALS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Excellence
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js Performance &amp; Core Web Vitals
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Performance should be considered during development rather than patched after launch. We focus on the parts of the application that can affect real user experience, including:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {performanceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">•</span>
                <span>{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
            Next.js supports different rendering approaches for different use cases, such as static and dynamic rendering. The right choice depends on whether content is shared, personalized, frequently changing, or data-driven. We focus on measured improvements rather than promising an arbitrary performance score for every project.
          </p>
        </div>
      </section>

      {/* SECTION 7: ACCESSIBILITY & INCLUSIVE DEVELOPMENT */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Universal Usability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Accessibility &amp; Inclusive Next.js Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Accessibility starts during interface and frontend development. Depending on the project, we consider:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {accessibilityAreas.map((acc, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{acc}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
            Accessibility requirements depend on the audience, project scope, and applicable standards. We address them as part of the design and development process rather than leaving them as a final check.
          </p>
        </div>
      </section>

      {/* SECTION 8: DEPLOYMENT, MONITORING & DEVOPS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Production Reliability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js Deployment, Monitoring &amp; DevOps
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A completed codebase still needs a reliable path to production. Depending on the project, deployment support can include:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {devopsAreas.map((dev, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">•</span>
                <span>{dev}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
            The deployment approach is selected around the application&apos;s architecture, traffic, integrations, operational requirements, and future growth.
          </p>
        </div>
      </section>

      {/* SECTION 9: OUR NEXT.JS TECHNOLOGY STACK */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture &amp; Platform Stack
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Next.js Technology Stack
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We choose the technology stack around the project rather than forcing every application into the same setup. The final stack is confirmed during technical discovery and architecture planning.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Layer 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tech.category}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: IS NEXT.JS RIGHT FOR YOUR PROJECT? */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Feasibility &amp; Assessment
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Is Next.js Right for Your Project?
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Next.js is powerful, but custom development should not be the default solution for every website or application. We recommend Next.js when the project benefits from greater control over performance, application architecture, integrations, functionality, or long-term development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-7 sm:p-9">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Scenario A
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                Next.js Can Be a Strong Fit When:
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-fg/90">
                {[
                  'The project needs advanced custom functionality',
                  'Performance and SEO are important',
                  'The website combines content with application features',
                  'Custom authentication or user roles are required',
                  'Multiple systems need to communicate',
                  'You are building SaaS or a customer portal',
                  'A headless architecture makes sense',
                  'The product will evolve significantly over time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-frame-bg p-7 sm:p-9">
              <span className="text-xs font-black uppercase tracking-wider text-frame-muted-fg">
                Scenario B
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                A Platform May Be Better When:
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
                {[
                  'The project is a straightforward business website',
                  'Standard ecommerce functionality is enough',
                  'The team needs a simple managed editing environment',
                  'Existing platform functionality already solves the requirement',
                  'The additional cost of custom development is not justified',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-frame-border font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
            Our role is not to sell custom development simply because it is technically advanced. We assess whether it creates enough business value to justify the investment.
          </p>
        </div>
      </section>

      {/* SECTION 11: PLATFORM COMPARISON */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision Framework
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js vs WordPress, Webflow &amp; Other Platforms
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The right technology depends on what your website or application needs to accomplish.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[720px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Requirement</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Next.js</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow / Hosted Platforms</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-6 font-bold text-frame-fg">{row.requirement}</td>
                    <td className={`p-5 md:p-6 ${row.highlight === 'nextjs' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.nextjs}
                    </td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.platforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
            We recommend the platform based on your requirements, budget, internal team, content workflow, integrations, and long-term plans.
          </p>
        </div>
      </section>

      {/* SECTION 12: BANGLADESH & INTERNATIONAL */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Regional &amp; International Delivery
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Custom / Next.js Development for Bangladesh &amp; International Businesses
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka and works with businesses in Bangladesh as well as clients serving international markets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Ecosystem
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For Bangladesh-Based Projects
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We consider local payment systems, mobile-first usage patterns, local business workflows, and integrations relevant to the market.
              </p>
            </div>

            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global Applications
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For International Projects
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We adapt the application&apos;s content, user experience, integrations, operational requirements, and technical considerations around the target market across the US, UK, Australia, Canada, and UAE.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg">
            The technical approach remains project-specific rather than using one fixed architecture for every client.
          </p>
        </div>
      </section>

      {/* SECTION 13: WHY CHOOSE FRAMECIPHER */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Custom &amp; Next.js Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Custom software needs closer collaboration than a standard website build. We structure our work around clear architecture, accountable development, and long-term maintainability.
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
