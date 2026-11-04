'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, ShieldCheck, ChevronUp, Sparkles } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'How much should I budget for Google Ads?',
    answer: 'There is no universal Google Ads budget that works for every business. A practical starting budget depends on your market, competition, average customer value, expected conversion rate, and available demand. We recommend establishing a realistic test budget based on your business economics rather than choosing an arbitrary number. For Bangladesh, campaigns often start around ৳25,000 to ৳50,000+ monthly in media spend, while international markets (US, UK, Australia, UAE) typically require $1,500 to $5,000+ per month to gather statistical significance.',
  },
  {
    question: 'How much does Google Ads management cost in Bangladesh?',
    answer: "Framecipher's Google Ads management plans currently start at ৳15,000 per month for focused accounts (Starter Tier), ৳25,000 per month for multi-campaign scaling (Growth Tier), and ৳40,000 per month for complex eCommerce accounts (Shopping + PMax Tier). Enterprise or multi-market international accounts receive custom monthly retainers. Your media ad spend is paid directly to Google and is completely separate from the agency management fee.",
  },
  {
    question: "What is the difference between Google Search, Shopping, and Performance Max?",
    answer: "Google Search displays text ads to users actively typing high-intent commercial keywords. Google Shopping displays visual product images, prices, and store names directly from your Google Merchant Center product feed. Performance Max (PMax) is an automated, goal-based campaign type that buys across Google’s entire inventory—Search, YouTube, Display, Discover, Gmail, and Maps—using machine learning to optimize toward a Target CPA or Target ROAS.",
  },
  {
    question: 'Do you manage existing Google Ads accounts or start fresh?',
    answer: 'Yes, we do both. We can audit, restructure, and manage an existing account rather than requiring you to start again. We first review the existing campaign structure, tracking, keywords, search terms, bidding, budgets, and historical performance before recommending major changes. If you do not have an account, we guide you through setting up a brand-new account directly under your corporate email.',
  },
  {
    question: 'What types of Google Ads campaigns do you manage?',
    answer: 'We manage Google Search, Shopping, Performance Max, Display, YouTube, and remarketing campaigns, depending on the business model and campaign objectives. We do not recommend every campaign type for every account. Campaign selection should follow the customer journey and business goal.',
  },
  {
    question: 'Do you manage Google Shopping and Performance Max for eCommerce?',
    answer: 'Yes. For ecommerce businesses, we manage Shopping and Performance Max alongside Merchant Center setup, product feed optimization (titles, descriptions, custom labels, GTINs), item disapproval resolution, conversion-value tracking, product margin segmentation, campaign budgets, and ROAS performance analysis.',
  },
  {
    question: 'Why is conversion tracking so critical if I just want more clicks?',
    answer: "Google's Smart Bidding algorithms (Maximize Conversions, Target CPA, Target ROAS) optimize auction bids based entirely on your historical conversion data. If conversion tracking is missing, inaccurate, or counting duplicate visits, Google's machine learning optimizes blind—bidding aggressively for cheap clicks from users who never buy or call. Accurate conversion tracking trains the algorithm to bid for customers who actually generate revenue.",
  },
  {
    question: 'How do you track leads, calls, and sales?',
    answer: 'Tracking depends on the business model. We configure and review website conversions, lead forms, phone calls, ecommerce purchases, and other defined conversion actions. Where the technical setup supports it, measurement can also extend to enhanced conversions (SHA256 hashed first-party customer data) and downstream CRM lead or sales data (Offline Conversion Imports).',
  },
  {
    question: 'Do you set up GA4, Google Tag Manager, and conversion tracking?',
    answer: 'Yes. We configure and review the relevant tracking setup as part of campaign measurement, depending on the website, account structure, and technical requirements. The objective is to make sure Google Ads is receiving useful conversion signals before major optimization or scaling decisions are made.',
  },
  {
    question: 'Who pays Google for the ad spend — do we pay you or Google directly?',
    answer: 'You pay Google directly. Your Google Ads account is connected to your own credit card or corporate payment method. Framecipher never marks up media costs or hides ad spend inside a combined invoice. This ensures 100% financial transparency, and you can see exactly where every single taka or dollar is spent in real time.',
  },
  {
    question: 'How long does it take to optimize a Google Ads campaign?',
    answer: "Initial setup can often be completed within one to two weeks, depending on the account and requirements. Optimization continues after launch because meaningful campaign management depends on actual search, conversion, and performance data. Google's Smart Bidding algorithms typically require 2 to 4 weeks and 30–50 conversions to exit the initial machine learning phase.",
  },
  {
    question: 'Do you manage Google Ads campaigns outside Bangladesh?',
    answer: 'Yes. Framecipher manages campaigns for businesses in Bangladesh as well as clients targeting international markets such as the US, UK, Australia, Canada, and UAE. International campaigns are planned around the search behavior, competition, targeting, currency economics, and commercial conditions of each market.',
  },
  {
    question: 'Can you guarantee a specific ROAS or Cost Per Lead (CPL)?',
    answer: 'No ethical agency can guarantee a fixed ROAS or CPL, because outcomes depend on external variables outside the ad platform—including your product pricing, competitor bids, landing page speed, website trust, and sales follow-up. What Framecipher guarantees is a disciplined, mathematical management process: elimination of search query waste, 10/10 Quality Score optimization, server-side tracking integrity, and transparent data reporting.',
  },
  {
    question: 'What happens to our campaigns and account if we pause or stop the service?',
    answer: 'Your Google Ads account, campaign structures, keyword lists, negative keyword libraries, and conversion tracking configurations remain 100% your property. You maintain full administrative ownership at all times. If you ever decide to pause or discontinue management, your account remains active with all optimizations and historical data intact. Zero vendor lock-in.',
  },
]


import PosterButton from '../../../home/PosterButton'

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : fallbackFaqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  }

  return (
    <section id="faqs" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked{' '}
            <span className="italic font-normal text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl mx-auto">
            Direct, transparent answers regarding Google Ads budgets, management fees in Bangladesh, account ownership, campaign types, tracking, billing, and international campaigns.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx
            const qText = faq.question || faq.q
            const aText = faq.answer || faq.a
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {qText}
                  </span>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 pb-6 pt-4">
                    <p className="text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                      {aText}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Prompt Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base font-medium text-white max-w-xl">
            Have questions about your Google Search, Shopping, or Performance Max campaigns? Contact us, and we will review your account structure.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Request Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
