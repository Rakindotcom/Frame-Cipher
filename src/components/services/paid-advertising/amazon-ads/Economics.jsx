import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    title: 'ACOS',
    body: 'Advertising Cost of Sales (ACOS) compares advertising spend with advertising-attributed sales. Amazon defines ACOS as a metric used to evaluate advertising efficiency by comparing ad spend with ad revenue. ACOS is useful for campaign-level analysis, but it does not describe the entire economics of an Amazon business.',
  },
  {
    title: 'TACOS',
    body: 'Total Advertising Cost of Sales (TACOS) compares advertising spend with total sales, including sales not directly attributed to advertising. TACOS is commonly used as a broader business-analysis metric rather than a standalone Amazon advertising product metric. It can help businesses understand how dependent overall sales are on paid advertising.',
  },
  {
    title: 'Break-Even ACOS',
    body: 'A useful ACOS target depends on product economics. We consider product cost, Amazon fees, fulfillment costs, discounts, returns, contribution margin, customer value, and growth objectives. A product with a narrow margin should not automatically use the same ACOS target as a high-margin product.',
  },
  {
    title: 'Margin-Aware Optimization',
    body: 'Our goal is not to achieve the lowest possible ACOS. A lower ACOS can still be undesirable if it restricts profitable growth. A higher ACOS can sometimes be acceptable when the product economics and acquisition strategy justify it. We evaluate advertising efficiency alongside sales, margins, conversion rate, product-level economics, and business objectives.',
  },
]

export default function Economics() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Economics" title="ACOS, TACOS & Amazon Profitability">
          Amazon advertising should not be evaluated through one metric alone.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                  {block.title}
                </span>
                <div className="h-1.5 flex-1 bg-frame-accent" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-frame-accent">
            Review Your Amazon Advertising Economics
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We evaluate product-level economics, break-even ACOS, and realistic growth targets
            before deciding how much advertising to run.
          </p>
          <a
            href="#pricing"
            className="mt-6 inline-flex border-2 border-frame-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-bg"
          >
            Assess Your Amazon Profitability
          </a>
        </div>
      </div>
    </section>
  )
}