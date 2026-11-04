'use client'

import React from 'react'
import {
  Server,
  FileCode,
  FileText,
  Link2,
  BarChart2,
  LineChart,
  Cpu,
  Check,
} from 'lucide-react'

const services = [
  {
    title: 'Technical SEO Audit',
    icon: Server,
    lead: 'We examine the technical foundation that allows search engines to crawl, understand, and index your website.',
    points: [
      'Crawlability & indexation',
      'Robots.txt & XML sitemaps',
      'Canonicalization & URL structure',
      'Redirects & 404 status codes',
      'Crawl depth & orphan pages',
      'Duplicate URLs & index bloat',
      'JavaScript rendering & hydration',
      'Mobile performance & Core Web Vitals',
      'Page speed & HTTPS configuration',
      'Structured data (Schema.org)',
    ],
    summary: 'We identify which issues affect important pages or templates and explain what should be fixed first.',
  },
  {
    title: 'On-Page SEO Audit',
    icon: FileCode,
    lead: 'We review how effectively individual pages target and satisfy their intended search queries.',
    points: [
      'Title tags & meta descriptions',
      'H1-H6 semantic heading structure',
      'Search intent alignment',
      'Keyword targeting & density',
      'Image optimization & alt text',
      'Internal links & anchor text',
      'Page structure & content relevance',
      'Calls to action & conversion friction',
      'Structured data implementation',
    ],
    summary: 'We assess important pages in their competitive context rather than applying generic on-page checklists.',
  },
  {
    title: 'Content & Keyword Audit',
    icon: FileText,
    lead: 'Your content needs to target the right topics, keywords, and search intent.',
    points: [
      'Keyword-to-page mapping',
      'Search intent categorization',
      'Keyword cannibalization analysis',
      'Content gaps & thin/low-value pages',
      'Duplicate or overlapping topics',
      'Outdated content identification',
      'Topical coverage & content depth',
      'Supporting commercial vs info intent',
      'Competitor content gap analysis',
    ],
    summary: 'The goal is not simply to publish more—it is to make existing content strategically useful.',
  },
  {
    title: 'Backlink Profile Audit',
    icon: Link2,
    lead: 'We review your backlink profile in the context of relevance, authority, anchor text, and competitor strength.',
    points: [
      'Link quality & domain authority',
      'Contextual topical relevance',
      'Referring domains distribution',
      'Anchor text patterns & brand ratios',
      'Lost links & toxic pattern analysis',
      'Suspicious or manipulative links',
      'Competitor backlink opportunities',
      'Authority gaps & acquisition paths',
    ],
    summary: 'We distinguish between links that deserve attention and links unlikely to have meaningful impact.',
  },
  {
    title: 'Competitor & SERP Analysis',
    icon: BarChart2,
    lead: 'Your rankings are always relative to the pages competing for the same search demand.',
    points: [
      'Organic competitors (local & global)',
      'Ranking URLs & keyword gaps',
      'Content gaps & SERP features',
      'Search intent patterns & ranking page types',
      'Competitor content depth & quality',
      'Competitor authority & backlink profiles',
      'Internal-link opportunities',
      'Commercial monetization differences',
    ],
    summary: 'Answers what the pages outranking you are doing differently in organic search.',
  },
  {
    title: 'Analytics, Search Console & Conversion Audit',
    icon: LineChart,
    lead: 'Search visibility should be connected to user behavior and business outcomes.',
    points: [
      'Google Search Console performance',
      'Google Analytics (GA4) integration',
      'Organic landing page behavior',
      'Search query CTR anomalies',
      'Conversion events (leads, calls, sales)',
      'Ecommerce transaction tracking',
      'Conversion paths & funnel leaks',
      'Tracking gaps & data inaccuracies',
    ],
    summary: 'Identifies cases where rankings look healthy but business actions are not tracked or generated.',
  },
  {
    title: 'AI Search & Visibility Audit',
    icon: Cpu,
    lead: 'Search behavior is expanding beyond traditional organic results into AI-driven answer engines.',
    points: [
      'AI Overview visibility considerations',
      'AI-search content coverage',
      'Question-based query modeling',
      'Entity clarity & Knowledge Graph signals',
      'Structured data & extractability',
      'E-E-A-T signals & author credentials',
      'Brand & topic co-occurrence citations',
      'Competitor visibility in AI answers',
    ],
    summary: 'Identifies whether your content and site structure provide strong signals for modern AI search.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Core Scope // 7 Audit Pillars
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Our SEO Audit{' '}
            <span className="italic text-frame-accent">Services</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Our SEO audit services combine automated data collection with manual analysis so that findings are evaluated in the context of your website and business.
          </p>
        </div>

        {/* 7 Services Grid */}
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
                    <span className="font-mono text-xs text-zinc-400">Pillar 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
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
                    &rarr; {item.summary}
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
