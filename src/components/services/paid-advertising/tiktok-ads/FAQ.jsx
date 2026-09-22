import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is a TikTok Ads Management Service?',
    answer: 'A TikTok Ads Management Service handles the strategy, setup, creative coordination, targeting, tracking, optimization, and reporting required to run paid advertising campaigns on TikTok. Framecipher manages these activities around business objectives such as sales, leads, website conversions, app growth, and customer acquisition.',
  },
  {
    question: 'How much does TikTok Ads management cost?',
    answer: 'Framecipher\u2019s TikTok Ads management starts at \u09F330,000 per month for standard campaign management. The final fee depends on creative volume, campaign complexity, creator requirements, ecommerce setup, number of markets, and reporting needs. Ad spend is separate from the management fee.',
  },
  {
    question: 'Do I need TikTok videos before starting ads?',
    answer: 'Not necessarily. We can work with existing content, develop new native-style concepts, coordinate UGC, or plan creator content depending on your campaign requirements. However, having enough creative variation is important for structured testing.',
  },
  {
    question: 'Do you provide UGC and creator content?',
    answer: 'Yes. We can support UGC planning, creator briefing, content requirements, usage-rights coordination, and Spark Ads setup. Creator selection is based on campaign relevance and content quality rather than follower count alone.',
  },
  {
    question: 'What are Spark Ads?',
    answer: 'Spark Ads allow eligible organic TikTok posts or creator content to be used in paid advertising while retaining the original post identity and associated engagement elements. We use them when existing organic or creator content provides a strong foundation for paid distribution.',
  },
  {
    question: 'Do you manage Smart+ campaigns?',
    answer: 'Yes. We can manage Smart+ campaigns where they are appropriate for the campaign objective and account. TikTok currently provides Smart+ solutions across several performance objectives and allows certain campaign settings to be controlled manually depending on the campaign and account.',
  },
  {
    question: 'Can you manage TikTok Shop Ads?',
    answer: 'Yes, where TikTok Shop and the relevant advertising features are available for the client\u2019s market and account. TikTok Shop is currently limited to selected markets, so we verify eligibility before including Shop-specific services in a campaign plan.',
  },
  {
    question: 'Can Bangladesh businesses run TikTok Ads?',
    answer: 'TikTok advertising availability and specific campaign features depend on the account, registration market, targeting options, and current platform availability. We verify the available advertising setup before launching a Bangladesh campaign rather than assuming every TikTok feature is available locally.',
  },
  {
    question: 'Do you manage TikTok Ads outside Bangladesh?',
    answer: 'Yes. Framecipher works with businesses targeting markets including the US, UK, Australia, Canada, UAE, and other eligible markets. Campaign structure, creative, audience strategy, and measurement are adapted to the target market.',
  },
  {
    question: 'Do you set up the TikTok Pixel and Events API?',
    answer: 'Yes. We can configure TikTok Pixel, Events API, events, parameters, and related measurement requirements. Where appropriate, Pixel and Events API can be used together to improve the reliability of data shared with TikTok.',
  },
  {
    question: 'How long does it take to launch a TikTok Ads campaign?',
    answer: 'Most initial setups take around one to two weeks, depending on tracking, creative production, account access, website or app requirements, and approval time. More complex creator, ecommerce, or multi-market campaigns may require additional preparation.',
  },
  {
    question: 'Do you guarantee TikTok Ads results?',
    answer: 'No agency can reliably guarantee a specific ROAS, CPA, conversion rate, or viral outcome. We instead commit to proper setup, structured testing, transparent reporting, and ongoing optimization based on campaign data.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions"
        >
          Common questions about TikTok Ads management, Spark Ads, Smart+, UGC and creator
          content, TikTok Shop, Pixel and Events API, pricing, and market eligibility.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}