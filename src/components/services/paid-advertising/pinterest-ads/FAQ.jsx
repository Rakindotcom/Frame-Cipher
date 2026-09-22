import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is Pinterest Ads Management Service?',
    answer: 'Pinterest Ads Management Service covers campaign strategy, account setup, targeting, Pin creative, catalog advertising, conversion tracking, optimization, and performance reporting. The final scope depends on the campaign objective and business requirements.',
  },
  {
    question: 'How do Pinterest Ads work?',
    answer: 'Pinterest Ads help businesses reach people as they discover products, ideas, and content on Pinterest. Campaign performance depends on the selected objective, targeting, creative, budget, bidding strategy, and conversion setup. Pinterest currently supports objectives including Brand Awareness, Video Completion, Consideration, Leads, and Sales.',
  },
  {
    question: 'What are Pinterest\u2019s current campaign objectives?',
    answer: 'Pinterest\u2019s current Ads Manager includes Consideration, Leads, and Sales, along with Brand Awareness and Video Completion objectives. Pinterest has also replaced the older Conversions and Catalog Sales objectives with Leads and Sales in its updated campaign structure. Existing legacy campaigns remain editable during the transition period.',
  },
  {
    question: 'What is Pinterest Performance+?',
    answer: 'Pinterest Performance+ combines automation and AI features across campaign setup, targeting, bidding, and eligible creative optimization. It is currently available for Consideration, Leads, and Sales campaigns. We use Performance+ where it makes sense rather than assuming every campaign should be fully automated.',
  },
  {
    question: 'What is an Actalike audience?',
    answer: 'An Actalike audience helps advertisers reach people who behave similarly to an existing audience. Depending on the setup, source audiences can include customer lists, site visitors, engagement audiences, or other supported audience types.',
  },
  {
    question: 'Do you provide Pinterest Tag and Conversions API setup?',
    answer: 'Yes. We can implement Pinterest Tag, Conversions API, conversion events, testing, and deduplication where the campaign\u2019s technical setup supports them. Pinterest currently supports both Tag and Conversions API for conversion measurement.',
  },
  {
    question: 'Do I need a product catalog to run Pinterest Ads?',
    answer: 'No. A catalog is necessary for catalog-based Shopping Ads, but other campaigns can use standard Pin creative. Pinterest currently allows Product Catalog as a creative source for applicable Consideration and Sales campaigns.',
  },
  {
    question: 'Can you manage Pinterest Shopping Ads?',
    answer: 'Yes. For eligible ecommerce accounts, we can manage catalog setup, Product Groups, Shopping Ads, dynamic retargeting, creative, tracking, and optimization.',
  },
  {
    question: 'Can Pinterest Ads retarget previous website visitors?',
    answer: 'Yes. Pinterest supports audience targeting using site visitors, customer lists, engagement audiences, and Actalike audiences.',
  },
  {
    question: 'How much should I budget for Pinterest Ads?',
    answer: 'There is no universal budget that works for every business. The right media budget depends on the market, campaign objective, audience size, product or service, conversion value, competition, and available data. We recommend setting the test budget after reviewing the actual campaign requirements.',
  },
  {
    question: 'How is Pinterest different from Meta Ads?',
    answer: 'Meta is primarily built around social discovery, engagement, and audience-based advertising. Pinterest combines visual discovery with search and planning behavior. That makes Pinterest particularly relevant for products, projects, occasions, and categories where customers may research or save ideas before buying. The right channel mix depends on the business and customer journey.',
  },
  {
    question: 'Can you manage Pinterest alongside Google Ads and Meta Ads?',
    answer: 'Yes. Framecipher can coordinate Pinterest with Google Ads, Meta Ads, remarketing, SEO, and other paid channels so campaign objectives, tracking, landing pages, and audience strategies work together.',
  },
  {
    question: 'Does Pinterest work for service businesses?',
    answer: 'It can, especially when the service is visual or connected to planning. Interior design, weddings, photography, beauty, travel, home improvement, events, and other visually driven services can be potential fits. We assess the market and category before recommending Pinterest as a primary acquisition channel.',
  },
  {
    question: 'Do you provide Pinterest SEO as well?',
    answer: 'Yes, as a separate or combined service. Pinterest Ads and Pinterest SEO are different disciplines, but paid and organic strategies can be coordinated around related keyword, content, and landing-page themes.',
  },
  {
    question: 'Do you provide Pinterest Ads management from Bangladesh?',
    answer: 'Yes. Framecipher is based in Dhaka and manages Pinterest Ads from Bangladesh for eligible advertiser accounts targeting supported Pinterest markets. We verify account eligibility and market availability before campaign launch because Pinterest advertising access varies by market and account setup.',
  },
  {
    question: 'Can a Bangladesh-based business target customers in the US, UK, Canada, or other international markets?',
    answer: 'It depends on the advertiser account, billing country, target market, and Pinterest\u2019s current advertising requirements. We assess eligibility before recommending the campaign structure.',
  },
  {
    question: 'How long does it take to see Pinterest Ads results?',
    answer: 'Initial delivery data can appear soon after launch. Meaningful optimization takes longer and depends on spend, conversion volume, campaign objective, creative variety, and learning. We establish a baseline first and then use the data to guide optimization.',
  },
  {
    question: 'How much does Pinterest Ads Management Service cost?',
    answer: 'Framecipher\u2019s Pinterest Ads Management Service starts at \u09F325,000 per month. Catalog and Shopping management starts at \u09F340,000 per month, while Pinterest Creative Support starts at \u09F315,000 per month. Advertising spend is separate from management fees.',
  },
  {
    question: 'Do you guarantee Pinterest Ads results?',
    answer: 'No. We do not guarantee a fixed ROAS, CPA, CPC, conversion rate, or revenue outcome. We commit to correct setup, reliable measurement, disciplined testing, active optimization, and transparent reporting.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions"
        >
          Common questions about Pinterest Ads management, campaign objectives, Performance+,
          catalog and Shopping Ads, tracking, pricing, eligibility, and how Pinterest fits into a
          broader channel strategy.
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