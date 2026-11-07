'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What is an Amazon Ads Management Service?',
    a: 'An Amazon Ads Management Service handles the end-to-end management of Amazon advertising on behalf of a brand or seller. This typically includes campaign structure, keyword and product targeting, bids, budgets, search-term harvesting, negative targeting, reporting, and ongoing optimization across Sponsored Products, Sponsored Brands, and Display Ads.',
  },
  {
    q: 'Which Amazon Ads formats do you manage?',
    a: 'We manage Sponsored Products, Sponsored Brands, Sponsored Brands Video, Amazon Display Ads, Amazon DSP (where appropriate), and Brand Store coordination where eligible. Availability varies by account type, product category, marketplace, and advertiser eligibility.',
  },
  {
    q: 'Do I need an Amazon Brand Registry to work with you?',
    a: 'No. Sponsored Products can run without Brand Registry. However, premium formats such as Sponsored Brands headline banners, Sponsored Brands Video, and dedicated Brand Stores require Amazon Brand Registry. We tailor our campaign structure to what is currently available for your account.',
  },
  {
    q: 'What is the difference between Sponsored Products and Sponsored Brands?',
    a: 'Sponsored Products are performance-focused ads for individual products that appear in search results and on product detail pages. Sponsored Brands are brand-level ads featuring a logo, custom headline, video, or multiple curated products linking to a Brand Store or custom collection. They serve different stages of the customer journey.',
  },
  {
    q: 'What happened to Sponsored Display?',
    a: 'Amazon has consolidated its display advertising formats. The self-service product previously known as Sponsored Display is now positioned as Display Ads within Amazon\'s broader sponsored ads suite. Amazon DSP continues to provide the more advanced programmatic display and video solution.',
  },
  {
    q: 'Do you manage Amazon DSP?',
    a: 'Yes, for eligible brands. We assess whether DSP is appropriate before adding programmatic spend. Amazon DSP is considered when the audience strategy, monthly budget, product catalog depth, and business objectives justify a broader programmatic display and video approach.',
  },
  {
    q: 'What is ACOS?',
    a: 'ACOS (Advertising Cost of Sales) measures advertising spend against advertising-attributed revenue (Ad Spend ÷ Ad Revenue). It is the primary efficiency benchmark for campaign-level keyword analysis, but it does not represent the overall profit health of an Amazon business.',
  },
  {
    q: 'What is TACOS?',
    a: 'TACOS (Total Advertising Cost of Sales) measures advertising spend against total marketplace revenue, including organic sales (Ad Spend ÷ Total Revenue). TACOS helps brands evaluate how dependent overall sales are on paid advertising and whether paid velocity is lifting organic rankings.',
  },
  {
    q: 'What is a good ACOS target?',
    a: 'A useful ACOS target depends entirely on your unit economics. We calculate product COGS, Amazon referral fees, FBA fulfillment costs, returns, and contribution margins. A high-margin product can sustain a higher ACOS than a thin-margin product while generating superior dollar profits.',
  },
  {
    q: 'Do you manage Amazon listings too?',
    a: 'We audit and monitor listing readiness alongside advertising—including detail page quality, bullet clarity, imagery, Featured Offer (Buy Box) eligibility, and inventory levels. Full copy rewriting, 3D render design, or A+ Content graphic creation is handled as separate scoped creative work.',
  },
  {
    q: 'What is Amazon Attribution?',
    a: 'Amazon Attribution is Amazon\'s measurement solution that tracks how external marketing channels (such as Google Ads, Meta Ads, TikTok, email, and influencers) influence Amazon shopping activity and sales, allowing brands to earn Amazon Brand Referral Bonus fee credits.',
  },
  {
    q: 'Can you manage Amazon Ads alongside Google and Meta Ads?',
    a: 'Yes. Framecipher can coordinate messaging, creative hooks, and tracking across Google Ads, Meta Ads, and Amazon Ads using Amazon Attribution to unify the full acquisition funnel.',
  },
  {
    q: 'Can you manage Amazon Ads for multiple marketplaces?',
    a: 'Yes. We build market-specific campaign structures, budgets, localized keywords, and product strategies for Amazon US, UK, Canada, Australia, UAE, and European marketplaces rather than copying an identical setup across territories.',
  },
  {
    q: 'Can you manage Amazon Ads for Bangladesh-based businesses?',
    a: 'Yes. Framecipher is headquartered in Dhaka and manages international Amazon advertising for Bangladesh-based manufacturers, exporters, and private label brands selling through eligible overseas marketplaces.',
  },
  {
    q: 'How do you handle Prime Day and major Amazon events?',
    a: 'We prepare custom event playbooks for Prime Day, Prime Big Deal Days, Black Friday, and Cyber Monday. This includes promotional budget pacing, top-of-search placement multiplier increases, inventory buffer checks, and event-specific hourly bid monitoring.',
  },
  {
    q: 'How long does it take to launch Amazon Ads?',
    a: 'Initial account audit, break-even modeling, campaign taxonomy build, and pre-launch QA typically take between 7 to 14 days, depending on catalog size, Brand Registry status, account access, and client approvals.',
  },
  {
    q: 'Do you guarantee Amazon Ads results?',
    a: 'We do not guarantee a specific ACOS, TACOS, sales volume, organic ranking position, or revenue outcome. Amazon advertising is influenced by competitor pricing, customer demand, review ratings, inventory stock, and Amazon algorithm shifts outside any agency\'s control. We commit to disciplined account structure, aggressive search-term harvesting, and 100% transparent reporting.',
  },
]


import PosterButton from '../../../home/PosterButton'

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs

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
            Everything you need to know about Amazon Ads management, Sponsored Products, ACOS/TACOS targets, Amazon DSP, and global marketplace execution.
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
                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {qText}
                  </h3>
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
            Have a specific Amazon marketplace or product catalog in mind? Contact us, and we will evaluate your listing readiness and ad unit economics.
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
