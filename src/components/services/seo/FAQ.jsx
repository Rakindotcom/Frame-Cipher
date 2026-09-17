import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How long does SEO take to show results?",
    "answer": "Most sites see meaningful movement within three to six months, though an audit and initial technical fixes can be delivered within days. Timelines depend on your industry's competitiveness and your site's starting condition."
  },
  {
    "question": "What's the difference between SEO and AI search optimization?",
    "answer": "Traditional SEO targets Google's organic results. AI search optimization structures content so tools like ChatGPT and Perplexity can cite it directly in generated answers, increasingly important as more queries get answered without a click at all."
  },
  {
    "question": "Can you help recover from a Google penalty?",
    "answer": "Yes, penalty recovery starts with diagnosing whether the drop is algorithmic or a manual action, then building a documented path back, which we cover in more depth on our Penalty Recovery page."
  },
  {
    "question": "Do you guarantee a #1 Google ranking?",
    "answer": "No, no agency can honestly guarantee a specific ranking position, since Google's algorithm isn't controlled by any outside provider. We focus on transparent processes and reporting instead of promises we can't actually keep."
  },
  {
    "question": "What's included in an SEO audit?",
    "answer": "A technical review, on-page assessment, content gap analysis, and backlink quality check, delivered as a written report with prioritized recommendations you can act on with or without further work from us."
  },
  {
    "question": "Do you serve businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, Canada, and UAE, using the same audit-first process regardless of location."
  }
]
  if (!faqs?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

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
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
