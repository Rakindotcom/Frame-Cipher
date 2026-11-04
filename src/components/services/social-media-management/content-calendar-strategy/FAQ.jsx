'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    question: 'What is a Content Calendar & Strategy Service?',
    answer:
      'A Content Calendar & Strategy Service combines strategic content planning with an organized publishing calendar.\n\nIt helps determine what your business should communicate, which platforms should carry the content, how content should be adapted, when it should be published, and how different content pieces should support broader business goals.',
  },
  {
    question: 'What is the difference between a content calendar and content strategy?',
    answer:
      'Content strategy defines the direction behind your content, including your audience, goals, messaging, content pillars, and platform roles.\n\nA content calendar organizes that strategy into specific topics, formats, platforms, dates, campaigns, CTAs, and production requirements.',
  },
  {
    question: 'What does a social media content calendar include?',
    answer:
      'Depending on the scope, a social media content calendar can include content topics, content pillars, publishing dates, platforms, formats, campaigns, CTAs, asset requirements, production deadlines, approval stages, and publishing status.',
  },
  {
    question: 'How far ahead do you plan content?',
    answer:
      'The planning period depends on the engagement and business requirements.\n\nMany ongoing social media programs use monthly planning cycles, while larger campaigns, launches, or international projects may require a longer planning horizon.',
  },
  {
    question: 'Do you create the content or only build the calendar?',
    answer:
      'The service can be provided as a strategy and planning engagement for your internal team, or it can be coordinated with Framecipher’s platform-specific social media management and content production services when included in the agreed scope.',
  },
  {
    question: 'Can you build a calendar for our in-house marketing team?',
    answer:
      'Yes.\n\nOur Setup Only option is designed for businesses that want a professional content framework and master calendar that their internal team can execute and maintain.',
  },
  {
    question: 'Can you coordinate Facebook, Instagram, LinkedIn, TikTok, and YouTube?',
    answer:
      'Yes.\n\nThe planning system can coordinate multiple platforms while keeping the content adapted to each platform’s audience, format, communication style, and role within the wider strategy.',
  },
  {
    question: 'Can you adapt one campaign for different platforms?',
    answer:
      'Yes.\n\nWe begin with the campaign’s core message and then plan platform-specific content formats, angles, publishing sequences, and CTAs.',
  },
  {
    question: 'How is this different from using a social media scheduling tool?',
    answer:
      'A scheduling tool primarily helps organize or publish content at selected times.\n\nContent Calendar & Strategy goes further by determining what should be communicated, why it matters, where it should appear, how the idea should be adapted, how campaigns should be coordinated, and how future planning can respond to performance.',
  },
  {
    question: 'Do you publish the content for us?',
    answer:
      'Publishing depends on the selected scope.\n\nThe calendar can be delivered to your internal team for execution, or it can be connected with Framecipher’s platform management services when publishing is included.',
  },
  {
    question: 'Do you need to manage all our social media platforms?',
    answer:
      'No.\n\nWe can build a content planning system around the platforms relevant to your business.\n\nThe service becomes especially useful when multiple platforms need to work together, but the exact scope depends on your goals and content operation.',
  },
  {
    question: 'Do you provide Content Calendar & Strategy Service outside Bangladesh?',
    answer:
      'Yes.\n\nFramecipher works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n\n/g, '<br/><br/>'),
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Section Intro */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Knowledge Base · FAQs
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About{' '}
            <span className="italic text-frame-accent">Content Calendars &amp; Strategy.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear answers about scope, difference from scheduling tools, multi-platform coordination, and in-house team handoffs.
          </p>
        </div>

        {/* 12 Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-purple-500/40 bg-[#15121C]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs text-frame-accent font-semibold shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading text-base sm:text-lg font-medium uppercase text-white tracking-tight">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-frame-accent border-purple-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] p-5 sm:p-6 pt-3 sm:pt-4">
                    {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 ${
                          pIdx > 0 ? 'mt-3' : ''
                        }`}
                      >
                        <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing"]}>
                          {paragraph}
                        </AutoLinks>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional Questions Strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Have Questions About Your Content Workflow?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with our content strategists to review your current multi-platform publishing setup.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Content Strategy Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
