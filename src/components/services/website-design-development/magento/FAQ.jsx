const faqs = [
  {
    question: 'How do I know if my business actually needs Magento instead of Shopify or WooCommerce?',
    answer: 'Magento is appropriate when your business needs to manage tens of thousands of SKUs, complex multi-attribute catalogs, customer-specific B2B contract pricing, multiple storefronts, or deep enterprise ERP integrations. For smaller or standard consumer catalogs, Shopify or WooCommerce often provides the required functionality with less overhead.',
  },
  {
    question: 'What is the difference between Magento Open Source and Adobe Commerce?',
    answer: 'Magento Open Source provides the complete core ecommerce platform for building custom stores with self-managed hosting. Adobe Commerce adds enterprise capabilities such as native B2B company accounts, shared catalogs, negotiable quotation workflows, visual merchandising, customer segmentation, and cloud-hosted options.',
  },
  {
    question: 'Can Magento handle B2B pricing and wholesale customer accounts?',
    answer: 'Yes. Depending on your edition and configuration, Magento supports company accounts with multiple buyers, tiered wholesale pricing, customer group catalog access, requisition lists, and automated quote-to-order workflows.',
  },
  {
    question: 'Can you migrate our existing Magento 1 or older store to Magento 2?',
    answer: 'Yes. We audit your existing database, custom extensions, and third-party integrations, safely migrating products, customers, order history, and media while preserving your search engine rankings through precise 301 URL redirects.',
  },
  {
    question: 'Do you develop with Hyvä Magento themes?',
    answer: 'Yes. Where appropriate, we develop using Hyvä Themes—the cutting-edge frontend framework built with Tailwind CSS and Alpine.js that replaces bulky Luma code, delivering sub-second speeds and stellar Core Web Vitals scores.',
  },
  {
    question: 'Can you build a headless Magento store?',
    answer: 'Yes. We can decouple Magento to serve purely as a high-performance commerce backend, powering custom Next.js, React, or Vue frontends via GraphQL APIs for ultra-fast, app-like user experiences.',
  },
  {
    question: 'Can you integrate Magento with ERP, CRM, or PIM systems?',
    answer: 'Yes. We integrate Magento with enterprise software including SAP, Oracle, Microsoft Dynamics, NetSuite, Akeneo, and custom inventory databases using secure REST and GraphQL API middleware.',
  },
  {
    question: 'Does Magento require specialized cloud hosting?',
    answer: 'Yes. Because Magento is an enterprise-scale application, it requires properly tuned cloud infrastructure with dedicated PHP-FPM, MySQL/MariaDB database tuning, Elasticsearch/OpenSearch for catalog queries, and Varnish cache for instant page rendering.',
  },
  {
    question: 'Can you integrate local payment options like bKash and Nagad?',
    answer: 'Yes. For Bangladesh merchants, we integrate verified local payment gateways (bKash, Nagad, SSLCommerz, Shurjopay) alongside international payment providers (Stripe, PayPal) for domestic and global transactions.',
  },
  {
    question: 'How long does a Magento development project take?',
    answer: 'A standard catalog build typically takes 6–8 weeks, while complex multi-store, B2B, or enterprise ERP integration projects range from 10 to 16+ weeks depending on technical specifications.',
  },
  {
    question: 'Do you work with merchants outside Bangladesh?',
    answer: 'Yes. We build and maintain Magento and Adobe Commerce stores for businesses across Bangladesh as well as international brands in the US, UK, Australia, Canada, and the UAE.',
  },
  {
    question: 'Do you provide ongoing Magento maintenance and security patching?',
    answer: 'Yes. We provide monthly maintenance retainers covering critical Adobe security patches, extension updates, performance optimization, and continuous feature development.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers / Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Technical and commercial answers about Magento 2, Adobe Commerce, Hyvä storefronts, and enterprise integrations.
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
                <span>{faq.question}</span>
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
