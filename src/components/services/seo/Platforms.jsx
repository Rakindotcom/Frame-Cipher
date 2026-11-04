'use client'

import React from 'react'

const platforms = [
  {
    title: 'WordPress SEO',
    body: 'We optimize WordPress websites across content structure, metadata, internal linking, indexation, performance, schema, redirects, and technical configuration.',
    note: 'Where plugins are involved, we also look for unnecessary duplication, conflicting settings, and technical configurations that can create unwanted SEO signals.',
  },
  {
    title: 'Shopify SEO',
    body: 'Shopify SEO requires attention to products, collections, navigation, canonicalization, filters, structured data, content, and indexation. We optimize ecommerce search visibility while keeping the store practical for your team to manage.',
  },
  {
    title: 'Webflow SEO',
    body: 'Webflow provides strong control over design and content, but SEO still depends on proper architecture and implementation. We can optimize metadata, CMS structures, redirects, sitemap settings, canonical signals, page performance, structured data, and content organization.',
  },
  {
    title: 'Wix SEO',
    body: 'Wix websites can achieve strong organic visibility when their structure, content, metadata, internal links, indexing settings, and technical configuration are handled correctly. We optimize Wix websites around search intent and the SEO factors relevant to their structure.',
  },
  {
    title: 'Magento SEO',
    body: 'Large Magento stores can face complex challenges involving product catalogs, layered navigation, filters, duplicate URLs, and indexation. Our SEO work can address product and category structure, crawl efficiency, canonicalization, structured data, and ecommerce-specific technical issues.',
  },
  {
    title: 'Custom Website & Next.js SEO',
    body: 'Custom websites need SEO considerations at the development level. We can work with developers on metadata, rendering, canonical URLs, structured data, XML sitemaps, redirects, URL architecture, indexation, and other technical requirements.',
  },
]

const migrationSteps = [
  {
    title: 'Website Migration SEO',
    body: 'We review existing URLs, important landing pages, rankings, traffic, metadata, internal links, and indexation before a migration.',
  },
  {
    title: 'URL & Redirect Mapping',
    body: 'Old URLs need to point to appropriate new destinations where the content has moved. We can plan redirect mappings and identify URLs that should not simply redirect to unrelated pages.',
  },
  {
    title: 'Pre-Launch SEO Checks',
    body: 'Before launch, we can review indexation controls, metadata, canonical tags, internal links, XML sitemaps, robots directives, structured data, and other important SEO elements.',
  },
  {
    title: 'Staging & Indexation Checks',
    body: 'Development and staging environments should not accidentally become indexed as production content. We check the relevant indexation controls during the launch process.',
  },
  {
    title: 'Post-Launch Monitoring',
    body: 'After launch, we monitor important URLs, redirects, indexation, crawl signals, traffic, rankings, and other available data to identify problems early.',
  },
]

export default function Platforms() {
  return (
    <div className="border-b border-white/[0.08] bg-[#09090B] text-white">
      {/* SECTION 1: PLATFORM & CMS SEO */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Build &amp; Implementation // Multi-Platform Engineering
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Platform &amp;{' '}
              <span className="italic text-frame-accent">CMS SEO.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO implementation changes according to how a website is built. The CMS, templates, URL structure, rendering system, and technical controls can all affect the work required.
            </p>
          </div>

          {/* Modality 3 Matrix for 6 platforms */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Platform 0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {platform.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {platform.body}
                  </p>

                  {platform.note && (
                    <div className="mt-5 rounded-lg border-l-2 border-frame-accent bg-white/[0.02] p-4 text-xs font-normal leading-relaxed text-zinc-400">
                      {platform.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SEO MIGRATION & WEBSITE LAUNCH SUPPORT */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Launch Protection // Risk Mitigation
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO Migration &amp;{' '}
              <span className="italic text-frame-accent">Website Launch Support.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Changing a website without protecting its existing search visibility can create avoidable SEO problems. We can support website launches, redesigns, CMS migrations, domain changes, and major structural updates with SEO requirements considered before and after launch.
            </p>
          </div>

          {/* Modality 3 Matrix for 5 migration steps */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {migrationSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-light text-zinc-600 group-hover:text-frame-accent transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
