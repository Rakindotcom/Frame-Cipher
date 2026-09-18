import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: "What is included in an ecommerce website development project?",
    answer: "A typical project can include store strategy, catalog architecture, product and UI/UX design, platform development, payment integration, inventory and order setup, technical SEO foundations, testing, launch support, and agreed third-party integrations."
  },
  {
    question: "Do you support bKash and Nagad?",
    answer: "Yes, supported local payment methods such as bKash and Nagad can be integrated for suitable Bangladesh-based ecommerce projects. Final compatibility depends on the selected platform and payment provider."
  },
  {
    question: "Can you integrate courier services?",
    answer: "Courier integration can be included where the selected courier provides a compatible integration method or API. We confirm the available workflow before development begins."
  },
  {
    question: "Can you integrate SSLCommerz and international payment gateways?",
    answer: "Yes, where supported by your ecommerce platform and target market. We recommend payment methods based on your business location, customer market, currency, and checkout requirements."
  },
  {
    question: "Which ecommerce platform is best for my business?",
    answer: "It depends on your catalog, budget, content needs, integrations, internal management requirements, and future plans. Shopify, WooCommerce, Magento, and custom development each suit different types of ecommerce businesses."
  },
  {
    question: "Can you migrate my existing ecommerce store?",
    answer: "Yes, store migration can be scoped for supported platforms. This may include products, categories, customers, orders, content, URLs, redirects, and other relevant data depending on the source and destination platforms."
  },
  {
    question: "Can I manage products and orders myself?",
    answer: "Yes, supported ecommerce platforms provide admin tools for managing products, inventory, orders, customers, and store content. We can provide agreed handover guidance after launch."
  },
  {
    question: "Can you build a B2B ecommerce website?",
    answer: "Yes. B2B projects may require features such as account-based pricing, bulk ordering, quote requests, approval workflows, customer-specific catalogs, or custom purchasing processes."
  },
  {
    question: "Can you build a multi-vendor marketplace?",
    answer: "Multi-vendor functionality can be developed when the project requires seller accounts, vendor management, commissions, product approvals, and marketplace workflows. These requirements are scoped separately from a standard online store."
  },
  {
    question: "Will my ecommerce website be SEO-ready?",
    answer: "We build core technical and structural SEO foundations into the development process, including product architecture, metadata, schema, URLs, mobile usability, sitemap considerations, and other agreed elements. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    question: "Can you connect my store with Google Merchant Center?",
    answer: "Where supported by the ecommerce platform and product catalog, we can prepare product feeds and related technical setup for Google Merchant Center as part of the project scope."
  },
  {
    question: "Who owns the ecommerce website after delivery?",
    answer: "Ownership, administrator access, source files, platform access, and handover terms are defined in the project agreement. We provide the agreed deliverables and access described in that agreement."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs
  if (!faqList?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about ecommerce platforms, payment gateways, courier integrations, and project delivery.
        </SectionIntro>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
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

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 text-center">
          <p className="text-sm font-medium text-frame-muted-fg">
            Have a question about gateway fees, inventory sync, or platform choice?{' '}
            <Link href="/contact" className="font-bold text-frame-accent underline hover:text-frame-fg">
              Talk directly with our ecommerce specialists &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
