import { SectionIntro } from '../../../Kinetic'

const formats = [
  {
    title: 'In-Feed Ads',
    body: 'In-Feed Ads appear within the TikTok content experience and are suitable for awareness, traffic, lead generation, sales, and other campaign goals depending on the available setup. We build creative specifically for the feed rather than treating TikTok as another display advertising placement.',
  },
  {
    title: 'Spark Ads',
    body: 'Spark Ads let brands promote eligible organic TikTok posts or creator content as paid advertising. They can be useful when an existing post already provides a strong creative foundation.',
  },
  {
    title: 'Catalog Ads',
    body: 'Catalog Ads use product information to support ecommerce and app-related advertising workflows. We can help structure product feeds, product sets, events, creative variations, and retargeting campaigns around the available catalog setup.',
  },
  {
    title: 'Smart+ Campaigns',
    body: 'Smart+ uses TikTok\u2019s automation capabilities to streamline campaign setup and optimize delivery. We evaluate Smart+ based on the campaign objective, conversion data, creative assets, market, and level of control required rather than treating automation as a universal solution.',
  },
  {
    title: 'Lead Generation Ads',
    body: 'Lead campaigns can help businesses collect prospect information directly through TikTok or drive prospects toward an appropriate conversion destination. We focus on both lead volume and lead quality, including the handoff from advertising to sales.',
  },
  {
    title: 'Sales Campaigns',
    body: 'Sales campaigns are designed to drive measurable purchase actions through supported destinations such as websites, apps, or eligible TikTok Shop setups. TikTok\u2019s current Sales objective covers website, app, website-and-app, and eligible TikTok Shop destinations, with availability depending on the account and market.',
  },
  {
    title: 'TikTok Shop Ads Where Available',
    body: 'For eligible TikTok Shop markets, TikTok currently supports Shop Ads formats including Video Shopping Ads, LIVE Shopping Ads, and Product Shopping Ads. TikTok states that GMV Max became the default and only supported campaign type for TikTok Shop Ads from July 2025. We manage Shop advertising only where the feature and account eligibility support it.',
  },
]

export default function Formats() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Campaign types"
          title="TikTok Ad Formats and Campaign Types We Manage"
        >
          We choose the format around the campaign objective, the audience, and the available
          account and market setup rather than forcing every campaign into one template.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {formats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Format 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}