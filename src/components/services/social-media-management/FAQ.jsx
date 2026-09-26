import { SectionIntro } from '../../Kinetic'

const faqs = [
  {
    question: 'How is social media management different from paid social advertising?',
    answer:
      'Social media management focuses on your organic presence, including strategy, content, publishing, community engagement, and reporting.\n\nPaid social advertising uses an advertising budget to reach selected audiences and support specific campaign objectives.\n\nThe two services can work together but serve different purposes.',
  },
  {
    question: 'Do you create original social media content?',
    answer:
      'Yes. Depending on your selected plan, we can create captions, graphics, carousels, short-form videos, Stories, promotional content, educational content, and other social assets.\n\nYou can also provide your own photography, video, or brand assets for us to manage and repurpose.',
  },
  {
    question: 'Which social media platforms should my business use?',
    answer:
      'There is no universal platform mix. We consider your audience, industry, business goals, content capabilities, and existing performance before recommending the platforms that make sense for your business.',
  },
  {
    question: 'How many posts do you create each month?',
    answer:
      'Content volume depends on your selected plan. The exact number of posts, videos, Stories, and other assets can be defined according to your platform mix and content requirements.',
  },
  {
    question: 'Do you manage comments and direct messages?',
    answer:
      'Yes. Community management can include comments, direct messages, mentions, basic customer questions, and spam moderation.\n\nQuestions requiring internal business information or approval are escalated to your team.',
  },
  {
    question: 'Do I need to provide photos and videos?',
    answer:
      'Not necessarily. Depending on your plan, Framecipher can create social graphics, content concepts, captions, and short-form content. If you have existing photography or video assets, we can also incorporate and repurpose them.',
  },
  {
    question: 'Do you provide Bangla and English social media content?',
    answer:
      'Yes. For Bangladesh-focused businesses, we can develop Bangla, English, or bilingual content where appropriate for the target audience and brand.',
  },
  {
    question: 'Do you serve businesses outside Bangladesh?',
    answer:
      'Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    question: 'How quickly will I see social media growth?',
    answer:
      'Social media performance varies by platform, industry, audience, starting point, content quality, and consistency. Early engagement and performance signals can appear relatively quickly, but meaningful growth usually requires consistent management over time.\n\nWe do not guarantee a specific follower count, engagement rate, or viral result.',
  },
  {
    question: 'Can you manage social media for ecommerce businesses?',
    answer:
      'Yes. Ecommerce social management can include product-focused content, educational posts, promotional campaigns, customer engagement, product discovery content, and other content designed around the customer journey.',
  },
  {
    question: 'Do you provide paid social advertising too?',
    answer:
      'Yes. Paid social advertising is available as a separate service through Framecipher’s broader paid advertising offering.\n\nWe can also coordinate organic social content and paid campaigns when both are part of your marketing strategy.',
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
          Common questions about social media management, content, community care, pricing, and
          engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                      pIdx > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
