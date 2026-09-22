import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'How much should I budget for Google Ads?',
    answer: 'There is no universal Google Ads budget that works for every business. A practical starting budget depends on your market, competition, average customer value, expected conversion rate, and available demand. We recommend establishing a realistic test budget based on your business economics rather than choosing an arbitrary number.',
  },
  {
    question: 'How much does Google Ads management cost in Bangladesh?',
    answer: "Framecipher's Google Ads management plans currently start at ৳15,000 per month, with the management fee varying based on campaign complexity, ecommerce requirements, market coverage, and account size. Your advertising spend is separate from the management fee.",
  },
  {
    question: 'Do you manage existing Google Ads accounts?',
    answer: "Yes. We can audit, restructure, and manage an existing account rather than requiring you to start again. We first review the existing campaign structure, tracking, keywords, search terms, bidding, budgets, and performance before recommending major changes.",
  },
  {
    question: 'What types of Google Ads campaigns do you manage?',
    answer: 'We manage Google Search, Shopping, Performance Max, Display, YouTube, and remarketing campaigns, depending on the business model and campaign objectives. We do not recommend every campaign type for every account. Campaign selection should follow the customer journey and business goal.',
  },
  {
    question: 'Do you manage Google Shopping and Performance Max?',
    answer: 'Yes. For ecommerce businesses, we can manage Shopping and Performance Max alongside Merchant Center, product data, conversion tracking, product segmentation, campaign budgets, and performance analysis.',
  },
  {
    question: 'How do you track leads, calls, and sales?',
    answer: 'Tracking depends on the business model. We can configure and review website conversions, lead forms, phone calls, ecommerce purchases, and other defined conversion actions. Where the technical setup supports it, measurement can also extend to enhanced conversions and downstream lead or sales data.',
  },
  {
    question: 'Do you set up GA4, Google Tag Manager, and conversion tracking?',
    answer: 'We can configure and review the relevant tracking setup as part of campaign measurement, depending on the website, account structure, and technical requirements. The objective is to make sure Google Ads is receiving useful conversion signals before major optimization or scaling decisions are made.',
  },
  {
    question: 'How long does it take to optimize a Google Ads campaign?',
    answer: 'Initial setup can often be completed within one to two weeks, depending on the account and requirements. Optimization continues after launch because meaningful campaign management depends on actual search, conversion, and performance data.',
  },
  {
    question: 'Do you manage Google Ads campaigns outside Bangladesh?',
    answer: "Yes. Framecipher manages campaigns for businesses in Bangladesh as well as clients targeting international markets such as the US, UK, Australia, Canada, and UAE. International campaigns are planned around the search behavior, competition, targeting, and commercial conditions of each market.",
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
          Common questions about Google Ads budgets, campaign types, pricing, tracking, and
          international management.
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