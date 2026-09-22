import { SectionIntro } from '../../../Kinetic'

const businessTypes = [
  {
    title: 'Ecommerce Brands',
    body: [
      'Ecommerce businesses can benefit from ChatGPT Ads because people often use conversational search to research products, compare options, and decide what to buy. We structure campaigns around product categories and purchase intent, connect ads to relevant product pages, and set up conversion events such as purchases or cart events where the setup supports them. Creative can be built around product benefits, promotions, and category-specific messaging so the ad addresses the user at the product discovery and research stage.',
    ],
    bullets: [
      'Products discoverable during conversational research',
      'Product or category context',
      'Buyers likely to compare alternatives',
      'Promotions, product pages, cart or purchase events',
    ],
  },
  {
    title: 'SaaS & Technology Companies',
    body: [
      'SaaS and technology businesses operate in a space where users often need to understand features, integrations, and pricing before making a decision. ChatGPT Ads allow these companies to appear in the conversation during the discovery and evaluation stage. We structure campaigns around product categories, user roles, use cases, and adoption scenarios, with creative that communicates features, functions, and integrations.',
    ],
    bullets: [
      'Technical, solution-led discovery',
      'Feature, function, and integration messaging',
      'Account-type and plan-stage messaging',
      'Sign-up or trial event tracking',
    ],
  },
  {
    title: 'B2B & Professional Services',
    body: [
      'B2B and professional service businesses use ChatGPT for fast, advisory-style answers when comparing vendors and services. We structure campaigns around client types, service categories, and decision situations, with proof-driven creative such as case studies and client outcomes. Lead form submissions are set up and tracked as the conversion event.',
    ],
    bullets: [
      'Fast and advisory nature of conversational research',
      'Case-study and proof-driven creative',
      'Client-type segmentation',
      'Lead form submissions as conversion events',
    ],
  },
  {
    title: 'Local & Service Businesses',
    body: [
      'Local and service businesses need to appear as trustworthy, relevant options during conversational searches for local services. We use service-area-led context and creative, and track local-relevant conversion events such as lead enquiries or calls where the setup supports them. A clear offer, honest creative, and a credible business presence help the ad earn the click and the enquiry.',
    ],
    bullets: [
      'Local trust and relevance',
      'Service-area-led context and creative',
      'Location-based verification and brand signals',
      'Lead enquiries and calls as conversion events',
    ],
  },
]

export default function BusinessTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Tailored approach"
          title="ChatGPT Ads Strategy for Different Business Types"
        >
          ChatGPT Ads work best when the campaign structure, context, creative, and conversion
          events reflect how a specific type of business is researched and bought.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {businessTypes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business type 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 border-t border-frame-border/60 pt-4 grid gap-2 text-xs font-semibold text-frame-fg/90">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            These are starting frameworks. Where a business operates in more than one category,
            we adjust the structure to reflect its actual product mix, customer segments, and the
            markets where ChatGPT Ads are eligible.
          </p>
        </div>
      </div>
    </section>
  )
}