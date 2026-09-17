import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is on-page SEO different from technical SEO?",
    "answer": "On-page SEO addresses content, metadata, and structure on individual pages what's written and how it's organized. Technical SEO addresses site-wide infrastructure like crawlability and speed. Both affect rankings, and technical issues can undermine even strong on-page work."
  },
  {
    "question": "Do you write new content, or just optimize what's already there?",
    "answer": "Both, depending on the page, we either refine existing content or write new content where a genuine gap exists between what's there and what the search intent actually requires."
  },
  {
    "question": "How do you decide what search intent a page should target?",
    "answer": "We look at what's currently ranking for the target keyword, since Google's existing results are a strong signal of what searchers actually want: a comparison, a how-to, a product page, and structure accordingly."
  },
  {
    "question": "Will on-page SEO alone get my pages to rank?",
    "answer": "It depends on competition. For lower-competition terms, strong on-page work can be enough. For competitive terms, on-page work is necessary but usually needs to pair with technical SEO and link building."
  },
  {
    "question": "Do you optimize ecommerce product pages the same way as regular content pages?",
    "answer": "The principles are similar, but ecommerce pages have specific considerations buyer intent, schema for pricing and reviews, that we cover in more depth under our Ecommerce SEO service.\n\n[Talk to Our SEO Team]"
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
