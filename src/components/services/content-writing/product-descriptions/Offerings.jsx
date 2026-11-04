import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Product & Buyer Research',
    body: [
      'We research the product, intended audience, use cases, and buying context before writing.',
    ],
    bullets: [
      'Product specifications and documentation',
      'Existing product pages',
      'Customer questions and reviews',
      'Competitor product listings',
      'Search behavior and product-related queries',
      'Target audience needs',
      'Product differentiators',
      'Common purchase objections',
    ],
    note: 'The goal is to understand what matters to the buyer before deciding what the copy should say.',
  },
  {
    number: '02',
    title: 'Feature-to-Benefit Copywriting',
    body: [
      'Specifications tell shoppers what a product has. Benefits explain why those specifications matter. We translate relevant features into clear buyer-facing benefits without inventing claims or overstating product capabilities.',
    ],
    example: {
      feature: 'Reinforced stitching',
      benefit: 'Built to provide additional support during regular use.',
    },
    note: 'The exact messaging depends on the verified product information and intended use.',
  },
  {
    number: '03',
    title: 'Product Titles, Summaries & Bullets',
    body: [
      'We can write and refine the key copy elements shoppers see while scanning a product page.',
    ],
    bullets: [
      'Product titles',
      'Short product summaries',
      'Key benefit bullets',
      'Feature highlights',
      'Detailed descriptions',
      'Specification introductions',
      'Use-case sections',
      'Care or usage copy',
      'CTA-supporting microcopy',
    ],
    note: 'The structure depends on the product, platform, and available information.',
  },
  {
    number: '04',
    title: 'SEO Product Copy',
    body: [
      'Product copy should be useful to shoppers first while also making the product page easier for search engines to understand.',
    ],
    bullets: [
      'Product-specific keyword research',
      'Search intent analysis',
      'Relevant long-tail queries',
      'Natural keyword integration',
      'SEO-friendly product titles',
      'Heading recommendations',
      'Meta title and meta description recommendations',
      'Internal-link recommendations',
      'Product-page content optimization',
      'Duplicate-content risk review',
    ],
    note: 'We avoid forcing keywords into copy where they make the description harder to read.',
  },
  {
    number: '05',
    title: 'Platform-Specific Product Listings',
    body: [
      'Product copy does not always work the same way across platforms. We adapt the structure and length to the publishing environment, including:',
    ],
    bullets: [
      'Shopify',
      'WooCommerce',
      'Custom ecommerce websites',
      'Amazon',
      'Daraz',
      'Etsy',
      'eBay',
      'Other marketplace listings',
    ],
    note: 'Platform requirements and content fields can change, so final formatting should follow the applicable requirements at the time of publishing.',
  },
  {
    number: '06',
    title: 'Variant & Bundle Descriptions',
    body: ['Products with multiple variants need consistency without unnecessary repetition. We can write or refine copy for:'],
    bullets: [
      'Size variants',
      'Color variants',
      'Model variants',
      'Material variations',
      'Product bundles',
      'Starter kits',
      'Multi-product packs',
      'Gift sets',
    ],
    note: 'Where variants share the same core product information, we keep common information consistent and emphasize the differences that actually matter. Google also provides product variant structured data guidance for helping search engines understand relationships between product variants.',
  },
  {
    number: '07',
    title: 'Bulk Catalog Writing',
    body: ['Large catalogs need a system rather than thousands of disconnected descriptions. For bulk projects, we can establish:'],
    bullets: [
      'Product-copy guidelines',
      'Category-specific structures',
      'Brand voice rules',
      'Required product fields',
      'Benefit-mapping rules',
      'Formatting standards',
      'Priority tiers',
      'Review procedures',
    ],
    note: 'We can then work through the catalog in agreed batches.',
  },
  {
    number: '08',
    title: 'Product Copy Refresh & Optimization',
    body: ['Existing product pages do not always need to be replaced from scratch. We can review older descriptions for:'],
    bullets: [
      'Generic or manufacturer-supplied copy',
      'Weak differentiation',
      'Missing buyer benefits',
      'Poor readability',
      'Outdated information',
      'Keyword overuse',
      'Missing product details',
      'Inconsistent brand voice',
      'Weak purchase messaging',
    ],
    note: 'Where useful, we recommend whether a page needs a full rewrite, targeted revision, or simple content update.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="What Our Product Description Writing Service Includes"
        >
          Product copy only works when it is written around verified product information and the actual buying
          decision. Each block below reflects part of that process.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {block.example && (
                  <div className="mt-5 grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
                    <div className="bg-[#121214] p-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                        Feature
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#FAFAFA]">
                        {block.example.feature}
                      </p>
                    </div>
                    <div className="bg-[#A855F7]/10 p-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                        Benefit
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#FAFAFA]">
                        {block.example.benefit}
                      </p>
                    </div>
                  </div>
                )}

                {block.bullets && (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                      >
                        <span aria-hidden="true" className="mt-1 text-[#A855F7]">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-[#A855F7]/40 bg-[#121214] p-3 text-xs font-medium leading-relaxed text-[#A1A1AA]">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
