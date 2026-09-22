import { SectionIntro } from '../../../Kinetic'

const rows = [
  {
    factor: 'Creative environment',
    tiktok: 'Short-form, discovery-led content',
    meta: 'Broad social and visual advertising ecosystem',
  },
  {
    factor: 'Creative testing',
    tiktok: 'Strong emphasis on native video variations',
    meta: 'Broad mix of video, image, carousel and other formats',
  },
  {
    factor: 'Creator content',
    tiktok: 'Strong Spark Ads use case',
    meta: 'Strong UGC and creator ecosystem',
  },
  {
    factor: 'Audience strategy',
    tiktok: 'Broad, interest, behavior, custom and automated approaches',
    meta: 'Broad, interest, custom, lookalike and automated approaches',
  },
  {
    factor: 'Ecommerce',
    tiktok: 'Strong where supported and configured correctly',
    meta: 'Mature ecommerce advertising ecosystem',
  },
  {
    factor: 'Search intent',
    tiktok: 'More limited than search advertising',
    meta: 'More social-discovery focused',
  },
  {
    factor: 'Best fit',
    tiktok: 'Creative-led discovery and performance campaigns',
    meta: 'Broad social acquisition, remarketing and conversion campaigns',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Head to head"
          title="TikTok Ads vs Meta Ads"
        >
          TikTok and Meta can both support paid social campaigns, but they are not identical
          advertising environments.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-frame-border">
                <th className="bg-frame-muted/10 p-5 text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Factor
                </th>
                <th className="bg-frame-muted/10 p-5 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  TikTok Ads
                </th>
                <th className="bg-frame-muted/10 p-5 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Meta Ads
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.factor} className="border-b border-frame-border/60 last:border-b-0">
                  <th scope="row" className="p-5 text-xs md:text-sm font-black uppercase text-frame-fg">
                    {row.factor}
                  </th>
                  <td className="p-5 align-top text-xs md:text-sm font-medium leading-relaxed text-frame-fg/90">
                    {row.tiktok}
                  </td>
                  <td className="p-5 align-top text-xs md:text-sm font-medium leading-relaxed text-frame-fg/90">
                    {row.meta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            The right choice depends on your audience, offer, creative resources, funnel, market,
            and business objective. Framecipher can also manage TikTok and Meta together when a
            multi-channel paid strategy makes sense.
          </p>
        </div>
      </div>
    </section>
  )
}