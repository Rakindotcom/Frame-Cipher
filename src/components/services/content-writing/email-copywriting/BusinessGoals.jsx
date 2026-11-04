import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Lead Generation & Nurture',
    lead: 'For businesses that need to turn new subscribers into informed prospects. Email can support:',
    items: [
      'Lead-magnet follow-up',
      'Educational sequences',
      'Service awareness',
      'Consideration-stage messaging',
      'Consultation CTAs',
      'Long B2B buying journeys',
    ],
  },
  {
    number: '02',
    title: 'Ecommerce & Customer Retention',
    lead: 'For ecommerce brands that need communication beyond individual promotions. We can develop copy for:',
    items: [
      'Abandoned carts',
      'Post-purchase communication',
      'Product education',
      'Cross-sells',
      'Upsells',
      'Promotions',
      'Win-back campaigns',
    ],
  },
  {
    number: '03',
    title: 'SaaS & Product Onboarding',
    lead: 'Software products often require users to understand value before they become active customers. Email copy can support:',
    items: [
      'Welcome',
      'Product onboarding',
      'Feature education',
      'Activation',
      'Trial nurture',
      'Upgrade messaging',
      'Re-engagement',
    ],
  },
  {
    number: '04',
    title: 'B2B Sales Cycles',
    lead: 'B2B decisions can involve multiple stakeholders and longer consideration periods. We can write:',
    items: [
      'Lead nurture emails',
      'Post-demo follow-ups',
      'Post-call emails',
      'Educational sequences',
      'Proposal follow-ups',
      'Sales enablement emails',
      'Re-engagement campaigns',
    ],
  },
  {
    number: '05',
    title: 'Product Launches & Promotions',
    lead: 'Launch campaigns can build awareness before an offer becomes available and provide clear communication while the campaign is active. Depending on the project, this may include:',
    items: [
      'Announcement emails',
      'Pre-launch emails',
      'Early-access emails',
      'Launch emails',
      'Offer emails',
      'Deadline messaging',
      'Follow-up emails',
    ],
  },
  {
    number: '06',
    title: 'Content & Newsletter Programs',
    lead: 'For businesses that want consistent communication without making every email promotional. We can develop recurring content around:',
    items: [
      'Education',
      'Industry insights',
      'Company updates',
      'New content',
      'Product news',
      'Useful resources',
      'Customer stories',
    ],
  },
]

export default function BusinessGoals() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Business goals"
          title="Email Copywriting for Different Business Goals"
        >
          The same email program can support very different objectives. The messaging changes according to what
          the business needs the email to achieve.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-[#A855F7]">
                {block.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {block.title}
              </h3>
              <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">{block.lead}</p>

              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                  >
                    <span aria-hidden="true" className="mt-1 text-[#A855F7]">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
