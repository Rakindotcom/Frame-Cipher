import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is SEO writing different from regular blog writing?",
    "answer": "SEO writing is built around real keyword research and search intent from the start, structured to satisfy both what a search engine expects and what a reader actually wants; regular blog writing without that research might read well but often has little realistic chance of ranking."
  },
  {
    "question": "Do you write in a way that matches our existing brand voice?",
    "answer": "Yes, we review your existing content and brand guidelines during the brief process, and every draft goes through revision to make sure the voice genuinely matches, not just the information."
  },
  {
    "question": "Can you write product descriptions for a large ecommerce catalog?",
    "answer": "Yes, for large catalogs, we typically develop a scalable template and voice guide first, then apply it efficiently across the catalog rather than writing every single description from scratch with no consistency."
  },
  {
    "question": "Do you handle both one-off pieces and ongoing content programs?",
    "answer": "Yes, some clients need occasional individual pieces, others want a consistent monthly content operation. Both are available, and we'll recommend based on what your business actually needs."
  },
  {
    "question": "Do you serve businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write content for clients in the US, UK, Australia, Canada, and UAE."
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
