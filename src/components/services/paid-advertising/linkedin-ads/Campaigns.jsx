import { SectionIntro } from '../../../Kinetic'

const campaigns = [
  {
    title: 'Sponsored Content Campaigns',
    label: 'Reach professionals in the feed',
    body: [
      'Sponsored Content places advertising into the LinkedIn feed and can support formats including single-image, video, carousel, document, and other eligible creative types.',
    ],
    listLabel: 'We can use Sponsored Content for',
    bullets: [
      'B2B demand generation',
      'Industry education',
      'Product or service discovery',
      'Thought leadership',
      'Content promotion',
      'Webinar promotion',
      'Lead generation',
      'Website conversions',
      'Retargeting',
    ],
    tail: 'Cold audiences may need a problem-led or educational message. Warmer audiences may respond better to case studies, proof, demonstrations, or a direct consultation offer. The creative and objective should change with the stage of the buying journey.',
  },
  {
    title: 'Lead Gen Form Campaigns',
    label: 'Capture leads inside LinkedIn',
    body: [
      'LinkedIn Lead Gen Forms allow prospects to submit information directly within the LinkedIn experience using pre-filled professional profile data.',
    ],
    listLabel: 'We manage',
    bullets: [
      'Lead Gen Form strategy',
      'Form field selection',
      'Qualification questions',
      'Offer and CTA alignment',
      'Confirmation experience',
      'Lead routing',
      'CRM integration where supported',
      'Lead-quality measurement',
      'Retargeting after form interaction',
    ],
    tail: 'LinkedIn recommends keeping forms focused, with three to four fields often providing a better balance between information and completion rate, while custom questions can be used when additional qualification is important. The objective is not to collect the maximum number of form submissions. It is to collect information that helps your sales team identify useful prospects.',
  },
  {
    title: 'Sponsored Messaging & Conversation Ads',
    label: 'Reach professionals in their inbox',
    body: [
      'LinkedIn offers advertising formats that can reach professionals through its messaging environment, including Message Ads and Conversation Ads.',
    ],
    listLabel: 'These formats can support',
    bullets: [
      'Consultation offers',
      'Event registration',
      'Content promotion',
      'Product education',
      'Lead qualification',
      'Sales conversations',
      'Follow-up campaigns',
      'Retargeting',
    ],
    tail: 'Conversation Ads can provide multiple calls to action and connect prospects with Lead Gen Forms, landing pages, or other relevant destinations. Messaging needs to provide a useful reason to engage. We avoid turning professional inboxes into generic promotional blasts.',
  },
  {
    title: 'Account-Based Marketing Campaigns',
    label: 'Target defined companies',
    body: [
      'For businesses selling high-value products or services to a defined set of companies, LinkedIn can support account-based marketing around named target accounts.',
    ],
    listLabel: 'We can structure campaigns around',
    bullets: [
      'Target company lists',
      'Industry',
      'Company size',
      'Job function',
      'Seniority',
      'Geography',
      'Target-account priority',
      'Existing customers',
      'Prospect accounts',
      'Multiple buying-committee roles',
    ],
    tail: 'This allows campaigns to reach several stakeholders inside a target organization rather than relying on one job title. We can also coordinate account-based advertising with sales outreach and CRM feedback where the client\u2019s sales infrastructure supports it.',
  },
  {
    title: 'Retargeting & Website Audiences',
    label: 'Reconnect with engaged professionals',
    body: [
      'B2B prospects rarely make a high-value decision after one interaction.',
    ],
    listLabel: 'Retargeting can reconnect with people who have',
    bullets: [
      'Visited key website pages',
      'Viewed high-value content',
      'Engaged with LinkedIn campaigns',
      'Interacted with Lead Gen Forms',
      'Visited product or service pages',
      'Shown other eligible engagement signals',
    ],
    tail: 'The message can then progress from education to proof, consultation, demo, or another relevant conversion.',
  },
  {
    title: 'Document, Video, Carousel & Thought Leader Ads',
    label: 'Match format to buying stage',
    body: [
      'Different formats can support different stages of a B2B buying journey.',
    ],
    listLabel: 'We can use',
    bullets: [
      'Document Ads for reports, guides, research, case studies, and presentations',
      'Video Ads for demonstrations and education',
      'Carousel Ads for multiple products, benefits, or use cases',
      'Thought Leader Ads for executive or expert content',
      'Single-image ads for focused offers and messages',
    ],
    tail: 'LinkedIn Document Ads can promote content such as ebooks, case studies, white papers, presentations, and infographics, with support for lead-generation, website-visit, website-conversion, engagement, and awareness objectives. Thought Leader Ads allow approved LinkedIn member content to be promoted through Campaign Manager, making them useful for amplifying credible founder, executive, or subject-matter content.',
  },
]

export default function Campaigns() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Campaign types"
          title="LinkedIn Ads Campaigns We Manage"
        >
          We select objectives, formats, audiences, and conversion paths based on your sales
          process rather than treating every LinkedIn campaign as a standard feed-ad setup.
        </SectionIntro>

        <div className="space-y-6 border-t-2 border-frame-border pt-12">
          {campaigns.map((campaign, index) => (
            <div key={campaign.title} className="border-2 border-frame-border bg-frame-bg">
              <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Campaign 0{index + 1} / {campaign.label}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    {campaign.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {campaign.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="border-t-2 border-frame-border/60 pt-6 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {campaign.listLabel}:
                  </span>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs md:text-sm font-semibold text-frame-fg/90">
                    {campaign.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {campaign.tail && (
                <div className="border-t-2 border-frame-border bg-frame-muted/10 px-7 py-5 md:px-10">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
                    {campaign.tail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}