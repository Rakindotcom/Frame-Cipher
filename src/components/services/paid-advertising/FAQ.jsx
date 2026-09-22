import { SectionIntro } from '../../Kinetic'

const faqs = [
  {
    question: 'How much should I budget for paid advertising?',
    answer: 'There is no universal advertising budget. The right starting point depends on your industry, market size, customer acquisition economics, competition, conversion rate, average order value, sales cycle, and the value of a new customer. We recommend a realistic starting budget after reviewing those factors rather than assigning an arbitrary number.',
  },
  {
    question: "What's the difference between your management fee and my ad spend?",
    answer: 'The management fee pays Framecipher for strategy, setup, campaign management, optimization, reporting, and other agreed services. Your ad spend is paid separately to the advertising platform. Keeping the two separate makes the total cost of advertising easier to understand and manage.',
  },
  {
    question: 'Which paid advertising platform should my business use?',
    answer: "That depends on where your customers search, browse, compare, and make decisions. A local service business may need a different media mix from an ecommerce brand, B2B company, SaaS business, or international brand. We select platforms based on business fit rather than recommending every channel by default.",
  },
  {
    question: 'Can you manage an existing Google or Meta Ads account?',
    answer: 'Yes. We can audit an existing account, identify structural and performance issues, and then manage the campaign under an agreed scope. We can also build campaigns from scratch when there is no existing account structure worth retaining.',
  },
  {
    question: 'Do you create the ad creatives?',
    answer: 'Creative support depends on the engagement scope. Where creative is included, we can coordinate ad copy, static concepts, short-form formats, product-focused creative, testing variations, and platform-specific messaging. The objective is to create assets that support performance rather than simply make the ads look attractive.',
  },
  {
    question: 'Do you set up conversion tracking?',
    answer: 'Where tracking is included in the engagement, we configure and validate the agreed conversion events using the available website, analytics, tag-management, CRM, and advertising-platform infrastructure. The exact implementation depends on your website and technology stack.',
  },
  {
    question: 'Can you improve my landing page as part of the campaign?',
    answer: "Yes, where included in scope. We can review ad-to-landing-page alignment, offer clarity, forms, checkout flow, mobile experience, calls to action, trust signals, and other conversion barriers. Framecipher can also support landing-page and development work when the campaign requires changes beyond the ad platform.",
  },
  {
    question: 'How do you measure lead quality?',
    answer: 'We do not treat every lead as equal. Where the business has a suitable sales or CRM process, campaign analysis can consider qualified leads, booked calls, opportunities, purchases, or other downstream outcomes rather than stopping at the initial form submission.',
  },
  {
    question: 'Do you guarantee ROAS?',
    answer: 'No. A specific return depends on your offer, price, margins, market competition, customer demand, conversion rate, website performance, and many other variables. We focus on accurate tracking, structured testing, optimization, and transparent reporting instead of promising a number that cannot be controlled.',
  },
  {
    question: 'Can you manage multiple advertising platforms at once?',
    answer: 'Yes, when the business has a clear reason to use multiple channels. We coordinate the channels as part of one media strategy instead of treating every platform as a separate campaign universe.',
  },
  {
    question: 'Do you manage remarketing campaigns?',
    answer: 'Yes. Remarketing can be used to reconnect with relevant audiences who have already interacted with your business, subject to the available platform features, audience data, consent requirements, and campaign objective.',
  },
  {
    question: 'Are ChatGPT Ads available for every business?',
    answer: "No. ChatGPT Ads and Ads Manager access depend on the advertiser's country and eligibility, and availability can change as the platform expands. We assess access and suitability before including the channel in a media plan.",
  },
  {
    question: 'Do you serve businesses outside Bangladesh?',
    answer: "Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Campaign structure, targeting, budget, and messaging can be adapted for the specific market rather than copied from a single-region strategy.",
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about paid advertising budgets, tracking, platforms, and how
          engagement works.
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