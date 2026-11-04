'use client'

import React from 'react'
import {
  Search,
  Compass,
  Network,
  Zap,
  Code2,
  FileCode,
  Repeat,
  Smartphone,
  ArrowRightLeft,
  Activity,
} from 'lucide-react'

const offerings = [
  {
    num: '01',
    icon: Search,
    title: 'Technical SEO Audit',
    paragraphs: [
      'We perform a structured review of the technical factors that may affect organic performance.',
      'Depending on the website, an audit can cover crawlability, indexation, redirects, canonicals, site architecture, performance, Core Web Vitals, structured data, JavaScript rendering, mobile usability, XML sitemaps, robots.txt, and other relevant areas.',
      'The result is a prioritized report that explains the issue, its potential impact, and the recommended action.',
    ],
  },
  {
    num: '02',
    icon: Compass,
    title: 'Crawlability & Indexation',
    paragraphs: [
      'We help search engines discover and access the pages that matter.',
      'Our work can include XML sitemap optimization, robots.txt review, crawl-budget analysis, orphan-page discovery, broken-link fixes, status-code analysis, indexing directives, and Search Console investigation.',
      'Where server log access is available and useful, we can also analyze crawler activity to identify crawl patterns and wasted crawling.',
    ],
  },
  {
    num: '03',
    icon: Network,
    title: 'Site Architecture & Internal Linking',
    paragraphs: [
      'We review how pages are organized and connected across your website.',
      'This can include URL hierarchy, navigation, internal linking, category structures, crawl depth, orphan pages, and relationships between important pages.',
      'A stronger architecture can make important content easier for both users and search engines to discover.',
    ],
  },
  {
    num: '04',
    icon: Zap,
    title: 'Core Web Vitals & Technical Performance',
    paragraphs: [
      'We identify performance issues that affect important pages and user experience.',
      'Our work can include Core Web Vitals analysis, image optimization, resource loading, JavaScript and CSS issues, caching, server response time, mobile performance, and other technical factors.',
      'Where appropriate, we coordinate with developers to implement and validate performance improvements.',
    ],
  },
  {
    num: '05',
    icon: Code2,
    title: 'JavaScript SEO & Rendering',
    paragraphs: [
      'JavaScript-heavy websites require additional technical checks because important content, links, or page elements may depend on rendering.',
      'We can review rendered content, JavaScript-generated links, client-side rendering, server-side rendering, dynamic pages, and indexability across React, Next.js, and other modern frameworks.',
    ],
  },
  {
    num: '06',
    icon: FileCode,
    title: 'Structured Data & Schema',
    paragraphs: [
      'Structured data gives search engines additional context about eligible content on a page.',
      'We implement and review relevant schema types such as Organization, LocalBusiness, Product, Article, Breadcrumb, and other supported structured data where appropriate.',
      'We also validate the implementation and check for errors, conflicts, or markup that does not accurately represent the visible page content.',
      'Structured data can support eligibility for certain enhanced search features, but it does not guarantee a rich result.',
    ],
  },
  {
    num: '07',
    icon: Repeat,
    title: 'Canonicalization, Redirects & Duplicate URLs',
    paragraphs: [
      'We manage technical signals that help search engines understand which URL should represent a piece of content.',
      'This can include canonical tags, 301 redirects, redirect chains, redirect loops, HTTP-to-HTTPS redirects, duplicate URLs, URL parameters, and other URL variations.',
      'We aim to preserve existing search equity while keeping the URL structure clear and maintainable.',
    ],
  },
  {
    num: '08',
    icon: Smartphone,
    title: 'Mobile & Technical Usability',
    paragraphs: [
      'Search engines need to access and evaluate websites effectively across mobile devices.',
      'We review mobile rendering, responsive behavior, page performance, navigation, content accessibility, layout issues, and other technical problems that can affect mobile users and search visibility.',
    ],
  },
  {
    num: '09',
    icon: ArrowRightLeft,
    title: 'SEO Migration & Redirect Management',
    paragraphs: [
      'Website redesigns, domain changes, CMS migrations, and major URL changes can create SEO risks if technical signals are not transferred correctly.',
      'We can support migrations with URL mapping, redirect planning, canonical updates, internal-link reviews, XML sitemap updates, staging checks, pre-launch audits, and post-launch monitoring.',
    ],
  },
  {
    num: '10',
    icon: Activity,
    title: 'Ongoing Technical Monitoring',
    paragraphs: [
      'Technical SEO can change as websites grow and developers publish new updates.',
      'Ongoing monitoring can include crawl health, indexation, Core Web Vitals, Search Console issues, broken links, redirects, structured data, and technical regressions.',
      'This helps identify new problems before they become larger search visibility issues.',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Technical Capabilities // Scope of Work
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Our Technical <span className="italic text-frame-accent">SEO Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Our technical SEO services cover the infrastructure and technical signals that support search visibility. The exact scope depends on your website, platform, size, and existing technical condition.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-frame-accent transition-colors">
                      SVC_{item.num}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? 'text-zinc-400' : ''}>
                        {p}
                      </p>
                    ))}
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
