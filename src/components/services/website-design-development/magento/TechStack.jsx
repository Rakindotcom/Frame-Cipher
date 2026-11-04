import React from 'react'

const stackAreas = [
  {
    tag: '01',
    title: 'Commerce Platform',
    desc: 'Magento Open Source or Adobe Commerce based on catalog complexity, B2B requirements, integrations, and operational needs.',
  },
  {
    tag: '02',
    title: 'Storefront',
    desc: 'Magento storefront development, custom themes, responsive interfaces, and Hyvä where it fits the project architecture.',
  },
  {
    tag: '03',
    title: 'APIs & Integrations',
    desc: 'REST APIs, GraphQL, webhooks, and supported integration methods for connecting Magento with business systems. Adobe Commerce documents GraphQL as an important technology for modern headless implementations.',
  },
  {
    tag: '04',
    title: 'Catalog & Data',
    desc: 'Product attributes, categories, configurable products, customer groups, pricing rules, inventory structures, and structured product data.',
  },
  {
    tag: '05',
    title: 'Performance & Infrastructure',
    desc: 'Caching, indexing, server resources, database optimization, CDN configuration, monitoring, and performance testing based on the expected workload.',
  },
  {
    tag: '06',
    title: 'Security & Deployment',
    desc: 'Staging environments, access controls, backups, patch testing, version management, and controlled production deployment.',
  },
]

export default function TechStack() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Magento Technology{' '}
            <span className="italic text-frame-accent">Stack.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Magento development works best when the ecommerce application, storefront, integrations, data, and infrastructure are considered as one system.
          </p>
        </div>

        {/* 6 Tech Stack Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {stackAreas.map((area, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">
                  {area.tag}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm md:text-base font-medium text-white">
            We use the technologies required by the project instead of building the largest possible technology stack.
          </p>
        </div>
      </div>
    </section>
  )
}
