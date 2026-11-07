'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What is a Lead Generation Ads Service?',
    a: 'A Lead Generation Ads Service helps businesses use paid advertising to generate qualified inquiries, consultations, quote requests, demo requests, phone calls, or calendar bookings. Framecipher manages campaign strategy, lead destinations, forms, qualification logic, tracking, CRM integration, optimization, and downstream sales-aligned reporting across Google, Meta, and LinkedIn.',
  },
  {
    q: 'Which platform is best for lead generation: Google, Meta, or LinkedIn?',
    a: 'There is no universal best platform. Google captures existing high-intent search demand when prospects actively seek solutions. Meta generates demand through visual hooks and native lead forms. LinkedIn excels when professional targeting (job function, company size, seniority) is critical to qualification. We recommend the channel mix based on your offer, buyer journey, sales cycle, and customer acquisition economics.',
  },
  {
    q: 'Should my lead form be short or long?',
    a: 'It depends on what your sales team needs to qualify an opportunity. Shorter forms reduce friction and increase raw volume, while additional qualification questions filter out tire-kickers and improve lead readiness. We calibrate form length to balance volume with sales efficiency.',
  },
  {
    q: 'Can you use a landing page instead of a native lead form?',
    a: 'Yes. Depending on the offer, audience, and market, we deploy website landing pages, native in-app lead forms (Meta/LinkedIn), direct call campaigns, click-to-WhatsApp messaging funnels, or direct calendar booking funnels to achieve the lowest friction path to a qualified lead.',
  },
  {
    q: 'Can you integrate lead generation campaigns with our CRM?',
    a: 'Yes, where the advertising platform and CRM support the required integrations. We configure automated lead routing, field mapping, UTM source tracking, real-time sales notifications, and lead status syncing into tools such as HubSpot, Salesforce, Zoho, or custom webhooks.',
  },
  {
    q: 'Can you track qualified leads instead of just form submissions?',
    a: 'Yes. Where your CRM and ad platforms support data feedback, we connect downstream milestones (Lead → Qualified Lead → Opportunity → Customer → Revenue), enabling algorithms to bid toward high-value buyers rather than generic form fillers.',
  },
  {
    q: 'Can Google Ads use CRM data to improve lead optimization?',
    a: 'Yes. Google supports Enhanced Conversions for Leads and offline conversion workflows that use hashed first-party customer signals to improve conversion measurement and smart bidding, increasingly managed through Google Data Manager.',
  },
  {
    q: 'Can LinkedIn Lead Gen Forms connect to our CRM?',
    a: 'Yes. LinkedIn supports direct integration with popular CRM and marketing automation platforms for automated lead syncing, instant notifications, and closed-loop lead-to-sales pipeline reporting.',
  },
  {
    q: 'Does Google offer native lead forms in Bangladesh?',
    a: 'Google Lead Form Assets are only available in selected countries, and Bangladesh is currently not included on Google published eligible country list. For Bangladesh campaigns, we utilize optimized website landing pages, direct phone calls, or WhatsApp messaging funnels instead.',
  },
  {
    q: 'How quickly should we follow up with a new lead?',
    a: 'As quickly as your sales team can realistically respond. Studies consistently show that responding within 5 to 15 minutes yields dramatically higher qualification and contact rates. We audit notifications, routing, and response workflows alongside media management.',
  },
  {
    q: 'How much does Lead Generation Ads Service cost?',
    a: 'Framecipher starting management fee is ৳18,000/month for a single-platform setup. Multi-platform management starts at ৳35,000/month, while CRM-Integrated Growth starts at ৳50,000/month. Ad spend is separate from management fees.',
  },
  {
    q: 'Can you manage lead generation campaigns outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses in Bangladesh and international markets including the US, UK, Australia, Canada, UAE, and other eligible territories, adapting keyword intent and buyer psychology to each market.',
  },
  {
    q: 'Do you guarantee lead generation results?',
    a: 'No. We do not guarantee a specific CPL, CPQL, conversion rate, number of leads, or closed revenue. Lead outcomes depend on offer strength, pricing, competitor moves, sales team follow-up speed, and market demand. We commit to rigorous qualification architectures, reliable routing, and sales-aligned optimization.',
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
            Everything you need to know about qualified lead acquisition, CRM routing, form friction, platform selection, and sales tracking.
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
            Want to generate higher quality B2B inquiries or sales leads? Contact us, and we will walk through our lead qualification and tracking process.
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
