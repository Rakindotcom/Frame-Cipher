import { SectionIntro } from '../../../Kinetic'

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

export default function Solutions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Applied Architecture" title="Next.js Solutions for Different Business Needs">
          Next.js can power much more than a standard marketing website. We use it when a project needs greater control over functionality, data, integrations, performance, or user experience.
        </SectionIntro>

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
  )
}