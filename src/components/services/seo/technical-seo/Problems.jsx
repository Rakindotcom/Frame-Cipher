'use client'

import React from 'react'
import { Bug, Gauge, Copy, FileCode2, Network, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const problems = [
  {
    num: '01',
    icon: Bug,
    title: 'Crawl & Indexation Problems',
    para1:
      'Search engines need to discover and access your important URLs before they can consider them for search results. Incorrect robots.txt rules, XML sitemaps, internal linking, status codes, orphan pages, and indexing directives can interfere with that process.',
    para2:
      'We identify crawl waste, blocked resources, broken links, orphan pages, indexing conflicts, and other issues that may prevent important pages from being discovered or indexed.',
  },
  {
    num: '02',
    icon: Gauge,
    title: 'Performance & Core Web Vitals Issues',
    para1:
      'Website performance affects both the search experience and how users interact with your pages.',
    para2:
      'We investigate Core Web Vitals, page loading, server response time, image weight, JavaScript execution, CSS, caching, and other performance factors. Where appropriate, we work with your development team to address the underlying causes instead of relying only on superficial speed improvements.',
  },
  {
    num: '03',
    icon: Copy,
    title: 'Duplicate & Canonical Conflicts',
    para1:
      'Search engines can encounter multiple URLs containing the same or very similar content.',
    para2:
      'We review canonical tags, URL variations, redirects, duplicate pages, parameter URLs, and other signals to help search engines identify the preferred version of important content.',
  },
  {
    num: '04',
    icon: FileCode2,
    title: 'JavaScript & Rendering Issues',
    para1:
      'JavaScript can affect how search engines access and understand dynamically generated content.',
    para2:
      'We investigate rendering issues, JavaScript-generated content and links, client-side applications, and other implementation problems that may affect crawlability or indexation. This is particularly relevant for React, Next.js, and other JavaScript-heavy websites.',
  },
  {
    num: '05',
    icon: Network,
    title: 'Site Architecture Problems',
    para1:
      'A clear website structure helps search engines discover important pages and understand relationships between URLs.',
    para2:
      'We review URL hierarchy, navigation, internal links, category structures, crawl paths, and other architectural elements to identify unnecessary complexity or weak connections between important pages.',
  },
]

export default function Problems() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Diagnostic Bottlenecks // Hidden Limitations
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            What Technical Problems Can{' '}
            <span className="italic text-frame-accent">Limit Search</span> Visibility
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Technical SEO problems are not always visible to visitors. A website can look completely normal while search engines encounter problems accessing or understanding important content.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon
            return (
              <div
                key={prob.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-frame-accent transition-colors">
                      ERR_{prob.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {prob.title}
                  </h3>

                  <div className="mt-3 space-y-3 text-sm text-zinc-400 font-normal leading-relaxed">
                    <p>{prob.para1}</p>
                    <p className="border-l-2 border-white/[0.1] pl-3 text-zinc-300">{prob.para2}</p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* 6th Callout Block to complete 3x2 grid balance */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-frame-accent/40 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6 sm:p-7">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Root-Cause Elimination
              </span>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Not sure what&apos;s limiting your site?
              </h3>
              <p className="mt-3 text-sm text-zinc-300 font-normal leading-relaxed">
                We investigate the actual condition of your website, prioritize the issues that matter, and recommend fixes based on evidence.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <PosterButton href="/contact">
                Start Technical Audit &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
