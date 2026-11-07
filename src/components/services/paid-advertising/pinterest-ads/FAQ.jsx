'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What is Pinterest Ads Management Service?',
    a: 'Pinterest Ads Management Service covers campaign strategy, account setup, targeting, Pin creative, catalog advertising, conversion tracking, optimization, and performance reporting. The final scope depends on the campaign objective and business requirements.',
  },
  {
    q: 'How do Pinterest Ads work?',
    a: 'Pinterest Ads help businesses reach people as they discover products, ideas, and content on Pinterest. Campaign performance depends on the selected objective, targeting, creative, budget, bidding strategy, and conversion setup. Pinterest currently supports objectives including Brand Awareness, Video Completion, Consideration, Leads, and Sales.',
  },
  {
    q: "What are Pinterest's current campaign objectives?",
    a: "Pinterest's current Ads Manager includes Consideration, Leads, and Sales, along with Brand Awareness and Video Completion objectives. Pinterest has also replaced the older Conversions and Catalog Sales objectives with Leads and Sales in its updated campaign structure. Existing legacy campaigns remain editable during the transition period.",
  },
  {
    q: 'What is Pinterest Performance+?',
    a: 'Pinterest Performance+ combines automation and AI features across campaign setup, targeting, bidding, and eligible creative optimization. It is currently available for Consideration, Leads, and Sales campaigns.',
  },
  {
    q: 'What is an Actalike audience?',
    a: 'An Actalike audience helps advertisers reach people who behave similarly to an existing audience. Depending on the setup, source audiences can include customer lists, site visitors, engagement audiences, or other supported audience types.',
  },
  {
    q: 'Do you provide Pinterest Tag and Conversions API setup?',
    a: 'Yes. We can implement Pinterest Tag, Conversions API, conversion events, testing, and deduplication where the campaign\'s technical setup supports them. Pinterest currently supports both Tag and Conversions API for conversion measurement.',
  },
  {
    q: 'Do I need a product catalog to run Pinterest Ads?',
    a: 'No. A catalog is necessary for catalog-based Shopping Ads, but other campaigns can use standard Pin creative. Pinterest currently allows Product Catalog as a creative source for applicable Consideration and Sales campaigns.',
  },
  {
    q: 'Can you manage Pinterest Shopping Ads?',
    a: 'Yes. For eligible ecommerce accounts, we can manage catalog setup, Product Groups, Shopping Ads, dynamic retargeting, creative, tracking, and optimization.',
  },
  {
    q: 'Can Pinterest Ads retarget previous website visitors?',
    a: 'Yes. Pinterest supports audience targeting using site visitors, customer lists, engagement audiences, and Actalike audiences.',
  },
  {
    q: 'How much should I budget for Pinterest Ads?',
    a: 'There is no universal budget that works for every business. The right media budget depends on the market, campaign objective, audience size, product or service, conversion value, competition, and available data. We recommend setting the test budget after reviewing the actual campaign requirements.',
  },
  {
    q: 'How is Pinterest different from Meta Ads?',
    a: 'Meta is primarily built around social discovery, engagement, and audience-based advertising. Pinterest combines visual discovery with search and planning behavior. That makes Pinterest particularly relevant for products, projects, occasions, and categories where customers may research or save ideas before buying. The right channel mix depends on the business and customer journey.',
  },
  {
    q: 'Can you manage Pinterest alongside Google Ads and Meta Ads?',
    a: 'Yes. Framecipher can coordinate Pinterest with Google Ads, Meta Ads, remarketing, SEO, and other paid channels so campaign objectives, tracking, landing pages, and audience strategies work together.',
  },
  {
    q: 'Does Pinterest work for service businesses?',
    a: 'It can, especially when the service is visual or connected to planning. Interior design, weddings, photography, beauty, travel, home improvement, events, and other visually driven services can be potential fits. We assess the market and category before recommending Pinterest as a primary acquisition channel.',
  },
  {
    q: 'Do you provide Pinterest SEO as well?',
    a: 'Yes, as a separate or combined service. Pinterest Ads and Pinterest SEO are different disciplines, but paid and organic strategies can be coordinated around related keyword, content, and landing-page themes.',
  },
  {
    q: 'Do you provide Pinterest Ads management from Bangladesh?',
    a: 'Yes. Framecipher is based in Dhaka and manages Pinterest Ads from Bangladesh for eligible advertiser accounts targeting supported Pinterest markets. We verify account eligibility and market availability before campaign launch because Pinterest advertising access varies by market and account setup.',
  },
  {
    q: 'Can a Bangladesh-based business target customers in the US, UK, Canada, or other international markets?',
    a: "It depends on the advertiser account, billing country, target market, and Pinterest's current advertising requirements. We assess eligibility before recommending the campaign structure.",
  },
  {
    q: 'How long does it take to see Pinterest Ads results?',
    a: 'Initial delivery data can appear soon after launch. Meaningful optimization takes longer and depends on spend, conversion volume, campaign objective, creative variety, and learning. We establish a baseline first and then use the data to guide optimization.',
  },
  {
    q: 'How much does Pinterest Ads Management Service cost?',
    a: "Framecipher's Pinterest Ads Management Service starts at ৳25,000 per month. Catalog and Shopping management starts at ৳40,000 per month, while Pinterest Creative Support starts at ৳15,000 per month. Advertising spend is separate from management fees.",
  },
  {
    q: 'Do you guarantee Pinterest Ads results?',
    a: 'No. We do not guarantee a fixed ROAS, CPA, CPC, conversion rate, or revenue outcome. We commit to correct setup, reliable measurement, disciplined testing, active optimization, and transparent reporting.',
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
            Everything you need to know about Pinterest Ads management, Performance+ automation, Shopping catalogs, and international territory execution.
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
            Planning a visual discovery or seasonal shopping campaign? Contact us, and we will outline an audience intent and catalog strategy.
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
