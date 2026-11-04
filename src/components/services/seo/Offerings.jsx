'use client'

import React from 'react'
import { AutoLinks } from '../../seo/AutoLinks'

const seoServices = [
  {
    title: 'Technical SEO',
    summary: 'Technical SEO helps search engines crawl, render, understand, and index the pages that matter.',
    body: [
      'We review crawlability, indexation, XML sitemaps, robots.txt, canonical URLs, redirects, site architecture, duplicate content, mobile usability, page performance, Core Web Vitals, JavaScript rendering, and structured data where relevant.',
      'We also investigate issues that can restrict organic performance, such as broken links, incorrect redirects, indexing conflicts, duplicate URLs, rendering problems, and keyword cannibalization.',
    ],
    note: 'If a website experiences a significant traffic or ranking decline, we investigate possible technical, content, indexing, backlink, algorithmic, and other contributing factors instead of automatically assuming that a "Google penalty" is responsible.',
  },
  {
    title: 'On-Page SEO',
    summary: 'On-page SEO makes each important page more relevant to its target search and business objective.',
    body: [
      'We optimize titles, meta descriptions, headings, URLs, page content, image elements, internal links, topical relevance, and other relevant on-page signals.',
    ],
    note: 'Our approach is not to insert keywords wherever possible. We align the page with the searcher\'s intent and make the content useful enough to satisfy the reason behind the search.',
  },
  {
    title: 'Content SEO & Content Strategy',
    summary: 'SEO content should support both search demand and business goals.',
    body: [
      'Our content SEO work can include search-intent analysis, topic research, content briefs, service-page optimization, landing-page creation, blog strategy, content refreshes, topical coverage, internal linking, and content-gap analysis.',
    ],
    note: 'We prioritize topics based on relevance, search intent, competition, business value, and the ability of your website to provide a genuinely useful answer.',
  },
  {
    title: 'Off-Page SEO & Link Building',
    summary: 'Off-page SEO helps establish relevant authority beyond your own website.',
    body: [
      'Our link-building approach can include relevant outreach, editorial opportunities, digital PR, business citations, partnerships, and other appropriate authority-building activities.',
    ],
    note: 'We focus on relevance, quality, and long-term value rather than bulk links, automated placements, or tactics designed primarily to manipulate rankings.',
  },
  {
    title: 'Local SEO',
    summary: 'Local SEO helps businesses appear when customers search for products and services in specific locations.',
    body: [
      'Our local SEO work can include Google Business Profile optimization, local keyword research, service-area pages, location landing pages, citation consistency, review strategy, local content, competitor analysis, and Google Maps visibility.',
      'For businesses serving multiple locations, we can build location-focused search strategies around the areas that actually contribute to the business.',
    ],
  },
  {
    title: 'Ecommerce SEO',
    summary: 'Ecommerce SEO connects search demand with product and category pages that help customers make buying decisions.',
    body: [
      'We optimize product and category architecture, commercial keywords, product content, internal linking, structured data, indexation, filters, and other technical elements that influence ecommerce visibility.',
    ],
    note: 'Where needed, we also investigate duplicate product pages, faceted navigation, thin category pages, out-of-stock URLs, and how search engines discover important products and collections.',
  },
  {
    title: 'International SEO',
    summary: 'International SEO helps businesses target customers across multiple countries or language markets without creating unnecessary technical conflicts.',
    body: [
      'Our work can include country-specific keyword research, localization, international site architecture, hreflang implementation where appropriate, localized content, country targeting, and market-specific authority building.',
    ],
    note: 'We do not treat international SEO as simple translation. We adapt the search strategy to the market, language, customer behavior, and competitive landscape you want to enter.',
  },
  {
    title: 'AI Search Optimization',
    summary: 'Search is expanding beyond traditional search-result pages. AI-assisted search experiences can summarize information, answer questions, compare businesses, and surface sources within generated responses.',
    body: [
      'Our AI search optimization work focuses on making your website\'s information clear, useful, structured, and easy for modern search systems to interpret.',
      'This can include answer-focused content, entity clarity, structured information, FAQs, topical coverage, supporting authority, and content designed around conversational search behavior.',
    ],
    note: 'We do not guarantee citations, mentions, or visibility in a particular AI platform. Instead, we improve the underlying content, structure, and authority signals that can help your website be understood and considered across evolving search experiences.',
  },
  {
    title: 'SEO Audit',
    summary: 'An SEO audit identifies the technical, content, on-page, authority, and structural factors that may be limiting organic performance.',
    body: [
      'We review the areas relevant to your website and turn the findings into prioritized recommendations rather than handing you an unfiltered list of technical errors.',
    ],
    note: 'The objective is simple: identify what needs attention first, what can wait, and where the strongest opportunities exist.',
  },
  {
    title: 'SEO Strategy & Consulting',
    summary: 'Not every business needs a full SEO execution team. Some companies already have developers, writers, designers, or marketers and need an experienced SEO strategist to guide the work.',
    body: [
      'Our SEO consulting service can support keyword strategy, technical recommendations, content planning, competitor analysis, prioritization, implementation guidance, SEO audits, and ongoing decision-making.',
    ],
  },
]

