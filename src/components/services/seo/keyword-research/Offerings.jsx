'use client'

import React from 'react'
import {
  Sparkles,
  Search,
  MessageSquare,
  BarChart3,
  Target,
  Crosshair,
  HelpCircle,
  Network,
  Split,
  LineChart,
  FileSpreadsheet,
  Check,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Search,
    title: 'Seed Keyword & Topic Discovery',
    description:
      'We start with your core business model, products, service lines, audience profile, and addressable market rather than immediately opening a generic tool and exporting an unvetted bulk list.',
    points: [
      'Core business terminology & commercial vocabulary',
      'Product and service category-level taxonomy',
      'Industry topics & underlying customer problem spaces',
      'Related commercial concepts & initial competitor terms',
    ],
    note: 'The validated starting set becomes the empirical foundation for broader keyword cluster expansion.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Customer Language & Query Research',
    description:
      'Real searchers do not always use internal industry jargon. We investigate the exact vernacular, phrasing, and pain points prospective buyers use when searching.',
    points: [
      'Real-world problem & symptom phrasing',
      'Feature, solution, and specific use-case descriptions',
      'Alternative & head-to-head comparison searches',
      'Search query logs, autocomplete patterns & People Also Ask',
    ],
    note: 'Uncovers high-converting colloquial terminology and long-tail query variants your internal team may not have considered.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Search Volume, Competition & Opportunity Analysis',
    description:
      'Search volume is useful context, but never the sole decision metric. We score keyword opportunities across a multi-dimensional matrix of demand, difficulty, and revenue potential.',
    points: [
      'Normalized monthly search demand & seasonality',
      'Empirical ranking difficulty & SERP dominance strength',
      'Domain & page-level authority requirements',
      'Bottom-line conversion potential vs. content production effort',
    ],
    note: 'A high-volume head term dominated by Wikipedia or legacy software giants is often a weaker commercial priority than an achievable keyword with verified buyer intent.',
  },
  {
    number: '04',
    icon: Target,
    title: 'Search Intent & SERP Analysis',
    description:
      'A keyword cannot be properly evaluated without understanding the search engine results page (SERP) layout and exact searcher expectations.',
    points: [
      'Informational, Commercial, Transactional & Navigational intent',
      'Dominant ranking page types (product, category, service, guide)',
      'SERP feature presence (Featured Snippets, PAA, Local Packs, Video)',
      'Content format requirements aligned with searcher expectations',
    ],
    note: 'Ensures service pages, product catalogs, comparison hubs, and informational guides target appropriate queries without intent mismatch.',
  },
  {
    number: '05',
    icon: Crosshair,
    title: 'Competitor Keyword Gap Analysis',
    description:
      'Direct and indirect competitors reveal high-value search demand your domain currently misses. We identify exactly where rivals earn their primary organic visibility.',
    points: [
      'High-traffic keywords competitors rank for in top-5 positions',
      'Underlying URLs and page architectures driving their traffic',
      'Shared ranking opportunities and untapped topical voids',
      'Commercial keyword gaps and high-intent long-tail voids',
    ],
    note: 'The goal is not blind imitation; it is identifying where market demand exists and seizing realistic opportunities with superior content architecture.',
  },
  {
    number: '06',
    icon: HelpCircle,
    title: 'Long-Tail & Question Keyword Research',
    description:
      'Specific long-tail queries and question modifiers often reveal pre-purchase questions, specialized use cases, and lower-competition ranking targets.',
    points: [
      'Specific product and granular service searches',
      'Question-based queries (how to, what is, pricing of, best for)',
      'Problem-based searches and buying criteria comparisons',
      'Location, audience, and industry-specific modifiers',
    ],
    note: 'Enables newer domains and category challengers to build immediate organic momentum without fighting unwinnable head-term wars.',
  },
  {
    number: '07',
    icon: Network,
    title: 'Semantic Keyword & Entity Research',
    description:
      'Modern search engines evaluate topical completeness through semantic entities, concept relationships, and contextual vocabulary rather than keyword density.',
    points: [
      'Knowledge Graph entities and related conceptual topics',
      'Contextual subtopics and supporting semantic terminology',
      'Topical authority SILO architecture mapping',
      'Natural topic relationships without repetitive keyword stuffing',
    ],
    note: 'Builds exhaustive content architecture that search algorithms recognize as definitive topical authorities.',
  },
  {
    number: '08',
    icon: Split,
    title: 'Keyword Mapping & Cannibalization Analysis',
    description:
      'Every priority search term must have one designated, authoritative home URL on your website to prevent conflicting ranking signals.',
    points: [
      'Keyword-to-page assignment (Service, Product, Category, Guide)',
      'Audit of overlapping URLs targeting identical search intent',
      'Resolution of internal cannibalization between blog posts and service pages',
      'Content consolidation, canonical, and 301 redirection roadmaps',
    ],
    note: 'Creates an unambiguous architectural hierarchy: 1 Intent → 1 Target URL → 1 Clear Organic Signal.',
  },
  {
    number: '09',
    icon: LineChart,
    title: 'Existing Ranking & Search Console Opportunity Research',
    description:
      'Historical search performance data often provides the fastest organic wins. We analyze Search Console impressions to identify quick-win keyword trajectories.',
    points: [
      'Queries generating massive impressions on positions 8–20 (Striking Distance)',
      'High-impression, low-CTR terms requiring snippet optimization',
      'Queries ranking with sub-optimal or outdated URLs',
      'Existing commercial pages that can be upgraded instead of creating new URLs',
    ],
    note: 'Combines net-new discovery with immediate low-hanging fruit already residing within your domain history.',
  },
  {
    number: '10',
    icon: FileSpreadsheet,
    title: 'Content Brief & Page Planning',
    description:
      'Keyword research directly translates into actionable execution blueprints for internal writers, SEO specialists, and developer teams.',
    points: [
      'Primary target keyword and secondary semantic term clusters',
      'Explicit search intent profile and recommended page format',
      'Recommended heading outlines (H1, H2, H3) and user questions',
      'Internal linking recommendations and competitor benchmark notes',
    ],
    note: 'Eliminates guesswork for content creators, streamlining production from raw data into finished, high-ranking pages.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Capabilities &amp; Scope
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Our Keyword <span className="italic text-frame-accent">Research Services</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Our keyword research methodology combines multi-platform search data, live SERP competitive intelligence, intent scoring, semantic clustering, and manual strategic evaluation.
          </p>
        </div>

        {/* 10 Services 2-Column Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Service {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                      What We Deliver:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs text-zinc-300">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.note}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
