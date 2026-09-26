import { SectionIntro, PosterButton } from '../../../Kinetic'

const faqs = [
  {
    question: 'What Does a LinkedIn Management Service Include?',
    answer:
      'A LinkedIn Management Service can include LinkedIn strategy, audience research, Company Page management, executive profile management, profile and Page optimization, thought leadership, content creation, publishing, engagement, employee advocacy, performance reporting, and ongoing optimization.\n\nThe exact scope depends on your selected management plan.',
  },
  {
    question: 'How Much Does LinkedIn Management Cost in Bangladesh?',
    answer:
      'Framecipher LinkedIn management plans start from ৳15,000 per month for Company Page management.\n\nExecutive profile management, combined company and executive management, and multi-executive programs have different pricing based on scope. Final pricing depends on content volume, number of profiles, production requirements, engagement coverage, and strategic needs.',
  },
  {
    question: 'Do You Manage LinkedIn Company Pages?',
    answer:
      'Yes. We can manage Company Page strategy, optimization, content planning, content creation, publishing, engagement, employer-brand content, company updates, and performance reporting.',
  },
  {
    question: 'Do You Manage Founder and Executive LinkedIn Profiles?',
    answer:
      'Yes. We can support founders, CEOs, directors, consultants, and other executives with profile positioning, voice development, thought leadership, ghostwritten content, publishing, engagement guidance, and performance analysis.',
  },
  {
    question: 'Do You Provide LinkedIn Ghostwriting?',
    answer:
      'Yes. Executive ghostwriting can include topic development, research, interviews or voice discovery, post writing, editing, content planning, and an approval workflow.\n\nThe goal is to create content based on the executive’s actual expertise and perspective rather than generic LinkedIn templates.',
  },
  {
    question: 'Can You Optimize My LinkedIn Profile?',
    answer:
      'Yes. Profile optimization can include your headline, About section, Experience section, keywords, Featured content, positioning, services, links, and other relevant profile elements.',
  },
  {
    question: 'Do You Optimize LinkedIn Company Pages?',
    answer:
      'Yes. Company Page optimization can include business information, About content, positioning, services or products, visual elements, relevant links, Showcase Pages where appropriate, and content alignment.',
  },
  {
    question: 'Do You Create LinkedIn Carousels and Document Posts?',
    answer:
      'Yes. Depending on your plan, we can create educational Carousels and Document posts around frameworks, case studies, industry insights, checklists, processes, research, and other useful business topics.',
  },
  {
    question: 'Do You Manage LinkedIn Comments and Engagement?',
    answer:
      'Yes. Depending on the selected scope, community management can include monitoring comments, responding to relevant interactions, strategic commenting, Page engagement, and escalation of conversations that require direct involvement from your team or executives.',
  },
  {
    question: 'Do You Provide Employee Advocacy Support?',
    answer:
      'Yes. We can help establish employee advocacy workflows, prepare share-ready content, provide participation guidance, and coordinate company-content amplification.\n\nEmployee participation remains voluntary and should reflect each employee’s professional voice.',
  },
  {
    question: 'Do You Manage LinkedIn Newsletters?',
    answer:
      'Where the feature is available and appropriate for your account, we can support newsletter strategy, topic planning, content development, publishing, and performance review.',
  },
  {
    question: 'Do You Manage LinkedIn Events?',
    answer:
      'Yes, where relevant to your business and available for the account. We can support event-related content planning, promotion, announcements, and post-event communication.',
  },
  {
    question: 'Do You Manage LinkedIn Ads?',
    answer:
      'LinkedIn Ads management is a separate paid advertising service from organic LinkedIn Management. Organic management focuses on content, profiles, Pages, engagement, thought leadership, and organic presence.\n\nPaid LinkedIn campaigns can be scoped separately when you need audience targeting, sponsored content, lead-generation campaigns, conversion tracking, or paid campaign optimization.',
  },
  {
    question: 'Should We Focus on Our Company Page or an Executive Profile?',
    answer:
      'They serve different purposes. A Company Page provides an official business presence, while executive profiles provide a more personal channel for professional expertise, experience, and thought leadership.\n\nFor many B2B businesses, coordinating both can create a more complete LinkedIn presence.',
  },
  {
    question: 'Can You Manage LinkedIn for Businesses Outside Bangladesh?',
    answer:
      'Yes. Framecipher supports businesses in Bangladesh and international markets.\n\nInternational LinkedIn management can be adapted to the target market, audience, industry, language, cultural context, competitors, and business objectives.',
  },
  {
    question: 'Can You Manage Multiple Executive Profiles?',
    answer:
      'Yes. Multi-executive LinkedIn management can be scoped for leadership teams, larger businesses, and organizations where several executives need coordinated positioning and content.',
  },
  {
    question: 'How Quickly Can LinkedIn Management Start?',
    answer:
      'The timeline depends on account access, business discovery, executive availability, content requirements, production needs, and approval speed.\n\nWe normally begin with an audit and discovery process before moving into strategy, voice development where required, content planning, production, approval, and publishing.',
  },
  {
    question: 'What Is the Difference Between LinkedIn Management and LinkedIn Marketing?',
    answer:
      'LinkedIn management focuses on the ongoing operation and growth of your organic LinkedIn presence, including Pages, profiles, content, publishing, engagement, and reporting.\n\nLinkedIn marketing is broader and can include organic management plus paid advertising, lead-generation campaigns, events, employee advocacy, outreach, and other promotional activities. Framecipher can scope organic LinkedIn management separately from paid advertising and broader B2B marketing requirements.',
  },
  {
    question: 'Do You Guarantee LinkedIn Leads or Followers?',
    answer:
      'No. We do not guarantee a specific number of leads, followers, impressions, connections, or sales.\n\nWe control the strategy, research, content, publishing workflow, engagement within scope, reporting, and optimization. Platform distribution and audience response remain outside our direct control.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl">
          <SectionIntro
            eyebrow="Questions &amp; answers"
            title="Frequently Asked Questions About LinkedIn Management"
          >
            Straight answers about scope, pricing, executive ghostwriting, company pages, and what
            LinkedIn management can realistically deliver.
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
            <PosterButton href="/contact">Request Your Custom LinkedIn Management Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
