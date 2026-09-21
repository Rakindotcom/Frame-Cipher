import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is off-page SEO?',
    answer: 'Off-page SEO covers everything outside your own website that can influence how search engines evaluate and understand it: backlinks, brand mentions, publisher relationships, citations, and other external signals. It works alongside on-page and technical SEO to establish authority and trust.',
  },
  {
    question: 'What is link building?',
    answer: 'Link building is the process of earning references from other websites to your content. When done properly, links function as genuine recommendations: a relevant, respected site pointing readers toward yours because the reference makes sense for both audiences. When done badly, links are bought or manufactured purely to manipulate rankings, which carries real penalty risk.',
  },
  {
    question: 'Do you buy backlinks?',
    answer: 'No. Bought links, especially in bulk, carry real penalty risk. Google\u2019s systems are increasingly good at detecting unnatural link patterns, and a resulting penalty typically costs far more time to recover from than the links would have saved. Every link we build is earned through manual outreach to relevant publishers.',
  },
  {
    question: 'How do you decide whether a website is worth targeting?',
    answer: 'We evaluate topical relevance, editorial context, real audience and organic visibility, geographic relevance, natural anchor and destination fit, and screening for spam or manipulative patterns. A site only enters the campaign when it genuinely serves readers who might find the business useful.',
  },
  {
    question: 'Do you use guest posting?',
    answer: 'Yes, but only as genuine editorial guest content. We develop topics that fit each publication, write original articles, and place links contextually and naturally. Google\u2019s spam policies discourage paid or manipulative guest-post links, so we only pursue guest content that contributes real value to the target publication.',
  },
  {
    question: 'How many backlinks do I need each month?',
    answer: 'It depends on your plan, industry, and the quality tier of placements available. We won\u2019t promise a fixed number regardless of outreach conditions \u2014 quality and relevance matter more than hitting an arbitrary count, and we report what was actually pursued and placed.',
  },
  {
    question: 'Can you build links to service and product pages?',
    answer: 'Yes. Depending on the target page\u2019s role, we advise on which destinations should earn references: homepage, service, research, category, or product pages. We pursue links to the page that genuinely helps the reader, not only to the homepage.',
  },
  {
    question: 'Do you build local backlinks in Bangladesh?',
    answer: 'Yes. For businesses in Bangladesh we build local citations and references from directories relevant to the local market, alongside outreach to international publications where the business\u2019s audience extends beyond the country.',
  },
  {
    question: 'How do you measure link-building results?',
    answer: 'We review links and referring domains, the target pages receiving references, referral traffic and brand visibility, organic search performance in Search Console, and business outcomes where they can be attributed. We don\u2019t attribute every traffic change to link building \u2014 where other factors explain movement, we say so.',
  },
  {
    question: 'What happens if my website already has spammy backlinks?',
    answer: 'We review your existing backlink profile as part of the initial audit. For genuinely harmful links we can prepare a disavow file, used carefully in line with Google\u2019s guidance, while unrelated or low-value links that aren\u2019t causing damage are left alone.',
  },
  {
    question: 'How long does link building take?',
    answer: 'An initial backlink audit is typically delivered within a week. Earning genuinely relevant placements takes real outreach time, so most campaigns run as monthly engagements, and results tend to appear gradually over months rather than as a sudden jump.',
  },
  {
    question: 'Do you guarantee Google rankings?',
    answer: 'No. Publication decisions belong to the sites we pitch, and rankings depend on factors beyond the backlink profile: competition, site quality, content, and conversion behavior. What we guarantee is genuine, manual outreach to relevant sites \u2014 never bulk-bought links or link networks that put your site at risk.',
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
          Common questions about off-page SEO, link building methods, timelines, pricing, and
          engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-muted/10 open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg marker:content-none">
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