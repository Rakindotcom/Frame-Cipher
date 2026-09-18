const faqs = [
  {
    question: 'Should I choose Shopify, WooCommerce, or Magento for my store?',
    answer: 'Shopify is ideal for merchants seeking managed cloud infrastructure, 99.99% uptime, minimal technical overhead, and a battle-tested checkout. WooCommerce suits content-heavy sites already operating on WordPress, while Magento excels for complex catalogs exceeding 100,000 SKUs or enterprise B2B distributors. We evaluate your business requirements before recommending a platform.',
  },
  {
    question: 'Can I use local payment gateways like bKash and Nagad on Shopify?',
    answer: 'Yes. Because native Shopify Payments is currently unavailable for businesses registered in Bangladesh, Bangladesh-based merchants integrate approved third-party payment gateways (such as SSLCommerz, Shurjopay, or direct gateway partners) to accept bKash, Nagad, and local cards smoothly.',
  },
  {
    question: 'Will adding lots of third-party apps slow down my Shopify store?',
    answer: 'Yes, app bloat is the primary cause of slow Shopify stores. Every unvetted app injects third-party JavaScript that hinders Core Web Vitals. We practice disciplined app architecture, custom-coding features into native Liquid and Online Store 2.0 sections wherever possible.',
  },
  {
    question: 'Can you customize the Shopify checkout experience?',
    answer: 'Yes. On standard Shopify plans, we brand and style the checkout within Shopify’s supported settings. For enterprise merchants on Shopify Plus, we build custom checkout UI extensions, order validation rules, and custom payment options.',
  },
  {
    question: 'What is Shopify Online Store 2.0?',
    answer: 'Online Store 2.0 is Shopify’s modern theme architecture built on modular JSON templates, reusable sections, blocks, and app extensions. It allows merchants to customize layouts, content, and metafields across every page through the visual theme editor without touching code.',
  },
  {
    question: 'Do I need Shopify Plus for my business?',
    answer: 'Not necessarily. Standard Shopify plans easily handle high-volume sales for most growing brands. We recommend Shopify Plus only when you specifically require native wholesale B2B company accounts, multi-store expansion stores, custom checkout scripts/extensions, or custom API limits.',
  },
  {
    question: 'Can you build a wholesale or B2B Shopify store?',
    answer: 'Yes. We build wholesale portals with gated customer accounts, customer-specific pricing lists, volume discount rules, draft orders, and corporate payment terms (Net 30/60).',
  },
  {
    question: 'Can you migrate our existing store from WooCommerce or Magento to Shopify?',
    answer: 'Yes. We extract and migrate products, variants, customer records, and order history while meticulously mapping 301 URL redirects to safeguard your current Google search rankings.',
  },
  {
    question: 'Can you build custom private Shopify apps?',
    answer: 'Yes. When standard App Store plugins cannot fulfill unique operational workflows, we engineer custom private apps leveraging Shopify Admin, Storefront, and Functions APIs.',
  },
  {
    question: 'Can Shopify support multiple currencies and international languages?',
    answer: 'Yes. Through Shopify Markets, we configure localized storefronts with country-specific currencies, local payment methods, automated domain subdirectories, and translated content.',
  },
  {
    question: 'Do you work with merchants outside Bangladesh?',
    answer: 'Yes. We engineer and optimize Shopify storefronts for brands in Bangladesh as well as international retailers in the US, UK, Australia, Canada, and the UAE.',
  },
  {
    question: 'Can I manage and update the store myself after launch?',
    answer: 'Yes. Shopify is built for self-management. We provide full store owner transfer and customized video tutorials so your team can effortlessly add products, adjust banners, and manage orders.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Key questions regarding Shopify store development, Online Store 2.0, app stacks, and payments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none">
                <span className="pr-4">{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

