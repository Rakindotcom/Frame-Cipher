import { SectionIntro, PosterButton } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'What Does an Instagram Management Service Include?',
    answer:
      'An Instagram Management Service can include strategy, audience and competitor research, profile optimization, Instagram SEO, content planning, Reels, Feed posts, Carousels, Stories, publishing, community management, DMs, reporting, and ongoing optimization.\n\nThe exact scope depends on the selected management plan.',
  },
  {
    question: 'How Much Does Instagram Management Cost in Bangladesh?',
    answer:
      'Framecipher Instagram management plans start from ৳15,000 per month.\n\nHigher plans can include more content, Reels production, community management, reporting, and broader strategic support. Final pricing depends on your required scope, content volume, production requirements, and management coverage.',
  },
  {
    question: 'Do You Create Instagram Reels?',
    answer:
      'Yes. Depending on the selected package, Reels can include concept development, hooks, scripts, editing, captions, on-screen text, covers, and publishing preparation.',
  },
  {
    question: 'Do You Create Instagram Posts and Carousels?',
    answer:
      'Yes. We can create Feed posts, educational Carousels, product content, promotional graphics, social-proof content, and other branded content based on your strategy.',
  },
  {
    question: 'Do You Manage Instagram Stories?',
    answer:
      'Yes. Stories can cover product updates, promotions, FAQs, polls, questions, behind-the-scenes content, customer feedback, announcements, and other interactive formats.',
  },
  {
    question: 'Do You Manage Instagram DMs and Comments?',
    answer:
      'Yes. Community management can include comments, DMs, Story replies, basic customer questions, and inquiry escalation according to your selected plan.\n\nFor complex customer-service or sales situations, we follow an agreed escalation process.',
  },
  {
    question: 'Do You Optimize Instagram Profiles?',
    answer:
      'Yes. Profile optimization can include your username, profile name, bio, category, contact information, link strategy, highlights, pinned posts, and calls to action.',
  },
  {
    question: 'Do You Provide Instagram SEO?',
    answer:
      'Yes. We consider Instagram search and discoverability when optimizing profile information, content topics, captions, and other relevant account elements.\n\nThe goal is to make your account and content clearer and more relevant to the searches and discovery behavior of your target audience.',
  },
  {
    question: 'Do I Need to Provide Photos or Videos?',
    answer:
      'It depends on the package and production requirements. If your business can provide product images, footage, brand assets, or raw video, we can incorporate them into the content workflow.\n\nFor packages that include broader production support, we can also discuss available content-production options.',
  },
  {
    question: 'Can You Manage an Existing Instagram Account?',
    answer:
      'Yes. We can manage an existing account after reviewing its current profile, content, audience, performance, access structure, and business goals.\n\nThe process usually begins with an account audit and business discovery.',
  },
  {
    question: 'Can You Manage Instagram for Ecommerce Businesses?',
    answer:
      'Yes. Ecommerce Instagram management can include product-focused Reels, Carousels, Stories, product education, launches, UGC, social proof, customer inquiries, and other product-discovery content.\n\nWhere eligible and available, relevant Instagram commerce features can also be incorporated into the strategy.',
  },
  {
    question: 'Do You Manage Instagram Ads?',
    answer:
      'Paid Instagram advertising is a separate service from organic Instagram management.\n\nIf you need paid campaigns, creative testing, audience targeting, conversion tracking, or Meta Ads management, we can scope those requirements separately.',
  },
  {
    question: 'Do You Manage Instagram Accounts Outside Bangladesh?',
    answer:
      'Yes. Framecipher supports businesses in Bangladesh and international markets.\n\nInternational campaigns are planned around the target market, audience, language, cultural context, content requirements, and business objectives.',
  },
  {
    question: 'How Quickly Can Instagram Management Start?',
    answer:
      'The timeline depends on account access, discovery, content requirements, production needs, and approval speed.\n\nAfter onboarding, we begin with account and business discovery, followed by strategy, content planning, production, approval, and publishing.',
  },
  {
    question: 'What Is the Difference Between Instagram Management and Instagram Marketing?',
    answer:
      'Instagram management focuses on the ongoing operation of your Instagram presence, including strategy, content, publishing, community management, profile optimization, and reporting.\n\nInstagram marketing can include those activities plus broader promotional campaigns, creator partnerships, paid advertising, launches, and other growth activities. Framecipher can scope organic Instagram management separately from paid advertising and broader campaign requirements.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl">
          <SectionIntro
            eyebrow="Questions &amp; answers"
            title="Frequently Asked Questions About Instagram Management"
          >
            Straight answers about scope, pricing, content production, community management, and what a
            management engagement can realistically deliver.
          </SectionIntro>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:p-6 md:text-base">
                  <span className="flex items-baseline gap-3 md:gap-4">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t-2 border-frame-border p-5 md:p-6">
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

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            If your question is not covered here, ask directly during the audit call.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request Your Custom Instagram Management Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
