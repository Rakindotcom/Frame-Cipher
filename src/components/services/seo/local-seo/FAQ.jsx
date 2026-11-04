'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const allLocalSeoFaqs = [
  {
    question: 'What is Local SEO?',
    answer:
      'Local SEO is the process of improving a business’s search visibility when customers look for relevant products, services, or locations within a specific geographic territory. It encompasses Google Business Profile optimization, localized on-page SEO, local content creation, citation consistency, review generation, local authority, and performance monitoring.',
  },
  {
    question: 'Does Local SEO only mean Google Maps optimization?',
    answer:
      'No. Google Maps is a vital component of local search, but customers also discover businesses through localized organic search results below the Map Pack. A complete local strategy addresses both Google Maps (the 3-Pack) and localized organic web rankings.',
  },
  {
    question: 'Do I need a physical storefront for Local SEO?',
    answer:
      'No. Service-area businesses (SABs) such as plumbers, electricians, cleaning contractors, and home services that travel to customers can also benefit from local SEO. The strategy reflects your operating model by configuring verified service radiuses while following Google’s address-hiding guidelines.',
  },
  {
    question: 'Can you optimize a service-area business?',
    answer:
      'Yes. The strategy focuses on service-to-location mapping, dedicated service pages, geographic radiuses, Google Business Profile configuration, local citations, and supporting website trust signals based on genuine service coverage.',
  },
  {
    question: 'Do I need a separate page for every city I serve?',
    answer:
      'Not necessarily. Creating thin, near-duplicate pages for every adjacent town can trigger search quality issues. We recommend dedicated city and area landing pages only when they provide unique, useful local information, real project photos, or distinct branch contact details.',
  },
  {
    question: 'Can you manage multiple Google Business Profiles?',
    answer:
      'Yes. Multi-location enterprises, franchises, and regional branch networks require centralized governance paired with location-specific profile optimization, category mapping, and branch-level reporting.',
  },
  {
    question: 'How do you generate Google reviews?',
    answer:
      'We help businesses implement policy-compliant customer feedback systems and direct review request workflows via email, SMS, or post-service follow-ups. We do not participate in fake reviews, review gating, or purchased review schemes.',
  },
  {
    question: 'How do you track Google Maps rankings?',
    answer:
      'Local visibility varies significantly across a city. We deploy geographic ranking analysis (geo-grid rank heatmaps) to examine multi-point visibility across neighborhoods and wards rather than relying on a single manual search.',
  },
  {
    question: 'How long does Local SEO take?',
    answer:
      'Initial improvements often emerge within 30 to 60 days as profile errors, categories, and citation inconsistencies are corrected. However, sustained dominance in competitive urban areas typically requires 3 to 6 months of continuous review acquisition and local authority building.',
  },
  {
    question: 'Can Local SEO guarantee a Google Maps #1 position?',
    answer:
      'No. No legitimate agency can control Google’s proprietary ranking algorithm or guarantee an absolute permanent #1 position. A professional strategy focuses on measurable optimization, geo-grid expansion, and driving real customer calls, directions, and bookings.',
  },
  {
    question: 'What is the Google Map Pack, and why does it matter?',
    answer:
      'The Google Map Pack is the prominent block of three local business listings appearing at the very top of Google Search results for location-based queries. It captures the vast majority of local mobile clicks, phone calls, and direction requests.',
  },
  {
    question: 'How is local SEO different from regular organic SEO?',
    answer:
      'Regular SEO focuses on broad national or global informational queries. Local SEO targets high-intent queries with geographic qualifiers (e.g. "near me", "in Dhaka", "best clinic in Gulshan") and heavily relies on proximity, physical address verification, and Google Business Profile signals.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header - Strictly Centered per Design System */}
        <div className="space-y-4 text-center mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Direct Answers // {allLocalSeoFaqs.length} Essential Questions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Direct, transparent answers about Google Business Profile optimization, Map Pack rankings, reviews, and local search strategies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {allLocalSeoFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors ${
                      isOpen ? 'border-frame-accent/40 bg-frame-accent/15 text-frame-accent' : ''
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-white/[0.06] text-sm sm:text-base text-zinc-300 leading-relaxed mt-2 pt-4">
                    {faq.answer}
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
