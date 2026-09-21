import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is ecommerce SEO?',
    answer: 'Ecommerce SEO is the process of improving an online store\u2019s visibility in search engines like Google. It involves optimizing product pages, category pages, site architecture, technical SEO, content, and other factors so qualified shoppers can find the store through organic search.',
  },
  {
    question: 'How is ecommerce SEO different from regular SEO?',
    answer: 'Ecommerce SEO focuses on products, categories, search intent, technical complexity, catalogs, pricing, availability, and the storefront experience. A typical business website has a limited number of pages, while a store may have thousands of URLs, including variants, filters, and product combinations. The strategy therefore has to consider scale, crawlability, and buyer behavior at the same time.',
  },
  {
    question: 'Do you optimize every product page?',
    answer: 'Not every product page automatically receives the same level of work. We prioritize pages based on search opportunity, business value, and catalog size. Smaller stores may receive more comprehensive product-level work, while larger catalogs usually rely on scalable templates and optimized priority products.',
  },
  {
    question: 'Can you fix duplicate content on Shopify or WooCommerce?',
    answer: 'Duplicate product content is common in ecommerce because variants, filters, URLs, and product data can create multiple versions of similar pages. We address these issues with methods such as canonicalization, improved URL structures, and cleaner indexation controls, adapted to what each platform allows.',
  },
  {
    question: 'Does product schema guarantee rich results?',
    answer: 'No. Structured data makes a page eligible for enhanced search results, but Google decides whether and how to display them. Implementation errors can also prevent eligibility, so we validate and monitor the schema we install. Proper installation increases eligibility but does not force Google to show a rich result.',
  },
  {
    question: 'Do you provide SEO for Shopify and WooCommerce stores?',
    answer: 'Yes. We work with Shopify, WooCommerce, and custom ecommerce platforms. The strategy is adapted to each platform\u2019s structure and limitations. What matters is how well the store\u2019s structure, content, and technical setup support search visibility.',
  },
  {
    question: 'Can you handle a large ecommerce catalog?',
    answer: 'Yes. Large catalogs require a scalable approach: architecture, crawl efficiency, indexation controls, templated optimization, internal linking, and prioritization based on search opportunity and business value. We apply this approach instead of treating every product as a separate project.',
  },
  {
    question: 'How long does ecommerce SEO take to show results?',
    answer: 'Technical fixes can be completed relatively quickly, but rankings, traffic, and revenue usually build over time. The timeline depends on your catalog size, technical condition, competition, authority, content quality, and implementation speed. Most engagements are designed as ongoing work because ecommerce stores change constantly.',
  },
  {
    question: 'Do you provide ecommerce SEO outside Bangladesh?',
    answer: 'Yes. We support ecommerce businesses targeting Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. For each market, we adapt the strategy around country-specific search intent and international SEO requirements.',
  },
  {
    question: 'Can you guarantee more ecommerce sales through SEO?',
    answer: 'We cannot guarantee a specific number of sales or a specific revenue figure, because many factors outside SEO influence purchases, including product quality, pricing, demand, seasonality, availability, and the shopping experience. What we can do is plan, implement, and measure an SEO strategy focused on the search terms, pages, and technical improvements most likely to support qualified traffic and conversions.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about ecommerce SEO, platform coverage, timelines, and what we can and
          can&apos;t guarantee.
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