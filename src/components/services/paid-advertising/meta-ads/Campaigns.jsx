import { SectionIntro } from '../../../Kinetic'

const campaigns = [
  {
    title: 'Sales & Advantage+ Sales Campaigns',
    label: 'Convert demand',
    body: [
      'For ecommerce and other businesses where the desired outcome is a purchase or measurable sales action, we build campaigns around conversion and value signals.',
      "Meta's Advantage+ sales campaigns are designed as an automated solution that uses AI to optimize delivery toward people more likely to take action. Automation does not remove the need for strategy. It makes the quality of the inputs more important.",
    ],
    listLabel: 'Depending on the account, this can include',
    bullets: [
      'Sales campaigns',
      'Advantage+ sales campaigns',
      'Product and catalog campaigns',
      'Dynamic product retargeting',
      'Conversion-focused creative',
      'Product-level performance analysis',
      'Revenue and conversion-value measurement',
    ],
    tail: 'We focus on the product offer, creative diversity, tracking quality, customer data, budget, and post-click experience that the system learns from.',
  },
  {
    title: 'Lead Generation Campaigns',
    label: 'Generate qualified enquiries',
    body: [
      'For service businesses, B2B companies, education providers, local businesses, and other lead-driven organizations, Meta can generate enquiries through website forms, instant forms, calls, messaging, or other lead flows.',
    ],
    listLabel: 'We can manage',
    bullets: [
      'Website conversion campaigns',
      'Instant forms',
      'Lead qualification flows',
      'Click-to-Messenger campaigns',
      'Click-to-WhatsApp campaigns',
      'Call-focused campaigns where supported',
      'Lead-quality measurement',
      'Retargeting for non-converted prospects',
    ],
    tail: 'Where the sales process supports it, we also look beyond the initial lead and consider qualified leads, appointments, opportunities, or downstream sales.',
  },
  {
    title: 'Catalog & Product Ads',
    label: 'Product-level advertising',
    body: [
      'Product advertising requires more than uploading a product catalog and switching on a campaign.',
    ],
    listLabel: 'We review',
    bullets: [
      'Product catalog structure',
      'Product information',
      'Product sets',
      'Pricing and availability',
      'Product imagery',
      'Product-page relevance',
      'Catalog diagnostics',
      'Product-level performance',
      'Retargeting audiences',
    ],
    tail: 'For ecommerce brands, catalog-based campaigns can connect product discovery, prospecting, and remarketing inside the broader sales strategy.',
  },
  {
    title: 'Reels, Stories & Feed Ads',
    label: 'Placement-native creative',
    body: [
      'Meta placements behave differently, and creativity needs to fit the environment where it appears.',
    ],
    listLabel: 'We create and manage assets for formats such as',
    bullets: [
      'Facebook Feed',
      'Instagram Feed',
      'Instagram Stories',
      'Facebook Stories',
      'Instagram Reels',
      'Facebook Reels',
      'Carousel ads',
      'Static image ads',
      'Short-form video',
    ],
    tail: 'For Reels and other vertical placements, creative should be designed for mobile viewing rather than simply resized from a desktop advertisement. Meta recommends vertical creative design for Reels and supports Advantage+ placements and creative optimization across its ecosystem.',
  },
  {
    title: 'Retargeting & Remarketing',
    label: 'Reconnect with warm audiences',
    body: [
      'Not every prospect converts on the first interaction.',
    ],
    listLabel: 'We can build remarketing audiences from relevant signals such as',
    bullets: [
      'Website visitors',
      'Product viewers',
      'Add-to-cart users',
      'Initiated checkouts',
      'Previous customers',
      'Facebook or Instagram engagement',
      'Video viewers',
      'Lead interactions',
      'Customer lists',
    ],
    tail: 'The objective is not to show the same ad to everyone who visited the website. We build audience segments around what people actually did and what they still need before taking the next step.',
  },
  {
    title: 'Messenger & WhatsApp Campaigns',
    label: 'Close through conversations',
    body: [
      'For businesses that close sales or qualify enquiries through conversations, Meta can connect advertising directly with messaging.',
    ],
    listLabel: 'We can structure campaigns around',
    bullets: [
      'Click-to-Messenger',
      'Click-to-WhatsApp',
      'Lead qualification',
      'Product questions',
      'Appointment enquiries',
      'Sales conversations',
      'Retargeting engaged users',
    ],
    tail: 'For Bangladesh businesses, messaging can be particularly useful where customers prefer to ask questions before ordering, especially for products or services with multiple purchase considerations.',
  },
]

export default function Campaigns() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Campaign types"
          title="Meta Ads Campaigns We Manage"
        >
          We select campaign types around your business objective rather than forcing every
          account into the same structure.
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