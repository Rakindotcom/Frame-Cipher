import { SectionIntro, PosterButton } from '../../../Kinetic'

const rows = [
  { type: 'Product Description', purpose: 'Explain and sell one specific product', highlight: true },
  { type: 'Category Page Content', purpose: 'Help shoppers understand and navigate a product group' },
  { type: 'Landing Page Copy', purpose: 'Support a specific campaign or conversion goal' },
  { type: 'SEO Blog Content', purpose: 'Capture informational or commercial search demand' },
  { type: 'Sales Copy', purpose: 'Build a persuasive argument across different formats' },
  { type: 'Product Listing Copy', purpose: 'Present product information within a marketplace’s format' },
]

const related = [
  { label: 'Website Content Writing', href: '/services/content-writing/website-content' },
  { label: 'SEO & Blog Writing', href: '/services/content-writing/seo-blog-writing' },
  { label: 'Sales Copywriting', href: '/services/content-writing/sales-copywriting' },
]

export default function VsOtherContent() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Comparison"
          title="Product Description Writing vs Other Ecommerce Content"
        >
          Ecommerce brands need several different types of content. Each one is written for a different reader
          and a different moment in the buying process.
        </SectionIntro>

        <div className="border border-white/[0.08]">
          <div className="hidden grid-cols-2 gap-px border-b border-white/[0.08] bg-frame-border md:grid">
            <span className="bg-[#121214]/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#FAFAFA]">
              Content Type
            </span>
            <span className="bg-[#121214]/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#FAFAFA]">
              Primary Purpose
            </span>
          </div>

          <div className="grid gap-px bg-frame-border">
            {rows.map((row) => (
              <div
                key={row.type}
                className={
                  row.highlight
                    ? 'grid gap-1 bg-[#A855F7]/10 p-5 md:grid-cols-2 md:gap-4'
                    : 'grid gap-1 bg-[#09090B] p-5 md:grid-cols-2 md:gap-4'
                }
              >
                <span
                  className={
                    row.highlight
                      ? 'font-heading text-sm font-bold uppercase tracking-tight text-[#A855F7] md:text-base'
                      : 'font-heading text-sm font-bold uppercase tracking-tight text-[#FAFAFA] md:text-base'
                  }
                >
                  {row.type}
                </span>
                <span className="text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                  {row.purpose}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-base font-medium leading-relaxed text-[#A1A1AA] md:text-lg">
          Product Description Writing is focused on the individual product and the purchase decision around it.
        </p>

        <div className="mt-10 border-t border-white/[0.08] pt-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
            Related content services
          </span>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {related.map((item) => (
              <PosterButton key={item.href} href={item.href} variant="outline">
                {item.label}
              </PosterButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
