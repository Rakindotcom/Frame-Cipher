import { SectionIntro } from '../../../Kinetic'

const capabilities = [
  {
    title: 'Microsoft Search Network',
    body: 'Search campaigns can reach users searching through Bing and Microsoft\u2019s wider search partnerships. Actual reach varies by market and campaign settings, so we assess available search demand before recommending a dedicated budget.',
  },
  {
    title: 'LinkedIn Profile Targeting',
    body: 'Microsoft Advertising offers LinkedIn Profile Targeting that can use professional attributes such as company, industry, and job function. Microsoft has also expanded its professional targeting options to include Job Seniority for eligible campaigns. This can be particularly useful for B2B campaigns where professional audience signals add useful context to search and audience strategies.',
  },
  {
    title: 'Microsoft Audience Network',
    body: 'Microsoft also supports display and native advertising across properties such as MSN, Microsoft Edge, Outlook, and other Microsoft environments. Audience campaigns can use remarketing and additional audience signals where appropriate.',
  },
  {
    title: 'Microsoft Shopping',
    body: 'For ecommerce businesses, Microsoft Advertising can connect product catalogs with Shopping campaigns and related retail advertising workflows.',
  },
  {
    title: 'Performance Max and Search Automation',
    body: 'Microsoft Performance Max uses automation across Microsoft inventory to optimize toward business objectives. Microsoft also now offers AI Max for Search, which adds AI-powered capabilities such as search-term matching, text customization, and final URL expansion to eligible Search campaigns. We evaluate automation based on campaign objectives, conversion signals, available assets, and the amount of control the account requires.',
  },
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          eyebrow="The platform"
          title="What Makes Microsoft Ads Different From Google Ads?"
        >
          Microsoft Ads can complement Google Ads, but the two platforms should not be treated as
          identical.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Microsoft Advertising combines search inventory with audience, retail, display, and
          automated campaign solutions. Its search ecosystem includes Bing as well as partner
          distribution such as Yahoo and DuckDuckGo. Its broader advertising environment also
          includes Microsoft properties such as MSN, Outlook, and Microsoft Edge. The practical
          opportunity depends on the market, search volume, audience, campaign objective, and
          available conversion data.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}