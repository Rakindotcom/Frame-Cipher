import { SectionIntro } from '../../../Kinetic'

const factors = [
  'Advertising',
  'Product listings',
  'Search intent',
  'Pricing',
  'Reviews',
  'Featured Offer eligibility',
  'Inventory',
  'Conversion rate',
  'Product margins',
  'Total sales',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="The model" title="Amazon Ads Management Built Around Products, Profitability, and Marketplace Performance">
          Amazon advertising is not simply about generating clicks.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          A campaign can attract relevant shoppers and still struggle when the product page is weak,
          the price is uncompetitive, inventory is limited, or the product does not convert against
          competing offers.
        </p>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            That is why we look at the relationship between
          </p>
          <div className="flex flex-wrap gap-3">
            {factors.map((factor) => (
              <span
                key={factor}
                className="border border-frame-border px-4 py-2 text-sm font-bold uppercase tracking-wider text-frame-fg"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-frame-accent">
            What Amazon itself points to
          </p>
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Amazon highlights factors such as product detail page quality, inventory, pricing, and
            Featured Offer eligibility when preparing products for advertising. We use those signals
            to make better advertising decisions instead of managing ACOS in isolation.
          </p>
        </div>
      </div>
    </section>
  )
}