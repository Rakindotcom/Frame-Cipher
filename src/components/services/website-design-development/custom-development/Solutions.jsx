'use client'

import React from 'react'

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
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js Solutions for{' '}
            <span className="italic text-frame-accent">Different Business Needs.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Next.js can power much more than a standard marketing website. We use it when a project needs greater control over functionality, data, integrations, performance, or user experience.
          </p>
        </div>

        {/* 8 Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {solutionTypes.map((sol, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {sol.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {sol.desc}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.08] pt-4 text-xs text-zinc-300">
                  {sol.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5">
                      <span className="text-frame-accent font-bold">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {sol.note && (
                <p className="mt-6 border-t border-white/[0.08] pt-3 text-xs italic text-zinc-400">
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
