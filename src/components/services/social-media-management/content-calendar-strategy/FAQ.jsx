import { SectionIntro, PosterButton } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is a Content Calendar & Strategy Service?',
    a: 'A Content Calendar & Strategy Service combines strategic content planning with an organized publishing calendar. It helps determine what your business should communicate, which platforms should carry the content, how content should be adapted, when it should be published, and how different content pieces should support broader business goals.',
  },
  {
    q: 'What is the difference between a content calendar and content strategy?',
    a: 'Content strategy defines the direction behind your content, including your audience, goals, messaging, content pillars, and platform roles. A content calendar organizes that strategy into specific topics, formats, platforms, dates, campaigns, CTAs, and production requirements.',
  },
  {
    q: 'What does a social media content calendar include?',
    a: 'Depending on the scope, a social media content calendar can include content topics, content pillars, publishing dates, platforms, formats, campaigns, CTAs, asset requirements, production deadlines, approval stages, and publishing status.',
  },
  {
    q: 'How far ahead do you plan content?',
    a: 'The planning period depends on the engagement and business requirements. Many ongoing social media programs use monthly planning cycles, while larger campaigns, launches, or international projects may require a longer planning horizon.',
  },
  {
    q: 'Do you create the content or only build the calendar?',
    a: 'The service can be provided as a strategy and planning engagement for your internal team, or it can be coordinated with Framecipher\u2019s platform-specific social media management and content production services when included in the agreed scope.',
  },
  {
    q: 'Can you build a calendar for our in-house marketing team?',
    a: 'Yes. Our Setup Only option is designed for businesses that want a professional content framework and master calendar that their internal team can execute and maintain.',
  },
  {
    q: 'Can you coordinate Facebook, Instagram, LinkedIn, TikTok, and YouTube?',
    a: 'Yes. The planning system can coordinate multiple platforms while keeping the content adapted to each platform\u2019s audience, format, communication style, and role within the wider strategy.',
  },
  {
    q: 'Can you adapt one campaign for different platforms?',
    a: 'Yes. We begin with the campaign\u2019s core message and then plan platform-specific content formats, angles, publishing sequences, and CTAs.',
  },
  {
    q: 'How is this different from using a social media scheduling tool?',
    a: 'A scheduling tool primarily helps organize or publish content at selected times. Content Calendar & Strategy goes further by determining what should be communicated, why it matters, where it should appear, how the idea should be adapted, how campaigns should be coordinated, and how future planning can respond to performance.',
  },
  {
    q: 'Do you publish the content for us?',
    a: 'Publishing depends on the selected scope. The calendar can be delivered to your internal team for execution, or it can be connected with Framecipher\u2019s platform management services when publishing is included.',
  },
  {
    q: 'Do you need to manage all our social media platforms?',
    a: 'No. We can build a content planning system around the platforms relevant to your business. The service becomes especially useful when multiple platforms need to work together, but the exact scope depends on your goals and content operation.',
  },
  {
    q: 'Do you provide Content Calendar & Strategy Service outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
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
          Straight answers about scope, planning periods, coordination, pricing, and how this differs from a
          scheduling tool.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                {faq.a.split('\n\n').map((paragraph, pIdx) => (
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

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Have a question that is not answered here? Ask during the consultation and we will answer it
            directly.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
