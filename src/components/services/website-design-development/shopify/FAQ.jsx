import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Should I choose Shopify or WooCommerce/Magento for my store?",
    "answer": "Shopify suits merchants who want reliable, managed infrastructure without handling hosting or security themselves. WooCommerce suits businesses wanting more content control, and Magento suits larger catalogs with complex B2B or multi-store needs. We recommend based on your actual catalog and business model."
  },
  {
    "question": "Can I use bKash or Nagad for payments on Shopify?",
    "answer": "Yes, we configure bKash and Nagad integration alongside Shopify's available payment options for Bangladeshi merchants, since Shopify Payments' native support varies by region."
  },
  {
    "question": "Will adding a lot of apps slow down my store?",
    "answer": "It can, every app adds some load, and an overloaded app stack is one of the most common reasons Shopify stores slow down. We choose apps deliberately and build custom functionality directly where it keeps the store faster."
  },
  {
    "question": "Can you customize the checkout experience?",
    "answer": "Within what Shopify's plan allows, yes, checkout customization options depend on your Shopify plan tier, which we'll review with you during consultation."
  },
  {
    "question": "Do you work with merchants outside Bangladesh?",
    "answer": "Yes, we build Shopify stores for merchants across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
