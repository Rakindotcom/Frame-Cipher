'use client'

import React from 'react'
import { Layers, ShoppingBag, Globe, Layout, Database, Code } from 'lucide-react'

const platforms = [
  {
    num: '01',
    icon: Layers,
    title: 'WordPress',
    para1:
      'We work with WordPress websites on crawlability, indexation, redirects, canonicalization, XML sitemaps, performance, structured data, internal linking, and technical configuration.',
    para2:
      'We can also investigate plugin conflicts, duplicate metadata, unnecessary URL variations, and other issues created by complex WordPress setups.',
  },
  {
    num: '02',
    icon: ShoppingBag,
    title: 'Shopify',
    para1:
      'Shopify technical SEO requires attention to products, collections, navigation, canonical signals, filters, indexation, structured data, and store architecture.',
    para2:
      'We focus on improving search visibility while keeping the ecommerce setup practical for your team to manage.',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Webflow',
    para1:
      'We can optimize Webflow websites across technical architecture, metadata, redirects, sitemaps, canonical signals, performance, CMS structures, and structured data.',
  },
  {
    num: '04',
    icon: Layout,
    title: 'Wix',
    para1:
      'We review Wix websites for crawlability, indexation, internal linking, metadata, site structure, redirects, performance, and other technical SEO factors supported by the platform.',
  },
  {
    num: '05',
    icon: Database,
    title: 'Magento',
    para1:
      'Large Magento stores can create complex crawl and indexation challenges through catalogs, filters, layered navigation, parameter URLs, duplicate pages, and large numbers of product variations.',
    para2:
      'We can address these issues through better architecture, canonicalization, indexation controls, crawl management, structured data, and product/category optimization.',
  },
  {
    num: '06',
    icon: Code,
    title: 'Custom Websites & Next.js',
    para1:
      'Custom websites allow greater technical control but also require SEO considerations during development.',
    para2:
      'We can work with custom and Next.js websites on rendering, metadata, canonical URLs, structured data, XML sitemaps, redirects, URL architecture, indexation, JavaScript SEO, and other technical requirements.',
  },
]

export default function Platforms() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Platform Engineering // CMS & Frameworks
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Technical SEO for{' '}
            <span className="italic text-frame-accent">Different Platforms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Technical SEO requirements vary by CMS, framework, hosting environment, and development architecture. We adapt implementation to the platform rather than applying one technical checklist everywhere.
          </p>
        </div>

        {/* 6 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-frame-accent transition-colors">
                      PLATFORM_0{p.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {p.title}
                  </h3>

                  <div className="mt-3 space-y-3 text-sm text-zinc-400 font-normal leading-relaxed">
                    <p>{p.para1}</p>
                    {p.para2 && (
                      <p className="border-l-2 border-frame-accent/40 pl-3 text-zinc-300">
                        {p.para2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
