import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is a Microsoft Ads Management Service?',
    answer: 'A Microsoft Ads Management Service covers the strategy, setup, targeting, tracking, optimization, and reporting required to run Microsoft Advertising campaigns. Framecipher manages Microsoft Search, Shopping, audience campaigns, LinkedIn Profile Targeting, remarketing, conversion tracking, and ongoing optimization around business goals.',
  },
  {
    question: 'Is Microsoft Ads worth running if we already use Google Ads?',
    answer: 'It can be, when Microsoft has meaningful search demand for your market and category. For some businesses, Microsoft Ads can provide incremental search reach and additional conversions alongside Google Ads. The opportunity depends on the target market, search volume, audience, budget, and business model.',
  },
  {
    question: 'Is Microsoft Ads the same as Bing Ads?',
    answer: 'Microsoft Ads is the broader advertising platform. Bing is one of the key search environments within Microsoft\u2019s advertising ecosystem, alongside partner distribution and other Microsoft advertising properties.',
  },
  {
    question: 'Do you manage Bing Ads?',
    answer: 'Yes. Microsoft Ads includes campaigns that reach users searching on Bing and Microsoft\u2019s wider search network.',
  },
  {
    question: 'Is LinkedIn Profile Targeting the same as LinkedIn Ads?',
    answer: 'No. LinkedIn Profile Targeting is a Microsoft Advertising capability that uses professional profile information such as company, industry, and job function to refine eligible Microsoft advertising campaigns. It is different from advertising directly inside the LinkedIn feed.',
  },
  {
    question: 'What LinkedIn targeting options are available?',
    answer: 'Depending on campaign type and market availability, Microsoft Advertising supports professional targeting signals such as company, industry, job function, and Job Seniority.',
  },
  {
    question: 'Can you import our Google Ads account?',
    answer: 'Yes. Microsoft Advertising provides an official Google Ads import workflow. We use it when appropriate, then review and adapt the imported campaigns before launch.',
  },
  {
    question: 'Do you provide Microsoft Shopping Ads management?',
    answer: 'Yes. We can manage Microsoft Shopping campaigns, product feeds, product-group structure, ecommerce tracking, performance monitoring, and ongoing optimization where the required features are available.',
  },
  {
    question: 'Do you manage Microsoft Audience Ads and remarketing?',
    answer: 'Yes. We can support audience campaigns, remarketing, audience exclusions, and other available audience strategies based on the campaign objective and account setup.',
  },
  {
    question: 'Do you manage Performance Max on Microsoft Ads?',
    answer: 'Yes. We can manage Performance Max campaigns where the campaign objective, conversion data, assets, and account setup make the format appropriate. Microsoft describes Performance Max as an AI-powered campaign solution designed to optimize across Microsoft inventory.',
  },
  {
    question: 'What is AI Max for Search?',
    answer: 'AI Max for Search is a Microsoft Advertising capability that brings AI-powered features into standard Search campaigns, including search-term matching, text customization, and final URL expansion. Availability and controls can vary by campaign and market.',
  },
  {
    question: 'Do you set up UET and conversion tracking?',
    answer: 'Yes. We can configure Universal Event Tracking, conversion goals, events, and related remarketing requirements. Microsoft describes UET as a core component for conversion tracking and remarketing.',
  },
  {
    question: 'How much does Microsoft Ads management cost?',
    answer: 'Framecipher\u2019s Microsoft Ads management starts at \u09F320,000 per month for standard management. Full-account management starts at \u09F330,000 per month, while Google Ads migration starts at \u09F315,000 one time, plus the applicable management fee. Ad spend is separate.',
  },
  {
    question: 'Do you manage Microsoft Ads outside Bangladesh?',
    answer: 'Yes. Framecipher manages campaigns for businesses targeting Bangladesh as well as international markets such as the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    question: 'How long does Microsoft Ads setup take?',
    answer: 'Most initial setups take around one to two weeks. Migration, Shopping, tracking, multi-market, and more complex campaigns may require additional preparation.',
  },
  {
    question: 'Do you guarantee Microsoft Ads results?',
    answer: 'No. We do not guarantee a specific CPC, CPA, conversion rate, traffic volume, or revenue outcome. We commit to proper setup, accurate tracking, structured optimization, transparent reporting, and recommendations based on actual campaign data.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Common questions about Microsoft Ads, Bing, LinkedIn Profile Targeting, migration,
          Shopping, UET, pricing, and market eligibility.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
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