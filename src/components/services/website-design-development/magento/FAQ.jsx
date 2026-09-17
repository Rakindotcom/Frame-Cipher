import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How do I know if my business actually needs Magento instead of Shopify or WooCommerce?",
    "answer": "Magento generally makes sense once you have a large product catalog, need multiple storefronts or regions, or require B2B pricing and quote workflows. For smaller catalogs, Shopify or WooCommerce usually deliver the same result at lower cost, we'll assess this honestly during consultation."
  },
  {
    "question": "Can Magento handle B2B pricing and wholesale customers?",
    "answer": "Yes, customer group pricing, tiered discounts, and quote-based workflows are core Magento capabilities we set up as part of a B2B build, which simpler ecommerce platforms typically don't support natively."
  },
  {
    "question": "Does Magento require special hosting?",
    "answer": "Yes, Magento has higher server resource requirements than simpler platforms. We configure hosting and infrastructure sized correctly for your catalog and traffic, since underprovisioned hosting is the most common cause of a slow Magento store."
  },
  {
    "question": "Can you integrate Magento with our existing ERP or inventory system?",
    "answer": "In most cases, yes, ERP and inventory integration is a common part of Magento builds. Specific compatibility depends on your system, so we confirm this during the initial consultation."
  },
  {
    "question": "Do you work with merchants outside Bangladesh?",
    "answer": "Yes, we build Magento stores for merchants across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
