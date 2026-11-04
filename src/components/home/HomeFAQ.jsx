const faqs = [
  {
    question: 'How does Frame Cipher charge for its work?',
    answer:
      'By scope. Single projects like website builds or SEO audits are quoted per project. Ongoing work like social media management or paid ads runs on a monthly retainer, so you always know exactly what you are paying for each month.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Frame Cipher has worked with brands in 20+ countries, fully remote, through video calls, shared project boards, and async reporting.',
  },
  {
    question: 'How long before we see results?',
    answer:
      'It depends on the service. Paid ads and social content usually show early signals within the first month. SEO and organic growth compound over 3 to 6 months, depending on the market and the starting condition of the website.',
  },
  {
    question: 'Do you require a long-term contract?',
    answer:
      'No. Ongoing work runs on rolling monthly retainers with no lock-in. You stay because the system is producing, not because a contract forces you to.',
  },
  {
    question: 'Who owns the accounts, websites, and content you produce?',
    answer:
      'The client. Frame Cipher builds and manages the assets, but the ad account, domain, source code, and content ownership always stay with the client.',
  },
]

export default function HomeFAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-14 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Before you{' '}
            <span className="italic text-frame-accent">
              ask.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            The short answers to the questions we hear most before any engagement starts.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group relative rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16] open:border-white/[0.16] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 group-open:before:opacity-100 hover:before:opacity-100"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-inset touch-manipulation select-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4 pr-4">
                  <span className="font-mono text-xs sm:text-sm text-frame-accent tabular-nums tracking-wider">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-frame-accent transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-300 text-base font-medium transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.08] px-6 pb-6 pt-4 sm:px-7 sm:pb-7 text-zinc-300 bg-[#09090B]">
                <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-300">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
