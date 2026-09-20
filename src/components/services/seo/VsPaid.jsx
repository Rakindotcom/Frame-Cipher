import { SectionIntro } from '../../Kinetic'

const comparisonRows = [
  {
    seo: 'Builds organic search visibility',
    paid: 'Buys advertising placement',
  },
  {
    seo: 'Requires ongoing optimization',
    paid: 'Can generate visibility soon after launch',
  },
  {
    seo: 'No charge for each organic click',
    paid: 'Usually involves pay-per-click costs',
  },
  {
    seo: 'Results develop over time',
    paid: 'Results depend on active campaign spend',
  },
  {
    seo: 'Content and website improvements can compound',
    paid: 'Traffic generally stops when campaigns stop',
  },
  {
    seo: 'Supports ongoing search discovery',
    paid: 'Useful for time-sensitive campaigns and immediate demand',
  },
]

export default function VsPaid() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Choosing the right channel"
          title="SEO vs Paid Search: What's the Difference?"
        >
          SEO and paid search use different approaches to gaining visibility and can also support
          one another.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
              <tr>
                <th className="p-4 border-r-2 border-frame-border w-1/2">SEO</th>
                <th className="p-4 w-1/2">Paid Search</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
              {comparisonRows.map((row, rIdx) => (
                <tr key={rIdx} className="align-top transition-colors hover:bg-frame-muted/20">
                  <td className="p-4 border-r-2 border-frame-border font-medium text-frame-fg">
                    {row.seo}
                  </td>
                  <td className="p-4 font-medium text-frame-accent">
                    {row.paid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The appropriate mix depends on your goals, timeline, budget, competition, and
              customer journey.
            </p>
          </div>
          <div className="border-l-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Some businesses use SEO as a long-term search foundation while paid search supports
              launches, promotions, or specific commercial campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}