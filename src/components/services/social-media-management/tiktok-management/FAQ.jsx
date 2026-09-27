import { SectionIntro, PosterButton } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    q: 'What Does a TikTok Management Service Include?',
    a: 'A TikTok Management Service can include strategy, audience research, content planning, video production, TikTok SEO, publishing, community management, trend research, creator coordination, reporting, testing, and ongoing optimization. The exact scope depends on the selected plan.',
  },
  {
    q: 'How Much Does TikTok Management Cost in Bangladesh?',
    a: 'Framecipher’s TikTok management plans start at ৳25,000 per month. Our Growth plan is ৳40,000 per month, while larger or combined organic and paid programs are customized according to scope.',
  },
  {
    q: 'How Many TikTok Videos Should a Business Post Each Week?',
    a: 'There is no universal number that works for every business. The right publishing frequency depends on your production capacity, content quality, audience, goals, and available resources. Our Standard plan includes 8 videos per month. Growth includes 16 videos per month.',
  },
  {
    q: 'Do You Create TikTok Videos?',
    a: 'Yes. Our TikTok management service can include short-form video concepts, scripting, hooks, editing, captions, on-screen text, and other agreed production requirements. Filming requirements are discussed separately when needed.',
  },
  {
    q: 'Do You Write TikTok Scripts?',
    a: 'Yes. We can develop scripts, talking points, hooks, educational structures, product demonstrations, founder-led content, and other formats based on the agreed strategy.',
  },
  {
    q: 'Do You Provide TikTok SEO?',
    a: 'Yes. Our TikTok SEO approach includes topic research, search-aware content planning, captions, relevant terminology, on-screen context, profile optimization, pinned-content planning, and discoverability improvements. We do not promise specific rankings because TikTok visibility depends on platform and audience behavior.',
  },
  {
    q: 'Do You Manage TikTok Comments and DMs?',
    a: 'Yes. Community management can include comment monitoring, responses, customer questions, and DM handling within the selected scope. Response volume, monitoring frequency, and escalation procedures are defined in your service plan.',
  },
  {
    q: 'Do You Research TikTok Trends?',
    a: 'Yes. We monitor relevant trends, formats, topics, sounds, and cultural opportunities. We then decide which opportunities fit your brand and audience. We do not recommend copying every trend simply because it is popular.',
  },
  {
    q: 'Do I Need to Provide Video Footage?',
    a: 'Not always. Depending on your plan, we can work with existing footage, client-supplied assets, creator content, UGC, planned production, and edited raw footage. If on-location filming is required, the production scope is agreed separately.',
  },
  {
    q: 'Can You Film TikTok Content for My Business?',
    a: 'Filming availability depends on location and project requirements. For Bangladesh-based production, we can discuss filming requirements, locations, talent, equipment, and production scope during onboarding. For international businesses, remote production, supplied footage, creator content, or other agreed production models may be used.',
  },
  {
    q: 'Can You Manage an Existing TikTok Account?',
    a: 'Yes. We can manage an existing TikTok account without requiring you to start over. We first review the current profile, content history, audience, performance, and positioning before recommending changes. Existing account data can help inform the new content strategy.',
  },
  {
    q: 'Do You Manage TikTok LIVE?',
    a: 'TikTok LIVE support can be included where the account and market are eligible, and the service scope requires it. Our standard support focuses on planning, content preparation, promotional content, talking points, and audience-question planning. Full LIVE hosting, technical production, or real-time moderation can be scoped separately.',
  },
  {
    q: 'Do You Manage TikTok Shop?',
    a: 'TikTok Shop support can be discussed for eligible markets and businesses. Depending on the agreed scope, this may include Shop-focused content planning, product content, creator or affiliate coordination, and promotional content. The exact service depends on market availability, account eligibility, product requirements, and the agreed scope.',
  },
  {
    q: 'Do You Manage TikTok Ads?',
    a: 'Yes, but TikTok Ads Management is separate from standard organic TikTok management. We can coordinate organic content with paid campaigns when both services are included. Ad spend is separate from management fees.',
  },
  {
    q: 'Can You Manage TikTok for Businesses Outside Bangladesh?',
    a: 'Yes. Framecipher supports businesses targeting international markets, including the US, UK, Australia, Canada, and UAE. Content strategy is adapted to the target market, audience, language, cultural context, and business objectives.',
  },
  {
    q: 'How Long Does TikTok Management Take to Start?',
    a: 'After onboarding and receiving the required account and brand information, we begin with an account and business review. The first strategy and content cycle is then prepared according to the agreed scope and approval process.',
  },
  {
    q: 'What Do You Need From Me Before TikTok Management Starts?',
    a: 'Depending on the project, we may request TikTok account access, brand guidelines, product or service information, existing content assets, target audience information, website or landing-page information, previous performance data, brand references, and a content approval contact. We keep the onboarding requirements relevant to the actual scope.',
  },
  {
    q: 'How Does the TikTok Content Approval Process Work?',
    a: 'We define the approval process during onboarding. Depending on the selected workflow, content may be reviewed before publishing or managed through an agreed pre-approved content framework. The service scope defines revision rounds, approval deadlines, and publishing responsibilities.',
  },
  {
    q: 'Do You Guarantee TikTok Followers or Viral Videos?',
    a: 'No. We do not guarantee follower numbers, views, viral videos, or specific TikTok visibility. We focus on strategy, content quality, consistent publishing, community management, measurement, testing, and continuous optimization.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions About TikTok Management"
        >
          Straight answers about scope, pricing, publishing frequency, production, trends, LIVE, Shop,
          ads, and what TikTok management can realistically deliver.
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
            Have a question that is not answered here? Ask during the audit and we will answer it directly.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free TikTok Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
