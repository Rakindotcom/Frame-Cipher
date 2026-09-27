import { SectionIntro, PosterButton } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'What does Facebook Page management include?',
    answer:
      'It can include Page optimization, content strategy, content creation, publishing, comment and review management, community care, Messenger handling, moderation, and reporting.\n\nThe exact scope is confirmed after the free Page audit and recorded in your plan.',
  },
  {
    question: 'How much does Facebook management cost?',
    answer:
      'Plans start at ৳10,000 per month for Essential, ৳18,000 per month for Growth, and ৳28,000 per month for Full Coverage. Enterprise pricing is custom.\n\nFinal scope and pricing are confirmed after the audit, and ad spend is separate from management fees.',
  },
  {
    question: 'How much content should I post?',
    answer:
      'It depends on your business and goals. Essential covers 3 posts per week, Growth covers 5 posts per week, and Full Coverage supports daily content.\n\nWe recommend a cadence your team can sustain instead of publishing more than is useful.',
  },
  {
    question: 'Do you create the content?',
    answer:
      'Yes. Content creation is part of the management scope, including graphics, carousels, captions, short-form videos, Reels, and Stories.\n\nYour approval workflow is built into the process where required.',
  },
  {
    question: 'Do you manage comments and reviews?',
    answer:
      'Yes. Comment responses, review monitoring, and review responses are included according to the plan.\n\nSpam, abuse, and sensitive issues are handled within the agreed moderation and escalation process.',
  },
  {
    question: 'Can you manage Messenger?',
    answer:
      'Yes. We can monitor Messenger, answer common questions, and escalate leads, serious complaints, or questions that need your authority.',
  },
  {
    question: 'Can you manage a Facebook Group?',
    answer:
      'Yes, where it makes sense for your business. Group management can include content planning, discussion prompts, member engagement, moderation, and community guidelines.\n\nWe assess whether a Group is worth the effort first.',
  },
  {
    question: 'Do you manage Facebook Ads?',
    answer:
      'Facebook Ads Management is a separate service from organic Facebook management.\n\nIf you need paid advertising, it is scoped and billed separately from the management plan.',
  },
  {
    question: 'How does the reporting work?',
    answer:
      'You receive reporting around agreed metrics such as reach, engagement, video performance, message activity, response performance, and top or underperforming content.\n\nReports also include observations and recommended next actions.',
  },
  {
    question: 'Do you guarantee followers, engagement, or sales?',
    answer:
      'No. We do not promise follower counts, engagement levels, leads, sales, or specific revenue.\n\nOutcomes depend on your business, market, content, and factors outside our control.',
  },
  {
    question: 'How do approvals work?',
    answer:
      'Content is prepared, reviewed, and shared for your approval before publishing when the agreed workflow requires it.\n\nUrgent or sensitive matters are escalated to you rather than handled on assumption.',
  },
  {
    question: 'Will you manage my Page even if it is restricted?',
    answer:
      'We can review the situation and guide you through the correct process, but we cannot guarantee that Meta will approve an appeal or remove a restriction.\n\nPlatform decisions rest with Meta.',
  },
  {
    question: 'Who owns the Page and content?',
    answer:
      'Your business owns the Page, its assets, and your customer data.\n\nWe work through appropriate access permissions rather than taking ownership of your accounts.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Request a free Facebook Page audit. We review the Page, discuss your goals, and recommend the plan that matches your actual needs.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl">
          <SectionIntro eyebrow="Questions &amp; answers" title="Facebook Management FAQs">
            Straight answers about scope, pricing, content, and what a Page management engagement can
            realistically deliver.
          </SectionIntro>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:p-6 md:text-base">
                  <span className="flex items-baseline gap-3 md:gap-4">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t-2 border-frame-border p-5 md:p-6">
                  {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                        pIdx > 0 ? 'mt-4' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            If your question is not covered here, ask directly during the audit call.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Ask a Facebook Question &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
