'use client'

import React from 'react'
import {
  Compass,
  Package,
  Layers,
  Server,
  Network,
  Code2,
  GitFork,
  FileEdit,
  TrendingUp,
  Link2,
  ShoppingBag,
  Clock,
  Check,
} from 'lucide-react'

const services = [
  {
    title: 'Ecommerce Keyword & Search Intent Mapping',
    icon: Compass,
    description: 'We research keywords based on search demand, competition, commercial intent, and your product catalog. Then we map those keywords to the pages best suited to rank.',
    points: [
      'Product keywords',
      'Category keywords',
      'Brand searches',
      'Model-specific queries',
      'Long-tail searches',
      'Commercial research terms',
      'Buying guide topics',
      'Comparison queries',
      'FAQ opportunities',
    ],
    note: 'This creates a clear connection between customer searches and your ecommerce pages.',
  },
  {
    title: 'Product Page Optimization',
    icon: Package,
    description: 'We optimize priority product pages around search intent and customer needs.',
    points: [
      'Product titles',
      'Meta titles and descriptions',
      'Product descriptions',
      'Headings',
      'Product attributes',
      'Image optimization',
      'Alt text',
      'Product FAQs',
      'Internal links',
      'Reviews and user-generated content',
      'Structured data',
      'Canonical signals',
    ],
    note: 'We prioritize products based on search opportunity, business value, existing performance, and catalog size.',
  },
  {
    title: 'Category Page Optimization',
    icon: Layers,
    description: 'Category pages often target broader commercial searches and help customers discover relevant products.',
    points: [
      'Category keyword targeting',
      'Search-intent alignment',
      'Category titles and headings',
      'Category descriptions',
      'Subcategory structure',
      'Internal linking',
      'Product discovery',
      'Metadata',
      'Breadcrumbs',
      'Supporting content',
    ],
    note: 'We also look for keyword overlap between categories and products so important pages do not compete unnecessarily.',
  },
  {
    title: 'Ecommerce Technical SEO',
    icon: Server,
    description: 'Technical problems can prevent search engines from properly discovering, crawling, or indexing ecommerce pages.',
    points: [
      'Crawlability',
      'Indexation',
      'Canonicalization',
      'Duplicate content',
      'XML sitemaps',
      'Robots directives',
      'Redirects',
      'Broken links',
      'Pagination',
      'JavaScript rendering',
      'Site speed',
      'Core Web Vitals',
      'Mobile performance',
      'HTTPS and technical errors',
    ],
    note: 'Complex ecommerce stores may require SEO and development work together.',
  },
  {
    title: 'Site Architecture for Large Catalogs',
    icon: Network,
    description: 'Your ecommerce structure should make it easy for customers and search engines to understand where products belong.',
    points: [
      'Category hierarchy',
      'Subcategory structure',
      'URL patterns',
      'Product-to-category relationships',
      'Breadcrumb paths',
      'Internal linking',
      'Orphan pages',
      'Pagination',
      'Filtered URLs',
      'Product discovery paths',
    ],
    note: 'We also consider how new products and categories can be added without creating unnecessary SEO problems.',
  },
  {
    title: 'Product Schema & Rich Results',
    icon: Code2,
    description: 'Structured data helps search engines understand important product information.',
    points: [
      'Products',
      'Offers',
      'Prices',
      'Availability',
      'Ratings',
      'Reviews',
      'Breadcrumbs',
    ],
    note: 'We also validate implementation and identify technical errors. Structured data can improve eligibility for enhanced search features, but it does not guarantee that Google will display rich results.',
  },
  {
    title: 'Internal Linking & Crawl Optimization',
    icon: GitFork,
    description: 'Internal links connect related pages and help distribute authority throughout your ecommerce site.',
    points: [
      'Categories and subcategories',
      'Categories and products',
      'Related products',
      'Buying guides and products',
      'Comparison content and commercial pages',
      'Important pages and supporting content',
    ],
    note: 'For larger catalogs, we also identify orphaned or poorly connected pages that may be difficult for search engines or shoppers to discover.',
  },
  {
    title: 'Ecommerce Content Strategy',
    icon: FileEdit,
    description: 'Ecommerce content should support your products and customer journey. We identify content opportunities around real customer questions and commercial research.',
    points: [
      'Buying guides',
      'Product comparisons',
      'Product education',
      '“Best” product content',
      'How-to guides',
      'FAQs',
      'Gift guides',
      'Seasonal content',
      'Category support content',
    ],
    note: 'We then connect useful informational content with relevant product and category pages through internal linking.',
  },
  {
    title: 'Ecommerce Conversion Optimization',
    icon: TrendingUp,
    description: 'Organic traffic only creates value when visitors can move easily toward the next step. We review SEO-related conversion barriers on important organic landing pages.',
    points: [
      'Product page clarity',
      'Calls to action',
      'Trust signals',
      'Product discovery',
      'Mobile shopping experience',
      'Navigation',
      'Search functionality',
      'Cart entry points',
      'Checkout friction',
    ],
    note: 'We focus on practical improvements that support the journey from organic search to purchase.',
  },
  {
    title: 'Ecommerce Authority & Link Building',
    icon: Link2,
    description: 'Competitive ecommerce pages may need external authority to compete for valuable searches.',
    points: [
      'Relevant industry links',
      'Product-level link opportunities',
      'Category authority',
      'Digital PR opportunities',
      'Product reviews and relevant mentions',
      'Resource-page opportunities',
      'Content-led link acquisition',
      'Brand and entity mentions',
    ],
    note: 'We prioritize relevance, quality, and long-term value rather than large volumes of low-quality links.',
  },
  {
    title: 'Google Merchant Center & Shopping Feed Optimization',
    icon: ShoppingBag,
    description: 'Search SEO and product feeds serve different purposes, but both depend on accurate product information. Where Merchant Center support is included in your engagement, we review product feed data:',
    points: [
      'Product titles',
      'Descriptions',
      'Prices',
      'Availability',
      'Product identifiers',
      'Product categories',
      'Attributes',
      'Images',
      'Feed errors',
      'Product data consistency',
    ],
    note: 'This helps maintain accurate product information across Google\'s shopping ecosystem.',
  },
  {
    title: 'Ongoing Ecommerce SEO Management',
    icon: Clock,
    description: 'Ecommerce stores change constantly. Products are added and removed. Categories expand. Competitors publish new content. Seasonal demand changes. Search behavior evolves.',
    points: [
      'New product optimization',
      'New category optimization',
      'Seasonal opportunities',
      'Technical monitoring',
      'Internal linking updates',
      'Content optimization',
      'Ranking analysis',
      'Organic traffic analysis',
      'Conversion tracking',
      'Revenue analysis',
      'Ongoing SEO recommendations',
    ],
    note: 'The exact monthly scope depends on your catalog size, platform, competition, and selected plan.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Capabilities // 12-Pillar Execution
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Our Ecommerce{' '}
            <span className="italic text-frame-accent">SEO Services</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Our ecommerce SEO services cover the areas that influence how products and categories are discovered, crawled, indexed, ranked, and converted.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Pillar {String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {item.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
