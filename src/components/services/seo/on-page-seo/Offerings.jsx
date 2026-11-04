'use client'

import React from 'react'
import {
  FileText,
  Compass,
  FileCode,
  Network,
  Image as ImageIcon,
  Sparkles,
  Link,
  SlidersHorizontal,
  RefreshCw,
} from 'lucide-react'

const offerings = [
  {
    num: '01',
    icon: FileText,
    title: 'Content Optimization',
    description:
      'Content is the foundation of on-page SEO. A page needs enough useful information to satisfy its search intent without adding unnecessary text simply to increase word count. We review existing content and identify where it can be clearer, more complete, more relevant, or better structured.',
    bullets: [
      'Search intent alignment',
      'Existing content review',
      'Content depth and topical coverage analysis',
      'Content gap identification',
      'Keyword placement and contextual usage',
      'Supporting topic and concept coverage',
      'Readability and content structure improvements',
      'Duplicate or unnecessary content review',
      'Content consolidation recommendations where appropriate',
      'Content updates for outdated information',
      'New content recommendations where genuine gaps exist',
    ],
    footnote:
      'We do not use a fixed word-count formula for every page. The appropriate content depth depends on the topic, search intent, competition, and information users need to make a decision. A service page does not need to become a long article to rank. A product page does not need hundreds of words of filler. Each page should contain the information required to satisfy its specific intent.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Keyword Mapping & Cannibalization Control',
    description:
      'Targeting keywords without deciding which page should rank for them can create unnecessary competition between your own URLs. We map important search terms to the pages that should target them based on search intent, topic relevance, business importance, and the existing structure of the website.',
    bullets: [
      'Primary keyword selection',
      'Secondary and supporting keyword mapping',
      'Keyword-to-page assignment',
      'Search-intent mapping',
      'Existing URL and keyword relationship review',
      'Keyword cannibalization analysis',
      'Competing-page identification',
      'Content consolidation recommendations',
      'Page differentiation recommendations',
      'Redirect or consolidation recommendations where appropriate',
    ],
    footnote:
      'For example, if three pages target nearly the same search intent, creating more content for all three may not solve the problem. One page may need to become the primary resource while the others are repositioned, consolidated, or redirected where appropriate. This approach helps create clearer relationships between keywords, pages, and search intent.',
  },
  {
    num: '03',
    icon: FileCode,
    title: 'Metadata & Heading Optimization',
    description:
      'Search results need a clear description of what each page offers. Page titles, meta descriptions, and headings help communicate that purpose. We optimize metadata and heading structures based on the page\'s target intent rather than inserting keywords mechanically.',
    bullets: [
      'Title tag optimization',
      'Meta description writing',
      'H1 optimization',
      'H2 and H3 hierarchy',
      'Keyword placement in relevant headings',
      'Search-result messaging',
      'Open Graph and social metadata where relevant',
      'Heading consistency',
      'Duplicate title and metadata review',
      'Image alt text recommendations',
    ],
    footnote:
      'A title should describe the page accurately while giving searchers a reason to consider it. A meta description should reinforce the page\'s value rather than simply repeat keywords. Heading structures also help users scan the page and understand how the information is organized. We keep the structure meaningful instead of forcing keywords into every heading.',
  },
  {
    num: '04',
    icon: Network,
    title: 'Internal Linking & Site Structure',
    description:
      'Internal links connect related pages and help users move through your website. They also provide search engines with additional context about the relationships between pages. We review your internal linking structure to identify opportunities to strengthen important pages and improve navigation.',
    bullets: [
      'Strategic internal-link placement',
      'Contextual link recommendations',
      'Anchor text optimization',
      'Supporting-page relationships',
      'Pillar and cluster connections',
      'Service-to-service linking',
      'Blog-to-service linking',
      'Product-to-category linking',
      'Orphan-page identification',
      'Important-page discovery paths',
      'Internal-link opportunities from existing content',
    ],
    footnote:
      'We avoid repetitive exact-match anchor text when it does not read naturally. Instead, internal links should help users discover relevant information while making the relationship between pages clear. For example, an article about website speed may naturally link to a technical SEO service, while a guide about ecommerce platforms may link to a relevant ecommerce development or ecommerce SEO page.',
  },
  {
    num: '05',
    icon: ImageIcon,
    title: 'Image & Media SEO',
    description:
      'Images can support both user experience and search visibility when they are relevant, descriptive, and technically appropriate.',
    bullets: [
      'Descriptive image filenames',
      'Relevant alt text',
      'Image dimensions',
      'Image compression recommendations',
      'Responsive image considerations',
      'Image placement and contextual relevance',
      'Captions where useful',
      'Image-search opportunities',
      'Media accessibility considerations',
      'Recommendations for unnecessary or oversized media',
    ],
    footnote:
      'Alt text is written primarily to describe meaningful images for accessibility. We do not fill alt attributes with repeated keywords when those keywords do not accurately describe the image. Where image performance requires deeper technical work, such as advanced delivery or server-level optimization, we coordinate that work with the technical SEO or development scope rather than treating every performance issue as an on-page issue.',
  },
  {
    num: '06',
    icon: Sparkles,
    title: 'Semantic SEO & Entity Optimization',
    description:
      'Search engines evaluate more than the exact keyword appearing on a page. They also use the surrounding concepts, entities, relationships, and context to understand what a page is about. We improve topical clarity by reviewing the concepts and entities that naturally belong to the subject.',
    bullets: [
      'Related concepts and terminology',
      'Important entities',
      'Topic relationships',
      'Supporting subtopics',
      'Contextual relevance',
      'Entity consistency',
      'Missing topical concepts',
      'Natural use of related search terms',
      'Content relationships across the website',
    ],
    footnote:
      'For example, a page about ecommerce website development may naturally need to address products, catalogs, checkout, payment gateways, order management, shipping, mobile experience, and ecommerce platforms. The goal is not to insert a predetermined list of “LSI keywords.” Instead, we make sure the content covers the concepts users reasonably expect when searching for that topic.',
  },
  {
    num: '07',
    icon: Link,
    title: 'URL & On-Page Technical Elements',
    description:
      'Page-level technical elements can support clearer search-engine understanding when implemented correctly.',
    bullets: [
      'URL structure',
      'Descriptive URL recommendations',
      'Canonical recommendations where relevant',
      'Structured data review',
      'Breadcrumb implementation recommendations',
      'Article, Product, Organization, LocalBusiness, or other relevant schema',
      'Mobile content formatting',
      'Content accessibility',
      'Search-friendly page structure',
      'Duplicate page-element review',
    ],
    footnote:
      'Structured data is implemented only when it accurately represents the visible content and is appropriate for the page. We also keep the boundary clear between on-page and technical SEO. Broader issues involving crawling, indexation, JavaScript rendering, server performance, or site-wide technical architecture are handled within our technical SEO scope.',
  },
  {
    num: '08',
    icon: SlidersHorizontal,
    title: 'Conversion-Focused On-Page UX',
    description:
      'Ranking is only part of the job. A page also needs to help visitors understand the offer and take an appropriate next step. We review important on-page conversion elements without turning every SEO project into a full conversion-rate optimization engagement.',
    bullets: [
      'CTA placement',
      'Clear content hierarchy',
      'Service or product value communication',
      'Trust signals',
      'Supporting information',
      'Navigation paths',
      'Lead-generation elements',
      'Contact or inquiry opportunities',
      'Product decision information',
      'Friction reduction',
      'Alignment between search intent and page CTA',
    ],
    footnote:
      'A user searching for an informational answer may need a different next step from someone searching for a service. We therefore align the CTA and page structure with the visitor\'s stage and intent instead of placing the same sales message on every page.',
  },
  {
    num: '09',
    icon: RefreshCw,
    title: 'Ongoing Content Optimization',
    description:
      'Search results change, competitors publish new content, business information becomes outdated, and previously strong pages can lose visibility. Ongoing on-page optimization helps identify those changes and determine whether a page needs improvement.',
    bullets: [
      'Content freshness reviews',
      'Ranking-performance analysis',
      'Search Console data review',
      'Content updates',
      'Competitor content monitoring',
      'Search-intent changes',
      'Internal-link opportunities',
      'Metadata refinements',
      'Content-gap identification',
      'Declining-page analysis',
      'Optimization recommendations',
    ],
    footnote:
      'We use performance data to decide what needs attention rather than rewriting pages simply because they have reached a certain age.',
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
              Core Deliverables // On-Page Disciplines
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Our On-Page <span className="italic text-frame-accent">SEO Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Our on-page SEO services cover the content and page-level elements that influence how search engines understand a page and how users interact with it. The exact scope depends on your website, page type, target market, existing content, and business goals.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-frame-accent transition-colors">
                      SVC_{item.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Scope Checklist:
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-normal">
                          <span className="h-1.5 w-1.5 rounded-full bg-frame-accent/60 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.footnote && (
                  <div className="mt-5 border-t border-white/[0.06] pt-3">
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed italic border-l-2 border-white/[0.1] pl-2.5">
                      {item.footnote}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
