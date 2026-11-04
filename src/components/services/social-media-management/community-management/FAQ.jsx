'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    q: 'What is Community Management Service?',
    a: 'Community Management Service is the ongoing management of audience interactions across social and relevant review platforms. It can include comments, DMs, reviews, moderation, social listening, proactive engagement, escalation, and reporting.',
  },
  {
    q: 'What is the difference between community management and social media management?',
    a: 'Community management focuses primarily on audience interaction, response, moderation, feedback, and relationship building. Social media management is broader and may include strategy, content creation, publishing, community management, reporting, and platform optimization.',
  },
  {
    q: 'Do you manage comments and direct messages?',
    a: 'Yes. Comment and direct message management can be included for the platforms covered by your selected scope.',
  },
  {
    q: 'Do you respond to negative comments?',
    a: 'Yes. We can respond to legitimate negative feedback professionally and according to your approved response guidelines. Serious or sensitive issues can be escalated to your team instead of being handled with a generic public reply.',
  },
  {
    q: 'Can you manage Google reviews?',
    a: 'Yes. Google Business Profile review management can be included where the required access and scope are available. Google allows verified businesses and authorized managers to respond to customer reviews.',
  },
  {
    q: 'Do you delete negative reviews?',
    a: 'No. We do not remove legitimate criticism simply because it is negative. If content appears to violate a platform’s policies, we can help identify and report it through the appropriate process.',
  },
  {
    q: 'What happens when a customer asks something only our team can answer?',
    a: 'We escalate the conversation according to the agreed workflow. Your designated team can provide the required information or resolution, while we can track the escalation where that is included in the scope.',
  },
  {
    q: 'Do you provide 24/7 community management?',
    a: 'Coverage depends on your selected plan and agreed operating hours. We do not promise 24/7 coverage unless it is specifically included in your proposal.',
  },
  {
    q: 'Do you manage communities on Facebook, Instagram, LinkedIn, TikTok, and YouTube?',
    a: 'Yes. Platform coverage can include Facebook, Instagram, LinkedIn, TikTok, and YouTube, depending on your selected scope.',
  },
  {
    q: 'Can community management be bundled with social media management?',
    a: 'Yes. Community management can be provided as a standalone service or coordinated with Framecipher’s broader social media management, platform management, and content strategy services.',
  },
  {
    q: 'Do you provide community management outside Bangladesh?',
    a: 'Yes. We work with businesses serving Bangladesh and international markets including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How quickly can you start?',
    a: 'After the scope, access, response guidelines, escalation process, and required approvals are confirmed, the initial setup can typically begin within the first week. The exact timeline depends on the number of platforms and complexity of the engagement.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = resolveFaqs(service, fallbackFaqs)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q || faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a || faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-24">
      {/* Schema.org FAQPage Injection */}
      <Script
        id="community-management-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Questions about our{' '}
            <span className="italic text-frame-accent">community management.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Straight answers about scope, platforms, review management, escalation, coverage hours, and how community management differs from broader social media management.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const questionText = faq.q || faq.question
            const answerText = faq.a || faq.answer

            return (
              <div
                key={questionText}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white">
                      {questionText}
                    </span>
                  </div>
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
                    <p className="text-base font-normal leading-relaxed text-zinc-300">
                      <AutoLinks
                        currentPath="/services/social-media-management/community-management"
                        allowed={["/services/content-writing/content-strategy"]}
                      >
                        {answerText}
                      </AutoLinks>
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
            Have a specific platform, response SLA, or volume requirement in mind? Contact us for a straightforward scope assessment.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Talk to Our Ops Team &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
