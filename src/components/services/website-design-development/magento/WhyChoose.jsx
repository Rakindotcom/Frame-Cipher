import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChoosePillars = [
  {
    tag: '01',
    num: '01',
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team rather than being divided across unrelated vendors.',
  },
  {
    tag: '02',
    num: '02',
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Magento when the business requirements justify it. When Shopify, WooCommerce, or another platform is more appropriate, we explain that before development begins.',
  },
  {
    tag: '03',
    num: '03',
    title: 'Business-First Architecture',
    desc: 'We plan around your catalog, customers, pricing model, fulfillment process, integrations, and growth requirements instead of starting with a generic store template.',
  },
  {
    tag: '04',
    num: '04',
    title: 'Custom Magento Development',
    desc: 'We can extend the standard platform through custom modules, integrations, APIs, CMS structures, and supported frontend approaches where the project requires them.',
  },
  {
    tag: '05',
    num: '05',
    title: 'SEO-Ready Ecommerce Foundations',
    desc: 'We consider category structure, product architecture, URLs, internal linking, metadata, redirects, indexation, performance, and analytics as part of the website architecture.',
  },
  {
    tag: '06',
    num: '06',
    title: 'Transparent Review Checkpoints',
    desc: 'Architecture, design, development, and testing are reviewed at defined stages so major decisions are approved before the project moves forward.',
  },
  {
    tag: '07',
    num: '07',
    title: 'Practical Handover & Support',
    desc: 'We provide the agreed access, documentation, launch guidance, and post-launch support required to manage the store according to the project scope.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Businesses Choose Framecipher for{' '}
              <span className="italic text-frame-accent">Magento Development.</span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Magento development involves more than writing code. Catalog architecture, ecommerce strategy, integrations, frontend experience, SEO, infrastructure, performance, and maintenance all affect the final store.
            </p>

            {/* Ownership Stat Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                100% · No Vendor Lock-In
              </span>
              <h3 className="font-heading text-lg font-medium text-white">
                Full Source Code &amp; Database Ownership
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                You maintain complete access and ownership of your Magento code repository, database, server environment, domain, custom extensions, and product data from day one.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Start Your Magento Project &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {whyChoosePillars.map((pillar) => (
              <div key={pillar.num} className="py-8 first:pt-0 last:pb-0 group">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
