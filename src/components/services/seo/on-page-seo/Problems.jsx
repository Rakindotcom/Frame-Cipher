'use client'

import React from 'react'
import {
  HelpCircle,
  EyeOff,
  Layout,
  CopyX,
  History,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const problems = [
  {
    num: '01',
    icon: HelpCircle,
    title: 'Search Intent Mismatch',
    para1: 'A page can target the correct keyword and still satisfy the wrong intent.',
    para2:
      'For example, a user searching for “ecommerce website development” may be looking for a service provider rather than a general explanation of ecommerce.',
    para3:
      'If the page only provides educational information, it may not meet the commercial intent behind the query. We analyze the existing search results and page purpose to determine what type of content the query requires.',
  },
  {
    num: '02',
    icon: EyeOff,
    title: 'Weak Search Snippets',
    para1: 'A strong page can lose clicks if its search-result presentation is unclear or unhelpful.',
    para2:
      'Title tags and meta descriptions should communicate the page\'s purpose and value accurately.',
    para3:
      'We optimize these elements around relevance and click potential without making misleading claims or stuffing keywords.',
  },
  {
    num: '03',
    icon: Layout,
    title: 'Unclear Page Structure',
    para1: 'Long blocks of content make it harder for visitors to find what they need.',
    para2:
      'Clear headings, short sections, descriptive links, useful formatting, and logical information order make important content easier to understand.',
    para3:
      'A well-structured page also gives search engines clearer signals about the relationships between major topics and sections.',
  },
  {
    num: '04',
    icon: CopyX,
    title: 'Competing Pages and Cannibalization',
    para1: 'Large websites often accumulate multiple pages targeting similar keywords.',
    para2: 'This can create uncertainty about which page should serve a particular search intent.',
    para3:
      'We identify overlapping pages and recommend appropriate actions, which may include differentiation, consolidation, internal-link changes, content restructuring, or redirects when justified.',
  },
  {
    num: '05',
    icon: History,
    title: 'Outdated or Incomplete Content',
    para1: 'Search intent and competitive content can change over time.',
    para2:
      'A page that once covered a topic thoroughly may become less useful as competitors add new information, products, examples, or features.',
    para3:
      'Regular content reviews help identify important gaps and determine whether updates are actually necessary.',
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
              Performance Barriers // Friction Analysis
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Why On-Page SEO Matters for{' '}
            <span className="italic text-frame-accent">Organic Growth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A page can have good technical infrastructure and still struggle to perform if its content does not match what users expect. On-page SEO connects the search query with the actual page experience.
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
                      BARRIER_{prob.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {prob.title}
                  </h3>

                  <div className="mt-3 space-y-2.5 text-sm text-zinc-400 font-normal leading-relaxed">
                    <p>{prob.para1}</p>
                    <p className="text-zinc-300">{prob.para2}</p>
                    <p className="border-l-2 border-white/[0.1] pl-3 text-zinc-400 text-xs sm:text-sm">
                      {prob.para3}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* 6th Callout Block to complete 3x2 grid balance */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-frame-accent/40 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6 sm:p-7">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Intent Realignment
              </span>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Think a page could rank better?
              </h3>
              <p className="mt-3 text-sm text-zinc-300 font-normal leading-relaxed">
                We compare what your page offers against what the query actually needs, then recommend the content and structural changes that matter most.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <PosterButton href="/contact">
                Start an On-Page Review &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
