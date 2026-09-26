import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is Product Description Writing?',
    a: 'Product Description Writing is the process of creating product-page copy that explains what a product is, highlights relevant benefits and features, answers buyer questions, and supports the purchase decision.',
  },
  {
    q: 'Will you just rewrite our manufacturer’s description?',
    a: 'No. Manufacturer information can be used as a factual source, but we do not simply replace words with synonyms. We research the product and create original buyer-focused messaging around the verified information.',
  },
  {
    q: 'Does duplicate product content cause a Google penalty?',
    a: 'Not automatically. Similar product descriptions do not by themselves mean that Google will apply a penalty. The bigger concern is whether your product page offers enough useful, original, and relevant information to compete with other pages using similar source material.',
  },
  {
    q: 'Can you write product descriptions for a large ecommerce catalog?',
    a: 'Yes. For larger catalogs, we can establish a consistent content structure, prioritize important products, and deliver the work in agreed batches.',
  },
  {
    q: 'Do you write Amazon product descriptions?',
    a: 'Yes. We can write or adapt product listing copy for Amazon, subject to the platform’s current content requirements and the agreed project scope.',
  },
  {
    q: 'Can you write Shopify and WooCommerce product descriptions?',
    a: 'Yes. We write product copy for Shopify, WooCommerce, custom ecommerce websites, and other online stores.',
  },
  {
    q: 'Can you write product descriptions for Daraz?',
    a: 'Yes. We can adapt product copy for Daraz and other marketplaces based on their applicable listing structure and requirements.',
  },
  {
    q: 'Do you provide product title and bullet-point writing?',
    a: 'Yes. Product titles, short summaries, bullets, and other product-page copy can be included depending on the selected scope.',
  },
  {
    q: 'Can you optimize existing product descriptions?',
    a: 'Yes. We can review existing descriptions and recommend a full rewrite, targeted improvement, or content refresh based on their condition.',
  },
  {
    q: 'Do you provide SEO keyword research?',
    a: 'Yes, when SEO optimization is included in the project scope. Research can cover product-specific keywords, long-tail queries, and buyer search intent.',
  },
  {
    q: 'Do you write product descriptions in Bangla?',
    a: 'Yes. We can provide Bangla and Bangla-English product copy for businesses targeting Bangladeshi shoppers.',
  },
  {
    q: 'Do you need product samples?',
    a: 'Not always. Product samples can help for some physical products, but detailed specifications, documentation, images, and other reliable product information may be sufficient. If we cannot verify an important claim, we will ask for the required information rather than invent it.',
  },
  {
    q: 'How many words should a product description have?',
    a: 'There is no universal word count that works for every product. The appropriate length depends on product complexity, buyer awareness, price, purchase risk, platform requirements, and the amount of information needed to make a confident decision.',
  },
  {
    q: 'Can you write descriptions for product variants and bundles?',
    a: 'Yes. We can create variant-specific messaging where meaningful differences exist and write bundle descriptions around the combined use case.',
  },
  {
    q: 'Do you guarantee higher sales or rankings?',
    a: 'No. Product copy can support better product understanding, search visibility, and purchase decisions, but sales and rankings depend on many factors beyond copywriting alone.',
  },
  {
    q: 'Do you work with businesses outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions About Product Description Writing">
          Straight answers about scope, manufacturer copy, duplicate content, bulk catalogs, platforms, SEO,
          Bangla support, and product samples.
        </SectionIntro>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
