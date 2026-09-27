import { SectionIntro } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    q: 'What is Community Management Service?',
    a: 'Community Management Service is the ongoing management of audience interactions across social and relevant review platforms. It can include comments, DMs, reviews, moderation, social listening, proactive engagement, escalation, and reporting.',
  },
  {
    q: 'What is the difference between community management and social media management?',
    a: 'Community management focuses primarily on audience interaction, response, moderation, feedback, and relationship building. Social media management is broader and may include strategy, content creation, publishing, community management, reporting, and platform optimization.',
  },
  {
    q: 'Do you manage comments and direct messages?',
    a: 'Yes. Comment and direct message management can be included for the platforms covered by your selected scope.',
  },
  {
    q: 'Do you respond to negative comments?',
    a: 'Yes. We can respond to legitimate negative feedback professionally and according to your approved response guidelines. Serious or sensitive issues can be escalated to your team instead of being handled with a generic public reply.',
  },
  {
    q: 'Can you manage Google reviews?',
    a: 'Yes. Google Business Profile review management can be included where the required access and scope are available. Google allows verified businesses and authorized managers to respond to customer reviews.',
  },
  {
    q: 'Do you delete negative reviews?',
    a: 'No. We do not remove legitimate criticism simply because it is negative. If content appears to violate a platform’s policies, we can help identify and report it through the appropriate process.',
  },
  {
    q: 'What happens when a customer asks something only our team can answer?',
    a: 'We escalate the conversation according to the agreed workflow. Your designated team can provide the required information or resolution, while we can track the escalation where that is included in the scope.',
  },
  {
    q: 'Do you provide 24/7 community management?',
    a: 'Coverage depends on your selected plan and agreed operating hours. We do not promise 24/7 coverage unless it is specifically included in your proposal.',
  },
  {
    q: 'Do you manage communities on Facebook, Instagram, LinkedIn, TikTok, and YouTube?',
    a: 'Yes. Platform coverage can include Facebook, Instagram, LinkedIn, TikTok, and YouTube, depending on your selected scope.',
  },
  {
    q: 'Can community management be bundled with social media management?',
    a: 'Yes. Community management can be provided as a standalone service or coordinated with Framecipher’s broader social media management, platform management, and content strategy services.',
  },
  {
    q: 'Do you provide community management outside Bangladesh?',
    a: 'Yes. We work with businesses serving Bangladesh and international markets including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How quickly can you start?',
    a: 'After the scope, access, response guidelines, escalation process, and required approvals are confirmed, the initial setup can typically begin within the first week. The exact timeline depends on the number of platforms and complexity of the engagement.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions About Community Management"
        >
          Straight answers about scope, platforms, review management, escalation, coverage hours, and how
          community management differs from broader social media management.
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
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
