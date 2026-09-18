const faqs = [
  {
    question: 'What is included in an ecommerce website development project?',
    answer: 'A typical project includes store strategy, catalog architecture, product and UI/UX design, platform development, payment integration, inventory and order setup, technical SEO foundations, testing, launch support, and agreed third-party integrations.',
  },
  {
    question: 'Do you support bKash and Nagad?',
    answer: 'Yes, supported local payment methods such as bKash and Nagad can be integrated for suitable Bangladesh-based ecommerce projects. Final compatibility depends on the selected platform and payment provider.',
  },
  {
    question: 'Can you integrate courier services?',
    answer: 'Courier integration can be included where the selected courier provides a compatible integration method or API (such as Pathao, Steadfast, RedX). We confirm the available workflow before development begins.',
  },
  {
    question: 'Can you integrate SSLCommerz and international payment gateways?',
    answer: 'Yes, where supported by your ecommerce platform and target market. We recommend payment methods based on your business location, customer market, currency, and checkout requirements.',
  },
  {
    question: 'Which ecommerce platform is best for my business?',
    answer: 'It depends on your catalog, budget, content needs, integrations, internal management requirements, and future plans. Shopify, WooCommerce, Magento, and custom development each suit different types of ecommerce businesses.',
  },
  {
    question: 'Can you migrate my existing ecommerce store?',
    answer: 'Yes, store migration can be scoped for supported platforms. This may include products, categories, customers, orders, content, URLs, redirects, and other relevant data depending on the source and destination platforms.',
  },
  {
    question: 'Can I manage products and orders myself?',
    answer: 'Yes, supported ecommerce platforms provide admin tools for managing products, inventory, orders, customers, and store content. We provide agreed handover guidance and training after launch.',
  },
  {
    question: 'Can you build a B2B ecommerce website?',
    answer: 'Yes. B2B projects may require features such as account-based pricing, bulk ordering, quote requests, approval workflows, customer-specific catalogs, or custom purchasing processes.',
  },
  {
    question: 'Can you build a multi-vendor marketplace?',
    answer: 'Multi-vendor functionality can be developed when the project requires seller accounts, vendor management, commissions, product approvals, and marketplace workflows. These requirements are scoped separately from a standard online store.',
  },
  {
    question: 'Will my ecommerce website be SEO-ready?',
    answer: 'We build core technical and structural SEO foundations into the development process, including product architecture, metadata, schema, URLs, mobile usability, sitemap considerations, and other agreed elements.',
  },
  {
    question: 'Can you connect my store with Google Merchant Center?',
    answer: 'Where supported by the ecommerce platform and product catalog, we can prepare product feeds and related technical setup for Google Merchant Center as part of the project scope.',
  },
  {
    question: 'Who owns the ecommerce website after delivery?',
    answer: 'Ownership, administrator access, source files, platform access, and handover terms are defined in the project agreement. We provide the agreed deliverables and full access described in that agreement.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers / Clarity
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Answers to common questions about store platforms, payment gateways, courier integrations, and project deliverables.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <h3 className="pr-4">{faq.question}</h3>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-mono text-xl">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
