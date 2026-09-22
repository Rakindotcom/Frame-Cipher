import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is an Amazon Ads Management Service?',
    answer: 'An Amazon Ads Management Service handles the management of Amazon advertising on behalf of a brand or seller. This typically includes campaign structure, targeting, keyword and product targeting, bids, budgets, search-term review, negative targeting, reporting, and ongoing optimization.',
  },
  {
    question: 'Which Amazon Ads formats do you manage?',
    answer: 'We manage Sponsored Products, Sponsored Brands, Sponsored Brands Video, Amazon Display Ads, Amazon DSP (where appropriate), and Brand Store coordination where eligible. Availability varies by account, product category, marketplace, and advertiser type.',
  },
  {
    question: 'Do I need an Amazon Brand Registry to work with you?',
    answer: 'No. Sponsored Products can run without Brand Registry. Some features, such as Sponsored Brands and Brand Stores, require Brand Registry or other eligibility. We work with the formats that are available for the specific account.',
  },
  {
    question: 'What is the difference between Sponsored Products and Sponsored Brands?',
    answer: 'Sponsored Products are performance-focused ads for individual products that can appear in shopping results and on product detail pages. Sponsored Brands are brand-level ads that can feature a logo, headline, video, or multiple products and can link to eligible landing pages or Brand Stores. They serve different parts of the Amazon customer journey.',
  },
  {
    question: 'What happened to Sponsored Display?',
    answer: 'Amazon has been consolidating its display advertising formats. The self-service product previously known as Sponsored Display has been positioned as Display Ads through sponsored ads within Amazon\u2019s broader display advertising offering. Amazon DSP continues to provide the more advanced programmatic advertising option.',
  },
  {
    question: 'Do you manage Amazon DSP?',
    answer: 'We assess whether DSP is appropriate before adding programmatic spend. Amazon DSP is considered when the audience strategy, budget, product portfolio, and business objectives justify a broader programmatic display and video approach.',
  },
  {
    question: 'What is ACOS?',
    answer: 'ACOS (Advertising Cost of Sales) compares advertising spend with advertising-attributed sales. It is a useful efficiency metric for campaign analysis, but it does not describe the entire economics of an Amazon business.',
  },
  {
    question: 'What is TACOS?',
    answer: 'TACOS (Total Advertising Cost of Sales) compares advertising spend with total sales, including sales not directly attributed to advertising. It is commonly used as a broader business-analysis metric rather than a standalone Amazon advertising product metric.',
  },
  {
    question: 'What is a good ACOS target?',
    answer: 'A useful ACOS target depends on product economics. We evaluate product cost, Amazon fees, fulfillment costs, contribution margin, customer value, and growth objectives. A product with a narrow margin should not automatically use the same ACOS target as a high-margin product.',
  },
  {
    question: 'Do you manage Amazon listings too?',
    answer: 'We coordinate listing and retail readiness alongside advertising, including reviews of product detail pages, Featured Offer eligibility, and inventory. Full listing optimization, design, or copywriting work is handled as scoped work separate from advertising management.',
  },
  {
    question: 'What is Amazon Attribution?',
    answer: 'Amazon Attribution is Amazon\u2019s measurement product that can help advertisers understand how external marketing channels influence Amazon shopping activity and sales. Where available, it lets us connect Google, Meta, and other external campaigns to Amazon outcomes.',
  },
  {
    question: 'Can you manage Amazon Ads alongside Google and Meta Ads?',
    answer: 'Yes. We can coordinate messaging, targeting, and measurement across Google Ads, Meta Ads, and Amazon Ads where appropriate, using Amazon Attribution and a broader acquisition view.',
  },
  {
    question: 'Can you manage Amazon Ads for multiple marketplaces?',
    answer: 'Yes. We build market-specific campaign structures, budgets, products, and messaging rather than applying one identical setup everywhere.',
  },
  {
    question: 'Can you manage Amazon Ads for Bangladesh-based businesses?',
    answer: 'Yes. Framecipher is based in Dhaka and manages Amazon advertising for Bangladesh-based businesses selling through eligible international Amazon marketplaces.',
  },
  {
    question: 'How do you handle Prime Day and major Amazon events?',
    answer: 'We plan for Prime Day and other major Amazon events where relevant to the marketplace and product category. Event planning can include budget planning, campaign structure, audience review, inventory checks, and event-specific reporting.',
  },
  {
    question: 'How long does it take to launch Amazon Ads?',
    answer: 'The first campaigns are typically structured and launched within the first week to two weeks, depending on product count, marketplace, account eligibility, data availability, and scope.',
  },
  {
    question: 'Do you guarantee Amazon Ads results?',
    answer: 'We do not guarantee a specific ACOS, TACOS, sales volume, organic ranking position, or revenue outcome. Amazon advertising is influenced by marketplace competition, product demand, pricing, reviews, inventory, account history, and other factors outside our control. We commit to structured management, transparent reporting, and continuous optimization.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionIntro eyebrow="FAQ" title="Amazon Ads Management — Frequently Asked Questions" />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 md:p-7">
                <span className="flex items-center gap-5">
                  <span className="font-heading text-sm font-bold text-frame-accent md:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg md:text-lg">
                    {faq.question}
                  </span>
                </span>
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <span className="absolute h-0.5 w-4 bg-frame-accent" />
                  <span className="absolute h-4 w-0.5 bg-frame-accent transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <div className="border-t border-frame-border p-6 pt-5 md:p-7 md:pt-5">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}