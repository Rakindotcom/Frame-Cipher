import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is ecommerce SEO different from regular SEO?",
    "answer": "Ecommerce SEO focuses specifically on buyer-intent search terms and the technical issues large product catalogs create, duplicate variant pages, faceted navigation, product schema, which a typical business site optimization doesn't address."
  },
  {
    "question": "Can you fix duplicate content on Shopify or WooCommerce automatically?",
    "answer": "The platforms don't resolve it automatically, but the fixes, canonical tags, structured URL handling, variant management, are things we implement directly within what each platform allows."
  },
  {
    "question": "Do you optimize every product page individually?",
    "answer": "For catalogs with a manageable number of products, yes. For very large catalogs, we typically prioritize by revenue impact and apply templated optimization patterns that scale, rather than manually rewriting thousands of pages one by one."
  },
  {
    "question": "Will product schema actually get my listings a rich result in Google?",
    "answer": "Schema makes a listing eligible for a rich result, but Google decides whether to actually display one, implementing it correctly is a prerequisite, not a guarantee on its own."
  },
  {
    "question": "Do you provide ecommerce SEO for stores outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi stores, we provide ecommerce SEO for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
