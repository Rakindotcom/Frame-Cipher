'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import { resolveFaqs } from '../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'How is social media management different from paid social advertising?',
    answer:
      'Social media management focuses on your organic presence, including strategy, content, publishing, community engagement, and reporting.\n\nPaid social advertising uses an advertising budget to reach selected audiences and support specific campaign objectives.\n\nThe two services can work together but serve different purposes.',
  },
  {
    question: 'Do you create original social media content?',
    answer:
      'Yes. Depending on your selected plan, we can create captions, graphics, carousels, short-form videos, Stories, promotional content, educational content, and other social assets.\n\nYou can also provide your own photography, video, or brand assets for us to manage and repurpose.',
  },
  {
    question: 'Which social media platforms should my business use?',
    answer:
      'There is no universal platform mix. We consider your audience, industry, business goals, content capabilities, and existing performance before recommending the platforms that make sense for your business.',
  },
  {
    question: 'How many posts do you create each month?',
    answer:
      'Content volume depends on your selected plan. The exact number of posts, videos, Stories, and other assets can be defined according to your platform mix and content requirements.',
  },
  {
    question: 'Do you manage comments and direct messages?',
    answer:
      'Yes. Community management can include comments, direct messages, mentions, basic customer questions, and spam moderation.\n\nQuestions requiring internal business information or approval are escalated to your team.',
  },
  {
    question: 'Do I need to provide photos and videos?',
    answer:
      'Not necessarily. Depending on your plan, Framecipher can create social graphics, content concepts, captions, and short-form content. If you have existing photography or video assets, we can also incorporate and repurpose them.',
  },
  {
    question: 'Do you provide Bangla and English social media content?',
    answer:
      'Yes. For Bangladesh-focused businesses, we can develop Bangla, English, or bilingual content where appropriate for the target audience and brand.',
  },
  {
    question: 'Do you serve businesses outside Bangladesh?',
    answer:
      'Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    question: 'How quickly will I see social media growth?',
    answer:
      'Social media performance varies by platform, industry, audience, starting point, content quality, and consistency. Early engagement and performance signals can appear relatively quickly, but meaningful growth usually requires consistent management over time.\n\nWe do not guarantee a specific follower count, engagement rate, or viral result.',
  },
  {
    question: 'Can you manage social media for ecommerce businesses?',
    answer:
      'Yes. Ecommerce social management can include product-focused content, educational posts, promotional campaigns, customer engagement, product discovery content, and other content designed around the customer journey.',
  },
  {
    question: 'Do you provide paid social advertising too?',
    answer:
      'Yes. Paid social advertising is available as a separate service through Framecipher’s broader paid advertising offering.\n\nWe can also coordinate organic social content and paid campaigns when both are part of your marketing strategy.',
  },
]

export default function FAQ({ service }) {
  const faqs =
    service?.faqs && service.faqs.length >= fallbackFaqs.length
      ? resolveFaqs(service, fallbackFaqs)
      : fallbackFaqs
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n+/g, ' '),
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               COMMON INQUIRIES · CLEAR ANSWERS 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked{' '}
            <span className="italic text-[#A855F7]">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Clear, direct answers about our social media management deliverables, platform coverage, content creation, community care, and commercial terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="transition-colors hover:bg-white/[0.01]">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors sm:py-7"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg sm:text-xl font-medium uppercase text-white leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#18181B] transition-transform duration-200 mt-0.5 ${
                      isOpen ? 'rotate-180 border-[#A855F7]/40 text-[#A855F7]' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-7 pr-6 sm:pr-12 animate-in fade-in-50 duration-200">
                    <div className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 space-y-4 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Prompt Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Have Another Question?
            </span>
            <p className="text-sm font-normal text-zinc-300">
              Speak with our social team about your brand goals, audience, and platform mix.
            </p>
          </div>
          <PosterButton href="/contact" variant="accent" className="shrink-0">
            Talk to Our Social Team
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
