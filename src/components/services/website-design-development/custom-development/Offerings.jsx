const coreServices = [
  {
    tag: 'Service 01',
    title: 'Technical Discovery & Architecture',
    description: 'We evaluate your business model, users, workflows, and integrations to design a resilient system architecture before writing code.',
    bullets: [
      'Platform-fit assessment and technology stack selection.',
      'Database schema, entity relationships, and data modeling.',
      'API routing, webhooks, and third-party integration mapping.',
      'User roles, security perimeters, and cloud deployment roadmap.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'UI/UX Design for Custom Applications',
    description: 'Custom applications demand interfaces engineered around user workflows, micro-interactions, and conversion clarity.',
    bullets: [
      'Task-focused user journeys and interactive wireframing.',
      'Bespoke design systems with modular, reusable components.',
      'Responsive mobile-first layouts and WCAG accessibility standards.',
      'Figma-to-React precision with detailed developer specifications.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'Next.js App Router Architecture',
    description: 'Leveraging modern Next.js server features to maximize performance, reduce client JavaScript, and streamline data fetching.',
    bullets: [
      'React Server Components (RSC) and Server Actions.',
      'Hybrid rendering: Static Site Generation (SSG) and dynamic SSR.',
      'Incremental Static Regeneration (ISR) and smart cache revalidation.',
      'Streaming UI with Suspense boundaries for zero perceived latency.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'Full-Stack Application Development',
    description: 'Developing frontend and server application logic as a tightly integrated, secure, and maintainable product.',
    bullets: [
      'Tailored customer portals, client dashboards, and admin panels.',
      'Database-connected functionality (PostgreSQL, MySQL, MongoDB).',
      'Complex business logic, calculation engines, and workflows.',
      'State management tuned for interactive, data-dense interfaces.',
    ],
  },
  {
    tag: 'Service 05',
    title: 'API & Backend Integration',
    description: 'Building custom API endpoints and connecting your web application to ERPs, CRMs, payment engines, and internal tools.',
    bullets: [
      'Clean REST and GraphQL API endpoint development.',
      'Webhook handling, event-driven queues, and data syncing.',
      'Payment gateways (bKash, Nagad, Stripe, SSLCommerz, PayPal).',
      'Input validation (Zod) and strict runtime type safety.',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Authentication & User Management',
    description: 'Secure, multi-tenant authentication systems engineered for granular access controls and enterprise compliance.',
    bullets: [
      'NextAuth / Auth.js, Clerk, or Supabase Auth integrations.',
      'Role-based access control (RBAC) and team permissions.',
      'Social OAuth, passwordless magic links, and multi-factor auth.',
      'Protected API routes, session management, and encrypted data.',
    ],
  },
  {
    tag: 'Service 07',
    title: 'Performance & Scalability Optimization',
    description: 'Engineered for sub-second page loads, minimal layout shifts, and resilience during sudden traffic surges.',
    bullets: [
      'Core Web Vitals tuning: perfect LCP, CLS, and INP metrics.',
      'Automatic image optimization, lazy loading, and asset minification.',
      'Database query indexing, connection pooling, and Redis caching.',
      'Edge deployment configurations on Vercel, AWS, or cloud VPS.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'Quality Assurance & Automated Testing',
    description: 'Rigorous multi-stage verification to ensure software stability, data integrity, and cross-browser reliability.',
    bullets: [
      'Unit testing and React component testing.',
      'End-to-End (E2E) automated testing with Playwright / Cypress.',
      'API contract testing and payload validation.',
      'Cross-browser, multi-device, and responsive viewport validation.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'DevOps, Deployment & CI/CD Pipelines',
    description: 'Establishing automated production deployment pipelines with zero downtime and proactive performance monitoring.',
    bullets: [
      'GitHub Actions CI/CD workflows and preview environments.',
      'Vercel, AWS, or containerized Docker infrastructure setup.',
      'Sentry error tracking, uptime alerting, and performance monitoring.',
      'Environment variable management and automated backup strategies.',
    ],
  },
]

const businessNeeds = [
  {
    title: 'Custom Marketing Websites',
    desc: 'High-converting brand digital flagships engineered with bespoke visual styling, dynamic animations, and sub-second loading.',
  },
  {
    title: 'SaaS Web Applications',
    desc: 'Subscription platforms with multi-tenant authentication, user dashboards, automated recurring billing, and API endpoints.',
  },
  {
    title: 'Customer Portals & Dashboards',
    desc: 'Authenticated self-service areas for clients to track orders, submit inquiries, view reports, and manage account assets.',
  },
  {
    title: 'Headless Ecommerce Storefronts',
    desc: 'Decoupling frontend Next.js from Shopify or WooCommerce for complete design freedom, blazing speed, and localized shopping.',
  },
  {
    title: 'Internal Tools & Operations Systems',
    desc: 'Bespoke administrative consoles, ERP data entry screens, inventory workflows, and reporting tools tailored to internal teams.',
  },
  {
    title: 'Programmatic & Content Platforms',
    desc: 'High-volume directory or media platforms generating thousands of pages dynamically with edge caching and instant search.',
  },
]

const comparisonData = [
  {
    factor: 'Custom Application Logic',
    nextjs: 'Full architectural freedom (Native Node/React)',
    wordpress: 'Possible with plugins & custom PHP',
    webflow: 'Severely limited for custom logic',
    highlight: 'nextjs',
  },
  {
    factor: 'Performance & Speed',
    nextjs: 'Sub-second Core Web Vitals (SSR/SSG)',
    wordpress: 'Requires heavy caching & tuning',
    webflow: 'Fast on native CDN infrastructure',
    highlight: 'nextjs',
  },
  {
    factor: 'Visual Editing',
    nextjs: 'Modular blocks via Headless CMS (Sanity/Strapi)',
    wordpress: 'Strong with Gutenberg / Elementor',
    webflow: 'Exceptional visual designer canvas',
  },
  {
    factor: 'Complex API Integrations',
    nextjs: 'Native full-stack API routes & webhooks',
    wordpress: 'Requires custom plugins & hooks',
    webflow: 'Constrained by available apps & webhooks',
    highlight: 'nextjs',
  },
  {
    factor: 'SaaS & Authenticated Portals',
    nextjs: 'Premier industry choice for dashboards',
    wordpress: 'Possible with complex architecture',
    webflow: 'Generally unsuitable for rich web apps',
    highlight: 'nextjs',
  },
  {
    factor: 'Headless Architecture',
    nextjs: 'Native first-class framework',
    wordpress: 'Supported as headless content source',
    webflow: 'API content feeds available',
    highlight: 'nextjs',
  },
  {
    factor: 'Technical Flexibility',
    nextjs: 'Highest possible customization',
    wordpress: 'High within PHP & theme bounds',
    webflow: 'Strictly constrained by platform rules',
    highlight: 'nextjs',
  },
  {
    factor: 'Platform Maintenance',
    nextjs: 'Requires active software engineering',
    wordpress: 'Regular core, plugin & hosting patches',
    webflow: 'Fully managed cloud infrastructure',
  },
  {
    factor: 'Best Suited For',
    nextjs: 'Custom web apps, SaaS, portals & headless systems',
    wordpress: 'Content-driven, editorial & corporate sites',
    webflow: 'Design-forward marketing sites with basic CMS',
  },
]

const differentiators = [
  {
    title: 'Business-First Architecture',
    desc: 'We map user workflows, data structures, and conversion goals before writing code, ensuring the system solves actual business objectives.',
  },
  {
    title: 'One In-House Engineering Team',
    desc: 'Architecture, UX, frontend, backend APIs, testing, and DevOps stay coordinated within one dedicated in-house team.',
  },
  {
    title: 'Platform-Neutral Honesty',
    desc: 'We recommend custom development only when off-the-shelf platforms cannot fulfill your requirements, saving you unnecessary overhead.',
  },
  {
    title: 'True Full-Stack Capability',
    desc: 'Frontend user experience, backend business logic, database transactions, and APIs are developed as a unified, cohesive system.',
  },
  {
    title: 'SEO & Core Web Vitals',
    desc: 'Server-side rendering, dynamic Open Graph images, metadata handling, and edge caching give you measurable organic search advantages.',
  },
  {
    title: 'Clean Code & Full Ownership',
    desc: 'You receive complete Git repository access, typed TypeScript codebases, modular documentation, and zero vendor lock-in.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* PART 1: CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Scope / Full Stack
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Custom & Next.js Capabilities
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build custom Next.js web experiences engineered around your users, data models, workflows, and long-term scalability requirements.
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

      {/* PART 2: ARCHITECTURAL SOLUTIONS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architectural Systems / Portfolio
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Solutions for Distinct Business Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              From customer-facing digital flagships to authenticated enterprise portals, we architect custom systems tailored to your specific operating model.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <article key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    System 0{index + 1}
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
              Platform Decision / Comparison
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Next.js vs WordPress vs Webflow
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Understanding when to invest in custom full-stack Next.js engineering versus a managed CMS or template platform.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Requirement</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Next.js / Custom</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow / Hosted</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-7 ${row.highlight === 'nextjs' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.nextjs}
                    </td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.webflow}</td>
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
              Why Choose Us for Custom Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We structure our custom development around accountable engineering, transparent milestones, and systems built to scale without technical debt.
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
