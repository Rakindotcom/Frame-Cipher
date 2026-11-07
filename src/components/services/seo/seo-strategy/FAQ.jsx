'use client'

import React from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'

const strategyFaqs = [
  {
    question: 'Do I need to hire you for execution if I just want a strategy?',
    answer:
      'No, strategy and consulting is available as a genuine standalone service. Some clients execute the roadmap independently with their own in-house dev and content teams; others choose to transition into execution with us afterward. Both are completely valid and supported outcomes.',
  },
  {
    question: "What's the difference between an SEO audit and SEO strategy consulting?",
    answer:
      'An audit diagnoses what is currently wrong with your website technically and contextually. Strategy consulting goes significantly further: it transforms those raw findings into a prioritized, resourced, and sequenced 30/60/90-day action plan calibrated around your specific business model and internal team capacity.',
  },
  {
    question: 'What is fractional SEO leadership, and who is it for?',
    answer:
      'It is ongoing, senior-level strategic guidance and oversight without the cost and overhead of a full-time executive hire. It is ideal for growing businesses that already have capable internal content and engineering teams but lack a veteran SEO director to set architectural priorities and maintain focus.',
  },
  {
    question: 'Can you train our internal team instead of doing the work for us?',
    answer:
      'Yes, team training and enablement is one of our core service offerings. We provide hands-on workshops, custom Standard Operating Procedures (SOPs), and workflow setups designed to build enduring internal capability rather than continuous agency dependency.',
  },
  {
    question: 'Do you provide strategy consulting for businesses outside Bangladesh?',
    answer:
      'Yes. Alongside Bangladeshi enterprises, we advise clients across the US, UK, Australia, Canada, and the UAE (spanning 20+ countries to date), adapting strategies to international competitive environments and regional search intent.',
  },
  {
    question: 'How long does it typically take to see measurable ROI from an SEO strategy?',
    answer:
      'While technical foundational fixes and crawl efficiency improvements often yield indexation gains within 30 to 60 days, compounded organic revenue growth typically accelerates between months 3 and 6 as new authority signals and buyer-intent content clusters mature.',
  },
  {
    question: 'How often should our SEO roadmap be calibrated or updated?',
    answer:
      'A static roadmap quickly degrades as search algorithms and market competitors evolve. We recommend formal quarterly calibrations to evaluate keyword trajectory, algorithmic shifts, competitor movements, and your evolving commercial priorities.',
  },
  {
    question: 'Can you collaborate directly with our third-party web development agency or freelance writers?',
    answer:
      'Yes. Our strategy deliverables include explicit developer tickets, schema code snippets, and detailed content briefs that external agencies and contractors can execute directly without ambiguity or technical friction.',
  },
  {
    question: 'What tools, access, or data do you need from us before starting discovery?',
    answer:
      'We typically request read-only access to Google Search Console, Google Analytics 4, and your historical organic campaign data. If internal security limits access, we conduct external diagnostic crawling, competitor gap analysis, and reverse-engineer SERP data.',
  },
  {
    question: 'How do you prioritize tasks when our engineering backlog is already overwhelmed?',
    answer:
      'We use an empirical Impact vs. Feasibility matrix (RICE framework). We sequence high-impact, low-engineering "quick wins" first (such as critical metadata, canonical fixes, and internal linking) before proposing larger architectural refactors.',
  },
  {
    question: 'Do you assist in vetting or hiring full-time in-house SEO talent?',
    answer:
      'Yes. Under our Fractional Advisory and Team Enablement scopes, we help define job specifications, design technical screening assessments, and sit in on candidate interviews to help you hire proven in-house SEO specialists.',
  },
  {
    question: 'What happens if our internal team gets stuck during roadmap implementation?',
    answer:
      'Every strategy engagement includes follow-up Q&A support. Under our Fractional Advisory, your team has continuous asynchronous communication channels (Slack/Email) and regular check-in calls to resolve technical roadblocks in real time.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, strategyFaqs)

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
            Clear, transparent answers about standalone strategy roadmaps, fractional leadership, internal team enablement, implementation timelines, and regional market coverage.
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
                <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">{faq.question}</h3>
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
              Still deciding what your team needs?
            </h3>
            <p className="mt-1.5 text-sm font-normal text-zinc-400">
              Tell us about your internal capacity and goals, and we will recommend the engagement model that genuinely fits.
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
