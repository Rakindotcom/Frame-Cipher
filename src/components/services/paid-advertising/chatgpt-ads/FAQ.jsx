import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What are ChatGPT Ads and when should I use them?',
    answer: 'ChatGPT Ads are advertising placements that appear within ChatGPT conversational AI responses. They are shown below ChatGPT answers and are clearly identified as advertisements, connecting with users who are actively researching, comparing, or deciding. The channel is most useful when your offer fits conversational research and decision-making, and when the advertiser setup is eligible for the platform.',
  },
  {
    question: 'How do ChatGPT Ads work?',
    answer: 'A ChatGPT Ad is an advertisement shown alongside ChatGPT\u2019s response. It can include advertiser identification, a headline, a description, a landing page, and image creative. The system decides when an ad may be relevant using campaign settings, advertiser-provided context hints, the ad\u2019s landing page, title and copy, and, where applicable, signals from the user\u2019s broader ChatGPT experience.',
  },
  {
    question: 'How is targeting done on ChatGPT Ads?',
    answer: 'Targeting on ChatGPT Ads is context-focused rather than keyword-focused. Advertisers provide context hints at the ad-group level that describe situations, customer needs, topics, or conversations where an offering may be relevant. OpenAI states these hints are not exact-match keywords and do not guarantee delivery for specific conversations. Campaign objectives, budgets, locations, and ad structure still function like on other advertising platforms.',
  },
  {
    question: 'Where do ChatGPT Ads appear?',
    answer: 'ChatGPT Ads appear below ChatGPT responses and are clearly identified as advertisements. The exact rendering can vary across surfaces and depends on the specific campaign and platform settings. Ads are not part of the generated answer itself, which matters for how creative should be written and what the landing page needs to deliver.',
  },
  {
    question: 'What does a ChatGPT Ads management service include?',
    answer: 'A ChatGPT Ads management service typically covers account and campaign setup, context and intent targeting, ad creative and copy, conversion tracking and measurement, campaign management and optimization, and performance reporting. Framecipher includes all of these across its management packages.',
  },
  {
    question: 'Can conversions be improved on ChatGPT Ads?',
    answer: 'Yes, where the platform supports it. We set up conversion-aware campaigns toward supported events such as purchases, registrations, and lead submissions, implement conversion tracking through the OpenAI Pixel and Conversions API where appropriate, and optimize creative, context, budgets, and landing pages based on what the data shows.',
  },
  {
    question: 'Can I manage ChatGPT Ads from Bangladesh?',
    answer: 'OpenAI Ads Manager is not yet available directly in Bangladesh. However, some Bangladeshi businesses can still run ChatGPT Ads in specific supported cases, such as where they have access to an eligible advertiser account or advertiser representative arrangement. We confirm eligibility before planning the campaign.',
  },
  {
    question: 'Can Bangladeshi businesses target customers in other countries?',
    answer: 'Where the advertiser setup is eligible, we can plan and manage ChatGPT Ads for international audiences such as the US, UK, Canada, Australia, India, Saudi Arabia, and UAE. The target market must be supported by the eligible advertiser setup under OpenAI\u2019s current requirements.',
  },
  {
    question: 'How does ChatGPT Ads compare to Google Ads?',
    answer: 'Google Ads matches your ads to search queries using keywords and query matching. ChatGPT Ads are delivered within conversational AI, using context rather than exact-match keywords to decide relevance. ChatGPT Ads give you a presence in AI-assisted research and decision-making, while Google Ads captures active search demand. Each has different data, formats, and maturity, and the right mix depends on your market and funnel.',
  },
  {
    question: 'What is AEO/GEO and how does it relate to ChatGPT Ads?',
    answer: 'AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) improve how AI search engines understand, cite, and represent your content in AI-generated answers. ChatGPT Ads are the paid surface of that same AI-driven discovery. Running both lets a brand appear in paid placements and organic AI answers with consistent, credible messaging.',
  },
  {
    question: 'What is the difference between ChatGPT Ads and Sponsored Agents?',
    answer: 'ChatGPT Ads are ads shown alongside ChatGPT responses. Sponsored Agents let users start a conversation with an AI representative of a business after interacting with an advertisement. Sponsored Agents are currently limited to selected advertisers in an alpha test, while ChatGPT Ads are available through Ads Manager in eligible markets.',
  },
  {
    question: 'What is the cost of ChatGPT Ads management?',
    answer: 'Framecipher\u2019s ChatGPT Ads management plans start at \u09F312,000 one-time for Setup, \u09F315,000/month for Management, \u09F325,000/month for Growth, and \u09F340,000+/month for International or Multi-Market engagements. The management fee is separate from your media budget. Final pricing depends on scope and is confirmed in a written proposal.',
  },
  {
    question: 'Which businesses typically benefit most from ChatGPT Ads?',
    answer: 'Businesses whose offerings are researched and compared conversationally, such as ecommerce brands, SaaS and technology companies, B2B and professional services, and local or service businesses. The channel requires an eligible advertiser setup and a test-minded, data-driven approach rather than an expectation of instant scale.',
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
          Common questions about ChatGPT Ads, context targeting, eligibility, reporting,
          pricing, AEO/GEO, and how the channel compares to traditional search advertising.
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