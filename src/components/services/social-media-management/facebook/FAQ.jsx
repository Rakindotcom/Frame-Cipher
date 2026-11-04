import { PosterButton } from '../../../Kinetic'

const facebookFaqs = [
  {
    question: 'What Does a Facebook Management Service Include?',
    answer:
      'A Facebook management service can include Page optimization, content strategy, content creation, publishing, Reels and Stories, community management, Messenger handling, review monitoring, moderation, reporting, and ongoing optimization. The exact scope depends on the management plan.',
  },
  {
    question: 'How Much Does Facebook Management Cost in Bangladesh?',
    answer:
      'Our Facebook management plans currently start at ৳10,000 per month. Growth and broader management plans increase based on content volume, creative requirements, community coverage, response expectations, and additional Page or location requirements. Enterprise requirements are quoted separately.',
  },
  {
    question: 'Do I Need to Provide Content for Facebook Management?',
    answer:
      'Not necessarily. We can handle content planning, copywriting, and agreed creative production as part of your management plan. You can also provide your own product images, videos, brand assets, offers, announcements, or other materials when you want them included.',
  },
  {
    question: 'Why Is My Facebook Page Getting Low Organic Reach?',
    answer:
      'Organic reach varies based on many factors, including content performance, audience behavior, competition, content format, and Facebook\'s distribution systems. A lower-reach Page should not automatically respond by posting more often. We review the Page, content, audience response, and performance data before recommending changes.',
  },
  {
    question: 'How Often Should a Facebook Page Post?',
    answer:
      'There is no universal posting frequency that works for every business. Your ideal cadence depends on your audience, content resources, business model, content quality, and goals. Our plans range from several posts per week to daily publishing.',
  },
  {
    question: 'Do You Create Facebook Content?',
    answer:
      'Yes. Depending on your plan, we can create captions, branded graphics, carousels, Reels, short-form videos, Stories, promotional content, educational posts, and other agreed content formats.',
  },
  {
    question: 'Do You Manage Facebook Comments and Messages?',
    answer:
      'Yes. Community management can include comment monitoring, replies, Messenger monitoring, customer questions, basic information, and lead or issue escalation. Response expectations depend on your selected plan and agreed scope.',
  },
  {
    question: 'Do You Manage Facebook Reviews?',
    answer:
      'Yes. Where included in your plan, we monitor reviews and help manage appropriate responses to positive, negative, and customer-service-related feedback. Serious complaints or matters requiring internal authority are escalated to your team.',
  },
  {
    question: 'Do You Manage Facebook Groups?',
    answer:
      'Yes, when Group management is included in the agreed scope. We first assess whether a Group makes strategic sense for your business before adding one to the workflow.',
  },
  {
    question: 'Do You Manage Facebook Ads?',
    answer:
      'Facebook Ads Management is separate from our organic Facebook management service. This keeps organic content, community management, and paid advertising strategically distinct. If you need paid campaigns, we can manage them through our separate paid advertising service.',
  },
  {
    question: 'Can You Help With a Restricted Facebook Page?',
    answer:
      'We can review visible Page health, access, content, and restriction-related issues and help identify appropriate next steps. We do not guarantee that Meta will remove a restriction, restore content, approve an appeal, or reinstate a Page.',
  },
  {
    question: 'Do You Use Meta Business Suite?',
    answer:
      'We can use Meta\'s business tools where appropriate for publishing, Page management, access coordination, messaging workflows, and performance management. Access should be structured around appropriate business permissions rather than sharing personal passwords.',
  },
  {
    question: 'Do You Manage Facebook Pages Outside Bangladesh?',
    answer:
      'Yes. We support Facebook management for businesses targeting markets including the US, UK, Australia, Canada, and UAE. We adapt communication, content, and workflow to the intended market.',
  },
]

export default function FAQ({ service }) {
  const faqs = (service?.faqs && service.faqs.length >= facebookFaqs.length)
    ? service.faqs
    : facebookFaqs

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  }

  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header - Centered per Section 5.3 Standard */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Questions &amp; Answers
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About Facebook Management
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Straight answers about scope, pricing, content, and what a Page management engagement can
            realistically deliver.
          </p>
        </div>

        {/* Accordion List - Centered per Section 5.3 Standard */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const q = faq.question || faq.q
            const a = faq.answer || faq.a
            return (
              <details
                key={q}
                className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 open:border-white/[0.18] open:bg-[#151518]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-medium text-white transition-colors group-hover:text-violet-300 sm:p-6 sm:text-lg">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{q}</span>
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] text-white transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 text-sm leading-relaxed text-zinc-300 sm:px-6 sm:pb-8 sm:text-base">
                  <p className="whitespace-pre-line">{a}</p>
                </div>
              </details>
            )
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mx-auto max-w-4xl mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 text-center sm:p-10">
          <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
            Have a question not covered here?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Send us a message or schedule a consultation with our social media team.
          </p>
          <div className="mt-6 flex justify-center">
            <PosterButton href="/contact">Talk to Our Social Team</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
