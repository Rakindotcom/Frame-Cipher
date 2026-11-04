'use client'

import React from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'

const keywordFaqs = [
  {
    question: 'What is keyword research?',
    answer:
      'Keyword research is the process of discovering, analyzing, and prioritizing the exact search terms and semantic topics relevant to your business and target audience. Effective keyword research goes far beyond raw search volume—it thoroughly evaluates search intent, competitor difficulty, commercial relevance, ranking potential, and the exact page formats required to capture that demand.',
  },
  {
    question: "Why shouldn't I target the keywords with the highest search volume?",
    answer:
      'High search volume does not automatically equate to high commercial opportunity. Broad head terms are often dominated by entrenched legacy giants, suffer from ambiguous intent, and attract casual browsers rather than ready buyers. We evaluate the full commercial opportunity—prioritizing intent-aligned, achievable terms that drive actual pipeline revenue.',
  },
  {
    question: 'How do you determine search intent?',
    answer:
      'We empirically analyze the live search results for each target keyword, examining ranking page types, content structures, and SERP features. This reveals whether the query requires an informational guide, a commercial category listing, a transactional product page, or a localized service page.',
  },
  {
    question: 'What is keyword cannibalization?',
    answer:
      'Keyword cannibalization occurs when multiple URLs on the same website target similar search intent and compete against each other in Google. We identify these internal conflicts and recommend whether pages should be differentiated, consolidated into a single authoritative URL, or 301-redirected.',
  },
  {
    question: 'Do you use Google Search Console for keyword research?',
    answer:
      'Yes, when access is available. Search Console reveals queries your domain already earns impressions for—uncovering high-leverage "striking distance" keywords ranking on positions 8–20 that can be elevated to page one with targeted on-page and internal link optimization.',
  },
  {
    question: 'Do you research long-tail keywords?',
    answer:
      'Yes. We extensively research granular long-tail queries, buying questions, product variations, comparison terms, and location modifiers that allow growing websites to build immediate, high-intent organic traffic without battling unwinnable head-term wars.',
  },
  {
    question: 'Can you research Bangla and Banglish keywords?',
    answer:
      'Yes. For businesses operating in Bangladesh, we analyze English, Bangla script, Banglish (phonetic Bangla written in English letters), and colloquial local terminology across metropolitan and regional searchers.',
  },
  {
    question: 'Can you conduct keyword research for international markets?',
    answer:
      'Yes. We research native search terminology, regional spelling, and localized commercial intent across the US, UK, Australia, Canada, UAE, and European markets—strictly avoiding raw machine translation in favor of true local search behavior.',
  },
  {
    question: 'Can keyword research identify which pages I should create?',
    answer:
      'Yes. Our Keyword-to-URL mapping connects search demand directly to site architecture—specifying which existing pages need re-optimization, which new landing pages or guides must be built, and which redundant URLs should be consolidated.',
  },
  {
    question: 'Is keyword research a one-time process?',
    answer:
      'A comprehensive initial keyword research project establishes a multi-quarter foundation for SEO and content marketing. However, search trends, competitors, and product catalogs evolve. Ongoing monthly monitoring ensures your site capitalizes on emerging queries and shifts in search intent.',
  },
  {
    question: 'Do you provide keyword research for ecommerce websites?',
    answer:
      'Yes. We research and organize keywords across complex ecommerce architectures—including category pages (PLPs), individual product pages (PDPs), faceted filter parameters, brand hubs, and transactional buying guides.',
  },
  {
    question: 'How is keyword research different from an SEO audit?',
    answer:
      'An SEO audit evaluates your website’s current health, code, and ranking limitations. Keyword research discovers and prioritizes the external market demand your website should capture. Both work together, but serve complementary strategic purposes.',
  },
  {
    question: 'Do you guarantee keyword rankings?',
    answer:
      'No. Keyword research identifies high-probability opportunities and provides an architectural targeting blueprint. Final rankings depend on content quality, technical execution, domain authority, and competitor moves. We guarantee an empirical, defensible, and prioritized keyword framework.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, keywordFaqs)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Canonical Center-Aligned Header Block (§5.3) */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Direct Answers
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Frequently Asked <span className="italic text-frame-accent">Questions</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Clear, transparent answers about search intent classification, long-tail queries, Bangla/Banglish research, international mapping, and delivery timelines.
          </p>
        </div>

        {/* Center-Aligned Accordion List (§5.3) */}
        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-white/[0.16] open:border-frame-accent/40 open:bg-[#151518]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 font-heading text-lg sm:text-xl font-medium uppercase tracking-tight text-white marker:content-none">
                <span className="pr-4">{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-300 group-open:rotate-180 group-open:text-frame-accent group-open:border-frame-accent/30">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="border-t border-white/[0.06] p-6 sm:p-7 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Contact Helper Banner */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Need assistance mapping your domain’s keywords?
            </h3>
            <p className="mt-1.5 text-sm font-normal text-zinc-400">
              Share your business model and target markets, and we will formulate an actionable keyword research plan.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Talk to Our SEO Team &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
