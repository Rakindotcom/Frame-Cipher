import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is Meta Ads management?',
    answer: 'Meta Ads management is the ongoing process of planning, launching, monitoring, testing, measuring, and optimizing advertising campaigns across Meta\u2019s advertising ecosystem, including Facebook and Instagram. It can include campaign strategy, creative development, audience inputs, Pixel and Conversions API measurement, retargeting, budget management, and performance reporting.',
  },
  {
    question: 'Is Meta Ads the same as Facebook Ads?',
    answer: "Facebook Ads are part of Meta's broader advertising ecosystem. Meta Ads can reach people across Facebook, Instagram, Messenger, and other eligible Meta placements depending on the campaign setup.",
  },
  {
    question: 'How much does Meta Ads management cost in Bangladesh?',
    answer: "Framecipher's indicative Meta Ads management plans start at ৳15,000 per month. The final fee depends on campaign complexity, creative requirements, ecommerce or lead-generation needs, target markets, and account size. Your advertising budget is separate from the management fee.",
  },
  {
    question: 'Do you manage Instagram Ads as well?',
    answer: 'Yes. Instagram advertising is included within Meta Ads management, including Feed, Stories, Reels, and other eligible placements depending on the campaign.',
  },
  {
    question: 'Do you create Meta ad creatives?',
    answer: 'Yes. Depending on the engagement scope, creative support can include static ads, carousels, short-form video concepts, Reels, Story assets, copy variations, and creative testing.',
  },
  {
    question: 'Do you use Advantage+ campaigns?',
    answer: "Where appropriate, yes. We evaluate Advantage+ sales, leads, audience, placements, creative, and other automation features based on the campaign objective and available data rather than enabling automation without a strategy. Meta currently positions Advantage+ as an AI-driven suite across campaign and individual optimization components.",
  },
  {
    question: 'Do you set up Meta Pixel and Conversions API?',
    answer: 'Yes. We can configure or audit Meta Pixel and Conversions API tracking where the technical setup supports it, along with relevant conversion events and measurement requirements.',
  },
  {
    question: 'Do you run Facebook and Instagram retargeting?',
    answer: "Yes. Retargeting can use website, product, engagement, customer, and other eligible first-party signals to reconnect with people who have already interacted with the business.",
  },
  {
    question: 'Do you manage Meta Ads outside Bangladesh?',
    answer: "Yes. Framecipher manages Meta Ads for businesses in Bangladesh and for businesses targeting international markets such as the US, UK, Australia, Canada, and UAE.",
  },
  {
    question: 'How much budget do I need for Meta Ads?',
    answer: "There is no universal budget that works for every campaign. A sensible starting budget depends on your audience size, market competition, conversion value, creative volume, offer, expected conversion rate, and sales cycle. We recommend establishing the budget around the economics of the business rather than selecting an arbitrary number.",
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
          Common questions about Meta Ads management, pricing, Advantage+, tracking, creative,
          and international campaigns.
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