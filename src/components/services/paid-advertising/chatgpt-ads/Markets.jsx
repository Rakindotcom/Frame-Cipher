import { SectionIntro } from '../../../Kinetic'

const markets = [
  {
    eyebrow: 'Market reality',
    title: 'Advertising From Bangladesh',
    body: [
      'OpenAI Ads Manager is not yet available directly in Bangladesh. OpenAI\u2019s eligibility requirements are evaluated against the Advertiser Account or Advertiser Representative, combined with address and government ID requirements, so the standard self-service setup cannot yet support advertising based in Bangladesh.',
      'Some Bangladeshi businesses can still run ChatGPT Ads in specific supported cases, for example where they have access to an advertiser account that meets OpenAI\u2019s eligibility criteria, such as a business in an eligible country or an advertiser representative arrangement. In those situations, we help organize campaigns, targeting, and tracking around the specific eligible setup.',
    ],
  },
  {
    eyebrow: 'Eligible regions',
    title: 'International Campaigns',
    body: [
      'OpenAI\u2019s self-service Ads Manager currently supports advertiser sign-up in a specific set of countries that includes the US, UK, Canada, Australia, India, Saudi Arabia, and the UAE. Eligibility is evaluated per advertiser, and the exact requirements depend on OpenAI\u2019s current policies.',
      'We can plan and manage ChatGPT Advertising campaigns targeting international audiences where the advertiser setup is eligible. Campaign settings, location targeting, ad-group structure, ad copy, and creative are all developed to reach the audience in the target market.',
    ],
  },
  {
    eyebrow: 'Global delivery',
    title: 'Multi-Market Campaign Management',
    body: [
      'For advertisers operating across several eligible markets, we structure campaigns around market-level differences in language, offer, competition, and conversion expectations rather than running a single generic campaign everywhere.',
      'Multi-market reporting separates performance by market so budgets and creative can be adjusted with evidence instead of assumption.',
    ],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="ChatGPT Ads for Bangladesh & Global Markets"
        >
          ChatGPT Ads management from Bangladesh to eligible international markets requires
          understanding both how the platform is set up and where it can currently be used.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {markets.map((area, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                {area.eyebrow}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {area.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {area.body.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Before committing to ChatGPT Ads, we confirm whether the advertiser setup and target
            market are currently eligible. Everything else, campaign structure, creative,
            tracking, and testing, is planned around that confirmed setup so you are not paying
            for a channel you cannot actually use.
          </p>
        </div>
      </div>
    </section>
  )
}