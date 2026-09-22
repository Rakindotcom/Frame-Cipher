import { SectionIntro } from '../../../Kinetic'

const rows = [
  {
    factor: 'Search ecosystem',
    ms: 'Bing plus Microsoft search partnerships',
    g: 'Google plus its search and partner ecosystem',
  },
  {
    factor: 'Search volume',
    ms: 'Often smaller in many markets',
    g: 'Generally broader search demand',
  },
  {
    factor: 'LinkedIn Profile Targeting',
    ms: 'Available through Microsoft Advertising',
    g: 'No direct equivalent within Google Search',
  },
  {
    factor: 'Shopping',
    ms: 'Available',
    g: 'Available',
  },
  {
    factor: 'Audience advertising',
    ms: 'Available across Microsoft properties and partner inventory',
    g: 'Broad Google audience ecosystem',
  },
  {
    factor: 'Automation',
    ms: 'Performance Max and other automated solutions',
    g: 'Performance Max and other automated solutions',
  },
  {
    factor: 'Best role',
    ms: 'Incremental search, audience, and retail reach',
    g: 'Broad search and acquisition coverage',
  },
  {
    factor: 'Strategy',
    ms: 'Can complement Google',
    g: 'Often serves as the main search platform',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Side by side" title="Microsoft Ads vs Google Ads">
          Microsoft Ads and Google Ads can complement each other, but they are not identical.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-frame-border">
                <th className="p-5 text-sm font-bold uppercase tracking-widest text-frame-fg">
                  Factor
                </th>
                <th className="p-5 text-sm font-bold uppercase tracking-widest text-frame-accent">
                  Microsoft Ads
                </th>
                <th className="p-5 text-sm font-bold uppercase tracking-widest text-frame-fg">
                  Google Ads
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.factor}
                  className={
                    index % 2 === 0
                      ? 'border-b border-frame-border bg-frame-muted/10'
                      : 'border-b border-frame-border bg-frame-bg'
                  }
                >
                  <td className="p-5 text-sm font-bold text-frame-fg">{row.factor}</td>
                  <td className="p-5 text-sm font-medium text-frame-muted-fg">{row.ms}</td>
                  <td className="p-5 text-sm font-medium text-frame-muted-fg">{row.g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          The right approach depends on the market, audience, search demand, budget, offer, and
          existing acquisition strategy. For many businesses, the platforms can work together rather
          than being treated as mutually exclusive.
        </p>
      </div>
    </section>
  )
}