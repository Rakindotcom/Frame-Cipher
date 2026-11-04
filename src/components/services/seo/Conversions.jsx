'use client'

import React from 'react'
import { AutoLinks } from '../../seo/AutoLinks'
import PosterButton from '../../home/PosterButton'
import { ArrowRight, Check } from 'lucide-react'

const conversionJourney = [
  'Search intent',
  'Relevant page',
  'Useful content',
  'Clear experience',
  'CTA',
  'Lead, call, message, signup, or sale',
]

const chooseUs = [
  {
    title: 'SEO + Development Under One Team',
    body: 'SEO recommendations are more useful when the team can also understand and implement the underlying website changes. Framecipher combines SEO strategy with website design, development, content, and technical execution under one in-house team. This reduces the gap between identifying an issue and implementing the solution.',
  },
  {
    title: 'SEO + Content in One Workflow',
    body: 'Content should not operate separately from SEO strategy. We connect keyword research, search intent, page structure, content planning, optimization, and technical implementation so the website follows a consistent search strategy.',
  },
  {
    title: 'Transparent Client Approval',
    body: 'You stay informed about what is being recommended and why. Depending on the project workflow, major content work and significant implementation changes can be reviewed and approved before going live.',
  },
  {
    title: 'Bangladesh & International SEO',
    body: 'We support businesses targeting customers in Bangladesh and international markets including the US, UK, Australia, Canada, and UAE. The strategy is adapted to the target market instead of applying the same keyword, content, and local SEO approach everywhere.',
  },
  {
    title: 'Data-Driven Reporting',
    body: 'SEO decisions should be based on evidence rather than ranking screenshots alone. We track relevant visibility, traffic, conversions, technical issues, completed work, and emerging opportunities so priorities can change when the data changes.',
  },
]

const resultsMetrics = [
  'Organic clicks and impressions',
  'Non-brand search visibility',
  'Organic traffic growth',
  'Qualified leads',
  'Organic conversions',
  'Ecommerce actions and revenue',
  'Local search visibility',
  'Important keyword and page movement',
  'Technical improvements',
  'Content performance',
]

export default function Conversions() {
  return (
    <div className="border-b border-white/[0.08] bg-[#09090B] text-white">
      {/* SECTION 1: SEO THAT SUPPORTS CONVERSIONS */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Beyond Rankings // Conversion Engineering
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO That Supports{' '}
              <span className="italic text-frame-accent">Conversions.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Search visibility matters most when it leads to a valuable business action.
            </p>
          </div>

          {/* Conversion Journey Horizontal Track */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              We connect the journey from:
            </span>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium uppercase tracking-wider">
              {conversionJourney.map((step, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={[
                      'rounded-lg border px-3.5 py-2 font-mono transition-colors',
                      index === conversionJourney.length - 1
                        ? 'border-frame-accent bg-purple-500/10 text-frame-accent font-semibold'
                        : 'border-white/[0.08] bg-[#09090B] text-zinc-200',
                    ].join(' ')}
                  >
                    {step}
                  </span>
                  {index < conversionJourney.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-frame-accent shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business Models Matrix */}
          <div className="mt-14">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              That means we look beyond rankings and traffic.
            </h3>
            <p className="mt-3 max-w-4xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              For commercial pages, we consider relevance, content clarity, trust signals, calls to action, internal navigation, and the path users take after arriving from search.
            </p>

            <div className="mt-8 grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-3">
              <div className="border-r border-b border-white/[0.08] bg-[#121214] p-7 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  For Ecommerce Websites
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  That path may lead to a product view, cart, checkout, or purchase.
                </p>
              </div>

              <div className="border-r border-b border-white/[0.08] bg-[#121214] p-7 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  For Service Businesses
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  It may lead to a form submission, phone call, WhatsApp conversation, or consultation request.
                </p>
              </div>

              <div className="border-r border-b border-white/[0.08] bg-[#121214] p-7 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Attribution &amp; Evidence
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  Where reliable tracking is available, we use conversion data to understand which organic traffic contributes to actual business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE FRAMECIPHER FOR SEO */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                The Frame Cipher Standard // Differentiators
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Choose Framecipher{' '}
              <span className="italic text-frame-accent">for SEO.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO strategy, content, and technical execution working together under one in-house team.
            </p>
          </div>

          {/* Modality 3 Matrix for 5 reasons */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {chooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Standard 0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                    <AutoLinks currentPath="/services/seo" allowed={["/services/seo/keyword-research"]}>
                      {item.body}
                    </AutoLinks>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SEO RESULTS & CASE STUDIES */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Evidence Based // Performance Metrics
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              SEO Results &amp;{' '}
              <span className="italic text-frame-accent">Case Studies.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              SEO results should be evaluated using meaningful business and search metrics rather than isolated ranking screenshots.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Left Column: 10 Results Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Where client permissions and reliable tracking data are available, we document:
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {resultsMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-frame-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-white">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Documentation Details & Action (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4">
                <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                  How each case study is documented
                </h3>
                <p className="text-sm font-normal leading-relaxed text-zinc-300">
                  Each case study should explain the starting situation, the SEO work performed, the implementation period, and the measurable outcome.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3">
                <p className="text-sm font-normal leading-relaxed text-zinc-300">
                  Verified Framecipher SEO case studies are featured at the top of this page. Each study is documented with search-console and analytics evidence rather than unverified performance claims.
                </p>
                <p className="text-xs font-normal leading-relaxed text-zinc-400">
                  Add verified Framecipher SEO case studies here as they become available. Do not publish unverified or unsupported performance claims.
                </p>
              </div>

              <PosterButton href="/case-studies" variant="outline" className="w-full justify-center">
                View Our Case Studies
              </PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
