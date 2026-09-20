import { SectionIntro, PosterButton } from '../../Kinetic'

const pricingTable = {
  headers: ['Plan', 'Starting Price', "What's Covered", 'Best For'],
  rows: [
    ['Essential', '৳25,000/month', 'On-page SEO, basic technical fixes, keyword research, monthly reporting', 'Small businesses and single-location websites'],
    ['Growth', '৳45,000/month', 'Technical SEO, content strategy, on-page SEO, link building, local SEO', 'Growing businesses and larger websites'],
    ['Ecommerce / Advanced', '৳75,000/month', 'Ecommerce SEO, advanced technical work, content strategy, authority building, AI search optimization', 'Online stores and competitive industries'],
    ['Enterprise / International', 'Custom Quote', 'Multi-market strategy, advanced technical SEO, international SEO, dedicated reporting, specialized recovery work where required', 'Large or international websites'],
  ],
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="SEO Pricing in Bangladesh"
        >
          SEO pricing depends on website size, technical condition, competition, target market,
          content requirements, authority-building needs, and the level of ongoing support
          required. Our starting reference plans can be structured around the scope below:
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
              <tr>
                {pricingTable.headers.map((header, i) => (
                  <th key={i} className={`p-4 ${i < pricingTable.headers.length - 1 ? 'border-r-2 border-frame-border' : ''}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border">
              {pricingTable.rows.map((row, rIdx) => (
                <tr key={rIdx} className="align-top transition-colors hover:bg-frame-muted/20">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-4 md:p-6 ${
                        cIdx < row.length - 1 ? 'border-r-2 border-frame-border' : ''
                      } ${
                        cIdx === 0
                          ? 'font-bold text-frame-fg'
                          : cIdx === 1
                          ? 'font-bold text-frame-accent whitespace-nowrap'
                          : 'font-medium text-frame-muted-fg'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col gap-8 border-t-2 border-frame-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              These are starting reference points rather than fixed packages for every business.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg">
              Final pricing is based on the actual scope identified during the audit and consultation.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}