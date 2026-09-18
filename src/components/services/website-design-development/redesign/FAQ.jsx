const faqs = [
  {
    question: 'Will a redesign hurt my current Google rankings?',
    answer: 'It can if URLs, content, redirects, indexing, or technical SEO elements are changed without proper planning. We establish an SEO baseline, review valuable pages, plan redirects, preserve important content, and perform pre- and post-launch checks to reduce unnecessary search risk.',
  },
  {
    question: 'Do you only redesign business websites?',
    answer: 'No. We redesign business and corporate websites, ecommerce stores, blogs, publishing platforms, portfolios, membership websites, directories, and other website types. The audit and redesign scope are based on what that specific website needs.',
  },
  {
    question: 'Do I need a full rebuild, or just a visual refresh?',
    answer: 'It depends on the condition of the existing website. If the platform and structure are sound but the design is outdated, a visual refresh may be enough. If the platform, architecture, code, or structure is limiting the website, a deeper redesign or migration may be more appropriate.',
  },
  {
    question: 'What should I keep from my existing website during a redesign?',
    answer: 'We review existing URLs, ranking pages, organic traffic, backlinks, valuable content, conversion data, analytics, integrations, and other important assets before deciding what should be preserved or changed.',
  },
  {
    question: 'Can you redesign my website without changing the domain?',
    answer: 'Yes. A redesign can usually be completed without changing the domain when the existing domain is appropriate for the business.',
  },
  {
    question: 'Will you preserve my existing URLs?',
    answer: 'Where practical, we preserve existing URLs. When URLs need to change, we create a redirect strategy that maps old URLs to relevant new destinations.',
  },
  {
    question: 'Can you redesign only part of my website?',
    answer: 'Yes. If the audit shows that only specific pages or sections need improvement, we can scope the project around those areas instead of rebuilding the entire website.',
  },
  {
    question: 'Can you redesign my website without changing the CMS?',
    answer: 'Yes, when the existing platform can support the required improvements. We recommend migration when the current platform is genuinely limiting performance, functionality, management, or scalability.',
  },
  {
    question: 'How long does a website redesign take?',
    answer: 'Most projects take around 2 to 14+ weeks. The actual timeline depends on the redesign scope, number of pages, platform, migration requirements, integrations, content volume, and project complexity.',
  },
  {
    question: 'Do you work with businesses outside Bangladesh?',
    answer: 'Yes. Framecipher provides website redesign services for businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Common questions about website redesigns, SEO preservation, technical platforms, and timelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