const researchAreas = [
  {
    title: 'Search Intent & Keyword Research',
    body: 'We research keywords based on relevance, intent, competition, search behavior, and business value. Depending on the market, we distinguish informational, commercial, transactional, navigational, and local search intent.',
    tail: 'We then map relevant keywords and topics to the pages that should target them. This helps prevent unnecessary keyword overlap and creates a clearer website structure.',
  },
  {
    title: 'Competitor Keyword Gap Analysis',
    body: 'Your SEO competitors are not always the companies you compete with offline. They are often the websites and pages appearing for the searches you want to capture.',
    middle: 'We analyze relevant competitors to identify ranking terms, important landing pages, content coverage, backlink patterns, search intent, and opportunities your website has not addressed.',
    tail: 'The result is a clearer view of what competing websites are doing in search and where your website can build stronger coverage.',
  },
  {
    title: 'Content & SERP Gap Analysis',
    body: 'Search results provide useful signals about what users expect from a query. We examine important SERPs to understand ranking page types, common subtopics, questions, content formats, commercial elements, and areas where existing results may not fully satisfy the search.',
    tail: 'These findings can guide new service pages, landing pages, category pages, blog content, content updates, and internal-linking priorities.',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section 1 Header: Core SEO Capabilities */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Capabilities &amp; Scope // 10 Specialized Disciplines
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Search Engine{' '}
            <span className="italic text-frame-accent">Optimization Services.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            SEO performs best when technical health, useful content, search intent, authority, and user experience work together. Our SEO services cover the core areas required to build, improve, and maintain organic search visibility.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix Grid for 10 Services */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Service 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-200">
                  <AutoLinks currentPath="/services/seo" allowed={["/services/website-design-development/landing-pages"]}>
                    {item.summary}
                  </AutoLinks>
                </p>

                <div className="mt-4 space-y-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {item.note && (
                  <div className="mt-5 rounded-lg border-l-2 border-frame-accent bg-white/[0.02] p-4 text-xs font-normal leading-relaxed text-zinc-400">
                    {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 Header: Keyword Research & Competitor Analysis */}
        <div className="mt-28 mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Understanding the Search Landscape
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Keyword Research &amp;{' '}
            <span className="italic text-frame-accent">Competitor SEO Analysis.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Effective SEO starts before changing a title tag or publishing an article. It starts with understanding what people search for, what they expect to find, and which pages currently satisfy that demand.
          </p>
        </div>

        {/* Modality 3: 3-Column Matrix for Research Areas */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] lg:grid-cols-3">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Analysis 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                  {area.body}
                </p>

                {area.middle && (
                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    {area.middle}
                  </p>
                )}

                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400">
                  {area.tail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
