'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    question: 'What Does a LinkedIn Management Service Include?',
    answer:
      'A LinkedIn Management Service can include LinkedIn strategy, audience research, Company Page management, executive profile management, profile and Page optimization, thought leadership, content creation, publishing, engagement, employee advocacy, performance reporting, and ongoing optimization.\n\nThe exact scope depends on your selected management plan.',
  },
  {
    question: 'How Much Does LinkedIn Management Cost in Bangladesh?',
    answer:
      'Framecipher LinkedIn management plans start from ৳15,000 per month for Company Page management.\n\nExecutive profile management, combined company and executive management, and multi-executive programs have different pricing based on scope. Final pricing depends on content volume, number of profiles, production requirements, engagement coverage, and strategic needs.',
  },
  {
    question: 'Do You Manage LinkedIn Company Pages?',
    answer:
      'Yes. We can manage Company Page strategy, optimization, content planning, content creation, publishing, engagement, employer-brand content, company updates, and performance reporting.',
  },
  {
    question: 'Do You Manage Founder and Executive LinkedIn Profiles?',
    answer:
      'Yes. We can support founders, CEOs, directors, consultants, and other executives with profile positioning, voice development, thought leadership, ghostwritten content, publishing, engagement guidance, and performance analysis.',
  },
  {
    question: 'Do You Provide LinkedIn Ghostwriting?',
    answer:
      'Yes. Executive ghostwriting can include topic development, research, interviews or voice discovery, post writing, editing, content planning, and an approval workflow.\n\nThe goal is to create content based on the executive’s actual expertise and perspective rather than generic LinkedIn templates.',
  },
  {
    question: 'Can You Optimize My LinkedIn Profile?',
    answer:
      'Yes. Profile optimization can include your headline, About section, Experience section, keywords, Featured content, positioning, services, links, and other relevant profile elements.',
  },
  {
    question: 'Do You Optimize LinkedIn Company Pages?',
    answer:
      'Yes. Company Page optimization can include business information, About content, positioning, services or products, visual elements, relevant links, Showcase Pages where appropriate, and content alignment.',
  },
  {
    question: 'Do You Create LinkedIn Carousels and Document Posts?',
    answer:
      'Yes. Depending on your plan, we can create educational Carousels and Document posts around frameworks, case studies, industry insights, checklists, processes, research, and other useful business topics.',
  },
  {
    question: 'Do You Manage LinkedIn Comments and Engagement?',
    answer:
      'Yes. Depending on the selected scope, community management can include monitoring comments, responding to relevant interactions, strategic commenting, Page engagement, and escalation of conversations that require direct involvement from your team or executives.',
  },
  {
    question: 'Do You Provide Employee Advocacy Support?',
    answer:
      'Yes. We can help establish employee advocacy workflows, prepare share-ready content, provide participation guidance, and coordinate company-content amplification.\n\nEmployee participation remains voluntary and should reflect each employee’s professional voice.',
  },
  {
    question: 'Do You Manage LinkedIn Newsletters?',
    answer:
      'Where the feature is available and appropriate for your account, we can support newsletter strategy, topic planning, content development, publishing, and performance review.',
  },
  {
    question: 'Do You Manage LinkedIn Events?',
    answer:
      'Yes, where relevant to your business and available for the account. We can support event-related content planning, promotion, announcements, and post-event communication.',
  },
  {
    question: 'Do You Manage LinkedIn Ads?',
    answer:
      'LinkedIn Ads management is a separate paid advertising service from organic LinkedIn Management. Organic management focuses on content, profiles, Pages, engagement, thought leadership, and organic presence.\n\nPaid LinkedIn campaigns can be scoped separately when you need audience targeting, sponsored content, lead-generation campaigns, conversion tracking, or paid campaign optimization.',
  },
  {
    question: 'Should We Focus on Our Company Page or an Executive Profile?',
    answer:
      'They serve different purposes. A Company Page provides an official business presence, while executive profiles provide a more personal channel for professional expertise, experience, and thought leadership.\n\nFor many B2B businesses, coordinating both can create a more complete LinkedIn presence.',
  },
  {
    question: 'Can You Manage LinkedIn for Businesses Outside Bangladesh?',
    answer:
      'Yes. Framecipher supports businesses in Bangladesh and international markets.\n\nInternational LinkedIn management can be adapted to the target market, audience, industry, language, cultural context, competitors, and business objectives.',
  },
  {
    question: 'Can You Manage Multiple Executive Profiles?',
    answer:
      'Yes. Multi-executive LinkedIn management can be scoped for leadership teams, larger businesses, and organizations where several executives need coordinated positioning and content.',
  },
  {
    question: 'How Quickly Can LinkedIn Management Start?',
    answer:
      'The timeline depends on account access, business discovery, executive availability, content requirements, production needs, and approval speed.\n\nWe normally begin with an audit and discovery process before moving into strategy, voice development where required, content planning, production, approval, and publishing.',
  },
  {
    question: 'What Is the Difference Between LinkedIn Management and LinkedIn Marketing?',
    answer:
      'LinkedIn management focuses on the ongoing operation and growth of your organic LinkedIn presence, including Pages, profiles, content, publishing, engagement, and reporting.\n\nLinkedIn marketing is broader and can include organic management plus paid advertising, lead-generation campaigns, events, employee advocacy, outreach, and other promotional activities. Framecipher can scope organic LinkedIn management separately from paid advertising and broader B2B marketing requirements.',
  },
  {
    question: 'Do You Guarantee LinkedIn Leads or Followers?',
    answer:
      'No. We do not guarantee a specific number of leads, followers, impressions, connections, or sales.\n\nWe control the strategy, research, content, publishing workflow, engagement within scope, reporting, and optimization. Platform distribution and audience response remain outside our direct control.',
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
            <span className="italic text-frame-accent">LinkedIn Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Straight answers about scope, pricing, executive ghostwriting, company pages, and what
            organic LinkedIn management can realistically deliver.
          </p>
        </div>

        {/* 19 Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-purple-500/40 bg-[#15121c]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3.5 sm:gap-4">
                    <span className="font-mono text-xs font-semibold text-frame-accent shrink-0">
                      Q{String(index + 1).padStart(2, '0')} · </span>
                    <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-frame-accent border-purple-500/40' : ''
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
                        <AutoLinks currentPath="/services/social-media-management/linkedin" allowed={["/services/social-media-management/community-management", "/services/paid-advertising"]}>
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
              Have a Specific Question About Your LinkedIn Presence?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with our B2B LinkedIn strategists to review your company page or executive profiles.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request Custom Strategy Call
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
