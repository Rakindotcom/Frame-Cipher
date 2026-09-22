import { SectionIntro } from '../../../Kinetic'

const contributingChannels = [
  {
    title: 'Google Ads to Amazon',
    body: 'Where appropriate, we can coordinate Google campaigns that send relevant traffic to Amazon listings and use attribution measurement to understand the downstream effect.',
  },
  {
    title: 'Meta Ads to Amazon',
    body: 'Meta campaigns can also contribute to Amazon product discovery and sales. We can align product messaging and audience strategy across Meta and Amazon rather than treating the channels as completely separate.',
  },
  {
    title: 'External Traffic',
    body: 'Other external sources can be evaluated where Amazon Attribution is available for the relevant marketplace and campaign setup.',
  },
]

const reportingQuestions = [
  'Which channel drives Amazon sales?',
  'Which products respond to external traffic?',
  'What happens after a shopper clicks?',
  'Which audiences assist Amazon purchases?',
  'How does external media compare with Amazon-native advertising?',
]

export default function Attribution() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Measurement" title="Amazon Attribution & Cross-Channel Measurement">
          Amazon sales do not always begin with an Amazon ad.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Customers may discover a product through Google, Meta, social content, email, influencers,
          or other external channels before purchasing on Amazon. Amazon Attribution provides
          measurement for marketing channels outside Amazon and can help advertisers understand how
          external campaigns influence Amazon shopping activity and sales.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {contributingChannels.map((channel) => (
            <div
              key={channel.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {channel.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {channel.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Cross-Channel Reporting
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We bring available Amazon and external campaign data into a broader acquisition view.
            This helps answer questions such as:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {reportingQuestions.map((question) => (
              <li key={question} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}